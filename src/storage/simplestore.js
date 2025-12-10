/***********************************************************************************************************************

    storage/simplestore.js

    Copyright © 2013–2025 Thomas Michael Edwards <thomasmedwards@gmail.com>. All rights reserved.
    Use of this source code is governed by a BSD 2-clause "Simplified" License, which may be found in the LICENSE file.

***********************************************************************************************************************/

var SimpleStore = (() => {
    const adapters = [];
    let initialized = null;

    function create(storageId, persistent) {
        if (initialized) {
            return initialized.create(storageId, persistent);
        }

        for (const adapter of adapters) {
            try {
                if (typeof adapter.init !== "function" || typeof adapter.create !== "function") {
                    throw new TypeError("Adapter missing required methods");
                }
                if (adapter.init(storageId, persistent)) {
                    initialized = adapter;
                    return adapter.create(storageId, persistent);
                }
            }
            catch (ex) {
                console.warn(`SimpleStore: adapter "${adapter.name || '[unnamed]'}" failed to init:`, ex);
                throw new Error(`Failed to initialize adapter: ${adapter.name || '[unnamed]'} - ${ex.message}`);
            }
        }

        throw new Error(`SimpleStore: No valid storage adapters found for storageId: ${storageId}`);
    }

    return Object.freeze({
        adapters,
        create
    });
})();
