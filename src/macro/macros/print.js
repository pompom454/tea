/***********************************************************************************************************************

	macro/macros/print.js

	Copyright © 2013–2025 Thomas Michael Edwards <thomasmedwards@gmail.com>. All rights reserved.
	Use of this source code is governed by a BSD 2-clause "Simplified" License, which may be found in the LICENSE file.

***********************************************************************************************************************/
/* global Macro, Scripting, Wikifier, encodeEntities, getErrorMessage, stringFrom */

/*
	<<print>>, <<=>>, & <<->>
*/
Macro.add(['print', '=', '-'], {
	skipArgs: true,

	handler() {
		// Early return if no expression is provided
		if (this.args.full.length === 0) {
			return this.error('no expression specified');
		}

		let result;

		try {
			// Evaluate and convert result to string
			result = stringFrom(Scripting.evalJavaScript(this.args.full));
		} catch (ex) {
			return this.error(`bad evaluation: ${getErrorMessage(ex)}`);
		}

		// If the result is valid, output it
		if (result !== null) {
			const output = this.name === '-' ? encodeEntities(result) : result;
			new Wikifier(this.output, output);
		}
	}
});
