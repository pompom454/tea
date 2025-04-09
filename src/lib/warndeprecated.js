/***********************************************************************************************************************

	lib/warndeprecated.js

	Copyright © 2025 Thomas Michael Edwards <thomasmedwards@gmail.com>. All rights reserved.
	Use of this source code is governed by a BSD 2-clause "Simplified" License, which may be found in the LICENSE file.

***********************************************************************************************************************/

/*
	Log to the console, and optionally throw, a deprecation warning.
*/
function warnDeprecated(what, mesg, doThrow) { // eslint-disable-line no-unused-vars
	console.warn(`[DEPRECATED] ${what} is deprecated${mesg ? `, see ${mesg} instead` : ''}.`);

	if (doThrow) {
		throw new Error(`[DEPRECATED] ${what} is deprecated${mesg ? `, see ${mesg} instead` : ''}`);
	}
}
