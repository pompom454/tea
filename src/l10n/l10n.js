/***********************************************************************************************************************

	l10n/l10n.js

	Copyright © 2013–2025 Thomas Michael Edwards <thomasmedwards@gmail.com>. All rights reserved.
	Use of this source code is governed by a BSD 2-clause "Simplified" License, which may be found in the LICENSE file.

***********************************************************************************************************************/
/* global l10nStrings */

var L10n = (() => { // eslint-disable-line no-unused-vars, no-var
	// Maximum replacement depth.
	const MAX_DEPTH = 50;

	// Replacement regular expressions.
	const replaceRE    = /\{\w+\}/g;


	/*******************************************************************************
		Localization Functions.
	*******************************************************************************/

	function init() {
		/* currently no-op */
	}


	/*******************************************************************************
		Localized String Functions.
	*******************************************************************************/

	function get(ids, overrides) {
		if (!ids) {
			return '';
		}

		const id = (ids instanceof Array ? ids : [ids]).find(id => Object.hasOwn(l10nStrings, id));
    
		if (!id) {        
			return '';
		}

		let value = l10nStrings[id];    
		let i     = 0;
		
		while (replaceRE.test(value)) {
			if (++depth > MAX_DEPTH) {
				throw new Error('L10n.get exceeded maximum replacement depth, probable infinite loop');    
			}
    
			replaceRE.lastIndex = 0;

			value = value.replace(replaceRE, (match) => {        
				const replacementId = match.slice(1, -1);
				return overrides[replacementId] || l10nStrings[replacementId] || match;
			});
		}

		return value;
	}


	/*******************************************************************************
		Object Exports.
	*******************************************************************************/

	return Object.preventExtensions(Object.create(null, {
		// Localization Functions.
		init : { value : init },

		// Localized String Functions.
		get : { value : get }
	}));
})();
