/***********************************************************************************************************************

	macro/macros/numberbox.js

	Copyright © 2013–2025 Thomas Michael Edwards <thomasmedwards@gmail.com>. All rights reserved.
	Use of this source code is governed by a BSD 2-clause "Simplified" License, which may be found in the LICENSE file.

***********************************************************************************************************************/
/* global Config, Engine, Macro, State, createSlug, getTypeOf */

/*
	<<numberbox>>
*/
Macro.add('numberbox', {
	isAsync   : true,
	receivers : [0], // NOTE: Only notional for now.

	handler() {
		if (this.args.length < 2) {
			const errors = [];
			if (this.args.length < 1) { errors.push('variable name'); }
			if (this.args.length < 2) { errors.push('default value'); }
			return this.error(`no ${errors.join(' or ')} specified`);
		}

		// Ensure that the variable name argument is a string.
		if (typeof this.args[0] !== 'string') {
			return this.error('variable name argument is not a string');
		}

		const varName = this.args[0].trim();

		// Try to ensure that we receive the variable's name (incl. sigil), not its value.
		if (varName[0] !== '$' && varName[0] !== '_') {
			return this.error(`variable name "${this.args[0]}" is missing its sigil ($ or _)`);
		}

		// Custom debug view setup.
		if (Config.debug) {
			this.debugView.modes({ block : true });
		}

		const defaultValue = Number(this.args[1]);

		if (Number.isNaN(defaultValue)) {
			return this.error(`default value "${this.args[1]}" is neither a number nor can it be parsed into a number`);
		}

		const optArgs = Object.assign(Object.create(null), {
			classes   : [`macro-${this.name}`],
			autofocus : false
		});

		// Process arguments.
		for (let i = 2; i < this.args.length; ++i) {
			switch (this.args[i]) {
				case 'autofocus': {
					optArgs.autofocus = true;
					break;
				}

				case 'class': {
					if (++i >= this.args.length) {
						return this.error('class option missing required class names value');
					}

					optArgs.classes.push(this.args[i]);
					break;
				}

				case 'id': {
					if (++i >= this.args.length) {
						return this.error('id option missing required identity value');
					}

					const raw = this.args[i];

					if (typeof raw !== 'string') {
						return this.error('id option value must be a string');
					}

					optArgs.id = raw.trim();

					if (optArgs.id === '') {
						return this.error('id option value cannot be an empty string');
					}

					break;
				}

				case 'max': {
					if (++i >= this.args.length) {
						return this.error('max option missing required maximum value');
					}

					optArgs.max = Number(this.args[i]);

					if (Number.isNaN(optArgs.max)) {
						return this.error(`max option value "${this.args[i]}" is neither a number nor can it be parsed into a number`);
					}

					break;
				}

				case 'min': {
					if (++i >= this.args.length) {
						return this.error('min option missing required minimum value');
					}

					optArgs.min = Number(this.args[i]);

					if (Number.isNaN(optArgs.min)) {
						return this.error(`min option value "${this.args[i]}" is neither a number nor can it be parsed into a number`);
					}

					break;
				}

				case 'step': {
					if (++i >= this.args.length) {
						return this.error('step option missing required step value');
					}

					optArgs.step = Number(this.args[i]);

					if (Number.isNaN(optArgs.step)) {
						return this.error(`step option value "${this.args[i]}" is neither a number nor can it be parsed into a number`);
					}

					break;
				}

				default: {
					// Argument is an object.
					if (typeof this.args[i] === 'object') {
						// Argument was in wiki link syntax.
						if (this.args[i].isLink) {
							optArgs.passage = this.args[i].link;
						}
						// Argument was some other kind of object.
						else {
							return this.error(`passage option was of an incompatible type: ${getTypeOf(this.args[i])}`);
						}
					}
					// Argument was simply the passage name.
					else {
						optArgs.passage = this.args[i];
					}

					break;
				}
			}
		}

		if (
			optArgs?.max != null // nullish test
			&& optArgs?.min != null // nullish test
			&& optArgs.max < optArgs.min
		) {
			return this.error('max option value must be greater-than or equal-to the min option value');
		}

		const varId = createSlug(varName);
		const el    = document.createElement('input');

		// Set up and append the input element to the output buffer.
		const $numberbox = jQuery(el)
			.attr({
				id        : optArgs?.id ? optArgs.id : `${this.name}-${varId}`,
				name      : `${this.name}-${varId}`,
				type      : 'number',
				inputmode : 'decimal',
				tabindex  : 0, // for accessibility
				step      : optArgs?.step != null ? optArgs?.step : 'any' // nullish test
			})
			.addClass(optArgs.classes)
			.on('change.macros', this.shadowHandler(function () {
				State.setVar(varName, Number(this.value));
			}))
			.on('keydown.macros', this.shadowHandler(function (ev) {
				// If Enter/Return is pressed, set the variable and, optionally, forward to another passage.
				if (ev.key === 'Enter') {
					ev.preventDefault();
					State.setVar(varName, Number(this.value));

					if (optArgs.passage != null) { // nullish test
						Engine.play(optArgs.passage);
					}
				}
			}))
			.appendTo(this.output);

		if (optArgs?.min != null) { // nullish test
			$numberbox.attr('min', optArgs.min);
		}

		if (optArgs?.max != null) { // nullish test
			$numberbox.attr('max', optArgs.max);
		}

		if (optArgs?.passage != null) { // nullish test
			$numberbox.attr('data-passage', optArgs.passage);
		}

		// Set the variable and input element to the default value.
		State.setVar(varName, defaultValue);
		el.value = defaultValue;

		// Autofocus the input element, if requested.
		if (optArgs.autofocus) {
			// Set the element's "autofocus" attribute.
			el.setAttribute('autofocus', 'autofocus');

			// Set up a single-use task to autofocus the element.
			if (Engine.isPlaying()) {
				jQuery(document).one(':passageend', () => {
					setTimeout(() => el.focus(), Engine.DOM_DELAY);
				});
			}
			else {
				setTimeout(() => el.focus(), Engine.DOM_DELAY);
			}
		}
	}
});
