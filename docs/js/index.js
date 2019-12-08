/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _trello_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trello-util */ \"./src/trello-util.ts\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util.ts\");\n\n\nwindow.Promise = TrelloPowerUp.Promise;\nTrelloPowerUp.initialize({\n    // Button to open settings \n    'board-buttons': function (t) {\n        return [{\n                icon: {\n                    dark: `${window.location}img/stopwatch.svg`,\n                    light: `${window.location}img/stopwatch.svg`,\n                },\n                text: 'SLAs',\n                callback: () => t.modal({\n                    url: './settings.html',\n                    height: 360,\n                    fullscreen: false,\n                    title: 'SLA Settings'\n                }),\n                condition: 'edit'\n            }];\n    },\n    // Show running SLAs on front of card\n    'card-badges': function (t) {\n        return Object(_trello_util__WEBPACK_IMPORTED_MODULE_0__[\"getConfigurations\"])(t).then((configs) => {\n            if (!configs) {\n                return [];\n            }\n            return Object(_trello_util__WEBPACK_IMPORTED_MODULE_0__[\"getSlaData\"])(t).then((data) => {\n                Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"updateConfigs\"])(t, configs, data || {});\n                return !data ? [] : Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"getRunningSlas\"])(data, configs, false);\n            });\n        });\n    },\n    // Show running and completed SLAs on back of card\n    'card-detail-badges': function (t) {\n        return Object(_trello_util__WEBPACK_IMPORTED_MODULE_0__[\"getSlaData\"])(t).then((data) => {\n            if (!data) {\n                return [];\n            }\n            return Object(_trello_util__WEBPACK_IMPORTED_MODULE_0__[\"getConfigurations\"])(t).then((configs) => {\n                return !configs ? [] : Object(_util__WEBPACK_IMPORTED_MODULE_1__[\"getRunningSlas\"])(data, configs, true);\n            });\n        });\n    },\n}, {\n    appKey: 'bd1e7e486269d148ecd1be71ad5a3f1a',\n    appName: 'SLAs '\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LnRzP2M2YWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2xhRGF0YSwgZ2V0Q29uZmlndXJhdGlvbnMsIENvbmRpdGlvbiB9IGZyb20gJy4vdHJlbGxvLXV0aWwnO1xuaW1wb3J0IHsgZ2V0UnVubmluZ1NsYXMsIHVwZGF0ZUNvbmZpZ3MgfSBmcm9tICcuL3V0aWwnO1xuXG5kZWNsYXJlIGNvbnN0IFRyZWxsb1Bvd2VyVXA6IGFueTtcblxud2luZG93LlByb21pc2UgPSBUcmVsbG9Qb3dlclVwLlByb21pc2U7XG5cblRyZWxsb1Bvd2VyVXAuaW5pdGlhbGl6ZSh7XG4gIC8vIEJ1dHRvbiB0byBvcGVuIHNldHRpbmdzIFxuICAnYm9hcmQtYnV0dG9ucyc6IGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIFt7XG4gICAgICBpY29uOiB7XG4gICAgICAgIGRhcms6IGAke3dpbmRvdy5sb2NhdGlvbn1pbWcvc3RvcHdhdGNoLnN2Z2AsXG4gICAgICAgIGxpZ2h0OiBgJHt3aW5kb3cubG9jYXRpb259aW1nL3N0b3B3YXRjaC5zdmdgLFxuICAgICAgfSxcbiAgICAgIHRleHQ6ICdTTEFzJyxcbiAgICAgIGNhbGxiYWNrOiAoKTogdm9pZCA9PiB0Lm1vZGFsKHtcbiAgICAgICAgdXJsOiAnLi9zZXR0aW5ncy5odG1sJyxcbiAgICAgICAgaGVpZ2h0OiAzNjAsXG4gICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxuICAgICAgICB0aXRsZTogJ1NMQSBTZXR0aW5ncydcbiAgICAgIH0pLFxuICAgICAgY29uZGl0aW9uOiAnZWRpdCdcbiAgICB9XTtcbiAgfSxcbiAgLy8gU2hvdyBydW5uaW5nIFNMQXMgb24gZnJvbnQgb2YgY2FyZFxuICAnY2FyZC1iYWRnZXMnOiBmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiBnZXRDb25maWd1cmF0aW9ucyh0KS50aGVuKChjb25maWdzKSA9PiB7XG4gICAgICBpZiAoIWNvbmZpZ3MpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZ2V0U2xhRGF0YSh0KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHVwZGF0ZUNvbmZpZ3ModCwgY29uZmlncywgZGF0YSB8fCB7fSk7XG4gICAgICAgIHJldHVybiAhZGF0YSA/IFtdIDogZ2V0UnVubmluZ1NsYXMoZGF0YSwgY29uZmlncywgZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIC8vIFNob3cgcnVubmluZyBhbmQgY29tcGxldGVkIFNMQXMgb24gYmFjayBvZiBjYXJkXG4gICdjYXJkLWRldGFpbC1iYWRnZXMnOiBmdW5jdGlvbiAodCkge1xuICAgIHJldHVybiBnZXRTbGFEYXRhKHQpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0Q29uZmlndXJhdGlvbnModCkudGhlbigoY29uZmlncykgPT4ge1xuICAgICAgICByZXR1cm4gIWNvbmZpZ3MgPyBbXSA6IGdldFJ1bm5pbmdTbGFzKGRhdGEsIGNvbmZpZ3MsIHRydWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG59LFxuICB7XG4gICAgYXBwS2V5OiAnYmQxZTdlNDg2MjY5ZDE0OGVjZDFiZTcxYWQ1YTNmMWEnLCAvLyBUT0RPOiBnZXQgbmV3IGFwcEtleVxuICAgIGFwcE5hbWU6ICdTTEFzICdcbiAgfSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/trello-util.ts":
/*!****************************!*\
  !*** ./src/trello-util.ts ***!
  \****************************/
