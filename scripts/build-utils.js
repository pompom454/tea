/***********************************************************************************************************************

    scripts/build-utils.js (v1.2.2, 2021-10-07)
        Build utility functions for SugarCube.

    Copyright © 2020–2022 Thomas Michael Edwards <thomasmedwards@gmail.com>. All rights reserved.
    Use of this source code is governed by a BSD 2-clause "Simplified" License, which may be found in the LICENSE file.

***********************************************************************************************************************/
/* eslint-env node, es2021 */
/* eslint-disable strict */
'use strict';

const fs   = require('fs');
const path = require('path');

const DEFAULT_INDENT = ' -> ';

function log(message, indent = DEFAULT_INDENT) {
    console.log('%s%s', indent, message);
}

function die(message, error) {
    if (error) {
        console.error(
            'error: %s\n[@: %d/%d] Trace:\n%s',
            message,
            error.line,
            error.col,
            error.stack
        );
    } else {
        console.error('error: %s', message);
    }
    process.exit(1);
}

function fileExists(p) {
    try {
        fs.accessSync(p, fs.constants.F_OK);
        return true;
    } catch {
        return false;
    }
}

function walkPaths(paths) {
    const output = [];
    for (const p of paths) {
        const stats = fs.statSync(p);
        if (stats.isDirectory()) {
            for (const entry of fs.readdirSync(p)) {
                if (entry === '.' || entry === '..') continue;
                output.push(...walkPaths([path.join(p, entry)]));
            }
        } else if (stats.isFile()) {
            output.push(p);
        }
    }
    return output;
}

function makePath(p) {
    const target = path.normalize(p);
    if (!fileExists(target)) {
        fs.mkdirSync(target, { recursive: true });
    }
}

function copyFile(srcFilename, destFilename) {
    const src  = path.normalize(srcFilename);
    const dest = path.normalize(destFilename);
    try {
        fs.copyFileSync(src, dest);
    } catch (ex) {
        die(`file copy failed "${src}" → "${dest}" (reason: ${ex.message})`);
    }
    return true;
}

function readFileContents(filename) {
    const filepath = path.normalize(filename);
    try {
        return fs.readFileSync(filepath, 'utf8').replace(/\r\n/g, '\n');
    } catch (ex) {
        die(`cannot open file "${filepath}" for reading (reason: ${ex.message})`);
    }
}

function writeFileContents(filename, data) {
    const filepath = path.normalize(filename);
    try {
        fs.writeFileSync(filepath, data, 'utf8');
    } catch (ex) {
        die(`cannot open file "${filepath}" for writing (reason: ${ex.message})`);
    }
}

function concatFiles(filenames, callback) {
    return filenames
        .map(f => {
            const contents = readFileContents(f);
            return typeof callback === 'function'
                ? callback(contents, f)
                : contents;
        })
        .join('\n');
}

module.exports = {
    log,
    die,
    fileExists,
    walkPaths,
    makePath,
    copyFile,
    readFileContents,
    writeFileContents,
    concatFiles
};
