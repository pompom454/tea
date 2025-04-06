/***********************************************************************************************************************

	lib/deprecated-util.js

	Copyright © 2013–2025 Thomas Michael Edwards <thomasmedwards@gmail.com>. All rights reserved.
	Use of this source code is governed by a BSD 2-clause "Simplified" License, which may be found in the LICENSE file.

***********************************************************************************************************************/
/*
	global charAndPosAt, encodeEntities, encodeMarkup, cssPropToDOMProp, cssTimeToMS, getTypeOf, hasMediaQuery,
	       exceptionFrom, now, parseURL, sameValueZero, createFilename, scrubEventKey, createSlug, msToCSSTime,
	       enumFrom, getToStringTag, decodeEntities, decodeEntities, encodeEntities, warnDeprecated
*/

/*
	Legacy `Util` Exports.
*/
var Util = Object.preventExtensions(Object.create(null, { // eslint-disable-line no-unused-vars, no-var
	charAndPosAt : {
		value(...args) {
			warnDeprecated('Util.charAndPosAt()', 'charAndPosAt()');
			return charAndPosAt(...args);
		}
	},
	escape : {
		value(...args) {
			warnDeprecated('Util.escape()', 'encodeEntities()');
			return encodeEntities(...args);
		}
	},
	escapeMarkup : {
		value(...args) {
			warnDeprecated('Util.escapeMarkup()', 'encodeMarkup()');
			return encodeMarkup(...args);
		}
	},
	fromCssProperty : {
		value(...args) {
			warnDeprecated('Util.fromCssProperty()', 'cssPropToDOMProp()');
			return cssPropToDOMProp(...args);
		}
	},
	fromCssTime : {
		value(...args) {
			warnDeprecated('Util.fromCssTime()', 'cssTimeToMS()');
			return cssTimeToMS(...args);
		}
	},
	getType : {
		value(...args) {
			warnDeprecated('Util.getType()', 'getTypeOf()');
			return getTypeOf(...args);
		}
	},
	hasMediaQuery : {
		value(...args) {
			warnDeprecated('Util.hasMediaQuery()', 'hasMediaQuery()');
			return hasMediaQuery(...args);
		}
	},
	newExceptionFrom : {
		value(...args) {
			warnDeprecated('Util.newExceptionFrom()', 'exceptionFrom()');
			return exceptionFrom(...args);
		}
	},
	now : {
		value(...args) {
			warnDeprecated('Util.now()', 'now()');
			return now(...args);
		}
	},
	parseUrl : {
		value(...args) {
			warnDeprecated('Util.parseUrl()', 'parseURL()');
			return parseURL(...args);
		}
	},
	sameValueZero : {
		value(...args) {
			warnDeprecated('Util.sameValueZero()', 'sameValueZero()');
			return sameValueZero(...args);
		}
	},
	sanitizeFilename : {
		value(...args) {
			warnDeprecated('Util.sanitizeFilename()', 'createFilename()');
			return createFilename(...args);
		}
	},
	scrubEventKey : {
		value(...args) {
			warnDeprecated('Util.scrubEventKey()', 'scrubEventKey()');
			return scrubEventKey(...args);
		}
	},
	slugify : {
		value(...args) {
			warnDeprecated('Util.slugify()', 'createSlug()');
			return createSlug(...args);
		}
	},
	toCssTime : {
		value(...args) {
			warnDeprecated('Util.toCssTime()', 'msToCSSTime()');
			return msToCSSTime(...args);
		}
	},
	toEnum : {
		value(...args) {
			warnDeprecated('Util.toEnum()', 'enumFrom()');
			return enumFrom(...args);
		}
	},
	toStringTag : {
		value(...args) {
			warnDeprecated('Util.toStringTag()', 'getToStringTag()');
			return getToStringTag(...args);
		}
	},
	unescape : {
		value(...args) {
			warnDeprecated('Util.unescape()', 'decodeEntities()');
			return decodeEntities(...args);
		}
	}
}));