/*! exports provided: Condition, CardActionType, getConfigurations, setConfigurations, getSlaData, setSlaData, getCardActions, getLists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Condition\", function() { return Condition; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CardActionType\", function() { return CardActionType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getConfigurations\", function() { return getConfigurations; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setConfigurations\", function() { return setConfigurations; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSlaData\", function() { return getSlaData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setSlaData\", function() { return setSlaData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCardActions\", function() { return getCardActions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLists\", function() { return getLists; });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst key = 'bd1e7e486269d148ecd1be71ad5a3f1a';\nconst token = ''; // TODO use auth\n// Right now we only provide being in a column as starting the SLA\nvar Condition;\n(function (Condition) {\n    Condition[\"ColumnName\"] = \"COLUMN_NAME\";\n})(Condition || (Condition = {}));\nvar CardActionType;\n(function (CardActionType) {\n    CardActionType[\"createCard\"] = \"createCard\";\n    CardActionType[\"updateCard\"] = \"updateCard\";\n})(CardActionType || (CardActionType = {}));\n// TODO: get can technically return nothing - is it null, undefined?\nconst getConfigurations = (t) => t.get('board', 'shared', 'config');\nconst setConfigurations = (t, config) => t.set('board', 'shared', 'config', config);\nconst getSlaData = (t) => t.get('card', 'shared', 'slaData');\nconst setSlaData = (t, slaData) => t.set('card', 'shared', 'slaData', slaData);\nconst getCardActions = (t) => __awaiter(void 0, void 0, void 0, function* () {\n    const { card: cardId } = t.getContext();\n    const url = `https://api.trello.com/1/cards/${cardId}/actions?filter=updateCard:idList,createCard&key=${key}&token=${token}`;\n    return axios.get(url).then(response => response.data).catch((e) => {\n        console.log('Failed to get card actions', e);\n    });\n});\nconst getLists = (t) => __awaiter(void 0, void 0, void 0, function* () {\n    const { board: boardId } = t.getContext();\n    const url = `https://api.trello.com/1/boards/${boardId}/lists?cards=none&filter=open&key=${key}&token=${token}`;\n    return axios.get(url).then(response => response.data).catch((e) => {\n        console.log('Failed to get lists', e);\n    });\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHJlbGxvLXV0aWwudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3RyZWxsby11dGlsLnRzP2JhYjciXSwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSBjb25zdCBheGlvczogYW55O1xuXG5jb25zdCBrZXkgPSAnYmQxZTdlNDg2MjY5ZDE0OGVjZDFiZTcxYWQ1YTNmMWEnO1xuY29uc3QgdG9rZW4gPSAnJzsgLy8gVE9ETyB1c2UgYXV0aFxuXG4vLyBSaWdodCBub3cgd2Ugb25seSBwcm92aWRlIGJlaW5nIGluIGEgY29sdW1uIGFzIHN0YXJ0aW5nIHRoZSBTTEFcbmV4cG9ydCBlbnVtIENvbmRpdGlvbiB7XG4gICAgQ29sdW1uTmFtZSA9IFwiQ09MVU1OX05BTUVcIixcbn1cblxuZXhwb3J0IGVudW0gQ2FyZEFjdGlvblR5cGUgeyBcbiAgICBjcmVhdGVDYXJkID0gXCJjcmVhdGVDYXJkXCIsXG4gICAgdXBkYXRlQ2FyZCA9IFwidXBkYXRlQ2FyZFwiXG59XG5cbmV4cG9ydCB0eXBlIFNsYUNvbmRpdGlvbiA9IHtcbiAgICB0eXBlOiBDb25kaXRpb247XG4gICAgaWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgU2xhQ29uZmlndXJhdGlvbiA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBzdGFydENvbmRpdGlvbjogU2xhQ29uZGl0aW9uO1xuICAgIGVuZENvbmRpdGlvbjogU2xhQ29uZGl0aW9uO1xuICAgIHRpbWU6IG51bWJlcjsgLy8gTWludXRlc1xufVxuXG5leHBvcnQgdHlwZSBTbGFEYXRhID0ge1xuICAgIHN0YXJ0VGltZT86IG51bWJlcjsgLy8gVW5peCB0aW1lc3RhbXAgbWlsbGlzZWNvbmRzLiBPbmx5IGV4aXN0cyBpZiBTTEEgaGFzIHN0YXJ0ZWRcbiAgICBlbmRUaW1lPzogbnVtYmVyOyAvLyBVbml4IHRpbWVzdGFtcCBpbiBtaWxsaXNlY29uZHMuIE9ubHkgZXhpc3RzIGlmIFNMQSBoYXMgZW5kZWRcbn1cblxuZXhwb3J0IHR5cGUgU2xhRGF0YU1hcCA9IHtcbiAgICBbaWQ6IG51bWJlcl06IFNsYURhdGE7XG59XG5cbmV4cG9ydCB0eXBlIENhcmRBY3Rpb24gPSBDcmVhdGVDYXJkQWN0aW9uIHwgVXBkYXRlQ2FyZEFjdGlvbjtcblxuZXhwb3J0IHR5cGUgVXBkYXRlQ2FyZEFjdGlvbiA9IHtcbiAgICBkYXRhOiB7XG4gICAgICAgIGxpc3RBZnRlcjoge2lkOiBzdHJpbmd9O1xuICAgICAgICBsaXN0QmVmb3JlOiB7aWQ6IHN0cmluZ307XG4gICAgfTtcbiAgICB0eXBlOiB0eXBlb2YgQ2FyZEFjdGlvblR5cGUudXBkYXRlQ2FyZDtcbiAgICBkYXRlOiBzdHJpbmc7IC8vIGZvcm1hdCAyMDE5LTExLTI5VDIxOjA1OjI4LjUxMFpcbn1cblxuZXhwb3J0IHR5cGUgQ3JlYXRlQ2FyZEFjdGlvbiA9IHtcbiAgICBkYXRhOiB7XG4gICAgICAgIGxpc3Q6IHtpZDogc3RyaW5nfTtcbiAgICB9O1xuICAgIHR5cGU6IHR5cGVvZiBDYXJkQWN0aW9uVHlwZS5jcmVhdGVDYXJkO1xuICAgIGRhdGU6IHN0cmluZzsgLy8gZm9ybWF0IDIwMTktMTEtMjlUMjE6MDU6MjguNTEwWlxufVxuXG5leHBvcnQgdHlwZSBMaXN0ID0ge1xuICAgIGlkOiBzdHJpbmcsXG4gICAgbmFtZTogc3RyaW5nLFxufVxuXG4vLyBUT0RPOiBnZXQgY2FuIHRlY2huaWNhbGx5IHJldHVybiBub3RoaW5nIC0gaXMgaXQgbnVsbCwgdW5kZWZpbmVkP1xuZXhwb3J0IGNvbnN0IGdldENvbmZpZ3VyYXRpb25zID0gKHQpOiBQcm9taXNlPFNsYUNvbmZpZ3VyYXRpb25bXSB8IHZvaWQ+ID0+IHQuZ2V0KCdib2FyZCcsICdzaGFyZWQnLCAnY29uZmlnJyk7XG5leHBvcnQgY29uc3Qgc2V0Q29uZmlndXJhdGlvbnMgPSAodCwgY29uZmlnOiBTbGFDb25maWd1cmF0aW9uW10pOiB2b2lkID0+IHQuc2V0KCdib2FyZCcsICdzaGFyZWQnLCAnY29uZmlnJywgY29uZmlnKTtcbmV4cG9ydCBjb25zdCBnZXRTbGFEYXRhID0gKHQpOiBQcm9taXNlPFNsYURhdGFNYXAgfCB2b2lkPiA9PiB0LmdldCgnY2FyZCcsICdzaGFyZWQnLCAnc2xhRGF0YScpO1xuZXhwb3J0IGNvbnN0IHNldFNsYURhdGEgPSAodCwgc2xhRGF0YTogU2xhRGF0YU1hcCk6IHZvaWQgPT4gdC5zZXQoJ2NhcmQnLCAnc2hhcmVkJywgJ3NsYURhdGEnLCBzbGFEYXRhKTtcblxuZXhwb3J0IGNvbnN0IGdldENhcmRBY3Rpb25zID0gYXN5bmMgKHQpOiBQcm9taXNlPENhcmRBY3Rpb25bXT4gPT4ge1xuICAgIGNvbnN0IHsgY2FyZDogY2FyZElkIH0gPSB0LmdldENvbnRleHQoKTtcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkudHJlbGxvLmNvbS8xL2NhcmRzLyR7Y2FyZElkfS9hY3Rpb25zP2ZpbHRlcj11cGRhdGVDYXJkOmlkTGlzdCxjcmVhdGVDYXJkJmtleT0ke2tleX0mdG9rZW49JHt0b2tlbn1gO1xuICAgIHJldHVybiBheGlvcy5nZXQodXJsKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmRhdGEpLmNhdGNoKChlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIGdldCBjYXJkIGFjdGlvbnMnLCBlKTtcbiAgICB9KTtcbiAgfTtcblxuZXhwb3J0IGNvbnN0IGdldExpc3RzID0gYXN5bmMgKHQpOiBQcm9taXNlPExpc3RbXT4gPT4ge1xuICAgIGNvbnN0IHsgYm9hcmQ6IGJvYXJkSWQgfSA9IHQuZ2V0Q29udGV4dCgpO1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS50cmVsbG8uY29tLzEvYm9hcmRzLyR7Ym9hcmRJZH0vbGlzdHM/Y2FyZHM9bm9uZSZmaWx0ZXI9b3BlbiZrZXk9JHtrZXl9JnRva2VuPSR7dG9rZW59YDtcbiAgICByZXR1cm4gYXhpb3MuZ2V0KHVybCkudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5kYXRhKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIGdldCBsaXN0cycsIGUpO1xuICAgICAgfSk7XG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFnREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/trello-util.ts\n");

/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/*! exports provided: getHumanReadableTime, getMinutesRemaining, getColor, getRunningSlas, getEndTime, getStartTime, getUpdatedConfigs, updateConfigs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getHumanReadableTime\", function() { return getHumanReadableTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMinutesRemaining\", function() { return getMinutesRemaining; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getColor\", function() { return getColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRunningSlas\", function() { return getRunningSlas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getEndTime\", function() { return getEndTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStartTime\", function() { return getStartTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUpdatedConfigs\", function() { return getUpdatedConfigs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateConfigs\", function() { return updateConfigs; });\n/* harmony import */ var _trello_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trello-util */ \"./src/trello-util.ts\");\n\nconst getHumanReadableTime = (realMinutes) => {\n    const isNegative = realMinutes < 0;\n    const minutes = isNegative ? realMinutes * -1 : realMinutes;\n    const negativeSign = isNegative ? '-' : '';\n    const MINUTES = 'min';\n    const HOURS = 'h';\n    const DAYS = 'd';\n    if (minutes < 60) {\n        return `${negativeSign}${minutes}${MINUTES}`;\n    }\n    if (minutes < 1440) {\n        const hours = Math.floor(minutes / 60);\n        const hoursString = hours > 0 ? `${hours}${HOURS}` : '';\n        const remainingMinutes = minutes - 60 * hours;\n        const minutesString = remainingMinutes > 0 ? `${remainingMinutes}${MINUTES}` : '';\n        const spacer = hoursString && minutesString ? ' ' : '';\n        return `${negativeSign}${hoursString}${spacer}${minutesString}`;\n    }\n    const days = Math.floor(minutes / 1440);\n    const daysString = days > 0 ? `${days}${DAYS}` : '';\n    const remainingMinutes = minutes - days * 1440;\n    const remainingHours = Math.floor(remainingMinutes / 60);\n    const hoursString = remainingHours > 0 ? `${remainingHours}${HOURS}` : '';\n    const spacer = daysString && hoursString ? ' ' : '';\n    return `${negativeSign}${daysString}${spacer}${hoursString}`;\n};\nconst getMinutesRemaining = (startTime, endTime, config) => {\n    const minutesElapsed = Math.floor((endTime - startTime) / 1000 / 60);\n    const minutesRemaining = config.time - minutesElapsed;\n    return minutesRemaining;\n};\nconst getColor = (minutesRemaining, isComplete) => {\n    if (isComplete) {\n        return 'grey';\n    }\n    ;\n    if (minutesRemaining < 0) {\n        return 'red';\n    }\n    else if (minutesRemaining < 60) {\n        return 'yellow';\n    }\n    return 'green';\n};\nconst getRunningSlas = (data, configs, detailed) => {\n    const runningSlas = [];\n    const completeSlas = [];\n    configs.forEach((config) => {\n        if (data[config.id]) {\n            const { startTime, endTime } = data[config.id];\n            if (startTime && !endTime) {\n                const unix = moment().valueOf();\n                const minutesRemaining = getMinutesRemaining(startTime, unix, config);\n                const humanReadable = getHumanReadableTime(minutesRemaining);\n                runningSlas.push(Object.assign(Object.assign(Object.assign({ text: humanReadable, color: getColor(minutesRemaining, false) }, (detailed ? { title: config.name } : {})), (!detailed ? { icon: `${window.location}img/stopwatch.svg` } : {})), { refresh: 60 }));\n            }\n            if (startTime && endTime && detailed) {\n                const minutesRemaining = getMinutesRemaining(startTime, endTime, config);\n                const humanReadable = getHumanReadableTime(minutesRemaining);\n                completeSlas.push({\n                    text: humanReadable,\n                    color: getColor(minutesRemaining, true),\n                    title: config.name,\n                    refresh: 60\n                });\n            }\n        }\n    });\n    // We want the complete SLAs to come after the running ones\n    const allSlas = runningSlas.concat(completeSlas);\n    return allSlas;\n};\nconst getEndTime = (actions, endCondition, startTime) => {\n    let endTime = undefined;\n    actions.forEach((action) => {\n        if (action.type === _trello_util__WEBPACK_IMPORTED_MODULE_0__[\"CardActionType\"].updateCard) {\n            if (action.data.listAfter.id === endCondition.id &&\n                (!endTime || moment(action.date).valueOf() < endTime) &&\n                moment(action.date).valueOf() > startTime) {\n                endTime = moment(action.date).valueOf();\n            }\n        }\n    });\n    return endTime;\n};\nconst getStartTime = (actions, startCondition) => {\n    let startTime = undefined;\n    actions.forEach((action) => {\n        if (action.type === _trello_util__WEBPACK_IMPORTED_MODULE_0__[\"CardActionType\"].createCard && action.data.list.id === startCondition.id) {\n            startTime = moment(action.date).valueOf();\n        }\n        else if (action.type === _trello_util__WEBPACK_IMPORTED_MODULE_0__[\"CardActionType\"].updateCard &&\n            action.data.listAfter.id === startCondition.id &&\n            !startTime || (moment(action.date).valueOf() < startTime)) {\n            startTime = moment(action.date).valueOf();\n        }\n    });\n    return startTime;\n};\nconst getUpdatedConfigs = (actions, configs, slaMap) => {\n    const updatedSlaMap = slaMap;\n    let hasChanged = false;\n    configs.forEach(config => {\n        const { id, startCondition, endCondition } = config;\n        if (!updatedSlaMap[id]) {\n            updatedSlaMap[id] = {};\n        }\n        const { startTime = undefined, endTime = undefined } = updatedSlaMap[id];\n        const newStartTime = !startTime ? getStartTime(actions, startCondition) : undefined;\n        const startTimeExists = startTime ? startTime : newStartTime;\n        const newEndTime = startTimeExists && !endTime ? getEndTime(actions, endCondition, startTimeExists) : undefined;\n        if (newStartTime) {\n            hasChanged = true;\n            updatedSlaMap[id].startTime = newStartTime;\n        }\n        if (newEndTime) {\n            hasChanged = true;\n            updatedSlaMap[id].endTime = newEndTime;\n        }\n    });\n    return hasChanged ? updatedSlaMap : undefined;\n};\nconst updateConfigs = (t, configs, slaMap) => {\n    Object(_trello_util__WEBPACK_IMPORTED_MODULE_0__[\"getCardActions\"])(t).then((actions) => {\n        const updatedConfigs = getUpdatedConfigs(actions, configs, slaMap);\n        if (updatedConfigs) {\n            Object(_trello_util__WEBPACK_IMPORTED_MODULE_0__[\"setSlaData\"])(t, updatedConfigs);\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbC50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdXRpbC50cz80OTU2Il0sInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgY29uc3QgbW9tZW50OiBhbnk7XG5cbmltcG9ydCB7IHNldFNsYURhdGEsIFNsYURhdGFNYXAsIFNsYURhdGEsIFNsYUNvbmZpZ3VyYXRpb24sIGdldENhcmRBY3Rpb25zLCBDYXJkQWN0aW9uLCBDYXJkQWN0aW9uVHlwZSwgU2xhQ29uZGl0aW9uIH0gZnJvbSAnLi90cmVsbG8tdXRpbCc7XG5cbnR5cGUgQ2FyZEJhZGdlID0ge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIHJlZnJlc2g6IG51bWJlcjtcbiAgaWNvbj86IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG59O1xuXG50eXBlIENhcmREZXRhaWxlZEJhZGdlID0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBjb2xvcjogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG4gIGNhbGxiYWNrPzogKCkgPT4ge307XG59O1xuXG5cbmV4cG9ydCBjb25zdCBnZXRIdW1hblJlYWRhYmxlVGltZSA9IChyZWFsTWludXRlczogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgY29uc3QgaXNOZWdhdGl2ZSA9IHJlYWxNaW51dGVzIDwgMDtcbiAgY29uc3QgbWludXRlcyA9IGlzTmVnYXRpdmUgPyByZWFsTWludXRlcyAqIC0xIDogcmVhbE1pbnV0ZXM7XG4gIGNvbnN0IG5lZ2F0aXZlU2lnbiA9IGlzTmVnYXRpdmUgPyAnLScgOiAnJztcblxuICBjb25zdCBNSU5VVEVTID0gJ21pbic7XG4gIGNvbnN0IEhPVVJTID0gJ2gnO1xuICBjb25zdCBEQVlTID0gJ2QnO1xuXG4gIGlmIChtaW51dGVzIDwgNjApIHtcbiAgICByZXR1cm4gYCR7bmVnYXRpdmVTaWdufSR7bWludXRlc30ke01JTlVURVN9YDtcbiAgfSBpZiAobWludXRlcyA8IDE0NDApIHtcbiAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IobWludXRlcyAvIDYwKTtcbiAgICBjb25zdCBob3Vyc1N0cmluZyA9IGhvdXJzID4gMCA/IGAke2hvdXJzfSR7SE9VUlN9YCA6ICcnO1xuICAgIGNvbnN0IHJlbWFpbmluZ01pbnV0ZXMgPSBtaW51dGVzIC0gNjAgKiBob3VycztcbiAgICBjb25zdCBtaW51dGVzU3RyaW5nID0gcmVtYWluaW5nTWludXRlcyA+IDAgPyBgJHtyZW1haW5pbmdNaW51dGVzfSR7TUlOVVRFU31gIDogJyc7XG4gICAgY29uc3Qgc3BhY2VyID0gaG91cnNTdHJpbmcgJiYgbWludXRlc1N0cmluZyA/ICcgJyA6ICcnO1xuICAgIHJldHVybiBgJHtuZWdhdGl2ZVNpZ259JHtob3Vyc1N0cmluZ30ke3NwYWNlcn0ke21pbnV0ZXNTdHJpbmd9YDtcbiAgfSBcbiAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IobWludXRlcyAvIDE0NDApO1xuICBjb25zdCBkYXlzU3RyaW5nID0gZGF5cyA+IDAgPyBgJHtkYXlzfSR7REFZU31gIDogJyc7XG4gIGNvbnN0IHJlbWFpbmluZ01pbnV0ZXMgPSBtaW51dGVzIC0gZGF5cyAqIDE0NDA7XG4gIGNvbnN0IHJlbWFpbmluZ0hvdXJzID0gTWF0aC5mbG9vcihyZW1haW5pbmdNaW51dGVzIC8gNjApOyBcbiAgY29uc3QgaG91cnNTdHJpbmcgPSByZW1haW5pbmdIb3VycyA+IDAgPyBgJHtyZW1haW5pbmdIb3Vyc30ke0hPVVJTfWAgOiAnJztcbiAgY29uc3Qgc3BhY2VyID0gZGF5c1N0cmluZyAmJiBob3Vyc1N0cmluZyA/ICcgJyA6ICcnO1xuICByZXR1cm4gYCR7bmVnYXRpdmVTaWdufSR7ZGF5c1N0cmluZ30ke3NwYWNlcn0ke2hvdXJzU3RyaW5nfWA7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TWludXRlc1JlbWFpbmluZyA9IChzdGFydFRpbWU6IG51bWJlciwgZW5kVGltZTogbnVtYmVyLCBjb25maWc6IFNsYUNvbmZpZ3VyYXRpb24pOiBudW1iZXIgPT4ge1xuICBjb25zdCBtaW51dGVzRWxhcHNlZCA9IE1hdGguZmxvb3IoKGVuZFRpbWUgLSBzdGFydFRpbWUpIC8gMTAwMCAvIDYwKTtcbiAgY29uc3QgbWludXRlc1JlbWFpbmluZyA9IGNvbmZpZy50aW1lIC0gbWludXRlc0VsYXBzZWQ7XG4gIHJldHVybiBtaW51dGVzUmVtYWluaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldENvbG9yID0gKG1pbnV0ZXNSZW1haW5pbmc6IG51bWJlciwgaXNDb21wbGV0ZTogYm9vbGVhbik6IHN0cmluZyA9PiB7XG4gIGlmIChpc0NvbXBsZXRlKSB7XG4gICAgcmV0dXJuICdncmV5JztcbiAgfTtcblxuICBpZiAobWludXRlc1JlbWFpbmluZyA8IDApIHtcbiAgICByZXR1cm4gJ3JlZCc7XG4gIH0gZWxzZSBpZiAobWludXRlc1JlbWFpbmluZyA8IDYwKSB7XG4gICAgcmV0dXJuICd5ZWxsb3cnXG4gIH1cbiAgcmV0dXJuICdncmVlbic7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UnVubmluZ1NsYXMgPSAoZGF0YTogU2xhRGF0YU1hcCwgY29uZmlnczogU2xhQ29uZmlndXJhdGlvbltdLCBkZXRhaWxlZDogYm9vbGVhbik6IENhcmRCYWRnZVtdIHwgQ2FyZERldGFpbGVkQmFkZ2VbXSA9PiB7XG4gIGNvbnN0IHJ1bm5pbmdTbGFzID0gW107XG4gIGNvbnN0IGNvbXBsZXRlU2xhcyA9IFtdO1xuICBcbiAgY29uZmlncy5mb3JFYWNoKChjb25maWcpID0+IHtcbiAgICBpZiAoZGF0YVtjb25maWcuaWRdKSB7XG4gICAgICBjb25zdCB7IHN0YXJ0VGltZSwgZW5kVGltZSB9ID0gZGF0YVtjb25maWcuaWRdO1xuICAgICAgaWYgKHN0YXJ0VGltZSAmJiAhZW5kVGltZSkge1xuICAgICAgICBjb25zdCB1bml4ID0gbW9tZW50KCkudmFsdWVPZigpO1xuICAgICAgICBjb25zdCBtaW51dGVzUmVtYWluaW5nID0gZ2V0TWludXRlc1JlbWFpbmluZyhzdGFydFRpbWUsIHVuaXgsIGNvbmZpZyk7XG4gICAgICAgIGNvbnN0IGh1bWFuUmVhZGFibGUgPSBnZXRIdW1hblJlYWRhYmxlVGltZShtaW51dGVzUmVtYWluaW5nKTtcbiAgICAgICAgcnVubmluZ1NsYXMucHVzaCh7XG4gICAgICAgICAgdGV4dDogaHVtYW5SZWFkYWJsZSxcbiAgICAgICAgICBjb2xvcjogZ2V0Q29sb3IobWludXRlc1JlbWFpbmluZywgZmFsc2UpLFxuICAgICAgICAgIC4uLihkZXRhaWxlZCA/IHsgdGl0bGU6IGNvbmZpZy5uYW1lIH0gOiB7fSksXG4gICAgICAgICAgLi4uKCFkZXRhaWxlZCA/IHtpY29uOiBgJHt3aW5kb3cubG9jYXRpb259aW1nL3N0b3B3YXRjaC5zdmdgfSA6IHt9KSxcbiAgICAgICAgICByZWZyZXNoOiA2MCxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGFydFRpbWUgJiYgZW5kVGltZSAmJiBkZXRhaWxlZCkge1xuICAgICAgICBjb25zdCBtaW51dGVzUmVtYWluaW5nID0gZ2V0TWludXRlc1JlbWFpbmluZyhzdGFydFRpbWUsIGVuZFRpbWUsIGNvbmZpZyk7XG4gICAgICAgIGNvbnN0IGh1bWFuUmVhZGFibGUgPSBnZXRIdW1hblJlYWRhYmxlVGltZShtaW51dGVzUmVtYWluaW5nKTtcbiAgICAgICAgY29tcGxldGVTbGFzLnB1c2goe1xuICAgICAgICAgIHRleHQ6IGh1bWFuUmVhZGFibGUsXG4gICAgICAgICAgY29sb3I6IGdldENvbG9yKG1pbnV0ZXNSZW1haW5pbmcsIHRydWUpLFxuICAgICAgICAgIHRpdGxlOiBjb25maWcubmFtZSxcbiAgICAgICAgICByZWZyZXNoOiA2MFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIH1cbiAgfSk7XG5cbiAgLy8gV2Ugd2FudCB0aGUgY29tcGxldGUgU0xBcyB0byBjb21lIGFmdGVyIHRoZSBydW5uaW5nIG9uZXNcbiAgY29uc3QgYWxsU2xhcyA9IHJ1bm5pbmdTbGFzLmNvbmNhdChjb21wbGV0ZVNsYXMpO1xuICAgIFxuICByZXR1cm4gYWxsU2xhcztcbn07XG5cblxuXG5leHBvcnQgY29uc3QgZ2V0RW5kVGltZSA9IChhY3Rpb25zOiBDYXJkQWN0aW9uW10sIGVuZENvbmRpdGlvbjogU2xhQ29uZGl0aW9uLCBzdGFydFRpbWU6IG51bWJlcik6IG51bWJlciB8IHZvaWQgPT4ge1xuICBsZXQgZW5kVGltZTogbnVtYmVyIHwgdm9pZCA9IHVuZGVmaW5lZDtcbiAgYWN0aW9ucy5mb3JFYWNoKChhY3Rpb24pID0+IHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IENhcmRBY3Rpb25UeXBlLnVwZGF0ZUNhcmQpIHtcbiAgICAgIGlmIChhY3Rpb24uZGF0YS5saXN0QWZ0ZXIuaWQgPT09IGVuZENvbmRpdGlvbi5pZCAmJlxuICAgICAgICAoIWVuZFRpbWUgfHwgbW9tZW50KGFjdGlvbi5kYXRlKS52YWx1ZU9mKCkgPCBlbmRUaW1lKSAgJiYgXG4gICAgICAgIG1vbWVudChhY3Rpb24uZGF0ZSkudmFsdWVPZigpID4gc3RhcnRUaW1lKSB7XG4gICAgICAgICAgZW5kVGltZSA9IG1vbWVudChhY3Rpb24uZGF0ZSkudmFsdWVPZigpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVuZFRpbWU7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhcnRUaW1lID0gKGFjdGlvbnM6IENhcmRBY3Rpb25bXSwgc3RhcnRDb25kaXRpb246IFNsYUNvbmRpdGlvbik6IG51bWJlciB8IHZvaWQgPT4ge1xuICBsZXQgc3RhcnRUaW1lOiBudW1iZXIgfCB2b2lkID0gdW5kZWZpbmVkO1xuXG4gIGFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uKSA9PiB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBDYXJkQWN0aW9uVHlwZS5jcmVhdGVDYXJkICYmIGFjdGlvbi5kYXRhLmxpc3QuaWQgPT09IHN0YXJ0Q29uZGl0aW9uLmlkKSB7XG4gICAgICBzdGFydFRpbWUgPSBtb21lbnQoYWN0aW9uLmRhdGUpLnZhbHVlT2YoKTtcbiAgICB9IGVsc2UgaWYgKGFjdGlvbi50eXBlID09PSBDYXJkQWN0aW9uVHlwZS51cGRhdGVDYXJkICYmXG4gICAgICBhY3Rpb24uZGF0YS5saXN0QWZ0ZXIuaWQgPT09IHN0YXJ0Q29uZGl0aW9uLmlkICYmXG4gICAgICAhc3RhcnRUaW1lIHx8IChtb21lbnQoYWN0aW9uLmRhdGUpLnZhbHVlT2YoKSA8IHN0YXJ0VGltZSkpIHtcbiAgICAgICAgc3RhcnRUaW1lID0gbW9tZW50KGFjdGlvbi5kYXRlKS52YWx1ZU9mKCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gc3RhcnRUaW1lO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFVwZGF0ZWRDb25maWdzID0gKGFjdGlvbnM6IENhcmRBY3Rpb25bXSwgY29uZmlnczogU2xhQ29uZmlndXJhdGlvbltdLCBzbGFNYXA6IFNsYURhdGFNYXApOiBTbGFEYXRhTWFwIHwgdm9pZCA9PiB7XG4gIGNvbnN0IHVwZGF0ZWRTbGFNYXAgPSBzbGFNYXA7XG4gIGxldCBoYXNDaGFuZ2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uZmlncy5mb3JFYWNoKGNvbmZpZyA9PiB7XG4gICAgY29uc3QgeyBpZCwgc3RhcnRDb25kaXRpb24sIGVuZENvbmRpdGlvbiB9ID0gY29uZmlnO1xuXG4gICAgaWYgKCF1cGRhdGVkU2xhTWFwW2lkXSkge1xuICAgICAgdXBkYXRlZFNsYU1hcFtpZF0gPSB7fTtcbiAgICB9XG5cbiAgICBjb25zdCB7IHN0YXJ0VGltZSA9IHVuZGVmaW5lZCwgZW5kVGltZSA9IHVuZGVmaW5lZCB9ID0gdXBkYXRlZFNsYU1hcFtpZF07XG5cbiAgICBjb25zdCBuZXdTdGFydFRpbWUgPSAhc3RhcnRUaW1lID8gZ2V0U3RhcnRUaW1lKGFjdGlvbnMsIHN0YXJ0Q29uZGl0aW9uKSA6IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0IHN0YXJ0VGltZUV4aXN0czogbnVtYmVyIHwgdm9pZCA9ICBzdGFydFRpbWUgPyBzdGFydFRpbWUgOiBuZXdTdGFydFRpbWU7XG4gICAgY29uc3QgbmV3RW5kVGltZSA9IHN0YXJ0VGltZUV4aXN0cyAmJiAhZW5kVGltZSA/IGdldEVuZFRpbWUoYWN0aW9ucywgZW5kQ29uZGl0aW9uLCBzdGFydFRpbWVFeGlzdHMpIDogdW5kZWZpbmVkO1xuICAgIFxuICAgIGlmIChuZXdTdGFydFRpbWUpIHtcbiAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgdXBkYXRlZFNsYU1hcFtpZF0uc3RhcnRUaW1lID0gbmV3U3RhcnRUaW1lO1xuICAgIH1cblxuICAgIGlmIChuZXdFbmRUaW1lKSB7XG4gICAgICBoYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIHVwZGF0ZWRTbGFNYXBbaWRdLmVuZFRpbWUgPSBuZXdFbmRUaW1lO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGhhc0NoYW5nZWQgPyB1cGRhdGVkU2xhTWFwIDogdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUNvbmZpZ3MgPSAodDogYW55LCBjb25maWdzOiBTbGFDb25maWd1cmF0aW9uW10sIHNsYU1hcDogU2xhRGF0YU1hcCk6IHZvaWQgPT4ge1xuICBnZXRDYXJkQWN0aW9ucyh0KS50aGVuKChhY3Rpb25zKSA9PiB7XG4gICBjb25zdCB1cGRhdGVkQ29uZmlncyA9IGdldFVwZGF0ZWRDb25maWdzKGFjdGlvbnMsIGNvbmZpZ3MsIHNsYU1hcCk7XG4gICAgaWYgKHVwZGF0ZWRDb25maWdzKSB7XG4gICAgICBzZXRTbGFEYXRhKHQsIHVwZGF0ZWRDb25maWdzKTtcbiAgICB9XG4gIH0pO1xufTtcblxuXG4iXSwibWFwcGluZ3MiOiJBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/util.ts\n");

/***/ })

/******/ });