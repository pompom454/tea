/***********************************************************************************************************************

	util/convertbreaks.js

	Copyright © 2013–2025 Thomas Michael Edwards <thomasmedwards@gmail.com>. All rights reserved.
	Use of this source code is governed by a BSD 2-clause "Simplified" License, which may be found in the LICENSE file.

***********************************************************************************************************************/
/* global Patterns */

/*
	Within the given node tree, gathers sequences of top-level text nodes and
	inline elements that are separated by two <br> elements, wraps them within
	<p> elements, and removes the <br> elements.

	TODO: Update the list of default block-level elements (below) as necessary.
	Last checked: Apr 2020.
*/

const convertBreaks = (() => { // eslint-disable-line no-unused-vars, no-var
	const isNotSpaceRE = new RegExp(Patterns.notSpace);
	const blockElements = new Set([
		'ADDRESS', 'ARTICLE', 'ASIDE', 'BLOCKQUOTE', 'CENTER', 'DIV', 'DL', 'FIGURE', 'FOOTER', 'FORM', 'H1',
		'H2', 'H3', 'H4', 'H5', 'H6', 'HEADER', 'HR', 'MAIN', 'NAV', 'OL', 'P', 'PRE', 'SECTION', 'TABLE', 'UL'
	]);

	// Optimized check for empty paragraph
	const isParagraphEmpty = (para) => {
		return !Array.from(para.childNodes).some((node) => {
			switch (node.nodeType) {
				case Node.TEXT_NODE:
					return isNotSpaceRE.test(node.nodeValue);
				case Node.COMMENT_NODE:
					return false; // Ignore comments
				default:
					return true;
			}
		});
	};

	const convertBreaks = (source) => {
		const output = document.createDocumentFragment();
		let para = document.createElement('p');

		while (source.firstChild) {
			const node = source.firstChild;
			source.removeChild(node);

			if (node.nodeType === Node.ELEMENT_NODE) {
				const tagName = node.nodeName.toUpperCase();

				// Handling <br> elements
				if (tagName === 'BR') {
					const nextSibling = node.nextSibling;
					if (nextSibling && nextSibling.nodeType === Node.ELEMENT_NODE && nextSibling.nodeName.toUpperCase() === 'BR') {
						// Two <br> in a row: Remove them and add the current paragraph to output
						source.removeChild(nextSibling);
						if (!isParagraphEmpty(para)) {
							output.appendChild(para);
						}
						para = document.createElement('p');
						continue;
					} else if (isParagraphEmpty(para)) {
						// Skip <br> if the paragraph is empty
						continue;
					}
				}

				// Handle block-level elements
				if (blockElements.has(tagName)) {
					if (!isParagraphEmpty(para)) {
						output.appendChild(para);
						para = document.createElement('p');
					}
					output.appendChild(node);
					continue;
				}
			}

			// Append normal nodes to the current paragraph
			para.appendChild(node);
		}

		// Append any remaining content in the paragraph
		if (!isParagraphEmpty(para)) {
			output.appendChild(para);
		}

		source.appendChild(output);
	};

	return convertBreaks;
})();
