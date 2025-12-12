/***********************************************************************************************************************

    macro/macros/if.js

    Copyright © 2013–2025 Thomas Michael Edwards <thomasmedwards@gmail.com>. All rights reserved.
    Use of this source code is governed by a BSD 2-clause "Simplified" License, which may be found in the LICENSE file.

***********************************************************************************************************************/
/* global Config, Macro, Scripting, Wikifier, getErrorMessage */

Macro.add('if', {
    skipArgs: true,
    tags: ['elseif', 'else'],

    isElseifWsRE: /^\s*if\b/i,
    isAssignRE: /[^!%&*+\-/<=>?^|]=[^=>]/,
    isLiteralRE: /(?:""|''|``|"(?:\\\\.|[^"\\\\])+"|'(?:\\\\.|[^'\\\\])+')|`(?:\\\\.|[^`\\\\])+`/g,

    handler() {
        try {
            const len = this.payload.length;
            const { isElseifWsRE, isAssignRE, isLiteralRE } = this.self;
            let success = false;

            for (let i = 0; i < len; ++i) {
                const { name, args } = this.payload[i];
                const isElse = name === 'else';

                if (isElse) {
                    if (args.raw.length > 0) {
                        if (isElseifWsRE.test(args.raw)) {
                            return this.error(`Whitespace is not allowed between "else" and "if" in <<elseif>> clause${i > 0 ? ` (#${i})` : ''}`);
                        }
                        return this.error(`<<else>> does not accept a conditional expression (perhaps you meant <<elseif>>), invalid: ${args.raw}`);
                    }
                    if (i + 1 !== len) return this.error('<<else>> must be the final clause');
                } else {
                    if (args.full.length === 0) {
                        return this.error(`No conditional expression specified for <<${name}>> clause${i > 0 ? ` (#${i})` : ''}`);
                    }
                    if ((Config.debug || Config.enableOptionalDebugging) && isAssignRE.test(args.full.replace(isLiteralRE, ''))) {
                        return this.error(`Assignment operator found within <<${name}>> clause${i > 0 ? ` (#${i})` : ''} (perhaps you meant ==, ===, eq, is), invalid: ${args.raw}`);
                    }
                }
            }

            for (let i = 0; i < len; ++i) {
                const { name, source, args, contents } = this.payload[i];
                const isElse = name === 'else';
                const condition = isElse || !!Scripting.evalJavaScript(args.full);

                if (Config.debug) {
                    this.createDebugView(name, source).modes({
                        nonvoid: false,
                        hidden: !condition,
                        invalid: !condition
                    });
                }

                if (condition) {
                    success = true;
                    new Wikifier(this.output, contents);
                    break;
                }
            }

            if (Config.debug) {
                const remainingClauses = this.payload.slice(success ? len : 0);
                for (const clause of remainingClauses) {
                    this.createDebugView(clause.name, clause.source).modes({
                        nonvoid: false,
                        hidden: true,
                        invalid: true
                    });
                }

                this.createDebugView(`/${this.name}`, `<</${this.name}>>`).modes({
                    nonvoid: false,
                    hidden: !success,
                    invalid: !success
                });
            }

        } catch (ex) {
            return this.error(`Bad conditional expression in <<${this.payload[0].name}>> clause: ${getErrorMessage(ex)}`);
        }
    }
});
