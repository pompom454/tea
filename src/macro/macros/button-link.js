/***********************************************************************************************************************

	macro/macros/button-link.js

	Copyright © 2013–2025 Thomas Michael Edwards <thomasmedwards@gmail.com>. All rights reserved.
	Use of this source code is governed by a BSD 2-clause "Simplified" License, which may be found in the LICENSE file.

***********************************************************************************************************************/
/* global Config, Engine, Macro, State, Story, Wikifier, getTypeOf */

/*
	<<button>> & <<link>>
*/
Macro.add(['button', 'link'], {
	isAsync : true,
	tags    : null,

	handler() {
		if (this.args.length === 0) {
			return this.error(`no ${this.name === 'button' ? 'button' : 'link'} text specified`);
		}

		const isObject = typeof this.args[0] === 'object';
		const $link    = jQuery(document.createElement(this.name === 'button' ? 'button' : 'a'));
		const options  = Object.create(null, {
			classes : {
				value      : [`macro-${this.name}`],
				enumerable : true
			}
		});

		// Argument is an object.
		if (isObject) {
			// Argument was in wiki image syntax.
			if (this.args[0].isImage) {
				const $image = jQuery(document.createElement('img'))
					.attr('src', this.args[0].source)
					.appendTo($link);

				$link.addClass('link-image');

				if (Object.hasOwn(this.args[0], 'passage')) {
					$image.attr('data-passage', this.args[0].passage);
				}

				if (Object.hasOwn(this.args[0], 'text')) {
					$image.attr('alt', this.args[0].text);
				}

				if (Object.hasOwn(this.args[0], 'align')) {
					$image.attr('align', this.args[0].align);
				}

				if (Object.hasOwn(this.args[0], 'link')) {
					options.passage = this.args[0].link;
				}
			}
			// Argument was in wiki link syntax.
			else if (this.args[0].isLink) {
				$link.append(document.createTextNode(this.args[0].text));
				options.passage = this.args[0].link;
			}
			// Argument was some other kind of object.
			else {
				return this.error(`link argument was of an incompatible type: ${getTypeOf(this.args[0])}`);
			}
		}
		// Argument was simply the link text.
		else {
			const $frag = jQuery(document.createDocumentFragment())
				.wikiWithOptions({ cleanup : false, profile : 'core' }, this.args[0]);

			// Sanity check for interactive content shenanigans.
			const forbidden = $frag.getForbiddenInteractiveContentTagNames();

			if (forbidden.length > 0) {
				return this.error(`link argument contains restricted elements: <${forbidden.join('>, <')}>`);
			}

			$link.append($frag);
		}

		// Check for additional arguments.
		if (this.args.length > 1) {
			const args = this.args.slice(1);

			while (args.length > 0) {
				const arg = args.shift();

				switch (arg) {
					case 'class': {
						if (args.length === 0) {
							return this.error('class missing required class names value');
						}

						options.classes.push(args.shift());
						break;
					}

					case 'id': {
						if (args.length === 0) {
							return this.error('id missing required identity value');
						}

						options.id = args.shift();
						break;
					}

					default: {
						if (!isObject) {
							options.passage = arg;
						}

						break;
					}
				}
			}
		}

		if (options?.passage != null) { // nullish test
			$link.attr('data-passage', options.passage);

			if (Story.has(options.passage)) {
				$link.addClass('link-internal');

				if (Config.addVisitedLinkClass && State.hasPlayed(options.passage)) {
					$link.addClass('link-visited');
				}
			}
			else {
				$link.addClass('link-broken');
			}
		}
		else {
			$link.addClass('link-internal');
		}

		if (options.classes.length > 0) {
			$link.addClass(options.classes);
		}

		if (options?.id != null) { // nullish test
			$link.attr('id', options.id);
		}

		$link
			.ariaClick({
				namespace : '.macros',
				role      : options?.passage != null ? 'link' : 'button', // nullish test
				one       : options?.passage != null // nullish test
			}, this.shadowHandler(
				this.payload[0].contents !== ''
					? () => Wikifier.wikifyEval(this.payload[0].contents.trim())
					: null,
				options?.passage != null // nullish test
					? () => Engine.play(options.passage)
					: null
			))
			.appendTo(this.output);
	}
});
