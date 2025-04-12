/***********************************************************************************************************************

	version.js

	Copyright © 2013–2025 Thomas Michael Edwards <thomasmedwards@gmail.com>. All rights reserved.
	Use of this source code is governed by a BSD 2-clause "Simplified" License, which may be found in the LICENSE file.

***********************************************************************************************************************/
/* global warnDeprecated */
/* eslint-disable no-var, no-unused-vars */

var version = (() => {
	const name     = 'SugarCube';
	const semVerRE = /^[Vv]?(\d+)(?:\.(\d+)(?:\.(\d+)(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?)?)?$/;


	/*******************************************************************************
		Object Exports.
	*******************************************************************************/

	return Object.preventExtensions(Object.create(null, {
		name       : { value : name },
		major      : { value : '{{BUILD_VERSION_MAJOR}}' },
		minor      : { value : '{{BUILD_VERSION_MINOR}}' },
		patch      : { value : '{{BUILD_VERSION_PATCH}}' },
		prerelease : { value : '{{BUILD_VERSION_PRERELEASE}}' },
		build      : { value : '{{BUILD_VERSION_BUILD}}' },
		date       : { value : new Date('{{BUILD_VERSION_DATE}}') },

		isOk : {
			value(semver) {
				if (typeof semver !== 'string') {
					throw new Error(`semver parameter must be a string (received: ${typeof semver})`);
				}

				const trimmed = semver.trim();

				if (trimmed === '') {
					throw new Error('semver parameter must not be empty');
				}

				const match = semVerRE.exec(trimmed);

				if (!match) {
					throw new Error(`semver parameter is invalid (format: [v]MAJOR[.MINOR[.PATCH[-PRERELEASE][+BUILD]]]; received: ${trimmed}`);
				}

				const major = Number(match[1]);
				const minor = Number(match[2]) || 0;
				const patch = Number(match[3]) || 0;

				return (
					major === this.major
					&& (
						minor < this.minor
						|| minor === this.minor
						&& patch <= this.patch
					)
				);
			}
		},

		long : {
			value() {
				return `${this.name} v${this.toString()} (${this.date.toUTCString()})`;
			}
		},

		short : {
			value() {
				const prerelease = this.prerelease ? `-${this.prerelease}` : '';
				return `${this.name} (v${this.major}.${this.minor}.${this.patch}${prerelease})`;
			}
		},

		toString : {
			value() {
				const prerelease = this.prerelease ? `-${this.prerelease}` : '';
				return `${this.major}.${this.minor}.${this.patch}${prerelease}+${this.build}`;
			}
		}

		/* [DEPRECATED] */
		/* eslint-disable comma-style */
		, title : {
			get : () => {
				warnDeprecated('version.title', 'version.name');
				return name;
			}
		}
		/* eslint-enable comma-style */
		/* [/DEPRECATED] */
	}));
})();
