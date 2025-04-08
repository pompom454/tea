/***********************************************************************************************************************

	lib/outlines.js

	Copyright © 2015–2025 Thomas Michael Edwards <thomasmedwards@gmail.com>. All rights reserved.
	Use of this source code is governed by a BSD 2-clause "Simplified" License, which may be found in the LICENSE file.

***********************************************************************************************************************/

/*
	Outlines API static object.
*/
var Outlines = (() => { // eslint-disable-line no-unused-vars, no-var
	// Cache of the outline patching `<style>` element.
	let styleEl = null;

	// Last event type seen.
	let lastEventType;


	/*******************************************************************************
		Event Listener Function.
	*******************************************************************************/

	function outlinesHandler(ev) {
		if (ev.type !== lastEventType) {
			lastEventType = ev.type;

			if (ev.type === 'keydown') {
				show();
			}
			else {
				hide();
			}
		}
	}


	/*******************************************************************************
		API Functions.
	*******************************************************************************/

	function init() {
		if (styleEl) {
			return;
		}

		// Create our `<style>` element and append it to the `document.head`.
		styleEl = document.createElement('style');
		styleEl.setAttribute('id', 'style-outlines');
		styleEl.setAttribute('type', 'text/css');
		document.head.appendChild(styleEl);

		// Attach event handlers to manipulate the outlines.
		document.addEventListener('keydown', outlinesHandler);
		document.addEventListener('mousedown', outlinesHandler);

		// Set the initial event type.
		lastEventType = 'mousedown';

		// Hide outlines initially.
		hide();
	}

	function hide() {
		if (styleEl) {
			document.documentElement.removeAttribute('data-outlines');
			styleEl.textContent = '*:focus{outline:none;}';
		}
	}

	function show() {
		if (styleEl) {
			document.documentElement.setAttribute('data-outlines', '');
			styleEl.textContent = '';
		}
	}


	/*******************************************************************************
		Object Exports.
	*******************************************************************************/

	return Object.preventExtensions(Object.create(null, {
		init : { value : init },
		hide : { value : hide },
		show : { value : show }
	}));
})();
