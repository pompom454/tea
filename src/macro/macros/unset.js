/***********************************************************************************************************************

	macro/macros/unset.js

	Copyright © 2013–2025 Thomas Michael Edwards <thomasmedwards@gmail.com>. All rights reserved.
	Use of this source code is governed by a BSD 2-clause "Simplified" License, which may be found in the LICENSE file.

***********************************************************************************************************************/
/* global Config, Macro, Scripting, getErrorMessage */

/*
	<<unset>>
*/
Macro.add('unset', {
	skipArgs : true,

	handler() {
		if (!this.args.full || this.args.full.length === 0) {
			return this.error(`No story/temporary variable list specified. Please provide a valid input.`);
		}

		// Regular expression to match State variables and setup properties
		const searchRe  = /(?<![[{+\s])[,;\s]*((?:State\.(?:variables|temporary)|setup)\.)/g;
		const replacer  = (_, p1) => `; delete ${p1}`;
		const cleanupRe = /^; /;

		try {
			Scripting.evalJavaScript(unsetExp)
		} catch (ex) {
			return this.error(`Bad evaluation during 'unset' macro. Expression: ${this.args.full}. Error: ${getErrorMessage(ex)}`);
		}

		// Custom debug view setup.
		if (Config.debug) {
			this.debugView.modes({ hidden : true });
		}
	}
});
