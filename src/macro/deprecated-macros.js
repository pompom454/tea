/***********************************************************************************************************************

	macro/deprecated-macros.js

	Copyright © 2013–2025 Thomas Michael Edwards <thomasmedwards@gmail.com>. All rights reserved.
	Use of this source code is governed by a BSD 2-clause "Simplified" License, which may be found in the LICENSE file.

***********************************************************************************************************************/
/* global Macro, State, Wikifier, warnDeprecated */

/* [DEPRECATED] */
Macro.add('silently', 'silent');

/* -----------------------------
   Helper: Parse macro argument
   Converts argument into:
   { passage, text, imgElement, callback }
----------------------------- */
function parseMacroArg(arg) {
	let passage, text, imgElement, callback;

	if (typeof arg === 'object') {
		if (arg.isImage) {
			imgElement = document.createElement('img');
			imgElement.src = arg.source;
			if (arg.passage) imgElement.dataset.passage = arg.passage;
			if (arg.text) imgElement.alt = arg.text;
			if (arg.align) imgElement.style.float = arg.align;

			passage = arg.link;
			callback = arg.setFn;
		} else {
			// Wiki link syntax
			text = arg.text;
			passage = arg.link;
			callback = arg.setFn;
		}
	} else {
		// Simple string as passage name
		text = passage = arg;
	}

	return { passage, text, imgElement, callback };
}

/* -----------------------------
   Helper: Create macro link element
----------------------------- */
function createMacroLink({ container, passage, text, imgElement, macroName, onClick }) {
	const linkEl = Wikifier.createInternalLink(container, passage, null, onClick);
	linkEl.classList.add(`macro-${macroName}`);

	if (imgElement) {
		linkEl.appendChild(imgElement);
		linkEl.classList.add('link-image');
	} else {
		linkEl.textContent = text;
	}

	return linkEl;
}

/* -----------------------------
   <<actions>> macro
----------------------------- */
Macro.add('actions', {
	handler() {
		warnDeprecated(`<<${this.name}>> macro`);

		const listEl = document.createElement('ul');
		listEl.classList.add(this.name);
		this.output.appendChild(listEl);

		for (const arg of this.args) {
			const { passage, text, imgElement, callback } = parseMacroArg(arg);

			// Skip if already taken
			if (State.variables['#actions']?.[passage]) continue;

			const onClick = () => {
				State.variables['#actions'] ??= {};
				State.variables['#actions'][passage] = true;
				callback?.();
			};

			const listItem = document.createElement('li');
			listEl.appendChild(listItem);

			createMacroLink({
				container: listItem,
				passage,
				text,
				imgElement,
				macroName: this.name,
				onClick
			});
		}
	}
});

/* -----------------------------
   <<choice>> macro
----------------------------- */
Macro.add('choice', {
	handler() {
		warnDeprecated(`<<${this.name}>> macro`);

		if (!this.args.length) return this.error('no passage specified');

		const choiceId = State.passage;
		let passage, text, imgElement, callback;

		if (this.args.length === 1) {
			({ passage, text, imgElement, callback } = parseMacroArg(this.args[0]));
		} else {
			[passage, text] = this.args;
		}

		// If already chosen, create a disabled span
		if (State.variables['#choice']?.[choiceId]) {
			const spanEl = document.createElement('span');
			spanEl.classList.add('link-disabled', `macro-${this.name}`);
			spanEl.tabIndex = -1;

			if (imgElement) {
				spanEl.appendChild(imgElement);
				spanEl.classList.add('link-image');
			} else {
				spanEl.textContent = text;
			}

			this.output.appendChild(spanEl);
			return;
		}

		const onClick = () => {
			State.variables['#choice'] ??= {};
			State.variables['#choice'][choiceId] = true;
			callback?.();
		};

		createMacroLink({
			container: this.output,
			passage,
			text,
			imgElement,
			macroName: this.name,
			onClick
		});
	}
});
/* [/DEPRECATED] */
