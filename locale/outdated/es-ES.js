/***********************************************************************************************************************

	es-ES.js – Español (Castellano)

	Original localization by: Gerardo Galán.

	Copyright © 2020 Thomas Michael Edwards <thomasmedwards@gmail.com>. All rights reserved.
	Use of this source code is governed by a BSD 2-clause "Simplified" License, which may be found in the LICENSE file.

	For more information about the guidelines used to create this localization, see:
		http://www.motoslave.net/sugarcube/2/docs/#guide-localization

***********************************************************************************************************************/
/* global l10nStrings */
/* eslint-disable strict */

(() => {
	/*******************************************************************************
		General.
	*******************************************************************************/

	l10nStrings.textAbort = 'Abortar';

	l10nStrings.textAborting = 'Abortando';

	l10nStrings.textCancel = 'Cancelar';

	l10nStrings.textClear = 'Limpiar';

	l10nStrings.textClose = 'Cerrar';

	l10nStrings.textDelete = 'Borrar';
	// NOTE: 'Borrar' and 'Limpiar' are used for similar actions
	// 'Borrar' can also be used for delete in other contexts

	l10nStrings.textExport = 'Exportar';

	// In lowercase, if possible.
	l10nStrings.textIdentity = 'juego';

	l10nStrings.textImport = 'Importar';

	l10nStrings.textLoad = 'Cargar';

	l10nStrings.textOff = 'Off';

	l10nStrings.textOk = 'OK';

	l10nStrings.textOn = 'On';

	l10nStrings.textSave = 'Guardar';

	// (noun) chance to act (in a game), moment, period
	l10nStrings.textTurn = 'Turno';


	/*******************************************************************************
		Errors.
	*******************************************************************************/

	// NOTE: `passage` is supplied locally.
	l10nStrings.errorNonexistentPassage = 'el pasaje "{passage}" no existe';


	/*******************************************************************************
		Warnings.
	*******************************************************************************/

	l10nStrings.warningNoStorage = 'Faltan las API de almacenamiento utilizables. Las causas posibles son una configuración desactivada de cookies de terceros, lo que también afecta al almacenamiento web, o un modo de navegación privada.';

	l10nStrings.warningNoWebStorage = 'El API Web Storage está ausente, por lo que este {textIdentity} se ejecutará en un modo degradado. Puedes continuar, pero algunas partes pueden no funcionar correctamente.';

	l10nStrings.warningDegraded = 'Algunas capacidades requeridas para soportar este {textIdentity} están ausentes, por lo que está funcionando en un modo degradado.';

	l10nStrings.warningNoSaves = 'Faltan las capacidades necesarias para soportar las guardadas, por lo que las guardadas están deshabilitadas para esta sesión.';


	/*******************************************************************************
		API: Save.
	*******************************************************************************/

	l10nStrings.saveErrorDisallowed = 'Las guardadas están deshabilitadas para este pasaje.';

	l10nStrings.saveErrorDecodeFail = 'No se pudo decodificar la guardada, probablemente debido a corrupción';

	l10nStrings.saveErrorDiskLoadFail = 'No se pudo cargar el archivo de guardado desde el disco';

	l10nStrings.saveErrorIdMismatch = 'La guardada no proviene de este {textIdentity}';

	l10nStrings.saveErrorInvalidData = 'Faltan datos requeridos en esta guardada, probablemente debido a corrupción';

	l10nStrings.saveErrorNonexistent = 'La guardada no existe';


	/*******************************************************************************
		Base UI.
	*******************************************************************************/

	l10nStrings.uiBarLabelToggle = 'Alternar la barra de interfaz';

	l10nStrings.uiBarLabelBackward = 'Volver atrás en la historia del {textIdentity}';

	l10nStrings.uiBarLabelForward = 'Avanzar en la historia del {textIdentity}';

	// [DEPRECATED]
	l10nStrings.uiBarLabelJumpto = 'Saltar a un punto específico de la historia del {textIdentity}';


	/*******************************************************************************
		Dialog: Alert.
	*******************************************************************************/

	l10nStrings.alertTitle = 'Alerta';


	/*******************************************************************************
		Dialog: Restart.
	*******************************************************************************/

	l10nStrings.restartTitle = 'Reiniciar';

	l10nStrings.restartMesgPrompt = '¿Estás seguro de que quieres reiniciar? Todo progreso no guardado se perderá.';


	/*******************************************************************************
		Dialog: Saves.
	*******************************************************************************/

	l10nStrings.continueTitle = 'Continuar';

	l10nStrings.savesTitle = 'Guardados';

	l10nStrings.savesHeaderBrowser = 'En el Navegador';

	l10nStrings.savesHeaderDisk = 'En el Disco';

	l10nStrings.savesLabelBrowserClear = 'Borrar todos los guardados del navegador';

	l10nStrings.savesLabelBrowserExport = 'Exportar los guardados del navegador a un paquete';

	l10nStrings.savesLabelBrowserImport = 'Importar los guardados del navegador desde un paquete';

	l10nStrings.savesLabelDiskLoad = 'Cargar desde el disco';

	l10nStrings.savesLabelDiskSave = 'Guardar en el disco';

	l10nStrings.savesTextBrowserAuto = 'Autoguardado';

	/* Note: The more correct version is technically 'Autoguardado Automático' */

	l10nStrings.savesTextBrowserSlot = 'Espacio';

	l10nStrings.savesTextNoDate = 'fecha desconocida';


	/*******************************************************************************
		Dialog: Settings.
	*******************************************************************************/

	l10nStrings.settingsTitle = 'Ajustes';

	l10nStrings.settingsTextReset = 'Restablecer';


	/*******************************************************************************
		Debugging: Error Views.
	*******************************************************************************/

	l10nStrings.errorViewTitle = 'Error';

	l10nStrings.errorViewLabelToggle = 'Alternar la vista de error';


	/*******************************************************************************
		Debugging: Debug bar.
	*******************************************************************************/

	l10nStrings.debugBarLabelToggle = 'Alternar la barra de depuración';

	l10nStrings.debugBarLabelViewsToggle = 'Alternar las vistas de depuración';

	l10nStrings.debugBarLabelWatchAdd = 'Añadir un observador';

	l10nStrings.debugBarLabelWatchAll = 'Ver todo';

	l10nStrings.debugBarLabelWatchClear = 'Borrar todos los observadores';

	l10nStrings.debugBarLabelWatchDelete = 'Borrar este observador';

	l10nStrings.debugBarLabelWatchPlaceholder = 'nombre de la variable';

	l10nStrings.debugBarLabelPassagePlaceholder = 'nombre del pasaje';

	l10nStrings.debugBarLabelPassagePlay = 'Reproducir pasaje';

	l10nStrings.debugBarLabelWatchToggle = 'Alternar el panel de observadores';

	l10nStrings.debugBarMesgNoWatches = 'No hay observadores establecidos';

	l10nStrings.debugBarTextAdd = 'Añadir';

	l10nStrings.debugBarTextPassage = 'Pasaje';

	l10nStrings.debugBarTextViews = 'Vistas';

	l10nStrings.debugBarTextWatch = 'Observador';


	/*******************************************************************************
		Macros.
	*******************************************************************************/

	// (verb) rewind, revert
	l10nStrings.macroBackText = 'Atrás';

	// (verb) go/send back
	l10nStrings.macroReturnText = 'Volver';


	/*******************************************************************************
		[DEPRECATED] Dialog: Autoload.
	*******************************************************************************/

	l10nStrings.autoloadTitle = 'Cargar Automáticamente';

	// Note: 'Auto-carga' is also correct

	l10nStrings.autoloadMesgPrompt = 'Un autoguardado está disponible. ¿Cargarlo ahora o ir al principio?';

	l10nStrings.autoloadTextCancel = 'Ir al comienzo';

	l10nStrings.autoloadTextOk = 'Cargar autoguardado';


	/*******************************************************************************
		[DEPRECATED] Dialog: Jump To.
	*******************************************************************************/

	l10nStrings.jumptoTitle = 'Saltar A';

	l10nStrings.jumptoMesgUnavailable = 'No hay puntos de salto disponibles actualmente\u2026';


	/*******************************************************************************
		[DEPRECATED] Dialog: Share.
	*******************************************************************************/

	l10nStrings.shareTitle = 'Compartir';
})();
