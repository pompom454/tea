/***********************************************************************************************************************

    storage/simplestore.js

    Copyright © 2013–2025 Thomas Michael Edwards <thomasmedwards@gmail.com>. All rights reserved.
    Use of this source code is governed by a BSD 2-clause "Simplified" License, which may be found in the LICENSE file.

***********************************************************************************************************************/
(function() {
    var SimpleStore = (() => {
        const adapters = [];
        let initialized = null;
        
        function create(storageId, persistent) {
            if (!storageId || typeof storageId !== 'string') {
                throw new Error('SimpleStore: storageId must be a valid string.');
            }
        
            if (initialized) {
                return initialized.create(storageId, persistent);  // Early exit if already initialized
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
                } catch (ex) {
                    console.warn(`SimpleStore: Adapter "${adapter.name || '[unnamed]'}" failed to initialize for storageId: ${storageId}. Error:`, ex);
                }
            }
            throw new Error(`SimpleStore: No valid storage adapters found for storageId: ${storageId}`);
        }

        return Object.freeze({
            adapters,
            create
        });
    })();
})();
