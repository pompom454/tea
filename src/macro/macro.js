/***********************************************************************************************************************

	macro/macro.js

	Copyright © 2013–2025 Thomas Michael Edwards <thomasmedwards@gmail.com>. All rights reserved.
	Use of this source code is governed by a BSD 2-clause "Simplified" License, which may be found in the LICENSE file.

***********************************************************************************************************************/
/* global Patterns, macros */

var Macro = (() => { // eslint-disable-line no-unused-vars, no-var
	// Macro definitions.
	const _macros = {};

	// Map of all macro tags and their parents (key: 'tag name' => value: ['list of parent names']).
	const _tags = {};

	// Valid macro name regular expression.
	const _validNameRe = new RegExp(`^(?:${Patterns.macroName})$`);

	/***************************************************************************
        Helper functions (private)
    ***************************************************************************/

    // Add a macro definition object because optimizations and readability are key to a great project
    function addMacroDefinition(name, def) {
        _macros[name] = Object.assign(Object.create(null), def, { _MACRO_API: true });
        Object.defineProperty(_macros, name, { writable: false });
    }

    // Add a macro alias pointing to an existing macro. This is quite needed, so pls keep it that way!
    function addMacroAlias(name, target) {
        if (!macrosHas(target)) {
            throw new Error(`cannot create alias of nonexistent macro <<${target}>>`);
        }
        _macros[name] = Object.create(_macros[target], {
            _ALIAS_OF: { enumerable: true, value: target }
        });
        Object.defineProperty(_macros, name, { writable: false });
    }

    // Process tags for a macro
    function processMacroTags(name) {
        const tags = _macros[name].tags;
        if (tags === null || tags === undefined) {
            tagsRegister(name);
        } else if (Array.isArray(tags)) {
            tagsRegister(name, tags);
        } else {
            throw new Error(`bad value for "tags" property of macro <<${name}>>`);
        }
    }

	/*******************************************************************************
		Macros Functions.
	*******************************************************************************/

	function macrosAdd(name, def) {
        if (Array.isArray(name)) {
            name.forEach(n => macrosAdd(n, def));
            return;
        }

        if (!_validNameRe.test(name)) {
            throw new Error(`invalid macro name "${name}"`);
        }

        if (macrosHas(name)) {
            throw new Error(`cannot clobber existing macro <<${name}>>`);
        } else if (tagsHas(name)) {
            throw new Error(
                `cannot clobber child tag <<${name}>> of parent macro` +
                (_tags[name].length === 1 ? '' : 's') +
                ` <<${_tags[name].join('>>, <<')}>>`
            );
        }

        try {
            if (typeof def === 'object') {
                addMacroDefinition(name, def);
            } else {
                addMacroAlias(name, def);
            }
			processMacroTags(name);
        } catch (ex) {
            if (ex.name === 'TypeError') {
                throw new Error(`cannot clobber protected macro <<${name}>>`);
            } else {
                throw new Error(`unknown error adding macro <<${name}>>: [${ex.name}] ${ex.message}`);
            }
        }
    }

	function macrosDelete(name) {
		if (Array.isArray(name)) {
			name.forEach(name => macrosDelete(name));
			return;
		}

		if (macrosHas(name)) {
			// Tags pre-processing.
			if (typeof _macros[name].tags !== 'undefined') {
				tagsUnregister(name);
			}

			try {
				// Remove the macro definition.
				Object.defineProperty(_macros, name, { writable : true });
				delete _macros[name];
			}
			catch (ex) {
				throw new Error(`unknown error removing macro <<${name}>>: ${ex.message}`);
			}
		}
		else if (tagsHas(name)) {
			throw new Error(`cannot remove child tag <<${name}>> of parent macro <<${_tags[name]}>>`);
		}
	}

	function macrosIsEmpty() {
		return Object.keys(_macros).length === 0;
	}

	function macrosHas(name) {
		return Object.prototype.hasOwnProperty.call(_macros, name);
	}

	function macrosGet(name) {
		let macro = null;

		if (macrosHas(name) && typeof _macros[name].handler === 'function') {
			macro = _macros[name];
		}
		/* legacy macro support */
		else if (Object.hasOwn(macros, name) && typeof macros[name].handler === 'function') {
			macro = macros[name];
		}
		/* /legacy macro support */

		return macro;
	}

	function macrosInit(handler = 'init') {
    for (const name of Object.keys(_macros)) {
        const fn = _macros[name][handler];
        if (typeof fn === 'function') {
            fn(name);
        }
    }

    /* legacy macro support */
    for (const name of Object.keys(macros)) {
        const fn = macros[name][handler];
        if (typeof fn === 'function') {
            fn(name);
        }
    }

}

    /*******************************************************************************
        Tags Functions.
    *******************************************************************************/

    function tagsRegister(parent, bodyTags) {
        if (!parent) throw new Error('no parent specified');

        const endTags = [`/${parent}`, `end${parent}`];
        const allTags = endTags.concat(Array.isArray(bodyTags) ? bodyTags : []);

        for (const tag of allTags) {
    		if (macrosHas(tag)) throw new Error('cannot register tag for an existing macro');
    		if (tagsHas(tag)) {
        		const parents = _tags[tag];
        		if (!parents.includes(parent)) parents.push(parent);
        		if (parents.length > 1) parents.sort();
			} else {
				_tags[tag] = [parent];
			}
		}
	}

    function tagsUnregister(parent) {
        if (!parent) throw new Error('no parent specified');

        for (const tag in _tags) {
            const parents = _tags[tag];
            const idx = parents.indexOf(parent);

            if (idx !== -1) {
                if (parents.length === 1) delete _tags[tag];
                else parents.splice(idx, 1);
            }
        }
    }

    function tagsHas(name) {
        return Object.prototype.hasOwnProperty.call(_tags, name);
    }

    function tagsGet(name) {
        return tagsHas(name) ? _tags[name] : null;
    }

	/*******************************************************************************
		Object Exports.
	*******************************************************************************/

	return Object.freeze({
    	add: macrosAdd,
    	delete: macrosDelete,
    	isEmpty: macrosIsEmpty,
    	has: macrosHas,
    	get: macrosGet,
    	init: macrosInit,
    	tags: Object.freeze({ register: tagsRegister, unregister: tagsUnregister, has: tagsHas, get: tagsGet })
	});
