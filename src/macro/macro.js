/***********************************************************************************************************************

	macro/macro.js

	Copyright © 2013–2025 Thomas Michael Edwards <thomasmedwards@gmail.com>. All rights reserved.
	Use of this source code is governed by a BSD 2-clause "Simplified" License, which may be found in the LICENSE file.

***********************************************************************************************************************/
var Macro = (() => {
	const _macros = Object.create(null);
	const _tags = Object.create(null);
	const _validNameRe = new RegExp(`^(?:${Patterns.macroName})$`);

	/***************************************************************************
        Helper functions
    ***************************************************************************/
	const addMacroDefinition = (name, def) => {
		const macro = Object.assign(Object.create(null), def, { _MACRO_API: true });
		_macros[name] = macro;
		Object.defineProperty(_macros, name, { writable: false });
	};

	const addMacroAlias = (name, target) => {
		if (!macrosHas(target)) throw new Error(`cannot create alias of nonexistent macro <<${target}>>`);
		_macros[name] = Object.create(_macros[target], { _ALIAS_OF: { enumerable: true, value: target } });
		Object.defineProperty(_macros, name, { writable: false });
	};


	const processMacroTags = (name) => {
		const tags = _macros[name].tags;
		if (tags == null) {
			tagsRegister(name);
		} else if (Array.isArray(tags)) {
			tagsRegister(name, tags);
		} else {
			throw new Error(`bad value for "tags" property of macro <<${name}>>`);
		}
	};

	/*******************************************************************************
		Macros Functions
	*******************************************************************************/

	const _legacyMacros = Object.create(null);
	if (typeof macros === 'object') {
		Object.keys(macros).forEach(name => {
			if (typeof macros[name]?.handler === 'function') {
				_legacyMacros[name] = macros[name];
			}
		});
	}

	const macrosAdd = (name, def) => {
		if (Array.isArray(name)) {
			for (const n of name) macrosAdd(n, def);
			return;
		}

		if (!_validNameRe.test(name)) {
			throw new Error(`invalid macro name "${name}"`);
		}

		if (macrosHas(name)) {
			throw new Error(`cannot clobber existing macro <<${name}>>`);
		}

		if (tagsHas(name)) {
			const parents = _tags[name];
			throw new Error(`cannot clobber child tag <<${name}>> of parent macro${parents.length === 1 ? '' : 's'} <<${parents.join('>>, <<')}>>`);
		}

		try {
			if (typeof def === 'object') addMacroDefinition(name, def);
			else addMacroAlias(name, def);

			processMacroTags(name);
		} catch (ex) {
			if (ex.name === 'TypeError') {
				throw new Error(`cannot clobber protected macro <<${name}>>`);
			} else {
				throw new Error(`unknown error adding macro <<${name}>>: [${ex.name}] ${ex.message}`);
			}
		}
	};

	const macrosDelete = (name) => {
		if (Array.isArray(name)) {
			for (const n of name) macrosDelete(n);
			return;
		}

		if (macrosHas(name)) {
			if (_macros[name].tags != null) tagsUnregister(name);
			Object.defineProperty(_macros, name, { writable: true });
			delete _macros[name];
		} else if (tagsHas(name)) {
			throw new Error(`cannot remove child tag <<${name}>> of parent macro <<${_tags[name]}>>`);
		}
	};

	const macrosIsEmpty = () => Object.keys(_macros).length === 0;

	const macrosHas = (name) => Object.prototype.hasOwnProperty.call(_macros, name);

	const macrosGet = (name) => {
		if (macrosHas(name) && typeof _macros[name].handler === 'function') return _macros[name];
		if (Object.prototype.hasOwnProperty.call(_legacyMacros, name)) return _legacyMacros[name];
		return null;
	};


	const macrosInit = (handler = 'init') => {
    for (const name of Object.keys(_macros)) {
        const fn = _macros[name][handler];
        if (typeof fn === 'function') fn(name);
    }

    for (const name of Object.keys(_legacyMacros)) {
		const fn = _legacyMacros[name][handler];
		if (typeof fn === 'function') fn(name);
	}
};


	/*******************************************************************************
		Tags Functions
	*******************************************************************************/
	const tagsRegister = (parent, bodyTags) => {
		if (!parent) throw new Error('no parent specified');

		const allTags = [`/${parent}`, `end${parent}`, ...(Array.isArray(bodyTags) ? bodyTags : [])];

		allTags.forEach(tag => {
			_tags[tag] ??= [];
			if (!_tags[tag].includes(parent)) {
				_tags[tag].push(parent);
				if (_tags[tag].length > 1) _tags[tag].sort();
			}
		});
	};



	const tagsUnregister = (parent) => {
		if (!parent) throw new Error('no parent specified');
		Object.keys(_tags).forEach(tag => {
			const parents = _tags[tag];
			const idx = parents.indexOf(parent);
			if (idx !== -1) {
				parents.length === 1 ? delete _tags[tag] : parents.splice(idx, 1);
			}
		});
	};


	const tagsHas = (name) => Object.prototype.hasOwnProperty.call(_tags, name);

	const tagsGet = (name) => tagsHas(name) ? _tags[name] : null;

	/*******************************************************************************
		Object Exports
	*******************************************************************************/
	return Object.freeze({
		add: macrosAdd,
		delete: macrosDelete,
		isEmpty: macrosIsEmpty,
		has: macrosHas,
		get: macrosGet,
		init: macrosInit,
		tags: Object.freeze({
			register: tagsRegister,
			unregister: tagsUnregister,
			has: tagsHas,
			get: tagsGet
		})
	});
})();
