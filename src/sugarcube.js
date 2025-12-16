/***********************************************************************************************************************

	sugarcube.js

	Copyright © 2013–2025 Thomas Michael Edwards <thomasmedwards@gmail.com>. All rights reserved.
	Use of this source code is governed by a BSD 2-clause "Simplified" License, which may be found in the LICENSE file.

***********************************************************************************************************************/
/*
	global Alert, Browser, Config, Dialog, Engine, Fullscreen, Has, LoadScreen, SimpleStore, L10n, Macro,
	       Outlines, Passage, Save, Scripting, Setting, SimpleAudio, State, Story, UI, UIBar, DebugBar,
	       Util, Visibility, Wikifier, WikifierUtil, session:writeable, settings, setup, storage:writeable,
	       triggerEvent, version
*/

/*******************************************************************************
	Main function.  Entry point for the story.
*******************************************************************************/
const DOM_DELAY_TIMEOUT = Engine.DOM_DELAY * 2;

jQuery(() => {
	if (BUILD_DEBUG) { 
		console.log('[SugarCube/main()] Document loaded; beginning startup.'); 
	}

	/*
		WARNING!

		The ordering of the code within this function is critically important,
		so be careful when mucking around with it.
	*/

	// Acquire an initial lock for and initialize the loading screen.
	LoadScreen.init();
	LoadScreen.unlock(LoadScreen.lock());
	
	document.normalize && document.normalize();

	new Promise(resolve => {
		Story.init();

		try {
			Story.init();
			SugarCube.storage = SimpleStore.create(Story.id, true);  
			SugarCube.session = SimpleStore.create(Story.id, false);
		

		
			State.init();

			// NOTE: Must be done before user scripts are loaded.
			Dialog.init();
			UIBar.init();
			Engine.init();
		
			Outlines.init();

			Engine.runUserScripts();
			
			L10n.init();

			Save.init();
			
			Setting.init();

			Macro.init();

			DebugBar.init();

		} catch (ex) {
			throw new Error(`Error during story initialization: ${ex.message}`);
		}
		// Schedule the start of the engine and interfaces once both the DOM is
		// reporting non-empty dimensions for the viewport and our loading screen
		// lock is the only remaining one.
		const $window   = jQuery(window);
		const vpReadyId = setInterval(() => {
			if ($window.width() && LoadScreen.size <= 1) {
				clearInterval(vpReadyId);
				resolve();
			}
		}, Engine.DOM_DELAY);
	})
		.then(() => {
			Engine.runUserInit();

			UIBar.start();

			Engine.start();

			DebugBar.start();

			triggerEvent(':storyready');

			setTimeout(() => LoadScreen.unlock(lockId), DOM_DELAY_TIMEOUT);

			if (BUILD_DEBUG) { console.log('[SugarCube/main()] Startup complete; story ready.'); }
		})
		.catch(ex => {
			console.error(ex);
			LoadScreen.clear();
			return Alert.fatal(null, ex.message, ex);
		});
});


/*******************************************************************************
	`SugarCube` object.
*******************************************************************************/

/*
	Contains exported identifiers for debugging purposes and allows scripts to
	detect if they're running in SugarCube.
*/
Object.defineProperty(window, 'SugarCube', {
	// WARNING: We need to assign new values at points, so seal it, do not freeze it.
	value : Object.seal(Object.assign(Object.create(null), {
		Browser,
		Config,
		Dialog,
		Engine,
		Fullscreen,
		Has,
		L10n,
		Macro,
		Passage,
		Save,
		Scripting,
		Setting,
		SimpleAudio,
		State,
		Story,
		UI,
		UIBar,
		DebugBar,
		Visibility,
		Wikifier,
		WikifierUtil,
		session,
		settings,
		setup,
		storage,
		version

		/* [DEPRECATED] */
		/* eslint-disable comma-style */
		, Util
		/* eslint-enable comma-style */
		/* [/DEPRECATED] */
	}))
});
