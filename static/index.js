module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 55);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("qrious");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("clipboard");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("@xiaoe/material_center_box");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("@vue/babel-helper-vue-jsx-merge-props");

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(116);


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_dropdownMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_dropdownMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_dropdownMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_dropdownItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_dropdownItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_dropdownItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_65499954_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_65499954_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_65499954_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_tabPane_vue_vue_type_style_index_0_id_62a39206_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_tabPane_vue_vue_type_style_index_0_id_62a39206_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_tabPane_vue_vue_type_style_index_0_id_62a39206_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAIn0lEQVR4Xu2cTYwcRxXH/6/HszPdu173+mMlxx9rr+3lYhTF4YSiIAESiAtRoiBFJBcQUhKRSERGSHCOBCIKEo5CJMQJEBIowVwQSAQJhDjhgOVTxh+7/sLy2OvtXa+7e3Z2+qFXO72Z6emZrp7P3mVL2stOVb3qX716VfXqVRGGmJjZqFarT1Sr1cdzudxcEASfAnCciCaZeTcR7ZbmMPNDInrIzCsA5g3D+LhWq5Xy+fzFfD7/byIKhtVsGrSgR48ePZbL5Z4LguALAD4HwO5RpgPgb4ZhfFir1d4fHx//b4/1dSw+EEDMXPR9/zkALzHzFwHkBvQRNSL6C4BfFovF94nI77ecvgIql8sTExMTLwN4A8DBfjc2ob47AN5eXV19b3p6erVfsvsCiJl3VSqV14Ig+AGAff1qXJf1LBqG8WahUDhHROtd1rFZrGdArus+xczvEtGne21MP8sz8yUietWyrH/0Um/XgJh5zPO8twB8G0DX9fTSeI2yDOAd0zTPEtGaRv6WLF19mO/7s0EQ/BbAk90IHUGZC4ZhfK1YLF5LKzs1IM/zPh8EwQdEtCetsFHmZ+ZlwzCeNU3zr2nakQqQ67rPy5QKoKAjJJfLYdeuXSAiWfxhfX0dtVpNp+ig8lRk6WFZ1u90BWgD8jzvWwB+xsxaaxoBk8/nW9pRrVYVqFElIpIeesU0zZ/rtEELkGgOEf1GF44ILhaLSnOiSTQp/BNtGoVGCSRmfkFHkxIBic1h5j/qDisB0k574npsbW1tJJAAVIjoK0k2qSMgma1qtdpHaQ1yoVCAYRg6Gqy0yff7vkPQlb2cy+XOdJrd2gKqr3P+2c1U3m54xbV6lIDq7blgmuZn262T2gJyXfenAF7T6opIJjHOMsx0khhsMdwjTucsy3o9rg2xgGT7AODvvayQBZJM83GGWhoimiMGOgNwVHMAPB23LWkBJBtP13XF7mRqbzVoDZO9m2VZZ6Ib3BZAvu9/JwiCtwfdoCzWbxjGG8Vi8SeNbWsCVPfnLGTAZTEqfourq6vHGv1JTYBc1z0L4Mc6rRPb4bouguAT93DU3oid6ZR083eyY029HVmYinxZbliWFbuqb9O271qWJV4KlTYBiZvU8zzZ7Wp5ApeXl5WhDQ2uDtR+5wnBJXWEQNqzR3tvfcc0zdnQfbsJyPO8rzPzr3Q/YmlpSWWVRaEI153WdevvNZ8sH6QTKxXZnwJTU1PaVRLRi6Zp/rpJgzzP+xMzf0m3lhDQ9PR05uCE3yCQyuVyN4D+bJrmlzcBydEMEd1Ic/rw4MEDJfjQoUO6TEeS7/bt20ru+Ph4R/mybmvYHslm9qgcKakh5vu+ONxl5aydthug0FyEAAzDeL1YLJ5TgFzXPQ/gq9p0AGx3QAD+YFnWMyTHwZ7nLaY98dwqgG7duqX6fWJiIrH/ZcJpSI5pmvtobW3tyfX19X8llo5kWFwUpsDhw4ebfpFZQ2aPdo4w2Z/JrBdpTFrx2vl7ACSTz2fI87xvMPMvtCXWM7YDJLNGkpdQIMnsJ0nqEadZP9LY2Bj27Ws+t+wFEDN/k3zf/2EQBN9L28B2gO7ckRPg5HTw4MZ6NMuADMP4Ebmu+3sAzyR/UnOO+/fvq38cOXKk6Ye0gNLKTZv/5s2bqsju3SqypmOKGfbnBdB/ADyeVDj6+/8JoIsCaB7AsR1AG9umSFoQQPcA7E8L6N69e8pbmPUhduOGbBCAycnJxE+MAXRfZjGfmbVOShslCCBJR48e7ckGDdpI9wKIiCotgMS/o+MnXlmR8MFWQFmb5nsGFB1ioXsgSR/bAcraQrEXQADUELvGzMdDILqAZLUsaWZmJonlSH+/fv26kq/jMIvaICKab5nmdwA19aea5psWijuAmgCdb9lq6AJyHAlXBo4dS72EGuqQW1hYUMuRboaY2mpEN6v9ANTPqTsNzbjNqgCSZNvJ8etRG6Q2q1F3xw6gT7pEuTuiDrN+AErT64PO24MGbTjMpIGNLlddQHKqIWM76zZofl62mnrHPpEhtuFylcKNTvs0gKTs8eObS6hBK0NX9XcLqMlp33jsswNI9UPzsY/8Jzw41AUkTnsZYnEalKVZ7Nq1jdjxvXv3JmpgOMSIqPngsA5IHT2nASTlZmdnWwRvA0CtR89h8EKlUtEKXgiPfeIAJXbVEDN0oUHxwQv12exspVLRCn/ZxoDiw18EkARQ5fN5rQCq8FTjxIkTQ9SH9KKuXr2qCkWPg+JqKhQKnQOopNDy8rJWCN52BGSaZucQPAEkQZyO43wEoGMQZydAWTLSKTTokm3byUGcAmllZeWpWq3WMQxYjn1kmo8bYlsQEOdyuacnJydbbie2DSRfWlrqGEgenoudPHkyvWEYYokrV64oafv3dzy4OTc1NaUfSF4famOO47S9irCNAF2wbTv9VQSB5DjOLDOLPWqJgAzPxbKuQZcvX1amoI0GLRPRGdu2217VTLwO5ThO7HUo0SCJLj116tQQB0x6UQJI0oEDB6KF1XUo27Y7XtFMBFTXJLmK2XShLjw4jAOUJSMdB6h+6/AF27YTr2ZqAapDarqSuVUBhVcybdvu35XMUDcdx3memdWl3jC8dm5uLr3eD7FEqVRS0uoBWzKsXtLRnLCJ2hrUAEls0gflclkZ7i0ESAzys0k2J9p3qQGFs9vdu3fVwwJbBNCFmZmZ4TwsEBKWK5ulUumtubm5TD9NUSqV3qlWq2dPnz7dVSBkVxrUqIbMLLcT303auw3R7ISiLgF4lYhG87hJBJJcUJWl+vczcNdM4pPfBJCN53EioCRae6QPLAF4j4iy9cBSdPiI+xaAeqILwECf6AKgnugCkP0nuuLsDDM/VofV10feAHxYh7L1HnlrZ5DlmBvAE/WwY1lhqmcC65thGZ5hMPNDADJMJEpLjkY/BiArvosAhvpM4P8ApVaIhfpxef8AAAAASUVORK5CYII="

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_selectLine_vue_vue_type_style_index_0_id_c5bf9b9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_selectLine_vue_vue_type_style_index_0_id_c5bf9b9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_selectLine_vue_vue_type_style_index_0_id_c5bf9b9e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_resList_vue_vue_type_style_index_0_id_73ff74ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_resList_vue_vue_type_style_index_0_id_73ff74ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_resList_vue_vue_type_style_index_0_id_73ff74ba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f93a6a2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f93a6a2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f93a6a2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
=======
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_039e4fea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_039e4fea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_039e4fea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
>>>>>>> origin/master
/* unused harmony reexport * */


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9e01a77e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9e01a77e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_9e01a77e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_54c1a194_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_54c1a194_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_54c1a194_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_f0ad1a92_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_f0ad1a92_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_f0ad1a92_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_setting_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_imgPreviewer_vue_vue_type_style_index_0_id_1fd021d1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_imgPreviewer_vue_vue_type_style_index_0_id_1fd021d1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_imgPreviewer_vue_vue_type_style_index_0_id_1fd021d1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_posterSetting_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_posterSetting_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_posterSetting_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_posterEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_posterEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_posterEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("@xiaoe/material_center_box/static/index.css");

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_16186fae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_16186fae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_16186fae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var agentConfigApi = "/teas/wework/agent_js_init_data";

function getAgentConfigData(_x) {
  return _getAgentConfigData.apply(this, arguments);
} // 企学院企业微信环境


function _getAgentConfigData() {
  _getAgentConfigData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
    var params, res, _res$data, code, data, msg;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = {
              page_url: url
            };
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(agentConfigApi, {
              params: params
            });

          case 3:
            res = _context.sent;
            _res$data = res.data, code = _res$data.code, data = _res$data.data, msg = _res$data.msg;
            console.log(data, '_______data_________');

            if (code === 0) {
              console.log('agentConfig!!!!!');
              window.__qywx_corp_id = data.corpid;
              wx.agentConfig({
                corpid: data.corpid,
                // 必填，企业微信的corpid，必须与当前登录的企业一致
                agentid: data.agentid,
                // 必填，企业微信的应用id （e.g. 1000247）
                timestamp: data.timestamp,
                // 必填，生成签名的时间戳
                nonceStr: data.nonceStr,
                // 必填，生成签名的随机串
                signature: data.signature,
                // 必填，签名，见附录-JS-SDK使用权限签名算法
                jsApiList: ['selectExternalContact'],
                //必填
                success: function success(res) {
                  console.log(res, 'angentConfig Success~!!!!!!!!!!!!!!');
                },
                fail: function fail(res) {
                  console.log(res, 'angentConfig fail!!!');

                  if (res.errMsg.indexOf('function not exist') > -1) {
                    alert('版本过低请升级');
                  }
                }
              });
            }

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getAgentConfigData.apply(this, arguments);
}

if (window.__shop_type && window.__shop_type == 1) {
  agentConfigApi = "/training_api/v2/qywx/agent_js_init_data";
  var _window$location = window.location,
      origin = _window$location.origin,
      pathname = _window$location.pathname;
  getAgentConfigData(origin + pathname);
} // 知识店铺企业微信环境


if (window.__org_type && window.__org_type == 1) {
  console.log('开始agentConfig!!!!!');
  var _window$location2 = window.location,
      _origin = _window$location2.origin,
      _pathname = _window$location2.pathname;
  getAgentConfigData(_origin + _pathname);
}

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_closeWarning_vue_vue_type_style_index_0_id_b768dbf4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_closeWarning_vue_vue_type_style_index_0_id_b768dbf4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_closeWarning_vue_vue_type_style_index_0_id_b768dbf4_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_tree_node_vue_vue_type_style_index_0_id_50a6a932_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_tree_node_vue_vue_type_style_index_0_id_50a6a932_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_tree_node_vue_vue_type_style_index_0_id_50a6a932_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_tree_vue_vue_type_style_index_0_id_2bc89438_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_tree_vue_vue_type_style_index_0_id_2bc89438_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_tree_vue_vue_type_style_index_0_id_2bc89438_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version {{version}}
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
//
// Cross module loader
// Supported: Node, AMD, Browser globals
//
;

(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function () {
  'use strict';

  var root = window; // default options

  var DEFAULTS = {
    // placement of the popper
    placement: 'bottom',
    gpuAcceleration: true,
    // shift popper from its origin by the given amount of pixels (can be negative)
    offset: 0,
    // the element which will act as boundary of the popper
    boundariesElement: 'viewport',
    // amount of pixel used to define a minimum distance between the boundaries and the popper
    boundariesPadding: 5,
    // popper will try to prevent overflow following this order,
    // by default, then, it could overflow on the left and on top of the boundariesElement
    preventOverflowOrder: ['left', 'right', 'top', 'bottom'],
    // the behavior used by flip to change the placement of the popper
    flipBehavior: 'flip',
    arrowElement: '[x-arrow]',
    arrowOffset: 0,
    // list of functions used to modify the offsets before they are applied to the popper
    modifiers: ['shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle'],
    modifiersIgnored: [],
    forceAbsolute: false
  };
  /**
   * Create a new Popper.js instance
   * @constructor Popper
   * @param {HTMLElement} reference - The reference element used to position the popper
   * @param {HTMLElement|Object} popper
   *      The HTML element used as popper, or a configuration used to generate the popper.
   * @param {String} [popper.tagName='div'] The tag name of the generated popper.
   * @param {Array} [popper.classNames=['popper']] Array of classes to apply to the generated popper.
   * @param {Array} [popper.attributes] Array of attributes to apply, specify `attr:value` to assign a value to it.
   * @param {HTMLElement|String} [popper.parent=window.document.body] The parent element, given as HTMLElement or as query string.
   * @param {String} [popper.content=''] The content of the popper, it can be text, html, or node; if it is not text, set `contentType` to `html` or `node`.
   * @param {String} [popper.contentType='text'] If `html`, the `content` will be parsed as HTML. If `node`, it will be appended as-is.
   * @param {String} [popper.arrowTagName='div'] Same as `popper.tagName` but for the arrow element.
   * @param {Array} [popper.arrowClassNames='popper__arrow'] Same as `popper.classNames` but for the arrow element.
   * @param {String} [popper.arrowAttributes=['x-arrow']] Same as `popper.attributes` but for the arrow element.
   * @param {Object} options
   * @param {String} [options.placement=bottom]
   *      Placement of the popper accepted values: `top(-start, -end), right(-start, -end), bottom(-start, -right),
   *      left(-start, -end)`
   *
   * @param {HTMLElement|String} [options.arrowElement='[x-arrow]']
   *      The DOM Node used as arrow for the popper, or a CSS selector used to get the DOM node. It must be child of
   *      its parent Popper. Popper.js will apply to the given element the style required to align the arrow with its
   *      reference element.
   *      By default, it will look for a child node of the popper with the `x-arrow` attribute.
   *
   * @param {Boolean} [options.gpuAcceleration=true]
   *      When this property is set to true, the popper position will be applied using CSS3 translate3d, allowing the
   *      browser to use the GPU to accelerate the rendering.
   *      If set to false, the popper will be placed using `top` and `left` properties, not using the GPU.
   *
   * @param {Number} [options.offset=0]
   *      Amount of pixels the popper will be shifted (can be negative).
   *
   * @param {String|Element} [options.boundariesElement='viewport']
   *      The element which will define the boundaries of the popper position, the popper will never be placed outside
   *      of the defined boundaries (except if `keepTogether` is enabled)
   *
   * @param {Number} [options.boundariesPadding=5]
   *      Additional padding for the boundaries
   *
   * @param {Array} [options.preventOverflowOrder=['left', 'right', 'top', 'bottom']]
   *      Order used when Popper.js tries to avoid overflows from the boundaries, they will be checked in order,
   *      this means that the last ones will never overflow
   *
   * @param {String|Array} [options.flipBehavior='flip']
   *      The behavior used by the `flip` modifier to change the placement of the popper when the latter is trying to
   *      overlap its reference element. Defining `flip` as value, the placement will be flipped on
   *      its axis (`right - left`, `top - bottom`).
   *      You can even pass an array of placements (eg: `['right', 'left', 'top']` ) to manually specify
   *      how alter the placement when a flip is needed. (eg. in the above example, it would first flip from right to left,
   *      then, if even in its new placement, the popper is overlapping its reference element, it will be moved to top)
   *
   * @param {Array} [options.modifiers=[ 'shift', 'offset', 'preventOverflow', 'keepTogether', 'arrow', 'flip', 'applyStyle']]
   *      List of functions used to modify the data before they are applied to the popper, add your custom functions
   *      to this array to edit the offsets and placement.
   *      The function should reflect the @params and @returns of preventOverflow
   *
   * @param {Array} [options.modifiersIgnored=[]]
   *      Put here any built-in modifier name you want to exclude from the modifiers list
   *      The function should reflect the @params and @returns of preventOverflow
   *
   * @param {Boolean} [options.removeOnDestroy=false]
   *      Set to true if you want to automatically remove the popper when you call the `destroy` method.
   */

  function Popper(reference, popper, options) {
    this._reference = reference.jquery ? reference[0] : reference;
    this.state = {}; // if the popper variable is a configuration object, parse it to generate an HTMLElement
    // generate a default popper if is not defined

    var isNotDefined = typeof popper === 'undefined' || popper === null;
    var isConfig = popper && Object.prototype.toString.call(popper) === '[object Object]';

    if (isNotDefined || isConfig) {
      this._popper = this.parse(isConfig ? popper : {});
    } // otherwise, use the given HTMLElement as popper
    else {
        this._popper = popper.jquery ? popper[0] : popper;
      } // with {} we create a new object with the options inside it


    this._options = Object.assign({}, DEFAULTS, options); // refactoring modifiers' list

    this._options.modifiers = this._options.modifiers.map(function (modifier) {
      // remove ignored modifiers
      if (this._options.modifiersIgnored.indexOf(modifier) !== -1) return; // set the x-placement attribute before everything else because it could be used to add margins to the popper
      // margins needs to be calculated to get the correct popper offsets

      if (modifier === 'applyStyle') {
        this._popper.setAttribute('x-placement', this._options.placement);
      } // return predefined modifier identified by string or keep the custom one


      return this.modifiers[modifier] || modifier;
    }.bind(this)); // make sure to apply the popper position before any computation

    this.state.position = this._getPosition(this._popper, this._reference);
    setStyle(this._popper, {
      position: this.state.position,
      top: 0
    }); // fire the first update to position the popper in the right place

    this.update(); // setup event listeners, they will take care of update the position in specific situations

    this._setupEventListeners();

    return this;
  } //
  // Methods
  //

  /**
   * Destroy the popper
   * @method
   * @memberof Popper
   */


  Popper.prototype.destroy = function () {
    this._popper.removeAttribute('x-placement');

    this._popper.style.left = '';
    this._popper.style.position = '';
    this._popper.style.top = '';
    this._popper.style[getSupportedPropertyName('transform')] = '';

    this._removeEventListeners(); // remove the popper if user explicity asked for the deletion on destroy


    if (this._options.removeOnDestroy) {
      this._popper.remove();
    }

    return this;
  };
  /**
   * Updates the position of the popper, computing the new offsets and applying the new style
   * @method
   * @memberof Popper
   */


  Popper.prototype.update = function () {
    var data = {
      instance: this,
      styles: {}
    }; // store placement inside the data object, modifiers will be able to edit `placement` if needed
    // and refer to _originalPlacement to know the original value

    data.placement = this._options.placement;
    data._originalPlacement = this._options.placement; // compute the popper and reference offsets and put them inside data.offsets

    data.offsets = this._getOffsets(this._popper, this._reference, data.placement); // get boundaries

    data.boundaries = this._getBoundaries(data, this._options.boundariesPadding, this._options.boundariesElement);
    data = this.runModifiers(data, this._options.modifiers);

    if (typeof this.state.updateCallback === 'function') {
      this.state.updateCallback(data);
    }
  };
  /**
   * If a function is passed, it will be executed after the initialization of popper with as first argument the Popper instance.
   * @method
   * @memberof Popper
   * @param {Function} callback
   */


  Popper.prototype.onCreate = function (callback) {
    // the createCallbacks return as first argument the popper instance
    callback(this);
    return this;
  };
  /**
   * If a function is passed, it will be executed after each update of popper with as first argument the set of coordinates and informations
   * used to style popper and its arrow.
   * NOTE: it doesn't get fired on the first call of the `Popper.update()` method inside the `Popper` constructor!
   * @method
   * @memberof Popper
   * @param {Function} callback
   */


  Popper.prototype.onUpdate = function (callback) {
    this.state.updateCallback = callback;
    return this;
  };
  /**
   * Helper used to generate poppers from a configuration file
   * @method
   * @memberof Popper
   * @param config {Object} configuration
   * @returns {HTMLElement} popper
   */


  Popper.prototype.parse = function (config) {
    var defaultConfig = {
      tagName: 'div',
      classNames: ['popper'],
      attributes: [],
      parent: root.document.body,
      content: '',
      contentType: 'text',
      arrowTagName: 'div',
      arrowClassNames: ['popper__arrow'],
      arrowAttributes: ['x-arrow']
    };
    config = Object.assign({}, defaultConfig, config);
    var d = root.document;
    var popper = d.createElement(config.tagName);
    addClassNames(popper, config.classNames);
    addAttributes(popper, config.attributes);

    if (config.contentType === 'node') {
      popper.appendChild(config.content.jquery ? config.content[0] : config.content);
    } else if (config.contentType === 'html') {
      popper.innerHTML = config.content;
    } else {
      popper.textContent = config.content;
    }

    if (config.arrowTagName) {
      var arrow = d.createElement(config.arrowTagName);
      addClassNames(arrow, config.arrowClassNames);
      addAttributes(arrow, config.arrowAttributes);
      popper.appendChild(arrow);
    }

    var parent = config.parent.jquery ? config.parent[0] : config.parent; // if the given parent is a string, use it to match an element
    // if more than one element is matched, the first one will be used as parent
    // if no elements are matched, the script will throw an error

    if (typeof parent === 'string') {
      parent = d.querySelectorAll(config.parent);

      if (parent.length > 1) {
        console.warn('WARNING: the given `parent` query(' + config.parent + ') matched more than one element, the first one will be used');
      }

      if (parent.length === 0) {
        throw 'ERROR: the given `parent` doesn\'t exists!';
      }

      parent = parent[0];
    } // if the given parent is a DOM nodes list or an array of nodes with more than one element,
    // the first one will be used as parent


    if (parent.length > 1 && parent instanceof Element === false) {
      console.warn('WARNING: you have passed as parent a list of elements, the first one will be used');
      parent = parent[0];
    } // append the generated popper to its parent


    parent.appendChild(popper);
    return popper;
    /**
     * Adds class names to the given element
     * @function
     * @ignore
     * @param {HTMLElement} target
     * @param {Array} classes
     */

    function addClassNames(element, classNames) {
      classNames.forEach(function (className) {
        element.classList.add(className);
      });
    }
    /**
     * Adds attributes to the given element
     * @function
     * @ignore
     * @param {HTMLElement} target
     * @param {Array} attributes
     * @example
     * addAttributes(element, [ 'data-info:foobar' ]);
     */


    function addAttributes(element, attributes) {
      attributes.forEach(function (attribute) {
        element.setAttribute(attribute.split(':')[0], attribute.split(':')[1] || '');
      });
    }
  };
  /**
   * Helper used to get the position which will be applied to the popper
   * @method
   * @memberof Popper
   * @param config {HTMLElement} popper element
   * @param reference {HTMLElement} reference element
   * @returns {String} position
   */


  Popper.prototype._getPosition = function (popper, reference) {
    var container = getOffsetParent(reference);

    if (this._options.forceAbsolute) {
      return 'absolute';
    } // Decide if the popper will be fixed
    // If the reference element is inside a fixed context, the popper will be fixed as well to allow them to scroll together


    var isParentFixed = isFixed(reference, container);
    return isParentFixed ? 'fixed' : 'absolute';
  };
  /**
   * Get offsets to the popper
   * @method
   * @memberof Popper
   * @access private
   * @param {Element} popper - the popper element
   * @param {Element} reference - the reference element (the popper will be relative to this)
   * @returns {Object} An object containing the offsets which will be applied to the popper
   */


  Popper.prototype._getOffsets = function (popper, reference, placement) {
    placement = placement.split('-')[0];
    var popperOffsets = {};
    popperOffsets.position = this.state.position;
    var isParentFixed = popperOffsets.position === 'fixed'; //
    // Get reference element position
    //

    var referenceOffsets = getOffsetRectRelativeToCustomParent(reference, getOffsetParent(popper), isParentFixed); //
    // Get popper sizes
    //

    var popperRect = getOuterSizes(popper); //
    // Compute offsets of popper
    //
    // depending by the popper placement we have to compute its offsets slightly differently

    if (['right', 'left'].indexOf(placement) !== -1) {
      popperOffsets.top = referenceOffsets.top + referenceOffsets.height / 2 - popperRect.height / 2;

      if (placement === 'left') {
        popperOffsets.left = referenceOffsets.left - popperRect.width;
      } else {
        popperOffsets.left = referenceOffsets.right;
      }
    } else {
      popperOffsets.left = referenceOffsets.left + referenceOffsets.width / 2 - popperRect.width / 2;

      if (placement === 'top') {
        popperOffsets.top = referenceOffsets.top - popperRect.height;
      } else {
        popperOffsets.top = referenceOffsets.bottom;
      }
    } // Add width and height to our offsets object


    popperOffsets.width = popperRect.width;
    popperOffsets.height = popperRect.height;
    return {
      popper: popperOffsets,
      reference: referenceOffsets
    };
  };
  /**
   * Setup needed event listeners used to update the popper position
   * @method
   * @memberof Popper
   * @access private
   */


  Popper.prototype._setupEventListeners = function () {
    // NOTE: 1 DOM access here
    this.state.updateBound = this.update.bind(this);
    root.addEventListener('resize', this.state.updateBound); // if the boundariesElement is window we don't need to listen for the scroll event

    if (this._options.boundariesElement !== 'window') {
      var target = getScrollParent(this._reference); // here it could be both `body` or `documentElement` thanks to Firefox, we then check both

      if (target === root.document.body || target === root.document.documentElement) {
        target = root;
      }

      target.addEventListener('scroll', this.state.updateBound);
      this.state.scrollTarget = target;
    }
  };
  /**
   * Remove event listeners used to update the popper position
   * @method
   * @memberof Popper
   * @access private
   */


  Popper.prototype._removeEventListeners = function () {
    // NOTE: 1 DOM access here
    root.removeEventListener('resize', this.state.updateBound);

    if (this._options.boundariesElement !== 'window' && this.state.scrollTarget) {
      this.state.scrollTarget.removeEventListener('scroll', this.state.updateBound);
      this.state.scrollTarget = null;
    }

    this.state.updateBound = null;
  };
  /**
   * Computed the boundaries limits and return them
   * @method
   * @memberof Popper
   * @access private
   * @param {Object} data - Object containing the property "offsets" generated by `_getOffsets`
   * @param {Number} padding - Boundaries padding
   * @param {Element} boundariesElement - Element used to define the boundaries
   * @returns {Object} Coordinates of the boundaries
   */


  Popper.prototype._getBoundaries = function (data, padding, boundariesElement) {
    // NOTE: 1 DOM access here
    var boundaries = {};
    var width, height;

    if (boundariesElement === 'window') {
      var body = root.document.body,
          html = root.document.documentElement;
      height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
      width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
      boundaries = {
        top: 0,
        right: width,
        bottom: height,
        left: 0
      };
    } else if (boundariesElement === 'viewport') {
      var offsetParent = getOffsetParent(this._popper);
      var scrollParent = getScrollParent(this._popper);
      var offsetParentRect = getOffsetRect(offsetParent); // Thanks the fucking native API, `document.body.scrollTop` & `document.documentElement.scrollTop`

      var getScrollTopValue = function getScrollTopValue(element) {
        return element == document.body ? Math.max(document.documentElement.scrollTop, document.body.scrollTop) : element.scrollTop;
      };

      var getScrollLeftValue = function getScrollLeftValue(element) {
        return element == document.body ? Math.max(document.documentElement.scrollLeft, document.body.scrollLeft) : element.scrollLeft;
      }; // if the popper is fixed we don't have to substract scrolling from the boundaries


      var scrollTop = data.offsets.popper.position === 'fixed' ? 0 : getScrollTopValue(scrollParent);
      var scrollLeft = data.offsets.popper.position === 'fixed' ? 0 : getScrollLeftValue(scrollParent);
      boundaries = {
        top: 0 - (offsetParentRect.top - scrollTop),
        right: root.document.documentElement.clientWidth - (offsetParentRect.left - scrollLeft),
        bottom: root.document.documentElement.clientHeight - (offsetParentRect.top - scrollTop),
        left: 0 - (offsetParentRect.left - scrollLeft)
      };
    } else {
      if (getOffsetParent(this._popper) === boundariesElement) {
        boundaries = {
          top: 0,
          left: 0,
          right: boundariesElement.clientWidth,
          bottom: boundariesElement.clientHeight
        };
      } else {
        boundaries = getOffsetRect(boundariesElement);
      }
    }

    boundaries.left += padding;
    boundaries.right -= padding;
    boundaries.top = boundaries.top + padding;
    boundaries.bottom = boundaries.bottom - padding;
    return boundaries;
  };
  /**
   * Loop trough the list of modifiers and run them in order, each of them will then edit the data object
   * @method
   * @memberof Popper
   * @access public
   * @param {Object} data
   * @param {Array} modifiers
   * @param {Function} ends
   */


  Popper.prototype.runModifiers = function (data, modifiers, ends) {
    var modifiersToRun = modifiers.slice();

    if (ends !== undefined) {
      modifiersToRun = this._options.modifiers.slice(0, getArrayKeyIndex(this._options.modifiers, ends));
    }

    modifiersToRun.forEach(function (modifier) {
      if (isFunction(modifier)) {
        data = modifier.call(this, data);
      }
    }.bind(this));
    return data;
  };
  /**
   * Helper used to know if the given modifier depends from another one.
   * @method
   * @memberof Popper
   * @param {String} requesting - name of requesting modifier
   * @param {String} requested - name of requested modifier
   * @returns {Boolean}
   */


  Popper.prototype.isModifierRequired = function (requesting, requested) {
    var index = getArrayKeyIndex(this._options.modifiers, requesting);
    return !!this._options.modifiers.slice(0, index).filter(function (modifier) {
      return modifier === requested;
    }).length;
  }; //
  // Modifiers
  //

  /**
   * Modifiers list
   * @namespace Popper.modifiers
   * @memberof Popper
   * @type {Object}
   */


  Popper.prototype.modifiers = {};
  /**
   * Apply the computed styles to the popper element
   * @method
   * @memberof Popper.modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @returns {Object} The same data object
   */

  Popper.prototype.modifiers.applyStyle = function (data) {
    // apply the final offsets to the popper
    // NOTE: 1 DOM access here
    var styles = {
      position: data.offsets.popper.position
    }; // round top and left to avoid blurry text

    var left = Math.round(data.offsets.popper.left);
    var top = Math.round(data.offsets.popper.top); // if gpuAcceleration is set to true and transform is supported, we use `translate3d` to apply the position to the popper
    // we automatically use the supported prefixed version if needed

    var prefixedProperty;

    if (this._options.gpuAcceleration && (prefixedProperty = getSupportedPropertyName('transform'))) {
      styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
      styles.top = 0;
      styles.left = 0;
    } // othwerise, we use the standard `left` and `top` properties
    else {
        styles.left = left;
        styles.top = top;
      } // any property present in `data.styles` will be applied to the popper,
    // in this way we can make the 3rd party modifiers add custom styles to it
    // Be aware, modifiers could override the properties defined in the previous
    // lines of this modifier!


    Object.assign(styles, data.styles);
    setStyle(this._popper, styles); // set an attribute which will be useful to style the tooltip (use it to properly position its arrow)
    // NOTE: 1 DOM access here

    this._popper.setAttribute('x-placement', data.placement); // if the arrow modifier is required and the arrow style has been computed, apply the arrow style


    if (this.isModifierRequired(this.modifiers.applyStyle, this.modifiers.arrow) && data.offsets.arrow) {
      setStyle(data.arrowElement, data.offsets.arrow);
    }

    return data;
  };
  /**
   * Modifier used to shift the popper on the start or end of its reference element side
   * @method
   * @memberof Popper.modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @returns {Object} The data object, properly modified
   */


  Popper.prototype.modifiers.shift = function (data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var shiftVariation = placement.split('-')[1]; // if shift shiftVariation is specified, run the modifier

    if (shiftVariation) {
      var reference = data.offsets.reference;
      var popper = getPopperClientRect(data.offsets.popper);
      var shiftOffsets = {
        y: {
          start: {
            top: reference.top
          },
          end: {
            top: reference.top + reference.height - popper.height
          }
        },
        x: {
          start: {
            left: reference.left
          },
          end: {
            left: reference.left + reference.width - popper.width
          }
        }
      };
      var axis = ['bottom', 'top'].indexOf(basePlacement) !== -1 ? 'x' : 'y';
      data.offsets.popper = Object.assign(popper, shiftOffsets[axis][shiftVariation]);
    }

    return data;
  };
  /**
   * Modifier used to make sure the popper does not overflows from it's boundaries
   * @method
   * @memberof Popper.modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @returns {Object} The data object, properly modified
   */


  Popper.prototype.modifiers.preventOverflow = function (data) {
    var order = this._options.preventOverflowOrder;
    var popper = getPopperClientRect(data.offsets.popper);
    var check = {
      left: function left() {
        var left = popper.left;

        if (popper.left < data.boundaries.left) {
          left = Math.max(popper.left, data.boundaries.left);
        }

        return {
          left: left
        };
      },
      right: function right() {
        var left = popper.left;

        if (popper.right > data.boundaries.right) {
          left = Math.min(popper.left, data.boundaries.right - popper.width);
        }

        return {
          left: left
        };
      },
      top: function top() {
        var top = popper.top;

        if (popper.top < data.boundaries.top) {
          top = Math.max(popper.top, data.boundaries.top);
        }

        return {
          top: top
        };
      },
      bottom: function bottom() {
        var top = popper.top;

        if (popper.bottom > data.boundaries.bottom) {
          top = Math.min(popper.top, data.boundaries.bottom - popper.height);
        }

        return {
          top: top
        };
      }
    };
    order.forEach(function (direction) {
      data.offsets.popper = Object.assign(popper, check[direction]());
    });
    return data;
  };
  /**
   * Modifier used to make sure the popper is always near its reference
   * @method
   * @memberof Popper.modifiers
   * @argument {Object} data - The data object generated by _update method
   * @returns {Object} The data object, properly modified
   */


  Popper.prototype.modifiers.keepTogether = function (data) {
    var popper = getPopperClientRect(data.offsets.popper);
    var reference = data.offsets.reference;
    var f = Math.floor;

    if (popper.right < f(reference.left)) {
      data.offsets.popper.left = f(reference.left) - popper.width;
    }

    if (popper.left > f(reference.right)) {
      data.offsets.popper.left = f(reference.right);
    }

    if (popper.bottom < f(reference.top)) {
      data.offsets.popper.top = f(reference.top) - popper.height;
    }

    if (popper.top > f(reference.bottom)) {
      data.offsets.popper.top = f(reference.bottom);
    }

    return data;
  };
  /**
   * Modifier used to flip the placement of the popper when the latter is starting overlapping its reference element.
   * Requires the `preventOverflow` modifier before it in order to work.
   * **NOTE:** This modifier will run all its previous modifiers everytime it tries to flip the popper!
   * @method
   * @memberof Popper.modifiers
   * @argument {Object} data - The data object generated by _update method
   * @returns {Object} The data object, properly modified
   */


  Popper.prototype.modifiers.flip = function (data) {
    // check if preventOverflow is in the list of modifiers before the flip modifier.
    // otherwise flip would not work as expected.
    if (!this.isModifierRequired(this.modifiers.flip, this.modifiers.preventOverflow)) {
      console.warn('WARNING: preventOverflow modifier is required by flip modifier in order to work, be sure to include it before flip!');
      return data;
    }

    if (data.flipped && data.placement === data._originalPlacement) {
      // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
      return data;
    }

    var placement = data.placement.split('-')[0];
    var placementOpposite = getOppositePlacement(placement);
    var variation = data.placement.split('-')[1] || '';
    var flipOrder = [];

    if (this._options.flipBehavior === 'flip') {
      flipOrder = [placement, placementOpposite];
    } else {
      flipOrder = this._options.flipBehavior;
    }

    flipOrder.forEach(function (step, index) {
      if (placement !== step || flipOrder.length === index + 1) {
        return;
      }

      placement = data.placement.split('-')[0];
      placementOpposite = getOppositePlacement(placement);
      var popperOffsets = getPopperClientRect(data.offsets.popper); // this boolean is used to distinguish right and bottom from top and left
      // they need different computations to get flipped

      var a = ['right', 'bottom'].indexOf(placement) !== -1; // using Math.floor because the reference offsets may contain decimals we are not going to consider here

      if (a && Math.floor(data.offsets.reference[placement]) > Math.floor(popperOffsets[placementOpposite]) || !a && Math.floor(data.offsets.reference[placement]) < Math.floor(popperOffsets[placementOpposite])) {
        // we'll use this boolean to detect any flip loop
        data.flipped = true;
        data.placement = flipOrder[index + 1];

        if (variation) {
          data.placement += '-' + variation;
        }

        data.offsets.popper = this._getOffsets(this._popper, this._reference, data.placement).popper;
        data = this.runModifiers(data, this._options.modifiers, this._flip);
      }
    }.bind(this));
    return data;
  };
  /**
   * Modifier used to add an offset to the popper, useful if you more granularity positioning your popper.
   * The offsets will shift the popper on the side of its reference element.
   * @method
   * @memberof Popper.modifiers
   * @argument {Object} data - The data object generated by _update method
   * @returns {Object} The data object, properly modified
   */


  Popper.prototype.modifiers.offset = function (data) {
    var offset = this._options.offset;
    var popper = data.offsets.popper;

    if (data.placement.indexOf('left') !== -1) {
      popper.top -= offset;
    } else if (data.placement.indexOf('right') !== -1) {
      popper.top += offset;
    } else if (data.placement.indexOf('top') !== -1) {
      popper.left -= offset;
    } else if (data.placement.indexOf('bottom') !== -1) {
      popper.left += offset;
    }

    return data;
  };
  /**
   * Modifier used to move the arrows on the edge of the popper to make sure them are always between the popper and the reference element
   * It will use the CSS outer size of the arrow element to know how many pixels of conjuction are needed
   * @method
   * @memberof Popper.modifiers
   * @argument {Object} data - The data object generated by _update method
   * @returns {Object} The data object, properly modified
   */


  Popper.prototype.modifiers.arrow = function (data) {
    var arrow = this._options.arrowElement;
    var arrowOffset = this._options.arrowOffset; // if the arrowElement is a string, suppose it's a CSS selector

    if (typeof arrow === 'string') {
      arrow = this._popper.querySelector(arrow);
    } // if arrow element is not found, don't run the modifier


    if (!arrow) {
      return data;
    } // the arrow element must be child of its popper


    if (!this._popper.contains(arrow)) {
      console.warn('WARNING: `arrowElement` must be child of its popper element!');
      return data;
    } // arrow depends on keepTogether in order to work


    if (!this.isModifierRequired(this.modifiers.arrow, this.modifiers.keepTogether)) {
      console.warn('WARNING: keepTogether modifier is required by arrow modifier in order to work, be sure to include it before arrow!');
      return data;
    }

    var arrowStyle = {};
    var placement = data.placement.split('-')[0];
    var popper = getPopperClientRect(data.offsets.popper);
    var reference = data.offsets.reference;
    var isVertical = ['left', 'right'].indexOf(placement) !== -1;
    var len = isVertical ? 'height' : 'width';
    var side = isVertical ? 'top' : 'left';
    var translate = isVertical ? 'translateY' : 'translateX';
    var altSide = isVertical ? 'left' : 'top';
    var opSide = isVertical ? 'bottom' : 'right';
    var arrowSize = getOuterSizes(arrow)[len]; //
    // extends keepTogether behavior making sure the popper and its reference have enough pixels in conjuction
    //
    // top/left side

    if (reference[opSide] - arrowSize < popper[side]) {
      data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowSize);
    } // bottom/right side


    if (reference[side] + arrowSize > popper[opSide]) {
      data.offsets.popper[side] += reference[side] + arrowSize - popper[opSide];
    } // compute center of the popper


    var center = reference[side] + (arrowOffset || reference[len] / 2 - arrowSize / 2);
    var sideValue = center - popper[side]; // prevent arrow from being placed not contiguously to its popper

    sideValue = Math.max(Math.min(popper[len] - arrowSize - 8, sideValue), 8);
    arrowStyle[side] = sideValue;
    arrowStyle[altSide] = ''; // make sure to remove any old style from the arrow

    data.offsets.arrow = arrowStyle;
    data.arrowElement = arrow;
    return data;
  }; //
  // Helpers
  //

  /**
   * Get the outer sizes of the given element (offset size + margins)
   * @function
   * @ignore
   * @argument {Element} element
   * @returns {Object} object containing width and height properties
   */


  function getOuterSizes(element) {
    // NOTE: 1 DOM access here
    var _display = element.style.display,
        _visibility = element.style.visibility;
    element.style.display = 'block';
    element.style.visibility = 'hidden';
    var calcWidthToForceRepaint = element.offsetWidth; // original method

    var styles = root.getComputedStyle(element);
    var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
    var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
    var result = {
      width: element.offsetWidth + y,
      height: element.offsetHeight + x
    }; // reset element styles

    element.style.display = _display;
    element.style.visibility = _visibility;
    return result;
  }
  /**
   * Get the opposite placement of the given one/
   * @function
   * @ignore
   * @argument {String} placement
   * @returns {String} flipped placement
   */


  function getOppositePlacement(placement) {
    var hash = {
      left: 'right',
      right: 'left',
      bottom: 'top',
      top: 'bottom'
    };
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash[matched];
    });
  }
  /**
   * Given the popper offsets, generate an output similar to getBoundingClientRect
   * @function
   * @ignore
   * @argument {Object} popperOffsets
   * @returns {Object} ClientRect like output
   */


  function getPopperClientRect(popperOffsets) {
    var offsets = Object.assign({}, popperOffsets);
    offsets.right = offsets.left + offsets.width;
    offsets.bottom = offsets.top + offsets.height;
    return offsets;
  }
  /**
   * Given an array and the key to find, returns its index
   * @function
   * @ignore
   * @argument {Array} arr
   * @argument keyToFind
   * @returns index or null
   */


  function getArrayKeyIndex(arr, keyToFind) {
    var i = 0,
        key;

    for (key in arr) {
      if (arr[key] === keyToFind) {
        return i;
      }

      i++;
    }

    return null;
  }
  /**
   * Get CSS computed property of the given element
   * @function
   * @ignore
   * @argument {Eement} element
   * @argument {String} property
   */


  function getStyleComputedProperty(element, property) {
    // NOTE: 1 DOM access here
    var css = root.getComputedStyle(element, null);
    return css[property];
  }
  /**
   * Returns the offset parent of the given element
   * @function
   * @ignore
   * @argument {Element} element
   * @returns {Element} offset parent
   */


  function getOffsetParent(element) {
    // NOTE: 1 DOM access here
    var offsetParent = element.offsetParent;
    return offsetParent === root.document.body || !offsetParent ? root.document.documentElement : offsetParent;
  }
  /**
   * Returns the scrolling parent of the given element
   * @function
   * @ignore
   * @argument {Element} element
   * @returns {Element} offset parent
   */


  function getScrollParent(element) {
    var parent = element.parentNode;

    if (!parent) {
      return element;
    }

    if (parent === root.document) {
      // Firefox puts the scrollTOp value on `documentElement` instead of `body`, we then check which of them is
      // greater than 0 and return the proper element
      if (root.document.body.scrollTop || root.document.body.scrollLeft) {
        return root.document.body;
      } else {
        return root.document.documentElement;
      }
    } // Firefox want us to check `-x` and `-y` variations as well


    if (['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow')) !== -1 || ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow-x')) !== -1 || ['scroll', 'auto'].indexOf(getStyleComputedProperty(parent, 'overflow-y')) !== -1) {
      // If the detected scrollParent is body, we perform an additional check on its parentNode
      // in this way we'll get body if the browser is Chrome-ish, or documentElement otherwise
      // fixes issue #65
      return parent;
    }

    return getScrollParent(element.parentNode);
  }
  /**
   * Check if the given element is fixed or is inside a fixed parent
   * @function
   * @ignore
   * @argument {Element} element
   * @argument {Element} customContainer
   * @returns {Boolean} answer to "isFixed?"
   */


  function isFixed(element) {
    if (element === root.document.body) {
      return false;
    }

    if (getStyleComputedProperty(element, 'position') === 'fixed') {
      return true;
    }

    return element.parentNode ? isFixed(element.parentNode) : element;
  }
  /**
   * Set the style to the given popper
   * @function
   * @ignore
   * @argument {Element} element - Element to apply the style to
   * @argument {Object} styles - Object with a list of properties and values which will be applied to the element
   */


  function setStyle(element, styles) {
    function is_numeric(n) {
      return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
    }

    Object.keys(styles).forEach(function (prop) {
      var unit = ''; // add unit if the value is numeric and is one of the following

      if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && is_numeric(styles[prop])) {
        unit = 'px';
      }

      element.style[prop] = styles[prop] + unit;
    });
  }
  /**
   * Check if the given variable is a function
   * @function
   * @ignore
   * @argument {*} functionToCheck - variable to check
   * @returns {Boolean} answer to: is a function?
   */


  function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
  }
  /**
   * Get the position of the given element, relative to its offset parent
   * @function
   * @ignore
   * @param {Element} element
   * @return {Object} position - Coordinates of the element and its `scrollTop`
   */


  function getOffsetRect(element) {
    var elementRect = {
      width: element.offsetWidth,
      height: element.offsetHeight,
      left: element.offsetLeft,
      top: element.offsetTop
    };
    elementRect.right = elementRect.left + elementRect.width;
    elementRect.bottom = elementRect.top + elementRect.height; // position

    return elementRect;
  }
  /**
   * Get bounding client rect of given element
   * @function
   * @ignore
   * @param {HTMLElement} element
   * @return {Object} client rect
   */


  function getBoundingClientRect(element) {
    var rect = element.getBoundingClientRect(); // whether the IE version is lower than 11

    var isIE = navigator.userAgent.indexOf("MSIE") != -1; // fix ie document bounding top always 0 bug

    var rectTop = isIE && element.tagName === 'HTML' ? -element.scrollTop : rect.top;
    return {
      left: rect.left,
      top: rectTop,
      right: rect.right,
      bottom: rect.bottom,
      width: rect.right - rect.left,
      height: rect.bottom - rectTop
    };
  }
  /**
   * Given an element and one of its parents, return the offset
   * @function
   * @ignore
   * @param {HTMLElement} element
   * @param {HTMLElement} parent
   * @return {Object} rect
   */


  function getOffsetRectRelativeToCustomParent(element, parent, fixed) {
    var elementRect = getBoundingClientRect(element);
    var parentRect = getBoundingClientRect(parent);

    if (fixed) {
      var scrollParent = getScrollParent(parent);
      parentRect.top += scrollParent.scrollTop;
      parentRect.bottom += scrollParent.scrollTop;
      parentRect.left += scrollParent.scrollLeft;
      parentRect.right += scrollParent.scrollLeft;
    }

    var rect = {
      top: elementRect.top - parentRect.top,
      left: elementRect.left - parentRect.left,
      bottom: elementRect.top - parentRect.top + elementRect.height,
      right: elementRect.left - parentRect.left + elementRect.width,
      width: elementRect.width,
      height: elementRect.height
    };
    return rect;
  }
  /**
   * Get the prefixed supported property name
   * @function
   * @ignore
   * @argument {String} property (camelCase)
   * @returns {String} prefixed property (camelCase)
   */


  function getSupportedPropertyName(property) {
    var prefixes = ['', 'ms', 'webkit', 'moz', 'o'];

    for (var i = 0; i < prefixes.length; i++) {
      var toCheck = prefixes[i] ? prefixes[i] + property.charAt(0).toUpperCase() + property.slice(1) : property;

      if (typeof root.document.body.style[toCheck] !== 'undefined') {
        return toCheck;
      }
    }

    return null;
  }
  /**
   * The Object.assign() method is used to copy the values of all enumerable own properties from one or more source
   * objects to a target object. It will return the target object.
   * This polyfill doesn't support symbol properties, since ES5 doesn't have symbols anyway
   * Source: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
   * @function
   * @ignore
   */


  if (!Object.assign) {
    Object.defineProperty(Object, 'assign', {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function value(target) {
        if (target === undefined || target === null) {
          throw new TypeError('Cannot convert first argument to object');
        }

        var to = Object(target);

        for (var i = 1; i < arguments.length; i++) {
          var nextSource = arguments[i];

          if (nextSource === undefined || nextSource === null) {
            continue;
          }

          nextSource = Object(nextSource);
          var keysArray = Object.keys(nextSource);

          for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

            if (desc !== undefined && desc.enumerable) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }

        return to;
      }
    });
  }

  return Popper;
});

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_node_content_vue_vue_type_style_index_0_id_3804d2f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_node_content_vue_vue_type_style_index_0_id_3804d2f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_node_content_vue_vue_type_style_index_0_id_3804d2f2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACQCAYAAACPtWCAAAAVPUlEQVR4Xu2dDZAjxXXH3xtJe7vavd2VTtLt7Ukz4iuG4gL47sDggqoQm3IZg32AA2cMVThOSCjHxia2STDYJhRxbMcxwYZKCmISwA448SeJDRibj5jYJNrNne9sbPNxM6Pd2ztpP2+Pu9VqNS/11tKiXUurHmn0MVJ3FcXuzevX3f/5bc90T/drhBZOyWTy4lwudxsiLgLALZqmPd/C1ZVVq0IBrCJPQ7Lour4FAF4FgG4uEBFnfD5fdHh4+FhDKiALaYgCLQtgMpl8ey6X+16xCj6fb/vWrVv/ryHKdEAhRNSDiMeb2dSWBdAwjEuI6LFicRRFOVtV1UQzBWuXstPp9LcA4B2IeGsoFPpcs9olAWyW8k0sl4h60+n00fyrzWg4HN7RrOpIAJulfBPLTafTG4noSL4KeyORyFnNqo4EsFnKN7HctgPQNM1hANiGiIlYLDbthLbyHdAJFX/jgwcbk5OTdwPABXmvChGdkv85g4h63i6LiA+Gw+HPO1f6+p5q7gF5tGpZ1jfyI6pJRLxcVdX/qrUBEsBaFXw9fzqdvpSIvivq0ev1DgaDwTlR+1rsagZQ13WeFll5h0DEo4h4ca0QSgBrua2r8x45cmTTwsLCtwHg/PW8IuISET0UiUT+0LnS69wD6rq+BwDOLC4GEV/LQ/hctQ2RAFarXPl8RLTc4czMzPQvLS3NFgYh4XD4jfwzIpLzpdYZQAYFAL5NRJ61ECqK8o5YLPZsNY2SAFajmliethuEJJPJqy3LerAEhMfyED4jJs3rVhJAu4qJ268BcE8kElnuAZuRan4HLFTaNM338PtDKQg9Hs8l0Wj0aTsNlADaUcu+bSqV+hkA/C4A3BuJRD5g34MzORwDkKtjmuZuInq4FIREdGk8Hv+RaLUlgKJKVWdHRN6ZmZlTg8Hg/uo8OJPLUQDzEF5FRF8tASF/9L5U07QfilRdAiiikvttHAeQJTEM40oAYAi9awYmDOE7NU17qpJ0EsBKCrXH9boAmIfwDwDga2shBIAFRGQIf7CehBLA9gCsUivqBiAXrOv6FYj4SCkIFUXZparqE+UqaJrm2yzLerz4utfrPSsaje6t1Ch53T0K1BVAliGZTF6ey+UeAQDfGlkWFEV5l6qqT5aSa2JiIpzJZF4BgI3564c1TYsj4oJ75JU1raRA3QHMQ3hZLpd7dC2EvMze7/dr4XB4vlRFDcPgT0d/QUSLXq/3dtn7Vbqd7rveEADzo+NdlmV9fS2E8rHqPmicrHHDAMxD+C7Lsv6tACEivqKq6umImHGyUdKXexRoKIAsy9jY2Hm5XO5GAJj3er13bN261XSPXLKmdhRIpVJDmUxGjUaj/1tuoUPDAbTTgHrY5ifIVy2cqEc5reAzv5+6KVUZGxs7N5fL/Zj1RsR/0TTtulIVaWsAZ2ZmBhVF4e2dlyDiNgDgvcahwrKkptyZxhZ6HBEP8oMHAPhb/HcCgQAvn6t7Mk3zy5ZlrXxjjsfjJVlrSwCPHj26OZvN3goA1xNRV93VdlcB/O33lmAwuGrLq9NN6FgAp6enbwAA3tPQ67So7eQPEZ/t6uq6ure3l3tIx1PHAUhEG2ZnZ+8looYtJ3f8rjXe4YTH47lsYGDghVqK1nX9BEQ8m4hWPjYg4nVE9NaCX0S8loiWV1x7PB6yLIs/LPywLR7B/E43MzPzrwBwVS1Cdmje44qiXDA4ODhSTfsNwziRiHhfUL/d/Ih4e0UAx8bGzlpaWuKXeL/dAortiehVTdMeqsec3+zs7J2WZd1SS/06PO/4hg0bzu7t7Z2wq4NhGNfwQmS7+fL2L6wLoK7rb+Z3hRKLCaoqDxGf0jTtoqoyl8k0Nzf3JsuyftJBI1sn5Sv29XgwGHy7XeeHDx/efPz48Z8CQNxOXkS0iOhP1gXQMIy7ieiDdhxXsu3p6RnavHnz4Up2Itfzj97/BoBzReylzfoKKIry1sHBQaEFw8WeUqlUXyaT4UfxyowDEX2ciHhJ3nJSFOUc3iPPP/O7oNfrTfNHiEoA3khEdzl143jxgaqqmxEx64TPubm53wrh5oTfDvbx02AweJ4T7XdkFMyjGnZERJfV+g7IwSaJ6MN29oVUEmJ6evphAHhvJTt5XVwBRIwHAgFDPEdpS0cArLUSTubfu3fvCdls9lLe8A4AJyHiFlVVexVFcbKYjveFiDcGAgGOI1NTahsAR0dHz7Qs604OplisiM/ng1gsVpNIMnNJBb4eDAZrns4yTfMGy7Lu5RIQ8Reapp1eqrSK0zDNukn79+/vWlhYuAsR/7TUCNfv98PQ0FCzqtfO5f44GAwWomhV3U4iUkzT5AHsiR6P555oNPpr1wCYSCS2ICJH3Cr7Qtzf3w+hUKhqgWTG0gog4quBQOCkRunTcj1gIpEYAAA+jqFkl10QRgJYH0QQ8XAgEGjYo6WlAOTpodHR0e8Xf0MsJ7MEUALouAKJRIJXSgvNO0oAHZd/2WHH9oAvvvjipmPHjr1ERAERaSWAIirZt+lYAEdGRj5NRJ8SlUwCKKqUPbuOBTCRSPwSAN4gKpcEUFQpe3YdCWAikeA4dRyvTjhJAIWlsmXYkQCOjo5eyxFW7SglAbSjlrhtRwKYSCQ+CQC3i8sEIAG0o5a4bacCeB8A/JG4TBJAO1rZse1IAEdGRh4gopIbl+VEtB18areVAApqKB/BgkLZNHM9gPPz85FMJqMpinI8EAi8JLIJSfaANimpo7lrAUyn0zuJ6Etr9me8BgAPhMPhv+QjvMrpJgGsI1E2XbsSwFQqdQvv8QQACwC+CQAjRBRExLcQEW9G0RHxinA4PFpKDwmgTUrqaO46AFOpFC+R/09EfMnj8VxefO4ELySdmpq6gYi+DAAvh0KhsxDx2Fr9WglAj8c9gbM40IBl8d+8c8lVABKRf3Jy8mUACAPAm8r1cKlUivcYfBAR/zYcDn+sFQHs7e0FXuaP2FIr1CqSlcvl4LXXXgP+vxPJVQBOTk5eZlnWNxHxR+Fw+C3lBJidnT1hcXHxVQBIh8PhId6UXGzb7B6Ql/dv2LDBifvXFB/cCx45coT329Zcvl0A+Sk3MTFxajab3UpEA4qipACAI98KBT2q6c89lUpxCLQ7EPGucDj8kfVan06n54io3+/3b+nr6zvUSgAODg66rudbqzX3gouLiw0DcHx8XM1mszcj4mVExHEX16Y9iqI8HIvF7lnvZIOaAEyn04UlVN+IRCLvLtd63qAyOTmZ4RXPiqJEQ6HQuASwZlZWOWgUgNzjmaZ5GxFxLJ6Kjw1EHEPE95c7jqNWAK/mc+EAYNLn850SCAQKhyCvEmdmZubMbDa7BxHnQ6FQABFXvbA0+xHM739dXe6NY8mPXn4EOzEgWe8RzKE3DMPg4zZ22fnz4fuNiB9SVXV5m2ZxqgnA2dnZQDab1fnRioiPhkKha/jY97WFpNPpH+T3efxzJBJ5X6sNQnjg0dfXB17vqqPt7GjcNFuGj3u/bNaRaCfrLsnXdf0rALDq/iHi/xDRfT6fb2RpaWmOwyAT0e8DAIfn3VwQhoOUK4pyRSwW+5ZjALKjVCr1fgC4n39GxBFFUT4DAC9s2rRp7MiRI5symcz9RMR/Mamenp5tGzduTLcagIX68BSMmyItMHw8+nVi8FEESsldcaZpXmVZFp94VUh80tWtsVjsi2sHlWwwNja2KZfL3UNExZvc57u7u08eGhrigcpyqqkHLDhJpVKr/jIQkR/FPD1zBnfb/OhVFOXKTZs2rTr7rZC/2Y/gpnVfLVhwqUdwPkbQL4noxKI/1otjsdj3KzVB13V+7HLY5OWkKMo9qqr+maMAsrOpqal353I5/hS3dk/pkz6f7/r1At5IACvdxsZdLwVgMplcFYUMEe/TNO16kVodOnSoN5PJ/KwAL3+SVVU1VFgj4EgPWKgInwkxPT19jmVZfKjgcY/HsycQCOiVKioBrKRQ466XAtAwjH/gYJL5WiwODAxsLjfgLFVT0zR3W5bFIZSXk8fjWek9HQWwWpkkgNUq53y+MgA+R0SFeDHPxOPxC+2UPDU11T8/P88DlMJj+KOqqn6Bf5EA2lGyA2zLAMj7tU9eBmadU4/Wk8cwjOmiPd9/F4/H/1wC2AFA2W1iGQD3ERGfNMUAPqpp2m67fg3DmCeivny+O+PxOH9Fkz2gXSHb3b4MgI8T0dvyAP5c07RlGEXT2NhYdGlpKVn0CP5AYVJaPoJFVewQu1IA6rp+GwD8VUECn8+3fevWrXw2iFAyDGNVrPHiM6IlgEISdo5RKQBN09xmWda+IhX2app2tkiw+enp6YH5+fkXCwsWEPGApmkr84nLABJR9/j4+Fkej+fQli1bKk6bOH075CjYaUWr91fuW7BhGI8R0SUFz4j4JVVVP7L2u35xyXx8mmEY/Olt5fwRRLxe0zTehruccHx8/A3ZbPYJANDy//aFeDz+0eqbYD+nBNC+ZvXKUQ7AgwcPnpbNZnmrRU9R2S90dXVdNzw8zHF9ViXDME4nIv5Eu3KGCyKOqqp6TjG0uJZs9uL1es+LRqN8+k1DkgSwITILFbLeahjDMK4EgEeKY3bnF588CwAJRDSIaBAAeJ6Q9wMVH2Fw2OfzncOH0xRXBHVd/wUAnFb8jx6P572xWOxrQjV2wEgC6ICIDrmotCI6mUxencvl/gkAukWL5P1CPp/vnaV6Su4B7yIijkxaSBmv13tyNBrlU7YbkloBQF4Jw2sC3bYpiZdhObESunCjKwHIdvkDLL8IAL9XARBeI3YfIt6qadpMKVvk1SrJZJLP2eWl1UlFUT5ebvVqvWhsNoC8GYkXpbptQ1LhfjCAvCbQiSQCYKEc0zQvIKIriOhCRIzmj2xd3hMCAN8jokfj8fiB9eolp2FYtf5+V/V8pW7o/Pw8LC391lpg20zaAdC28xIZJIAAEAgIhaV2Qu+6+Th27BhkMpma/UsABSV0MjjRwMCAq1ZCyx5QEBJRs2a/A/Lgg98B3Zp4IHL0aNnQO7aaJXtAQbmc7AG5SN6QxJvT3bYnhN/7FhYWBFWrbCYBrKzRsoXTAAoW2/ZmEkDBWywBFBTKppmTAOZ3xl1CRL+DiL8CgMfWzgfKUbDNG9Tu5k4BODY2duHS0hLvA1nZGwwAhxRFuUpV1ecKOkoA250om+1zAsCJiYlwJpP5eT5q2toaHPZ6vadHo9EpvuAIgLxvVGRtWDktmj0KtnmP2trcCQANw7ieiP6xnFCKonCsGN5LXjuApmneRES8WvZAT0/PRZFIZFXkK5G7JQEUUakxNk4AqOs673i7qVyNEfFzmqbdXDOA3PMZhsEfIX35wv46Ho9/wq5UEkC7itXP3gkAG9YD8kpqwzCOF8mxst3OjkQSQDtq1dfWCQAb9g4oAawvDM3w7gSAXG9d1zlCFo+CI0XtOOTxeHbHYjFewLqcbA1C0un0xsXFRV7xurKXZGlpied3fuMM8X6v13tH4ffh4eGDpcK1rRVW9oDNQK10mU4ByN55HtCyrEt5HhAAfqUoymOxWGy6uGRhAA3DuIaIeORSeN+rqBqH7SKiJzl6fiwWK35Ur8orAawoZcMMnARQpNLCAOq6zmd8vFHE6VobRVF2qar6nXJ5JYDVqFqfPK0M4Ko4b6LN514QEc9UVXW/BFBUtebZtSyAHHrNMIzdiBjG/Np1noYhos8WvQPyzqhnCr9blrXo9XqfikajT68naav0gNwst+0Jcep8kKJ7WDJCar3+JIQfwaUq0C6jYAavcFBNvYSul18OTM77QZxYjp8fSEoARW6Wk6th2iFK/tzcnCOxolv2EdzOPaA8qOb1u+s2ABXTNLNFO+Bd+SlOAuhSALnahmE8SETX5mNCvzkaje4ReYQW2zR7ECIfwS4GkKvO4bv6+vqSwWBwJQ6wHQibDaAchLgcQDuwlbJtNoCFOvGGJLdtSuroaZhawSvkbxUAnWqPm/24ahDilNASQKeUrN2PBFBQQyfnAQWL7AgzCaDgbZYACgpl00wCKCiYBFBQKJtmEkBBwSSAgkLZNJMACgomARQUyqaZBFBQMAmgoFA2zSSAgoJJAAWFsmkmARQUTAIoKJRNMwmgoGASQEGhbJpJAAUFkwAKCmXTTAIoKJgEUFAom2YSQEHBJICCQtk0kwAKCiYBFBTKppkEUFAwCaCgUDbNJICCgkkABYWyaSYBFBSsr68PIpHiwEuCGaVZJQV4a4Vaycip6zVtTHeqEtUsSO3p6YEtW7Y4VQXp53UFng8Gg+c3ShDXAsgnXMZisUbp1DHlIOLDgUDg2kY12LUAskCaprkqlkujbmot5SDijYFA4O5afNjJ62oAQ6HQ8olJMjmjAEcy6+rqivX29h50xmNlL64GsLu7G4aHhyu3UloIKYCITwcCAQ6t27DkagBZpaGhIfD7/Q0TrJ0L8nq95/f39z/fyDa6HkA+ajUa5dPiZapRgUeDweDuGn3Yzu56ALnFclLa9n1flQERX/F4POf29/dP1ubJfu62AJCbLQck9m8+50DEGY/Hc15/f//KaQfVeaouV0sAmEgk/h4APlRdE17PFQwGgUOtySSmACK+7PV6d23cuJEPFmxKagkAR0dHb7Ys62+cUIBDrXFv6KZYz060264PRPx3APjjQCAwazevk/YtAeDIyAifQfKQUw3jCFcDAwPL/7kp2pVT7V/PD0+1eDyeT/T39/+kEeVVKqMlANy3b18sk8mYlSpbzXX+ZszTNDxa5l7R6/VW48aVeXhlCyIeAIAkADzT3d39Xb/fP9ZKjWkJAFmQRCIxAgDbW0kcN9cFEfUdO3ac0OptaBkAR0dHb7Isi8+ZlckBBRRF+cz27dtvccBVXV20DIAHDhzonpqa+jUAyCUuNd5ynlrx+/2nnHbaaVM1uqp79pYBkFs6Ojp6rWVZD9a91e1fwId37tzJU1stn1oKQFZrZGTkK0T0vpZXrkUriIj/sX379l2ImGvRKq6qVssBuH///q5MJvMUEV3gBgFbrI57uru7L9i2bdvRFqtX2eq0HID5EbEfER8goivdImSz64mIT/h8vvecccYZM82ui53yWxLAQgNGRkY+BgCfJKI+O43qJFtEzBDR53fs2PEpXlDqtra3NIAs5r59+zYvLi7eln8vlAv/8oQh4iIAfJWIPr1z5866TOI3AuaWB7AgAk/TTE9PX0REFwPASQDAW+L47GKlEUI1uQwCAJ5SOUhEBxRFedzv9z956qmnzje5XjUX//+Bxzq2glIbTgAAAABJRU5ErkJggg=="

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_tree_lite_vue_vue_type_style_index_0_id_5dda0a70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_tree_lite_vue_vue_type_style_index_0_id_5dda0a70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_tree_lite_vue_vue_type_style_index_0_id_5dda0a70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_46df7818_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_46df7818_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_46df7818_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(109);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(111)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(110)(false);
// Module
exports.push([module.i, "/* 淡入淡出css */\r\n.fade {\r\n    -webkit-transition: opacity 0.3s linear;\r\n    -moz-transition: opacity 0.3s linear;\r\n    -o-transition: opacity 0.3s linear;\r\n    transition: opacity 0.3s linear;\r\n    opacity:0;\r\n    filter:alpha(opacity=0);\r\n  } \r\n.fadein{\r\n    opacity:1;\r\n    display: block;\r\n    filter:alpha(opacity=1);\r\n}\r\n\r\n", ""]);



/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(112);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 112 */
/***/ (function(module, exports) {

/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  } // blank or null?


  if (!css || typeof css !== "string") {
    return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

  /*
  This regular expression is just a way to recursively match brackets within
  a string.
  	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
     (  = Start a capturing group
       (?:  = Start a non-capturing group
           [^)(]  = Match anything that isn't a parentheses
           |  = OR
           \(  = Match a start parentheses
               (?:  = Start another non-capturing groups
                   [^)(]+  = Match anything that isn't a parentheses
                   |  = OR
                   \(  = Match a start parentheses
                       [^)(]*  = Match anything that isn't a parentheses
                   \)  = Match a end parentheses
               )  = End Group
               *\) = Match anything and then a close parens
           )  = Close non-capturing group
           *  = Match anything
        )  = Close capturing group
   \)  = Match a close parens
  	 /gi  = Get all matches, not the first.  Be case insensitive.
   */

  var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
    // strip quotes (if they exist)
    var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
      return $1;
    }).replace(/^'(.*)'$/, function (o, $1) {
      return $1;
    }); // already a full url? no change

    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    } // convert the url to a full url


    var newUrl;

    if (unquotedOrigUrl.indexOf("//") === 0) {
      //TODO: should we add protocol?
      newUrl = unquotedOrigUrl;
    } else if (unquotedOrigUrl.indexOf("/") === 0) {
      // path should be relative to the base url
      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
    } else {
      // path should be relative to current directory
      newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
    } // send back the fixed url(...)


    return "url(" + JSON.stringify(newUrl) + ")";
  }); // send back the fixed css

  return fixedCss;
};

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_dialog_vue_vue_type_style_index_0_id_92886fba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_dialog_vue_vue_type_style_index_0_id_92886fba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_dialog_vue_vue_type_style_index_0_id_92886fba_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_hintModel_vue_vue_type_style_index_0_id_3d72d658_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_hintModel_vue_vue_type_style_index_0_id_3d72d658_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_hintModel_vue_vue_type_style_index_0_id_3d72d658_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f8de1768_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f8de1768_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f8de1768_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/alert/index.vue?vue&type=template&id=9b3256e2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"ss-alert-fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"ss-alert",class:[ 
      ("ss-alert__" + (this.type)), 
      _vm.closable && "ss-alert__closable" 
    ]},[(_vm.showIcon)?_c('i',{staticClass:"ss-alert-status-icon",class:[ ("sense-icon-status__" + (this.type)) ],style:({ fontSize: _vm.iconSize })}):_vm._e(),_c('div',{staticClass:"ss-alert-title"},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.title)}}),(_vm.linkText)?_c('a',{staticClass:"ss-target-link",attrs:{"href":_vm.link,"target":_vm.target}},[_vm._v(_vm._s(_vm.linkText))]):_vm._e()]),_c('i',{directives:[{name:"show",rawName:"v-show",value:(_vm.closable),expression:"closable"}],staticClass:"ss-alert-closebtn sense-icon-close",on:{"click":_vm.close}})])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/alert/index.vue?vue&type=template&id=9b3256e2&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/alert/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var alertvue_type_script_lang_js_ = ({
  name: 'SsAlert',
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    type: {
      type: String,
      default: 'primary'
    },
    closable: {
      type: Boolean,
      default: false
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    iconSize: {
      type: String,
      default: null
    },
    link: {
      type: String,
      default: null
    },
    linkText: {
      type: String,
      default: ''
    },
    linkMode: {
      type: String,
      default: 'self' // self 当前页面打开 blank 打开新窗口

    }
  },
  data: function data() {
    return {
      visible: true
    };
  },
  computed: {
    target: function target() {
      return "_".concat(this.linkMode);
    }
  },
  methods: {
    close: function close() {
      this.visible = false;
      this.$emit('close');
    }
  }
});
// CONCATENATED MODULE: ./src/components/alert/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_alertvue_type_script_lang_js_ = (alertvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/alert/index.vue?vue&type=style&index=0&lang=scss&
var alertvue_type_style_index_0_lang_scss_ = __webpack_require__(56);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/alert/index.vue






/* normalize component */

var component = normalizeComponent(
  components_alertvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_alert = (component.exports);
// CONCATENATED MODULE: ./libEntry/install/alert/index.js


components_alert.install = function (Vue) {
  Vue.component(components_alert.name, components_alert);
};

/* harmony default export */ var install_alert = (components_alert);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/badge/index.vue?vue&type=template&id=04f50002&
var badgevue_type_template_id_04f50002_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ss-badge",class:[_vm.type && ("ss-badge__" + _vm.type)]},[_vm._t("default"),_c('div',{staticClass:"ss-badge-point",class:[
      _vm.number && 'ss-badge-point__hascontent'
    ]},[(_vm.number)?_c('span',{staticClass:"ss-badge-number"},[_vm._v("\n      "+_vm._s(_vm.formatNumber)+"\n      "),(_vm.isOver)?_c('span',{staticClass:"ss-badge-number-over"},[_vm._v("+")]):_vm._e()]):_vm._e()])],2)}
var badgevue_type_template_id_04f50002_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/badge/index.vue?vue&type=template&id=04f50002&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/badge/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var badgevue_type_script_lang_js_ = ({
  name: 'SsBadge',
  props: {
    type: String,
    number: Number,
    maxLength: {
      type: Number,
      default: 99
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    formatNumber: function formatNumber() {
      return this.number > this.maxLength ? this.maxLength : this.number;
    },
    isOver: function isOver() {
      return this.number > this.maxLength;
    }
  }
});
// CONCATENATED MODULE: ./src/components/badge/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_badgevue_type_script_lang_js_ = (badgevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/badge/index.vue?vue&type=style&index=0&lang=scss&
var badgevue_type_style_index_0_lang_scss_ = __webpack_require__(57);

// CONCATENATED MODULE: ./src/components/badge/index.vue






/* normalize component */

var badge_component = normalizeComponent(
  components_badgevue_type_script_lang_js_,
  badgevue_type_template_id_04f50002_render,
  badgevue_type_template_id_04f50002_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var badge = (badge_component.exports);
// CONCATENATED MODULE: ./libEntry/install/badge/index.js


badge.install = function (Vue) {
  Vue.component(badge.name, badge);
};

/* harmony default export */ var install_badge = (badge);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/button/index.vue?vue&type=template&id=5762773e&
var buttonvue_type_template_id_5762773e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"ss-button",class:[
    _vm.type && ("ss-button__" + _vm.type),
    _vm.size && ("ss-button__" + _vm.size),
    _vm.disabled && "ss-button__disabled",
    _vm.loading && ("ss-button__" + _vm.loading),
    _vm.plain && ("ss-button__" + _vm.plain),
    _vm.round && ("ss-button__" + _vm.round),
    _vm.circle && ("ss-button__" + _vm.circle),
    _vm.buttonClass && _vm.buttonClass
  ],attrs:{"disabled":_vm.disabled || _vm.loading,"type":_vm.nativeType},on:{"click":_vm.handelClick}},[_c('i',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],staticClass:"ss-button-loading sense-icon-loading"}),(_vm.icon && !_vm.loading)?_c('i',{class:_vm.icon}):_vm._e(),(_vm.$slots.default)?_c('span',[_vm._t("default")],2):_vm._e()])}
var buttonvue_type_template_id_5762773e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/button/index.vue?vue&type=template&id=5762773e&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/button/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var buttonvue_type_script_lang_js_ = ({
  name: 'SsButton',
  props: {
    type: {
      type: String,
      default: 'default' // primary 主要按钮  text 文本按钮  warning 警告按钮 success 成功按钮 plain 朴素按钮

    },
    size: {
      type: String,
      default: 'medium' // big /medium / small / 大中小

    },
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    buttonClass: {
      type: String,
      default: ''
    },
    disabled: Boolean,
    loading: Boolean,
    plain: Boolean,
    round: Boolean,
    circle: Boolean
  },
  data: function data() {
    return {};
  },
  methods: {
    handelClick: function handelClick(e) {
      this.$emit('click', e);
    }
  }
});
// CONCATENATED MODULE: ./src/components/button/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_buttonvue_type_script_lang_js_ = (buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/button/index.vue?vue&type=style&index=0&lang=scss&
var buttonvue_type_style_index_0_lang_scss_ = __webpack_require__(58);

// CONCATENATED MODULE: ./src/components/button/index.vue






/* normalize component */

var button_component = normalizeComponent(
  components_buttonvue_type_script_lang_js_,
  buttonvue_type_template_id_5762773e_render,
  buttonvue_type_template_id_5762773e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_button = (button_component.exports);
// CONCATENATED MODULE: ./libEntry/install/button/index.js


components_button.install = function (Vue) {
  Vue.component(components_button.name, components_button);
};

/* harmony default export */ var install_button = (components_button);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/checkbox/index.vue?vue&type=template&id=617b120c&
var checkboxvue_type_template_id_617b120c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"ss-checkbox",class:[
    _vm.checkVal && "ss-checkbox__checked",
    _vm.disabled && "ss-checkbox__disabled",
    _vm.indeterminate && !_vm.checkVal && 'ss-checkbox__indeterminate',
    _vm.size && ("ss-checkbox__" + _vm.size)
  ]},[_c('span',{staticClass:"ss-checkbox-left",class:[
      _vm.focus && 'is-focus'
    ]},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.checkVal),expression:"checkVal"}],staticClass:"ss-checkbox-input",attrs:{"disabled":_vm.disabled,"type":"checkbox","name":_vm.name},domProps:{"checked":Array.isArray(_vm.checkVal)?_vm._i(_vm.checkVal,null)>-1:(_vm.checkVal)},on:{"change":[function($event){var $$a=_vm.checkVal,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.checkVal=$$a.concat([$$v]))}else{$$i>-1&&(_vm.checkVal=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.checkVal=$$c}},function($event){return _vm.handleChange($event)}],"focus":function($event){_vm.focus = true},"blur":function($event){_vm.focus = false}}}),_c('span',{staticClass:"ss-checkbox-inner"})]),(_vm.$slots.default)?_c('span',{staticClass:"ss-checkbox-text"},[_vm._t("default")],2):_vm._e()])}
var checkboxvue_type_template_id_617b120c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/checkbox/index.vue?vue&type=template&id=617b120c&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/checkbox/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var checkboxvue_type_script_lang_js_ = ({
  name: 'SsCheckbox',
  props: {
    value: {},
    disabled: Boolean,
    checked: Boolean,
    defaultChecked: Boolean,
    indeterminate: Boolean,
    name: String,
    size: String
  },
  data: function data() {
    return {
      checkVal: false,
      focus: false
    };
  },
  computed: {},
  created: function created() {
    this.checkVal = !!this.defaultChecked || !!this.value;
  },
  watch: {
    value: function value(val) {
      this.checkVal = val;
    }
  },
  methods: {
    handleChange: function handleChange(event) {
      this.$emit('input', this.checkVal, event);
      this.$emit('change', this.checkVal, event);
    }
  }
});
// CONCATENATED MODULE: ./src/components/checkbox/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_checkboxvue_type_script_lang_js_ = (checkboxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/checkbox/index.vue?vue&type=style&index=0&lang=scss&
var checkboxvue_type_style_index_0_lang_scss_ = __webpack_require__(59);

// CONCATENATED MODULE: ./src/components/checkbox/index.vue






/* normalize component */

var checkbox_component = normalizeComponent(
  components_checkboxvue_type_script_lang_js_,
  checkboxvue_type_template_id_617b120c_render,
  checkboxvue_type_template_id_617b120c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_checkbox = (checkbox_component.exports);
// CONCATENATED MODULE: ./libEntry/install/checkbox/index.js


components_checkbox.install = function (Vue) {
  Vue.component(components_checkbox.name, components_checkbox);
};

/* harmony default export */ var install_checkbox = (components_checkbox);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/dropdown/index.vue?vue&type=template&id=0457d65d&
var dropdownvue_type_template_id_0457d65d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ss-dropdown",on:{"mouseenter":_vm.handleEnter,"mouseleave":_vm.handleLeave,"click":function($event){$event.stopPropagation();return _vm.handleClick($event)}}},[_vm._t("default"),_vm._t("menu")],2)}
var dropdownvue_type_template_id_0457d65d_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/dropdown/index.vue?vue&type=template&id=0457d65d&

// CONCATENATED MODULE: ./src/mixins/emitter.js
function _broadcast(componentName, eventName, params) {
  this.$children.forEach(function (child) {
    var name = child.$options.componentName;

    if (name === componentName) {
      child.$emit.apply(child, [eventName, params]);
    } else {
      _broadcast.apply(child, [componentName, eventName, params]);
    }
  });
}

/* harmony default export */ var emitter = ({
  methods: {
    dispatch: function dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root;
      var name = parent.$options.componentName;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.componentName;
        }
      }

      if (parent) {
        parent.$emit.apply(parent, [eventName, params]);
      }
    },
    broadcast: function broadcast(componentName, eventName, params) {
      _broadcast.call(this, componentName, eventName, params);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/dropdown/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var dropdownvue_type_script_lang_js_ = ({
  name: 'SsDropdown',
  componentName: 'SsDropdown',
  mixins: [emitter],
  props: {
    trigger: {
      type: Array,
      default: function _default() {
        return ['hover'];
      }
    },
    visible: Boolean,
    placement: {
      type: String,
      default: 'bottomLeft'
    }
  },
  data: function data() {
    return {
      isMenuShow: this.visible
    };
  },
  computed: {
    isHoverTrigger: function isHoverTrigger() {
      return this.trigger.includes('hover');
    },
    isClickTrigger: function isClickTrigger() {
      return this.trigger.includes('click');
    }
  },
  mounted: function mounted() {
    this.broadcast('SsDropdownMenu', 'visible', this.isMenuShow);
    this.$on('itemClick', this.handleItemClick);
  },
  methods: {
    visibleMenu: function visibleMenu() {
      var _this = this;

      setTimeout(function () {
        _this.broadcast('SsDropdownMenu', 'visible', _this.isMenuShow);
      }, 100);
    },
    handleEnter: function handleEnter() {
      if (this.isHoverTrigger) {
        this.isMenuShow = true;
        this.visibleMenu();
      }
    },
    handleLeave: function handleLeave() {
      if (this.isHoverTrigger) {
        this.isMenuShow = false;
        this.visibleMenu();
      }
    },
    handleClick: function handleClick() {
      if (this.isClickTrigger) {
        this.isMenuShow = !this.isMenuShow;
        this.visibleMenu();
      }
    },
    handleItemClick: function handleItemClick() {
      this.isMenuShow = false;
      this.visibleMenu();
    }
  }
});
// CONCATENATED MODULE: ./src/components/dropdown/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_dropdownvue_type_script_lang_js_ = (dropdownvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/dropdown/index.vue?vue&type=style&index=0&lang=scss&
var dropdownvue_type_style_index_0_lang_scss_ = __webpack_require__(60);

// CONCATENATED MODULE: ./src/components/dropdown/index.vue






/* normalize component */

var dropdown_component = normalizeComponent(
  components_dropdownvue_type_script_lang_js_,
  dropdownvue_type_template_id_0457d65d_render,
  dropdownvue_type_template_id_0457d65d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var dropdown = (dropdown_component.exports);
// CONCATENATED MODULE: ./libEntry/install/dropdown/index.js


dropdown.install = function (Vue) {
  Vue.component(dropdown.name, dropdown);
};

/* harmony default export */ var install_dropdown = (dropdown);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/dropdown/dropdownMenu.vue?vue&type=template&id=24e289c8&
var dropdownMenuvue_type_template_id_24e289c8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"ss-dropdown-menu",class:[_vm.isShow && 'ss-dropdown-menu__show'],style:(_vm.style)},[(_vm.$slots.default)?_vm._t("default"):_c('div',{staticClass:"ss-dropdown-menu-empty"},[_vm._v("\n    选项为空\n  ")])],2)}
var dropdownMenuvue_type_template_id_24e289c8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/dropdown/dropdownMenu.vue?vue&type=template&id=24e289c8&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/dropdown/dropdownMenu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var dropdownMenuvue_type_script_lang_js_ = ({
  name: 'SsDropdownMenu',
  componentName: 'SsDropdownMenu',
  props: {
    width: [Number, String]
  },
  data: function data() {
    return {
      isShow: false,
      style: {},
      selfHeight: 0,
      bodyHeight: 0
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.bodyHeight = document.documentElement.clientHeight;
    this.$nextTick(function () {
      _this.initMenuPlacement();

      _this.updateMenuPlacement();
    });
    this.$on('visible', this.visible);
    this.$on('update', this.updateMenuPlacement);
    window.addEventListener('resize', this.setBodyHeight);
    window.addEventListener('scroll', this.updateMenuPlacement);
  },
  watch: {
    width: function width(val) {
      this.style.minWidth = "".concat(val - 2, "px");
    }
  },
  methods: {
    setSelfHeight: function setSelfHeight() {
      this.selfHeight = this.$el.clientHeight;
    },
    setBodyHeight: function setBodyHeight() {
      this.bodyHeight = document.documentElement.clientHeight;
    },
    initMenuPlacement: function initMenuPlacement() {
      var placement = this.$parent.placement;
      var parent = this.$parent.$el.getBoundingClientRect();

      if (placement === 'bottomRight') {
        this.style.right = '1px';
      } else if (placement === 'bottomCenter') {
        var selfWidth = this.$el.clientWidth;
        this.style.left = "".concat((parent.width - selfWidth) / 2, "px");
      } else {
        this.style.left = '1px';
      }

      this.style.top = "".concat(parent.height, "px");
    },
    updateMenuPlacement: function updateMenuPlacement() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.setSelfHeight();

        var parent = _this2.$parent.$el.getBoundingClientRect();

        if (parent.bottom + _this2.selfHeight > _this2.bodyHeight - 10) {
          _this2.style.top = "-".concat(_this2.selfHeight, "px");
          _this2.style.transformOrigin = '50% 100%';
        } else {
          _this2.style.top = "".concat(parent.height, "px");
          _this2.style.transformOrigin = '50% 0%';
        }
      });
    },
    visible: function visible(isShow) {
      this.isShow = isShow;
    }
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.setBodyHeight);
    window.removeEventListener('scroll', this.updateMenuPlacement);
  }
});
// CONCATENATED MODULE: ./src/components/dropdown/dropdownMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var dropdown_dropdownMenuvue_type_script_lang_js_ = (dropdownMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/dropdown/dropdownMenu.vue?vue&type=style&index=0&lang=scss&
var dropdownMenuvue_type_style_index_0_lang_scss_ = __webpack_require__(61);

// CONCATENATED MODULE: ./src/components/dropdown/dropdownMenu.vue






/* normalize component */

var dropdownMenu_component = normalizeComponent(
  dropdown_dropdownMenuvue_type_script_lang_js_,
  dropdownMenuvue_type_template_id_24e289c8_render,
  dropdownMenuvue_type_template_id_24e289c8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var dropdownMenu = (dropdownMenu_component.exports);
// CONCATENATED MODULE: ./libEntry/install/dropdown-menu/index.js


dropdownMenu.install = function (Vue) {
  Vue.component(dropdownMenu.name, dropdownMenu);
};

/* harmony default export */ var dropdown_menu = (dropdownMenu);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/dropdown/dropdownItem.vue?vue&type=template&id=5ffd710e&
var dropdownItemvue_type_template_id_5ffd710e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"ss-dropdown-item",class:[_vm.disabled && 'ss-dropdown-item__disabled'],on:{"click":function($event){$event.stopPropagation();return _vm.handleClick($event)}}},[_vm._t("default")],2)}
var dropdownItemvue_type_template_id_5ffd710e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/dropdown/dropdownItem.vue?vue&type=template&id=5ffd710e&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/dropdown/dropdownItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var dropdownItemvue_type_script_lang_js_ = ({
  name: 'SsDropdownItem',
  componentName: 'SsDropdownItem',
  mixins: [emitter],
  props: {
    disabled: Boolean
  },
  methods: {
    handleClick: function handleClick() {
      if (!this.disabled) {
        this.$emit('click');
        this.dispatch('SsDropdown', 'itemClick');
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/dropdown/dropdownItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var dropdown_dropdownItemvue_type_script_lang_js_ = (dropdownItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/dropdown/dropdownItem.vue?vue&type=style&index=0&lang=scss&
var dropdownItemvue_type_style_index_0_lang_scss_ = __webpack_require__(62);

// CONCATENATED MODULE: ./src/components/dropdown/dropdownItem.vue






/* normalize component */

var dropdownItem_component = normalizeComponent(
  dropdown_dropdownItemvue_type_script_lang_js_,
  dropdownItemvue_type_template_id_5ffd710e_render,
  dropdownItemvue_type_template_id_5ffd710e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var dropdownItem = (dropdownItem_component.exports);
// CONCATENATED MODULE: ./libEntry/install/dropdown-item/index.js


dropdownItem.install = function (Vue) {
  Vue.component(dropdownItem.name, dropdownItem);
};

/* harmony default export */ var dropdown_item = (dropdownItem);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/input/index.vue?vue&type=template&id=1094aa7e&
var inputvue_type_template_id_1094aa7e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ss-input",class:{
    'ss-input__disabled' : _vm.disabled,
    'ss-input__suffix': _vm.suffixIcon || _vm.$slots.suffix,
    'ss-input__prefix': _vm.prefixIcon || _vm.$slots.prefix,
    'ss-input__error': _vm.errorMsg,
    'ss-input-count': !_vm.suffixIcon && !_vm.$slots.suffix && _vm.showCount && _vm.maxlength,
    'ss-textarea':_vm.type === 'textarea',
    'ss-textarea-count':!_vm.suffixIcon && !_vm.$slots.suffix && _vm.showCount && _vm.maxlength && _vm.type === 'textarea',
    'ss-input__number': _vm.type === 'number' && _vm.controls 
},style:({'width': _vm.inputWidth + 'px'})},[(_vm.type=='textarea')?_c('textarea',_vm._b({directives:[{name:"model",rawName:"v-model",value:(_vm.currentVal),expression:"currentVal"}],ref:"textarea",staticClass:"ss-input-inner ss-textarea-inner",style:(_vm.textareaStyle),attrs:{"autocomplete":"off","placeholder":_vm.placeholder || '请输入内容',"disabled":_vm.disabled,"readonly":_vm.readonly,"maxlength":_vm.maxlength},domProps:{"value":(_vm.currentVal)},on:{"focus":_vm.handelFocus,"blur":_vm.handelBlur,"keyup":_vm.handleKeyup,"input":[function($event){if($event.target.composing){ return; }_vm.currentVal=$event.target.value},_vm.handelInput],"change":_vm.handelChange}},'textarea',_vm.$attrs,false)):((_vm.type)==='checkbox')?_c('input',_vm._b({directives:[{name:"model",rawName:"v-model",value:(_vm.currentVal),expression:"currentVal"}],ref:"input",staticClass:"ss-input-inner",style:(!_vm.suffixIcon && !_vm.$slots.suffix && _vm.showCount && _vm.maxlength && _vm.type !== 'textarea'?_vm.countWidth:''),attrs:{"autocomplete":"off","placeholder":_vm.placeholder,"disabled":_vm.disabled,"readonly":_vm.readonly,"maxlength":_vm.maxlength,"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.currentVal)?_vm._i(_vm.currentVal,null)>-1:(_vm.currentVal)},on:{"focus":_vm.handelFocus,"blur":_vm.handelBlur,"keyup":[_vm.handleKeyup,function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.handleEnter($event)}],"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }$event.preventDefault();return _vm.numberAdd($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();return _vm.numberMinus($event)}],"input":_vm.handelInput,"change":[function($event){var $$a=_vm.currentVal,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.currentVal=$$a.concat([$$v]))}else{$$i>-1&&(_vm.currentVal=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.currentVal=$$c}},_vm.handelChange]}},'input',_vm.$attrs,false)):((_vm.type)==='radio')?_c('input',_vm._b({directives:[{name:"model",rawName:"v-model",value:(_vm.currentVal),expression:"currentVal"}],ref:"input",staticClass:"ss-input-inner",style:(!_vm.suffixIcon && !_vm.$slots.suffix && _vm.showCount && _vm.maxlength && _vm.type !== 'textarea'?_vm.countWidth:''),attrs:{"autocomplete":"off","placeholder":_vm.placeholder,"disabled":_vm.disabled,"readonly":_vm.readonly,"maxlength":_vm.maxlength,"type":"radio"},domProps:{"checked":_vm._q(_vm.currentVal,null)},on:{"focus":_vm.handelFocus,"blur":_vm.handelBlur,"keyup":[_vm.handleKeyup,function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.handleEnter($event)}],"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }$event.preventDefault();return _vm.numberAdd($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();return _vm.numberMinus($event)}],"input":_vm.handelInput,"change":[function($event){_vm.currentVal=null},_vm.handelChange]}},'input',_vm.$attrs,false)):_c('input',_vm._b({directives:[{name:"model",rawName:"v-model",value:(_vm.currentVal),expression:"currentVal"}],ref:"input",staticClass:"ss-input-inner",style:(!_vm.suffixIcon && !_vm.$slots.suffix && _vm.showCount && _vm.maxlength && _vm.type !== 'textarea'?_vm.countWidth:''),attrs:{"autocomplete":"off","placeholder":_vm.placeholder,"disabled":_vm.disabled,"readonly":_vm.readonly,"maxlength":_vm.maxlength,"type":_vm.type},domProps:{"value":(_vm.currentVal)},on:{"focus":_vm.handelFocus,"blur":_vm.handelBlur,"keyup":[_vm.handleKeyup,function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.handleEnter($event)}],"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }$event.preventDefault();return _vm.numberAdd($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();return _vm.numberMinus($event)}],"input":[function($event){if($event.target.composing){ return; }_vm.currentVal=$event.target.value},_vm.handelInput],"change":_vm.handelChange}},'input',_vm.$attrs,false)),(_vm.prefixIcon || _vm.$slots.prefix)?_c('span',{staticClass:"ss-input-decoration-icon ss-input-prefix-icon"},[(_vm.$slots.prefix)?[_vm._t("prefix")]:_c('i',{staticClass:"ss-input-icon",class:[_vm.prefixIcon],style:({'color': _vm.iconColor})})],2):_vm._e(),(_vm.suffixIcon || _vm.$slots.suffix)?_c('span',{staticClass:"ss-input-decoration-icon ss-input-suffix-icon"},[(_vm.$slots.suffix)?[_vm._t("suffix")]:_c('i',{staticClass:"ss-input-icon",class:[_vm.suffixIcon],style:({'color': _vm.iconColor})})],2):_vm._e(),(!_vm.suffixIcon && !_vm.$slots.suffix && _vm.showCount && _vm.maxlength)?_c('span',{staticClass:"ss-input-count-box"},[_vm._v("\n      "+_vm._s(_vm.count)+"/"+_vm._s(_vm.maxlength)+"\n  ")]):_vm._e(),(_vm.type === 'number' && _vm.controls)?_c('div',{staticClass:"ss-input-handle"},[_c('div',{staticClass:"ss-input-add",class:{'ss-input-limit': _vm.isMax},on:{"click":_vm.numberAdd}},[_c('i',{staticClass:"sense-icon_add"})]),_c('div',{staticClass:"ss-input-minus",class:{'ss-input-limit': _vm.isMin},on:{"click":_vm.numberMinus}},[_c('i',{staticClass:"sense-icon_add"})])]):_vm._e(),(_vm.errorMsg)?_c('div',{staticClass:"ss-input-error-msg"},[_vm._v("\n    "+_vm._s(_vm.errorMsg)+"\n  ")]):_vm._e()])}
var inputvue_type_template_id_1094aa7e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/input/index.vue?vue&type=template&id=1094aa7e&

// CONCATENATED MODULE: ./src/components/input/calcTextareaHeight.js
var hiddenTextarea;
var HIDDEN_STYLE = "\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n";
var CONTEXT_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];

function calculateNodeStyling(targetElement) {
  var style = window.getComputedStyle(targetElement);
  var boxSizing = style.getPropertyValue('box-sizing');
  var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));
  var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));
  var contextStyle = CONTEXT_STYLE.map(function (name) {
    return "".concat(name, ":").concat(style.getPropertyValue(name));
  }).join(';');
  return {
    contextStyle: contextStyle,
    paddingSize: paddingSize,
    borderSize: borderSize,
    boxSizing: boxSizing
  };
}

function calcTextareaHeight(targetElement) {
  var minRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var maxRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    document.body.appendChild(hiddenTextarea);
  }

  var _calculateNodeStyling = calculateNodeStyling(targetElement),
      paddingSize = _calculateNodeStyling.paddingSize,
      borderSize = _calculateNodeStyling.borderSize,
      boxSizing = _calculateNodeStyling.boxSizing,
      contextStyle = _calculateNodeStyling.contextStyle;

  hiddenTextarea.setAttribute('style', "".concat(contextStyle, ";").concat(HIDDEN_STYLE));
  hiddenTextarea.value = targetElement.value || targetElement.placeholder || '';
  var height = hiddenTextarea.scrollHeight;
  var result = {};

  if (boxSizing === 'border-box') {
    height = height + borderSize;
  } else if (boxSizing === 'content-box') {
    height = height - paddingSize;
  }

  hiddenTextarea.value = '';
  var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;

  if (minRows !== null) {
    var minHeight = singleRowHeight * minRows;

    if (boxSizing === 'border-box') {
      minHeight = minHeight + paddingSize + borderSize;
    }

    height = Math.max(minHeight, height) < 76 ? 76 : Math.max(minHeight, height);
    result.minHeight = "".concat(minHeight, "px");
  }

  if (maxRows !== null) {
    var maxHeight = singleRowHeight * maxRows;

    if (boxSizing === 'border-box') {
      maxHeight = maxHeight + paddingSize + borderSize;
    }

    height = Math.min(maxHeight, height);
  }

  result.height = "".concat(height, "px");
  hiddenTextarea.parentNode && hiddenTextarea.parentNode.removeChild(hiddenTextarea);
  hiddenTextarea = null;
  return result;
}
// CONCATENATED MODULE: ./src/utils/utils.js
// 获取字符串长度（汉字算两个字符，字母数字算一个）
var getByteLen = function getByteLen(val) {
  var len = 0;

  for (var i = 0; i < val.length; i++) {
    var a = val.charAt(i);

    if (a.match(/[^\x00-\xff]/ig) != null) {
      len += 2;
    } else {
      len += 1;
    }
  }

  return len;
}; // 按照汉字两个字符，字母一个字符的方式截取字符串

var getByteSubString = function getByteSubString(val, num) {
  var len = 0;
  var temp = '';

  for (var i = 0; i < val.length; i++) {
    var a = val.charAt(i);

    if (a.match(/[^\x00-\xff]/ig) != null) {
      len += 2;
    } else {
      len += 1;
    }

    if (len > num) {
      return temp;
    } else {
      temp += a;
    }
  }

  return temp;
};
var merge = function merge(target) {
  for (var i = 1, j = arguments.length; i < j; i++) {
    var source = arguments[i] || {};

    for (var prop in source) {
      if (source.hasOwnProperty(prop)) {
        var value = source[prop];

        if (value !== undefined) {
          target[prop] = value;
        }
      }
    }
  }

  return target;
};
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/input/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var inputvue_type_script_lang_js_ = ({
  name: 'SsInput',
  props: {
    value: [String, Number],
    disabled: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    prefixIcon: String,
    suffixIcon: String,
    readonly: Boolean,
    maxlength: Number,
    errorMsg: String,
    showCount: Boolean,
    iconColor: {
      type: String,
      default: '#969799'
    },
    autosize: {
      type: [Boolean, Object],
      default: false
    },
    controls: {
      // type=number 时是否要显示控制箭头
      type: Boolean,
      default: true
    },
    multiple: {
      // 数字叠加或减少基数的倍数，默认为1
      type: Number,
      default: 1
    },
    precision: {
      // type=number时，数字的精度， 小数点后几位
      type: Number,
      validator: function validator(val) {
        return val >= 0 && val === parseInt(val, 10);
      }
    },
    stepStrictly: {
      // 严格步数 =true时值只能是multiple的倍数
      type: Boolean,
      default: false
    },
    resize: String,
    max: [String, Number],
    // 数字输入框输入最大值
    min: [String, Number],
    // 数字输入框输入最小值
    inputWidth: String
  },
  data: function data() {
    return {
      hasCountExceed: false,
      // 记数器是否超过
      textareaCalcStyle: {},
      isReverse: false,
      currentVal: this.value === undefined || this.value === null ? '' : this.value,
      isMax: false,
      isMin: false
    };
  },
  computed: {
    count: function count() {
      return this.currentVal.length;
    },
    countWidth: function countWidth() {
      if (!this.showCount) {
        return 0;
      }

      if (String(this.maxlength).length > 2) {
        return 'padding-right: 54px';
      } else if (String(this.maxlength).length > 1) {
        return 'padding-right: 40px';
      } else {
        return 'padding-right: 30px';
      }
    },
    textareaStyle: function textareaStyle() {
      return merge({}, this.textareaCalcStyle, {
        resize: this.resize
      });
    }
  },
  watch: {
    value: function value(val) {
      this.currentVal = val;
    }
  },
  mounted: function mounted() {
    this.resizeTextarea();
  },
  methods: {
    resizeTextarea: function resizeTextarea() {
      var autosize = this.autosize,
          type = this.type;

      if (type !== 'textarea') {
        return;
      }

      if (!autosize) {
        this.textareaCalcStyle = {
          minHeight: calcTextareaHeight(this.$refs.textarea).minHeight
        };
        return;
      }

      var minRows = autosize.minRows;
      var maxRows = autosize.maxRows;
      this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
    },

    /**
     * number 增加
     */
    numberAdd: function numberAdd() {
      if (this.disabled || this.type !== 'number') {
        return;
      }

      var currentVal = Number(this.currentVal) * 1000;
      var newCurrentVal = (currentVal + this.multiple * 1000) / 1000;

      if ((String(this.max) && newCurrentVal <= this.max || this.max == void 0) && !this.disabled) {
        if (this.precision && this.precision > 0) {
          newCurrentVal = parseFloat(newCurrentVal).toFixed(this.precision);
        }

        this.currentVal = newCurrentVal;
        this.handelInput();
        this.handelChange();
        this.isMax = false;
        this.isMin = false;
      } else {
        this.isMax = true;
      }
    },

    /**
     * number 减少
     */
    numberMinus: function numberMinus() {
      if (this.disabled || this.type !== 'number') {
        return;
      }

      var currentVal = Number(this.currentVal) * 1000;
      var newCurrentVal = (currentVal - this.multiple * 1000) / 1000;

      if ((String(this.min) && newCurrentVal >= this.min || this.min == void 0) && !this.disabled) {
        if (this.precision && this.precision > 0) {
          newCurrentVal = parseFloat(newCurrentVal).toFixed(this.precision);
        }

        this.currentVal = newCurrentVal;
        this.handelInput();
        this.handelChange();
        this.isMin = false;
        this.isMax = false;
      } else {
        this.isMin = true;
      }
    },
    // 获取value的精度 例如 0.1精度为1  0.03精度为2 1，20，30 精度为0
    getPrecision: function getPrecision(value) {
      if (value === undefined) return 0;
      var valueString = value.toString();
      var dotPosition = valueString.indexOf('.');
      var precision = 0;

      if (dotPosition !== -1) {
        precision = valueString.length - dotPosition - 1;
      }

      return precision;
    },
    focus: function focus() {
      this.$refs.input.focus();
    },
    handelFocus: function handelFocus(e) {
      this.$emit('focus', e);
    },
    handelBlur: function handelBlur(e) {
      // type=number 
      if (this.type === 'number') {
        if (this.currentVal === '') {
          // 如果输入为空 ， 则不作任何处理,只需 $emit('input')
          this.handelInput();
          return;
        } // 当输入数字超出范围，自动变成范围内的最大值或最小值


        if (this.max !== undefined && Number(this.currentVal) > this.max) {
          this.currentVal = this.max;
        }

        if (this.min !== undefined && Number(this.currentVal) < this.min) {
          this.currentVal = this.min;
        } // 处理严格步数


        if (this.stepStrictly) {
          var stepPrecision = this.getPrecision(this.multiple); // 获取到multiple的精度

          var precisionFactor = Math.pow(10, stepPrecision); // 对currentVal做round处理

          this.currentVal = Math.round(this.currentVal / this.multiple) * precisionFactor * this.multiple / precisionFactor;
        } // 处理数字的精度


        if (this.precision && this.precision > 0) {
          this.currentVal = parseFloat(this.currentVal).toFixed(this.precision);
        }

        this.handelInput();
      }

      this.$emit('blur', e);
    },
    handleKeyup: function handleKeyup(e) {
      this.$emit('keyup', e);
    },
    handelInput: function handelInput() {
      this.$emit('input', this.currentVal);
      this.$nextTick(this.resizeTextarea);
    },
    handelChange: function handelChange() {
      this.$emit('change', this.currentVal);
    },
    handleEnter: function handleEnter() {
      this.$emit('enter', this.currentVal);
      this.$nextTick(this.resizeTextarea);
    }
  }
});
// CONCATENATED MODULE: ./src/components/input/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_inputvue_type_script_lang_js_ = (inputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/input/index.vue?vue&type=style&index=0&lang=scss&
var inputvue_type_style_index_0_lang_scss_ = __webpack_require__(63);

// CONCATENATED MODULE: ./src/components/input/index.vue






/* normalize component */

var input_component = normalizeComponent(
  components_inputvue_type_script_lang_js_,
  inputvue_type_template_id_1094aa7e_render,
  inputvue_type_template_id_1094aa7e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var input = (input_component.exports);
// CONCATENATED MODULE: ./libEntry/install/input/index.js


input.install = function (Vue) {
  Vue.component(input.name, input);
};

/* harmony default export */ var install_input = (input);
// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(1);
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default = /*#__PURE__*/__webpack_require__.n(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/message/src/message.vue?vue&type=template&id=be44d09e&
var messagevue_type_template_id_be44d09e_render = function () {
var _obj;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ss-message__wrapper",style:({ top: _vm.top ? (_vm.top + "px") : 'auto' })},[_c('transition',{attrs:{"name":"move-up"},on:{"after-leave":_vm.doDestory}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"ss-message",class:( _obj = {}, _obj[("ss-message__" + _vm.type)] = _vm.type, _obj )},[(_vm.showIcon)?_c('i',{staticClass:"ss-message-icon",class:_vm.iconClass}):_vm._e(),_c('span',{staticClass:"ss-message-content"},[_vm._v(_vm._s(_vm.message))])])])],1)}
var messagevue_type_template_id_be44d09e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/message/src/message.vue?vue&type=template&id=be44d09e&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/message/src/message.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var messagevue_type_script_lang_js_ = ({
  data: function data() {
    return {
      message: '',
      duration: 3000,
      type: 'info',
      icon: '',
      visible: false,
      timer: null,
      closed: false,
      onClose: null,
      top: null,
      showIcon: false
    };
  },
  computed: {
    iconClass: function iconClass() {
      var classArr = {
        info: 'sense-icon-status__primary'
      };
      return this.icon || classArr[this.type] || "sense-icon-status__".concat(this.type);
    }
  },
  watch: {
    closed: function closed(val) {
      if (val) {
        this.visible = false;
      }
    }
  },
  methods: {
    doDestory: function doDestory() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    close: function close() {
      this.closed = true;

      if (typeof this.onClose === 'function') {
        this.onClose(this);
      }
    },
    startTimer: function startTimer() {
      var _this = this;

      if (this.duration) {
        this.timer = setTimeout(function () {
          !_this.closed && _this.close();
        }, this.duration);
      }
    },
    clearTimer: function clearTimer() {
      this.timer && clearTimeout(this.timer);
    }
  },
  mounted: function mounted() {
    this.startTimer();
  }
});
// CONCATENATED MODULE: ./src/components/message/src/message.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_messagevue_type_script_lang_js_ = (messagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/message/src/message.vue?vue&type=style&index=0&lang=scss&
var messagevue_type_style_index_0_lang_scss_ = __webpack_require__(64);

// CONCATENATED MODULE: ./src/components/message/src/message.vue






/* normalize component */

var message_component = normalizeComponent(
  src_messagevue_type_script_lang_js_,
  messagevue_type_template_id_be44d09e_render,
  messagevue_type_template_id_be44d09e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var message = (message_component.exports);
// CONCATENATED MODULE: ./src/components/message/src/message.js


var MessageConstructor = external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend(message);
var messageType = ['info', 'success', 'warning', 'error'];
var instances = [];
var seed = 1;
var zIndexSeed = 2003;

var Message = function Message(options) {
  options = options || {};

  if (typeof options === 'string') {
    options = {
      message: options
    };
  }

  var customCLoseFunc = options.onClose;
  var id = "message_".concat(seed++);

  options.onClose = function () {
    Message.close(id, customCLoseFunc);
  };

  var instance = new MessageConstructor({
    data: options
  });
  instance.id = id;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;
  instance.dom = instance.vm.$el;
  instance.dom.style.zIndex = zIndexSeed++;
  var offset = 0;
  var len = instances.length;
  var topDist = offset;

  for (var i = 0; i < len; i++) {
    topDist += instances[i].$el.offsetHeight + 8;
  }

  topDist += 8;
  instance.top = topDist;
  instances.push(instance); // 返回关闭方法，手动调用关闭

  return function () {
    instance.vm.close(id);
  };
};

Message.close = function (id, customCloseFunc) {
  var len = instances.length;
  var index;
  var removedHeight;

  for (var i = 0; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof customCloseFunc === 'function') {
        customCloseFunc(instances[i]);
      }

      index = i;
      removedHeight = instances[i].dom.offsetHeight;
      instances.splice(i, 1);
      break;
    }
  }

  if (len > 1) {
    for (var _i = index; _i < len - 1; _i++) {
      instances[_i].dom.style.top = "".concat(parseInt(instances[_i].dom.style.top, 10) - removedHeight - 8, "px");
    }
  }
};

Message.closeAll = function () {
  instances.forEach(function (elem) {
    elem.close();
  });
};

messageType.forEach(function (type) {
  Message[type] = function (options) {
    if (typeof options === 'string') {
      options = {
        message: options
      };
    }

    options.type = type;
    options.icon = options.icon;
    return Message(options);
  };
});
/* harmony default export */ var src_message = (Message);
// CONCATENATED MODULE: ./libEntry/install/message/index.js

/* harmony default export */ var install_message = (src_message);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/messageBox/index.vue?vue&type=template&id=65499954&scoped=true&
var messageBoxvue_type_template_id_65499954_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"ss-message-box-wrapper",class:_vm.customClass,attrs:{"role":"dialog"}},[_c('transition',{attrs:{"name":"slide-fade"}},[_c('div',{ref:"messageBox",staticClass:"ss-message-box",class:[{'ss-message-box-big': _vm.layout === 'vertical'}]},[(_vm.layout === 'vertical' && _vm.closeIcon)?_c('div',{staticClass:"sense-icon-close ss-message-close",on:{"click":function($event){return _vm.handleAction('cancel')}}}):_vm._e(),_c('div',{staticClass:"ss-message-box-main"},[_c('div',{staticClass:"ss-message-box-icon"},[_c('i',{class:_vm.initIconClass})]),_c('div',{staticClass:"ss-message-box-content",style:({width: _vm.boxWidth ? _vm.boxWidth - 40 + 'px' : 'auto'})},[(_vm.initTitle)?_c('div',{staticClass:"content__title"},[_vm._v("\n                        "+_vm._s(_vm.initTitle)+"\n                    ")]):_vm._e(),_c('div',{staticClass:"content__message"},[(!_vm.dangerouslyUseHTMLString)?_c('div',[_vm._v(_vm._s(_vm.message))]):_c('div',{domProps:{"innerHTML":_vm._s(_vm.message)}}),(_vm.showInput)?_c('div',{staticClass:"content__input"},[_c('ss-input',{attrs:{"type":_vm.inputType,"placeholder":_vm.inputPlaceholder},model:{value:(_vm.inputValue),callback:function ($$v) {_vm.inputValue=$$v},expression:"inputValue"}})],1):_vm._e()])])]),_c('div',{staticClass:"ss-message-box__btn",class:[_vm.confirmButtonPosition == 'left'&& 'flex-row-reverse',
                _vm.buttonPosition && ("ss-button__" + _vm.buttonPosition)     
                ]},[(_vm.showCancelButton)?_c('ss-button',{class:_vm.cancelButtonClass,attrs:{"type":"plain"},on:{"click":function($event){return _vm.handleAction('cancel')}}},[_vm._v(_vm._s(_vm.cancelButtonText || '取消'))]):_vm._e(),(_vm.showConfirmButton)?_c('ss-button',{class:_vm.confirmButtonClass,attrs:{"loading":_vm.confirmButtonLoading,"type":_vm.buttonType},on:{"click":function($event){return _vm.handleAction('confirm')}}},[_vm._v(_vm._s(_vm.confirmButtonText || '确认'))]):_vm._e()],1)])]),_c('transition',{attrs:{"name":"mask-fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.maskControl.isShow),expression:"maskControl.isShow"}],ref:"mask",staticClass:"ss-message-modal-box",on:{"click":_vm.handleWrapperClick}})])],1)}
var messageBoxvue_type_template_id_65499954_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/messageBox/index.vue?vue&type=template&id=65499954&scoped=true&

// CONCATENATED MODULE: ./src/components/messageBox/aria-utils.js
var aria = aria || {};
aria.Utils = aria.Utils || {};
/**
 * @desc Set focus on descendant nodes until the first focusable element is
 *       found.
 * @param element
 *          DOM node for which to find the first focusable descendant.
 * @returns
 *  true if a focusable element is found and focus is set.
 */

aria.Utils.focusFirstDescendant = function (element) {
  for (var i = 0; i < element.childNodes.length; i++) {
    var child = element.childNodes[i];

    if (aria.Utils.attemptFocus(child) || aria.Utils.focusFirstDescendant(child)) {
      return true;
    }
  }

  return false;
};
/**
 * @desc Find the last descendant node that is focusable.
 * @param element
 *          DOM node for which to find the last focusable descendant.
 * @returns
 *  true if a focusable element is found and focus is set.
 */


aria.Utils.focusLastDescendant = function (element) {
  for (var i = element.childNodes.length - 1; i >= 0; i--) {
    var child = element.childNodes[i];

    if (aria.Utils.attemptFocus(child) || aria.Utils.focusLastDescendant(child)) {
      return true;
    }
  }

  return false;
};
/**
 * @desc Set Attempt to set focus on the current node.
 * @param element
 *          The node to attempt to focus on.
 * @returns
 *  true if element is focused.
 */


aria.Utils.attemptFocus = function (element) {
  if (!aria.Utils.isFocusable(element)) {
    return false;
  }

  aria.Utils.IgnoreUtilFocusChanges = true;

  try {
    element.focus();
  } catch (e) {}

  aria.Utils.IgnoreUtilFocusChanges = false;
  return document.activeElement === element;
};

aria.Utils.isFocusable = function (element) {
  if (element.tabIndex > 0 || element.tabIndex === 0 && element.getAttribute('tabIndex') !== null) {
    return true;
  }

  if (element.disabled) {
    return false;
  }

  switch (element.nodeName) {
    case 'A':
      return !!element.href && element.rel !== 'ignore';

    case 'INPUT':
      return element.type !== 'hidden' && element.type !== 'file';

    case 'BUTTON':
    case 'SELECT':
    case 'TEXTAREA':
      return true;

    default:
      return false;
  }
};
/**
 * 触发一个事件
 * mouseenter, mouseleave, mouseover, keyup, change, click 等
 * @param  {Element} elm
 * @param  {String} name
 * @param  {*} opts
 */


aria.Utils.triggerEvent = function (elm, name) {
  var eventName;

  if (/^mouse|click/.test(name)) {
    eventName = 'MouseEvents';
  } else if (/^key/.test(name)) {
    eventName = 'KeyboardEvent';
  } else {
    eventName = 'HTMLEvents';
  }

  var evt = document.createEvent(eventName);

  for (var _len = arguments.length, opts = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    opts[_key - 2] = arguments[_key];
  }

  evt.initEvent.apply(evt, [name].concat(opts));
  elm.dispatchEvent ? elm.dispatchEvent(evt) : elm.fireEvent('on' + name, evt);
  return elm;
};

aria.Utils.keys = {
  tab: 9,
  enter: 13,
  space: 32,
  left: 37,
  up: 38,
  right: 39,
  down: 40
};
/* harmony default export */ var aria_utils = (aria.Utils);
// CONCATENATED MODULE: ./src/components/messageBox/aria-dialog.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @constructor
 * @desc Dialog object providing modal focus management.
 *
 * Assumptions: The element serving as the dialog container is present in the
 * DOM and hidden. The dialog container has role='dialog'.
 *
 * @param dialogId
 *          The ID of the element serving as the dialog container.
 * @param focusAfterClosed
 *          Either the DOM node or the ID of the DOM node to focus when the
 *          dialog closes.
 * @param focusFirst
 *          Optional parameter containing either the DOM node or the ID of the
 *          DOM node to focus when the dialog opens. If not specified, the
 *          first focusable element in the dialog will receive focus.
 */

var aria_dialog_aria = aria_dialog_aria || {};
var tabEvent;

aria_dialog_aria.Dialog = function (dialog, focusAfterClosed, focusFirst) {
  var _this = this;

  this.dialogNode = dialog;
  console.log(dialog, 'dialog');

  if (this.dialogNode === null || this.dialogNode.getAttribute('role') !== 'dialog') {
    throw new Error('Dialog() requires a DOM element with ARIA role of dialog.');
  }

  if (typeof focusAfterClosed === 'string') {
    this.focusAfterClosed = document.getElementById(focusAfterClosed);
  } else if (_typeof(focusAfterClosed) === 'object') {
    this.focusAfterClosed = focusAfterClosed;
  } else {
    this.focusAfterClosed = null;
  }

  if (typeof focusFirst === 'string') {
    this.focusFirst = document.getElementById(focusFirst);
  } else if (_typeof(focusFirst) === 'object') {
    this.focusFirst = focusFirst;
  } else {
    this.focusFirst = null;
  }

  if (this.focusFirst) {
    this.focusFirst.focus();
  } else {
    aria_utils.focusFirstDescendant(this.dialogNode);
  }

  this.lastFocus = document.activeElement;

  tabEvent = function tabEvent(e) {
    _this.trapFocus(e);
  };

  this.addListeners();
};

aria_dialog_aria.Dialog.prototype.addListeners = function () {
  document.addEventListener('focus', tabEvent, true);
};

aria_dialog_aria.Dialog.prototype.removeListeners = function () {
  document.removeEventListener('focus', tabEvent, true);
};

aria_dialog_aria.Dialog.prototype.closeDialog = function () {
  var _this2 = this;

  console.log('移除');
  this.removeListeners();

  if (this.focusAfterClosed) {
    setTimeout(function () {
      _this2.focusAfterClosed.focus();
    });
  }
};

aria_dialog_aria.Dialog.prototype.trapFocus = function (event) {
  if (aria_utils.IgnoreUtilFocusChanges) {
    return;
  }

  if (this.dialogNode.contains(event.target)) {
    this.lastFocus = event.target;
  } else {
    aria_utils.focusFirstDescendant(this.dialogNode);

    if (this.lastFocus === document.activeElement) {
      aria_utils.focusLastDescendant(this.dialogNode);
    }

    this.lastFocus = document.activeElement;
  }
};

/* harmony default export */ var aria_dialog = (aria_dialog_aria.Dialog);
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/messageBox/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var iconMap = {
  success: 'sense-icon-status__success',
  info: 'sense-icon-status__primary',
  warning: 'sense-icon-status__warning',
  error: 'sense-icon-status__warning'
};
var titleMap = {
  success: '成功',
  info: '提示',
  warning: '确认信息',
  error: '错误'
};
var messageBox;
/* harmony default export */ var messageBoxvue_type_script_lang_js_ = ({
  name: 'SsMessageBox',
  components: {
    ssButton: components_button,
    ssInput: input
  },
  props: {
    modal: {
      default: true
    },
    iconClass: {
      // 自定义icon 会覆盖 type
      type: String,
      default: ''
    },
    iconColor: {
      type: String,
      // 会覆盖type 图标中的颜色 
      default: ''
    }
  },
  data: function data() {
    return {
      title: null,
      message: '',
      type: '',
      maskControl: {
        isShow: false
      },
      visible: false,
      uid: 1,
      customClass: '',
      // 自定义类名
      showInput: false,
      inputValue: '',
      inputPlaceholder: '',
      inputType: 'text',
      inputPattern: null,
      // 输入校验正则
      inputPatternType: 'regex',
      // 'regex 正则' 'str'
      inputValidator: null,
      inputErrorMessage: '',
      showConfirmButton: true,
      showCancelButton: true,
      action: '',
      confirmButtonText: '',
      cancelButtonText: '',
      confirmButtonClass: '',
      // 确认按钮类名
      cancelButtonClass: '',
      // 取消按钮类名
      confirmButtonDisabled: false,
      editorErrorMessage: null,
      callback: null,
      // callback 函数，不使用则返回 Promise
      dangerouslyUseHTMLString: false,
      // 为true 表示message 将按html处理
      focusAfterClosed: null,
      distinguishCancelAndClose: false,
      closeOnClickModal: true,
      // 是否可以通过点击遮罩层关闭
      confirmButtonPosition: 'right',
      // 确认按钮默认在右边
      buttonPosition: 'right',
      // 底部按钮位置
      layout: '',
      // 风格，vertical,默认水平
      boxWidth: '',
      confirmButtonLoading: false,
      closeIcon: true
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      window.addEventListener('hashchange', _this.close);
      _this.focusAfterClosed = document.activeElement;
      messageBox = new aria_dialog(_this.$el, _this.focusAfterClosed);

      _this.initMainPosition();
    });
  },
  computed: {
    buttonType: function buttonType() {
      if (this.type === 'success') {
        return 'success';
      } else if (this.type === 'warning' || this.type === 'error') {
        return 'warning';
      } else {
        return 'default';
      }
    },
    initIconClass: function initIconClass() {
      if (this.iconClass) {
        return this.iconClass;
      } else {
        return iconMap[this.type];
      }
    },
    initTitle: function initTitle() {
      if (this.title === '' || this.title) {
        return this.title;
      } else if (this.info) {
        return titleMap[this.info];
      } else {
        return '';
      }
    }
  },
  methods: {
    /**
     * close 关闭弹框
     */
    closeMessage: function closeMessage() {
      this.closeMainPosition();
      this.handleAction();
      this.callback('close', this);
    },

    /**
     * 初始化弹框位置
     */
    initMainPosition: function initMainPosition() {
      this.$refs.messageBox.style.cssText = "\n        left: 50%;\n        top: 30%;\n        transform: translate(-50%,-50%);\n        opacity: 0\n      ";
      this.$nextTick(this.lastMainPosition);
    },

    /**
     * 弹框最终位置
     */
    lastMainPosition: function lastMainPosition() {
      this.$refs.messageBox.style.cssText = "\n        width: ".concat(this.width, ";\n        left: 50%;\n        top: 50%;\n        transform: translate(-50%,-50%);\n        opacity: 1;\n      ");
    },

    /**
     * 关闭弹框后最后消失位置
     */
    closeMainPosition: function closeMainPosition() {
      var _this2 = this;

      this.$refs.messageBox.style.cssText = "\n        width: ".concat(this.width, ";\n        left: 50%;\n        top: 40%;\n        opacity: 0;\n        transform: translate(-50%,-50%);\n      ");
      setTimeout(function () {
        _this2.visible = false;
        messageBox.closeDialog();
      }, 200);
    },

    /**
     * 关闭
     */
    doClose: function doClose() {
      var _this3 = this;

      this.closeMainPosition();
      setTimeout(function () {
        if (_this3.action) {
          _this3.callback(_this3.action, _this3);
        }
      });
    },
    handleWrapperClick: function handleWrapperClick() {
      // 遮罩层 点击事件
      if (!this.closeOnClickModal) return;
      this.handleAction('close');
    },
    handleAction: function handleAction(action) {
      if (this.showInput && !this.validate() && action === 'confirm') {
        return;
      }

      this.action = action;

      if (typeof this.beforeClose === 'function') {
        this.close = this.getSafeClose();
        this.beforeClose(action, this, this.close);
      } else {
        this.doClose();
      }
    },
    getSafeClose: function getSafeClose() {
      var _this4 = this;

      var currentId = this.uid;
      return function () {
        _this4.$nextTick(function () {
          if (currentId === _this4.uid) _this4.doClose();
        });
      };
    },
    validate: function validate() {
      var inputPattern = this.inputPattern;

      if (this.inputPattern && this.inputPatternType === 'regex' && !inputPattern.test(this.inputValue || '')) {
        if (this.inputErrorMessage) {
          this.$message.warning(this.inputErrorMessage);
        }

        return false;
      } else if (this.inputPattern && this.inputPatternType === 'str' && this.inputValue.indexOf(this.inputPattern) === -1) {
        if (this.inputErrorMessage) {
          this.$message.warning(this.inputErrorMessage);
        }

        return false;
      }

      return true;
    }
  },
  watch: {
    visible: function visible(val) {
      if (val) {
        this.maskControl.isShow = true;
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    window.addEventListener('hashchange', this.doClose);
    setTimeout(function () {
      messageBox.closeDialog();
    }, 0);
  }
});
// CONCATENATED MODULE: ./src/components/messageBox/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_messageBoxvue_type_script_lang_js_ = (messageBoxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/messageBox/index.vue?vue&type=style&index=0&id=65499954&lang=scss&scoped=true&
var messageBoxvue_type_style_index_0_id_65499954_lang_scss_scoped_true_ = __webpack_require__(65);

// CONCATENATED MODULE: ./src/components/messageBox/index.vue






/* normalize component */

var messageBox_component = normalizeComponent(
  components_messageBoxvue_type_script_lang_js_,
  messageBoxvue_type_template_id_65499954_scoped_true_render,
  messageBoxvue_type_template_id_65499954_scoped_true_staticRenderFns,
  false,
  null,
  "65499954",
  null
  
)

/* harmony default export */ var components_messageBox = (messageBox_component.exports);
// CONCATENATED MODULE: ./src/components/messageBox/main.js
function main_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { main_typeof = function _typeof(obj) { return typeof obj; }; } else { main_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return main_typeof(obj); }




var isVNode = function isVNode(node) {
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  return node !== null && main_typeof(node) === 'object' && hasOwnProperty.call(node, 'componentOptions');
};

var main_merge = function merge(target) {
  for (var i = 1, j = arguments.length; i < j; i++) {
    var source = arguments[i] || {};

    for (var prop in source) {
      if (source.hasOwnProperty(prop)) {
        var value = source[prop];

        if (value !== undefined) {
          target[prop] = value;
        }
      }
    }
  }

  return target;
};

var defaults = {
  title: null,
  message: '',
  type: 'info',
  iconClass: '',
  iconColor: '',
  showInput: false,
  showClose: true,
  modalFade: true,
  lockScroll: true,
  closeOnClickModal: true,
  closeOnPressEscape: true,
  closeOnHashChange: true,
  inputValue: '',
  inputPlaceholder: '',
  inputType: 'text',
  inputPattern: null,
  inputValidator: null,
  inputErrorMessage: '',
  showConfirmButton: true,
  showCancelButton: false,
  buttonPosition: 'right',
  confirmButtonPosition: 'right',
  confirmButtonText: '',
  cancelButtonText: '',
  confirmButtonClass: '',
  cancelButtonClass: '',
  customClass: '',
  beforeClose: null,
  dangerouslyUseHTMLString: false,
  center: false,
  roundButton: false,
  distinguishCancelAndClose: false,
  closeIcon: true
};
var MessageBoxConstructor = external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend(components_messageBox);
var currentMsg;
var main_instance;
var msgQueue = [];

var defaultCallback = function defaultCallback(action) {
  if (currentMsg) {
    var callback = currentMsg.callback;

    if (typeof callback === 'function') {
      if (main_instance.showInput) {
        callback(main_instance.inputValue, action);
      } else {
        callback(action);
      }
    }

    if (currentMsg.resolve) {
      if (action === 'confirm') {
        if (main_instance.showInput) {
          currentMsg.resolve({
            value: main_instance.inputValue,
            action: action
          });
        } else {
          currentMsg.resolve(action);
        }
      } else if (currentMsg.reject && (action === 'cancel' || action === 'close')) {
        currentMsg.reject(action);
      }
    }
  }
};

var main_initInstance = function initInstance() {
  main_instance = new MessageBoxConstructor({
    el: document.createElement('div')
  });
  main_instance.callback = defaultCallback;
};

var main_showNextMsg = function showNextMsg() {
  if (!main_instance) {
    main_initInstance();
  }

  main_instance.action = '';

  if (!main_instance.visible || main_instance.closeTimer) {
    if (msgQueue.length > 0) {
      currentMsg = msgQueue.shift();
      var options = currentMsg.options;

      for (var prop in options) {
        if (options.hasOwnProperty(prop)) {
          main_instance[prop] = options[prop];
        }
      }

      if (options.callback === undefined) {
        main_instance.callback = defaultCallback;
      }

      var oldCb = main_instance.callback;

      main_instance.callback = function (action, instance) {
        oldCb(action, instance);
        showNextMsg();
      };

      if (isVNode(main_instance.message)) {
        main_instance.$slots.default = [main_instance.message];
        main_instance.message = null;
      } else {
        delete main_instance.$slots.default;
      }

      ['modal', 'showClose', 'closeOnClickModal', 'closeOnPressEscape', 'closeOnHashChange'].forEach(function (prop) {
        if (main_instance[prop] === undefined) {
          main_instance[prop] = true;
        }
      });
      main_instance.vm = main_instance.$mount();
      document.body.appendChild(main_instance.vm.$el);
      main_instance.vm.visible = true;
      external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.nextTick(function () {
        main_instance.visible = true;
      });
    }
  }
};

var MessageBox = function MessageBox(options, callback) {
  console.log(callback, 'callback');

  if (typeof options === 'string' || isVNode(options)) {
    options = {
      message: options
    };

    if (typeof arguments[1] === 'string') {
      options.title = arguments[1];
    }
  } else if (options.callback && !callback) {
    callback = options.callback;
  }

  if (typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      // eslint-disable-line
      msgQueue.push({
        options: main_merge({}, defaults, MessageBox.defaults, options),
        callback: callback,
        resolve: resolve,
        reject: reject
      });
      main_showNextMsg();
    });
  } else {
    msgQueue.push({
      options: main_merge({}, defaults, MessageBox.defaults, options),
      callback: callback
    });
    main_showNextMsg();
  }
};

MessageBox.setDefaults = function (defaults) {
  MessageBox.defaults = defaults;
};

MessageBox.alert = function (message, title, options) {
  if (main_typeof(title) === 'object') {
    options = title;
    title = '';
  } else if (title === undefined) {
    title = '';
  }

  return MessageBox(main_merge({
    title: title,
    message: message,
    $type: 'alert',
    closeOnPressEscape: false,
    closeOnClickModal: false
  }, options));
};

MessageBox.confirm = function (message, title, options) {
  if (main_typeof(title) === 'object') {
    options = title;
    title = '';
  } else if (title === undefined) {
    title = '';
  }

  return MessageBox(main_merge({
    title: title,
    message: message,
    $type: 'confirm',
    showCancelButton: true
  }, options));
};

MessageBox.prompt = function (message, title, options) {
  if (main_typeof(title) === 'object') {
    options = title;
    title = '';
  } else if (title === undefined) {
    title = '';
  }

  return MessageBox(main_merge({
    title: title,
    message: message,
    showCancelButton: true,
    showInput: true,
    $type: 'prompt'
  }, options));
};

MessageBox.close = function () {
  main_instance.doClose();
  main_instance.visible = false;
  msgQueue = [];
  currentMsg = null;
};

/* harmony default export */ var main = (MessageBox);

// CONCATENATED MODULE: ./libEntry/install/message-box/index.js

/* harmony default export */ var message_box = (main);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/modal/index.vue?vue&type=template&id=a2e9b4de&
var modalvue_type_template_id_a2e9b4de_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ss-modal"},[_c('div',{ref:"modal",staticClass:"ss-modal__wrapper"},[_c('div',{staticClass:"ss-modal-main"},[_c('div',{staticClass:"ss-modal-main-header"},[_c('i',{staticClass:"ss-modal__close sense-icon-close",on:{"click":function($event){$event.stopPropagation();return _vm.close($event)}}})]),_c('div',{staticClass:"ss-modal-main-content"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.iconType),expression:"iconType"}],staticClass:"ss-modal-icon__wrapper"},[_c('i',{staticClass:"ss-modal-icon",class:[
              _vm.iconType && ("ss-modal-icon-color-" + _vm.iconType),
              _vm.iconType && ("sense-icon-status__" + _vm.iconType)
            ]})]),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.title),expression:"title"}],staticClass:"ss-modal-title"},[_vm._v(_vm._s(_vm.title))]),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.content),expression:"content"}],staticClass:"ss-modal-content"},[_vm._v(" "+_vm._s(_vm.content)+" ")]),(_vm.$slots.default)?_c('div',{staticClass:"ss-modal-slot__extra"},[_vm._t("default")],2):_vm._e(),_c('p',{staticClass:"ss-modal-btn"},[(_vm.btnText.cancel)?_c('ss-button',{staticClass:"ss-modal__cancel",attrs:{"type":_vm.iconType},on:{"click":_vm.cancel}},[_vm._v("\n            "+_vm._s(_vm.btnText.cancel)+"\n          ")]):_vm._e(),(_vm.btnText.confirm)?_c('ss-button',{attrs:{"type":_vm.iconType},on:{"click":_vm.confirm}},[_vm._v("\n            "+_vm._s(_vm.btnText.confirm)+"\n          ")]):_vm._e()],1)])])]),_c('transition',{attrs:{"name":"mask-fade"},on:{"after-leave":_vm.maskAfterLeave}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.maskControl.isShow),expression:"maskControl.isShow"}],ref:"mask",staticClass:"ss-modal-mask",on:{"click":_vm.close}})])],1)}
var modalvue_type_template_id_a2e9b4de_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/modal/index.vue?vue&type=template&id=a2e9b4de&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/modal/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var modalvue_type_script_lang_js_ = ({
  name: 'SsModal',
  components: {
    ssButton: components_button
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '540px'
    },
    iconType: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    btnText: {
      type: Object,
      default: function _default() {
        return {
          confirm: '知道',
          cancel: '取消'
        };
      }
    },
    validation: {
      type: Function,
      default: function _default() {}
    }
  },
  mounted: function mounted() {
    var mousePosition = {
      x: document.documentElement.offsetWidth / 2,
      y: document.documentElement.offsetHeight / 2
    };
    this.mousePosition = mousePosition;
    document.addEventListener('click', this.docClickListener, true);
  },
  data: function data() {
    var mainSize = {};
    var clientSize = {};
    var isOpen = false;
    return {
      maskControl: {
        isShow: false
      },
      isOpen: isOpen,
      mousePosition: {
        x: 0,
        y: 0
      },
      clientSize: clientSize,
      mainSize: mainSize
    };
  },
  watch: {
    visible: function visible(val, test) {
      if (val) {
        this.isOpen = true;
        this.maskControl.isShow = true;
        this.initMainPosition();
        window.addEventListener('resize', this.lastMainPosition, false);
      }
    }
  },
  methods: {
    docClickListener: function docClickListener(event) {
      var e = event || window.event;

      if (!this.Open) {
        this.mousePosition = {
          x: e.clientX,
          y: e.clientY
        };
      }
    },
    initMainPosition: function initMainPosition() {
      this.$refs.modal.style.cssText = "\n        width: ".concat(this.width, ";\n        left: ").concat(this.mousePosition.x, "px;\n        top: ").concat(this.mousePosition.y, "px;\n      ");
      this.$nextTick(this.lastMainPosition);
    },
    lastMainPosition: function lastMainPosition() {
      this.$refs.modal.style.cssText = "\n        width: ".concat(this.width, ";\n        left: ").concat(this.mousePosition.x, "px;\n        top: ").concat(this.mousePosition.y, "px;\n        transform: translate(").concat(this.calcMoveDistance('x'), ", ").concat(this.calcMoveDistance('y'), ") scale(1);\n        opacity: 1;\n      ");
    },
    getEleStyle: function getEleStyle() {
      var reg = /px/g;
      this.mainSize = {
        wd: parseFloat(getComputedStyle(this.$refs.modal, false).width.replace(reg, '')),
        hi: parseFloat(getComputedStyle(this.$refs.modal, false).height.replace(reg, ''))
      };
      this.clientSize = {
        wd: document.documentElement.clientWidth,
        hi: document.documentElement.clientHeight
      };
    },
    calcMoveDistance: function calcMoveDistance(mark) {
      this.getEleStyle();
      var tmpIdx = mark === 'x' ? 'wd' : 'hi';
      return "".concat(parseFloat(this.clientSize[tmpIdx] / 2 - this.mousePosition[mark] - this.mainSize[tmpIdx] / 2), "px");
    },
    close: function close() {
      this.maskControl.isShow = false;
      this.$refs.modal.style.cssText = "\n        width: ".concat(this.width, ";\n        left: ").concat(this.mousePosition.x, "px;\n        top: ").concat(this.mousePosition.y, "px;\n        transform: translate(0, 0) scale(0);\n      ");
    },
    confirm: function confirm() {
      // 这里比较坑爹，在组件内build的时候default是带下划线的，在外部应用组件时编译是不带的
      if (this.validation.name !== '_default' && this.validation.name !== 'default') {
        if (!this.validation()) {
          return;
        }
      }

      this.$emit('confirms');
      this.close();
    },
    cancel: function cancel() {
      this.$emit('cancel');
      this.close();
    },
    maskAfterLeave: function maskAfterLeave() {
      this.isOpen = false;
      this.$emit('update:visible', false);
      window.removeEventListener('resize', this.lastMainPosition, false);
      this.closed();
    },
    closed: function closed() {
      this.$refs.modal.style.cssText = '';
    }
  }
});
// CONCATENATED MODULE: ./src/components/modal/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_modalvue_type_script_lang_js_ = (modalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/modal/index.vue?vue&type=style&index=0&lang=scss&
var modalvue_type_style_index_0_lang_scss_ = __webpack_require__(66);

// CONCATENATED MODULE: ./src/components/modal/index.vue






/* normalize component */

var modal_component = normalizeComponent(
  components_modalvue_type_script_lang_js_,
  modalvue_type_template_id_a2e9b4de_render,
  modalvue_type_template_id_a2e9b4de_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_modal = (modal_component.exports);
// CONCATENATED MODULE: ./libEntry/install/modal/index.js


components_modal.install = function (Vue) {
  Vue.component(components_modal.name, components_modal);
};

/* harmony default export */ var install_modal = (components_modal);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/option/index.vue?vue&type=template&id=c945a586&
var optionvue_type_template_id_c945a586_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"ss-option",class:[
    _vm.isSelected && 'ss-option__selected',
    _vm.disabled && 'ss-option__disabled',
    _vm.isMultiple && 'ss-option__multiple'
  ],on:{"click":function($event){$event.stopPropagation();return _vm.handleClick($event)}}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))]),(_vm.isMultiple && _vm.isSelected)?_c('i',{staticClass:"sense-icon-selected ss-option-multiple-icon"}):_vm._e()],2)}
var optionvue_type_template_id_c945a586_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/option/index.vue?vue&type=template&id=c945a586&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/option/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var optionvue_type_script_lang_js_ = ({
  name: 'SsOption',
  componentName: 'SsOption',
  mixins: [emitter],
  inject: ['select'],
  props: {
    value: {},
    label: String,
    disabled: Boolean
  },
  computed: {
    isMultiple: function isMultiple() {
      return this.select.multiple;
    },
    isSelected: function isSelected() {
      if (!this.isMultiple) {
        return this.select.value === this.value;
      }

      return this.select.selectedValues.includes(this.value);
    }
  },
  created: function created() {
    this.dispatch('SsSelect', 'pushOptions', this);

    if (this.isSelected) {
      this.dispatch('SsSelect', 'defaultValue', this);
    }
  },
  watch: {
    isSelected: function isSelected(val) {
      if (val && !this.isMultiple) {
        this.dispatch('SsSelect', 'defaultValue', this);
      }
    }
  },
  methods: {
    handleClick: function handleClick() {
      if (!this.disabled) {
        this.dispatch('SsSelect', 'selectOption', this);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/option/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_optionvue_type_script_lang_js_ = (optionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/option/index.vue?vue&type=style&index=0&lang=scss&
var optionvue_type_style_index_0_lang_scss_ = __webpack_require__(67);

// CONCATENATED MODULE: ./src/components/option/index.vue






/* normalize component */

var option_component = normalizeComponent(
  components_optionvue_type_script_lang_js_,
  optionvue_type_template_id_c945a586_render,
  optionvue_type_template_id_c945a586_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_option = (option_component.exports);
// CONCATENATED MODULE: ./libEntry/install/option/index.js


components_option.install = function (Vue) {
  Vue.component(components_option.name, components_option);
};

/* harmony default export */ var install_option = (components_option);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/pagination/index.vue?vue&type=template&id=4ebcd570&
var paginationvue_type_template_id_4ebcd570_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ss-pagination-warpper"},[_c('ul',{staticClass:"ss-pagination",class:{'ss-pagination-small':_vm.small}},[(_vm.showSizeChanger)?_c('li',{staticClass:"ss-pagination-options"},[_c('span',[_vm._v("共"+_vm._s(_vm.total)+"条，每页")]),_c('div',{staticClass:"ss-pagination-options-size"},[_c('ss-select',{on:{"change":_vm.pageSizeChange},model:{value:(_vm.currentPageSize),callback:function ($$v) {_vm.currentPageSize=$$v},expression:"currentPageSize"}},_vm._l((_vm.pageSizeList),function(item){return _c('ss-option',{key:item,attrs:{"value":item,"label":(item + " 条")}})}),1)],1)]):_vm._e(),_c('li',{staticClass:"ss-pagination-item ss-pagination-left",class:[_vm.currentPage === 1 && 'ss-pagination-item__disabled'],on:{"click":_vm.left}},[_c('i',{staticClass:"sense-icon-pagination-left"})]),_c('li',{staticClass:"ss-pagination-item",class:[_vm.currentPage === 1 && 'ss-pagination-item__active'],on:{"click":function($event){return _vm.handleItemClick(1)}}},[_vm._v("\n       1\n       ")]),(_vm.isLeftEllipsisShow)?_c('li',{staticClass:"ss-pagination-item ss-pagination-ellipsis"},[_vm._v("\n       •••\n       ")]):_vm._e(),_vm._l((_vm.list),function(item){return _c('li',{key:item,staticClass:"ss-pagination-item",class:[_vm.currentPage === item && 'ss-pagination-item__active'],on:{"click":function($event){return _vm.handleItemClick(item)}}},[_vm._v("\n       "+_vm._s(item)+"\n       ")])}),(_vm.isRightEllipsisShow)?_c('li',{staticClass:"ss-pagination-item ss-pagination-ellipsis"},[_vm._v("\n       •••\n       ")]):_vm._e(),(_vm.totalLength > 7)?_c('li',{staticClass:"ss-pagination-item",class:[_vm.currentPage === _vm.totalLength && 'ss-pagination-item__active'],on:{"click":function($event){return _vm.handleItemClick(_vm.totalLength)}}},[_vm._v("\n       "+_vm._s(_vm.totalLength)+"\n       ")]):_vm._e(),_c('li',{staticClass:"ss-pagination-item ss-pagination-right",class:[_vm.currentPage === _vm.totalLength && 'ss-pagination-item__disabled'],on:{"click":_vm.right}},[_c('i',{staticClass:"sense-icon-pagination-right"})]),_c('li',{staticClass:"ss-pagination-options"},[(_vm.showQuickJumper)?_c('div',{staticClass:"ss-pagination-options-jump"},[_vm._v("\n           跳至"),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.jumpPage),expression:"jumpPage"}],staticClass:"ss-pagination-options-jump-input",attrs:{"type":"text"},domProps:{"value":(_vm.jumpPage)},on:{"blur":_vm.jump,"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.jump($event)},"input":function($event){if($event.target.composing){ return; }_vm.jumpPage=$event.target.value}}}),_vm._v("页\n       ")]):_vm._e()])],2)])}
var paginationvue_type_template_id_4ebcd570_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/pagination/index.vue?vue&type=template&id=4ebcd570&

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/select/index.vue?vue&type=template&id=8d7aa192&
var selectvue_type_template_id_8d7aa192_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:(_vm.close),expression:"close"}],staticClass:"ss-select",class:[
    _vm.disabled && 'ss-select__disabled'
  ],on:{"click":function($event){$event.stopPropagation();return _vm.handleClick($event)}}},[(_vm.multiple)?_c('div',{ref:"multiple",staticClass:"ss-select-multiple"},_vm._l((_vm.selectedOptions),function(item,index){return _c('ss-tag',{key:item.value,attrs:{"type":"info","closable":""},on:{"close":function($event){return _vm.tagClose(index)}}},[_vm._v("\n      "+_vm._s(item.label)+"\n    ")])}),1):_vm._e(),_c('ss-input',{ref:"input",class:[
      _vm.isFocus || _vm.visible && 'ss-input__focus'
    ],style:([
      _vm.multipleHeight && {height: (_vm.multipleHeight + "px")}
    ]),attrs:{"placeholder":_vm.placeholder || '请选择',"readonly":"","disabled":_vm.disabled},on:{"focus":_vm.handleInputFocus,"blur":_vm.handleInputBlur},model:{value:(_vm.selectLabel),callback:function ($$v) {_vm.selectLabel=$$v},expression:"selectLabel"}},[_c('template',{slot:"suffix"},[_c('i',{staticClass:"ss-input-icon sense-icon-down ss-select-icon",class:[
          _vm.visible && 'is-reverse'
        ]})])],2),_c('ss-dropdown-menu',{attrs:{"width":_vm.menuWidth}},[_vm._t("default")],2)],1)}
var selectvue_type_template_id_8d7aa192_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/select/index.vue?vue&type=template&id=8d7aa192&

// CONCATENATED MODULE: ./src/utils/dom.js
/**
 * @description　
 */

var isServer = external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype.$isServer;
var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;
var ieVersion = isServer ? 0 : Number(document.documentMode);
/* istanbul ignore next */

var trim = function trim(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};
/* istanbul ignore next */


var camelCase = function camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
};
/* istanbul ignore next */


var on = function () {
  if (!isServer && document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
}();
/* istanbul ignore next */

var off = function () {
  if (!isServer && document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
}();
/* istanbul ignore next */

var once = function once(el, event, fn) {
  var listener = function listener() {
    if (fn) {
      fn.apply(this, arguments);
    }

    off(el, event, listener);
  };

  on(el, event, listener);
};
/* istanbul ignore next */

function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');

  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
}
;
/* istanbul ignore next */

function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName;
    }
  }

  if (!el.classList) {
    el.className = curClass;
  }
}
;
/* istanbul ignore next */

function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ');
    }
  }

  if (!el.classList) {
    el.className = trim(curClass);
  }
}
;
/* istanbul ignore next */

var getStyle = ieVersion < 9 ? function (element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);

  if (styleName === 'float') {
    styleName = 'styleFloat';
  }

  try {
    switch (styleName) {
      case 'opacity':
        try {
          return element.filters.item('alpha').opacity / 100;
        } catch (e) {
          return 1.0;
        }

      default:
        return element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null;
    }
  } catch (e) {
    return element.style[styleName];
  }
} : function (element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);

  if (styleName === 'float') {
    styleName = 'cssFloat';
  }

  try {
    var computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
};
// CONCATENATED MODULE: ./src/utils/clickoutside.js
/* eslint-disable */


var nodeList = [];
var ctx = '@@clickoutsideContext';
var startClick;
var clickoutside_seed = 0;
!external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype.$isServer && on(document, 'mousedown', function (e) {
  return startClick = e;
});
!external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype.$isServer && on(document, 'mouseup', function (e) {
  nodeList.forEach(function (node) {
    return node[ctx].documentHandler(e, startClick);
  });
});

function createDocumentHandler(el, binding, vnode) {
  return function () {
    var mouseup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var mousedown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!vnode || !vnode.context || !mouseup.target || !mousedown.target || el.contains(mouseup.target) || el.contains(mousedown.target) || el === mouseup.target || vnode.context.popperElm && (vnode.context.popperElm.contains(mouseup.target) || vnode.context.popperElm.contains(mousedown.target))) return;

    if (binding.expression && el[ctx].methodName && vnode.context[el[ctx].methodName]) {
      vnode.context[el[ctx].methodName]();
    } else {
      el[ctx].bindingFn && el[ctx].bindingFn();
    }
  };
}
/**
 * v-clickoutside
 * @desc 点击元素外面才会触发的事件
 * @example
 * ```vue
 * <div v-element-clickoutside="handleClose">
 * ```
 */


/* harmony default export */ var clickoutside = ({
  bind: function bind(el, binding, vnode) {
    nodeList.push(el);
    var id = clickoutside_seed++;
    el[ctx] = {
      id: id,
      documentHandler: createDocumentHandler(el, binding, vnode),
      methodName: binding.expression,
      bindingFn: binding.value
    };
  },
  update: function update(el, binding, vnode) {
    el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
    el[ctx].methodName = binding.expression;
    el[ctx].bindingFn = binding.value;
  },
  unbind: function unbind(el) {
    var len = nodeList.length;

    for (var i = 0; i < len; i++) {
      if (nodeList[i][ctx].id === el[ctx].id) {
        nodeList.splice(i, 1);
        break;
      }
    }

    delete el[ctx];
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/tag/index.vue?vue&type=template&id=11ccda3a&
var tagvue_type_template_id_11ccda3a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ss-tag",class:[
    _vm.type && ("ss-tag__" + _vm.type),
    _vm.closable && "ss-tag__closable",
    !_vm.isShow && 'ss-tag__hide'
  ]},[_vm._t("default"),(_vm.closable)?_c('span',{staticClass:"ss-tag-icon-wrap"},[_c('i',{staticClass:"ss-tag-icon sense-icon-close",on:{"click":function($event){$event.stopPropagation();return _vm.close($event)}}})]):_vm._e()],2)}
var tagvue_type_template_id_11ccda3a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/tag/index.vue?vue&type=template&id=11ccda3a&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/tag/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var tagvue_type_script_lang_js_ = ({
  name: 'SsTag',
  props: {
    type: String,
    closable: Boolean,
    size: String
  },
  data: function data() {
    return {
      isShow: true
    };
  },
  methods: {
    close: function close() {
      this.isShow = false;
      this.$emit('close');
    }
  }
});
// CONCATENATED MODULE: ./src/components/tag/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_tagvue_type_script_lang_js_ = (tagvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/tag/index.vue?vue&type=style&index=0&lang=scss&
var tagvue_type_style_index_0_lang_scss_ = __webpack_require__(68);

// CONCATENATED MODULE: ./src/components/tag/index.vue






/* normalize component */

var tag_component = normalizeComponent(
  components_tagvue_type_script_lang_js_,
  tagvue_type_template_id_11ccda3a_render,
  tagvue_type_template_id_11ccda3a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tag = (tag_component.exports);
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/select/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var selectvue_type_script_lang_js_ = ({
  name: 'SsSelect',
  componentName: 'SsSelect',
  mixins: [emitter],
  provide: function provide() {
    return {
      select: this
    };
  },
  directives: {
    Clickoutside: clickoutside
  },
  components: {
    SsInput: input,
    SsDropdownMenu: dropdownMenu,
    SsTag: tag
  },
  props: {
    value: {},
    placeholder: String,
    disabled: Boolean,
    multiple: Boolean
  },
  data: function data() {
    return {
      isFocus: false,
      visible: false,
      selectLabel: '',
      selectValue: '',
      selectedOptions: [],
      selectedValues: [],
      multipleHeight: null,
      menuWidth: 0,
      optionValues: []
    };
  },
  created: function created() {
    this.$on('pushOptions', this.pushOptions);
    this.$on('defaultValue', this.setValue);
    this.$on('selectOption', this.handleSelectOption);
  },
  mounted: function mounted() {
    this.setMenuWidth();
  },
  watch: {
    visible: function visible(val) {
      this.broadcast('SsDropdownMenu', 'visible', val);
    },
    selectedValues: function selectedValues(val) {
      var _this = this;

      if (val.length) {
        this.selectLabel = ' ';
      } else {
        this.selectLabel = '';
      }

      this.$nextTick(function () {
        var clientHeight = _this.$refs.multiple.clientHeight;

        if (clientHeight >= 36) {
          _this.multipleHeight = clientHeight;

          _this.broadcast('SsDropdownMenu', 'update');
        }
      });
    },
    value: function value(val) {
      if (!this.multiple && !this.optionValues.includes(val)) {
        this.selectLabel = '';
      }
    }
  },
  methods: {
    handleInputFocus: function handleInputFocus() {
      this.isFocus = true;
    },
    handleInputBlur: function handleInputBlur() {
      this.isFocus = false;
    },
    handleClick: function handleClick() {
      if (!this.disabled) {
        this.visible = !this.visible;
      }
    },
    setValue: function setValue(option) {
      if (!this.multiple) {
        this.visible = false;
        this.selectLabel = option.label;
        this.selectValue = option.value;
      } else {
        var index = this.selectedValues.indexOf(option.value);

        if (index > -1) {
          this.selectedOptions.splice(index, 1);
          this.selectedValues.splice(index, 1);
        } else {
          this.selectedOptions.push(option);
          this.selectedValues.push(option.value);
        }
      }
    },
    handleSelectOption: function handleSelectOption(option) {
      this.setValue(option);

      if (!this.multiple) {
        this.$emit('change', option.value);
        this.$emit('input', option.value);
      } else {
        this.$emit('change', this.selectedValues);
        this.$emit('input', this.selectedValues);
      }
    },
    setMenuWidth: function setMenuWidth() {
      this.menuWidth = this.$el.clientWidth;
    },
    close: function close() {
      this.visible = false;
    },
    tagClose: function tagClose(index) {
      this.selectedOptions.splice(index, 1);
      this.selectedValues.splice(index, 1);
      this.$emit('change', this.selectedValues);
      this.$emit('input', this.selectedValues);
    },
    pushOptions: function pushOptions(option) {
      this.optionValues.push(option.value);
    }
  }
});
// CONCATENATED MODULE: ./src/components/select/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_selectvue_type_script_lang_js_ = (selectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/select/index.vue?vue&type=style&index=0&lang=scss&
var selectvue_type_style_index_0_lang_scss_ = __webpack_require__(69);

// CONCATENATED MODULE: ./src/components/select/index.vue






/* normalize component */

var select_component = normalizeComponent(
  components_selectvue_type_script_lang_js_,
  selectvue_type_template_id_8d7aa192_render,
  selectvue_type_template_id_8d7aa192_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_select = (select_component.exports);
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/pagination/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var paginationvue_type_script_lang_js_ = ({
  name: 'SsPagination',
  components: {
    SsSelect: components_select,
    SsOption: components_option
  },
  props: {
    total: Number,
    current: Number,
    pageSize: {
      type: Number,
      default: 10
    },
    pageSizeOptions: Array,
    showSizeChanger: Boolean,
    showQuickJumper: Boolean,
    small: Boolean
  },
  data: function data() {
    return {
      currentPage: this.current || 1,
      currentPageSize: this.pageSize,
      jumpPage: ''
    };
  },
  watch: {
    current: function current(val) {
      this.currentPage = val || 1;
    },
    pageSize: function pageSize(val) {
      this.currentPageSize = this.pageSize;
    },
    currentPage: function currentPage(page) {
      this.$emit('input', page);
      this.$emit('change', page);
    }
  },
  computed: {
    totalLength: function totalLength() {
      return Math.ceil(this.total / this.currentPageSize);
    },
    list: function list() {
      var arr = [];
      var length = 5;
      var start = 2;

      if (this.totalLength > 7) {
        length = 6;

        if (this.totalLength - this.currentPage < 3) {
          start = this.totalLength - 6;
        } else if (this.currentPage >= 6) {
          length = 5;
          start = this.currentPage - 2;
        }
      } else {
        length = this.totalLength - 1;
      }

      for (var i = 0; i < length; i++, start++) {
        arr.push(start);
      }

      return arr;
    },
    isLeftEllipsisShow: function isLeftEllipsisShow() {
      return this.currentPage > 4 && this.totalLength > 7;
    },
    isRightEllipsisShow: function isRightEllipsisShow() {
      return this.totalLength - this.currentPage >= 4 && this.totalLength > 7;
    },
    pageSizeList: function pageSizeList() {
      return this.pageSizeOptions || [10, 20, 30, 40];
    }
  },
  methods: {
    handleItemClick: function handleItemClick(page) {
      if (this.currentPage !== page) {
        this.currentPage = page;
      }
    },
    pageSizeChange: function pageSizeChange(size) {
      this.currentPageSize = size;

      if (this.currentPage > this.totalLength) {
        this.currentPage = this.totalLength;
      }

      this.$emit('sizeChange', size);
    },
    left: function left() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    right: function right() {
      if (this.currentPage < this.totalLength) {
        this.currentPage++;
      }
    },
    jump: function jump() {
      var page = +this.jumpPage;

      if (page && page !== this.currentPage) {
        if (page > this.totalLength) {
          page = this.totalLength;
        }

        if (page < 1) {
          page = 1;
        }

        this.currentPage = page;
      }

      this.jumpPage = '';
    }
  }
});
// CONCATENATED MODULE: ./src/components/pagination/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_paginationvue_type_script_lang_js_ = (paginationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/pagination/index.vue?vue&type=style&index=0&lang=scss&
var paginationvue_type_style_index_0_lang_scss_ = __webpack_require__(70);

// CONCATENATED MODULE: ./src/components/pagination/index.vue






/* normalize component */

var pagination_component = normalizeComponent(
  components_paginationvue_type_script_lang_js_,
  paginationvue_type_template_id_4ebcd570_render,
  paginationvue_type_template_id_4ebcd570_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var pagination = (pagination_component.exports);
// CONCATENATED MODULE: ./libEntry/install/pagination/index.js


pagination.install = function (Vue) {
  Vue.component(pagination.name, pagination);
};

/* harmony default export */ var install_pagination = (pagination);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/popover/index.vue?vue&type=template&id=3825df78&
var popovervue_type_template_id_3825df78_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"ss-popover-wrapper"},[_vm._t("reference"),_c('transition',{attrs:{"name":"fade"}},[_c('div',{ref:"popover",class:['ss-popover', ("ss-popover__" + _vm.placement)],style:(_vm.popoverStyle)},[_c('div',{staticClass:"ss-popover-box",style:(_vm.popoverBoxStyle)},[(_vm.title)?_c('div',{staticClass:"ss-popover-title",domProps:{"textContent":_vm._s(_vm.title)}}):_vm._e(),_vm._t("default",[_c('div',{domProps:{"innerHTML":_vm._s(_vm.content)}})]),_c('span',{class:['ss-popover-arrow',("ss-popover-arrow__" + _vm.placement)]})],2)])])],2)}
var popovervue_type_template_id_3825df78_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/popover/index.vue?vue&type=template&id=3825df78&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/popover/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var popovervue_type_script_lang_js_ = ({
  name: 'SsPopover',
  props: {
    trigger: {
      type: String,
      default: 'click',
      validator: function validator(value) {
        return ['click', 'hover'].indexOf(value) > -1;
      }
    },
    title: String,
    content: String,
    width: {},
    placement: {
      type: String,
      default: 'right',
      validator: function validator(value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) > -1;
      }
    }
  },
  data: function data() {
    return {
      top: '',
      left: '',
      bottom: '',
      right: '',
      popoverStyle: {},
      popoverBoxStyle: {}
    };
  },
  mounted: function mounted() {
    var reference = this.$slots.reference[0].elm;
    var popover = this.$refs.popover;
    this.computeDistance();

    if (this.trigger === 'click') {
      on(reference, 'click', this.handleToggle);
      on(document, 'click', this.handleDocumentClick);
    } else if (this.trigger === 'hover') {
      on(reference, 'mouseenter', this.handleMouseEnter);
      on(popover, 'mouseenter', this.handleMouseEnter);
      on(reference, 'mouseleave', this.handleMouseLeave);
      on(popover, 'mouseleave', this.handleMouseLeave);
    }
  },
  methods: {
    handleToggle: function handleToggle() {
      var popover = this.$refs.popover;
      this.computeDistance();

      if (hasClass(popover, 'ss-popover__show')) {
        removeClass(popover, 'ss-popover__show');
        addClass(popover, 'ss-popover__hidden');
      } else if (hasClass(popover, 'ss-popover__hidden')) {
        removeClass(popover, 'ss-popover__hidden');
        addClass(popover, 'ss-popover__show');
      } else {
        addClass(popover, 'ss-popover__show');
      }
    },
    handleDocumentClick: function handleDocumentClick(e) {
      var reference = this.$slots.reference[0].elm;
      var popover = this.$refs.popover;

      if (!this.$el || !reference || this.$el.contains(e.target) || !popover || popover.contains(e.target)) {
        return;
      }

      removeClass(popover, 'ss-popover__show');
      addClass(popover, 'ss-popover__hidden');
    },
    handleMouseEnter: function handleMouseEnter() {
      this.computeDistance();
      var popover = this.$refs.popover;
      removeClass(popover, 'ss-popover__hidden');
      addClass(popover, 'ss-popover__show');
    },
    handleMouseLeave: function handleMouseLeave() {
      var popover = this.$refs.popover;
      addClass(popover, 'ss-popover__hidden');
      removeClass(popover, 'ss-popover__show');
    },
    computeDistance: function computeDistance() {
      var reference = this.$slots.reference[0].elm;
      var popover = this.$refs.popover;
      var referenceHeight = 0;
      var referenceWidth = 0;
      var popoverHeight = 0;
      var popoverWidth = this.width;
      this.popoverBoxStyle = {
        width: "".concat(popoverWidth, "px")
      };

      if (reference && popover) {
        referenceHeight = reference.offsetHeight;
        referenceWidth = reference.offsetWidth;
        popoverHeight = popover.offsetHeight;
      }

      if (popover && this.placement === 'right') {
        this.top = "-".concat(Number(popoverHeight / 2 - referenceHeight / 2), "px");
        this.left = "".concat(referenceWidth, "px");
        this.popoverBoxStyle.right = '-5px';
      } else if (popover && this.placement === 'top') {
        this.bottom = "".concat(Number(referenceHeight), "px");
        this.left = "-".concat(Number(popoverWidth / 2 - referenceWidth) - 10, "px");
        this.popoverBoxStyle.top = '-5px';
        this.popoverBoxStyle.bottom = '-5px';
      } else if (popover && this.placement === 'bottom') {
        this.top = "".concat(Number(referenceHeight), "px");
        this.left = "-".concat(Number(popoverWidth / 2 - referenceWidth) - 10, "px");
        this.popoverBoxStyle.top = '5px';
        this.popoverBoxStyle.bottom = '5px';
      } else if (popover && this.placement === 'left') {
        this.top = "-".concat(Number(popoverHeight / 2 - referenceHeight / 2), "px");
        this.right = "".concat(referenceWidth, "px");
        this.popoverBoxStyle.left = '-5px';
      }

      this.popoverStyle = {
        width: "".concat(popoverWidth, "px"),
        top: this.top,
        left: this.left,
        right: this.right,
        bottom: this.bottom
      };
    }
  },
  destroyed: function destroyed() {
    var reference = this.reference;
    off(reference, 'click', this.doToggle);
    off(reference, 'mouseleave', this.handleMouseLeave);
    off(reference, 'mouseenter', this.handleMouseEnter);
    off(document, 'click', this.handleDocumentClick);
  }
});
// CONCATENATED MODULE: ./src/components/popover/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_popovervue_type_script_lang_js_ = (popovervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/popover/index.vue?vue&type=style&index=0&lang=scss&
var popovervue_type_style_index_0_lang_scss_ = __webpack_require__(71);

// CONCATENATED MODULE: ./src/components/popover/index.vue






/* normalize component */

var popover_component = normalizeComponent(
  components_popovervue_type_script_lang_js_,
  popovervue_type_template_id_3825df78_render,
  popovervue_type_template_id_3825df78_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_popover = (popover_component.exports);
// CONCATENATED MODULE: ./libEntry/install/popover/index.js


components_popover.install = function (Vue) {
  Vue.component(components_popover.name, components_popover);
};

/* harmony default export */ var install_popover = (components_popover);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/radio/index.vue?vue&type=template&id=28af8f7a&
var radiovue_type_template_id_28af8f7a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"ss-radio",class:[
    _vm.isChecked && 'ss-radio__checked',
    _vm.disabled && 'ss-radio__disabled'
  ]},[_c('span',{staticClass:"ss-radio-arc"},[_c('span',{staticClass:"ss-radio-inner",class:[
        _vm.isChecked && 'ss-radio-inner__checked' ]}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentVal),expression:"currentVal"}],staticClass:"ss-radio-input",domProps:{"value":(_vm.currentVal)},on:{"click":_vm.handleClick,"input":function($event){if($event.target.composing){ return; }_vm.currentVal=$event.target.value}}})]),(_vm.$slots.default)?_c('span',{staticClass:"ss-radio-text"},[_vm._t("default")],2):_vm._e()])}
var radiovue_type_template_id_28af8f7a_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/radio/index.vue?vue&type=template&id=28af8f7a&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/radio/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var radiovue_type_script_lang_js_ = ({
  name: 'SsRadio',
  props: {
    value: [String, Number, Boolean],
    label: [String, Number, Boolean],
    disabled: [Boolean]
  },
  data: function data() {
    return {};
  },
  computed: {
    currentVal: function currentVal() {
      return this.value === undefined || this.value === null ? '' : this.value;
    },
    isChecked: function isChecked() {
      return this.value === this.label;
    }
  },
  methods: {
    handleClick: function handleClick() {
      if (!this.disabled) {
        this.$emit('input', this.label);
        this.$emit('change', this.label);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/radio/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_radiovue_type_script_lang_js_ = (radiovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/radio/index.vue?vue&type=style&index=0&lang=scss&
var radiovue_type_style_index_0_lang_scss_ = __webpack_require__(72);

// CONCATENATED MODULE: ./src/components/radio/index.vue






/* normalize component */

var radio_component = normalizeComponent(
  components_radiovue_type_script_lang_js_,
  radiovue_type_template_id_28af8f7a_render,
  radiovue_type_template_id_28af8f7a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_radio = (radio_component.exports);
// CONCATENATED MODULE: ./libEntry/install/radio/index.js


components_radio.install = function (Vue) {
  Vue.component(components_radio.name, components_radio);
};

/* harmony default export */ var install_radio = (components_radio);
// CONCATENATED MODULE: ./libEntry/install/select/index.js


components_select.install = function (Vue) {
  Vue.component(components_select.name, components_select);
};

/* harmony default export */ var install_select = (components_select);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/steps/index.vue?vue&type=template&id=0edcef16&
var stepsvue_type_template_id_0edcef16_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ss-steps",class:[ ("ss-steps__" + (this.direction)) ]},[_vm._t("default")],2)}
var stepsvue_type_template_id_0edcef16_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/steps/index.vue?vue&type=template&id=0edcef16&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/steps/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var stepsvue_type_script_lang_js_ = ({
  name: 'SsSteps',
  props: {
    current: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      default: 'process',
      validator: function validator(val) {
        return ['wait', 'process', 'finish', 'error'].indexOf(val) > -1;
      }
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator: function validator(val) {
        return ['horizontal', 'vertical'].indexOf(val) > -1;
      }
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  data: function data() {
    return {
      steps: []
    };
  },
  watch: {
    status: function status() {
      this.updateStepsStatus();
    },
    current: function current() {
      this.updateStepsStatus();
    },
    steps: function steps(_steps) {
      _steps.forEach(function (child, index) {
        child.index = index;
      });

      this.updateStepsStatus();
    }
  },
  methods: {
    updateStepsStatus: function updateStepsStatus() {
      var _this = this;

      var current = this.current;
      var status = this.status;
      this.steps.forEach(function (child, index) {
        var prevChild = _this.steps[index - 1];

        if (index === current) {
          prevChild && (prevChild.nextError = status === 'error');
        } else if (index < current) {
          prevChild && (prevChild.nextError = false);
        } else {
          prevChild && (prevChild.nextError = false);
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/steps/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_stepsvue_type_script_lang_js_ = (stepsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/steps/index.vue?vue&type=style&index=0&lang=scss&
var stepsvue_type_style_index_0_lang_scss_ = __webpack_require__(73);

// CONCATENATED MODULE: ./src/components/steps/index.vue






/* normalize component */

var steps_component = normalizeComponent(
  components_stepsvue_type_script_lang_js_,
  stepsvue_type_template_id_0edcef16_render,
  stepsvue_type_template_id_0edcef16_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_steps = (steps_component.exports);
// CONCATENATED MODULE: ./libEntry/install/steps/index.js


components_steps.install = function (Vue) {
  Vue.component(components_steps.name, components_steps);
};

/* harmony default export */ var install_steps = (components_steps);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/step/index.vue?vue&type=template&id=2e48d09c&
var stepvue_type_template_id_2e48d09c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ss-step",class:[ 
    ("ss-step__" + (this.currentStatus)), 
    _vm.nextError && 'ss-step-next-error'
  ]},[_c('div',{staticClass:"ss-step-tail"}),_c('div',{staticClass:"ss-step-icon"},[(_vm.currentStatus === 'finish')?_c('span',{staticClass:"ss-step-icon__icon"},[_vm._v("\n      √\n    ")]):(_vm.currentStatus === 'error')?_c('span',{staticClass:"ss-step-icon__icon"},[_vm._v("\n      ×\n    ")]):_c('span',{staticClass:"ss-step-icon__text"},[_vm._v(_vm._s(_vm.index + 1))])]),_c('div',{staticClass:"ss-step-content"},[_c('div',{staticClass:"ss-step-content-title"},[_vm._v(_vm._s(_vm.title))]),_c('div',{staticClass:"ss-step-content-desc"},[_vm._v(_vm._s(_vm.desc))])])])}
var stepvue_type_template_id_2e48d09c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/step/index.vue?vue&type=template&id=2e48d09c&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/step/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var stepvue_type_script_lang_js_ = ({
  name: 'SsStep',
  props: {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String
    },
    status: {
      type: String
    },
    icon: {
      type: String
    }
  },
  data: function data() {
    return {
      index: -1,
      nextError: false
    };
  },
  computed: {
    currentStatus: function currentStatus() {
      var stepIndex = this.$parent.steps.indexOf(this);
      var current = this.$parent.current;

      if (stepIndex === current) {
        return this.$parent.status;
      } else if (stepIndex < current) {
        return 'finish';
      } else {
        return 'wait';
      }
    }
  },
  beforeCreate: function beforeCreate() {
    this.$parent.steps.push(this);
  },
  beforeDestroy: function beforeDestroy() {
    var steps = this.$parent.steps;
    var index = steps.indexOf(this);

    if (index >= 0) {
      steps.splice(index, 1);
    }
  }
});
// CONCATENATED MODULE: ./src/components/step/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_stepvue_type_script_lang_js_ = (stepvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/step/index.vue?vue&type=style&index=0&lang=scss&
var stepvue_type_style_index_0_lang_scss_ = __webpack_require__(74);

// CONCATENATED MODULE: ./src/components/step/index.vue






/* normalize component */

var step_component = normalizeComponent(
  components_stepvue_type_script_lang_js_,
  stepvue_type_template_id_2e48d09c_render,
  stepvue_type_template_id_2e48d09c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_step = (step_component.exports);
// CONCATENATED MODULE: ./libEntry/install/step/index.js


components_step.install = function (Vue) {
  Vue.component(components_step.name, components_step);
};

/* harmony default export */ var install_step = (components_step);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/tabs/index.vue?vue&type=template&id=094f581b&
var tabsvue_type_template_id_094f581b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tabs",on:{"change":_vm.childrenChange}},[_c('div',{staticClass:"tabs-item__wrapper"},[_vm._l((_vm.itemList),function(item,index){return _c('li',{key:item.label,ref:"tabsItem",refInFor:true,staticClass:"tabs-item",class:{
          'current-tabs': _vm.value === item.name,
          'ss-tabs-disabled':item.disabled,
          'ss-tabs-card':_vm.type === 'card'
      },on:{"click":function($event){return _vm.tabChange(item, index)}}},[_vm._v("\n     "+_vm._s(item.label)+"\n    ")])}),_c('div',{staticClass:"tabs-idx-line__wrapper"},[_c('span',{ref:"line",staticClass:"tabs-idx-line",class:{ 'animate': _vm.isAnimate, 'tabs-idx-line__card': _vm.type === 'card'}})])],2),_vm._t("default")],2)}
var tabsvue_type_template_id_094f581b_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/tabs/index.vue?vue&type=template&id=094f581b&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/tabs/index.vue?vue&type=script&lang=js&
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var tabsvue_type_script_lang_js_ = ({
  name: 'SsTabs',
  created: function created() {
    this.$root.$on('changeTabs', this.childrenChange);
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.mergeChildInfos();

      setTimeout(function () {
        _this.domItemList = _toConsumableArray(_this.$refs.tabsItem);

        _this.tabBottomLineAnimate(_this.currentIdx <= -1 ? 0 : _this.currentIdx);

        setTimeout(function () {
          _this.isAnimate = true;
        }, 500);
      }, 0);
    });
  },
  props: {
    value: String,
    type: {
      type: String,
      default: 'border-card' // card border-card

    }
  },
  data: function data() {
    return {
      itemList: [],
      domItemList: [],
      currentIdx: 0,
      oldIndex: -1,
      isAnimate: false
    };
  },
  methods: {
    mergeChildInfos: function mergeChildInfos() {
      var flag = false;
      var childs = this.$children;
      var tmpList = [];

      for (var i = 0; i < childs.length; i += 1) {
        var item = childs[i];

        if (item.name && item.$attrs.label) {
          if (this.value === item.name) {
            this.oldIndex = this.currentIdx;
            this.currentIdx = i;
            flag = true;
          }

          tmpList.push({
            name: item.name,
            label: item.$attrs.label,
            disabled: item.disabled
          });
        }
      }

      this.itemList = tmpList;

      if (!flag) {
        this.$emit('input', childs[0].name);
      }
    },
    tabChange: function tabChange(item, index) {
      var _this2 = this;

      if (item.disabled) {
        return;
      }

      if (this.currentIdx !== index) {
        this.$emit('input', item.name);

        if (this.$listeners['tab-click']) {
          this.$emit('tab-click', this.$children[index]);
        }

        this.$nextTick(function () {
          _this2.tabBottomLineAnimate(index);
        });
        this.oldIndex = this.currentIdx;
        this.currentIdx = index;
      }
    },
    tabBottomLineAnimate: function tabBottomLineAnimate(index) {
      var currentEle = this.domItemList[index]; //　组件被销毁后就没有DOM了，结束执行，不然会报错

      if (!currentEle) {
        return;
      }

      var paddingLeft = getComputedStyle(currentEle, false).paddingLeft;
      var paddingRight = getComputedStyle(currentEle, false).paddingRight;
      var eleWidth = getComputedStyle(currentEle, false).width;
      var eleWidthBorder = "".concat(Number(eleWidth.substring(0, eleWidth.length - 2)) - 2, "px");
      var contentWidth = "".concat(Number(eleWidth.substring(0, eleWidth.length - 2)) - Number(paddingRight.substring(0, paddingRight.length - 2)) - Number(paddingLeft.substring(0, paddingLeft.length - 2)), "px");
      var offsetLeft = currentEle.offsetLeft + Number(paddingLeft.substring(0, paddingLeft.length - 2));

      if (this.type === 'card') {
        this.$refs.line.style.cssText = "\n          transform: translateX(".concat(currentEle.offsetLeft + 1, "px);\n          width: ").concat(eleWidthBorder, ";\n        ");
      } else {
        this.$refs.line.style.cssText = "\n          transform: translateX(".concat(offsetLeft, "px);\n          width: ").concat(contentWidth, ";\n        ");
      }
    },
    childrenChange: function childrenChange() {
      var _this3 = this;

      this.$nextTick(function () {
        _this3.mergeChildInfos();

        setTimeout(function () {
          _this3.domItemList = _toConsumableArray(_this3.$refs.tabsItem);

          _this3.tabBottomLineAnimate(_this3.currentIdx <= -1 ? 0 : _this3.currentIdx);
        }, 0);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/tabs/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_tabsvue_type_script_lang_js_ = (tabsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/tabs/index.vue?vue&type=style&index=0&lang=scss&
var tabsvue_type_style_index_0_lang_scss_ = __webpack_require__(75);

// CONCATENATED MODULE: ./src/components/tabs/index.vue






/* normalize component */

var tabs_component = normalizeComponent(
  components_tabsvue_type_script_lang_js_,
  tabsvue_type_template_id_094f581b_render,
  tabsvue_type_template_id_094f581b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tabs = (tabs_component.exports);
// CONCATENATED MODULE: ./libEntry/install/tabs/index.js


tabs.install = function (Vue) {
  Vue.component(tabs.name, tabs);
};

/* harmony default export */ var install_tabs = (tabs);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/tabs/tabPane.vue?vue&type=template&id=62a39206&scoped=true&
var tabPanevue_type_template_id_62a39206_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.active),expression:"active"}],staticClass:"tabs-pane"},[_vm._t("default")],2)}
var tabPanevue_type_template_id_62a39206_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/tabs/tabPane.vue?vue&type=template&id=62a39206&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/tabs/tabPane.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var tabPanevue_type_script_lang_js_ = ({
  name: 'SsTabPane',
  props: {
    name: String,
    disabled: Boolean
  },
  data: function data() {
    return {
      idx: -1
    };
  },
  created: function created() {
    this.$nextTick(this.getEleIdx);
  },
  computed: {
    active: function active() {
      return this.name === this.$parent.value;
    }
  },
  destroyed: function destroyed() {
    this.$root.$emit('changeTabs');
  },
  methods: {
    getEleIdx: function getEleIdx() {
      for (var i = 0; i < this.$parent.itemList.length; i += 1) {
        if (this.$parent.itemList[i].name === this.name) {
          this.idx = i;
          break;
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/tabs/tabPane.vue?vue&type=script&lang=js&
 /* harmony default export */ var tabs_tabPanevue_type_script_lang_js_ = (tabPanevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/tabs/tabPane.vue?vue&type=style&index=0&id=62a39206&lang=scss&scoped=true&
var tabPanevue_type_style_index_0_id_62a39206_lang_scss_scoped_true_ = __webpack_require__(76);

// CONCATENATED MODULE: ./src/components/tabs/tabPane.vue






/* normalize component */

var tabPane_component = normalizeComponent(
  tabs_tabPanevue_type_script_lang_js_,
  tabPanevue_type_template_id_62a39206_scoped_true_render,
  tabPanevue_type_template_id_62a39206_scoped_true_staticRenderFns,
  false,
  null,
  "62a39206",
  null
  
)

/* harmony default export */ var tabPane = (tabPane_component.exports);
// CONCATENATED MODULE: ./libEntry/install/tab-pane/index.js


tabPane.install = function (Vue) {
  Vue.component(tabPane.name, tabPane);
};

/* harmony default export */ var tab_pane = (tabPane);
// CONCATENATED MODULE: ./libEntry/install/tag/index.js


tag.install = function (Vue) {
  Vue.component(tag.name, tag);
};

/* harmony default export */ var install_tag = (tag);
<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/resourceSelect/index.vue?vue&type=template&id=f93a6a2e&scoped=true&
var resourceSelectvue_type_template_id_f93a6a2e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"dialog"}},[_c('section',{staticClass:"dialog-bg"},[_c('div',{staticClass:"select-popup"},[_c('loading',{directives:[{name:"show",rawName:"v-show",value:(_vm.dialogLoading),expression:"dialogLoading"}]}),_c('div',{staticClass:"dialog-header"},[_vm._v("\n        选择"+_vm._s(_vm.topicName)+"\n        "),_c('i',{staticClass:"close-btn",on:{"click":function($event){return _vm.$emit('cancel')}}},[_c('img',{attrs:{"src":"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjEgKDQ3MjUwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7lhYPntKAv5Z+656GA5Zu+5qCHL2ljb25fY2xvc2U8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuWFg+e0oC/ln7rnoYDlm77moIcvaWNvbl9jbG9zZSI+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMiIgeD0iMiIgeT0iMiIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj48L3JlY3Q+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMiwxMSBMMTIsMy41IEMxMiwzLjIyMzg1NzYzIDEyLjIyMzg1NzYsMyAxMi41LDMgQzEyLjc3NjE0MjQsMyAxMywzLjIyMzg1NzYzIDEzLDMuNSBMMTMsMTEgTDIwLjUsMTEgQzIwLjc3NjE0MjQsMTEgMjEsMTEuMjIzODU3NiAyMSwxMS41IEMyMSwxMS43NzYxNDI0IDIwLjc3NjE0MjQsMTIgMjAuNSwxMiBMMTMsMTIgTDEzLDE5LjUgQzEzLDE5Ljc3NjE0MjQgMTIuNzc2MTQyNCwyMCAxMi41LDIwIEMxMi4yMjM4NTc2LDIwIDEyLDE5Ljc3NjE0MjQgMTIsMTkuNSBMMTIsMTIgTDQuNSwxMiBDNC4yMjM4NTc2MywxMiA0LDExLjc3NjE0MjQgNCwxMS41IEM0LDExLjIyMzg1NzYgNC4yMjM4NTc2MywxMSA0LjUsMTEgTDEyLDExIFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iI0IyQjJCMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIuNTAwMDAwLCAxMS41MDAwMDApIHJvdGF0ZSg0NS4wMDAwMDApIHRyYW5zbGF0ZSgtMTIuNTAwMDAwLCAtMTEuNTAwMDAwKSAiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==","alt":""}})])]),_c('div',{staticClass:"dialog-content"},[_c('div',{ref:"tabContent",staticClass:"tabs-list"},[_c('div',{ref:"tabColumn",staticClass:"tab-content",style:({'left':_vm.moveLeft + 'px'})},[_vm._l((_vm.dynamicTabsList),function(item){return [_c('div',{key:item.id,staticClass:"tab-item",class:{'active-item': item.id === _vm.activeTabId},on:{"click":function($event){return _vm.switchTab(item)}}},[_vm._v("\n                "+_vm._s(item.label)+"\n                "),_c('span',{staticClass:"bottom-mark"})])]})],2),(_vm.showLeft)?_c('div',{staticClass:"pre-choose handle-choose",on:{"click":_vm.preChoose}},[_c('i',{staticClass:"font_family sense-icon-pagination-left"})]):_vm._e(),(_vm.showRight)?_c('div',{staticClass:"next-choose handle-choose",on:{"click":_vm.nextChoose}},[_c('i',{staticClass:"font_family sense-icon-pagination-right"})]):_vm._e()]),_c('div',{staticClass:"mian-content"},[_c('loading',{directives:[{name:"show",rawName:"v-show",value:(_vm.mainLoading),expression:"mainLoading"}]}),_c('div',{staticClass:"operate-line"},[_c('div',[_c('button',{staticClass:"skip-btn",on:{"click":_vm.skip}},[_vm._v(_vm._s(_vm.skipBtnText))]),_c('a',{staticClass:"refresh-btn",attrs:{"href":"javascript:void(0)"},on:{"click":_vm.refreshPopup}},[_vm._v("刷新")])]),_c('div',[(_vm.showSelect && _vm.selectOptions.length > 0)?_c('ss-select',{staticClass:"type-select",attrs:{"placeholder":"筛选类型"},on:{"change":_vm.onfilterTypeChange},model:{value:(_vm.filterType),callback:function ($$v) {_vm.filterType=$$v},expression:"filterType"}},_vm._l((_vm.selectOptions),function(item){return _c('ss-option',{key:item.value,attrs:{"value":item.value,"label":item.label}})}),1):_vm._e(),(_vm.showSearch)?_c('div',{staticClass:"input-wrapper"},[_c('input',{directives:[{name:"model",rawName:"v-model.trim",value:(_vm.filterText),expression:"filterText",modifiers:{"trim":true}}],staticClass:"input-entity",attrs:{"type":"text","placeholder":"输入名称"},domProps:{"value":(_vm.filterText)},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.onInputEnter($event)},"input":function($event){if($event.target.composing){ return; }_vm.filterText=$event.target.value.trim()},"blur":function($event){return _vm.$forceUpdate()}}}),_c('i',{staticClass:"search-icon"},[_c('img',{attrs:{"src":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAXZJREFUKBWVkjFLA0EQhb29FDGi5AekCWqVQoxoIxYqKEnuDi1ExCqdP0BLazuxEBsLUSstTQiHRSIWiRKSSsTSwjKFiBxiuMRvghuOaAQPhjc7773ZHeaMgcBXKpWinuct+b6fNAzjg6jH43E3kUh8BmSd1NCFXC632m63DxFXiCp5mJgljymlsplM5l5rBTvGfD7vtFqtA87rjuNUg4Jv7hjzomVZD5pThUJhhM5Hpmlu9JpEhPgK2EZzqk2CinkWwFrvU4IiGp5zjjLOuK4rZpikW00X+iEamXFa84rEIyK68AcOw71qXm6sE3O68BuWy+VBNFOhUOhR8yqdThc5hHn/pi72YqPR2KFWTKVSz5qTG306ZZlhH/OWJgQ5R1jHLhqJyyDX/QFc1x1rNpsnkKPEHTFEswkM18QNe94DV2zbrkiDrlEO8rHXGKIZ0jeW/sQoL1Ln5mXqZ+x7jdXd/jCKqN+HeZ5XXNDQ/pdRGjJ3EuP7F7DXlWT5Lg6cAAAAAElFTkSuQmCC","alt":""}})])]):_vm._e()],1)]),_c('div',{staticClass:"table-header"},[_c('span',[_vm._v(_vm._s(_vm.leftHeader))]),_c('span',[_vm._v(_vm._s(_vm.rightHeader))])]),_c('div',{staticClass:"table-body"},[_c('res-list',{attrs:{"active-tab-id":_vm.activeTabId,"select-type":_vm.selectType,"project-id":_vm.projectId,"sort-order":_vm.sortOrder,"sort-by":_vm.sortBy,"extra-params":_vm.extraParams,"res-list":_vm.resourceList},on:{"select":_vm.onResListSelect}}),(_vm.totalCount > _vm.pageSize)?_c('div',{staticClass:"table-pagination"},[_c('ss-pagination',{attrs:{"total":_vm.totalCount,"current":_vm.pageIndex,"pageSize":_vm.pageSize,"showQuickJumper":true},on:{"change":_vm.onPaginationChange}})],1):_vm._e()],1)],1)]),_c('div',{staticClass:"dialog-footer"},[_c('button',{staticClass:"cancel-btn",on:{"click":function($event){return _vm.$emit('cancel')}}},[_vm._v("取消")]),_c('button',{staticClass:"confirm-btn",class:{'unavailable': !_vm.hasSelect},on:{"click":_vm.onConfirm}},[_vm._v("确定")])])],1)])])}
var resourceSelectvue_type_template_id_f93a6a2e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/resourceSelect/index.vue?vue&type=template&id=f93a6a2e&scoped=true&
=======
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/resourceSelect/index.vue?vue&type=template&id=039e4fea&scoped=true&
var resourceSelectvue_type_template_id_039e4fea_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"dialog"}},[_c('section',{staticClass:"dialog-bg"},[_c('div',{staticClass:"select-popup"},[_c('loading',{directives:[{name:"show",rawName:"v-show",value:(_vm.dialogLoading),expression:"dialogLoading"}]}),_c('div',{staticClass:"dialog-header"},[_vm._v("\n        选择"+_vm._s(_vm.topicName)+"\n        "),_c('i',{staticClass:"close-btn",on:{"click":function($event){return _vm.$emit('cancel')}}},[_c('img',{attrs:{"src":"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjEgKDQ3MjUwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7lhYPntKAv5Z+656GA5Zu+5qCHL2ljb25fY2xvc2U8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuWFg+e0oC/ln7rnoYDlm77moIcvaWNvbl9jbG9zZSI+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMiIgeD0iMiIgeT0iMiIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj48L3JlY3Q+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMiwxMSBMMTIsMy41IEMxMiwzLjIyMzg1NzYzIDEyLjIyMzg1NzYsMyAxMi41LDMgQzEyLjc3NjE0MjQsMyAxMywzLjIyMzg1NzYzIDEzLDMuNSBMMTMsMTEgTDIwLjUsMTEgQzIwLjc3NjE0MjQsMTEgMjEsMTEuMjIzODU3NiAyMSwxMS41IEMyMSwxMS43NzYxNDI0IDIwLjc3NjE0MjQsMTIgMjAuNSwxMiBMMTMsMTIgTDEzLDE5LjUgQzEzLDE5Ljc3NjE0MjQgMTIuNzc2MTQyNCwyMCAxMi41LDIwIEMxMi4yMjM4NTc2LDIwIDEyLDE5Ljc3NjE0MjQgMTIsMTkuNSBMMTIsMTIgTDQuNSwxMiBDNC4yMjM4NTc2MywxMiA0LDExLjc3NjE0MjQgNCwxMS41IEM0LDExLjIyMzg1NzYgNC4yMjM4NTc2MywxMSA0LjUsMTEgTDEyLDExIFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iI0IyQjJCMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIuNTAwMDAwLCAxMS41MDAwMDApIHJvdGF0ZSg0NS4wMDAwMDApIHRyYW5zbGF0ZSgtMTIuNTAwMDAwLCAtMTEuNTAwMDAwKSAiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==","alt":""}})])]),_c('div',{staticClass:"dialog-content"},[_c('div',{ref:"tabContent",staticClass:"tabs-list"},[_c('div',{ref:"tabColumn",staticClass:"tab-content",style:({'left':_vm.moveLeft + 'px'})},[_vm._l((_vm.dynamicTabsList),function(item){return [_c('div',{key:item.id,staticClass:"tab-item",class:{'active-item': item.id === _vm.activeTabId},on:{"click":function($event){return _vm.switchTab(item)}}},[_vm._v("\n                "+_vm._s(item.label)+"\n                "),_c('span',{staticClass:"bottom-mark"})])]})],2),(_vm.showLeft)?_c('div',{staticClass:"pre-choose handle-choose",on:{"click":_vm.preChoose}},[_c('i',{staticClass:"font_family sense-icon-pagination-left"})]):_vm._e(),(_vm.showRight)?_c('div',{staticClass:"next-choose handle-choose",on:{"click":_vm.nextChoose}},[_c('i',{staticClass:"font_family sense-icon-pagination-right"})]):_vm._e()]),_c('div',{staticClass:"mian-content"},[_c('loading',{directives:[{name:"show",rawName:"v-show",value:(_vm.mainLoading),expression:"mainLoading"}]}),_c('div',{staticClass:"operate-line"},[_c('div',[_c('button',{staticClass:"skip-btn",on:{"click":_vm.skip}},[_vm._v(_vm._s(_vm.skipBtnText))]),_c('a',{staticClass:"refresh-btn",attrs:{"href":"javascript:void(0)"},on:{"click":_vm.refreshPopup}},[_vm._v("刷新")])]),_c('div',[(_vm.showSelect && _vm.selectOptions.length > 0)?_c('ss-select',{staticClass:"type-select",attrs:{"placeholder":"筛选类型"},on:{"change":_vm.onfilterTypeChange},model:{value:(_vm.filterType),callback:function ($$v) {_vm.filterType=$$v},expression:"filterType"}},_vm._l((_vm.selectOptions),function(item){return _c('ss-option',{key:item.value,attrs:{"value":item.value,"label":item.label}})}),1):_vm._e(),(_vm.showSearch)?_c('div',{staticClass:"input-wrapper"},[_c('input',{directives:[{name:"model",rawName:"v-model.trim",value:(_vm.filterText),expression:"filterText",modifiers:{"trim":true}}],staticClass:"input-entity",attrs:{"type":"text","placeholder":"输入名称"},domProps:{"value":(_vm.filterText)},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.onInputEnter($event)},"input":function($event){if($event.target.composing){ return; }_vm.filterText=$event.target.value.trim()},"blur":function($event){return _vm.$forceUpdate()}}}),_c('i',{staticClass:"search-icon"},[_c('img',{attrs:{"src":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAXZJREFUKBWVkjFLA0EQhb29FDGi5AekCWqVQoxoIxYqKEnuDi1ExCqdP0BLazuxEBsLUSstTQiHRSIWiRKSSsTSwjKFiBxiuMRvghuOaAQPhjc7773ZHeaMgcBXKpWinuct+b6fNAzjg6jH43E3kUh8BmSd1NCFXC632m63DxFXiCp5mJgljymlsplM5l5rBTvGfD7vtFqtA87rjuNUg4Jv7hjzomVZD5pThUJhhM5Hpmlu9JpEhPgK2EZzqk2CinkWwFrvU4IiGp5zjjLOuK4rZpikW00X+iEamXFa84rEIyK68AcOw71qXm6sE3O68BuWy+VBNFOhUOhR8yqdThc5hHn/pi72YqPR2KFWTKVSz5qTG306ZZlhH/OWJgQ5R1jHLhqJyyDX/QFc1x1rNpsnkKPEHTFEswkM18QNe94DV2zbrkiDrlEO8rHXGKIZ0jeW/sQoL1Ln5mXqZ+x7jdXd/jCKqN+HeZ5XXNDQ/pdRGjJ3EuP7F7DXlWT5Lg6cAAAAAElFTkSuQmCC","alt":""}})])]):_vm._e()],1)]),_c('div',{staticClass:"table-header"},[_c('span',[_vm._v(_vm._s(_vm.leftHeader))]),_c('span',[_vm._v(_vm._s(_vm.rightHeader))])]),_c('div',{staticClass:"table-body"},[_c('res-list',{attrs:{"active-tab-id":_vm.activeTabId,"select-type":_vm.selectType,"project-id":_vm.projectId,"sort-order":_vm.sortOrder,"sort-by":_vm.sortBy,"extra-params":_vm.extraParams,"res-list":_vm.resourceList},on:{"select":_vm.onResListSelect}}),(_vm.totalCount > _vm.pageSize)?_c('div',{staticClass:"table-pagination"},[_c('ss-pagination',{attrs:{"total":_vm.totalCount,"current":_vm.pageIndex,"pageSize":_vm.pageSize,"showQuickJumper":true},on:{"change":_vm.onPaginationChange}})],1):_vm._e()],1)],1)]),_c('div',{staticClass:"dialog-footer"},[_c('button',{staticClass:"cancel-btn",on:{"click":function($event){return _vm.$emit('cancel')}}},[_vm._v("取消")]),_c('button',{staticClass:"confirm-btn",class:{'unavailable': !_vm.hasSelect},on:{"click":_vm.onConfirm}},[_vm._v("确定")])])],1)])])}
var resourceSelectvue_type_template_id_039e4fea_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/resourceSelect/index.vue?vue&type=template&id=039e4fea&scoped=true&
>>>>>>> origin/master

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(0);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/loading/index.vue?vue&type=template&id=d917cfae&
var loadingvue_type_template_id_d917cfae_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"global-widget-loading",style:({position:_vm.is_fixed,background: _vm.background})},[_c('div',{staticClass:"loading-content",style:({top: _vm.top})},[_c('svg',{staticClass:"circular",attrs:{"viewBox":"25 25 50 50"}},[_c('circle',{staticClass:"path",style:({stroke: _vm.invite_color}),attrs:{"cx":"50","cy":"50","r":"20","fill":"none"}})]),_c('p',{staticClass:"loadingText",style:({ color: _vm.invite_color})},[_vm._v(_vm._s(_vm.tip_txt))])])])}
var loadingvue_type_template_id_d917cfae_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/loading/index.vue?vue&type=template&id=d917cfae&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/loading/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var loadingvue_type_script_lang_js_ = ({
  name: 'loading',
  props: {
    tip_txt: {
      default: '加载中'
    },
    is_fixed: {
      default: 'absolute'
    },
    top: {
      default: '50%'
    },
    background: {
      default: 'hsla(0,0%,100%,.9)'
    },
    // 好友邀请特殊色
    invite_color: {
      default: "#20a0ff"
    }
  }
});
// CONCATENATED MODULE: ./src/components/loading/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_loadingvue_type_script_lang_js_ = (loadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/loading/index.vue?vue&type=style&index=0&lang=scss&
var loadingvue_type_style_index_0_lang_scss_ = __webpack_require__(77);

// CONCATENATED MODULE: ./src/components/loading/index.vue






/* normalize component */

var loading_component = normalizeComponent(
  components_loadingvue_type_script_lang_js_,
  loadingvue_type_template_id_d917cfae_render,
  loadingvue_type_template_id_d917cfae_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var loading = (loading_component.exports);
<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/resourceSelect/resList.vue?vue&type=template&id=1399a090&scoped=true&
var resListvue_type_template_id_1399a090_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"res-list"},[_c('ul',[_vm._l((_vm.resList),function(item){return [_c('li',{key:item.id,staticClass:"body-item"},[((_vm.projectId !== 2 && _vm.activeTabId !== 11) || (_vm.projectId === 2 && _vm.activeTabId !== 11 && _vm.activeTabId !== 16))?[_c('select-line',{attrs:{"is-available":item.is_available,"select-type":_vm.selectType},on:{"select":function($event){return _vm.onSelectRadio1(item.id)}},model:{value:(item.is_selected),callback:function ($$v) {_vm.$set(item, "is_selected", $$v)},expression:"item.is_selected"}},[([1, 2, 3, 4, 5, 6, 8, 20, 22, 25, 28].indexOf(_vm.activeTabId)>-1)?_c('div',{staticClass:"content-1"},[_c('img',{staticClass:"cover-picture",attrs:{"src":item.picture,"alt":"封面"}}),_c('div',{staticClass:"res-name __ellipsis",attrs:{"title":item.name}},[_vm._v(_vm._s(item.name))]),_c('span',{staticClass:"state-text"},[_vm._v(_vm._s(_vm.upStateText(item)))])]):(_vm.activeTabId === 16)?_c('div',{staticClass:"content-2"},[_c('img',{staticClass:"cover-picture",attrs:{"src":item.picture,"alt":"封面"}}),_c('div',{staticClass:"res-info"},[_c('p',{staticClass:"res-name __ellipsis",attrs:{"title":item.name}},[_vm._v(_vm._s(item.name))]),_c('p',{staticClass:"create-time"},[_vm._v("创建时间："+_vm._s(item.create_time))])]),_c('span',{staticClass:"type-text"},[_vm._v(_vm._s({2:'日历打卡',3:'作业打卡',4:'闯关打卡'}[item.type]))])]):(_vm.activeTabId === 7)?_c('div',{staticClass:"content-3"},[_c('img',{staticClass:"cover-picture",attrs:{"src":item.picture,"alt":"封面"}}),_c('div',{staticClass:"res-info"},[_c('p',{staticClass:"res-name __ellipsis",attrs:{"title":item.name}},[_vm._v(_vm._s(item.name))]),_c('p',{staticClass:"create-time"},[_vm._v("创建时间："+_vm._s(item.create_time))])])]):(_vm.activeTabId === 12)?_c('div',{staticClass:"content-5"},[_c('img',{staticClass:"cover-picture",attrs:{"src":item.picture,"alt":"封面"}}),_c('p',{staticClass:"res-name __ellipsis",attrs:{"title":item.name}},[_vm._v(_vm._s(item.name))]),(!item.is_available)?_c('span',{staticClass:"reason-text"},[_vm._v(_vm._s(item.reason))]):_vm._e()]):(_vm.activeTabId === 13)?_c('div',{staticClass:"content-6"},[_c('p',{staticClass:"res-name __ellipsis",attrs:{"title":item.name}},[_vm._v(_vm._s(item.name))]),(!item.is_available)?_c('span',{staticClass:"reason-text"},[_vm._v(_vm._s(item.reason))]):_vm._e()]):(_vm.activeTabId === 14)?_c('div',{staticClass:"content-2"},[_c('img',{staticClass:"cover-picture",attrs:{"src":item.picture,"alt":"封面"}}),_c('div',{staticClass:"res-info"},[_c('p',{staticClass:"res-name __ellipsis",attrs:{"title":item.name}},[_vm._v(_vm._s(item.name))]),_c('p',{staticClass:"create-time"},[_vm._v("起止时间："+_vm._s(item.start_at)+"至"+_vm._s(item.end_at))])])]):(_vm.activeTabId === 9)?_c('div',{staticClass:"content-8"},[_c('img',{staticClass:"cover-picture",attrs:{"src":item.picture,"alt":"封面"}}),_c('div',{staticClass:"res-info"},[_c('p',{staticClass:"res-name __ellipsis",attrs:{"title":item.name}},[_vm._v(_vm._s(item.name))]),_c('p',{staticClass:"create-time"},[_vm._v("活动时间："+_vm._s(item.start_at)+"至"+_vm._s(item.end_at))])])]):(_vm.activeTabId === 10)?_c('div',{staticClass:"content-9"},[_c('img',{staticClass:"cover-picture",attrs:{"src":item.picture,"alt":"头像"}}),_c('p',{staticClass:"res-name __ellipsis",attrs:{"title":item.name}},[_vm._v(_vm._s(item.name))])]):(_vm.activeTabId === 19 || _vm.activeTabId === 18)?_c('div',{staticClass:"content-10"},[_c('p',{staticClass:"res-name __ellipsis",attrs:{"title":item.name}},[_vm._v(_vm._s(item.name))]),_c('span',{staticClass:"type-text"},[_vm._v(_vm._s(item.create_time))])]):(_vm.activeTabId === 17)?_c('div',{staticClass:"content-10"},[_c('p',{staticClass:"res-name __ellipsis",attrs:{"title":item.name}},[_vm._v(_vm._s(item.name))]),_c('span',{staticClass:"type-text"},[_vm._v(_vm._s(item.create_time))])]):([21, 23, 24].indexOf(_vm.activeTabId)>-1)?_c('div',{staticClass:"content-10"},[_c('p',{staticClass:"res-name __ellipsis",attrs:{"title":item.name}},[_vm._v(_vm._s(item.name))]),(_vm.activeTabId == 21 && item.discount_way && item.valid_after !== -1)?_c('span',{staticClass:"type-text"},[_vm._v("\n                  "+_vm._s(("领券" + (item.valid_after == 0 ? '当' : '次') + "日起" + (item.valid_day) + "天内可用"))+"\n                ")]):_c('span',{staticClass:"type-text"},[_vm._v(_vm._s(item.start_at)+"至"+_vm._s(item.end_at))])]):_vm._e()])]:(_vm.activeTabId === 11)?[_c('div',{staticClass:"content-4 __ellipsis",on:{"click":function($event){return _vm.spreadExerciseList(item.id)}}},[_vm._v("\n              "+_vm._s(item.name)+"\n              "),_c('i',{staticClass:"arrow-icon",class:{'rotate-arrow': _vm.spreadExerciseId === item.id}})]),(_vm.spreadExerciseId === item.id)?_c('ul',{staticClass:"exercise-list"},[(_vm.exerciseList.length === 0)?_c('p',{staticClass:"loading-text"},[_vm._v(_vm._s(_vm.loadingText))]):_vm._l((_vm.exerciseList),function(value){return [_c('li',{key:value.id,staticClass:"exercise-item"},[_c('select-line',{attrs:{"is-available":item.is_available,"select-type":_vm.selectType},on:{"select":function($event){return _vm.onSelectRadio2(value.id)}},model:{value:(value.is_selected),callback:function ($$v) {_vm.$set(value, "is_selected", $$v)},expression:"value.is_selected"}},[_c('p',{staticClass:"exercise-name"},[_vm._v(_vm._s(value.name))])])],1)]}),(_vm.totalCount > _vm.pageSize)?_c('div',{staticClass:"exercise-pagination"},[_c('ss-pagination',{attrs:{"total":_vm.totalCount,"current":_vm.pageIndex,"pageSize":_vm.pageSize,"showQuickJumper":true},on:{"change":_vm.onInnerPaginationChange1}})],1):_vm._e()],2):_vm._e()]:(_vm.activeTabId === 16)?[_c('div',{staticClass:"content-22 __ellipsis",class:{'disabled-clock': !item.is_available},on:{"click":function($event){return _vm.spreadClockList(item)}}},[_c('img',{staticClass:"cover-picture",attrs:{"src":item.picture,"alt":"封面"}}),_vm._v("\n              "+_vm._s(item.name)+"\n              "),(item.is_available)?_c('span',{staticClass:"type-text"},[_vm._v(_vm._s({2:'日历打卡',3:'作业打卡',4:'闯关打卡'}[item.type]))]):_c('span',{staticClass:"reason-text"},[_vm._v(_vm._s(item.reason))]),(item.is_available)?_c('i',{staticClass:"arrow-icon",class:{'rotate-arrow': _vm.spreadClockId === item.id}}):_vm._e()]),(_vm.spreadClockId === item.id)?_c('ul',{staticClass:"exercise-list"},[(_vm.clockList.length === 0)?_c('p',{staticClass:"loading-text"},[_vm._v(_vm._s(_vm.loadingText))]):_vm._l((_vm.clockList),function(value){return [_c('li',{key:value.id,staticClass:"exercise-item"},[_c('select-line',{attrs:{"is-available":value.is_available,"select-type":_vm.selectType},on:{"select":function($event){return _vm.onSelectRadio3(value.id)}},model:{value:(value.is_selected),callback:function ($$v) {_vm.$set(value, "is_selected", $$v)},expression:"value.is_selected"}},[_c('p',{staticClass:"exercise-name __ellipsis"},[_vm._v(_vm._s(value.name))]),(value.is_available&&value.type === 2)?_c('span',{staticClass:"theme-text"},[_vm._v(_vm._s(value.theme_date))]):_vm._e(),(value.is_available&&value.type === 4)?_c('span',{staticClass:"theme-text"},[_vm._v("第"+_vm._s(value.weight)+"课时")]):_vm._e(),(!value.is_available)?_c('span',{staticClass:"theme-reason-text"},[_vm._v(_vm._s(value.reason))]):_vm._e()])],1)]}),(_vm.totalCount > _vm.pageSize)?_c('div',{staticClass:"exercise-pagination"},[_c('ss-pagination',{attrs:{"total":_vm.totalCount,"current":_vm.pageIndex,"pageSize":_vm.pageSize,"showQuickJumper":true},on:{"change":_vm.onInnerPaginationChange2}})],1):_vm._e()],2):_vm._e()]:_vm._e()],2)]})],2),(_vm.resList.length === 0)?_c('div',{staticClass:"empty-list"},[_vm._m(0),_c('p',{staticClass:"text"},[_vm._v("暂无数据")])]):_vm._e()])}
var resListvue_type_template_id_1399a090_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',{staticClass:"icon"},[_c('img',{attrs:{"src":__webpack_require__(78),"alt":"empty"}})])}]
=======
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/resourceSelect/resList.vue?vue&type=template&id=73ff74ba&scoped=true&
var resListvue_type_template_id_73ff74ba_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"res-list"},[_c('ul',[_vm._l((_vm.resList),function(item){return [_c('li',{key:item.id,staticClass:"body-item"},[((_vm.projectId !== 2 && _vm.activeTabId !== 11) || (_vm.projectId === 2 && _vm.activeTabId !== 11 && _vm.activeTabId !== 16))?[_c('select-line',{attrs:{"is-available":item.is_available,"select-type":_vm.selectType},on:{"select":function($event){return _vm.onSelectRadio1(item.id)}},model:{value:(item.is_selected),callback:function ($$v) {_vm.$set(item, "is_selected", $$v)},expression:"item.is_selected"}},[([1, 2, 3, 4, 5, 6, 8, 20, 22, 25, 28, 45].indexOf(_vm.activeTabId)>-1)?_c('div',{staticClass:"content-1"},[_c('img',{staticClass:"cover-picture",attrs:{"src":item.picture,"alt":"封面"}}),_c('div',{staticClass:"res-name __ellipsis",attrs:{"title":item.name}},[_vm._v(_vm._s(item.name))]),_c('span',{staticClass:"state-text"},[_vm._v(_vm._s(_vm.upStateText(item)))])]):(_vm.activeTabId === 16)?_c('div',{staticClass:"content-2"},[_c('img',{staticClass:"cover-picture",attrs:{"src":item.picture,"alt":"封面"}}),_c('div',{staticClass:"res-info"},[_c('p',{staticClass:"res-name __ellipsis",attrs:{"title":item.name}},[_vm._v(_vm._s(item.name))]),_c('p',{staticClass:"create-time"},[_vm._v("创建时间："+_vm._s(item.create_time))])]),_c('span',{staticClass:"type-text"},[_vm._v(_vm._s({2:'日历打卡',3:'作业打卡',4:'闯关打卡'}[item.type]))])]):(_vm.activeTabId === 7)?_c('div',{staticClass:"content-3"},[_c('img',{staticClass:"cover-picture",attrs:{"src":item.picture,"alt":"封面"}}),_c('div',{staticClass:"res-info"},[_c('p',{staticClass:"res-name __ellipsis",attrs:{"title":item.name}},[_vm._v(_vm._s(item.name))]),_c('p',{staticClass:"create-time"},[_vm._v("创建时间："+_vm._s(item.create_time))])])]):(_vm.activeTabId === 12)?_c('div',{staticClass:"content-5"},[_c('img',{staticClass:"cover-picture",attrs:{"src":item.picture,"alt":"封面"}}),_c('p',{staticClass:"res-name __ellipsis",attrs:{"title":item.name}},[_vm._v(_vm._s(item.name))]),(!item.is_available)?_c('span',{staticClass:"reason-text"},[_vm._v(_vm._s(item.reason))]):_vm._e()]):(_vm.activeTabId === 13)?_c('div',{staticClass:"content-6"},[_c('p',{staticClass:"res-name __ellipsis",attrs:{"title":item.name}},[_vm._v(_vm._s(item.name))]),(!item.is_available)?_c('span',{staticClass:"reason-text"},[_vm._v(_vm._s(item.reason))]):_vm._e()]):(_vm.activeTabId === 14)?_c('div',{staticClass:"content-2"},[_c('img',{staticClass:"cover-picture",attrs:{"src":item.picture,"alt":"封面"}}),_c('div',{staticClass:"res-info"},[_c('p',{staticClass:"res-name __ellipsis",attrs:{"title":item.name}},[_vm._v(_vm._s(item.name))]),_c('p',{staticClass:"create-time"},[_vm._v("起止时间："+_vm._s(item.start_at)+"至"+_vm._s(item.end_at))])])]):(_vm.activeTabId === 9)?_c('div',{staticClass:"content-8"},[_c('img',{staticClass:"cover-picture",attrs:{"src":item.picture,"alt":"封面"}}),_c('div',{staticClass:"res-info"},[_c('p',{staticClass:"res-name __ellipsis",attrs:{"title":item.name}},[_vm._v(_vm._s(item.name))]),_c('p',{staticClass:"create-time"},[_vm._v("活动时间："+_vm._s(item.start_at)+"至"+_vm._s(item.end_at))])])]):(_vm.activeTabId === 10)?_c('div',{staticClass:"content-9"},[_c('img',{staticClass:"cover-picture",attrs:{"src":item.picture,"alt":"头像"}}),_c('p',{staticClass:"res-name __ellipsis",attrs:{"title":item.name}},[_vm._v(_vm._s(item.name))])]):(_vm.activeTabId === 19 || _vm.activeTabId === 18)?_c('div',{staticClass:"content-10"},[_c('p',{staticClass:"res-name __ellipsis",attrs:{"title":item.name}},[_vm._v(_vm._s(item.name))]),_c('span',{staticClass:"type-text"},[_vm._v(_vm._s(item.create_time))])]):(_vm.activeTabId === 17)?_c('div',{staticClass:"content-10"},[_c('p',{staticClass:"res-name __ellipsis",attrs:{"title":item.name}},[_vm._v(_vm._s(item.name))]),_c('span',{staticClass:"type-text"},[_vm._v(_vm._s(item.create_time))])]):([21, 23, 24].indexOf(_vm.activeTabId)>-1)?_c('div',{staticClass:"content-10"},[_c('p',{staticClass:"res-name __ellipsis",attrs:{"title":item.name}},[_vm._v(_vm._s(item.name))]),(_vm.activeTabId == 21 && item.discount_way && item.valid_after !== -1)?_c('span',{staticClass:"type-text"},[_vm._v("\n                  "+_vm._s(("领券" + (item.valid_after == 0 ? '当' : '次') + "日起" + (item.valid_day) + "天内可用"))+"\n                ")]):_c('span',{staticClass:"type-text"},[_vm._v(_vm._s(item.start_at)+"至"+_vm._s(item.end_at))])]):_vm._e()])]:(_vm.activeTabId === 11)?[_c('div',{staticClass:"content-4 __ellipsis",on:{"click":function($event){return _vm.spreadExerciseList(item.id)}}},[_vm._v("\n              "+_vm._s(item.name)+"\n              "),_c('i',{staticClass:"arrow-icon",class:{'rotate-arrow': _vm.spreadExerciseId === item.id}})]),(_vm.spreadExerciseId === item.id)?_c('ul',{staticClass:"exercise-list"},[(_vm.exerciseList.length === 0)?_c('p',{staticClass:"loading-text"},[_vm._v(_vm._s(_vm.loadingText))]):_vm._l((_vm.exerciseList),function(value){return [_c('li',{key:value.id,staticClass:"exercise-item"},[_c('select-line',{attrs:{"is-available":item.is_available,"select-type":_vm.selectType},on:{"select":function($event){return _vm.onSelectRadio2(value.id)}},model:{value:(value.is_selected),callback:function ($$v) {_vm.$set(value, "is_selected", $$v)},expression:"value.is_selected"}},[_c('p',{staticClass:"exercise-name"},[_vm._v(_vm._s(value.name))])])],1)]}),(_vm.totalCount > _vm.pageSize)?_c('div',{staticClass:"exercise-pagination"},[_c('ss-pagination',{attrs:{"total":_vm.totalCount,"current":_vm.pageIndex,"pageSize":_vm.pageSize,"showQuickJumper":true},on:{"change":_vm.onInnerPaginationChange1}})],1):_vm._e()],2):_vm._e()]:(_vm.activeTabId === 16)?[_c('div',{staticClass:"content-22 __ellipsis",class:{'disabled-clock': !item.is_available},on:{"click":function($event){return _vm.spreadClockList(item)}}},[_c('img',{staticClass:"cover-picture",attrs:{"src":item.picture,"alt":"封面"}}),_vm._v("\n              "+_vm._s(item.name)+"\n              "),(item.is_available)?_c('span',{staticClass:"type-text"},[_vm._v(_vm._s({2:'日历打卡',3:'作业打卡',4:'闯关打卡'}[item.type]))]):_c('span',{staticClass:"reason-text"},[_vm._v(_vm._s(item.reason))]),(item.is_available)?_c('i',{staticClass:"arrow-icon",class:{'rotate-arrow': _vm.spreadClockId === item.id}}):_vm._e()]),(_vm.spreadClockId === item.id)?_c('ul',{staticClass:"exercise-list"},[(_vm.clockList.length === 0)?_c('p',{staticClass:"loading-text"},[_vm._v(_vm._s(_vm.loadingText))]):_vm._l((_vm.clockList),function(value){return [_c('li',{key:value.id,staticClass:"exercise-item"},[_c('select-line',{attrs:{"is-available":value.is_available,"select-type":_vm.selectType},on:{"select":function($event){return _vm.onSelectRadio3(value.id)}},model:{value:(value.is_selected),callback:function ($$v) {_vm.$set(value, "is_selected", $$v)},expression:"value.is_selected"}},[_c('p',{staticClass:"exercise-name __ellipsis"},[_vm._v(_vm._s(value.name))]),(value.is_available&&value.type === 2)?_c('span',{staticClass:"theme-text"},[_vm._v(_vm._s(value.theme_date))]):_vm._e(),(value.is_available&&value.type === 4)?_c('span',{staticClass:"theme-text"},[_vm._v("第"+_vm._s(value.weight)+"课时")]):_vm._e(),(!value.is_available)?_c('span',{staticClass:"theme-reason-text"},[_vm._v(_vm._s(value.reason))]):_vm._e()])],1)]}),(_vm.totalCount > _vm.pageSize)?_c('div',{staticClass:"exercise-pagination"},[_c('ss-pagination',{attrs:{"total":_vm.totalCount,"current":_vm.pageIndex,"pageSize":_vm.pageSize,"showQuickJumper":true},on:{"change":_vm.onInnerPaginationChange2}})],1):_vm._e()],2):_vm._e()]:_vm._e()],2)]})],2),(_vm.resList.length === 0)?_c('div',{staticClass:"empty-list"},[_vm._m(0),_c('p',{staticClass:"text"},[_vm._v("暂无数据")])]):_vm._e()])}
var resListvue_type_template_id_73ff74ba_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',{staticClass:"icon"},[_c('img',{attrs:{"src":__webpack_require__(76),"alt":"empty"}})])}]
>>>>>>> origin/master


// CONCATENATED MODULE: ./src/components/resourceSelect/resList.vue?vue&type=template&id=73ff74ba&scoped=true&

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/resourceSelect/selectLine.vue?vue&type=template&id=c5bf9b9e&scoped=true&
var selectLinevue_type_template_id_c5bf9b9e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"select-line",class:{'disabled-style': !_vm.isAvailable},on:{"click":_vm.handleClick}},[(_vm.selectType === 1)?_c('span',{staticClass:"radio-icon",class:{'selected-radio': _vm.isSelected && _vm.isAvailable}}):_vm._e(),(_vm.selectType === 2)?_c('span',{staticClass:"checkbox-icon",class:{'selected-box': _vm.isSelected && _vm.isAvailable}}):_vm._e(),_c('div',{staticClass:"select-label"},[_vm._t("default")],2)])}
var selectLinevue_type_template_id_c5bf9b9e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/resourceSelect/selectLine.vue?vue&type=template&id=c5bf9b9e&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/resourceSelect/selectLine.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var selectLinevue_type_script_lang_js_ = ({
  name: 'selectLine',
  props: {
    /**
     * 类型 1：表示单选，2：表示多选；
     */
    'select-type': {
      type: Number,
      default: 1
    },

    /**
     * 是否可选 1：可选，0：不可选
     */
    'is-available': {
      type: Number,
      default: 1
    },

    /**
     * 是否处于选中状态
     */
    value: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      isSelected: false
    };
  },
  watch: {
    value: function value() {
      this.isSelected = this.value;
    }
  },
  model: {
    prop: 'value',
    event: 'update'
  },
  created: function created() {
    this.isSelected = this.value;
  },
  methods: {
    handleClick: function handleClick() {
      // 禁止不可选状态的资源被选中
      if (this.isAvailable) {
        this.$emit('update', !this.isSelected);
        this.$emit('select', !this.isSelected);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/resourceSelect/selectLine.vue?vue&type=script&lang=js&
 /* harmony default export */ var resourceSelect_selectLinevue_type_script_lang_js_ = (selectLinevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/resourceSelect/selectLine.vue?vue&type=style&index=0&id=c5bf9b9e&lang=scss&scoped=true&
var selectLinevue_type_style_index_0_id_c5bf9b9e_lang_scss_scoped_true_ = __webpack_require__(79);

// CONCATENATED MODULE: ./src/components/resourceSelect/selectLine.vue






/* normalize component */

var selectLine_component = normalizeComponent(
  resourceSelect_selectLinevue_type_script_lang_js_,
  selectLinevue_type_template_id_c5bf9b9e_scoped_true_render,
  selectLinevue_type_template_id_c5bf9b9e_scoped_true_staticRenderFns,
  false,
  null,
  "c5bf9b9e",
  null
  
)

/* harmony default export */ var selectLine = (selectLine_component.exports);
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/resourceSelect/resList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // 单选 、 多选 组件


/* harmony default export */ var resListvue_type_script_lang_js_ = ({
  name: 'resList',
  components: {
    selectLine: selectLine
  },
  props: {
    'active-tab-id': {
      type: [String, Number],
      default: ''
    },
    'select-type': {
      type: Number,
      default: 1
    },
    'project-id': {
      type: Number,
      default: 1
    },
    'sort-order': {
      type: Number,
      default: 0
    },
    'sort-by': {
      type: Number,
      default: 0
    },
    'extra-params': {
      type: Object,
      default: function _default() {
        return {};
      }
    },

    /**
     * 经过处理的资源列表数据
     * 格式：
     * {
     *    id: '资源id',
     *    name: '资源名字',
     *    picture: '封面图片腾讯云地址',
     *    target_url: '资源跳转链接',
     *    is_available: 1, // 是否可选 1：可选，0：不可选
     *    reason: '', // 不可选原因，可选时字段为空
     *
     *    is_selected: false, // 是否已经选中
     * }
     */
    'res-list': {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      spreadExerciseId: '',
      // 展开的作业本id
      exerciseList: [],
      // 作业本中的 作业列表
      checkedExerciseId: '',
      // 选中的作业id
      spreadClockId: '',
      // 展开的打卡id
      clockList: [],
      // 打卡关联的主题列表
      loadingText: '',
      // 作业本列表
      totalCount: 0,
      pageIndex: 1,
      pageSize: 10
    };
  },
  methods: {
    /**
     * 生成上架状态的文案
     */
    upStateText: function upStateText(item) {
      // 显示上架时间
      if ([1, 2, 3, 4, 20, 25, 28].indexOf(item.res_type) > -1) {
        if (item.state === 1) {
          return '已下架';
        }

        return '上架时间：' + item.up_time;
      } // 显示上架状态
      else if ([5, 6, 8].indexOf(item.res_type) > -1) {
          if (item.state === 1) {
            return '已下架';
          }

          return '已上架';
        }

      return '';
    },

    /**
     * 选择器选中一个选项(非作业列表)
     * 携带参数：资源id
     */
    onSelectRadio1: function onSelectRadio1(resId) {
      if (this.selectType === 1) {
        this.resList.forEach(function (item) {
          if (item.id !== resId) {
            item.is_selected = false;
          }
        });
      }

      var arr = this.resList.filter(function (item) {
        return item.is_selected === true;
      });
      this.$emit('select', arr);
    },

    /**
     * 选择作业列表
     */
    onSelectRadio2: function onSelectRadio2(resId) {
      if (this.selectType === 1) {
        this.exerciseList.forEach(function (item) {
          if (item.id !== resId) {
            item.is_selected = false;
          }
        });
      }

      var arr = this.exerciseList.filter(function (item) {
        return item.is_selected === true;
      });
      this.$emit('select', arr);
    },

    /**
     * 选择打卡主题列表
     */
    onSelectRadio3: function onSelectRadio3(resId) {
      if (this.selectType === 1) {
        this.clockList.forEach(function (item) {
          if (item.id !== resId) {
            item.is_selected = false;
          }
        });
      }

      var arr = this.clockList.filter(function (item) {
        return item.is_selected === true;
      });
      this.$emit('select', arr);
    },

    /**
     * 展开作业列表
     */
    spreadExerciseList: function spreadExerciseList(id) {
      if (this.spreadExerciseId === id) {
        this.spreadExerciseId = '';
      } else {
        this.spreadExerciseId = id;
        this.pageIndex = 1;
        this.getExerciseList();
      }
    },

    /**
     * 切换分页器页码
     */
    onInnerPaginationChange1: function onInnerPaginationChange1(index) {
      this.pageIndex = index;
      this.getExerciseList();
    },

    /**
    * 获取作业列表
    */
    getExerciseList: function getExerciseList() {
      var _this = this;

      var appId = document.getElementById('xet_app_id') ? document.getElementById('xet_app_id').value : 'apppcHqlTPT3482';
      var params = {
        app_id: appId,
        res_type: 15,
        sub_res_id: this.spreadExerciseId,
        page_index: this.pageIndex,
        page_size: this.pageSize,
        sort_order: this.sortOrder,
        sort_by: this.sortBy
      };
      var extra = 15 in this.extraParams ? this.extraParams[15] : '';

      if (extra) {
        Object.assign(params, extra);
      }

      this.exerciseList = [];
      this.totalCount = 0;
      this.loadingText = '加载数据中...';
      external_axios_default.a.post('/king_select/popup_resource_list', params).then(function (res) {
        if (res.data.code === 0) {
          _this.loadingText = '暂无数据';
          _this.totalCount = res.data.data.total;
          _this.exerciseList = _this.handleList(res.data.data.list);
        } else {
          _this.loadingText = '加载失败，请稍后再试';
          console.error(res);

          _this.$message.warning('请求列表失败，请稍后再试');
        }
      }).catch(function (err) {
        _this.loadingText = '加载失败，请稍后再试';
        console.error(err);
      });
    },

    /**
     * 处理作业列表数据
     */
    handleList: function handleList(data) {
      if (!Array.isArray(data) || data.length === 0) {
        return [];
      }

      var currentArr = [];
      data.forEach(function (item) {
        // 在后台的字段基础上再添加两个自定义字段
        var target = {
          res_type: 15,
          is_selected: false
        };
        Object.assign(target, item);
        currentArr.push(target);
      });
      return currentArr;
    },

    /**
     * 展开打卡主题列表
     */
    spreadClockList: function spreadClockList(item) {
      if (!item.is_available) {
        return;
      }

      if (this.spreadClockId === item.id) {
        this.spreadClockId = '';
      } else {
        this.spreadClockId = item.id;
        this.pageIndex = 1;
        this.getClockList();
      }
    },

    /**
     * 切换分页器页码
     */
    onInnerPaginationChange2: function onInnerPaginationChange2(index) {
      this.pageIndex = index;
      this.getClockList();
    },

    /**
     * 获取打卡主题列表
     */
    getClockList: function getClockList() {
      var _this2 = this;

      var appId = document.getElementById('xet_app_id') ? document.getElementById('xet_app_id').value : 'apppcHqlTPT3482';
      var params = {
        app_id: appId,
        res_type: 27,
        sub_res_id: this.spreadClockId,
        page_index: this.pageIndex,
        page_size: this.pageSize,
        sort_order: this.sortOrder,
        sort_by: this.sortBy
      };
      var extra = 27 in this.extraParams ? this.extraParams[27] : '';

      if (extra) {
        Object.assign(params, extra);
      }

      this.clockList = [];
      this.totalCount = 0;
      this.loadingText = '加载数据中...';
      external_axios_default.a.post('/king_select/popup_resource_list', params).then(function (res) {
        if (res.data.code === 0) {
          _this2.loadingText = '暂无数据';
          _this2.totalCount = res.data.data.total;
          _this2.clockList = _this2.handleClockList(res.data.data.list);
        } else {
          _this2.loadingText = '加载失败，请稍后再试';
          console.error(res);

          _this2.$message.warning('请求列表失败，请稍后再试');
        }
      }).catch(function (err) {
        _this2.loadingText = '加载失败，请稍后再试';
        console.error(err);
      });
    },

    /**
     * 处理打卡主题列表数据
     */
    handleClockList: function handleClockList(data) {
      if (!Array.isArray(data) || data.length === 0) {
        return [];
      }

      var currentArr = [];
      data.forEach(function (item) {
        // 在后台的字段基础上再添加两个自定义字段
        var target = {
          res_type: 27,
          is_selected: false
        };
        Object.assign(target, item);
        currentArr.push(target);
      });
      return currentArr;
    }
  }
});
// CONCATENATED MODULE: ./src/components/resourceSelect/resList.vue?vue&type=script&lang=js&
 /* harmony default export */ var resourceSelect_resListvue_type_script_lang_js_ = (resListvue_type_script_lang_js_); 
<<<<<<< HEAD
// EXTERNAL MODULE: ./src/components/resourceSelect/resList.vue?vue&type=style&index=0&id=1399a090&lang=scss&scoped=true&
var resListvue_type_style_index_0_id_1399a090_lang_scss_scoped_true_ = __webpack_require__(80);
=======
// EXTERNAL MODULE: ./src/components/resourceSelect/resList.vue?vue&type=style&index=0&id=73ff74ba&lang=scss&scoped=true&
var resListvue_type_style_index_0_id_73ff74ba_lang_scss_scoped_true_ = __webpack_require__(78);
>>>>>>> origin/master

// CONCATENATED MODULE: ./src/components/resourceSelect/resList.vue






/* normalize component */

var resList_component = normalizeComponent(
  resourceSelect_resListvue_type_script_lang_js_,
  resListvue_type_template_id_73ff74ba_scoped_true_render,
  resListvue_type_template_id_73ff74ba_scoped_true_staticRenderFns,
  false,
  null,
  "73ff74ba",
  null
  
)

/* harmony default export */ var resList = (resList_component.exports);
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/resourceSelect/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var resourceSelectvue_type_script_lang_js_ = ({
  name: 'SsResourceSelect',
  components: {
    SsSelect: components_select,
    SsOption: components_option,
    Pagination: pagination,
    Loading: loading,
    resList: resList
  },
  props: {
    /**
     * 0: 知识商品, 1: 店铺首页, 2: 助学工具, 3: 微页面, 5: 营销活动页,
     */
    'tab-type': {
      type: Number,
      default: 1
    },

    /**
     * 1：表示单选，2：表示多选；
     */
    'select-type': {
      type: Number,
      default: 1
    },

    /**
     * 项目id 1:页面统计， 2:训练营
     */
    'project-id': {
      type: Number,
      default: 1
    },

    /**
     * 额外参数
     */
    'extra-params': {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      topicName: '',
      dialogLoading: false,
      mainLoading: false,
      dynamicTabsList: [],
      // 请求获取 tab 列表
      activeTabId: 1,
      filterType: '',
      filterText: '',
      totalCount: 0,
      pageIndex: 1,
      pageSize: 10,
      sortOrder: 0,
      sortBy: 0,
      resourceList: [],
      // 请求获取资源列表
      selectedArr: [],
      // 选择的资源数组
      moveLeft: 0,
      // tab位置
      showLeft: false,
      showRight: false,
      isOnce: true,
      isLoadTab: false
    };
  },
  computed: {
    skipBtnText: function skipBtnText() {
      var _this = this;

      var tab = this.dynamicTabsList.find(function (item) {
        return item.id === _this.activeTabId;
      });

      if (tab) {
        return tab.skip_btn_text;
      }

      return '新建';
    },
    showSelect: function showSelect() {
      var _this2 = this;

      var tab = this.dynamicTabsList.find(function (item) {
        return item.id === _this2.activeTabId;
      });

      if (tab) {
        return tab.show_select === 1;
      }

      return false;
    },
    selectOptions: function selectOptions() {
      var _this3 = this;

      var tab = this.dynamicTabsList.find(function (item) {
        return item.id === _this3.activeTabId;
      });
      /**
       * 有选项数组，且数量大于0
       */

      if (tab && tab.select_options.length > 0) {
        this.filterType = tab.select_options[0].value;
        return tab.select_options;
      }

      return [];
    },
    showSearch: function showSearch() {
      var _this4 = this;

      var tab = this.dynamicTabsList.find(function (item) {
        return item.id === _this4.activeTabId;
      });

      if (tab) {
        return tab.show_search === 1;
      }

      return false;
    },
    leftHeader: function leftHeader() {
      var type = {
        1: '图文名称',
        2: '音频名称',
        3: '视频名称',
        4: '直播名称',
        5: '会员名称',
        6: '专栏名称',
        7: '社群名称',
        8: '大专栏名称',
        9: '活动名称',
        10: '答主名称',
        11: '作业本名称',
        12: '考试名称',
        13: '表单名称',
        14: '测试名称',
        15: '作业本下的作业列表名称',
        16: '打卡名称',
        17: '首页名称',
        18: '微页面名称',
        19: '商品分组名称',
        20: '电子书名称',
        21: '优惠券名称',
        22: '分销商品名称',
        23: '限时折扣名称',
        24: '秒杀名称',
        25: '训练营营期名称',
        28: '实物商品名称',
        45: 'AI互动课名称'
      };
      return type[this.activeTabId];
    },
    rightHeader: function rightHeader() {
      if ([1, 2, 3, 4, 5, 6, 8, 20, 25, 28, 45].indexOf(this.activeTabId) > -1) {
        return '状态';
      } else if (this.activeTabId === 16) {
        return '打卡类型';
      } else if (this.activeTabId === 18 || this.activeTabId === 19 || this.activeTabId === 17) {
        return '创建时间';
      } else if (this.activeTabId === 21 || this.activeTabId === 23 || this.activeTabId === 24) {
        return '有效时间';
      } else {
        return '';
      }
    },

    /**
     * 是否已经选择资源
     */
    hasSelect: function hasSelect() {
      return this.selectedArr.length > 0;
    }
  },
  watch: {
    isLoadTab: function isLoadTab(val) {
      var _this5 = this;

      if (this.isOnce) {
        this.isOnce = false; // 判断是否栏目溢出

        setTimeout(function () {
          _this5.$nextTick(function () {
            var domwidth = _this5.$refs.tabColumn.getBoundingClientRect().width;

            console.log(domwidth);

            if (domwidth > 770) {
              _this5.showRight = true;
            }
          });
        }, 150);
      }
    }
  },
  created: function created() {
    this.getResTabs();
  },
  methods: {
    /**
     * 获取资源类型列表
     */
    getResTabs: function getResTabs() {
      var _this6 = this;

      var params = {
        id: this.tabType,
        project_id: this.projectId
      };
      this.dialogLoading = true;
      external_axios_default.a.post('/king_select/get_popup_tabs', params).then(function (res) {
        _this6.dialogLoading = false;

        if (res.data.code === 0) {
          _this6.topicName = res.data.data.topic_name || '资源';
          _this6.dynamicTabsList = res.data.data.list;
          _this6.activeTabId = _this6.dynamicTabsList.length > 0 ? _this6.dynamicTabsList[0].id : null;
          _this6.isLoadTab = true;

          if (_this6.activeTabId) {
            _this6.getResourceList();
          }
        } else {
          console.error(res);
        }
      }).catch(function (err) {
        _this6.dialogLoading = false;
        console.error(err);
      });
    },

    /**
     * 切换tab
     */
    switchTab: function switchTab(item) {
      // if (this.mainLoading) {
      //   this.$message.warning('正在加载数据，请稍后再试');
      //   return false;
      // }
      this.pageIndex = 1;
      this.sortOrder = 'sort_order' in item ? item.sort_order : 0;
      this.sortBy = 'sort_by' in item ? item.sort_by : 0;

      if (this.activeTabId === item.id) {
        this.refreshPopup();
      } else {
        this.activeTabId = item.id;
        this.filterType = '';
        this.filterText = '';
        this.getResourceList();
      }
    },

    /**
     * 跳转新页面
     */
    skip: function skip() {
      var _this7 = this;

      if (this.projectId === 2 && _YS_report) {
        // 训练营，埋点，判断来源
        _YS_report.push([{
          et: 1,
          actn: '任务选择_步骤3'
        }]);
      }

      var tab = this.dynamicTabsList.find(function (item) {
        return item.id === _this7.activeTabId;
      });

      if (tab.skip_url) {
        var newWin = window.open();
        newWin.location = tab.skip_url;
      } else {
        console.error('找不到跳转链接');
      }
    },

    /**
     * 监听input输入事件
     */
    onInputEnter: function onInputEnter(e) {
      this.pageIndex = 1;
      this.getResourceList();
    },

    /**
     * 刷新当前tab对应的数据
     */
    refreshPopup: function refreshPopup() {
      this.pageIndex = 1;
      this.filterType = '';
      this.filterText = '';
      this.getResourceList();
    },

    /**
     * 选择器筛选
     */
    onfilterTypeChange: function onfilterTypeChange(value) {
      this.pageIndex = 1;
      this.filterType = value;
      this.getResourceList();
    },

    /**
     * 获取资源列表
     */
    getResourceList: function getResourceList() {
      var _this8 = this;

      var appId = document.getElementById('xet_app_id') ? document.getElementById('xet_app_id').value : 'apppcHqlTPT3482';
      var params = {
        app_id: appId,
        res_type: this.activeTabId,
        sub_res_id: '',
        filter_type: this.filterType,
        filter_text: this.filterText,
        page_index: this.pageIndex,
        page_size: this.pageSize,
        sences_id: this.projectId,
        sort_order: this.sortOrder,
        sort_by: this.sortBy
      };
      var extra = this.activeTabId in this.extraParams ? this.extraParams[this.activeTabId] : '';

      if (extra) {
        Object.assign(params, extra);
      } // 获取资源列表额外参数


      if (this.extraParams.hasOwnProperty('is_public')) {
        Object.assign(params, {
          is_public: Number(this.extraParams['is_public'])
        });
      } //总分校逻辑,电子书、直播添加是否分发标识


      if (this.extraParams.hasOwnProperty('is_distribute')) {
        Object.assign(params, {
          is_distribute: Number(this.extraParams['is_distribute'])
        });
      }

      this.mainLoading = true;
      this.resourceList = [];
      external_axios_default.a.post('/king_select/popup_resource_list', params).then(function (res) {
        _this8.mainLoading = false;

        if (res.data.code === 0) {
          _this8.totalCount = res.data.data.total;
          _this8.resourceList = _this8.handleTableList(res.data.data.list);
        } else {
          console.error(res);

          _this8.$message.warning('请求列表失败，请稍后再试');
        }
      }).catch(function (err) {
        _this8.mainLoading = false;
        console.error(err);
      });
    },

    /**
     * 返回处理过的资源列表数据
     */
    handleTableList: function handleTableList(data) {
      var _this9 = this;

      if (!Array.isArray(data) || data.length === 0) {
        return [];
      }

      var currentArr = [];
      data.forEach(function (item) {
        // 在后台的字段基础上再添加两个自定义字段
        var target = {
          res_type: _this9.activeTabId,
          is_selected: false
        };
        Object.assign(target, item);
        currentArr.push(target);
      });
      return currentArr;
    },

    /**
     * 单选列表选中某个选项
     */
    onResListSelect: function onResListSelect(arr) {
      this.selectedArr = arr;
    },

    /**
     * 改变分页器
     */
    onPaginationChange: function onPaginationChange(index) {
      this.pageIndex = index;
      this.getResourceList();
    },

    /**
     * 点击确定 确定所选的资源
     */
    onConfirm: function onConfirm() {
      if (this.hasSelect) {
        this.$emit('select', this.selectedArr);
      }
    },

    /**
     * preChoose 选择上一页
     */
    preChoose: function preChoose() {
      var dom = this.$refs.tabColumn;
      var superior = this.$refs.tabContent;
      var superiorLeft = superior.getBoundingClientRect().left;
      var domLeft = dom.getBoundingClientRect().left;
      var domWidth = dom.getBoundingClientRect().width;
      console.log(superiorLeft, domLeft);

      if (domLeft < superiorLeft && superiorLeft - domLeft < domWidth / 2) {
        this.moveLeft = 0;
        this.showRight = true;
        this.showLeft = false;
      } else if (domLeft < superiorLeft && superiorLeft - domLeft > domWidth / 2) {
        this.moveLeft = this.moveLeft + (superiorLeft - domLeft) / 2;
        this.showRight = true;
      }
    },

    /**
     * nextChoose 选择下一页
     */
    nextChoose: function nextChoose() {
      var dom = this.$refs.tabColumn;
      var superior = this.$refs.tabContent;
      var superiorRight = superior.getBoundingClientRect().right;
      var domRight = dom.getBoundingClientRect().right + 45;
      var domWidth = dom.getBoundingClientRect().width;

      if (domRight > superiorRight && domRight - superiorRight < domWidth / 2) {
        this.moveLeft = this.moveLeft - (domRight - superiorRight);
        this.showLeft = true;
        this.showRight = false;
      } else if (domRight > superiorRight && domRight - superiorRight > domWidth / 2) {
        this.moveLeft = this.moveLeft - (domRight - superiorRight) / 2;
        this.showLeft = true;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/resourceSelect/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_resourceSelectvue_type_script_lang_js_ = (resourceSelectvue_type_script_lang_js_); 
<<<<<<< HEAD
// EXTERNAL MODULE: ./src/components/resourceSelect/index.vue?vue&type=style&index=0&id=f93a6a2e&lang=scss&scoped=true&
var resourceSelectvue_type_style_index_0_id_f93a6a2e_lang_scss_scoped_true_ = __webpack_require__(81);
=======
// EXTERNAL MODULE: ./src/components/resourceSelect/index.vue?vue&type=style&index=0&id=039e4fea&lang=scss&scoped=true&
var resourceSelectvue_type_style_index_0_id_039e4fea_lang_scss_scoped_true_ = __webpack_require__(79);
>>>>>>> origin/master

// CONCATENATED MODULE: ./src/components/resourceSelect/index.vue






/* normalize component */

var resourceSelect_component = normalizeComponent(
  components_resourceSelectvue_type_script_lang_js_,
<<<<<<< HEAD
  resourceSelectvue_type_template_id_f93a6a2e_scoped_true_render,
  resourceSelectvue_type_template_id_f93a6a2e_scoped_true_staticRenderFns,
  false,
  null,
  "f93a6a2e",
=======
  resourceSelectvue_type_template_id_039e4fea_scoped_true_render,
  resourceSelectvue_type_template_id_039e4fea_scoped_true_staticRenderFns,
  false,
  null,
  "039e4fea",
>>>>>>> origin/master
  null
  
)

/* harmony default export */ var resourceSelect = (resourceSelect_component.exports);
// CONCATENATED MODULE: ./libEntry/install/resource-select/index.js


resourceSelect.install = function (Vue) {
  Vue.component(resourceSelect.name, resourceSelect);
};

/* harmony default export */ var resource_select = (resourceSelect);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/switch/index.vue?vue&type=template&id=26e74a06&
var switchvue_type_template_id_26e74a06_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['ss-switch', {'is-checked': _vm.activeSwitch, 'ss-disabled': _vm.disabled}],on:{"click":_vm.handleChange}},[(_vm.textNum == 2 && _vm.activeText && _vm.inactiveText)?_c('span',{ref:"labelLeft",staticClass:"ss-switch_label ss-switch_label-left"},[_vm._v(_vm._s(_vm.inactiveText))]):_vm._e(),_c('span',{ref:"core",class:['ss-switch_core', {'ss-switch_core_dis': !_vm.activeSwitch}],style:({width: (_vm.width + "px")})}),(_vm.activeText && _vm.inactiveText)?_c('span',{ref:"labelRight",staticClass:"ss-switch_label ss-switch_label-right"},[_vm._v(_vm._s(_vm.changeText))]):_vm._e()])}
var switchvue_type_template_id_26e74a06_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/switch/index.vue?vue&type=template&id=26e74a06&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/switch/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var switchvue_type_script_lang_js_ = ({
  name: 'SsSwitch',
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 40
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    activeText: String,
    inactiveText: String,
    textFontSize: {
      type: Number,
      default: 12
    },
    textActiveColor: {
      type: String,
      default: ''
    },
    textInactiveColor: {
      type: String,
      default: ''
    },
    textNum: {
      type: [String, Number],
      default: 2
    }
  },
  data: function data() {
    return {
      activeSwitch: this.value
    };
  },
  watch: {
    activeSwitch: function activeSwitch() {
      this.setBackgroundColor();
      this.setFontColor();
    },
    value: function value() {
      this.activeSwitch = this.value;
    }
  },
  computed: {
    changeText: function changeText() {
      if (this.textNum == 2) {
        return this.activeText;
      } else if (this.textNum == 1) {
        if (this.activeSwitch) {
          return this.activeText;
        } else {
          return this.inactiveText;
        }
      }
    }
  },
  mounted: function mounted() {
    this.setBackgroundColor();
    this.setFontSize();
    this.setFontColor();
  },
  methods: {
    handleChange: function handleChange() {
      var objSwitch = {};

      if (!this.disabled && !this.limit) {
        this.activeSwitch = !this.activeSwitch;
        objSwitch.activeSwitch = this.activeSwitch;
      } else {
        objSwitch.activeSwitch = false;
      }

      this.$emit('changeSwitch', objSwitch);
    },
    setBackgroundColor: function setBackgroundColor() {
      if (this.activeColor || this.inactiveColor) {
        var newColor = this.activeSwitch ? this.activeColor : this.inactiveColor;
        this.$refs.core.style.borderColor = newColor;
        this.$refs.core.style.backgroundColor = newColor;
      }
    },
    setFontSize: function setFontSize() {
      var _this = this;

      var spanDom = document.querySelectorAll('.ss-switch_label');
      spanDom.forEach(function (item) {
        item.style.fontSize = "".concat(_this.textFontSize, "px");
      });
    },
    setFontColor: function setFontColor() {
      var _this2 = this;

      var labelLeft = this.$refs.labelLeft;
      var labelRight = this.$refs.labelRight;
      this.$nextTick(function () {
        if (_this2.textActiveColor || _this2.textInactiveColor) {
          if (_this2.textNum == 2) {
            if (_this2.activeSwitch) {
              labelLeft.style.color = _this2.textInactiveColor;
              labelRight.style.color = _this2.textActiveColor;
            } else {
              labelLeft.style.color = _this2.textActiveColor;
              labelRight.style.color = _this2.textInactiveColor;
            }
          } else if (_this2.textNum == 1) {
            if (_this2.activeSwitch) {
              labelRight.style.color = _this2.textActiveColor;
            } else {
              labelRight.style.color = _this2.textInactiveColor;
            }
          }
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/switch/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_switchvue_type_script_lang_js_ = (switchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/switch/index.vue?vue&type=style&index=0&lang=scss&
var switchvue_type_style_index_0_lang_scss_ = __webpack_require__(82);

// CONCATENATED MODULE: ./src/components/switch/index.vue






/* normalize component */

var switch_component = normalizeComponent(
  components_switchvue_type_script_lang_js_,
  switchvue_type_template_id_26e74a06_render,
  switchvue_type_template_id_26e74a06_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_switch = (switch_component.exports);
// CONCATENATED MODULE: ./libEntry/install/switch/index.js


components_switch.install = function (Vue) {
  Vue.component(components_switch.name, components_switch);
};

/* harmony default export */ var install_switch = (components_switch);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/topTips/index.vue?vue&type=template&id=9e01a77e&scoped=true&
var topTipsvue_type_template_id_9e01a77e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.isShow === 1)?_c('div',{staticClass:"ss-container-orderRemainderBar"},[_c('div',{staticClass:"ss-right-item",domProps:{"innerHTML":_vm._s(_vm.tipContent)}}),_c('div',{staticClass:"ss-left-item",on:{"click":_vm.jumpPage}},[_vm._v("\n    立即订购\n  ")])]):_vm._e()}
var topTipsvue_type_template_id_9e01a77e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/topTips/index.vue?vue&type=template&id=9e01a77e&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/topTips/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var topTipsvue_type_script_lang_js_ = ({
  name: 'SsTopTips',
  props: {
    url: {
      type: String,
      default: '/show_expire_warning_tips'
    },
    module_id: {
      required: true,
      type: String
    },
    app_id: {
      required: true,
      type: String
    }
  },
  data: function data() {
    return {
      eventTrackingName: '',
      // 一级事件名称
      packageName: '',
      // 功能名称
      isShow: 2,
      tipContent: '',
      jump_url_type: ''
    };
  },
  created: function created() {
    var _this = this;

    external_axios_default.a.post(this.url, {
      module_id: this.module_id,
      app_id: this.app_id
    }).then(function (res) {
      var result = res.data;

      if (result.code === 0) {
        _this.isShow = result.data.is_show;
        _this.tipContent = result.data.tips_content;
        _this.jump_url_type = result.data.jump_url_type;
        _this.packageName = result.data.package_name; // use_type 1-正常开通 2-正常开通过期 3-试用开通 4-试用开通过期 5-试用后正常开通 6-试用后正常开通过期

        if (result.data.use_type === 3) {
          _this.eventTrackingName = '功能试用提示栏_';
        } else if ([2, 4, 6].includes(result.data.use_type)) {
          _this.eventTrackingName = '功能过期提示栏_';
        }
      } else {
        console.error(res);
      }
    }).catch(function (err) {
      console.error(err);
    });
  },
  methods: {
    jumpPage: function jumpPage() {
      var arr = [{
        et: 1,
        actn: this.eventTrackingName + '立即订购',
        // 一级事件名
        actsn: this.eventTrackingName + this.packageName + '_立即订购',
        // 二级事件名
        actp: JSON.stringify({
          app_id: this.app_id
        }) // 事件属性

      }];

      try {
        window['_YS_report'].push(arr);
      } catch (error) {
        console.log(error);
      }

      if (this.jump_url_type === 1) {
        window.location.href = '/personal_service/service_buy';
      } else if (this.jump_url_type === 2) {
        window.location.href = "/entry/".concat(this.module_id, "?buy=1");
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/topTips/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_topTipsvue_type_script_lang_js_ = (topTipsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/topTips/index.vue?vue&type=style&index=0&id=9e01a77e&lang=scss&scoped=true&
var topTipsvue_type_style_index_0_id_9e01a77e_lang_scss_scoped_true_ = __webpack_require__(83);

// CONCATENATED MODULE: ./src/components/topTips/index.vue






/* normalize component */

var topTips_component = normalizeComponent(
  components_topTipsvue_type_script_lang_js_,
  topTipsvue_type_template_id_9e01a77e_scoped_true_render,
  topTipsvue_type_template_id_9e01a77e_scoped_true_staticRenderFns,
  false,
  null,
  "9e01a77e",
  null
  
)

/* harmony default export */ var topTips = (topTips_component.exports);
// CONCATENATED MODULE: ./libEntry/install/top-tips/index.js


topTips.install = function (Vue) {
  Vue.component(topTips.name, topTips);
};

/* harmony default export */ var top_tips = (topTips);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/assignModal/index.vue?vue&type=template&id=54c1a194&scoped=true&
var assignModalvue_type_template_id_54c1a194_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"dialog"}},[_c('section',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowDialog),expression:"isShowDialog"}],staticClass:"ss-dialog-bg ss-assign-dialog"},[_c('div',{staticClass:"ss-select-popup"},[_c('div',{staticClass:"ss-dialog-header"},[_vm._v("\n                    "+_vm._s(_vm.title)+"\n                    "),_c('i',{staticClass:"ss-close-btn sense-icon-close",on:{"click":function($event){$event.stopPropagation();return _vm.closeFunc()}}})]),_c('div',{staticClass:"ss-dialog-content"},[_c('div',{staticClass:"ss-mian-content"},[_c('div',{staticClass:"ss-assign-menber-box"},[_c('div',{staticClass:"ss-assign-menber-tree-wrapper"},[_c('div',{staticClass:"ss-assign-search-menber"},[_c('i',{staticClass:"icon-icon_search font_family"}),_c('input',{directives:[{name:"model",rawName:"v-model.trim",value:(_vm.assignSearchContent),expression:"assignSearchContent",modifiers:{"trim":true}}],staticClass:"ss-assign-search-menber-input",attrs:{"placeholder":_vm.placeholderText,"prefix-icon":"el-icon-search"},domProps:{"value":(_vm.assignSearchContent)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.assignSearchContent=$event.target.value.trim()},_vm.searchDebounce],"blur":function($event){return _vm.$forceUpdate()}}})]),_c('div',{staticClass:"ss-assign-menber-tree"},[(_vm.isLoading)?_c('loading'):_vm._e(),(!_vm.assignSearchContent)?_c('div',{staticClass:"ss-treeTop",style:({ height: _vm.memberTree.length * 40 + 'px' })}):_vm._e(),(!_vm.assignSearchContent)?_c('div',{ref:"treeBox"},[(_vm.navList.length&&_vm.start==0)?_c('div',{ref:"breadNav",staticClass:"ss-bread-nav"},_vm._l((_vm.navList),function(navItem,navIndex){return _c('span',{key:navIndex},[_c('span',{staticClass:"ss-navItem",class:{'active':_vm.topNodeUid==navItem.department_id},on:{"click":function($event){return _vm.getDepartmentTree(navItem,navIndex)}}},[_c('name-replacer',{attrs:{"id":navItem.department_id,"type":"1","name":navItem.name}})],1),_c('span',{directives:[{name:"show",rawName:"v-show",value:(navIndex!=_vm.navList.length-1),expression:"navIndex!=navList.length-1"}],staticClass:"bread-separator"},[_vm._v("/")])])}),0):_vm._e(),_c('div',{staticClass:"ss-org-tree"},[(_vm.start==0)?_c('div',{staticClass:"ss-org-tree-item ss-allchecked"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.allChecked),expression:"allChecked"}],ref:"treeinput",staticClass:"ss-filled-in",attrs:{"type":"checkbox","id":"checkbox"},domProps:{"checked":Array.isArray(_vm.allChecked)?_vm._i(_vm.allChecked,null)>-1:(_vm.allChecked)},on:{"change":[function($event){var $$a=_vm.allChecked,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.allChecked=$$a.concat([$$v]))}else{$$i>-1&&(_vm.allChecked=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.allChecked=$$c}},function($event){return _vm.changeAllChecked(_vm.allChecked)}]}}),_c('label',{staticClass:"ss-firstIndexLabel",attrs:{"for":"checkbox"}},[_vm._v("全部")])]):_vm._e(),_vm._l((_vm.visiableTree),function(item,index){return _c('div',{key:index,ref:"treeItem",refInFor:true,staticClass:"ss-org-tree-item"},[_c('div',{staticClass:"ss-item-box"},[_c('div',{staticClass:"ss-org-tree-item-name"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.checkedMap[item.cid]),expression:"checkedMap[item.cid]"}],ref:"treeinput",refInFor:true,staticClass:"ss-filled-in",attrs:{"type":"checkbox","id":("checkbox" + (item.uid))},domProps:{"value":item.cid,"checked":Array.isArray(_vm.checkedMap[item.cid])?_vm._i(_vm.checkedMap[item.cid],item.cid)>-1:(_vm.checkedMap[item.cid])},on:{"change":[function($event){var $$a=_vm.checkedMap[item.cid],$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=item.cid,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.checkedMap, item.cid, $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.checkedMap, item.cid, $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.checkedMap, item.cid, $$c)}},function($event){return _vm.changeChecked(item,false)}]}}),_c('label',{staticClass:"ss-firstIndexLabel",attrs:{"for":("checkbox" + (item.uid))}},[(item.type=='user')?_c('span',[_c('name-replacer',{attrs:{"id":item.employee_id,"type":"0","name":item.name}})],1):_c('span',[_c('name-replacer',{attrs:{"id":item.department_id,"type":"1","name":item.name}})],1),(item.type=='department')?_c('span',[_vm._v("("+_vm._s(item.user_num)+")")]):_vm._e()])]),(item.type=='department')?_c('div',{staticClass:"ss-next-level"},[_c('span',{staticClass:"sense-icon_distribute",class:{'active':!_vm.checkedMap[item.cid]}}),_c('span',{staticClass:"ss-levelIcon",class:{'ss-levelDisabled':_vm.checkedMap[item.cid]},on:{"click":function($event){return _vm.clickToNextLevel(item)}}},[_vm._v("下级")])]):_vm._e()])])})],2)]):_vm._e(),(_vm.assignSearchContent)?_c('div',{ref:"searchBox",staticClass:"ss-org-tree ss-search-tree"},_vm._l((_vm.serachTreeResult),function(item,index){return _c('div',{key:index,staticClass:"ss-org-tree-item"},[_c('div',{staticClass:"ss-item-box"},[_c('div',{staticClass:"ss-org-tree-item-name"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.checkedMap[item.cid]),expression:"checkedMap[item.cid]"}],ref:"treeinput",refInFor:true,staticClass:"ss-filled-in",attrs:{"type":"checkbox","id":("checkbox" + (item.cid))},domProps:{"value":item.cid,"checked":Array.isArray(_vm.checkedMap[item.cid])?_vm._i(_vm.checkedMap[item.cid],item.cid)>-1:(_vm.checkedMap[item.cid])},on:{"change":[function($event){var $$a=_vm.checkedMap[item.cid],$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=item.cid,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.checkedMap, item.cid, $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.checkedMap, item.cid, $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.checkedMap, item.cid, $$c)}},function($event){return _vm.changeChecked(item,false)}]}}),_c('label',{staticClass:"ss-firstIndexLabel",attrs:{"for":("checkbox" + (item.cid))}},[(item.type=='user')?_c('span',[_c('name-replacer',{attrs:{"id":item.employee_id,"type":"0","name":item.name}})],1):_c('span',[_c('name-replacer',{attrs:{"id":item.department_id,"type":"1","name":item.name}})],1),(item.type=='department')?_c('span',[_vm._v("("+_vm._s(item.user_num)+")")]):_vm._e()])])])])}),0):_vm._e()],1),(_vm.isShowSmartCampSync)?_c('div',{staticClass:"ss-smartCampSync"},[_c('span',[_vm._v("没有找到用户？")]),_c('span',{on:{"click":_vm.syncAccountSmartCapm}},[_vm._v("更新当前组织架构")])]):_vm._e()]),_c('div',{staticClass:"ss-assign-menber-list-wrapper"},[_c('div',{staticClass:"ss-assign-menber-list"},_vm._l((_vm.choseList),function(item,index){return _c('div',{key:index,staticClass:"ss-assign-choice-wrapper"},[(item.type=='user')?_c('span',[_c('name-replacer',{attrs:{"id":item.employee_id,"type":"0","name":item.name}})],1):_c('span',[_c('name-replacer',{attrs:{"id":item.department_id,"type":"1","name":item.name}})],1),(item.type=='department')?_c('span',[_vm._v("("+_vm._s(item.user_num)+")")]):_vm._e(),_c('span',{staticClass:"ss-delete-item-icon sense-icon-close",on:{"click":function($event){return _vm.deleteChoice(item,index)}}})])}),0)])])])]),_c('div',{staticClass:"ss-dialog-footer"},[_c('button',{staticClass:"ss-cancel-btn",on:{"click":_vm.cancleFunc}},[_vm._v(_vm._s(_vm.leftButtonText))]),_c('button',{staticClass:"ss-confirm-btn",class:{'ss-is-disabled':_vm.hasClicked},on:{"click":_vm.confirmFunc}},[_vm._v(_vm._s(_vm.rightButtonText))])])])])])}
var assignModalvue_type_template_id_54c1a194_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/assignModal/index.vue?vue&type=template&id=54c1a194&scoped=true&

// CONCATENATED MODULE: ./src/components/message/index.js

/* harmony default export */ var components_message = (src_message);
// CONCATENATED MODULE: ./src/utils/http.js

external_axios_default.a.defaults.timeout = 10000;
/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

function http_get(url) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return new Promise(function (resolve, reject) {
    external_axios_default.a.get(url, {
      params: params
    }).then(function (response) {
      resolve(response.data);
    }).catch(function (err) {
      reject(err);
    });
  });
}
/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

function post(url) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return new Promise(function (resolve, reject) {
    external_axios_default.a.post(url, data).then(function (response) {
      resolve(response.data);
    }, function (err) {
      reject(err);
    });
  });
}
<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/nameReplacer/index.vue?vue&type=template&id=4d383318&
var nameReplacervue_type_template_id_4d383318_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[(!_vm.isAuthShop)?_c('span',[_vm._v(_vm._s(_vm.name))]):(_vm.orgType == 999)?_c('span',[(_vm.type == 0)?_c('ww-open-data',{attrs:{"openid":_vm.id,"type":_vm.nameTypes[_vm.type]}}):(_vm.type == 1)?_c('ww-open-data',{attrs:{"openid":_vm.id,"type":_vm.nameTypes[_vm.type]}}):(_vm.isGetOpenId && _vm.type == 2)?_c('span',[(_vm.isValidData)?_c('ww-open-data',{attrs:{"openid":_vm.employId,"type":_vm.nameTypes[_vm.type]}}):_c('span',[_vm._v("\n        "+_vm._s(_vm.displayText)+"\n      ")])],1):_vm._e()],1):(_vm.orgType == 1)?_c('span',[(_vm.nameObj.isOpenId)?_c('ww-open-data',{attrs:{"corpid":_vm.corpid,"openid":_vm.nameObj.name,"type":_vm.nameTypes[_vm.type]}}):_c('span',[_vm._v("\n      "+_vm._s(_vm.nameObj.name)+"\n    ")])],1):_vm._e()])}
var nameReplacervue_type_template_id_4d383318_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/nameReplacer/index.vue?vue&type=template&id=4d383318&
=======
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/nameReplacer/index.vue?vue&type=template&id=14b29be4&
var nameReplacervue_type_template_id_14b29be4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[(!_vm.isAuthShop)?_c('span',[_vm._v(_vm._s(_vm.name))]):(_vm.orgType == 999)?_c('span',[(_vm.type == 0)?_c('ww-open-data',{attrs:{"openid":_vm.id,"type":_vm.nameTypes[_vm.type]}}):(_vm.type == 1)?_c('ww-open-data',{attrs:{"openid":_vm.id,"type":_vm.nameTypes[_vm.type]}}):(_vm.isGetOpenId && _vm.type == 2)?_c('span',[(_vm.isValidData)?_c('ww-open-data',{attrs:{"openid":_vm.employId,"type":_vm.nameTypes[_vm.type]}}):_c('span',[_vm._v(_vm._s(_vm.displayText))])],1):_vm._e()],1):(_vm.orgType == 1)?_c('span',[(_vm.nameObj.isOpenId)?_c('ww-open-data',{attrs:{"corpid":_vm.corpid,"openid":_vm.nameObj.name,"type":_vm.nameTypes[_vm.type]}}):_c('span',[_vm._v(_vm._s(_vm.nameObj.name))])],1):_vm._e()])}
var nameReplacervue_type_template_id_14b29be4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/nameReplacer/index.vue?vue&type=template&id=14b29be4&
>>>>>>> origin/master

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/nameReplacer/index.vue?vue&type=script&lang=js&
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
<<<<<<< HEAD
//
//
//
//
=======
>>>>>>> origin/master

var TRAINING_FETCH_API = "/training_api/v2/employee/info/v2";
/* harmony default export */ var nameReplacervue_type_script_lang_js_ = ({
  name: "SsNameReplacer",
  data: function data() {
    return {
      nameTypes: {
        0: "userName",
        1: "departmentName",
        2: "userName"
      },
      isGetOpenId: false,
      employId: "",
      isAuthShop: false,
      isValidData: false,
      displayText: "",
      orgType: "",
      nameObj: {}
    };
  },
  props: {
    id: {
      type: [String, Number] // shop_type为1的时候传(type 0 传eployId（openid） type 1 传departmentId（openid）type 2 通过userid拿openid)

    },
    type: {
      type: [String, Number],
      required: true
    },
    // 需要展示的名称类型  0 姓名 1 部门名称 2 需要通过userid走接口拿openid的姓名
    name: {
      type: String,
      default: ""
    },
    // 未企业微信授权时展示的文案
    isAuth: {
      type: Boolean,
      default: undefined
    }
  },
  computed: {
    corpid: function corpid() {
      return window.__qywx_corp_id;
    }
  },
  mounted: function mounted() {
    this.nameRepalcerInit();
  },
  methods: {
    nameRepalcerInit: function nameRepalcerInit() {
      if (this.isAuth !== undefined) {
        // 先去判断外部有没有传isAuth字段，如果有就以外面的为准，没有就去判断window.__shop_type
        if (this.isAuth === true) {
          this.isAuthShop = true;
        } // shop_type为1 已授权企业微信的企学院 org_type为1 已授权企业微信的知识店铺

      } else if (window.__shop_type == 1 || window.__org_type == 1) {
        this.isAuthShop = true;

        if (window.__shop_type == 1) {
          this.orgType = '999'; // 企业微信的企学院orgType
        } else {
          this.orgType = window.__org_type;
        }

        this.orgTypeHandler(this.orgType);
      }
    },
    orgTypeHandler: function orgTypeHandler(orgType) {
      if (orgType == 999) {
        this.qywxTrainingShopHandler(this.type);
      } else if (orgType == 1) {
        this.qywxShopHandler();
      } else {
        console.log('nameReplacer异常');
        this.isAuthShop = false;
      }
    },
    // 企学院企业微信环境
    qywxTrainingShopHandler: function qywxTrainingShopHandler(type) {
      // type 2 通过userid拿openid
      if (type == 2) {
        this.getOpenIdByUserId();
      }
    },
    // 知识店铺企业微信环境
    qywxShopHandler: function qywxShopHandler() {
      this.nameObj = this.openIdParser(this.name);
    },
    openIdParser: function openIdParser(name) {
      var reg = /##.*?##/g;
      var temp = name.match(reg);

      if (temp) {
        var openIdStr = temp[0];
        var openId = openIdStr.slice(2, openIdStr.length - 2);
        return {
          name: openId,
          isOpenId: true
        };
      } else {
        return {
          name: name,
          isOpenId: false
        };
      }
    },
    getOpenIdByUserId: function getOpenIdByUserId() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var params, res, _res$data, code, data, msg, userName;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                params = {
                  user_id: [_this.id]
                };
                _context.next = 4;
                return external_axios_default.a.get(TRAINING_FETCH_API, {
                  params: params
                });

              case 4:
                res = _context.sent;
                _res$data = res.data, code = _res$data.code, data = _res$data.data, msg = _res$data.msg;

                if (code === 0) {
                  _this.employId = data.users[0].employee_id;

                  if (_this.employId) {
                    _this.isValidData = true;
                  } else {
                    userName = data.users[0].user_name;
                    _this.displayText = userName || _this.name;
                  }
                } else {
                  _this.displayText = _this.name;
                }

                _this.isGetOpenId = true;
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0, "error location in nameReplacer");

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 10]]);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./src/components/nameReplacer/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nameReplacervue_type_script_lang_js_ = (nameReplacervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/nameReplacer/index.vue?vue&type=style&index=0&lang=scss&
var nameReplacervue_type_style_index_0_lang_scss_ = __webpack_require__(84);

// CONCATENATED MODULE: ./src/components/nameReplacer/index.vue






/* normalize component */

var nameReplacer_component = normalizeComponent(
  components_nameReplacervue_type_script_lang_js_,
<<<<<<< HEAD
  nameReplacervue_type_template_id_4d383318_render,
  nameReplacervue_type_template_id_4d383318_staticRenderFns,
=======
  nameReplacervue_type_template_id_14b29be4_render,
  nameReplacervue_type_template_id_14b29be4_staticRenderFns,
>>>>>>> origin/master
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var nameReplacer = (nameReplacer_component.exports);
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/assignModal/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var assignModalvue_type_script_lang_js_ = ({
  name: 'SsAssignMemberBox',
  props: {
    //搜索方式 all-全部，employee-成员，department-部门，默认全部搜索
    searchType: {
      type: String,
      default: 'all'
    },
    //指派类型，课程 course, 培训计划 training ,修改成员所属部门 department ,人员授权 employee
    assignType: {
      type: String,
      default: 'course'
    },
    //弹出框的标题
    title: {
      type: String,
      default: '指派设置'
    },
    //搜索框的文案
    placeholderText: {
      type: String,
      default: '请输入部门或者人员'
    },
    //左边按钮文案
    leftButtonText: {
      type: String,
      default: '取消'
    },
    //右边按钮文案
    rightButtonText: {
      type: String,
      default: '确定'
    },
    //是否展示学员
    isShowUsers: {
      type: Boolean,
      default: true
    },
    //是否为智慧校园
    isSmartCamp: {
      type: Boolean,
      default: false
    },
    //是否缓存每个部门下面的组织结构
    isCacheTree: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      assignSearchContent: '',
      //搜索人员字段
      memberTree: [{}],
      //左边的组织结构列表
      choseList: [],
      //选中的人员列表
      topNodeUid: '1',
      //当前展示的部门的id
      navList: [],
      //面包屑列表
      allDepartmentTreeMap: {},
      //所有的部门下面对应的树结构的保存，避免每次都要请求，保证只请求一次
      checkedArr: [],
      //选中的人的cid集合，用于checkbox的绑定
      allChecked: false,
      //全选框的按钮状态
      isShowDialog: false,
      //默认展示弹出框
      courseAuthorizeUrl: '/training_api/v2/privilege/resource/auth',
      //最终授权课程的api路径
      trainingAuthorizeUrl: '/training_api/v2/privilege/resource/assign',
      //最终授权训练营的api路径
      courseAssignedUrl: '/training_api/v2/privilege/resource/auth',
      //获取课程已经指派人员的api路径
      trainingAssignedUrl: '/training_api/v2/privilege/resource/assign',
      //获取训练营已经指派人员的api路径
      departmentAssignedUrl: '/training_api/v2/employee/info.department',
      //获取训练营已经指派人员的api路径
      employeeAssignedUrl: '/training_api/v2/privilege/employee/auth',
      isLoading: false,
      //loading
      assignedUserList: [],
      //已经分配的人员列表
      serachTreeResult: [],
      //搜索列表
      //新加的
      visiableTree: [],
      //可见的组织架构树
      start: 0,
      //可见范围内组织架构的开始下标
      end: null,
      //可见范围内组织架构的结束下标
      visibleCount: 0,
      //可见范围内展示多少条数据
      visibleData: [],
      //可见范围内组织架构list
      treeIds: [],
      //当前部门下的所有部门和人员的cid集合
      checkedMap: {},
      //保存组织架构的勾选状态
      treeItemHeight: 40,
      spareHeight: 92,
      //breadNav 52 + treeItemHeight 40
      treeHeight: 400,
      asyncSmartCampUrl: '/smart_campus/campus/sync_task',
      //智慧校园同步操作路径
      isRootDepartMap: {},
      //是否为根部门的缓存
      hasClicked: false //是否已经点击了最终的确认按钮

    };
  },
  watch: {
    assignSearchContent: function assignSearchContent(newVal, oldVal) {
      if (!newVal) {
        this.$nextTick(function () {
          this.start = 0;
          this.$refs.treeBox.style.webkitTransform = "translate3d(0, 0px, 0)";
          this.end = this.start + this.visibleCount;
          this.visiableTree = this.memberTree.slice(this.start, this.end);
        });
      }

      if (!oldVal && newVal) {
        this.serachTreeResult = [];
      }
    }
  },
  created: function created() {
    var that = this;
    that.initFunction();
  },
  mounted: function mounted() {
    this.$nextTick(function () {
      this.scrollEvent();
    });
  },
  components: {
    loading: loading,
    message: components_message,
    NameReplacer: nameReplacer
  },
  computed: {
    //智慧校园,非搜索状态且不是根部门下展示更新组织架构操作
    isShowSmartCampSync: function isShowSmartCampSync() {
      return this.isSmartCamp && !this.assignSearchContent && !this.isRootDepart;
    },
    //是否为根部门
    isRootDepart: function isRootDepart() {
      return this.isRootDepartMap[this.topNodeUid];
    }
  },
  methods: {
    //组织架构区绑定滚动事件
    scrollEvent: function scrollEvent() {
      var that = this;
      var scrollItem = document.getElementsByClassName('ss-assign-menber-tree')[0];
      var scrollFunc = that.debounce(function () {
        var that = this;
        var scrollTop = scrollItem.scrollTop;
        var fixedScrollTop = 0;

        if (!that.assignSearchContent) {
          if (that.memberTree.length > that.visibleCount) {
            fixedScrollTop = scrollTop - scrollTop % that.treeItemHeight; //保证偏移量是每一项的整数

            that.start = Math.floor(scrollTop / that.treeItemHeight);
            that.$refs.treeBox.style.webkitTransform = "translate3d(0, ".concat(fixedScrollTop, "px, 0)");
            that.end = that.start + that.visibleCount;
            that.visiableTree = that.memberTree.slice(this.start, this.end);
          }
        }
      }, 10);
      scrollItem.addEventListener('scroll', scrollFunc);
    },
    //手动处理左边组织架构treeBox向上滚动的距离 height为纯数字
    treeBoxScrollFunc: function treeBoxScrollFunc(height) {
      if (Object.prototype.toString.call(height) == "[object Number]") {
        var that = this;
        var scrollItem = document.getElementsByClassName('ss-assign-menber-tree')[0];
        var scrollTop = scrollItem.scrollTop = height; //height为具体的数字

        var fixedScrollTop = scrollTop - scrollTop % that.treeItemHeight; //保证偏移量是每一项的整数

        that.$refs.treeBox.style.webkitTransform = "translate3d(0, ".concat(fixedScrollTop, "px, 0)");
      }
    },
    //防抖操作
    debounce: function debounce(func, wait, immediate) {
      var timeout;
      var that = this;
      return function () {
        var context = that,
            args = arguments;

        var later = function later() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };

        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    },
    //初始化函数
    initFunction: function initFunction() {
      var that = this;
      that.assignSearchContent = ''; //搜索字段置空

      that.memberTree = [{}]; //左边的组织结构

      that.choseList = []; //右边选中的人员列表

      that.topNodeUid = ''; //当前展示的组织架构的部门id

      that.visibleCount = Math.ceil(that.treeHeight / that.treeItemHeight) + 2; //+2 为了弥补部门标题和全部的占位  

      that.searchDebounce = that.debounce(that.searchMember, 300);
    },
    getTreeStruct: function getTreeStruct() {
      var that = this;
      var departParams = {
        department_id: 1,
        app_id: window.__app_id
      };
      that.isLoading = true;
      http_get('/training_api/address_book/direct/index', departParams).then(function (treeStructResponse) {
        if (treeStructResponse.code === 0) {
          var data = treeStructResponse.data;
          var nav = {};
          nav.name = data.current.name;
          nav.department_id = data.current.department_id;
          that.navList.push(nav); //组装数据

          that.handleConstructData(data);
          that.$emit('getTreeSuccessEvent');
        } else {
          that.$message.error(treeStructResponse.msg);
        }

        that.isLoading = false;
      });
    },
    //点击进入下一级部分的组织结构
    clickToNextLevel: function clickToNextLevel(item, isNavClick) {
      var that = this; //将组织架构区域的滚动高度重置为0

      that.treeBoxScrollFunc(0); //非面包屑点击

      if (!isNavClick) {
        if (that.checkedMap[item.cid]) {
          return;
        }

        var nav = {};
        nav.name = item.name;
        nav.department_id = item.department_id;
        that.navList.push(nav);
      } //先判断allDepartmentTreeMap是否有缓存当前部门的树结构，特殊场景isCacheTree=false需要每次拉取


      if (!that.allDepartmentTreeMap[item.department_id] || !that.isCacheTree) {
        //重新获取
        var departParams = {
          department_id: item.department_id,
          app_id: window.__app_id
        };
        that.isLoading = true;
        http_get('/training_api/address_book/direct/index', departParams).then(function (treeResponse) {
          if (treeResponse.code === 0) {
            //组装数据
            that.handleConstructData(treeResponse.data);
          } else {
            that.$message.error(treeResponse.msg);
          }

          that.isLoading = false;
        });
      } else {
        that.topNodeUid = item.department_id; //对于可视框内的数据处理

        that.memberTree = that.allDepartmentTreeMap[item.department_id];
        that.start = 0;
        that.end = that.start + that.visibleCount;
        that.visiableTree = that.memberTree.slice(that.start, that.end); //判断全选按钮的勾选状态

        that.allCheckedStateFunc();
      }
    },
    //数据处理
    handleConstructData: function handleConstructData(newData) {
      var that = this;
      var data = newData; //左边展示结构树(该部门下的子部门加上人)

      if (that.isShowUsers) {
        that.memberTree = data.dept.concat(data.users);
      } else {
        that.memberTree = data.dept;
      }

      that.topNodeUid = data.current.department_id; ///对于可视框内的数据处理

      that.start = 0;
      that.end = that.start + that.visibleCount;
      that.visiableTree = that.memberTree.slice(that.start, that.end); //保存当前部门下面的人员架构，同时也保存勾选状态

      that.allDepartmentTreeMap[data.current.department_id] = that.memberTree;
      that.isRootDepartMap[data.current.department_id] = data.current.parent_id == 0 ? true : false; //判断全选按钮的勾选状态

      that.allCheckedStateFunc();
    },
    //暴露出的获取已经指派的人员的列表
    getAssignedUserList: function getAssignedUserList(params) {
      var that = this,
          url = "",
          successMsg = "";

      if (that.assignType == 'course') {
        url = that.courseAssignedUrl;
        successMsg = '获取可见范围成功';
      } else if (that.assignType == 'training') {
        url = that.trainingAssignedUrl;
        successMsg = '获取指派人员成功';
      } else if (that.assignType == 'department') {
        url = that.departmentAssignedUrl;
      } else if (that.assignType == 'employee') {
        url = that.employeeAssignedUrl;
      }

      that.isLoading = true;
      http_get(url, params).then(function (res) {
        if (res.code == 0) {
          var is_all = false;

          if (that.assignType == 'department') {
            var depts = [];

            for (var key in res.data) {
              depts = depts.concat(res.data[key]);
            } //取出相同的部门（选取两个人及以上）


            if (depts.length > 1 && params.user_ids.length > 1) {
              that.assignedUserList = that.getSame(depts);
            } else {
              that.assignedUserList = depts;
            }

            that.choseList = that.assignedUserList.splice(0); //同步勾选状态

            that.choseList.forEach(function (item) {
              item.type = 'department';
              that.checkedMap[item.cid] = true;
            });
          } else {
            //放入已经指派的所有人员的cid，同步左边组织结构的勾选状态
            var assignedIds = res.data.ids; //同步左边勾选状态

            assignedIds.forEach(function (item) {
              that.checkedMap[item] = true;
            });
            console.log(that.choseList, "判断是否需要去重"); //同步到右边列表中

            if (res.data && res.data.is_all) {
              is_all = true;
              that.assignedUserList = [];
            } else {
              is_all = false;
              that.assignedUserList = res.data.list;
            }

            that.choseList = that.choseList.concat(that.assignedUserList);
          }

          that.$emit('getAssignedSuccessEvent', that.choseList, is_all); //需要根据当前勾选的值判断全选是否高亮

          if (that.choseList.length > 0) {
            //判断全选按钮的勾选状态
            that.allCheckedStateFunc();
          }
        } else {
          that.$message.error(res.msg);
          that.$emit('getAssignedFailEvent', res.msg);
        }

        that.isLoading = false;
      });
    },
    //去重
    unique: function unique(arr) {
      for (var i = 0, temp = {}, result = [], ci; ci = arr[i++];) {
        var ordid = ci.cid;

        if (temp[ordid]) {
          continue;
        }

        temp[ordid] = true;
        result.push(ci);
      }

      return result;
    },
    //取出相同的
    getSame: function getSame(arr) {
      for (var i = 0, temp = {}, result = [], ci; ci = arr[i++];) {
        var ordid = ci.cid;

        if (temp[ordid]) {
          result.push(ci);
          continue;
        }

        temp[ordid] = true;
      }

      return result;
    },
    closeFunc: function closeFunc() {
      this.isShowDialog = false;
      this.$emit('closeEvent');
    },
    //左边底部按钮点击函数
    cancleFunc: function cancleFunc() {
      this.isShowDialog = false;
      this.$emit('cancleEvent');
    },
    //右边底部确定按钮点击函数
    confirmFunc: function confirmFunc() {
      if (!this.hasClicked) {
        this.hasClicked = true;
        this.$emit('confirmEvent', this.choseList);
      }
    },
    //搜索部门或者人员
    searchMember: function searchMember() {
      var that = this;

      if (!this.assignSearchContent) {
        return;
      }

      var params = {
        name: that.assignSearchContent,
        type: that.searchType
      };
      that.isLoading = true;
      http_get('/training_api/address_book/search', params).then(function (res) {
        if (res.code == 0) {
          var data = res.data;

          if (data.department && data.user) {
            that.serachTreeResult = data.department.list.concat(data.user.list);
          }
        } else {
          that.$message.error(res.msg);
        }

        that.isLoading = false;
      });
    },
    //点击回到上一个部门
    getDepartmentTree: function getDepartmentTree(navItem, navIndex) {
      var that = this; //将全选状态置为false

      that.allChecked = false;
      that.navList = that.navList.slice(0, navIndex + 1);
      that.clickToNextLevel(navItem, true);
    },
    //右边去掉人 左边原树先同步，再生成搜索树
    deleteChoice: function deleteChoice(item, index) {
      this.choseList.splice(index, 1); //勾选状态发生改变(true表示需要手动更新勾选状态)

      this.changeChecked(item, true);
      this.$emit('deleteEvent', item);
    },
    //提供给外部的删除接口（删除单个）
    deleteSingle: function deleteSingle(params) {
      this.changeChecked(params, true);
    },
    //提供给外部的删除接口（删除所有）
    deleteAll: function deleteAll() {
      this.choseList = [];
      this.allChecked = false;

      for (var key in this.checkedMap) {
        this.checkedMap[key] = false;
      }
    },
    //判断全选按钮的勾选状态
    allCheckedStateFunc: function allCheckedStateFunc() {
      var that = this; //需要根据当前勾选的值判断全选是否高亮

      var selectedItems = that.memberTree.filter(function (menberItem) {
        return that.checkedMap[menberItem.cid];
      });

      if (that.memberTree.length && selectedItems.length == that.memberTree.length) {
        that.allChecked = true;
      } else {
        that.allChecked = false;
      }
    },
    //全部的勾选状态改变
    changeAllChecked: function changeAllChecked(value) {
      var that = this; //同步全选按钮下面组织结构的勾选状态

      if (value) {
        var deleteItem = []; //全选按钮勾选  department_id  parent_id(同步右边选中人员状态)

        that.choseList.forEach(function (choseItem) {
          //后来从左边tree中选中的人
          if (choseItem.parent_id) {
            if (choseItem.parent_id == that.topNodeUid) {
              deleteItem.push(choseItem.cid);
            } //上一次指派的人  depts为标识

          } else if (choseItem.depts && choseItem.depts.length) {
            if (choseItem.depts.join("-").split("-").indexOf(that.topNodeUid) > -1) {
              deleteItem.push(choseItem.cid);
            }
          }
        }); //右边选中人员的更新
        //1.掉子部门和子人员(先删掉原来单选的user或者子department(包括上一次指派和后来从左边tree选中的))
        //2.将当前左边的组织移入右边

        that.choseList = that.choseList.filter(function (cItem) {
          return deleteItem.indexOf(cItem.cid) == -1;
        });
        that.choseList = that.choseList.concat(that.memberTree); //同步左边勾选状态

        that.treeIds = [];
        that.memberTree.forEach(function (item) {
          that.treeIds.push(item.cid);
          that.checkedMap[item.cid] = true;
        });
        console.timeEnd("test");
      } else {
        //右边选中人员的更新
        that.choseList = that.choseList.filter(function (choseItem) {
          return that.treeIds.indexOf(choseItem.cid) == -1;
        }); //同步左边勾选状态

        that.memberTree.forEach(function (item) {
          that.checkedMap[item.cid] = false;
        });
      }
    },
    //改变选择状态  isSearchChecked表示是否为搜索结果中的点击事件
    changeChecked: function changeChecked(item, isSearchChecked) {
      var that = this;
      var deleteItem = []; //搜索列表中的点击事件，外部的删除事件，that.checkedMap需要手动更新

      if (isSearchChecked) {
        that.checkedMap[item.cid] = that.checkedMap[item.cid] ? false : true;
      }

      if (that.checkedMap[item.cid]) {
        //选中部门时，需要判断左边是否有单个的人存在这个部门下，如果有，需要选中部门，删掉单独选中的人
        if (item.type == 'department') {
          that.choseList.forEach(function (currentItem, index) {
            //表示不是上一次指派的
            if (currentItem.uid) {
              //部门链中包含当前勾选的部门，需要从右边删除
              if (currentItem.uid.split("-").indexOf(item.department_id) > -1) {
                deleteItem.push(currentItem.cid);
                that.checkedMap[currentItem.cid] = false; //同时取消左边的勾选状态
              }
            } else if (currentItem.depts) {
              //上一次指派的人属于当前勾选的部门
              if (currentItem.depts.join("-").split("-").indexOf(item.department_id) > -1) {
                deleteItem.push(currentItem.cid);
                that.checkedMap[currentItem.cid] = false; //同时取消左边的勾选状态
              }
            }
          });
        }

        if (deleteItem.length) {
          //右边数据更新，删掉子部门和子人员
          that.choseList = that.choseList.filter(function (choseItem) {
            return deleteItem.indexOf(choseItem.cid) == -1;
          });
        } //勾选的数据放入右边展示


        that.choseList.push(item);
      } else {
        that.choseList.forEach(function (choseItem, index) {
          if (choseItem.cid == item.cid) {
            that.choseList.splice(index, 1);
          }
        });
      } //同步是否全选的勾选框状态


      that.allCheckedStateFunc();
    },
    //最终下发授权的操作,params为最终的传参
    authorizeEvent: function authorizeEvent(params) {
      var url = "",
          successMsg = "",
          that = this,
          users = [],
          departments = [];
      that.choseList.forEach(function (item) {
        if (item.type == 'department') {
          departments.push(item.cid);
        } else if (item.type == 'user') {
          users.push(item.cid);
        }
      }); //课程授权

      if (that.assignType == "course") {
        url = that.courseAuthorizeUrl;
        successMsg = '设置可见范围成功';
        params.auth_type = 0; //0 普通授权  1 全体授权

        params.auth_users = users;
        params.auth_departments = departments; //训练营授权
      } else if (that.assignType == "training") {
        url = that.trainingAuthorizeUrl;
        successMsg = '设置可见范围成功';
        params.assign_users = users;
        params.assign_departments = departments;
      }

      post(url, params).then(function (res) {
        if (res.code == 0) {
          that.$emit('authorizedSuccessEvent', successMsg);
        } else {
          that.$emit('authorizedFailEvent', res.msg);
        }
      });
    },
    //课程课件范围的全部可见授权操作
    allAuthorizeEvent: function allAuthorizeEvent(params) {
      var that = this,
          successMsg = '设置可见范围成功';
      var url = that.courseAuthorizeUrl;
      params.auth_type = 1;
      post(url, params).then(function (res) {
        if (res.code == 0) {
          that.$emit('authorizedSuccessEvent', successMsg);
        } else {
          that.$emit('authorizedFailEvent', res.msg);
        }
      });
    },
    //课程不授权的操作，页面无选项
    noneAuthorizeEvent: function noneAuthorizeEvent(params) {
      var that = this,
          successMsg = '设置可见范围成功';
      var url = that.courseAuthorizeUrl;
      params.auth_type = 0;
      params.auth_users = [];
      params.auth_departments = [];
      post(url, params).then(function (res) {
        if (res.code == 0) {
          that.$emit('authorizedSuccessEvent', successMsg);
        } else {
          that.$emit('authorizedFailEvent', res.msg);
        }
      });
    },
    //该组件的展示
    show: function show() {
      var that = this;
      that.isShowDialog = true; //再次进入弹框可以进行确认操作

      that.hasClicked = false;

      if (!that.allDepartmentTreeMap[that.topNodeUid]) {
        //获取最外面一层的组织结构
        that.getTreeStruct();
      }
    },
    //该组件的隐藏
    hide: function hide() {
      var that = this;
      that.isShowDialog = false;
    },
    //获取某个部门下面的组织结构
    getSpecificDepetTree: function getSpecificDepetTree(departParams) {
      var that = this;
      that.isLoading = true; //将组织架构区域的滚动高度重置为0,回到起点状态

      that.treeBoxScrollFunc(0);
      http_get('/training_api/address_book/direct/index', departParams).then(function (treeResponse) {
        if (treeResponse.code === 0) {
          //组装数据
          that.handleConstructData(treeResponse.data);
        } else {
          that.$message.error(treeResponse.msg);
        }

        that.isLoading = false;
      });
    },
    //智慧校园同步账号
    syncAccountSmartCapm: function syncAccountSmartCapm() {
      var that = this;
      var params = {
        "department_id": that.topNodeUid
      };
      that.isLoading = true;
      http_get(that.asyncSmartCampUrl, params).then(function (res) {
        //等于0要刷新当前组织架构列表
        if (res.code === 0) {
          that.$message.info(res.msg);
          var departParams = {
            department_id: that.topNodeUid,
            app_id: window.__app_id
          };
          that.getSpecificDepetTree(departParams); //其他情况下进行提示即可
        } else {
          that.$message.warning(res.msg);
        }

        that.isLoading = false;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/assignModal/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_assignModalvue_type_script_lang_js_ = (assignModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/assignModal/index.vue?vue&type=style&index=0&lang=scss&
var assignModalvue_type_style_index_0_lang_scss_ = __webpack_require__(85);

// EXTERNAL MODULE: ./src/components/assignModal/index.vue?vue&type=style&index=1&id=54c1a194&scoped=true&lang=scss&
var assignModalvue_type_style_index_1_id_54c1a194_scoped_true_lang_scss_ = __webpack_require__(86);

// CONCATENATED MODULE: ./src/components/assignModal/index.vue







/* normalize component */

var assignModal_component = normalizeComponent(
  components_assignModalvue_type_script_lang_js_,
  assignModalvue_type_template_id_54c1a194_scoped_true_render,
  assignModalvue_type_template_id_54c1a194_scoped_true_staticRenderFns,
  false,
  null,
  "54c1a194",
  null
  
)

/* harmony default export */ var assignModal = (assignModal_component.exports);
// CONCATENATED MODULE: ./libEntry/install/assign-modal/index.js


assignModal.install = function (Vue) {
  Vue.component(assignModal.name, assignModal);
};

/* harmony default export */ var assign_modal = (assignModal);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/authModal/index.vue?vue&type=template&id=f0ad1a92&scoped=true&
var authModalvue_type_template_id_f0ad1a92_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"dialog"}},[_c('section',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowDialog),expression:"isShowDialog"}],staticClass:"ss-auth-bg ss-auth-dialog"},[_c('div',{staticClass:"ss-select-popup"},[_c('div',{staticClass:"ss-dialog-header"},[_vm._v("\n                    "+_vm._s(_vm.title)+"\n                    "),_c('i',{staticClass:"ss-close-btn sense-icon-close",on:{"click":function($event){$event.stopPropagation();return _vm.closeFunc()}}})]),_c('div',{staticClass:"ss-dialog-content"},[_c('div',{staticClass:"ss-mian-content"},[_c('div',{staticClass:"ss-assign-menber-box"},[_c('div',{staticClass:"ss-assign-menber-tree-wrapper"},[_c('div',{staticClass:"ss-assign-search-menber"},[_c('i',{staticClass:"icon-icon_search font_family"}),_c('input',{directives:[{name:"model",rawName:"v-model.trim",value:(_vm.assignSearchContent),expression:"assignSearchContent",modifiers:{"trim":true}}],staticClass:"ss-assign-search-menber-input",attrs:{"placeholder":_vm.placeholderText,"prefix-icon":"el-icon-search"},domProps:{"value":(_vm.assignSearchContent)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.assignSearchContent=$event.target.value.trim()},_vm.searchDebounce],"blur":function($event){return _vm.$forceUpdate()}}})]),_c('div',{staticClass:"ss-assign-menber-tree"},[(_vm.isLoading)?_c('loading'):_vm._e(),(!_vm.assignSearchContent)?_c('div',{staticClass:"ss-treeTop",style:({ height: _vm.memberTree.length * 40 + 'px' })}):_vm._e(),(!_vm.assignSearchContent)?_c('div',{ref:"treeBox"},[(_vm.navList.length&&_vm.start==0)?_c('div',{ref:"breadNav",staticClass:"ss-bread-nav"},_vm._l((_vm.navList),function(navItem,navIndex){return _c('span',{key:navIndex},[_c('span',{staticClass:"ss-navItem",class:{'active':_vm.topNodeUid==navItem.department_id},on:{"click":function($event){return _vm.getDepartmentTree(navItem,navIndex)}}},[_c('name-replacer',{attrs:{"id":navItem.department_id,"type":"1","name":navItem.name}})],1),_c('span',{directives:[{name:"show",rawName:"v-show",value:(navIndex!=_vm.navList.length-1),expression:"navIndex!=navList.length-1"}],staticClass:"ss-bread-separator"},[_vm._v("/")])])}),0):_vm._e(),_c('div',{staticClass:"ss-org-tree"},[(_vm.start==0)?_c('div',{staticClass:"ss-org-tree-item ss-allchecked"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.allChecked),expression:"allChecked"}],ref:"treeinput",staticClass:"ss-filled-in",attrs:{"type":"checkbox","id":"checkbox","disabled":_vm.isDisabledDialog},domProps:{"checked":Array.isArray(_vm.allChecked)?_vm._i(_vm.allChecked,null)>-1:(_vm.allChecked)},on:{"change":[function($event){var $$a=_vm.allChecked,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.allChecked=$$a.concat([$$v]))}else{$$i>-1&&(_vm.allChecked=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.allChecked=$$c}},function($event){return _vm.changeAllChecked(_vm.allChecked)}]}}),_c('label',{staticClass:"ss-firstIndexLabel",attrs:{"for":"checkbox"}},[_vm._v("全部")])]):_vm._e(),_vm._l((_vm.visiableTree),function(item,index){return _c('div',{key:index,ref:"treeItem",refInFor:true,staticClass:"ss-org-tree-item"},[_c('div',{staticClass:"ss-item-box"},[_c('div',{staticClass:"ss-org-tree-item-name"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.checkedMap[item.cid]),expression:"checkedMap[item.cid]"}],ref:"treeinput",refInFor:true,staticClass:"ss-filled-in",attrs:{"type":"checkbox","disabled":_vm.disabledCheckedFunc(item),"id":("checkbox" + (item.uid))},domProps:{"value":item.cid,"checked":Array.isArray(_vm.checkedMap[item.cid])?_vm._i(_vm.checkedMap[item.cid],item.cid)>-1:(_vm.checkedMap[item.cid])},on:{"change":[function($event){var $$a=_vm.checkedMap[item.cid],$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=item.cid,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.checkedMap, item.cid, $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.checkedMap, item.cid, $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.checkedMap, item.cid, $$c)}},function($event){return _vm.changeChecked(item,false)}]}}),_c('label',{staticClass:"ss-firstIndexLabel",attrs:{"for":("checkbox" + (item.uid))}},[(item.type=='user')?_c('span',[_c('name-replacer',{attrs:{"id":item.employee_id,"type":"0","name":item.name}})],1):_c('span',[_c('name-replacer',{attrs:{"id":item.department_id,"type":"1","name":item.name}})],1),(item.type=='department'&&_vm.isShowDeptNums)?_c('span',[_vm._v("("+_vm._s(item.user_num)+")")]):_vm._e()])]),(item.type=='department')?_c('div',{staticClass:"ss-next-level"},[_c('span',{staticClass:"sense-icon_distribute",class:{'active':!_vm.checkedMap[item.cid]}}),_c('span',{staticClass:"ss-levelIcon",class:{'ss-levelDisabled':_vm.checkedMap[item.cid]},on:{"click":function($event){return _vm.clickToNextLevel(item)}}},[_vm._v("下级")])]):_vm._e()])])}),(_vm.isScrollLoading)?_c('div',{staticClass:"ss-loading-msg"},[_vm._v("加载中")]):_vm._e()],2)]):_vm._e(),(_vm.assignSearchContent)?_c('div',{ref:"searchBox",staticClass:"ss-org-tree search-tree"},_vm._l((_vm.serachTreeResult),function(item,index){return _c('div',{key:index,staticClass:"ss-org-tree-item"},[_c('div',{staticClass:"ss-item-box"},[_c('div',{staticClass:"ss-org-tree-item-name"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.checkedMap[item.cid]),expression:"checkedMap[item.cid]"}],ref:"treeinput",refInFor:true,staticClass:"ss-filled-in",attrs:{"type":"checkbox","disabled":_vm.disabledCheckedFunc(item),"id":("checkbox" + (item.cid))},domProps:{"value":item.cid,"checked":Array.isArray(_vm.checkedMap[item.cid])?_vm._i(_vm.checkedMap[item.cid],item.cid)>-1:(_vm.checkedMap[item.cid])},on:{"change":[function($event){var $$a=_vm.checkedMap[item.cid],$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=item.cid,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.checkedMap, item.cid, $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.checkedMap, item.cid, $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.checkedMap, item.cid, $$c)}},function($event){return _vm.changeChecked(item,false,true)}]}}),_c('label',{staticClass:"ss-firstIndexLabel",attrs:{"for":("checkbox" + (item.cid))}},[(item.type=='user')?_c('span',[_c('name-replacer',{attrs:{"id":item.employee_id,"type":"0","name":item.name}})],1):_c('span',[_c('name-replacer',{attrs:{"id":item.department_id,"type":"1","name":item.name}})],1),(item.type=='department'&&_vm.isShowDeptNums)?_c('span',[_vm._v("("+_vm._s(item.user_num)+")")]):_vm._e()])])])])}),0):_vm._e()],1),(_vm.isShowSmartCampSync)?_c('div',{staticClass:"ss-smartCampSync"},[_c('span',[_vm._v("没有找到用户？")]),_c('span',{on:{"click":_vm.syncAccountSmartCapm}},[_vm._v("更新当前组织架构")])]):_vm._e()]),_c('div',{staticClass:"ss-assign-menber-list-wrapper"},[_c('div',{staticClass:"ss-assign-menber-list"},[(_vm.showAuthEmptyMsg)?_c('div',{staticClass:"ss-selected-msg-empty"},[_vm._v("已选择0人")]):_vm._e(),_vm._l((_vm.choseList),function(item,index){return _c('div',{key:index,staticClass:"ss-assign-choice-wrapper",class:{'ss-hideClass':(!_vm.isShowLastSelected&&item.isLastSelected)}},[(item.type=='user')?_c('span',[_c('name-replacer',{attrs:{"id":item.employee_id,"type":"0","name":item.name}})],1):_c('span',[_c('name-replacer',{attrs:{"id":item.department_id,"type":"1","name":item.name}})],1),(item.type=='department'&&_vm.isShowDeptNums)?_c('span',[_vm._v("("+_vm._s(item.user_num)+")")]):_vm._e(),(_vm.isShowDeleteIcon)?_c('span',{staticClass:"ss-delete-item-icon sense-icon-close",on:{"click":function($event){return _vm.deleteChoice(item,index)}}}):_vm._e()])})],2)])])])]),_c('div',{staticClass:"ss-dialog-footer"},[_c('button',{staticClass:"ss-cancel-btn",on:{"click":_vm.cancleFunc}},[_vm._v(_vm._s(_vm.leftButtonText))]),_c('button',{staticClass:"ss-confirm-btn",class:{'ss-is-disabled':_vm.isDisabledDialog||_vm.hasClicked},on:{"click":_vm.confirmFunc}},[_vm._v(_vm._s(_vm.rightButtonText))])])])])])}
var authModalvue_type_template_id_f0ad1a92_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/authModal/index.vue?vue&type=template&id=f0ad1a92&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/authModal/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var authModalvue_type_script_lang_js_ = ({
  name: 'SsAuthModal',
  props: {
    //搜索方式 all-全部，employee-成员，department-部门，默认全部搜索
    searchType: {
      type: String,
      default: 'all'
    },
    //指派类型，课程 course, 培训计划 training ,
    //修改成员所属部门 department ,人员授权 employee
    //其他类型的调用   common
    assignType: {
      type: String,
      default: 'course'
    },
    //获取上一次已经选择了的人员或者是部门列表url
    assignedListCommonUrl: {
      type: String,
      default: ''
    },
    //弹出框的标题
    title: {
      type: String,
      default: '指派设置'
    },
    //搜索框的文案
    placeholderText: {
      type: String,
      default: '请输入部门或者人员'
    },
    //左边按钮文案
    leftButtonText: {
      type: String,
      default: '取消'
    },
    //右边按钮文案
    rightButtonText: {
      type: String,
      default: '确定'
    },
    //是否展示学员
    isShowUsers: {
      type: Boolean,
      default: true
    },
    //是否为智慧校园
    isSmartCamp: {
      type: Boolean,
      default: false
    },
    //是否展示上次所选择的列表
    isShowLastSelected: {
      type: Boolean,
      default: true
    },
    //是否禁用上次选择的列表
    isDisabledLastSelected: {
      type: Boolean,
      default: false
    },
    //是否展示每个部门后面对应的部门人数
    isShowDeptNums: {
      type: Boolean,
      default: true
    },
    //是否禁用整个弹出框，只用于查看授权的人
    isDisabledDialog: {
      type: Boolean,
      default: false
    },
    //是否展示删除人员的xx
    isShowDeleteIcon: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      assignSearchContent: '',
      //搜索人员字段
      memberTree: [{}],
      //左边的组织结构列表
      choseList: [],
      //选中的人员列表
      topNodeUid: '1',
      //当前展示的部门的id
      navList: [],
      //面包屑列表
      allDepartmentTreeMap: {},
      //所有的部门下面对应的树结构的保存，避免每次都要请求，保证只请求一次
      checkedArr: [],
      //选中的人的cid集合，用于checkbox的绑定
      allChecked: false,
      //全选框的按钮状态
      isShowDialog: false,
      //默认展示弹出框
      courseAuthorizeUrl: '/training_api/v2/privilege/resource/auth',
      //最终授权课程的api路径
      trainingAuthorizeUrl: '/training_api/v2/privilege/resource/assign',
      //最终授权训练营的api路径
      courseAssignedUrl: '/training_api/v2/privilege/resource/auth',
      //获取课程已经指派人员的api路径
      trainingAssignedUrl: '/training_api/v2/privilege/resource/assign',
      //获取训练营已经指派人员的api路径
      departmentAssignedUrl: '/training_api/v2/employee/info.department',
      //获取训练营已经指派人员的api路径
      employeeAssignedUrl: '/training_api/v2/privilege/employee/auth',
      isLoading: false,
      //loading
      assignedUserList: [],
      //已经分配的人员列表
      serachTreeResult: [],
      //搜索列表
      //新加的
      visiableTree: [],
      //可见的组织架构树
      start: 0,
      //可见范围内组织架构的开始下标
      end: null,
      //可见范围内组织架构的结束下标
      visibleCount: 0,
      //可见范围内展示多少条数据
      visibleData: [],
      //可见范围内组织架构list
      treeIds: [],
      //当前部门下的所有部门和人员的cid集合
      checkedMap: {},
      //保存组织架构的勾选状态
      treeItemHeight: 40,
      spareHeight: 92,
      //breadNav 52 + treeItemHeight 40
      treeHeight: 400,
      asyncSmartCampUrl: '/smart_campus/campus/sync_task',
      //智慧校园同步操作路径
      isRootDepartMap: {},
      //是否为根部门的缓存
      //滚动加载新加
      pageIndex: 1,
      //每次加载的页码数
      isScrollLoading: false,
      //是否正在滚动加载数据
      pageSize: 20,
      //滚动加载每次请求的数量
      total: 0,
      //memberTree部门加人员的zongshu
      lastUserId: "",
      //分页的lastId
      deptFlagMap: {},
      //用于存储每个部门下面需要记住的变量
      userTotal: 0,
      //当前部门下用户的总数
      disabledMap: {},
      //上一次勾选的禁用map
      cunrrentDepartArr: [],
      //当前部门下的子部门组合
      hasClicked: false //是否已经点击了最终的确认按钮

    };
  },
  watch: {
    assignSearchContent: function assignSearchContent(newVal, oldVal) {
      if (!newVal) {
        this.$nextTick(function () {
          this.start = 0;
          this.$refs.treeBox.style.webkitTransform = "translate3d(0, 0px, 0)";
          this.end = this.start + this.visibleCount;
          this.visiableTree = this.memberTree.slice(this.start, this.end);
        });
      }

      if (!oldVal && newVal) {
        this.serachTreeResult = [];
      }
    }
  },
  created: function created() {
    var that = this;
    that.initFunction();
  },
  mounted: function mounted() {
    this.$nextTick(function () {
      this.scrollEvent();
    });
  },
  components: {
    loading: loading,
    message: components_message,
    NameReplacer: nameReplacer
  },
  computed: {
    //智慧校园,非搜索状态且不是根部门下展示更新组织架构操作
    isShowSmartCampSync: function isShowSmartCampSync() {
      return this.isSmartCamp && !this.assignSearchContent && !this.isRootDepart;
    },
    //是否为根部门
    isRootDepart: function isRootDepart() {
      return this.isRootDepartMap[this.topNodeUid];
    },
    //授权进来初始化是否展示选择0人提示  
    showAuthEmptyMsg: function showAuthEmptyMsg() {
      return !this.isShowLastSelected && this.choseList.length <= this.assignedUserList.length;
    }
  },
  methods: {
    //禁用勾选框的函数
    disabledCheckedFunc: function disabledCheckedFunc(item) {
      //this.isDisabledLastSelected&&this.disabledMap[item.cid] 禁用上一次勾选的列表
      //this.isDisabledDialog禁用整个弹框，只做指派的展示用
      return this.isDisabledLastSelected && this.disabledMap[item.cid] || this.isDisabledDialog;
    },
    //组织架构区绑定滚动事件
    scrollEvent: function scrollEvent() {
      var that = this;
      var scrollItem = document.getElementsByClassName('ss-assign-menber-tree')[0];
      var minBottomHeight = 30; //距离底部多少像素开始加载

      var scrollBoxHeight = $(".ss-assign-menber-tree").height(); //滚动显示区的高度

      var scrollFunc = that.debounce(function () {
        var that = this;
        var scrollTop = scrollItem.scrollTop;
        var scrollContainerHeight = $(".ss-treeTop").height();
        var totalHeight = scrollBoxHeight + scrollTop + minBottomHeight; //滚动区+scrollTop

        if (!that.assignSearchContent) {
          if (that.memberTree.length > that.visibleCount) {
            var fixedScrollTop = scrollTop - scrollTop % that.treeItemHeight; //保证偏移量是每一项的整数

            that.start = Math.floor(scrollTop / that.treeItemHeight);
            that.$refs.treeBox.style.webkitTransform = "translate3d(0, ".concat(fixedScrollTop, "px, 0)");
            that.end = that.start + that.visibleCount;
            that.visiableTree = that.memberTree.slice(this.start, this.end);
          }

          if (scrollContainerHeight <= totalHeight) {
            if (!that.isScrollLoading && that.memberTree.length - that.cunrrentDepartArr.length < that.userTotal && that.lastUserId) {
              that.isScrollLoading = true;
              var params = {
                department_id: that.topNodeUid,
                app_id: window.__app_id,
                last_id: that.lastUserId
              }; //展示用户  要传type=all

              if (that.isShowUsers) {
                params.type = 'all';
              } else {
                params.type = 'dept';
              } //模拟分页api


              http_get('/training_api/address_book/get_list', params).then(function (res) {
                if (res.code == 0) {
                  var data = res.data;
                  that.lastUserId = data.ext.last_id;
                  that.memberTree = that.memberTree.concat(data.users);
                  that.isScrollLoading = false;
                } else {
                  that.$message.error(res.msg);
                }
              });
            }
          }
        }
      }, 20);
      scrollItem.addEventListener('scroll', scrollFunc);
    },
    //手动处理左边组织架构treeBox向上滚动的距离 height为纯数字
    treeBoxScrollFunc: function treeBoxScrollFunc(height) {
      if (Object.prototype.toString.call(height) == "[object Number]") {
        var that = this;
        var scrollItem = document.getElementsByClassName('ss-assign-menber-tree')[0];
        var scrollTop = scrollItem.scrollTop = height; //height为具体的数字

        var fixedScrollTop = scrollTop - scrollTop % that.treeItemHeight; //保证偏移量是每一项的整数

        that.$refs.treeBox.style.webkitTransform = "translate3d(0, ".concat(fixedScrollTop, "px, 0)");
      }
    },
    //防抖操作
    debounce: function debounce(func, wait, immediate) {
      var timeout;
      var that = this;
      return function () {
        var context = that,
            args = arguments;

        var later = function later() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };

        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    },
    //初始化函数
    initFunction: function initFunction() {
      var that = this;
      that.assignSearchContent = ''; //搜索字段置空

      that.memberTree = [{}]; //左边的组织结构

      that.choseList = []; //右边选中的人员列表

      that.topNodeUid = ''; //当前展示的组织架构的部门id

      that.visibleCount = Math.ceil(that.treeHeight / that.treeItemHeight) + 2; //+2 为了弥补部门标题和全部的占位  

      that.searchDebounce = that.debounce(that.searchMember, 300);
    },
    getTreeStruct: function getTreeStruct() {
      var that = this;
      var params = {
        department_id: 1,
        app_id: window.__app_id
      }; //展示用户  要传type=all

      if (that.isShowUsers) {
        params.type = 'all';
      } else {
        params.type = 'dept';
      }

      that.isLoading = true; //模拟分页api

      http_get('/training_api/address_book/get_list', params).then(function (res) {
        if (res.code == 0) {
          var data = res.data;
          var nav = {};
          nav.name = data.current.name;
          nav.department_id = data.current.department_id;
          that.navList.push(nav); //组装数据

          that.start = 0;
          that.lastUserId = data.ext.last_id;
          that.cunrrentDepartArr = data.dept;
          that.total = data.dept.length + data.ext.total;
          that.userTotal = data.ext.total;
          that.handleConstructData(data);
          that.$emit('getTreeSuccessEvent');
        } else {
          that.$message.error(res.msg);
        }

        that.isLoading = false;
      });
    },
    //点击进入下一级部分的组织结构
    clickToNextLevel: function clickToNextLevel(item, isNavClick) {
      var that = this; //将组织架构区域的滚动高度重置为0

      that.treeBoxScrollFunc(0); //非面包屑点击

      if (!isNavClick) {
        if (that.checkedMap[item.cid]) {
          return;
        }

        var nav = {};
        nav.name = item.name;
        nav.department_id = item.department_id;
        that.navList.push(nav);
      } //重新获取


      var departParams = {
        department_id: item.department_id,
        app_id: window.__app_id
      }; //展示用户  要传type=all

      if (that.isShowUsers) {
        departParams.type = 'all';
      } else {
        departParams.type = 'dept';
      }

      that.isLoading = true;
      http_get('/training_api/address_book/get_list', departParams).then(function (treeResponse) {
        if (treeResponse.code === 0) {
          //组装数据
          var data = treeResponse.data;
          that.start = 0;
          that.lastUserId = data.ext.last_id;
          that.cunrrentDepartArr = data.dept;
          that.total = data.dept.length + data.ext.total;
          that.userTotal = data.ext.total;
          that.handleConstructData(data);
        } else {
          that.$message.error(treeResponse.msg);
        }

        that.isLoading = false;
      });
    },
    //第一次获取部门数据处理
    handleConstructData: function handleConstructData(newData) {
      var that = this;
      var data = newData; //左边展示结构树(该部门下的子部门加上人)

      if (that.isShowUsers) {
        that.memberTree = data.dept.concat(data.users);
      } else {
        that.memberTree = data.dept;
      }

      that.topNodeUid = data.current.department_id; ///对于可视框内的数据处理

      that.end = that.start + that.visibleCount;
      that.visiableTree = that.memberTree.slice(that.start, that.end); //保存当前部门下面的人员架构，同时也保存勾选状态

      that.allDepartmentTreeMap[that.topNodeUid] = that.memberTree;
      that.isRootDepartMap[that.topNodeUid] = data.current.parent_id == 0 ? true : false; //初始化当前部门下面勾选的人数

      if (!that.deptFlagMap[that.topNodeUid]) {
        that.deptFlagMap[that.topNodeUid] = {};
        that.deptFlagMap[that.topNodeUid]['checkedCount'] = 0;
      } //判断全选按钮的勾选状态


      that.allCheckedStateFunc();
    },
    //暴露出的获取已经指派的人员的列表
    getAssignedUserList: function getAssignedUserList(params) {
      var that = this,
          url = "",
          successMsg = "";

      if (that.assignType == 'course') {
        url = that.courseAssignedUrl;
        successMsg = '获取可见范围成功';
      } else if (that.assignType == 'training') {
        url = that.trainingAssignedUrl;
        successMsg = '获取指派人员成功';
      } else if (that.assignType == 'department') {
        url = that.departmentAssignedUrl;
      } else if (that.assignType == 'employee') {
        url = that.employeeAssignedUrl;
      } else if (that.assignType == 'common') {
        url = that.assignedListCommonUrl;
      }

      that.isLoading = true;
      http_get(url, params).then(function (res) {
        if (res.code == 0) {
          var is_all = false;

          if (that.assignType == 'department') {
            var depts = [];

            for (var key in res.data) {
              depts = depts.concat(res.data[key]);
            } //取出相同的部门（选取两个人及以上）


            if (depts.length > 1 && params.user_ids.length > 1) {
              that.assignedUserList = that.getSame(depts);
            } else {
              that.assignedUserList = depts;
            }

            that.choseList = that.assignedUserList.splice(0); //同步勾选状态

            that.choseList.forEach(function (item) {
              item.type = 'department';
              that.checkedMap[item.cid] = true;
            });
          } else {
            //放入已经指派的所有人员的cid，同步左边组织结构的勾选状态
            var assignedIds = res.data.ids; //同步左边勾选状态

            assignedIds.forEach(function (item) {
              that.checkedMap[item] = true;
            }); //同步到右边列表中

            if (res.data && res.data.is_all) {
              is_all = true;
              that.assignedUserList = [];
            } else {
              is_all = false;
              that.assignedUserList = res.data.list; //对应部门下selectedCount++

              that.assignedUserList.forEach(function (assignItem) {
                //用于标识是否是上次勾选的
                assignItem.isLastSelected = true; //上次勾选禁用map

                that.disabledMap[assignItem.cid] = true;
                assignItem.depts.forEach(function (deptCombine) {
                  var arr = deptCombine.split("-"); //判断是that.deptFlagMap对应否存在

                  if (that.deptFlagMap[arr[arr.length - 1]]) {
                    that.deptFlagMap[arr[arr.length - 1]].checkedCount++;
                  } else {
                    that.deptFlagMap[arr[arr.length - 1]] = {
                      checkedCount: 1
                    };
                  }
                });
              });
            }

            that.choseList = that.choseList.concat(that.assignedUserList);
          }

          that.$emit('getAssignedSuccessEvent', that.choseList, is_all); //需要根据当前勾选的值判断全选是否高亮

          if (that.choseList.length > 0) {
            //判断全选按钮的勾选状态
            that.allCheckedStateFunc();
          }
        } else {
          that.$message.error(res.msg);
          that.$emit('getAssignedFailEvent', res.msg, res);
        }

        that.isLoading = false;
      });
    },
    //用于手动保存上一次选中的人员列表
    manualGetSelected: function manualGetSelected(params) {
      var that = this; //放入已经指派的所有人员的cid，同步左边组织结构的勾选状态

      var assignedIds = params.ids; //同步左边勾选状态

      assignedIds.forEach(function (item) {
        that.checkedMap[item] = true;
      });
      that.assignedUserList = params.list; //对应部门下selectedCount++

      that.assignedUserList.forEach(function (assignItem) {
        //用于标识是否是上次勾选的
        assignItem.isLastSelected = true; //上次勾选禁用map

        that.disabledMap[assignItem.cid] = true; //上一次勾选的是部门

        if (assignItem.type == 'department') {
          //单独勾选部门时 勾选部门下的checkedCount置为0
          if (that.deptFlagMap[assignItem.department_id]) {
            that.deptFlagMap[assignItem.department_id].checkedCount = 0; //部门勾选，相当于部门内部的勾选状态全部取消
          } else {
            that.deptFlagMap[assignItem.department_id] = {};
            that.deptFlagMap[assignItem.department_id].checkedCount = 0; //部门勾选，相当于部门内部的勾选状态全部取消
          } //该部门所在部门下的勾选人数+1


          if (that.deptFlagMap[assignItem.parent_id]) {
            that.deptFlagMap[assignItem.parent_id].checkedCount++;
          } else {
            that.deptFlagMap[assignItem.parent_id] = {};
            that.deptFlagMap[assignItem.parent_id].checkedCount = 1;
          }
        } else {
          //从右边勾选过来的人
          if (assignItem.uid) {
            if (that.deptFlagMap[assignItem.parent_id]) {
              that.deptFlagMap[assignItem.parent_id].checkedCount++;
            } else {
              that.deptFlagMap[assignItem.parent_id] = {};
              that.deptFlagMap[assignItem.parent_id].checkedCount = 1;
            }
          } else if (assignItem.depts && assignItem.depts.length) {
            assignItem.depts.forEach(function (deptCombine) {
              var arr = deptCombine.split("-");

              if (that.deptFlagMap[arr[arr.length - 1]]) {
                that.deptFlagMap[arr[arr.length - 1]].checkedCount++;
              } else {
                that.deptFlagMap[arr[arr.length - 1]] = {};
                that.deptFlagMap[arr[arr.length - 1]].checkedCount = 1;
              }
            });
          }
        }
      });
      that.choseList = that.choseList.concat(that.assignedUserList); //需要根据当前勾选的值判断全选是否高亮

      if (that.choseList.length > 0) {
        //判断全选按钮的勾选状态
        that.allCheckedStateFunc();
      }
    },
    //去重
    unique: function unique(arr) {
      for (var i = 0, temp = {}, result = [], ci; ci = arr[i++];) {
        var ordid = ci.cid;

        if (temp[ordid]) {
          continue;
        }

        temp[ordid] = true;
        result.push(ci);
      }

      return result;
    },
    //取出相同的
    getSame: function getSame(arr) {
      for (var i = 0, temp = {}, result = [], ci; ci = arr[i++];) {
        var ordid = ci.cid;

        if (temp[ordid]) {
          result.push(ci);
          continue;
        }

        temp[ordid] = true;
      }

      return result;
    },
    closeFunc: function closeFunc() {
      this.isShowDialog = false;
      this.$emit('closeEvent');
    },
    //左边底部按钮点击函数
    cancleFunc: function cancleFunc() {
      this.isShowDialog = false;
      this.$emit('cancleEvent');
    },
    //右边底部确定按钮点击函数
    confirmFunc: function confirmFunc() {
      if (!this.isDisabledDialog && !this.hasClicked) {
        this.hasClicked = true;
        var selectedParams = {
          topNodeUid: this.topNodeUid,
          allChecked: this.allChecked
        };
        this.$emit('confirmEvent', this.choseList, selectedParams);
      }
    },
    //搜索部门或者人员
    searchMember: function searchMember() {
      var that = this;

      if (!this.assignSearchContent) {
        return;
      }

      var params = {
        name: that.assignSearchContent,
        type: that.searchType
      };
      that.isLoading = true;
      http_get('/training_api/address_book/search', params).then(function (res) {
        if (res.code == 0) {
          var data = res.data;

          if (data.department && data.user) {
            that.serachTreeResult = data.department.list.concat(data.user.list);
          }
        } else {
          that.$message.error(res.msg);
        }

        that.isLoading = false;
      });
    },
    //点击回到上一个部门
    getDepartmentTree: function getDepartmentTree(navItem, navIndex) {
      var that = this; //将全选状态置为false

      that.allChecked = false;
      that.navList = that.navList.slice(0, navIndex + 1);
      that.clickToNextLevel(navItem, true);
    },
    //右边去掉人 左边原树先同步，再生成搜索树
    deleteChoice: function deleteChoice(item, index) {
      this.choseList.splice(index, 1); //勾选状态发生改变(true表示需要手动更新勾选状态)

      this.changeChecked(item, true);
      this.$emit('deleteEvent', item);
    },
    //提供给外部的删除接口（删除单个）
    deleteSingle: function deleteSingle(params) {
      this.changeChecked(params, true);
    },
    //提供给外部的删除接口（删除所有）
    deleteAll: function deleteAll() {
      this.choseList = [];
      this.allChecked = false;

      for (var key in this.checkedMap) {
        this.checkedMap[key] = false;
      }
    },
    //判断全选按钮的勾选状态
    allCheckedStateFunc: function allCheckedStateFunc() {
      var that = this;

      if (!that.topNodeUid) {
        return;
      } //需要根据当前勾选的值判断全选是否高亮


      if (that.deptFlagMap[that.topNodeUid].checkedCount == that.total) {
        that.allChecked = true;
      } else {
        that.allChecked = false;
      }
    },
    //全部的勾选状态改变
    changeAllChecked: function changeAllChecked(value) {
      var that = this; //同步全选按钮下面组织结构的勾选状态

      if (value) {
        //勾选全部时，左边需要拉取所有当前部门下的部门和人
        that.circleGetAllTreeByLastId();
      } else {
        //右边选中人员的更新
        that.choseList = that.choseList.filter(function (choseItem) {
          //上一次选中的不可取消
          if (that.isDisabledLastSelected) {
            return that.treeIds.indexOf(choseItem.cid) == -1 || that.treeIds.indexOf(choseItem.cid) > -1 && that.disabledMap[choseItem.cid];
          } else {
            return that.treeIds.indexOf(choseItem.cid) == -1;
          }
        }); //当前部门下的selectedCount=0;

        that.deptFlagMap[that.topNodeUid].checkedCount = 0; //同步左边勾选状态

        that.memberTree.forEach(function (item) {
          if (that.isDisabledLastSelected) {
            if (!that.disabledMap[item.cid]) {
              that.checkedMap[item.cid] = false;
            } else {
              that.deptFlagMap[that.topNodeUid].checkedCount++; //禁用不可取消勾选，人数+1
            }
          } else {
            that.checkedMap[item.cid] = false;
          }
        });
      }
    },
    //勾选全部时，左边需要拉取所有当前部门下的部门和人
    circleGetAllTreeByLastId: function circleGetAllTreeByLastId() {
      var that = this;

      if (that.memberTree.length < that.total && that.lastUserId) {
        var params = {
          department_id: that.topNodeUid,
          app_id: window.__app_id,
          last_id: that.lastUserId
        }; //展示用户  要传type=all

        if (that.isShowUsers) {
          params.type = 'all';
        } else {
          params.type = 'dept';
        }

        that.isLoading = true;
        http_get('/training_api/address_book/get_list', params).then(function (res) {
          if (res.code == 0) {
            //组装数据
            var data = res.data;
            that.memberTree = that.memberTree.concat(data.users);
            that.lastUserId = data.ext.last_id;
            that.circleGetAllTreeByLastId();
          } else {
            that.$message.error(res.msg);
          }
        });
      } else {
        var deleteItem = []; //全选按钮勾选  department_id  parent_id(同步右边选中人员状态)

        that.choseList.forEach(function (choseItem) {
          //后来从左边tree中选中的人
          if (choseItem.parent_id) {
            if (choseItem.parent_id == that.topNodeUid) {
              deleteItem.push(choseItem.cid);
            } //上一次指派的人  depts为标识

          } else if (choseItem.depts && choseItem.depts.length) {
            if (choseItem.depts.join("-").split("-").indexOf(that.topNodeUid) > -1) {
              if (that.isDisabledLastSelected) {
                if (!that.disabledMap[choseItem.cid]) {
                  deleteItem.push(choseItem.cid); //其他部门链上面保存的勾选数也要-1

                  choseItem.depts.forEach(function (deptCombine) {
                    var arr = deptCombine.split("-");

                    if (arr[arr.length - 1] != that.topNodeUid) {
                      that.deptFlagMap[arr[arr.length - 1]].checkedCount--;
                    }
                  });
                }
              } else {
                deleteItem.push(choseItem.cid); //其他部门链上面保存的勾选数也要-1

                choseItem.depts.forEach(function (deptCombine) {
                  var arr = deptCombine.split("-");

                  if (arr[arr.length - 1] != that.topNodeUid) {
                    that.deptFlagMap[arr[arr.length - 1]].checkedCount--;
                  }
                });
              }
            }
          }
        }); //右边选中人员的更新
        //1.掉子部门和子人员(先删掉原来单选的user或者子department(包括上一次指派和后来从左边tree选中的))
        //2.将当前左边的组织移入右边

        that.choseList = that.choseList.filter(function (cItem) {
          return deleteItem.indexOf(cItem.cid) == -1;
        });

        if (that.isDisabledLastSelected) {
          //上一次选中的不拼接到右边
          var arr = that.memberTree.filter(function (item) {
            return !that.disabledMap[item.cid];
          });
          that.choseList = that.choseList.concat(arr);
        } else {
          that.choseList = that.choseList.concat(that.memberTree);
        } //同步左边勾选状态


        that.treeIds = [];
        that.memberTree.forEach(function (item) {
          that.treeIds.push(item.cid);
          that.checkedMap[item.cid] = true;
        }); //当前部门下的selectedCount=that.total;

        that.deptFlagMap[that.topNodeUid].checkedCount = that.total; //circleGetAllTreeByLastId循环调用api完毕关闭loading

        that.isLoading = false;
      }
    },
    //改变选择状态  isOuterChecked表示是否为外部的删除事件 isSearchChecked 表示是否为搜索的checked事件
    changeChecked: function changeChecked(item, isOuterChecked, isSearchChecked) {
      var that = this;
      var deleteItem = []; //外部的删除事件，that.checkedMap需要手动更新

      if (isOuterChecked) {
        that.checkedMap[item.cid] = that.checkedMap[item.cid] ? false : true;
      }

      if (that.checkedMap[item.cid]) {
        //选中部门时，需要判断左边是否有单个的人存在这个部门下，如果有，需要选中部门，删掉单独选中的人
        if (item.type == 'department') {
          //单独勾选部门时 selectedCount的操作
          if (that.deptFlagMap[item.department_id]) {
            that.deptFlagMap[item.department_id].checkedCount = 0; //部门勾选，相当于部门内部的勾选状态全部取消
          } else {
            that.deptFlagMap[item.department_id] = {};
            that.deptFlagMap[item.department_id].checkedCount = 0; //部门勾选，相当于部门内部的勾选状态全部取消
          }

          that.choseList.forEach(function (currentItem, index) {
            //表示不是上一次指派的
            if (currentItem.uid) {
              //部门链中包含当前勾选的部门，需要从右边删除
              if (currentItem.uid.split("-").indexOf(item.department_id) > -1) {
                deleteItem.push(currentItem.cid);
                that.checkedMap[currentItem.cid] = false; //同时取消左边的勾选状态
              }
            } else if (currentItem.depts) {
              if (!that.isDisabledLastSelected) {
                //上一次指派的人属于当前勾选的部门
                if (currentItem.depts.join("-").split("-").indexOf(item.department_id) > -1) {
                  deleteItem.push(currentItem.cid);
                  that.checkedMap[currentItem.cid] = false; //同时取消左边的勾选状态
                  //其他部门链上面保存的勾选数也要-1

                  currentItem.depts.forEach(function (deptCombine) {
                    var arr = deptCombine.split("-");

                    if (that.topNodeUid != arr[arr.length - 1]) {
                      //单独勾选部门时 selectedCount的操作
                      if (that.deptFlagMap[arr[arr.length - 1]] && that.deptFlagMap[arr[arr.length - 1]].checkedCount) {
                        that.deptFlagMap[arr[arr.length - 1]].checkedCount--;
                      }
                    }
                  });
                }
              } else {
                currentItem.depts.forEach(function (deptCombine) {
                  var arr = deptCombine.split("-");

                  if (item.department_id == arr[arr.length - 1]) {
                    that.deptFlagMap[item.department_id].checkedCount++;
                  }
                });
              }
            }
          });
        } //勾选部门或者是人当前所在部门人数要++


        if (item.type == 'department') {
          if (that.deptFlagMap[item.parent_id]) {
            that.deptFlagMap[item.parent_id].checkedCount++;
          } else {
            that.deptFlagMap[item.parent_id] = {};
            that.deptFlagMap[item.parent_id].checkedCount = 1;
          }
        } else {
          //从右边勾选过来的人
          if (item.uid) {
            if (that.deptFlagMap[item.parent_id]) {
              that.deptFlagMap[item.parent_id].checkedCount++;
            } else {
              that.deptFlagMap[item.parent_id] = {};
              that.deptFlagMap[item.parent_id].checkedCount = 1;
            }
          } else if (item.depts && item.depts.length) {
            item.depts.forEach(function (deptCombine) {
              var arr = deptCombine.split("-");

              if (that.deptFlagMap[arr[arr.length - 1]]) {
                that.deptFlagMap[arr[arr.length - 1]].checkedCount++;
              } else {
                that.deptFlagMap[arr[arr.length - 1]] = {};
                that.deptFlagMap[arr[arr.length - 1]].checkedCount = 1;
              }
            });
          }
        }

        if (deleteItem.length) {
          //右边数据更新，删掉子部门和子人员
          that.choseList = that.choseList.filter(function (choseItem) {
            return deleteItem.indexOf(choseItem.cid) == -1;
          });
        } //勾选的数据放入右边展示


        that.choseList.push(item);
      } else {
        that.choseList.forEach(function (choseItem, index) {
          if (choseItem.cid == item.cid) {
            that.choseList.splice(index, 1);
          }
        });
        that.deptFlagMap[that.topNodeUid].checkedCount--; //取消勾选，当前部门selectedCount-1
      } //同步是否全选的勾选框状态


      that.allCheckedStateFunc();
    },
    //最终下发授权的操作,params为最终的传参
    authorizeEvent: function authorizeEvent(params) {
      var url = "",
          successMsg = "",
          that = this,
          users = [],
          departments = [];
      that.choseList.forEach(function (item) {
        if (item.type == 'department') {
          departments.push(item.cid);
        } else if (item.type == 'user') {
          users.push(item.cid);
        }
      }); //课程授权

      if (that.assignType == "course") {
        url = that.courseAuthorizeUrl;
        successMsg = '设置可见范围成功';
        params.auth_type = 0; //0 普通授权  1 全体授权

        params.auth_users = users;
        params.auth_departments = departments; //训练营授权
      } else if (that.assignType == "training") {
        url = that.trainingAuthorizeUrl;
        successMsg = '设置可见范围成功';
        params.assign_users = users;
        params.assign_departments = departments;
      }

      post(url, params).then(function (res) {
        if (res.code == 0) {
          that.$emit('authorizedSuccessEvent', successMsg);
        } else {
          that.$emit('authorizedFailEvent', res.msg, res);
        }
      });
    },
    //课程课件范围的全部可见授权操作
    allAuthorizeEvent: function allAuthorizeEvent(params) {
      var that = this,
          successMsg = '设置可见范围成功';
      var url = that.courseAuthorizeUrl;
      params.auth_type = 1;
      post(url, params).then(function (res) {
        if (res.code == 0) {
          that.$emit('authorizedSuccessEvent', successMsg);
        } else {
          that.$emit('authorizedFailEvent', res.msg, res);
        }
      });
    },
    //课程不授权的操作，页面无选项
    noneAuthorizeEvent: function noneAuthorizeEvent(params) {
      var that = this,
          successMsg = '设置可见范围成功';
      var url = that.courseAuthorizeUrl;
      params.auth_type = 0;
      params.auth_users = [];
      params.auth_departments = [];
      post(url, params).then(function (res) {
        if (res.code == 0) {
          that.$emit('authorizedSuccessEvent', successMsg);
        } else {
          that.$emit('authorizedFailEvent', res.msg, res);
        }
      });
    },
    //该组件的展示
    show: function show() {
      var that = this;
      that.isShowDialog = true; //再次进入弹框可以进行确认操作

      that.hasClicked = false;

      if (!that.allDepartmentTreeMap[that.topNodeUid]) {
        //获取最外面一层的组织结构
        that.getTreeStruct();
      }
    },
    //该组件的隐藏
    hide: function hide() {
      var that = this;
      that.isShowDialog = false;
    },
    //获取某个部门下面的组织结构
    getSpecificDepetTree: function getSpecificDepetTree(departParams) {
      var that = this;
      that.isLoading = true; //将组织架构区域的滚动高度重置为0,回到起点状态

      that.treeBoxScrollFunc(0);
      http_get('/training_api/address_book/direct/index', departParams).then(function (treeResponse) {
        if (treeResponse.code === 0) {
          //组装数据
          that.handleConstructData(treeResponse.data);
        } else {
          that.$message.error(treeResponse.msg);
        }

        that.isLoading = false;
      });
    },
    //智慧校园同步账号
    syncAccountSmartCapm: function syncAccountSmartCapm() {
      var that = this;
      var params = {
        "department_id": that.topNodeUid
      };
      that.isLoading = true;
      http_get(that.asyncSmartCampUrl, params).then(function (res) {
        //等于0要刷新当前组织架构列表
        if (res.code === 0) {
          that.$message.info(res.msg);
          var departParams = {
            department_id: that.topNodeUid,
            app_id: window.__app_id
          };
          that.getSpecificDepetTree(departParams); //其他情况下进行提示即可
        } else {
          that.$message.warning(res.msg);
        }

        that.isLoading = false;
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/authModal/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_authModalvue_type_script_lang_js_ = (authModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/authModal/index.vue?vue&type=style&index=0&lang=scss&
var authModalvue_type_style_index_0_lang_scss_ = __webpack_require__(87);

// EXTERNAL MODULE: ./src/components/authModal/index.vue?vue&type=style&index=1&id=f0ad1a92&scoped=true&lang=scss&
var authModalvue_type_style_index_1_id_f0ad1a92_scoped_true_lang_scss_ = __webpack_require__(88);

// CONCATENATED MODULE: ./src/components/authModal/index.vue







/* normalize component */

var authModal_component = normalizeComponent(
  components_authModalvue_type_script_lang_js_,
  authModalvue_type_template_id_f0ad1a92_scoped_true_render,
  authModalvue_type_template_id_f0ad1a92_scoped_true_staticRenderFns,
  false,
  null,
  "f0ad1a92",
  null
  
)

/* harmony default export */ var authModal = (authModal_component.exports);
// CONCATENATED MODULE: ./libEntry/install/auth-modal/index.js


authModal.install = function (Vue) {
  Vue.component(authModal.name, authModal);
};

/* harmony default export */ var auth_modal = (authModal);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/shareModal/main.vue?vue&type=template&id=40610bc2&
var mainvue_type_template_id_40610bc2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.isShowMessageBox)?_c('div',{staticClass:"ss-shareModal"},[_c('div',{staticClass:"ss-shareModal__content"},[_c('a',{directives:[{name:"show",rawName:"v-show",value:(true),expression:"true"}],staticClass:"ss-shareModal__closeBtn ss-modal__close sense-icon-close",on:{"click":_vm.closeBox}}),_c('div',{staticClass:"ss-modal__header"},[_vm._v(_vm._s(_vm.headTitle))]),_c('div',{staticClass:"ss-modal__body"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isSetting && !_vm.isSettingPoster && !_vm.isSettingEditor),expression:"!isSetting && !isSettingPoster && !isSettingEditor"}]},[(Object.keys(_vm.shareData).length>1)?_c('div',{staticClass:"ss-share-types"},[_vm._l((_vm.shareData),function(value,key){return [_c('div',{key:key,staticClass:"ss-tab-item",class:{'active' : key === _vm.activeType},on:{"click":function($event){_vm.activeType = key}}},[_vm._v(_vm._s(value && value.title || _vm.defaultTitleMap[key]))])]})],2):_vm._e(),_c('div',{staticClass:"ss-share-content"},[(_vm.activeType === 'littleProgram' && _vm.promissionsData.status === 0)?_c('div',{staticClass:"nopromissions"},[_vm._v(_vm._s(_vm.promissionsData.tipsText))]):_vm._e(),(_vm.hasUsedForIntegral.state)?_c('Alert',{staticClass:"share-setting-item",attrs:{"title":("该" + (_vm.hasUsedForIntegral.types) + "已作为积分兑换，直接推广可能给您造成损失，请谨慎进行链接/二维码的推广"),"type":"warning"}}):_vm._e(),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.shareData[this.activeType] && !_vm.shareData[this.activeType].hideCopyLink),expression:"shareData[this.activeType] && !shareData[this.activeType].hideCopyLink"}],staticClass:"share-setting-item"},[_c('div',{staticClass:"share-setting-item-title"},[_vm._v("链接")]),_c('div',{staticClass:"share-setting-item-content"},[_c('div',{staticClass:"ss-copy_link"},[_c('div',{staticClass:"ss-show_link"},[_vm._v(_vm._s(_vm.shareData[this.activeType] && _vm.shareData[this.activeType]['link']))]),_c('div',{staticClass:"ss-copy_button ss-copyHref",attrs:{"data-clipboard-text":_vm.shareData[this.activeType] && _vm.shareData[this.activeType]['link']},on:{"click":_vm.copyLink}},[_vm._v("复制")])]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.activeType === 'h5' && _vm.getType != 2),expression:"activeType === 'h5' && getType != 2"}],staticClass:"share-setting-item-desc"},[_c('span',[_vm._v("可分享至")]),_c('img',{attrs:{"src":"http://wechatapppro-1252524126.file.myqcloud.com/appAKLWLitn7978/image/khd3u3qg0s3km9wuoej.png"}}),_c('img',{staticStyle:{"margin-left":"0"},attrs:{"src":"http://wechatapppro-1252524126.file.myqcloud.com/appAKLWLitn7978/image/khd3u3qf0zdn8pazpa6.png"}}),_c('span',[_vm._v("中使用")])])])]),_c('div',{staticClass:"share-setting-item"},[_c('div',{staticClass:"share-setting-item-title"},[_vm._v("二维码")]),_c('div',{staticClass:"share-setting-item-content"},[_c('div',{staticClass:"ss-img-container"},[_c('canvas',{directives:[{name:"show",rawName:"v-show",value:(_vm.activeType === 'h5'),expression:"activeType === 'h5'"}],ref:"h5_qr",attrs:{"width":"160","height":"160"}}),_c('canvas',{directives:[{name:"show",rawName:"v-show",value:(_vm.activeType === 'wework'),expression:"activeType === 'wework'"}],ref:"wework_qr",attrs:{"width":"160","height":"160"}}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.activeType === 'littleProgram' && _vm.promissionsData.status === 1),expression:"activeType === 'littleProgram' && promissionsData.status === 1"}]},[(_vm.imgLoading)?_c('loading'):_c('img',{attrs:{"src":_vm.shareData['littleProgram'] && _vm.shareData['littleProgram']['qr_code'],"onerror":"this.classList.add('error-img')","alt":""}})],1),_c('div',[(_vm.shareData[this.activeType] && _vm.shareData[this.activeType]['qr_code'])?_c('div',{staticClass:"ss-download-btn"},[_c('a',{staticClass:"ss-download_link EC1",attrs:{"href":_vm.shareData[this.activeType] && _vm.shareData[this.activeType]['qr_code'],"download":"二维码.png"}},[_vm._v("下载")])]):_vm._e(),(_vm.shareData[this.activeType] && _vm.shareData[this.activeType]['qrCodeTips'])?_c('div',{staticClass:"mini-tips"},[_vm._v(_vm._s(_vm.shareData[this.activeType]['qrCodeTips']))]):_vm._e()])])])]),(_vm.activeType==='littleProgram')?_c('div',{staticClass:"share-setting-item"},[(_vm.shareData[this.activeType]['show_help'])?[_c('div',{staticClass:"share-setting-item-title"},[_vm._v("教程")]),_vm._m(0)]:_vm._e()],2):(_vm.activeType==='h5')?_c('div',{staticClass:"share-setting-item"},[(_vm.shareData[this.activeType] && (!_vm.shareData[this.activeType].hideMessageSetting || !_vm.shareData[this.activeType].hidePosterSetting))?_c('div',{staticClass:"share-setting-item-title"},[_vm._v("设置")]):_vm._e(),_c('div',{staticClass:"share-setting-item-content"},[(_vm.shareData[this.activeType] && !_vm.shareData[this.activeType].hideMessageSetting)?_c('span',{staticClass:"ss-change-btn",on:{"click":function($event){_vm.isSetting=true}}},[_vm._v("分享语设置")]):_vm._e(),(_vm.shareData[this.activeType] && !_vm.shareData[this.activeType].hidePosterSetting)?_c('span',{staticClass:"ss-change-btn"},[_c('span',{on:{"click":_vm.showPosterSetting}},[_vm._v("海报设置")]),(_vm.showPosterTips)?_c('div',{staticClass:"poster-tips"},[_vm._v("\n                  点击【海报设置】可以上传自定义海报\n                  "),_c('div',{staticClass:"closebtn",on:{"click":_vm.closePosterTips}},[_vm._v("知道了")])]):_vm._e()]):_vm._e()])]):_vm._e()],1)]),(_vm.isSetting)?_c('div',[_c('Setting',{attrs:{"activityType":_vm.activityType,"shareType":_vm.shareType,"resourceType":_vm.resourceType}})],1):_vm._e(),(_vm.shareData[this.activeType] && !_vm.shareData[this.activeType].hidePosterSetting)?[(_vm.isSettingPoster)?_c('div',[_c('poster-setting',{attrs:{"resourceType":_vm.resourceType,"businessId":_vm.businessId}})],1):_vm._e(),(_vm.isSettingEditor)?_c('div',[_c('poster-editor',{attrs:{"poster":_vm.edittingPoster,"limitPosterSize":1,"activityType":_vm.activityType,"shareType":_vm.shareType,"resourceType":_vm.resourceType,"businessId":_vm.businessId}})],1):_vm._e()]:_vm._e()],2)])]):_vm._e()}
var mainvue_type_template_id_40610bc2_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"share-setting-item-content"},[_c('a',{staticClass:"ss-change-btn",attrs:{"target":"_blank","href":"/helpCenter/problem?first_id=126&second_id=164&document_id=doc_5b0b7f49b251f_vNpPv"}},[_vm._v("查看操作教程")])])}]


// CONCATENATED MODULE: ./src/components/shareModal/main.vue?vue&type=template&id=40610bc2&

// EXTERNAL MODULE: external "qrious"
var external_qrious_ = __webpack_require__(51);
var external_qrious_default = /*#__PURE__*/__webpack_require__.n(external_qrious_);

// EXTERNAL MODULE: external "clipboard"
var external_clipboard_ = __webpack_require__(52);
var external_clipboard_default = /*#__PURE__*/__webpack_require__.n(external_clipboard_);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/shareModal/setting.vue?vue&type=template&id=27ce6172&
var settingvue_type_template_id_27ce6172_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ss-share-setting"},[_c('loading',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}]}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.$parent.shareType == 1),expression:"$parent.shareType == 1"}],staticClass:"ss-use-tip"},[_vm._v("\n    如需对所有微页面设置分享语，请前往\n    "),_c('a',{staticClass:"ss-set-doc",attrs:{"target":"_blank","href":"/shopSetting#/shopSetting"}},[_vm._v("【"+_vm._s(_vm.isCompany ? '学院' : '店铺')+"设置-品牌形象-分享自定义】")]),_vm._v("\n    进行设置\n  ")]),_c('div',{staticClass:"ss-top-content"},[_c('div',{staticClass:"ss-left-previewer"},[_c('div',{staticClass:"ss-title"},[_vm._v("样式预览")]),_c('div',{staticClass:"ss-preview-content"},[_c('img',{staticClass:"ss-preview-pic",attrs:{"src":"http://wechatapppro-1252524126.file.myqcloud.com/appAKLWLitn7978/image/cmVzb3VyY2UtY291cnNlQXJ0aWNsZS02MTA5MDUwNQ.png","alt":"pic"}}),_c('div',{staticClass:"ss-share-card"},[_c('div',{staticClass:"ss-card-title"},[_vm._v(_vm._s(_vm.share_title || '分享标题'))]),_c('div',{staticClass:"ss-card-desc"},[_vm._v(_vm._s(_vm.share_desc || '分享描述'))]),_c('div',{staticClass:"ss-card-img"},[_c('img',{directives:[{name:"show",rawName:"v-show",value:(_vm.share_img_url),expression:"share_img_url"}],attrs:{"src":_vm.share_img_url,"alt":"share_img_url"}})])])])]),_c('div',{staticClass:"ss-editor"},[_c('div',{staticClass:"ss-content"},[_c('div',{staticClass:"ss-item-setting"},[_c('span',{staticClass:"ss-item-label"},[_vm._v("分享标题")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.share_title),expression:"share_title"}],staticClass:"ss-item-input",attrs:{"maxlength":"24","placeholder":"请输入分享标题"},domProps:{"value":(_vm.share_title)},on:{"keyup":function($event){_vm.share_title=_vm.share_title.trim()},"input":function($event){if($event.target.composing){ return; }_vm.share_title=$event.target.value}}}),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.is_checked && !_vm.share_title),expression:"is_checked && !share_title"}],staticClass:"ss-error-tip"},[_vm._v("分享标题不能为空")])]),_c('div',{staticClass:"ss-item-setting"},[_c('span',{staticClass:"ss-item-label"},[_vm._v("分享描述")]),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.share_desc),expression:"share_desc"}],staticClass:"ss-item-textarea",attrs:{"placeholder":_vm.isCompany ? '请收藏此培训链接': '请输入分享描述',"name":"desc","cols":"30","rows":"10","maxlength":"36"},domProps:{"value":(_vm.share_desc)},on:{"keyup":function($event){_vm.share_desc=_vm.share_desc.trim()},"input":function($event){if($event.target.composing){ return; }_vm.share_desc=$event.target.value}}}),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.is_checked && !_vm.share_desc),expression:"is_checked && !share_desc"}],staticClass:"ss-error-tip"},[_vm._v("分享描述不能为空")])]),_c('div',{staticClass:"ss-item-setting img-setting"},[_c('span',{staticClass:"ss-item-label"},[_vm._v("分享图片")]),_c('div',{staticClass:"ss-upload-pic",on:{"click":_vm.uploadImgMaterial}},[(_vm.share_img_url)?[_c('img',{staticClass:"ss-img-pic",attrs:{"src":_vm.share_img_url,"alt":"ss-img-pic"}}),_c('div',{staticClass:"rechoose"},[_vm._v("重新上传")])]:[_vm._m(0)]],2),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.is_checked && !_vm.share_img_url),expression:"is_checked && !share_img_url"}],staticClass:"ss-error-tip",staticStyle:{"padding-left":"175px"}},[_vm._v("分享图片不能为空")])]),_c('div',{staticClass:"ss-tip"},[_vm._v("图片格式为：bmp，png，jpeg，jpg，gif，尺寸1:1，不可大于1M。")])])])]),_c('div',{staticClass:"ss-confirm-btns"},[_c('div',{staticClass:"ss-cancel",on:{"click":function($event){_vm.$parent.isSetting=false}}},[_vm._v("取消")]),_c('div',{staticClass:"ss-confirm",on:{"click":_vm.setShareInfo}},[_vm._v("保存")])])],1)}
var settingvue_type_template_id_27ce6172_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ss-empty-pic"},[_c('div',{staticClass:"ss-upload-btn"},[_c('span',{staticStyle:{"font-size":"24px","font-weight":"300"}},[_vm._v(" + ")]),_c('span',[_vm._v("点击上传")])])])}]


// CONCATENATED MODULE: ./src/components/shareModal/setting.vue?vue&type=template&id=27ce6172&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/shareModal/setting.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var settingvue_type_script_lang_js_ = ({
  name: "Sssetting",
  data: function data() {
    return {
      share_id: "",
      share_title: "",
      share_desc: "",
      share_img_url: "",
      share_img_url_compressed: "",
      hasSetting: false,
      // 是否查询到设置
      loading: true,
      is_checked: false
    };
  },
  props: {
    resourceType: {
      // 商品类型 - 海报设置需要用 
      type: [String, Number],
      default: 1
    },
    activityType: {
      // 营销活动类型 - 分享与设置埋点需要用 
      type: [String, Number],
      default: ""
    },
    shareType: {
      // 1微页面,2资源课程，3-拼团活动
      type: Number
    }
  },
  components: {
    Loading: loading
  },
  created: function created() {
    this.getShareInfo();
  },
  computed: {
    isCompany: function isCompany() {
      var version = window.globVersionType;

      if ([170, 171].indexOf(version) > -1) {
        return true;
      }

      return false;
    }
  },
  methods: {
    getShareInfo: function getShareInfo() {
      var _this = this;

      var data = {
        share_type: this.$parent.shareType,
        business_id: this.$parent.businessId
      };
      this.loading = true;
      external_axios_default.a.post("/page_share/get_custom_share_conf", data).then(function (_ref) {
        var data = _ref.data;

        if (data.code === 0) {
          var _data$data = data.data,
              share_title = _data$data.share_title,
              share_desc = _data$data.share_desc,
              share_img_url = _data$data.share_img_url,
              id = _data$data.id;
          _this.share_title = share_title || '';
          _this.share_desc = share_desc || '';
          _this.share_img_url = share_img_url || '';

          if (id) {
            _this.share_id = id;
            _this.hasSetting = true;
          } else {
            _this.hasSetting = false;
          }
        } else if (data.code === 1) {
          _this.hasSetting = false;
        } else {
          _this.$message.warning("获取失败");
        }

        _this.loading = false;
      }).catch(function (error) {
        _this.loading = false;
        console.log(error);

        _this.$message.warning("获取失败");
      });
    },
    setShareInfo: function setShareInfo() {
      var _this2 = this;

      this.is_checked = true;

      if (this.share_title === '' || this.share_desc === '' || this.share_img_url === '') {
        return false;
      }

      var url = this.hasSetting ? "/page_share/edit_custom_share_conf" : "/page_share/create_custom_share_conf";
      this.loading = true;
      var data = {
        share_title: this.share_title,
        share_desc: this.share_desc,
        share_img_url: this.share_img_url,
        share_img_url_compressed: this.share_img_url
      };

      if (this.hasSetting) {
        data["id"] = this.share_id;
      } else {
        data["share_type"] = this.$parent.shareType;
        data["business_id"] = this.$parent.businessId;
      }

      external_axios_default.a.post(url, data).then(function (_ref2) {
        var data = _ref2.data;
        _this2.loading = false;

        if (data.code === 0) {
          _this2.$message.info("设置成功");

          _this2.upSensor();

          _this2.hasSetting = true;
          _this2.$parent.isSetting = false;
          _this2.share_id = data.id;
        } else {
          _this2.$message.warning("设置失败");
        }
      }).catch(function (error) {
        _this2.loading = false;

        _this2.$message.warning("设置失败");
      });
    },
    upSensor: function upSensor() {
      // 埋点数据 神策
      try {
        sensors.track('ADM03003_share_setting', {
          activity_type: this.shareType === 3 ? this.activityType : '',
          // 营销活动类型  不是营销活动则传 ''
          resource_type: this.shareType === 2 ? this.resourceType : '' // 资源类型 营销活动传 '' 

        });
      } catch (err) {
        console.log(err);
      }
    },
    uploadImgMaterial: function uploadImgMaterial() {
      var _this3 = this;

      this.$material({
        type: "picture",
        showClose: true,
        multiple: false
      }).then(function (res) {
        var _res$data$ = res.data[0],
            material_size = _res$data$.material_size,
            url = _res$data$.url;
        if (!url) return false;
        var size = Number(material_size) / 1024;

        if (size > 1) {
          //判断图片上传大小 1M
          _this3.loading = false;

          _this3.$message.warning("图片不能大于1M，请重新选择上传");

          return false;
        }

        _this3.share_img_url = url;
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/shareModal/setting.vue?vue&type=script&lang=js&
 /* harmony default export */ var shareModal_settingvue_type_script_lang_js_ = (settingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/shareModal/setting.vue?vue&type=style&index=0&lang=scss&
var settingvue_type_style_index_0_lang_scss_ = __webpack_require__(89);

// CONCATENATED MODULE: ./src/components/shareModal/setting.vue






/* normalize component */

var setting_component = normalizeComponent(
  shareModal_settingvue_type_script_lang_js_,
  settingvue_type_template_id_27ce6172_render,
  settingvue_type_template_id_27ce6172_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var setting = (setting_component.exports);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/shareModal/posterSetting.vue?vue&type=template&id=113d4336&
var posterSettingvue_type_template_id_113d4336_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ss-share-poster-setting"},[_c('loading',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}]}),_c('div',{staticClass:"poster-list-view"},[_vm._m(0),_c('div',{staticClass:"poster-pic"},[(_vm.customizedPosterLength < _vm.limitPoster)?_c('div',{staticClass:"poster-item__add poster-item",style:({width: _vm.smallPosterSize.width,height:_vm.smallPosterSize.height}),on:{"click":function($event){$event.stopPropagation();return _vm.addPoster($event)}}},[_c('i',{staticClass:"font_family icon-icon_add add-icon"})]):_vm._e(),_vm._l((_vm.posterInfo),function(item,index){return _c('section',{key:index},[_c('div',{staticClass:"poster-item poster-item__pic",class:{'poster-item__acitive':item.isShow},style:({width: _vm.smallPosterSize.width,height:_vm.smallPosterSize.height})},[(item.posterUrl)?_c('img',{staticClass:"poster-img",attrs:{"src":item.posterUrl,"alt":""},on:{"click":function($event){return _vm.previewPoster(item)}}}):_vm._e(),(item.isDefault)?[_c('div',{staticClass:"default-poster-icon"})]:[_c('i',{staticClass:"font_family icon-icon_closecopy delete-icon",on:{"click":function($event){$event.stopPropagation();return _vm.toDeletedPoster(item.id , index)}}}),_c('div',{staticClass:"edit-poster",on:{"click":function($event){return _vm.editPoster(item)}}},[_vm._v("编辑")])]],2)])})],2),_c('div',{staticClass:"limit-tips"},[_vm._v(_vm._s(_vm.customizedPosterLengthTips[_vm.customizedPosterLength]))])]),_c('div',{staticClass:"handle-btns"},[_c('div',{staticClass:"restoration-btn cancel-btn",on:{"click":_vm.goBack}},[_vm._v("返回")])]),(_vm.isShoPreviewImg)?_c('imgPreviewer',{attrs:{"img":_vm.previewingPoster,"title":"用户可通过悬浮分享按钮进入海报页面，分享该海报"},on:{"close":function($event){_vm.isShoPreviewImg = false}}}):_vm._e(),_c('ss-modal',{attrs:{"iconType":"error","title":"删除","content":"海报删除后不可恢复，确认删除吗？","visible":_vm.isShowDeleteAlert,"models":false,"btnText":{confirm:'确定',cancel:'取消'}},on:{"update:visible":function($event){_vm.isShowDeleteAlert=$event},"confirms":_vm.deletedPoster,"cancel":_vm.cancelDelete}})],1)}
var posterSettingvue_type_template_id_113d4336_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"poster-title"},[_c('span',[_vm._v("自定义海报")]),_c('div',{staticClass:"poster-title-img"},[_c('img',{attrs:{"src":"http://wechatapppro-1252524126.file.myqcloud.com/appAKLWLitn7978/image/34c30bfa8b3f8cf8b195477e2d1e4b9e.png","alt":""}}),_c('div',{staticClass:"img-hover-tips"},[_vm._v("\n          1、用户分享时，系统优先展示自定义海报\n          "),_c('br'),_vm._v("\n          2、如未设定自定义海报，则优先展示系统推荐海报\n          "),_c('br'),_vm._v("\n          3、系统推荐海报无法编辑和删除\n        ")])])])}]


// CONCATENATED MODULE: ./src/components/shareModal/posterSetting.vue?vue&type=template&id=113d4336&

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/shareModal/imgPreviewer.vue?vue&type=template&id=1fd021d1&scoped=true&
var imgPreviewervue_type_template_id_1fd021d1_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ss-preview-img-area"},[_c('div',{staticClass:"mask",on:{"click":_vm.close}}),_c('div',{staticClass:"preview-content"},[(_vm.title)?_c('div',{staticClass:"preview-title"},[_vm._v("\n          "+_vm._s(_vm.title)+"\n      ")]):_vm._e(),_c('div',{staticClass:"preview-img-item"},[_c('img',{attrs:{"src":_vm.img.posterUrl,"alt":""}}),(_vm.img.isShowAvatarAndName == 1 && _vm.img.isDefault !== 1)?_c('div',{ref:"bigAvatar",staticClass:"bigAvatar poster-pre__avatar poster-pre__item",style:({top: ((_vm.img.avatarPosition.y) + "px"), left: ((_vm.img.avatarPosition.x) + "px")})},[_vm._m(0)]):_vm._e(),(_vm.img.isShowAvatarAndName == 1 && _vm.img.isDefault !== 1)?_c('div',{ref:"bigNickname",staticClass:"bigNickname poster-pre__nickname poster-pre__item",class:{'poster-pre__nickname__black':_vm.img.nicknameColor ==1},style:({top: ((_vm.img.nicknamePosition.y) + "px"), left: ((_vm.img.nicknamePosition.x) + "px")})},[_vm._m(1)]):_vm._e(),((_vm.img.isShowQrcode===1 || _vm.img.isShowQrcode===0) && _vm.img.isDefault !== 1)?_c('div',{ref:"bigCodeQr",staticClass:"bigCodeQr poster-pre__code poster-pre__item",class:{'poster-prc__fingerprint' : _vm.img.isShowQrcode ==1},style:({top: ((_vm.img.qrcodePosition.y) + "px"), left: ((_vm.img.qrcodePosition.x) + "px")})},[_c('i',{staticClass:"font_family icon-img_qrcode_zhanwei1 code-box"}),_c('img',{directives:[{name:"show",rawName:"v-show",value:(_vm.img.isShowQrcode == 1),expression:"img.isShowQrcode == 1"}],staticClass:"fingerprint",attrs:{"src":"http://wechatapppro-1252524126.file.myqcloud.com/appAKLWLitn7978/image/859093d21aee5d46f4a58d3842f81d0d.png","alt":""}})]):_vm._e(),(_vm.img.isShowGoodsInfo===1 && _vm.img.isDefault !== 1)?_c('div',{staticClass:"goods-info"},[_vm._m(2),_c('div',{staticClass:"goods-info-title"},[(_vm.img.isShowGoodsPrice===1)?_c('div',{staticClass:"goods-info-price"},[_vm._v("\n                      ￥"),_c('span',{staticClass:"price-number"},[_vm._v("商品价格")])]):_vm._e(),_c('div',{staticClass:"goods-info-title-text",class:{'no-price':_vm.img.isShowGoodsPrice!==1}},[_vm._v("商品标题")])])]):_vm._e()]),_c('div',{staticClass:"close-box",on:{"click":_vm.close}},[_c('img',{attrs:{"src":"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjEgKDQ3MjUwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7lhYPntKAv5Z+656GA5Zu+5qCHL2ljb25fY2xvc2U8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuWFg+e0oC/ln7rnoYDlm77moIcvaWNvbl9jbG9zZSI+CiAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMiIgeD0iMiIgeT0iMiIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj48L3JlY3Q+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMiwxMSBMMTIsMy41IEMxMiwzLjIyMzg1NzYzIDEyLjIyMzg1NzYsMyAxMi41LDMgQzEyLjc3NjE0MjQsMyAxMywzLjIyMzg1NzYzIDEzLDMuNSBMMTMsMTEgTDIwLjUsMTEgQzIwLjc3NjE0MjQsMTEgMjEsMTEuMjIzODU3NiAyMSwxMS41IEMyMSwxMS43NzYxNDI0IDIwLjc3NjE0MjQsMTIgMjAuNSwxMiBMMTMsMTIgTDEzLDE5LjUgQzEzLDE5Ljc3NjE0MjQgMTIuNzc2MTQyNCwyMCAxMi41LDIwIEMxMi4yMjM4NTc2LDIwIDEyLDE5Ljc3NjE0MjQgMTIsMTkuNSBMMTIsMTIgTDQuNSwxMiBDNC4yMjM4NTc2MywxMiA0LDExLjc3NjE0MjQgNCwxMS41IEM0LDExLjIyMzg1NzYgNC4yMjM4NTc2MywxMSA0LjUsMTEgTDEyLDExIFoiIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iI0IyQjJCMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIuNTAwMDAwLCAxMS41MDAwMDApIHJvdGF0ZSg0NS4wMDAwMDApIHRyYW5zbGF0ZSgtMTIuNTAwMDAwLCAtMTEuNTAwMDAwKSAiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==","alt":""}})])])])}
var imgPreviewervue_type_template_id_1fd021d1_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"avatar-box"},[_c('i',{staticClass:"font_family icon-img_avatar_zhanwei1"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nickname-text"},[_c('i',{staticClass:"font_family icon-img_name_zhanwei1 nickname-title"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"goods-info-img"},[_c('img',{staticClass:"goods-info-img-img",attrs:{"src":"http://wechatapppro-1252524126.file.myqcloud.com/appAKLWLitn7978/image/9ed6644ff822ebb17625b89250a96679.png","alt":""}})])}]


// CONCATENATED MODULE: ./src/components/shareModal/imgPreviewer.vue?vue&type=template&id=1fd021d1&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/shareModal/imgPreviewer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var imgPreviewervue_type_script_lang_js_ = ({
  name: 'imgPreviewer',
  props: {
    img: {
      type: Object
    },
    posterType: {
      type: [Number, String],
      default: 1
    },
    title: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {};
  },
  methods: {
    close: function close() {
      this.$emit('close');
    }
  }
});
// CONCATENATED MODULE: ./src/components/shareModal/imgPreviewer.vue?vue&type=script&lang=js&
 /* harmony default export */ var shareModal_imgPreviewervue_type_script_lang_js_ = (imgPreviewervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/shareModal/imgPreviewer.vue?vue&type=style&index=0&id=1fd021d1&lang=scss&scoped=true&
var imgPreviewervue_type_style_index_0_id_1fd021d1_lang_scss_scoped_true_ = __webpack_require__(90);

// CONCATENATED MODULE: ./src/components/shareModal/imgPreviewer.vue






/* normalize component */

var imgPreviewer_component = normalizeComponent(
  shareModal_imgPreviewervue_type_script_lang_js_,
  imgPreviewervue_type_template_id_1fd021d1_scoped_true_render,
  imgPreviewervue_type_template_id_1fd021d1_scoped_true_staticRenderFns,
  false,
  null,
  "1fd021d1",
  null
  
)

/* harmony default export */ var imgPreviewer = (imgPreviewer_component.exports);
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/shareModal/posterSetting.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var posterSettingvue_type_script_lang_js_ = ({
  name: "SssettingPoster",
  data: function data() {
    return {
      loading: false,
      isShoPreviewImg: false,
      // 删除海报
      isShowDeleteAlert: false,
      toDelIndex: '',
      toDelID: '',
      // 预览海报
      previewingPoster: null,
      // 海报列表
      posterInfo: [],
      limitPoster: 3,
      customizedPosterLengthTips: ['最多可添加3张自定义海报', '还可添加2张自定义海报', '还可添加1张自定义海报', '自定义海报数量已达上限'],
      smallPosterSize: {
        width: "70px",
        height: "124px"
      },
      defaultPoster: {
        // 一个初始的海报组件 没有id 和海报图片
        id: '',
        // 海报的id
        isShowAvatarAndName: 1,
        // 是否展示头像和昵称
        nicknameColor: 1,
        // 昵称颜色
        isShowGoodsInfo: 1,
        // 是否展示商品内容
        isShowGoodsPrice: 1,
        // 是否展示商品价格
        isShowQrcode: 1,
        // 是否展示二维码和样式选择
        avatarPosition: {
          "x": 93,
          "y": 25
        },
        // 头像坐标
        nicknamePosition: {
          "x": 80,
          "y": 58
        },
        // 昵称坐标
        qrcodePosition: {
          "x": 46,
          "y": 326
        },
        // 二维码坐标
        posterUrl: '' // 海报图片

      }
    };
  },
  components: {
    Loading: loading,
    imgPreviewer: imgPreviewer
  },
  created: function created() {
    this.getPosterList();
  },
  computed: {
    // 自定义的海报数量
    customizedPosterLength: function customizedPosterLength() {
      return this.posterInfo.filter(function (val) {
        return !val.isDefault;
      }).length;
    },
    isCompany: function isCompany() {
      var version = window.globVersionType;

      if ([170, 171].indexOf(version) > -1) {
        return true;
      }

      return false;
    }
  },
  props: {
    resourceType: {
      // 商品类型
      type: [String, Number]
    },
    businessId: {
      // 商品id
      type: String
    }
  },
  methods: {
    // 根据id 获取商品的 海报列表  当前海报限制3张，所以不需要翻页，直接定死page 和per_page
    getPosterList: function getPosterList() {
      var _this = this;

      this.loading = true;
      var params = {
        'resource_id': this.businessId,
        //	资源id
        'resource_type': this.resourceType,
        //	资源类型
        'per_page': 20,
        //	每页数量 默认20
        'page': 1,
        //	页码 默认1
        'page_opt': 2 // 是否分页 1分 2不分 默认2

      };
      external_axios_default.a.post("/poster_share/get_poster_list", params).then(function (_ref) {
        var data = _ref.data;
        _this.loading = false;

        if (data.code === 0) {
          _this.total = data.data.total;
          _this.posterInfo = _this.handlePosterList(data.data.list);
        } else {
          _this.$message.warning("获取海报列表失败");
        }
      }).catch(function (error) {
        _this.loading = false;
        console.log(error);

        _this.$message.warning("获取海报列表失败");
      });
    },
    // 接口返回的海报列表 处理数据格式 映射成前端字段
    handlePosterList: function handlePosterList(list) {
      return list.map(function (val) {
        var avatar_position = JSON.parse(val.avatar_position);
        var nickname_position = JSON.parse(val.nickname_position);
        var qrcode_position = JSON.parse(val.qrcode_position);
        return {
          id: val.id || '',
          // 海报的id
          isShowAvatarAndName: val.is_show_avatar,
          // 是否展示头像和昵称
          nicknameColor: val.nickname_color,
          // 昵称颜色
          isShowGoodsInfo: val.is_show_goods,
          // 是否展示商品内容
          isShowGoodsPrice: val.is_show_price,
          // 是否展示商品价格
          isShowQrcode: val.is_show_fingerprints,
          // 是否展示二维码和样式选择
          avatarPosition: val.avatar_position ? {
            // 头像坐标  兼容老数据 需要减去间距
            x: avatar_position.x - 6,
            y: avatar_position.y - 12
          } : null,
          nicknamePosition: val.nickname_position ? {
            // 昵称坐标  兼容老数据 需要减去间(距
            x: nickname_position.x - 6,
            y: nickname_position.y - 12
          } : null,
          qrcodePosition: val.qrcode_position ? {
            // 二维码坐标  兼容老数据 需要减去间距
            x: qrcode_position.x - 6,
            y: qrcode_position.y - 12
          } : null,
          posterUrl: val.poster_url,
          // 海报图片
          isDefault: val.is_default // 是否是默认海报

        };
      });
    },
    // 返回分享设置页
    goBack: function goBack() {
      this.$parent.isSettingPoster = false;
    },
    // 添加海报
    addPoster: function addPoster() {
      // 添加一个默认的 海报 并进入海报编辑页
      this.$parent.edittingPoster = this.defaultPoster;
      this.$parent.isSettingEditor = true;
      this.$parent.isSettingPoster = false;
    },
    // 删除海报前确认
    toDeletedPoster: function toDeletedPoster(id, index) {
      this.isShowDeleteAlert = true;
      this.toDelID = id;
      this.toDelIndex = index;
    },
    // 取消 删除
    cancelDelete: function cancelDelete() {
      this.isShowDeleteAlert = false;
      this.toDelID = '';
      this.toDelIndex = '';
    },
    // 删除海报
    deletedPoster: function deletedPoster() {
      var _this2 = this;

      this.loading = true;
      external_axios_default.a.post("/poster_share/del_poster", {
        poster_id: this.toDelID
      }).then(function (_ref2) {
        var data = _ref2.data;
        _this2.loading = false;

        if (data.code === 0) {
          _this2.$message.info("删除成功");

          _this2.posterInfo.splice(_this2.toDelIndex, 1);
        } else {
          _this2.$message.warning("删除海报失败，请稍后再试");
        }
      }).catch(function (error) {
        _this2.loading = false;
        console.log(error);

        _this2.$message.warning("删除海报失败，请稍后再试");
      });
    },
    // 预览海报
    previewPoster: function previewPoster(poster) {
      this.previewingPoster = poster;
      this.isShoPreviewImg = true;
    },
    // 编辑 海报
    editPoster: function editPoster(item) {
      this.$parent.edittingPoster = item;
      this.$parent.isSettingEditor = true;
      this.$parent.isSettingPoster = false;
    }
  }
});
// CONCATENATED MODULE: ./src/components/shareModal/posterSetting.vue?vue&type=script&lang=js&
 /* harmony default export */ var shareModal_posterSettingvue_type_script_lang_js_ = (posterSettingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/shareModal/posterSetting.vue?vue&type=style&index=0&lang=scss&
var posterSettingvue_type_style_index_0_lang_scss_ = __webpack_require__(91);

// CONCATENATED MODULE: ./src/components/shareModal/posterSetting.vue






/* normalize component */

var posterSetting_component = normalizeComponent(
  shareModal_posterSettingvue_type_script_lang_js_,
  posterSettingvue_type_template_id_113d4336_render,
  posterSettingvue_type_template_id_113d4336_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var posterSetting = (posterSetting_component.exports);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/shareModal/posterEditor.vue?vue&type=template&id=270a1162&
var posterEditorvue_type_template_id_270a1162_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ss-goods-poster__main_edit"},[_c('loading',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}]}),_c('div',{ref:"posterSetting",staticClass:"poster-setting"},[_c('div',{staticClass:"poster-main"},[_c('div',{ref:"poster",staticClass:"poster-pre",style:({backgroundImage: 'url('+ _vm.defaultItem.posterUrl +')'})},[(_vm.defaultItem.isShowAvatarAndName == 1)?_c('div',{ref:"bigAvatar",staticClass:"bigAvatar poster-pre__avatar poster-pre__item",style:({top: ((_vm.bigAvatar.top) + "px"), left: ((_vm.bigAvatar.left) + "px")}),on:{"mousedown":_vm.startMove,"mouseenter":_vm.hoverShow,"mouseout":_vm.leaveShow}},[_vm._m(0),_c('span',{staticClass:"move-icon"})]):_vm._e(),(_vm.defaultItem.isShowAvatarAndName == 1)?_c('div',{ref:"bigNickname",staticClass:"bigNickname poster-pre__nickname poster-pre__item",class:{'poster-pre__nickname__black':_vm.defaultItem.nicknameColor ==1},style:({top: ((_vm.bigNickname.top) + "px"), left: ((_vm.bigNickname.left) + "px")}),on:{"mousedown":_vm.startMove,"mouseenter":_vm.hoverShow,"mouseout":_vm.leaveShow}},[_vm._m(1),_c('span',{staticClass:"move-icon"})]):_vm._e(),(_vm.defaultItem.isShowQrcode !== 2)?_c('div',{ref:"bigCodeQr",staticClass:"bigCodeQr poster-pre__code poster-pre__item",class:{'code-with-finger':_vm.defaultItem.isShowQrcode == 1},style:({top: ((_vm.bigCodeQr.top) + "px"), left: ((_vm.bigCodeQr.left) + "px")}),on:{"mousedown":_vm.startMove,"mouseenter":_vm.hoverShow,"mouseout":_vm.leaveShow}},[_c('i',{staticClass:"font_family icon-img_qrcode_zhanwei1 code-box"}),_c('img',{directives:[{name:"show",rawName:"v-show",value:(_vm.defaultItem.isShowQrcode == 1),expression:"defaultItem.isShowQrcode == 1"}],staticClass:"fingerprint",attrs:{"src":"http://wechatapppro-1252524126.file.myqcloud.com/appAKLWLitn7978/image/859093d21aee5d46f4a58d3842f81d0d.png","alt":""}}),_c('span',{staticClass:"move-icon"})]):_vm._e(),(_vm.defaultItem.isShowGoodsInfo===1)?_c('div',{staticClass:"goods-info"},[_vm._m(2),_c('div',{staticClass:"goods-info-title"},[(_vm.defaultItem.isShowGoodsPrice===1)?_c('div',{staticClass:"goods-info-price"},[_vm._v("\n                              ￥"),_c('span',{staticClass:"price-number"},[_vm._v("商品价格")])]):_vm._e(),_c('div',{staticClass:"goods-info-title-text",class:{'no-price':_vm.defaultItem.isShowGoodsPrice!==1}},[_vm._v("商品标题")])])]):_vm._e()]),_c('div',{staticClass:"handle-list"},[_c('div',{staticClass:"poster-handle-item"},[_c('div',{staticClass:"poster-handle-item-title"},[_vm._v("背景图片")]),_c('div',{staticClass:"poster-handle-item-value"},[_c('div',{staticClass:"upload-img-area",on:{"click":_vm.chooseImg}},[(_vm.defaultItem.posterUrl)?[_c('img',{staticClass:"img",attrs:{"src":_vm.defaultItem.posterUrl,"alt":""}}),_c('div',{staticClass:"reupload-btn"},[_vm._v("更换")])]:[_vm._m(3)]],2),_c('div',{staticClass:"img-tip"},[_vm._v("建议尺寸750x1334px或9：16， JPG、PNG格式，图片小于"+_vm._s(_vm.limitPosterSize)+"M")])])]),_c('div',{staticClass:"poster-handle-item"},[_c('div',{staticClass:"poster-handle-item-title"},[_vm._v("头像昵称")]),_c('div',{staticClass:"poster-handle-item-value"},[_c('ss-radio',{attrs:{"label":1},model:{value:(_vm.defaultItem.isShowAvatarAndName),callback:function ($$v) {_vm.$set(_vm.defaultItem, "isShowAvatarAndName", $$v)},expression:"defaultItem.isShowAvatarAndName"}},[_vm._v("展示")]),_c('ss-radio',{attrs:{"label":0},model:{value:(_vm.defaultItem.isShowAvatarAndName),callback:function ($$v) {_vm.$set(_vm.defaultItem, "isShowAvatarAndName", $$v)},expression:"defaultItem.isShowAvatarAndName"}},[_vm._v("不展示")])],1)]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.defaultItem.isShowAvatarAndName===1),expression:"defaultItem.isShowAvatarAndName===1"}],staticClass:"poster-handle-item"},[_c('div',{staticClass:"poster-handle-item-title"},[_vm._v("昵称颜色")]),_c('div',{staticClass:"poster-handle-item-value"},[_c('ss-radio',{attrs:{"label":1},model:{value:(_vm.defaultItem.nicknameColor),callback:function ($$v) {_vm.$set(_vm.defaultItem, "nicknameColor", $$v)},expression:"defaultItem.nicknameColor"}},[_vm._v("黑色")]),_c('ss-radio',{attrs:{"label":2},model:{value:(_vm.defaultItem.nicknameColor),callback:function ($$v) {_vm.$set(_vm.defaultItem, "nicknameColor", $$v)},expression:"defaultItem.nicknameColor"}},[_vm._v("白色")])],1)]),_c('div',{staticClass:"poster-handle-item"},[_c('div',{staticClass:"poster-handle-item-title"},[_vm._v("商品内容")]),_c('div',{staticClass:"poster-handle-item-value"},[_c('ss-radio',{attrs:{"label":1},model:{value:(_vm.defaultItem.isShowGoodsInfo),callback:function ($$v) {_vm.$set(_vm.defaultItem, "isShowGoodsInfo", $$v)},expression:"defaultItem.isShowGoodsInfo"}},[_vm._v("展示")]),_c('ss-radio',{attrs:{"label":0},model:{value:(_vm.defaultItem.isShowGoodsInfo),callback:function ($$v) {_vm.$set(_vm.defaultItem, "isShowGoodsInfo", $$v)},expression:"defaultItem.isShowGoodsInfo"}},[_vm._v("不展示")])],1)]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.defaultItem.isShowGoodsInfo===1),expression:"defaultItem.isShowGoodsInfo===1"}],staticClass:"poster-handle-item"},[_c('div',{staticClass:"poster-handle-item-title"},[_vm._v("商品价格")]),_c('div',{staticClass:"poster-handle-item-value"},[_c('ss-radio',{attrs:{"label":1},model:{value:(_vm.defaultItem.isShowGoodsPrice),callback:function ($$v) {_vm.$set(_vm.defaultItem, "isShowGoodsPrice", $$v)},expression:"defaultItem.isShowGoodsPrice"}},[_vm._v("展示")]),_c('ss-radio',{attrs:{"label":0},model:{value:(_vm.defaultItem.isShowGoodsPrice),callback:function ($$v) {_vm.$set(_vm.defaultItem, "isShowGoodsPrice", $$v)},expression:"defaultItem.isShowGoodsPrice"}},[_vm._v("不展示")])],1)]),_c('div',{staticClass:"poster-handle-item qrcode-style"},[_c('div',{staticClass:"poster-handle-item-title"},[_vm._v("二维码样式")]),_c('div',{staticClass:"poster-handle-item-value"},[_c('ss-radio',{attrs:{"label":1},on:{"change":_vm.handleStyle},model:{value:(_vm.defaultItem.isShowQrcode),callback:function ($$v) {_vm.$set(_vm.defaultItem, "isShowQrcode", $$v)},expression:"defaultItem.isShowQrcode"}},[_vm._v("样式一")]),_c('ss-radio',{attrs:{"label":0},on:{"change":_vm.handleStyle},model:{value:(_vm.defaultItem.isShowQrcode),callback:function ($$v) {_vm.$set(_vm.defaultItem, "isShowQrcode", $$v)},expression:"defaultItem.isShowQrcode"}},[_vm._v("样式二")]),_c('ss-radio',{attrs:{"label":2},on:{"change":_vm.handleStyle},model:{value:(_vm.defaultItem.isShowQrcode),callback:function ($$v) {_vm.$set(_vm.defaultItem, "isShowQrcode", $$v)},expression:"defaultItem.isShowQrcode"}},[_vm._v("不展示")])],1)]),_c('div',{staticClass:"poster-handle-item"},[_c('div',{staticClass:"poster-handle-item-title no-red"},[_vm._v("位置调整")]),_c('div',{staticClass:"poster-handle-item-value"},[_c('div',{staticClass:"restore-btn",on:{"click":_vm.centerPosition}},[_vm._v("恢复默认位置")]),_c('div',{staticClass:"img-tip",staticStyle:{"width":"100%"}},[_vm._v("头像、昵称、二维码的展示位置可自由拖拽调整")])])])]),_c('div',{staticClass:"handle-btns"},[_c('div',{staticClass:"restoration-btn cancel-btn",on:{"click":_vm.checkAndCancel}},[_vm._v("返回")]),_c('div',{staticClass:"restoration-btn save-btn",on:{"click":_vm.savePoster}},[_vm._v("保存")])])])]),_c('ss-modal',{attrs:{"iconType":"primary","title":"保存提示","content":"是否保存当前海报","visible":_vm.showAlert,"models":false,"btnText":{confirm:'保存',cancel:'取消'}},on:{"update:visible":function($event){_vm.showAlert=$event},"confirms":_vm.savePoster,"cancel":_vm.cancel}})],1)}
var posterEditorvue_type_template_id_270a1162_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"avatar-box"},[_c('img',{attrs:{"src":"http://wechatapppro-1252524126.file.myqcloud.com/appAKLWLitn7978/image/84b7cbf2215669abf105275b59df16f1.png","alt":""}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"nickname-text"},[_c('i',{staticClass:"font_family icon-img_name_zhanwei1 nickname-title"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"goods-info-img"},[_c('img',{staticClass:"goods-info-img-img",attrs:{"src":"http://wechatapppro-1252524126.file.myqcloud.com/appAKLWLitn7978/image/9ed6644ff822ebb17625b89250a96679.png","alt":""}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"no-img"},[_c('img',{attrs:{"src":"http://wechatapppro-1252524126.file.myqcloud.com/appAKLWLitn7978/image/5686bd2b0ab1e33f27522bdc986461d0.png","alt":""}}),_c('div',[_vm._v("点击上传")])])}]


// CONCATENATED MODULE: ./src/components/shareModal/posterEditor.vue?vue&type=template&id=270a1162&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/shareModal/posterEditor.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var posterEditorvue_type_script_lang_js_ = ({
  components: {
    Loading: loading
  },
  props: {
    poster: {
      // 一个海报对象 存着 id 海报图片 坐标设置......
      type: Object
    },
    limitPosterSize: {
      type: Number,
      default: 1
    },
    resourceType: {
      // 商品类型
      type: [String, Number]
    },
    businessId: {
      // 商品id
      type: String
    },
    activityType: {
      // 营销活动类型 - 分享与设置埋点需要用 
      type: [String, Number],
      default: ""
    },
    shareType: {
      // 1微页面,2资源课程，3-拼团活动
      type: Number
    }
  },
  data: function data() {
    return {
      loading: false,
      showAlert: false,
      // hasChangeBg:false,
      defaultItem: {},
      // 传进来的poster不能编辑 ， 用这个来复制一遍
      bigAvatar: {
        top: 25,
        left: 93
      },
      bigNickname: {
        top: 58,
        left: 80
      },
      bigCodeQr: {
        top: 326,
        left: 82
      },
      // 拖拽的一些初始化参数
      drag_option: {
        group: {
          pull: false,
          put: false
        },
        animation: 300,
        scroll: true,
        bubbleScroll: true,
        scrollSensitivity: 200
      },
      parentElement: {},
      currentBox: "avatar" //当前移动对象

    };
  },
  created: function created() {
    this.defaultItem = JSON.parse(JSON.stringify(this.poster));
  },
  computed: {
    // 是新建 还是 编辑 根据poster对象的 id 是否存在来判断
    editType: function editType() {
      if (this.poster.id) {
        return 'edit';
      } else {
        return 'new';
      }
    }
  },
  watch: {
    defaultItem: function defaultItem(val) {
      // 每次修改坐标值 都同步修改到  bigAvatar bigNickname bigCodeQr
      this.bigAvatar.left = this.defaultItem.avatarPosition.x;
      this.bigAvatar.top = this.defaultItem.avatarPosition.y;
      this.bigNickname.left = this.defaultItem.nicknamePosition.x;
      this.bigNickname.top = this.defaultItem.nicknamePosition.y;
      this.bigCodeQr.left = this.defaultItem.qrcodePosition.x;
      this.bigCodeQr.top = this.defaultItem.qrcodePosition.y;
    }
  },
  methods: {
    // 点击返回按钮 前置校验
    checkAndCancel: function checkAndCancel() {
      // 修改过 背景图片 alert提示是否要保存
      if (this.defaultItem.posterUrl) {
        this.showAlert = true;
      } else {
        this.cancel();
      }
    },
    upSensor: function upSensor() {
      // 埋点数据 神策
      try {
        sensors.track('ADM03003_creat_poster', {
          activity_type: this.shareType === 3 ? this.activityType : '',
          // 营销活动类型  不是营销活动则传 ''
          resource_type: this.shareType === 2 ? this.resourceType : '' // 资源类型 营销活动传 '' 

        });
      } catch (err) {
        console.log(err);
      }
    },
    // 返回 
    cancel: function cancel() {
      this.$parent.isSettingEditor = false;
      this.$parent.isSettingPoster = true;
    },

    /**
     * savePoster 保存海报
     */
    savePoster: function savePoster() {
      var _this = this;

      if (!this.defaultItem.posterUrl) {
        this.$message.warning("请先选择背景图片");
      } else {
        // 调用 保存接口， 保存成功后，回到海报列表页并重新请求列表接口
        //兼容老数据  坐标 需要加上间距 获取列表的时候-6/12 保存的时候对应的要 +6/12 
        var params = {
          resource_id: this.businessId,
          resource_type: this.resourceType,
          avatar_position: JSON.stringify({
            x: this.defaultItem.avatarPosition.x + 6,
            y: this.defaultItem.avatarPosition.y + 12
          }),
          is_show_avatar: this.defaultItem.isShowAvatarAndName,
          is_show_fingerprints: this.defaultItem.isShowQrcode,
          is_show_nickname: this.defaultItem.isShowAvatarAndName,
          nickname_color: this.defaultItem.nicknameColor,
          nickname_position: JSON.stringify({
            x: this.defaultItem.nicknamePosition.x + 6,
            y: this.defaultItem.nicknamePosition.y + 12
          }),
          poster_url: this.defaultItem.posterUrl,
          qrcode_position: JSON.stringify({
            x: this.defaultItem.qrcodePosition.x + 6,
            y: this.defaultItem.qrcodePosition.y + 12
          }),
          is_show_goods: this.defaultItem.isShowGoodsInfo,
          is_show_price: this.defaultItem.isShowGoodsPrice
        };

        if (this.defaultItem.id) {
          params.poster_id = this.defaultItem.id;
        }

        this.loading = true;
        external_axios_default.a.post("/poster_share/add_or_edit_poster", params).then(function (_ref) {
          var data = _ref.data;
          _this.loading = false;

          if (data.code === 0) {
            _this.$message.info("保存成功");

            if (_this.editType === 'new') {
              // 新建海报需要埋点
              _this.upSensor();
            }

            _this.cancel();
          } else {
            _this.$message.warning("保存海报失败");
          }
        }).catch(function (error) {
          _this.loading = false;
          console.log(error);

          _this.$message.warning("保存海报失败");
        });
      }
    },
    // 从素材库选择图片
    chooseImg: function chooseImg() {
      var _this2 = this;

      this.$material({
        zIndex: 20000,
        multiple: false
      }).then(function (res) {
        console.log(res);
        var imgObj = res.data[0];
        if (!imgObj) return;
        var materialSize = parseInt(imgObj.material_size);

        if (materialSize <= 1024 * _this2.limitPosterSize) {
          _this2.defaultItem.posterUrl = imgObj.url;
          _this2.hasChangeBg = true;
        } else {
          _this2.$message.warning("\u4E0D\u80FD\u9009\u62E9\u8D85\u8FC71M\u7684\u56FE\u7247");
        }
      }).catch(function (action) {
        console.log(action);
      });
    },

    /**
     * hoverShow 选中移动对象的时候处理
     */
    hoverShow: function hoverShow(e) {
      var classArray = e.target.className.split(" ");
      this.currentBox = classArray[0] + "";
      this.$refs[this.currentBox].classList.add("move-border");
      var disX = e.target.offsetLeft;
      var disY = e.target.offsetTop;
    },

    /**
     * startMove 开始移动
     */
    startMove: function startMove(e) {
      var that = this;
      var oDiv = e.target;
      var classArray = e.target.className.split(" ");
      this.currentBox = classArray[0] + "";
      var targetDom = this.currentBox;
      that.parentElement.height = this.$refs.poster.clientHeight;
      that.parentElement.width = this.$refs.poster.clientWidth;
      that.parentElement.limitLeft = 0;
      that.parentElement.limitTop = 0;
      that.parentElement.limitBottom = that.parentElement.height - e.target.clientHeight;
      that.parentElement.limitRight = that.parentElement.width - e.target.clientWidth;
      var disX = e.clientX - oDiv.offsetLeft;
      var disY = e.clientY - oDiv.offsetTop;

      document.onmousemove = function (e) {
        var l = e.clientX - disX;
        var t = e.clientY - disY; //移动当前元素
        // 不能超过父级边界

        if (l < that.parentElement.limitLeft) {
          l = 0;
        } else if (l >= that.parentElement.limitRight) {
          l = that.parentElement.limitRight - 1;
        }

        if (t >= that.parentElement.limitBottom) {
          t = that.parentElement.limitBottom - 1;
        } else if (t < that.parentElement.limitTop) {
          t = 0;
        }

        that[targetDom].left = l;
        that[targetDom].top = t;
        that[targetDom].right = l + e.target.clientWidth;
        that[targetDom].bottom = t + e.target.clientHeight;
      };

      document.onmouseup = function (e) {
        // that.noOver(e);
        document.onmousemove = null;
        document.onmouseup = null;
      };
    },

    /**
     * leaveShow 离开移动对象的时候处理
     */
    leaveShow: function leaveShow() {
      // this.removeKeydown();
      this.$refs[this.currentBox].classList.remove("move-border");
      this.defaultItem.avatarPosition.x = this.bigAvatar.left;
      this.defaultItem.avatarPosition.y = this.bigAvatar.top;
      this.defaultItem.nicknamePosition.x = this.bigNickname.left;
      this.defaultItem.nicknamePosition.y = this.bigNickname.top;
      this.defaultItem.qrcodePosition.x = this.bigCodeQr.left;
      this.defaultItem.qrcodePosition.y = this.bigCodeQr.top;
    },

    /**
     * handleStyle 切换样式
     */
    handleStyle: function handleStyle(type) {
      var _this3 = this;

      if (type === 1 || type === 0) {
        this.$nextTick(function () {
          var parentWidth = _this3.$refs.poster.clientWidth;
          var codeWidth = _this3.$refs.bigCodeQr.clientWidth;
          var codeHeight = _this3.$refs.bigCodeQr.clientHeight;
          _this3.bigCodeQr.left = parentWidth / 2 - codeWidth / 2;
          _this3.defaultItem.qrcodePosition.x = _this3.bigCodeQr.left;
        });
      }
    },

    /**
     * 恢复默认位置
     */
    centerPosition: function centerPosition() {
      // 默认位置  高度位置固定  宽度居中
      var code = this.$refs.bigCodeQr;
      var parentWidth, parentHeight;

      if (this.$refs.poster) {
        parentWidth = this.$refs.poster.clientWidth;
        parentHeight = this.$refs.poster.clientHeight;
      }

      if (code) {
        var codeWidth = this.$refs.bigCodeQr.clientWidth;
        var codeHeight = this.$refs.bigCodeQr.clientHeight;
        this.bigCodeQr.left = parentWidth / 2 - codeWidth / 2;
        this.bigCodeQr.top = 326;
      }

      if (this.$refs.bigAvatar) {
        var avatarWidth = this.$refs.bigAvatar.clientWidth;
        var avatarHeight = this.$refs.bigAvatar.clientHeight;
        this.bigAvatar.left = parentWidth / 2 - avatarWidth / 2;
        this.bigAvatar.top = 25;
      }

      if (this.$refs.bigNickname) {
        var nicknameWidth = this.$refs.bigNickname.clientWidth;
        var nicknameHeight = this.$refs.bigNickname.clientHeight;
        this.bigNickname.left = parentWidth / 2 - nicknameWidth / 2;
        this.bigNickname.top = 58;
      }

      this.defaultItem.avatarPosition.x = this.bigAvatar.left;
      this.defaultItem.avatarPosition.y = this.bigAvatar.top;
      this.defaultItem.nicknamePosition.x = this.bigNickname.left;
      this.defaultItem.nicknamePosition.y = this.bigNickname.top;
      this.defaultItem.qrcodePosition.x = this.bigCodeQr.left;
      this.defaultItem.qrcodePosition.y = this.bigCodeQr.top;
    },
    httpLoadFail: function httpLoadFail(error) {
      var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "网络连接失败，请稍候再试！";
      this.$message.warning(msg);
    }
  }
});
// CONCATENATED MODULE: ./src/components/shareModal/posterEditor.vue?vue&type=script&lang=js&
 /* harmony default export */ var shareModal_posterEditorvue_type_script_lang_js_ = (posterEditorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/shareModal/posterEditor.vue?vue&type=style&index=0&lang=scss&
var posterEditorvue_type_style_index_0_lang_scss_ = __webpack_require__(92);

// CONCATENATED MODULE: ./src/components/shareModal/posterEditor.vue






/* normalize component */

var posterEditor_component = normalizeComponent(
  shareModal_posterEditorvue_type_script_lang_js_,
  posterEditorvue_type_template_id_270a1162_render,
  posterEditorvue_type_template_id_270a1162_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var posterEditor = (posterEditor_component.exports);
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/shareModal/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var mainvue_type_script_lang_js_ = ({
  name: "SsShareModal",
  props: {
    hasUsedForIntegral: {
      type: Object,
      default: {
        state: false,
        types: ''
      }
    },
    shareType: {
      // 1微页面,2资源课程，3-营销活动
      type: Number,
      default: 1
    },
    businessId: {
      // 商品/活动 的id 
      type: String,
      default: "1"
    },
    resourceType: {
      // 商品类型 - 海报设置需要用 
      type: [String, Number],
      default: ""
    },

    /**
     *  对应关系 : 
     *  0	推广员
        1	优惠券
        2	邀请码
        4	拼团
        5	限时折扣
        6	好友助力
        8	兑换码
        9	涨粉神器
        10	裂变海报
        11	秒杀
        13	砍价
        14	优惠码
    */
    activityType: {
      // 营销活动类型 - 分享语设置埋点需要用 
      type: [String, Number],
      default: ""
    },
    shareInfo: {
      type: Object
    },
    miniQrCodeText: {
      // 小程序二维码下面的文案提示  -- 一些特殊需求
      type: String,
      default: ''
    },

    /**
     * 新增promissionsInfo,兼容小程序资质有无资质类目状态的分享二维码隐藏逻辑，
     * status--Number, 1:有资质，默认；0:无资质
     * tipsText -- String, 无资质时候的文案展示
     */
    promissionsInfo: {
      type: Object,
      default: function _default() {
        return {
          status: 1,
          tipsText: ''
        };
      }
    }
  },
  components: {
    Alert: components_alert,
    Setting: setting,
    Loading: loading,
    posterSetting: posterSetting,
    posterEditor: posterEditor
  },
  data: function data() {
    return {
      isShowMessageBox: false,
      shareData: {},
      promissionsData: {},
      activeType: "",
      isSetting: false,
      // 修改分享设置
      isSettingPoster: false,
      // 修改海报设置
      isSettingEditor: false,
      // 显示 海报编辑
      showPosterTips: false,
      // 显示 海报设置的提示框
      imgLoading: false,
      resolve: null,
      promise: null,
      edittingPoster: {
        // 海报设置 需要的参数
        type: 'new',
        resource_id: '',
        image_url: ''
      },
      defaultTitleMap: {
        h5: 'H5店铺',
        littleProgram: '小程序',
        wework: '企业微信'
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      _this.initData();

      _this.genarateQrCode();

      _this.getLittleShareInfo();
    }, 0);
  },
  created: function created() {
    // 读取 localStorage 显示 海报设置引导
    var tip = localStorage.getItem("sharebox_show_poster_tip");

    if (tip === null) {
      this.showPosterTips = true;
    } else {
      this.showPosterTips = false;
    }
  },
  computed: {
    // header的标题
    headTitle: function headTitle() {
      if (this.isSetting) {
        return '分享>分享语设置';
      } else if (this.isSettingPoster) {
        return '分享>海报设置';
      } else if (this.isSettingEditor) {
        return '分享>海报设置>编辑海报';
      } else {
        return '分享';
      }
    },
    // 特殊处理h5的title，去除店铺
    copyTitle: function copyTitle() {
      var shareData = this.shareData,
          activeType = this.activeType;

      if (activeType === 'h5') {
        return 'H5';
      } else {
        return shareData[activeType] && shareData[activeType]['title'];
      }
    },
    // 获取平台的类型 平台类型 1-B端管理台 2-企学院 3-智慧校园
    getType: function getType() {
      var type;

      if (window.__shop_type && window.__shop_type == "6") {
        type = 3;
      } else if (window.globVersionType && (window.globVersionType === 170 || window.globVersionType === 171)) {
        type = 2;
      } else {
        type = 1;
      }

      return type;
    }
  },
  methods: {
    initData: function initData() {
      var shareInfo = this.shareInfo;
      var shareData = JSON.parse(JSON.stringify(shareInfo));
      this.shareData = shareData;
      var promissionsInfo = this.promissionsInfo;
      var promissionsData = JSON.parse(JSON.stringify(promissionsInfo));
      this.promissionsData = promissionsData;
      this.activeType = Object.keys(shareData)[0];
    },
    closePosterTips: function closePosterTips() {
      this.showPosterTips = false;
      localStorage.setItem("sharebox_show_poster_tip", 1);
    },
    showPosterSetting: function showPosterSetting() {
      this.isSettingPoster = true; // 显示海报设置
      // 埋点数据 神策

      try {
        sensors.track('ADM03003_poster_setting', {
          activity_type: "",
          // 营销活动类型  目前接入分享组件的营销活动不支持海报设置 ， 所以固定传空字符
          resource_type: this.resourceType // 资源类型 就是传进来的 resourceType 

        });
      } catch (err) {
        console.log(err);
      }
    },
    // 获取小程序二维码
    getLittleShareInfo: function getLittleShareInfo() {
      var _this2 = this;

      if (this.shareData.hasOwnProperty("littleProgram") && this.promissionsData.status === 1) {
        // 小程序版本不够需要更新
        var littleProgram = this.shareData.littleProgram; // 发送请求，获取小程序信息

        if (!littleProgram["update_tip"]) {
          var req_url = littleProgram.req_url,
              req_data = littleProgram.req_data;
          if (!req_url) return false;
          this.imgLoading = true;
          external_axios_default.a.post(req_url, req_data).then(function (_ref) {
            var data = _ref.data;

            if (data.code == 0) {
              if (_this2.shareType == 1) {
                var micro_program_info = data.data.micro_program_info;
                littleProgram["link"] = micro_program_info["href_url"];
                littleProgram["qr_code"] = micro_program_info["qr_url"];
              } else {
                littleProgram["qr_code"] = data.data;
              }
            } else {
              _this2.$message.warning("获取小程序二维码失败");
            }

            _this2.imgLoading = false;
          }).catch(function (error) {
            console.log(error);

            _this2.$message.warning("获取小程序二维码失败");

            _this2.imgLoading = false;
          });
        }
      }
    },
    //点击关闭按钮
    closeBox: function closeBox() {
      this.isShowMessageBox = false;
      this.resolve();
    },
    showModal: function showModal() {
      var _this3 = this;

      this.isShowMessageBox = true;
      this.promise = new Promise(function (resolve) {
        _this3.resolve = resolve;
      }); // 返回promise对象

      return this.promise;
    },
    remove: function remove() {
      var _this4 = this;

      this.isShowMessageBox = false;
      setTimeout(function () {
        _this4.destroy();
      }, 0);
    },
    destroy: function destroy() {
      this.$destroy();
      document.body.removeChild(this.$el);
    },
    copyLink: function copyLink() {
      var _this5 = this;

      var board = new external_clipboard_default.a(".ss-copyHref");
      board.on("success", function (e) {
        _this5.$message.info("复制成功");

        e.clearSelection();
      });
      board.on("error", function (e) {
        this.$message.warning("复制失败");
        e.clearSelection();
      });
    },
    genarateQrCode: function genarateQrCode() {
      var _this6 = this;

      var that = this;
      var qrcodeArr = [];

      if (this.shareData.hasOwnProperty("h5")) {
        qrcodeArr.push("h5");
      }

      if (this.shareData.hasOwnProperty("wework")) {
        qrcodeArr.push("wework");
      }

      qrcodeArr.forEach(function (item) {
        _this6.$nextTick(function () {
          new external_qrious_default.a({
            element: that.$refs["".concat(item, "_qr")],
            size: 160,
            value: that.shareData[item]["link"]
          });
        });

        setTimeout(function () {
          var canvas = that.$refs["".concat(item, "_qr")];
          that.shareData[item]["qr_code"] = canvas.toDataURL("image/png");
        }, 100);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/shareModal/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var shareModal_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/shareModal/main.vue?vue&type=style&index=0&lang=scss&
var mainvue_type_style_index_0_lang_scss_ = __webpack_require__(93);

// CONCATENATED MODULE: ./src/components/shareModal/main.vue






/* normalize component */

var main_component = normalizeComponent(
  shareModal_mainvue_type_script_lang_js_,
  mainvue_type_template_id_40610bc2_render,
  mainvue_type_template_id_40610bc2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var shareModal_main = (main_component.exports);
// EXTERNAL MODULE: external "@xiaoe/material_center_box"
var material_center_box_ = __webpack_require__(53);
var material_center_box_default = /*#__PURE__*/__webpack_require__.n(material_center_box_);

// EXTERNAL MODULE: external "@xiaoe/material_center_box/static/index.css"
var index_css_ = __webpack_require__(94);

// CONCATENATED MODULE: ./src/components/shareModal/index.js
 // 素材弹窗选择器




 // 定义插件对象

var ShareModal = {}; // vue的install方法，用于定义vue插件

ShareModal.install = function (Vue, options) {
  var MessageBoxInstance = Vue.extend(shareModal_main);
  var currentModal;

  var initInstance = function initInstance() {
    // 实例化vue实例
    currentModal = new MessageBoxInstance();
    var currentModalEl = currentModal.$mount().$el;
    document.body.appendChild(currentModalEl);
  }; // 在Vue的原型上添加实例方法，以全局调用


  Vue.use(material_center_box_default.a);
  Vue.use(components_radio);
  Vue.use(components_modal);

  Vue.prototype.$share = function (options) {
    if (!currentModal) {
      initInstance();
    }

    Object.assign(currentModal, options);
    currentModal.showModal().then(function (val) {
      currentModal = null;
      return Promise.resolve(val);
    });
  };
};

/* harmony default export */ var shareModal = (ShareModal);
// CONCATENATED MODULE: ./libEntry/install/share-modal/index.js

/* harmony default export */ var share_modal = (shareModal);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/defaultTips/index.vue?vue&type=template&id=16186fae&scoped=true&
var defaultTipsvue_type_template_id_16186fae_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ss-default-tips-wrapper"},_vm._l((_vm.tipsList),function(item,index){return _c('div',{key:index,staticClass:"ss-default-tips",class:[item.tip_type ===1 ?'ss-default-tips-yellow':'ss-default-tips-blue']},[_vm._v("\n    "+_vm._s(item.content)+"\n    "),(item.target_url&&item.target_word)?_c('a',{attrs:{"href":item.target_url,"target":"_blank"},on:{"click":function($event){return _vm.reportTipsCount(item.id,1)}}},[_vm._v(_vm._s(item.target_word))]):_vm._e(),(item.is_close === 2)?_c('img',{staticClass:"ss-default-tips-close",attrs:{"src":"https://wechatapppro-1252524126.file.myqcloud.com/appAKLWLitn7978/image/5e5f1f422f770c8f527a507990bb8946.png"},on:{"click":function($event){return _vm.closeTips(item,index)}}}):_vm._e()])}),0)}
var defaultTipsvue_type_template_id_16186fae_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/defaultTips/index.vue?vue&type=template&id=16186fae&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/defaultTips/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var defaultTipsvue_type_script_lang_js_ = ({
  name: "SsDefaultTips",
  props: {
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    router: {
      type: String,
      default: function _default() {
        return "";
      }
    }
  },
  data: function data() {
    return {
      tipsList: [],
      getList: []
    };
  },
  watch: {
    list: {
      handler: function handler() {
        this.tipsList = this.concatList();
      },
      immediate: true
    },
    router: function router() {
      this.getTipsList();
    }
  },
  computed: {
    // 过滤通过props传入的List
    filterPropsList: function filterPropsList() {
      return this.filterData(this.list);
    },
    // 过滤o端配置的List
    filterGetList: function filterGetList() {
      return this.filterData(this.getList);
    }
  },
  created: function created() {
    this.getTipsList();
  },
  methods: {
    // 合并list
    concatList: function concatList() {
      return this.filterPropsList.concat(this.filterGetList);
    },
    // 获取平台的类型 平台类型 1-B端管理台 2-企学院 3-智慧校园
    getType: function getType() {
      var type;

      if (window.__shop_type && window.__shop_type == "6") {
        type = 3;
      } else if (window.globVersionType && (window.globVersionType === 170 || window.globVersionType === 171)) {
        type = 2;
      } else {
        type = 1;
      }

      return type;
    },
    // 获取o端配置的小黄条
    getTipsList: function getTipsList() {
      var _this = this;

      var type, router;
      type = this.getType();
      router = window.location.href;
      external_axios_default.a.get("/btips/get_tips_url", {
        params: {
          router: router,
          type: type
        }
      }).then(function (res) {
        var result = res.data;

        if (result.code === 0) {
          _this.getList = result.data;
          _this.tipsList = _this.concatList();

          _this.reportTipsCount(_this.filterGetList, 0);
        } else {
          _this.getList = [];
          _this.tipsList = _this.concatList();
        }
      }).catch(function (err) {
        _this.getList = [];
        _this.tipsList = _this.concatList();
        console.error(err);
      });
    },
    // 过滤数据
    filterData: function filterData(list) {
      //   在localStorage已存在的tips要删除
      if (list.length === 0) return list;
      var tips = JSON.parse(localStorage.getItem("tips")) || {};
      var appId = window.__app_id;

      if (tips[appId]) {
        return list.filter(function (item) {
          return !tips[appId].some(function (tip) {
            return tip.id == item.id;
          });
        });
      } else {
        return list;
      }
    },
    // 关闭黄条
    closeTips: function closeTips(item, index) {
      this.tipsList.splice(index, 1);
      var tips = JSON.parse(localStorage.getItem("tips")) || {};
      var appId = window.__app_id;

      if (!tips[appId]) {
        tips[appId] = [];
      }

      tips[appId].push({
        id: item.id,
        end_time: item.end_time
      });
      localStorage.setItem("tips", JSON.stringify(tips));
    },
    // 上报曝光次数
    reportTipsCount: function reportTipsCount(data, reportType) {
      // reportType 0：曝光,1：点击
      var tipId;

      if (reportType === 1) {
        // 判断是否属于filterGetList
        var isInFilterGetList = this.filterGetList.some(function (item) {
          return item.id === data;
        });

        if (isInFilterGetList) {
          tipId = data;
        } else {
          return;
        }
      } else if (reportType === 0 && data.length) {
        tipId = data.map(function (item) {
          return item.id;
        }).join(",");
      } else {
        return;
      }

      external_axios_default.a.get("/report_tips_count", {
        params: {
          tipId: tipId,
          reportType: reportType
        }
      }).then(function (res) {
        var result = res.data;

        if (result.code === 0) {
          console.log("小黄条曝光上报成功");
        } else {
          console.error("小黄条曝光上报失败");
          console.error(res);
        }
      }).catch(function (err) {
        console.error(err);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/defaultTips/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_defaultTipsvue_type_script_lang_js_ = (defaultTipsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/defaultTips/index.vue?vue&type=style&index=0&id=16186fae&lang=scss&scoped=true&
var defaultTipsvue_type_style_index_0_id_16186fae_lang_scss_scoped_true_ = __webpack_require__(95);

// CONCATENATED MODULE: ./src/components/defaultTips/index.vue






/* normalize component */

var defaultTips_component = normalizeComponent(
  components_defaultTipsvue_type_script_lang_js_,
  defaultTipsvue_type_template_id_16186fae_scoped_true_render,
  defaultTipsvue_type_template_id_16186fae_scoped_true_staticRenderFns,
  false,
  null,
  "16186fae",
  null
  
)

/* harmony default export */ var defaultTips = (defaultTips_component.exports);
// CONCATENATED MODULE: ./libEntry/install/default-tips/index.js


defaultTips.install = function (Vue) {
  Vue.component(defaultTips.name, defaultTips);
};

/* harmony default export */ var default_tips = (defaultTips);
// CONCATENATED MODULE: ./libEntry/install/name-replacer/index.js


__webpack_require__(96);

nameReplacer.install = function (Vue) {
  Vue.component(nameReplacer.name, nameReplacer);
};

/* harmony default export */ var name_replacer = (nameReplacer);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/pushSettingDialog/index.vue?vue&type=template&id=18027feb&
var pushSettingDialogvue_type_template_id_18027feb_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"dialog"}},[_c('div',{staticClass:"ss-pushSetting"},[_c('div',{staticClass:"setting-pop"},[_c('div',{staticClass:"title"},[_c('span',[_vm._v("选择通知推送方式")]),_c('i',{staticClass:"close-btn sense-icon-close",on:{"click":_vm.cancelClick}})]),(_vm.loading)?_c('div',{staticClass:"loading"},[_vm._v("加载中...")]):(_vm.showEmptyTips)?[_c('div',{staticClass:"empty-warning"},[_vm._v("\n            暂无可用推送渠道，请前往\n            "),_c('span',{staticClass:"link-text",on:{"click":_vm.goPushSetting}},[_vm._v("推送设置")]),_vm._v("\n            开启\n          ")])]:[_c('div',{staticClass:"content"},[(_vm.wxAvailable && _vm.showChannels.wx)?_c('div',{staticClass:"item"},[(_vm.isAuth === 1)?[(_vm.isPersonalPush === 1)?[(_vm.wxAvailable)?[_c('div',{staticClass:"item-title"},[_vm._v("微信模板消息")]),_c('div',{staticClass:"item-content"},[_c('div',{staticClass:"content-state"},[_c('ss-radio',{attrs:{"label":true},model:{value:(_vm.wxCurState),callback:function ($$v) {_vm.wxCurState=$$v},expression:"wxCurState"}},[_vm._v("开启")]),_c('ss-radio',{attrs:{"label":false},model:{value:(_vm.wxCurState),callback:function ($$v) {_vm.wxCurState=$$v},expression:"wxCurState"}},[_vm._v("关闭")])],1),(_vm.isAuth === 1)?_c('div',{staticClass:"go-auth"},[_vm._v("\n                        用户关注“小鹅通知识助手”公众号后，每天可以收到每个店铺发送的前三条消息。如需使用自有服务号，请前往\n                        "),_c('span',{staticClass:"link-text",on:{"click":_vm.goAuth}},[_vm._v("授权服务号")])]):_vm._e()])]:void 0]:_vm._e()]:[(_vm.wxAvailable)?[_c('div',{staticClass:"item-title"},[_vm._v("微信模板消息")]),_c('div',{staticClass:"item-content"},[_c('div',{staticClass:"content-state"},[_c('ss-radio',{attrs:{"label":true},model:{value:(_vm.wxCurState),callback:function ($$v) {_vm.wxCurState=$$v},expression:"wxCurState"}},[_vm._v("开启")]),_c('ss-radio',{attrs:{"label":false},model:{value:(_vm.wxCurState),callback:function ($$v) {_vm.wxCurState=$$v},expression:"wxCurState"}},[_vm._v("关闭")])],1),(!_vm.wxMainState)?_c('close-warning'):_vm._e()],1)]:_vm._e()]],2):_vm._e(),(_vm.appAvailable && _vm.showChannels.app)?_c('div',{staticClass:"item"},[_c('div',{staticClass:"item-title"},[_vm._v("小鹅通助手App")]),_c('div',{staticClass:"item-content"},[_c('div',{staticClass:"content-state"},[_c('ss-radio',{attrs:{"label":true},model:{value:(_vm.appCurState),callback:function ($$v) {_vm.appCurState=$$v},expression:"appCurState"}},[_vm._v("开启")]),_c('ss-radio',{attrs:{"label":false},model:{value:(_vm.appCurState),callback:function ($$v) {_vm.appCurState=$$v},expression:"appCurState"}},[_vm._v("关闭")])],1),_c('transition',{attrs:{"name":"fade"}},[(_vm.appMainState && _vm.appCurState && _vm.isShowApp)?_c('div',{staticClass:"warning-color"},[_vm._v("\n                    用户每天可收到店铺推送的前3条通知\n                  ")]):_vm._e()]),((!_vm.appMainState && _vm.appCurState) || !_vm.isShowApp)?_c('close-warning'):_vm._e()],1)]):_vm._e(),(_vm.smsAvailable && _vm.showChannels.sms)?_c('div',{staticClass:"item"},[_c('div',{staticClass:"item-title"},[_vm._v("短信")]),_c('div',{staticClass:"item-content"},[_c('div',{staticClass:"content-state"},[_c('ss-radio',{attrs:{"label":true},model:{value:(_vm.smsCurState),callback:function ($$v) {_vm.smsCurState=$$v},expression:"smsCurState"}},[_vm._v("开启")]),_c('ss-radio',{attrs:{"label":false},model:{value:(_vm.smsCurState),callback:function ($$v) {_vm.smsCurState=$$v},expression:"smsCurState"}},[_vm._v("关闭")])],1),_c('transition',{attrs:{"name":"fade"}},[(_vm.smsMainState && _vm.smsCurState)?_c('div',[_c('span',{staticClass:"remaining-msg"},[_vm._v("剩余："+_vm._s(_vm.remainingMsg)+"条")]),_c('span',{staticClass:"operate-btn",class:{'disabled': !_vm.canRefresh},on:{"click":_vm.getRemainingMsg}},[_vm._v("刷新")]),_c('span',{staticClass:"operate-btn",on:{"click":_vm.goRecharge}},[_vm._v("去充值\n                      "),_c('i',{staticClass:"sense-icon-pagination-right"})])]):_vm._e()]),(!_vm.smsMainState && _vm.smsCurState)?_c('close-warning'):_vm._e()],1)]):_vm._e(),_c('div',{staticClass:"item"},[_c('div',{staticClass:"item-title"},[_vm._v("提示")]),_c('div',{staticClass:"item-content warning-color"},[_vm._v("如果过度频繁推送通知，服务号可能因用户投诉而遭到微信处罚。")])])])],_c('div',{staticClass:"footer"},[_c('ss-button',{staticClass:"cancel-btn",on:{"click":_vm.cancelClick}},[_vm._v("取消")]),_c('ss-button',{staticClass:"save-btn",on:{"click":_vm.confirmClick}},[_vm._v("保存")])],1)],2)])])}
var pushSettingDialogvue_type_template_id_18027feb_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/pushSettingDialog/index.vue?vue&type=template&id=18027feb&

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/pushSettingDialog/closeWarning.vue?vue&type=template&id=b768dbf4&scoped=true&
var closeWarningvue_type_template_id_b768dbf4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"warning-line"},[_c('span',{staticClass:"state"},[_vm._v("未正常启用，")]),_c('span',[_vm._v("该渠道未开启推送，请前往")]),_c('span',{staticClass:"link-text",on:{"click":_vm.goPushSetting}},[_vm._v("推送设置")]),_c('span',[_vm._v("开启")])])}
var closeWarningvue_type_template_id_b768dbf4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/pushSettingDialog/closeWarning.vue?vue&type=template&id=b768dbf4&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/pushSettingDialog/closeWarning.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var closeWarningvue_type_script_lang_js_ = ({
  name: 'closeWarning',
  methods: {
    goPushSetting: function goPushSetting() {
      window.open('/messageManage#/messageManage');
    }
  }
});
// CONCATENATED MODULE: ./src/components/pushSettingDialog/closeWarning.vue?vue&type=script&lang=js&
 /* harmony default export */ var pushSettingDialog_closeWarningvue_type_script_lang_js_ = (closeWarningvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/pushSettingDialog/closeWarning.vue?vue&type=style&index=0&id=b768dbf4&scoped=true&lang=scss&
var closeWarningvue_type_style_index_0_id_b768dbf4_scoped_true_lang_scss_ = __webpack_require__(97);

// CONCATENATED MODULE: ./src/components/pushSettingDialog/closeWarning.vue






/* normalize component */

var closeWarning_component = normalizeComponent(
  pushSettingDialog_closeWarningvue_type_script_lang_js_,
  closeWarningvue_type_template_id_b768dbf4_scoped_true_render,
  closeWarningvue_type_template_id_b768dbf4_scoped_true_staticRenderFns,
  false,
  null,
  "b768dbf4",
  null
  
)

/* harmony default export */ var closeWarning = (closeWarning_component.exports);
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/pushSettingDialog/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var pushSettingDialogvue_type_script_lang_js_ = ({
  name: 'SsPushSettingDialog',
  components: {
    SsButton: components_button,
    SsRadio: components_radio,
    CloseWarning: closeWarning
  },
  data: function data() {
    return {
      // 剩余短信数量
      remainingMsg: '',
      // 店铺是否有授权 1 未授权  0 已授权
      isAuth: '',
      // 当前场景是否支持服务号
      wxAvailable: '',
      // 当前场景是否支持app
      appAvailable: '',
      // 当前场景是否支持短信
      smsAvailable: '',
      // 当前场景服务号总开关状态
      wxMainState: '',
      // 当前场景app总开关状态
      appMainState: '',
      // 当前场景短信总开关状态
      smsMainState: '',
      // 当前场景服务号当前开关状态
      wxCurState: '',
      // 当前场景app当前开关状态
      appCurState: '',
      // 当前场景短信当前开关状态
      smsCurState: '',
      // 短信flag
      canRefresh: true,
      // 总开关配置表
      settingList: [],
      // loading状态
      loading: false,
      // 知识助手服务号开启状态 1是开启，0是关闭
      isPersonalPush: '',
      isShowApp: 0 //小鹅通助手总开关

    };
  },
  props: {
    // 服务号模板消息
    wxState: {
      default: false,
      type: Boolean,
      validator: function validator(value) {
        return typeof value === 'boolean';
      }
    },
    // 小鹅通助手App
    appState: {
      default: false,
      type: Boolean,
      validator: function validator(value) {
        return typeof value === 'boolean';
      }
    },
    // 短信
    smsState: {
      default: false,
      type: Boolean,
      validator: function validator(value) {
        return typeof value === 'boolean';
      }
    },
    // 场景Id
    businessId: {
      type: String,
      required: true
    },
    // 要展示的渠道
    channels: {
      type: Array,
      required: true,
      default: function _default() {
        return [];
      },
      validator: function validator(val) {
        var flag = true;

        for (var i = 0; i < val.length; i++) {
          if (['wx', 'app', 'sms'].indexOf(val[i]) === -1) {
            flag = false;
            break;
          }
        }

        return flag;
      }
    }
  },
  computed: {
    // 根据组件使用方传入的channels来控制显示哪些渠道
    showChannels: function showChannels() {
      var wx = this.channels.indexOf('wx') !== -1;
      var app = this.channels.indexOf('app') !== -1;
      var sms = this.channels.indexOf('sms') !== -1;
      return {
        wx: wx,
        app: app,
        sms: sms
      };
    },
    // 无渠道显示时的提醒
    showEmptyTips: function showEmptyTips() {
      //展示短信
      var smsShow = this.smsAvailable && this.showChannels.sms; // 未授权自有服务号，且未开启知识助手推送

      var wxShow = this.isAuth === 1 && this.isPersonalPush === 0; // 未授权自有服务号，开启了知识助手推送，但当前场景不支持

      var wxShow2 = this.isAuth === 1 && this.isPersonalPush === 1 && !this.wxAvailable; // 已授权自有服务号，但总开关闭了

      var wxShow3 = this.isAuth === 0 && !this.wxMainState; // 已授权自有服务号，总开关开启，但当前场景不支持

      var wxShow4 = this.isAuth === 0 && this.wxMainState && !this.wxAvailable; //展示app

      var appShow = this.appAvailable && this.showChannels.app && this.isShowApp;

      if (this.showChannels.wx && this.showChannels.sms && this.showChannels.app) {
        // 当前业务需要展示的渠道（服务号，短信，app）
        if (wxShow && !smsShow && !appShow) {
          return true;
        } else {
          return false;
        }
      } else if (this.showChannels.wx && this.showChannels.sms) {
        // 当前业务需要展示的渠道（服务号，短信）
        if (wxShow && !smsShow) {
          return true;
        } else {
          return false;
        }
      } else if (this.showChannels.wx && this.showChannels.app) {
        // 当前业务需要展示的渠道（服务号，app）
        if (wxShow && !appShow) {
          return true;
        } else {
          return false;
        }
      } else if (this.showChannels.sms && this.showChannels.app) {
        // 当前业务需要展示的渠道（短信,app）
        if (!smsShow && !appShow) {
          return true;
        } else {
          return false;
        }
      } else if (this.showChannels.app) {
        // 当前业务需要展示的渠道（app）
        return !appShow;
      } else if (this.showChannels.wx) {
        // 当前业务需要展示的渠道（服务号）
        return wxShow || wxShow2 || wxShow3 || wxShow4;
      } else if (this.showChannels.sms) {
        // 当前业务需要展示的渠道（短信）
        return !smsShow;
      } else {
        // 啥渠道都不传，就展示空白提醒
        return true;
      }
    }
  },
  watch: {
    wxState: {
      handler: function handler() {
        this.wxCurState = this.wxState;
      },
      immediate: true
    },
    appState: {
      handler: function handler() {
        this.appCurState = this.appState;
      },
      immediate: true
    },
    smsState: {
      handler: function handler() {
        this.smsCurState = this.smsState;
      },
      immediate: true
    }
  },
  methods: {
    // 去推送设置页
    goPushSetting: function goPushSetting() {
      window.open('/messageManage#/messageManage');
    },
    // confirm callback
    confirmClick: function confirmClick() {
      this.$emit('confirmEvent', {
        wxState: this.wxCurState,
        appState: this.appCurState,
        smsState: this.smsCurState
      });
      this.cancelClick();
    },
    // cancel callback
    cancelClick: function cancelClick() {
      this.$emit('cancelEvent');
    },
    // 跳转到授权页
    goAuth: function goAuth() {
      window.open('/setService#/set_service_midd');
    },
    getAPPStatus: function getAPPStatus() {
      var _this = this;

      external_axios_default.a.get('/xiaoe_app/get_app_status').then(function (res) {
        var result = res.data;

        if (result.code === 0) {
          _this.isShowApp = result.data.is_show_app;
        } else {
          _this.$message.warning('app状态获取失败');
        }
      }).catch(function (err) {
        _this.$message.warning('网络连接失败，请重试！');
      });
    },
    // 获取店铺服务号授权情况
    getShopConfig: function getShopConfig() {
      var _this2 = this;

      return external_axios_default.a.get('/get_shop_info').then(function (res) {
        // 1 未授权  0 已授权
        _this2.isAuth = res.data.data.use_collection;
      }).catch(function (err) {
        console.log(err);
      });
    },
    // 获取剩余短信数量
    getRemainingMsg: function getRemainingMsg() {
      var _this3 = this;

      if (this.canRefresh) {
        external_axios_default.a.get('/get_sms_account').then(function (res) {
          if (res.data.code === 0) {
            _this3.canRefresh = true;
            _this3.remainingMsg = res.data.data.balance;
            _this3.loading = false;
          }
        }).catch(function (err) {
          return console.log(err);
        });
      }

      this.canRefresh = false;
    },
    // 跳转到短信包充值页
    goRecharge: function goRecharge() {
      // 产品要求新页面打开
      window.open('/sms_account#/sms_pay');
    },
    // 获取总开关配置表
    // 以获取当前传入businessId的场景支持情况
    getAllPushSetting: function getAllPushSetting() {
      var _this4 = this;

      external_axios_default.a.get('/msg_center/switch_list').then(function (res) {
        var data = res.data.data.list;

        if (!(data instanceof Array)) {
          console.error('获取总开关配置列表出错');
        }

        data.forEach(function (e) {
          e.sub_business.forEach(function (d) {
            if (d.business_id === _this4.businessId) {
              _this4.wxMainState = d.channels.wx_template_msg.switch_state !== 2;
              _this4.wxAvailable = d.channels.wx_template_msg.is_available !== 2;
              _this4.smsMainState = d.channels.template_sms.switch_state !== 2;
              _this4.smsAvailable = d.channels.template_sms.is_available !== 2; // app端

              _this4.appMainState = d.channels.xiaoe_app_msg.switch_state !== 2;
              _this4.appAvailable = d.channels.xiaoe_app_msg.is_available !== 2;
            }
          });
        });
      }).catch(function (err) {
        return console.log(err);
      });
    },
    // 个人模式下，获取店铺设置中服务号通知开启情况
    getPersonalPush: function getPersonalPush() {
      var _this5 = this;

      return external_axios_default.a.get('/shop_config/shop_info', {
        params: {
          modules: ['switch']
        }
      }).then(function (res) {
        if (res.data.code === 0) {
          // 1是开启，0是关闭
          _this5.isPersonalPush = res.data.data.switch.is_person_message_push;
        }
      }).catch(function (err) {
        return console.log(err);
      });
    }
  },
  mounted: function mounted() {
    var _this6 = this;

    this.loading = true;
    Promise.all([this.getShopConfig(), this.getPersonalPush(), this.getAPPStatus()]).then(function () {
      _this6.getAllPushSetting();

      _this6.getRemainingMsg();
    });
  }
});
// CONCATENATED MODULE: ./src/components/pushSettingDialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_pushSettingDialogvue_type_script_lang_js_ = (pushSettingDialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/pushSettingDialog/index.vue?vue&type=style&index=0&lang=scss&
var pushSettingDialogvue_type_style_index_0_lang_scss_ = __webpack_require__(98);

// CONCATENATED MODULE: ./src/components/pushSettingDialog/index.vue






/* normalize component */

var pushSettingDialog_component = normalizeComponent(
  components_pushSettingDialogvue_type_script_lang_js_,
  pushSettingDialogvue_type_template_id_18027feb_render,
  pushSettingDialogvue_type_template_id_18027feb_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var pushSettingDialog = (pushSettingDialog_component.exports);
// CONCATENATED MODULE: ./libEntry/install/push-setting-dialog/index.js


pushSettingDialog.install = function (Vue) {
  Vue.component(pushSettingDialog.name, pushSettingDialog);
};

/* harmony default export */ var push_setting_dialog = (pushSettingDialog);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/tree/index.vue?vue&type=template&id=46df7818&scoped=true&
var treevue_type_template_id_46df7818_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"ssTree",staticClass:"ss-tree-custom"},[(_vm.title)?_c('h1',{staticClass:"ss-tree-custom-title"},[_vm._v(_vm._s(_vm.title))]):_vm._e(),_vm._t("search",[_c('ss-input',{staticClass:"ss-tree__search-input",attrs:{"placeholder":"请输入搜索内容"},on:{"enter":_vm.search},model:{value:(_vm.searchValue),callback:function ($$v) {_vm.searchValue=$$v},expression:"searchValue"}},[_c('div',{staticClass:"ss-tree__serach-icon",attrs:{"slot":"prefix"},on:{"click":_vm.search},slot:"prefix"},[_c('i',{staticClass:"sense-icon-search"})]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.searchValue),expression:"searchValue"}],staticClass:"ss-tree__serach-icon",attrs:{"slot":"suffix"},on:{"click":_vm.searchClear},slot:"suffix"},[_c('i',{staticClass:"sense-icon-delete__withborder"})])]),_c('div',{staticClass:"ss-tree-custom-top"},[[(_vm.showSearchTitle)?_c('div',{staticClass:"ss-tree-custom-search-title"},[_vm._v("\n          "+_vm._s(_vm.titleGroup.searchTitle)+"\n        ")]):_vm._e(),_vm._l((_vm.searchList),function(item,index){return _vm._t("search-item",[_c('div',{key:index,staticClass:"ss-tree__search-item",on:{"click":function($event){return _vm.searchNodeClick(item)}}},[_c('div',{staticClass:"ss-tree__left"},[_vm._t("search-list-icon",[_c('img',{staticClass:"ss-tree__image",attrs:{"src":item[_vm.leafImage],"alt":""}}),_c('span',{staticClass:"ss-tree__name"},[_c('ss-name-replacer',{attrs:{"name":item[_vm.label],"type":"0"}})],1)])],2),(_vm.showCheckbox)?_c('div',{staticClass:"ss-tree__right"},[_c('ss-checkbox',{on:{"change":function () {
var args = [], len = arguments.length;
while ( len-- ) args[ len ] = arguments[ len ];
_vm.handleCheckBox.apply(void 0, args.concat( [item] ))}},model:{value:(item.isChecked),callback:function ($$v) {_vm.$set(item, "isChecked", $$v)},expression:"item.isChecked"}})],1):_vm._e()])],{"data":item})})]],2)]),(!_vm.showEmpty)?_c('div',{staticClass:"ss-tree-custom-bottom"},[(_vm.showTreeTitle)?_c('div',{staticClass:"ss-tree-custom-search-title"},[_vm._v("\n        "+_vm._s(_vm.titleGroup.treeTitle)+"\n    ")]):_vm._e(),(_vm.isLoadTree)?_c('tree-lite',_vm._g(_vm._b({ref:"treeMain",class:{'ss-tree-custom-lite': !_vm.showTreeTitle},attrs:{"containerWidth":_vm.containerWidth},on:{"check-change":_vm.handleCheckChange},scopedSlots:_vm._u([{key:"tree-node",fn:function(ref){
var node = ref.node;
var data = ref.data;
return _vm._t("tree-node",null,{"node":node,"data":data})}},{key:"leaf-node",fn:function(ref){
var node = ref.node;
var data = ref.data;
return _vm._t("leaf-node",null,{"node":node,"data":data})}}],null,true)},'tree-lite',Object.assign({}, _vm.$attrs, _vm.$props),false),_vm.$listeners)):_vm._e()],1):_c('div',{staticClass:"ss-tree-empty"},[_vm._v("\n    "+_vm._s(_vm.treeEmptyText)+"\n  ")])],2)}
var treevue_type_template_id_46df7818_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/tree/index.vue?vue&type=template&id=46df7818&scoped=true&

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/tree/components/tree.vue?vue&type=template&id=2bc89438&scoped=true&
var treevue_type_template_id_2bc89438_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ss-tree",class:{
    'ss-tree--highlight-current': _vm.highlightCurrent,
    'is-dragging': !!_vm.dragState.draggingNode,
    'is-drop-not-allow': !_vm.dragState.allowDrop,
    'is-drop-inner': _vm.dragState.dropType === 'inner'
  },attrs:{"role":"tree"}},[_vm._l((_vm.root.childNodes),function(child){return _c('ss-tree-node',{key:_vm.getNodeKey(child),attrs:{"node":child,"props":_vm.props,"render-after-expand":_vm.renderAfterExpand,"show-checkbox":_vm.showCheckbox,"render-content":_vm.renderContent},on:{"node-expand":_vm.handleNodeExpand}})}),(_vm.isEmpty)?_c('div',{staticClass:"ss-tree__empty-block"},[_c('span',{staticClass:"ss-tree__empty-text"},[_vm._v(_vm._s(_vm.emptyText))])]):_vm._e(),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.dragState.showDropIndicator),expression:"dragState.showDropIndicator"}],ref:"dropIndicator",staticClass:"ss-tree__drop-indicator"})],2)}
var treevue_type_template_id_2bc89438_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/tree/components/tree.vue?vue&type=template&id=2bc89438&scoped=true&

// CONCATENATED MODULE: ./src/components/tree/model/util.js
var NODE_KEY = '$treeNodeId';
var markNodeData = function markNodeData(node, data) {
  if (!data || data[NODE_KEY]) return;
  Object.defineProperty(data, NODE_KEY, {
    value: node.id,
    enumerable: false,
    configurable: false,
    writable: false
  });
};
var util_getNodeKey = function getNodeKey(key, data) {
  if (!key) return data[NODE_KEY];
  return data[key];
};
var findNearestComponent = function findNearestComponent(element, componentName) {
  var target = element;

  while (target && target.tagName !== 'BODY') {
    if (target.__vue__ && target.__vue__.$options.name === componentName) {
      return target.__vue__;
    }

    target = target.parentNode;
  }

  return null;
};
// CONCATENATED MODULE: ./src/utils/types.js
function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]';
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
function isHtmlElement(node) {
  return node && node.nodeType === Node.ELEMENT_NODE;
}
var isFunction = function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
};
var isUndefined = function isUndefined(val) {
  return val === void 0;
};
var isDefined = function isDefined(val) {
  return val !== undefined && val !== null;
};
// CONCATENATED MODULE: ./src/utils/util.js
function util_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { util_typeof = function _typeof(obj) { return typeof obj; }; } else { util_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return util_typeof(obj); }



var util_hasOwnProperty = Object.prototype.hasOwnProperty;
function noop() {}
;
function hasOwn(obj, key) {
  return util_hasOwnProperty.call(obj, key);
}
;

function extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }

  return to;
}

;
function toObject(arr) {
  var res = {};

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }

  return res;
}
;
var getValueByPath = function getValueByPath(object, prop) {
  prop = prop || '';
  var paths = prop.split('.');
  var current = object;
  var result = null;

  for (var i = 0, j = paths.length; i < j; i++) {
    var path = paths[i];
    if (!current) break;

    if (i === j - 1) {
      result = current[path];
      break;
    }

    current = current[path];
  }

  return result;
};
function getPropByPath(obj, path, strict) {
  var tempObj = obj;
  path = path.replace(/\[(\w+)\]/g, '.$1');
  path = path.replace(/^\./, '');
  var keyArr = path.split('.');
  var i = 0;

  for (var len = keyArr.length; i < len - 1; ++i) {
    if (!tempObj && !strict) break;
    var key = keyArr[i];

    if (key in tempObj) {
      tempObj = tempObj[key];
    } else {
      if (strict) {
        throw new Error('please transfer a valid prop path to form item!');
      }

      break;
    }
  }

  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : null
  };
}
;
var generateId = function generateId() {
  return Math.floor(Math.random() * 10000);
};
var valueEquals = function valueEquals(a, b) {
  // see: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
  if (a === b) return true;
  if (!(a instanceof Array)) return false;
  if (!(b instanceof Array)) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i !== a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
};
var escapeRegexpString = function escapeRegexpString() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
}; // TODO: use native Array.find, Array.findIndex when IE support is dropped

var arrayFindIndex = function arrayFindIndex(arr, pred) {
  for (var i = 0; i !== arr.length; ++i) {
    if (pred(arr[i])) {
      return i;
    }
  }

  return -1;
};
var arrayFind = function arrayFind(arr, pred) {
  var idx = arrayFindIndex(arr, pred);
  return idx !== -1 ? arr[idx] : undefined;
}; // coerce truthy value to array

var coerceTruthyValueToArray = function coerceTruthyValueToArray(val) {
  if (Array.isArray(val)) {
    return val;
  } else if (val) {
    return [val];
  } else {
    return [];
  }
};
var util_isIE = function isIE() {
  return !external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype.$isServer && !isNaN(Number(document.documentMode));
};
var util_isEdge = function isEdge() {
  return !external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype.$isServer && navigator.userAgent.indexOf('Edge') > -1;
};
var util_isFirefox = function isFirefox() {
  return !external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype.$isServer && !!window.navigator.userAgent.match(/firefox/i);
};
var autoprefixer = function autoprefixer(style) {
  if (util_typeof(style) !== 'object') return style;
  var rules = ['transform', 'transition', 'animation'];
  var prefixes = ['ms-', 'webkit-'];
  rules.forEach(function (rule) {
    var value = style[rule];

    if (rule && value) {
      prefixes.forEach(function (prefix) {
        style[prefix + rule] = value;
      });
    }
  });
  return style;
};
var kebabCase = function kebabCase(str) {
  var hyphenateRE = /([^-])([A-Z])/g;
  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
};
var util_capitalize = function capitalize(str) {
  if (!isString(str)) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};
var util_looseEqual = function looseEqual(a, b) {
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);

  if (isObjectA && isObjectB) {
    return JSON.stringify(a) === JSON.stringify(b);
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
};
var arrayEquals = function arrayEquals(arrayA, arrayB) {
  arrayA = arrayA || [];
  arrayB = arrayB || [];

  if (arrayA.length !== arrayB.length) {
    return false;
  }

  for (var i = 0; i < arrayA.length; i++) {
    if (!util_looseEqual(arrayA[i], arrayB[i])) {
      return false;
    }
  }

  return true;
};
var isEqual = function isEqual(value1, value2) {
  if (Array.isArray(value1) && Array.isArray(value2)) {
    return arrayEquals(value1, value2);
  }

  return util_looseEqual(value1, value2);
};
var isEmpty = function isEmpty(val) {
  // null or undefined
  if (val == null) return true;
  if (typeof val === 'boolean') return false;
  if (typeof val === 'number') return !val;
  if (val instanceof Error) return val.message === '';

  switch (Object.prototype.toString.call(val)) {
    // String or Array
    case '[object String]':
    case '[object Array]':
      return !val.length;
    // Map or Set or File

    case '[object File]':
    case '[object Map]':
    case '[object Set]':
      {
        return !val.size;
      }
    // Plain Object

    case '[object Object]':
      {
        return !Object.keys(val).length;
      }
  }

  return false;
};
function rafThrottle(fn) {
  var locked = false;
  return function () {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (locked) return;
    locked = true;
    window.requestAnimationFrame(function (_) {
      fn.apply(_this, args);
      locked = false;
    });
  };
}
function objToArray(obj) {
  if (Array.isArray(obj)) {
    return obj;
  }

  return isEmpty(obj) ? [] : [obj];
}
// CONCATENATED MODULE: ./src/components/tree/model/node.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import objectAssign from '../../../../utils/merge';



function objectAssign(target) {
  for (var i = 1, j = arguments.length; i < j; i++) {
    var source = arguments[i] || {};

    for (var prop in source) {
      if (source.hasOwnProperty(prop)) {
        var value = source[prop];

        if (value !== undefined) {
          target[prop] = value;
        }
      }
    }
  }

  return target;
}

;
var getChildState = function getChildState(node) {
  var all = true;
  var none = true;
  var allWithoutDisable = true;

  for (var i = 0, j = node.length; i < j; i++) {
    var n = node[i];

    if (n.checked !== true || n.indeterminate) {
      all = false;

      if (!n.disabled) {
        allWithoutDisable = false;
      }
    }

    if (n.checked !== false || n.indeterminate) {
      none = false;
    }
  }

  return {
    all: all,
    none: none,
    allWithoutDisable: allWithoutDisable,
    half: !all && !none
  };
};

var reInitChecked = function reInitChecked(node) {
  if (node.childNodes.length === 0) return;

  var _getChildState = getChildState(node.childNodes),
      all = _getChildState.all,
      none = _getChildState.none,
      half = _getChildState.half;

  if (all) {
    node.checked = true;
    node.indeterminate = false;
  } else if (half) {
    node.checked = false;
    node.indeterminate = true;
  } else if (none) {
    node.checked = false;
    node.indeterminate = false;
  }

  var parent = node.parent;
  if (!parent || parent.level === 0) return;

  if (!node.store.checkStrictly) {
    reInitChecked(parent);
  }
};

var getPropertyFromData = function getPropertyFromData(node, prop) {
  var props = node.store.props;
  var data = node.data || {};
  var config = props[prop];

  if (typeof config === 'function') {
    return config(data, node);
  } else if (typeof config === 'string') {
    return data[config];
  } else if (typeof config === 'undefined') {
    var dataProp = data[prop];
    return dataProp === undefined ? '' : dataProp;
  }
};

var nodeIdSeed = 0;

var node_Node = /*#__PURE__*/function () {
  function Node(options) {
    _classCallCheck(this, Node);

    this.id = nodeIdSeed++;
    this.text = null;
    this.checked = false;
    this.indeterminate = false;
    this.data = null;
    this.expanded = false;
    this.parent = null;
    this.visible = true;
    this.isCurrent = false;

    for (var name in options) {
      if (options.hasOwnProperty(name)) {
        this[name] = options[name];
      }
    } // internal


    this.level = 0;
    this.loaded = false;
    this.childNodes = [];
    this.loading = false;

    if (this.parent) {
      this.level = this.parent.level + 1;
    }

    var store = this.store;

    if (!store) {
      throw new Error('[Node]store is required!');
    }

    store.registerNode(this);
    var props = store.props;

    if (props && typeof props.isLeaf !== 'undefined') {
      var isLeaf = getPropertyFromData(this, 'isLeaf');

      if (typeof isLeaf === 'boolean') {
        this.isLeafByUser = isLeaf;
      }
    }

    if (store.lazy !== true && this.data) {
      this.setData(this.data);

      if (store.defaultExpandAll) {
        this.expanded = true;
      }
    } else if (this.level > 0 && store.lazy && store.defaultExpandAll) {
      this.expand();
    }

    if (!Array.isArray(this.data)) {
      markNodeData(this, this.data);
    }

    if (!this.data) return;
    var defaultExpandedKeys = store.defaultExpandedKeys;
    var key = store.key;

    if (key && defaultExpandedKeys && defaultExpandedKeys.indexOf(this.key) !== -1) {
      this.expand(null, store.autoExpandParent);
    }

    if (key && store.currentNodeKey !== undefined && this.key === store.currentNodeKey) {
      store.currentNode = this;
      store.currentNode.isCurrent = true;
    }

    if (store.lazy) {
      store._initDefaultCheckedNode(this);
    }

    this.updateLeafState();
  }

  _createClass(Node, [{
    key: "setData",
    value: function setData(data) {
      if (!Array.isArray(data)) {
        markNodeData(this, data);
      }

      this.data = data;
      this.childNodes = [];
      var children;

      if (this.level === 0 && this.data instanceof Array) {
        children = this.data;
      } else {
        children = getPropertyFromData(this, 'children') || [];
      }

      for (var i = 0, j = children.length; i < j; i++) {
        this.insertChild({
          data: children[i]
        });
      }
    }
  }, {
    key: "label",
    get: function get() {
      return getPropertyFromData(this, 'label');
    }
  }, {
    key: "key",
    get: function get() {
      var nodeKey = this.store.key;
      if (this.data) return this.data[nodeKey];
      return null;
    }
  }, {
    key: "disabled",
    get: function get() {
      return getPropertyFromData(this, 'disabled');
    }
  }, {
    key: "nextSibling",
    get: function get() {
      var parent = this.parent;

      if (parent) {
        var index = parent.childNodes.indexOf(this);

        if (index > -1) {
          return parent.childNodes[index + 1];
        }
      }

      return null;
    }
  }, {
    key: "previousSibling",
    get: function get() {
      var parent = this.parent;

      if (parent) {
        var index = parent.childNodes.indexOf(this);

        if (index > -1) {
          return index > 0 ? parent.childNodes[index - 1] : null;
        }
      }

      return null;
    }
  }, {
    key: "contains",
    value: function contains(target) {
      var deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var walk = function walk(parent) {
        var children = parent.childNodes || [];
        var result = false;

        for (var i = 0, j = children.length; i < j; i++) {
          var child = children[i];

          if (child === target || deep && walk(child)) {
            result = true;
            break;
          }
        }

        return result;
      };

      return walk(this);
    }
  }, {
    key: "remove",
    value: function remove() {
      var parent = this.parent;

      if (parent) {
        parent.removeChild(this);
      }
    }
  }, {
    key: "insertChild",
    value: function insertChild(child, index, batch) {
      if (!child) throw new Error('insertChild error: child is required.');

      if (!(child instanceof Node)) {
        if (!batch) {
          var children = this.getChildren(true);

          if (children.indexOf(child.data) === -1) {
            if (typeof index === 'undefined' || index < 0) {
              children.push(child.data);
            } else {
              children.splice(index, 0, child.data);
            }
          }
        }

        objectAssign(child, {
          parent: this,
          store: this.store
        });
        child = new Node(child);
      }

      child.level = this.level + 1;

      if (typeof index === 'undefined' || index < 0) {
        this.childNodes.push(child);
      } else {
        this.childNodes.splice(index, 0, child);
      }

      this.updateLeafState();
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(child, ref) {
      var index;

      if (ref) {
        index = this.childNodes.indexOf(ref);
      }

      this.insertChild(child, index);
    }
  }, {
    key: "insertAfter",
    value: function insertAfter(child, ref) {
      var index;

      if (ref) {
        index = this.childNodes.indexOf(ref);
        if (index !== -1) index += 1;
      }

      this.insertChild(child, index);
    }
  }, {
    key: "removeChild",
    value: function removeChild(child) {
      var children = this.getChildren() || [];
      var dataIndex = children.indexOf(child.data);

      if (dataIndex > -1) {
        children.splice(dataIndex, 1);
      }

      var index = this.childNodes.indexOf(child);

      if (index > -1) {
        this.store && this.store.deregisterNode(child);
        child.parent = null;
        this.childNodes.splice(index, 1);
      }

      this.updateLeafState();
    }
  }, {
    key: "removeChildByData",
    value: function removeChildByData(data) {
      var targetNode = null;

      for (var i = 0; i < this.childNodes.length; i++) {
        if (this.childNodes[i].data === data) {
          targetNode = this.childNodes[i];
          break;
        }
      }

      if (targetNode) {
        this.removeChild(targetNode);
      }
    }
  }, {
    key: "expand",
    value: function expand(callback, expandParent) {
      var _this = this;

      var done = function done() {
        if (expandParent) {
          var parent = _this.parent;

          while (parent.level > 0) {
            parent.expanded = true;
            parent = parent.parent;
          }
        }

        _this.expanded = true;
        if (callback) callback();
      };

      if (this.shouldLoadData()) {
        this.loadData(function (data) {
          if (data instanceof Array) {
            if (_this.checked) {
              _this.setChecked(true, true);
            } else if (!_this.store.checkStrictly) {
              reInitChecked(_this);
            }

            done();
          }
        });
      } else {
        done();
      }
    }
  }, {
    key: "doCreateChildren",
    value: function doCreateChildren(array) {
      var _this2 = this;

      var defaultProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      array.forEach(function (item) {
        _this2.insertChild(objectAssign({
          data: item
        }, defaultProps), undefined, true);
      });
    }
  }, {
    key: "collapse",
    value: function collapse() {
      this.expanded = false;
    }
  }, {
    key: "shouldLoadData",
    value: function shouldLoadData() {
      return this.store.lazy === true && this.store.load && !this.loaded;
    }
  }, {
    key: "updateLeafState",
    value: function updateLeafState() {
      if (this.store.lazy === true && this.loaded !== true && typeof this.isLeafByUser !== 'undefined') {
        this.isLeaf = this.isLeafByUser;
        return;
      }

      var childNodes = this.childNodes;

      if (!this.store.lazy || this.store.lazy === true && this.loaded === true) {
        this.isLeaf = !childNodes || childNodes.length === 0;
        return;
      }

      this.isLeaf = false;
    }
  }, {
    key: "setChecked",
    value: function setChecked(value, deep, recursion, passValue) {
      var _this3 = this;

      this.indeterminate = value === 'half';
      this.checked = value === true;
      if (this.store.checkStrictly) return;

      if (!(this.shouldLoadData() && !this.store.checkDescendants)) {
        var _getChildState2 = getChildState(this.childNodes),
            all = _getChildState2.all,
            allWithoutDisable = _getChildState2.allWithoutDisable;

        if (!this.isLeaf && !all && allWithoutDisable) {
          this.checked = false;
          value = false;
        }

        var handleDescendants = function handleDescendants() {
          if (deep) {
            var childNodes = _this3.childNodes;

            for (var i = 0, j = childNodes.length; i < j; i++) {
              var child = childNodes[i];
              passValue = passValue || value !== false;
              var isCheck = child.disabled ? child.checked : passValue;
              child.setChecked(isCheck, deep, true, passValue);
            }

            var _getChildState3 = getChildState(childNodes),
                half = _getChildState3.half,
                _all = _getChildState3.all;

            if (!_all) {
              _this3.checked = _all;
              _this3.indeterminate = half;
            }
          }
        };

        if (this.shouldLoadData()) {
          // Only work on lazy load data.
          this.loadData(function () {
            handleDescendants();
            reInitChecked(_this3);
          }, {
            checked: value !== false
          });
          return;
        } else {
          handleDescendants();
        }
      }

      var parent = this.parent;
      if (!parent || parent.level === 0) return;

      if (!recursion) {
        reInitChecked(parent);
      }
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      var forceInit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      // this is data
      if (this.level === 0) return this.data;
      var data = this.data;
      if (!data) return null;
      var props = this.store.props;
      var children = 'children';

      if (props) {
        children = props.children || 'children';
      }

      if (data[children] === undefined) {
        data[children] = null;
      }

      if (forceInit && !data[children]) {
        data[children] = [];
      }

      return data[children];
    }
  }, {
    key: "updateChildren",
    value: function updateChildren() {
      var _this4 = this;

      var newData = this.getChildren() || [];
      var oldData = this.childNodes.map(function (node) {
        return node.data;
      });
      var newDataMap = {};
      var newNodes = [];
      newData.forEach(function (item, index) {
        var key = item[NODE_KEY];
        var isNodeExists = !!key && arrayFindIndex(oldData, function (data) {
          return data[NODE_KEY] === key;
        }) >= 0;

        if (isNodeExists) {
          newDataMap[key] = {
            index: index,
            data: item
          };
        } else {
          newNodes.push({
            index: index,
            data: item
          });
        }
      });

      if (!this.store.lazy) {
        oldData.forEach(function (item) {
          if (!newDataMap[item[NODE_KEY]]) _this4.removeChildByData(item);
        });
      }

      newNodes.forEach(function (_ref) {
        var index = _ref.index,
            data = _ref.data;

        _this4.insertChild({
          data: data
        }, index);
      });
      this.updateLeafState();
    }
  }, {
    key: "loadData",
    value: function loadData(callback) {
      var _this5 = this;

      var defaultProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.store.lazy === true && this.store.load && !this.loaded && (!this.loading || Object.keys(defaultProps).length)) {
        this.loading = true;

        var resolve = function resolve(children) {
          _this5.loaded = true;
          _this5.loading = false;
          _this5.childNodes = [];

          _this5.doCreateChildren(children, defaultProps);

          _this5.updateLeafState();

          if (callback) {
            callback.call(_this5, children);
          }
        };

        this.store.load(this, resolve);
      } else {
        if (callback) {
          callback.call(this);
        }
      }
    }
  }]);

  return Node;
}();


// CONCATENATED MODULE: ./src/components/tree/model/tree-store.js
function tree_store_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { tree_store_typeof = function _typeof(obj) { return typeof obj; }; } else { tree_store_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return tree_store_typeof(obj); }

function tree_store_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function tree_store_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function tree_store_createClass(Constructor, protoProps, staticProps) { if (protoProps) tree_store_defineProperties(Constructor.prototype, protoProps); if (staticProps) tree_store_defineProperties(Constructor, staticProps); return Constructor; }




var tree_store_TreeStore = /*#__PURE__*/function () {
  function TreeStore(options) {
    var _this = this;

    tree_store_classCallCheck(this, TreeStore);

    this.currentNode = null;
    this.currentNodeKey = null;

    for (var option in options) {
      if (options.hasOwnProperty(option)) {
        this[option] = options[option];
      }
    }

    this.nodesMap = {};
    this.root = new node_Node({
      data: this.data,
      store: this
    });

    if (this.lazy && this.load) {
      var loadFn = this.load;
      loadFn(this.root, function (data) {
        _this.root.doCreateChildren(data);

        _this._initDefaultCheckedNodes();
      });
    } else {
      this._initDefaultCheckedNodes();
    }
  }

  tree_store_createClass(TreeStore, [{
    key: "filter",
    value: function filter(value) {
      var filterNodeMethod = this.filterNodeMethod;
      var lazy = this.lazy;

      var traverse = function traverse(node) {
        var childNodes = node.root ? node.root.childNodes : node.childNodes;
        childNodes.forEach(function (child) {
          child.visible = filterNodeMethod.call(child, value, child.data, child);
          traverse(child);
        });

        if (!node.visible && childNodes.length) {
          var allHidden = true;
          allHidden = !childNodes.some(function (child) {
            return child.visible;
          });

          if (node.root) {
            node.root.visible = allHidden === false;
          } else {
            node.visible = allHidden === false;
          }
        }

        if (!value) return;
        if (node.visible && !node.isLeaf && !lazy) node.expand();
      };

      traverse(this);
    }
  }, {
    key: "setData",
    value: function setData(newVal) {
      var instanceChanged = newVal !== this.root.data;

      if (instanceChanged) {
        this.root.setData(newVal);

        this._initDefaultCheckedNodes();
      } else {
        this.root.updateChildren();
      }
    }
  }, {
    key: "getNode",
    value: function getNode(data) {
      if (data instanceof node_Node) return data;
      var key = tree_store_typeof(data) !== 'object' ? data : util_getNodeKey(this.key, data);
      return this.nodesMap[key] || null;
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(data, refData) {
      var refNode = this.getNode(refData);
      refNode.parent.insertBefore({
        data: data
      }, refNode);
    }
  }, {
    key: "insertAfter",
    value: function insertAfter(data, refData) {
      var refNode = this.getNode(refData);
      refNode.parent.insertAfter({
        data: data
      }, refNode);
    }
  }, {
    key: "remove",
    value: function remove(data) {
      var node = this.getNode(data);

      if (node && node.parent) {
        if (node === this.currentNode) {
          this.currentNode = null;
        }

        node.parent.removeChild(node);
      }
    }
  }, {
    key: "append",
    value: function append(data, parentData) {
      var parentNode = parentData ? this.getNode(parentData) : this.root;

      if (parentNode) {
        parentNode.insertChild({
          data: data
        });
      }
    }
  }, {
    key: "_initDefaultCheckedNodes",
    value: function _initDefaultCheckedNodes() {
      var _this2 = this;

      var defaultCheckedKeys = this.defaultCheckedKeys || [];
      var nodesMap = this.nodesMap;
      defaultCheckedKeys.forEach(function (checkedKey) {
        var node = nodesMap[checkedKey];

        if (node) {
          node.setChecked(true, !_this2.checkStrictly);
        }
      });
    }
  }, {
    key: "_initDefaultCheckedNode",
    value: function _initDefaultCheckedNode(node) {
      var defaultCheckedKeys = this.defaultCheckedKeys || [];

      if (defaultCheckedKeys.indexOf(node.key) !== -1) {
        node.setChecked(true, !this.checkStrictly);
      }
    }
  }, {
    key: "setDefaultCheckedKey",
    value: function setDefaultCheckedKey(newVal) {
      if (newVal !== this.defaultCheckedKeys) {
        this.defaultCheckedKeys = newVal;

        this._initDefaultCheckedNodes();
      }
    }
  }, {
    key: "registerNode",
    value: function registerNode(node) {
      var key = this.key;
      if (!key || !node || !node.data) return;
      var nodeKey = node.key;
      if (nodeKey !== undefined) this.nodesMap[node.key] = node;
    }
  }, {
    key: "deregisterNode",
    value: function deregisterNode(node) {
      var _this3 = this;

      var key = this.key;
      if (!key || !node || !node.data) return;
      node.childNodes.forEach(function (child) {
        _this3.deregisterNode(child);
      });
      delete this.nodesMap[node.key];
    }
  }, {
    key: "getCheckedNodes",
    value: function getCheckedNodes() {
      var leafOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var includeHalfChecked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var checkedNodes = [];

      var traverse = function traverse(node) {
        var childNodes = node.root ? node.root.childNodes : node.childNodes;
        childNodes.forEach(function (child) {
          if ((child.checked || includeHalfChecked && child.indeterminate) && (!leafOnly || leafOnly && child.isLeaf)) {
            checkedNodes.push(child.data);
          }

          traverse(child);
        });
      };

      traverse(this);
      return checkedNodes;
    }
  }, {
    key: "getCheckedKeys",
    value: function getCheckedKeys() {
      var _this4 = this;

      var leafOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return this.getCheckedNodes(leafOnly).map(function (data) {
        return (data || {})[_this4.key];
      });
    }
  }, {
    key: "getHalfCheckedNodes",
    value: function getHalfCheckedNodes() {
      var nodes = [];

      var traverse = function traverse(node) {
        var childNodes = node.root ? node.root.childNodes : node.childNodes;
        childNodes.forEach(function (child) {
          if (child.indeterminate) {
            nodes.push(child.data);
          }

          traverse(child);
        });
      };

      traverse(this);
      return nodes;
    }
  }, {
    key: "getHalfCheckedKeys",
    value: function getHalfCheckedKeys() {
      var _this5 = this;

      return this.getHalfCheckedNodes().map(function (data) {
        return (data || {})[_this5.key];
      });
    }
  }, {
    key: "_getAllNodes",
    value: function _getAllNodes() {
      var allNodes = [];
      var nodesMap = this.nodesMap;

      for (var nodeKey in nodesMap) {
        if (nodesMap.hasOwnProperty(nodeKey)) {
          allNodes.push(nodesMap[nodeKey]);
        }
      }

      return allNodes;
    }
  }, {
    key: "updateChildren",
    value: function updateChildren(key, data) {
      var node = this.nodesMap[key];
      if (!node) return;
      var childNodes = node.childNodes;

      for (var i = childNodes.length - 1; i >= 0; i--) {
        var child = childNodes[i];
        this.remove(child.data);
      }

      for (var _i = 0, j = data.length; _i < j; _i++) {
        var _child = data[_i];
        this.append(_child, node.data);
      }
    }
  }, {
    key: "_setCheckedKeys",
    value: function _setCheckedKeys(key) {
      var leafOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var checkedKeys = arguments.length > 2 ? arguments[2] : undefined;

      var allNodes = this._getAllNodes().sort(function (a, b) {
        return b.level - a.level;
      });

      var cache = Object.create(null);
      var keys = Object.keys(checkedKeys);
      allNodes.forEach(function (node) {
        return node.setChecked(false, false);
      });

      for (var i = 0, j = allNodes.length; i < j; i++) {
        var node = allNodes[i];
        var nodeKey = node.data[key].toString();
        var checked = keys.indexOf(nodeKey) > -1;

        if (!checked) {
          if (node.checked && !cache[nodeKey]) {
            node.setChecked(false, false);
          }

          continue;
        }

        var parent = node.parent;

        while (parent && parent.level > 0) {
          cache[parent.data[key]] = true;
          parent = parent.parent;
        }

        if (node.isLeaf || this.checkStrictly) {
          node.setChecked(true, false);
          continue;
        }

        node.setChecked(true, true);

        if (leafOnly) {
          (function () {
            node.setChecked(false, false);

            var traverse = function traverse(node) {
              var childNodes = node.childNodes;
              childNodes.forEach(function (child) {
                if (!child.isLeaf) {
                  child.setChecked(false, false);
                }

                traverse(child);
              });
            };

            traverse(node);
          })();
        }
      }
    }
  }, {
    key: "setCheckedNodes",
    value: function setCheckedNodes(array) {
      var leafOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var key = this.key;
      var checkedKeys = {};
      array.forEach(function (item) {
        checkedKeys[(item || {})[key]] = true;
      });

      this._setCheckedKeys(key, leafOnly, checkedKeys);
    }
  }, {
    key: "setCheckedKeys",
    value: function setCheckedKeys(keys) {
      var leafOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.defaultCheckedKeys = keys;
      var key = this.key;
      var checkedKeys = {};
      keys.forEach(function (key) {
        checkedKeys[key] = true;
      });

      this._setCheckedKeys(key, leafOnly, checkedKeys);
    }
  }, {
    key: "setDefaultExpandedKeys",
    value: function setDefaultExpandedKeys(keys) {
      var _this6 = this;

      keys = keys || [];
      this.defaultExpandedKeys = keys;
      keys.forEach(function (key) {
        var node = _this6.getNode(key);

        if (node) node.expand(null, _this6.autoExpandParent);
      });
    }
  }, {
    key: "setChecked",
    value: function setChecked(data, checked, deep) {
      var node = this.getNode(data);

      if (node) {
        node.setChecked(!!checked, deep);
      }
    }
  }, {
    key: "getCurrentNode",
    value: function getCurrentNode() {
      return this.currentNode;
    }
  }, {
    key: "setCurrentNode",
    value: function setCurrentNode(currentNode) {
      var prevCurrentNode = this.currentNode;

      if (prevCurrentNode) {
        prevCurrentNode.isCurrent = false;
      }

      this.currentNode = currentNode;
      this.currentNode.isCurrent = true;
    }
  }, {
    key: "setUserCurrentNode",
    value: function setUserCurrentNode(node) {
      var key = node[this.key];
      var currNode = this.nodesMap[key];
      this.setCurrentNode(currNode);
    }
  }, {
    key: "setCurrentNodeKey",
    value: function setCurrentNodeKey(key) {
      if (key === null || key === undefined) {
        this.currentNode && (this.currentNode.isCurrent = false);
        this.currentNode = null;
        return;
      }

      var node = this.getNode(key);

      if (node) {
        this.setCurrentNode(node);
      }
    }
  }]);

  return TreeStore;
}();


;
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/tree/components/tree-node.vue?vue&type=template&id=50a6a932&scoped=true&
var tree_nodevue_type_template_id_50a6a932_scoped_true_render = function () {
var this$1 = this;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.node.visible),expression:"node.visible"}],ref:"node",staticClass:"ss-tree-node",class:{
    'is-expanded': _vm.expanded,
    'is-current': _vm.node.isCurrent,
    'is-hidden': !_vm.node.visible,
    'is-focusable': !_vm.node.disabled,
    'is-checked': !_vm.node.disabled && _vm.node.checked
  },attrs:{"role":"treeitem","tabindex":"-1","aria-expanded":_vm.expanded,"aria-disabled":_vm.node.disabled,"aria-checked":_vm.node.checked,"draggable":_vm.tree.draggable},on:{"click":function($event){$event.stopPropagation();return _vm.handleClick($event)},"":function ($event) { return this$1.handleContextMenu($event); },"dragstart":function($event){$event.stopPropagation();return _vm.handleDragStart($event)},"dragover":function($event){$event.stopPropagation();return _vm.handleDragOver($event)},"dragend":function($event){$event.stopPropagation();return _vm.handleDragEnd($event)},"drop":function($event){$event.stopPropagation();return _vm.handleDrop($event)}}},[_c('div',{staticClass:"ss-tree-node__content",style:({ 'padding-left': (_vm.node.level - 1) * _vm.tree.indent + 'px' })},[_c('span',{class:[
        { 'is-leaf': _vm.node.isLeaf, expanded: !_vm.node.isLeaf && _vm.expanded },
        'ss-tree-node__expand-icon',
        _vm.tree.iconClass ? _vm.tree.iconClass : 'sense-icon-jiantou__right'
      ],on:{"click":function($event){$event.stopPropagation();return _vm.handleExpandIconClick($event)}}}),(_vm.node.loading)?_c('span',{staticClass:"ss-tree-node__loading-icon sense-icon-loading"}):_vm._e(),_c('node-content',{attrs:{"node":_vm.node}}),(_vm.showCheckbox)?_c('ss-checkbox',{staticStyle:{"margin":"-3px 0 0 4px"},attrs:{"indeterminate":_vm.node.indeterminate,"disabled":!!_vm.node.disabled},on:{"change":_vm.handleCheckChange},nativeOn:{"click":function($event){$event.stopPropagation();}},model:{value:(_vm.node.checked),callback:function ($$v) {_vm.$set(_vm.node, "checked", $$v)},expression:"node.checked"}}):_vm._e()],1),_c('ss-collapse-transition',[(!_vm.renderAfterExpand || _vm.childNodeRendered)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.expanded),expression:"expanded"}],staticClass:"ss-tree-node__children",attrs:{"role":"group","aria-expanded":_vm.expanded}},_vm._l((_vm.node.childNodes),function(child){return _c('ss-tree-node',{key:_vm.getNodeKey(child),attrs:{"render-content":_vm.renderContent,"render-after-expand":_vm.renderAfterExpand,"show-checkbox":_vm.showCheckbox,"node":child},on:{"node-expand":_vm.handleChildNodeExpand}})}),1):_vm._e()])],1)}
var tree_nodevue_type_template_id_50a6a932_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/tree/components/tree-node.vue?vue&type=template&id=50a6a932&scoped=true&

// CONCATENATED MODULE: ./src/components/transitions/collapse-transition.js
function collapse_transition_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function collapse_transition_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function collapse_transition_createClass(Constructor, protoProps, staticProps) { if (protoProps) collapse_transition_defineProperties(Constructor.prototype, protoProps); if (staticProps) collapse_transition_defineProperties(Constructor, staticProps); return Constructor; }

/*
 * @Author: your name
 * @Date: 2020-10-07 14:15:28
 * @LastEditTime: 2020-10-08 15:22:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /sense/src/components/transitions/collapse-transition.js
 */


var collapse_transition_Transition = /*#__PURE__*/function () {
  function Transition() {
    collapse_transition_classCallCheck(this, Transition);
  }

  collapse_transition_createClass(Transition, [{
    key: "beforeEnter",
    value: function beforeEnter(el) {
      console.log(el);
      addClass(el, 'collapse-transition');
      if (!el.dataset) el.dataset = {};
      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;
      el.style.height = '0';
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
    }
  }, {
    key: "enter",
    value: function enter(el) {
      console.log(el);
      el.dataset.oldOverflow = el.style.overflow;

      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + 'px';
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
      } else {
        el.style.height = '';
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
      }

      el.style.overflow = 'hidden';
    }
  }, {
    key: "afterEnter",
    value: function afterEnter(el) {
      console.log(el); // for safari: remove class then reset height is necessary

      removeClass(el, 'collapse-transition');
      el.style.height = '';
      el.style.overflow = el.dataset.oldOverflow;
    }
  }, {
    key: "beforeLeave",
    value: function beforeLeave(el) {
      console.log(el);
      if (!el.dataset) el.dataset = {};
      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;
      el.dataset.oldOverflow = el.style.overflow;
      el.style.height = el.scrollHeight + 'px';
      el.style.overflow = 'hidden';
    }
  }, {
    key: "leave",
    value: function leave(el) {
      console.log(el);

      if (el.scrollHeight !== 0) {
        // for safari: add class after set height, or it will jump to zero height suddenly, weired
        addClass(el, 'collapse-transition');
        el.style.height = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      }
    }
  }, {
    key: "afterLeave",
    value: function afterLeave(el) {
      console.log(el);
      removeClass(el, 'collapse-transition');
      el.style.height = '';
      el.style.overflow = el.dataset.oldOverflow;
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    }
  }]);

  return Transition;
}();

/* harmony default export */ var collapse_transition = ({
  name: 'ElCollapseTransition',
  functional: true,
  render: function render(h, _ref) {
    var children = _ref.children;
    var data = {
      on: new collapse_transition_Transition()
    };
    return h('transition', data, children);
  }
});
// CONCATENATED MODULE: ./src/utils/emitter.js
function emitter_broadcast(componentName, eventName, params) {
  this.$children.forEach(function (child) {
    var name = child.$options.componentName;

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      emitter_broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}

/* harmony default export */ var utils_emitter = ({
  methods: {
    dispatch: function dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root;
      var name = parent.$options.componentName;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.componentName;
        }
      }

      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    broadcast: function broadcast(componentName, eventName, params) {
      emitter_broadcast.call(this, componentName, eventName, params);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/tree/components/tree-node.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var tree_nodevue_type_script_lang_js_ = ({
  name: 'SsTreeNode',
  componentName: 'SsTreeNode',
  components: {
    SsCollapseTransition: collapse_transition,
    SsCheckbox: components_checkbox,
    NodeContent: {
      props: {
        node: {
          required: true
        }
      },
      render: function render(h) {
        var parent = this.$parent;
        var tree = parent.tree;
        var node = this.node;
        var data = node.data,
            store = node.store;
        return parent.renderContent ? parent.renderContent.call(parent._renderProxy, h, {
          _self: tree.$vnode.context,
          node: node,
          data: data,
          store: store
        }) : tree.$scopedSlots.default ? tree.$scopedSlots.default({
          node: node,
          data: data
        }) : h("span", {
          "class": "ss-tree-node__label"
        }, [node.label]);
      }
    }
  },
  mixins: [utils_emitter],
  props: {
    node: {
      default: function _default() {
        return {};
      }
    },
    props: {},
    renderContent: Function,
    renderAfterExpand: {
      type: Boolean,
      default: true
    },
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      tree: null,
      expanded: false,
      childNodeRendered: false,
      oldChecked: null,
      oldIndeterminate: null
    };
  },
  watch: {
    'node.indeterminate': function nodeIndeterminate(val) {
      this.handleSelectChange(this.node.checked, val);
    },
    'node.checked': function nodeChecked(val) {
      this.handleSelectChange(val, this.node.indeterminate);
    },
    'node.expanded': function nodeExpanded(val) {
      var _this = this;

      this.$nextTick(function () {
        return _this.expanded = val;
      });

      if (val) {
        this.childNodeRendered = true;
      }
    }
  },
  methods: {
    getNodeKey: function getNodeKey(node) {
      return util_getNodeKey(this.tree.nodeKey, node.data);
    },
    handleSelectChange: function handleSelectChange(checked, indeterminate) {
      if (this.oldChecked !== checked && this.oldIndeterminate !== indeterminate) {
        this.tree.$emit('check-change', this.node.data, checked, indeterminate);
      }

      this.oldChecked = checked;
      this.indeterminate = indeterminate;
    },
    handleClick: function handleClick() {
      var store = this.tree.store;
      store.setCurrentNode(this.node);
      this.tree.$emit('current-change', store.currentNode ? store.currentNode.data : null, store.currentNode);
      this.tree.currentNode = this;

      if (this.tree.expandOnClickNode) {
        this.handleExpandIconClick();
      }

      if (this.tree.checkOnClickNode && !this.node.disabled) {
        this.handleCheckChange(null, {
          target: {
            checked: !this.node.checked
          }
        });
      }

      this.tree.$emit('node-click', this.node.data, this.node, this);
    },
    handleContextMenu: function handleContextMenu(event) {
      if (this.tree._events['node-contextmenu'] && this.tree._events['node-contextmenu'].length > 0) {
        event.stopPropagation();
        event.preventDefault();
      }

      this.tree.$emit('node-contextmenu', event, this.node.data, this.node, this);
    },
    handleExpandIconClick: function handleExpandIconClick() {
      if (this.node.isLeaf) return;

      if (this.expanded) {
        this.tree.$emit('node-collapse', this.node.data, this.node, this);
        this.node.collapse();
      } else {
        this.node.expand();
        this.$emit('node-expand', this.node.data, this.node, this);
      }
    },
    handleCheckChange: function handleCheckChange(value, ev) {
      var _this2 = this;

      this.node.setChecked(ev.target.checked, !this.tree.checkStrictly);
      this.$nextTick(function () {
        var store = _this2.tree.store;

        _this2.tree.$emit('check', _this2.node.data, {
          checkedNodes: store.getCheckedNodes(),
          checkedKeys: store.getCheckedKeys(),
          halfCheckedNodes: store.getHalfCheckedNodes(),
          halfCheckedKeys: store.getHalfCheckedKeys()
        });
      });
    },
    handleChildNodeExpand: function handleChildNodeExpand(nodeData, node, instance) {
      this.broadcast('ElTreeNode', 'tree-node-expand', node);
      this.tree.$emit('node-expand', nodeData, node, instance);
    },
    handleDragStart: function handleDragStart(event) {
      if (!this.tree.draggable) return;
      this.tree.$emit('tree-node-drag-start', event, this);
    },
    handleDragOver: function handleDragOver(event) {
      if (!this.tree.draggable) return;
      this.tree.$emit('tree-node-drag-over', event, this);
      event.preventDefault();
    },
    handleDrop: function handleDrop(event) {
      event.preventDefault();
    },
    handleDragEnd: function handleDragEnd(event) {
      if (!this.tree.draggable) return;
      this.tree.$emit('tree-node-drag-end', event, this);
    }
  },
  created: function created() {
    var _this3 = this;

    var parent = this.$parent;

    if (parent.isTree) {
      this.tree = parent;
    } else {
      this.tree = parent.tree;
    }

    var tree = this.tree;

    if (!tree) {
      console.warn('Can not find node\'s tree.');
    }

    var props = tree.props || {};
    var childrenKey = props['children'] || 'children';
    this.$watch("node.data.".concat(childrenKey), function () {
      _this3.node.updateChildren();
    });

    if (this.node.expanded) {
      this.expanded = true;
      this.childNodeRendered = true;
    }

    if (this.tree.accordion) {
      this.$on('tree-node-expand', function (node) {
        if (_this3.node !== node) {
          _this3.node.collapse();
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/tree/components/tree-node.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_tree_nodevue_type_script_lang_js_ = (tree_nodevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/tree/components/tree-node.vue?vue&type=style&index=0&id=50a6a932&lang=scss&scoped=true&
var tree_nodevue_type_style_index_0_id_50a6a932_lang_scss_scoped_true_ = __webpack_require__(99);

// CONCATENATED MODULE: ./src/components/tree/components/tree-node.vue






/* normalize component */

var tree_node_component = normalizeComponent(
  components_tree_nodevue_type_script_lang_js_,
  tree_nodevue_type_template_id_50a6a932_scoped_true_render,
  tree_nodevue_type_template_id_50a6a932_scoped_true_staticRenderFns,
  false,
  null,
  "50a6a932",
  null
  
)

/* harmony default export */ var tree_node = (tree_node_component.exports);
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/tree/components/tree.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var treevue_type_script_lang_js_ = ({
  name: 'ssTree',
  mixins: [utils_emitter],
  components: {
    ssTreeNode: tree_node
  },
  data: function data() {
    return {
      store: null,
      root: null,
      currentNode: null,
      treeItems: null,
      checkboxItems: [],
      dragState: {
        showDropIndicator: false,
        draggingNode: null,
        dropNode: null,
        allowDrop: true
      }
    };
  },
  props: {
    data: {
      type: Array
    },
    emptyText: {
      type: String,
      default: function _default() {
        return '';
      }
    },
    renderAfterExpand: {
      type: Boolean,
      default: true
    },
    nodeKey: String,
    checkStrictly: Boolean,
    defaultExpandAll: Boolean,
    expandOnClickNode: {
      type: Boolean,
      default: true
    },
    checkOnClickNode: Boolean,
    checkDescendants: {
      type: Boolean,
      default: false
    },
    autoExpandParent: {
      type: Boolean,
      default: true
    },
    defaultCheckedKeys: Array,
    defaultExpandedKeys: Array,
    currentNodeKey: [String, Number],
    renderContent: Function,
    showCheckbox: {
      type: Boolean,
      default: false
    },
    draggable: {
      type: Boolean,
      default: false
    },
    allowDrag: Function,
    allowDrop: Function,
    props: {
      default: function _default() {
        return {
          children: 'children',
          label: 'label',
          disabled: 'disabled',
          leafImage: 'image'
        };
      }
    },
    lazy: {
      type: Boolean,
      default: false
    },
    highlightCurrent: Boolean,
    load: Function,
    filterNodeMethod: Function,
    accordion: Boolean,
    indent: {
      type: Number,
      default: 18
    },
    iconClass: String
  },
  computed: {
    children: {
      set: function set(value) {
        this.data = value;
      },
      get: function get() {
        return this.data;
      }
    },
    treeItemArray: function treeItemArray() {
      return Array.prototype.slice.call(this.treeItems);
    },
    isEmpty: function isEmpty() {
      var childNodes = this.root.childNodes;
      return !childNodes || childNodes.length === 0 || childNodes.every(function (_ref) {
        var visible = _ref.visible;
        return !visible;
      });
    }
  },
  watch: {
    defaultCheckedKeys: function defaultCheckedKeys(newVal) {
      this.store.setDefaultCheckedKey(newVal);
    },
    defaultExpandedKeys: function defaultExpandedKeys(newVal) {
      this.store.defaultExpandedKeys = newVal;
      this.store.setDefaultExpandedKeys(newVal);
    },
    data: function data(newVal) {
      this.store.setData(newVal);
    },
    checkboxItems: function checkboxItems(val) {
      Array.prototype.forEach.call(val, function (checkbox) {
        checkbox.setAttribute('tabindex', -1);
      });
    },
    checkStrictly: function checkStrictly(newVal) {
      this.store.checkStrictly = newVal;
    }
  },
  methods: {
    filter: function filter(value) {
      if (!this.filterNodeMethod) throw new Error('[Tree] filterNodeMethod is required when filter');
      this.store.filter(value);
    },
    getNodeKey: function getNodeKey(node) {
      return util_getNodeKey(this.nodeKey, node.data);
    },
    getNodePath: function getNodePath(data) {
      if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in getNodePath');
      var node = this.store.getNode(data);
      if (!node) return [];
      var path = [node.data];
      var parent = node.parent;

      while (parent && parent !== this.root) {
        path.push(parent.data);
        parent = parent.parent;
      }

      return path.reverse();
    },
    getCheckedNodes: function getCheckedNodes(leafOnly, includeHalfChecked) {
      return this.store.getCheckedNodes(leafOnly, includeHalfChecked);
    },
    getCheckedKeys: function getCheckedKeys(leafOnly) {
      return this.store.getCheckedKeys(leafOnly);
    },
    getCurrentNode: function getCurrentNode() {
      var currentNode = this.store.getCurrentNode();
      return currentNode ? currentNode.data : null;
    },
    getCurrentKey: function getCurrentKey() {
      if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in getCurrentKey');
      var currentNode = this.getCurrentNode();
      return currentNode ? currentNode[this.nodeKey] : null;
    },
    setCheckedNodes: function setCheckedNodes(nodes, leafOnly) {
      if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCheckedNodes');
      this.store.setCheckedNodes(nodes, leafOnly);
    },
    setCheckedKeys: function setCheckedKeys(keys, leafOnly) {
      if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCheckedKeys');
      this.store.setCheckedKeys(keys, leafOnly);
    },
    setChecked: function setChecked(data, checked, deep) {
      this.store.setChecked(data, checked, deep);
    },
    getHalfCheckedNodes: function getHalfCheckedNodes() {
      return this.store.getHalfCheckedNodes();
    },
    getHalfCheckedKeys: function getHalfCheckedKeys() {
      return this.store.getHalfCheckedKeys();
    },
    setCurrentNode: function setCurrentNode(node) {
      if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCurrentNode');
      this.store.setUserCurrentNode(node);
    },
    setCurrentKey: function setCurrentKey(key) {
      if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCurrentKey');
      this.store.setCurrentNodeKey(key);
    },
    getNode: function getNode(data) {
      return this.store.getNode(data);
    },
    remove: function remove(data) {
      this.store.remove(data);
    },
    append: function append(data, parentNode) {
      this.store.append(data, parentNode);
    },
    insertBefore: function insertBefore(data, refNode) {
      this.store.insertBefore(data, refNode);
    },
    insertAfter: function insertAfter(data, refNode) {
      this.store.insertAfter(data, refNode);
    },
    handleNodeExpand: function handleNodeExpand(nodeData, node, instance) {
      this.broadcast('ElTreeNode', 'tree-node-expand', node);
      this.$emit('node-expand', nodeData, node, instance);
    },
    updateKeyChildren: function updateKeyChildren(key, data) {
      if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in updateKeyChild');
      this.store.updateChildren(key, data);
    },
    initTabIndex: function initTabIndex() {
      this.treeItems = this.$el.querySelectorAll('.is-focusable[role=treeitem]');
      this.checkboxItems = this.$el.querySelectorAll('input[type=checkbox]');
      var checkedItem = this.$el.querySelectorAll('.is-checked[role=treeitem]');

      if (checkedItem.length) {
        checkedItem[0].setAttribute('tabindex', 0);
        return;
      }

      this.treeItems[0] && this.treeItems[0].setAttribute('tabindex', 0);
    },
    handleKeydown: function handleKeydown(ev) {
      var currentItem = ev.target;
      if (currentItem.className.indexOf('ss-tree-node') === -1) return;
      var keyCode = ev.keyCode;
      this.treeItems = this.$el.querySelectorAll('.is-focusable[role=treeitem]');
      var currentIndex = this.treeItemArray.indexOf(currentItem);
      var nextIndex;

      if ([38, 40].indexOf(keyCode) > -1) {
        // up、down
        ev.preventDefault();

        if (keyCode === 38) {
          // up
          nextIndex = currentIndex !== 0 ? currentIndex - 1 : 0;
        } else {
          nextIndex = currentIndex < this.treeItemArray.length - 1 ? currentIndex + 1 : 0;
        }

        this.treeItemArray[nextIndex].focus(); // 选中
      }

      if ([37, 39].indexOf(keyCode) > -1) {
        // left、right 展开
        ev.preventDefault();
        currentItem.click(); // 选中
      }

      var hasInput = currentItem.querySelector('[type="checkbox"]');

      if ([13, 32].indexOf(keyCode) > -1 && hasInput) {
        // space enter选中checkbox
        ev.preventDefault();
        hasInput.click();
      }
    }
  },
  created: function created() {
    var _this = this;

    this.isTree = true;
    this.store = new tree_store_TreeStore({
      key: this.nodeKey,
      data: this.data,
      lazy: this.lazy,
      props: this.props,
      load: this.load,
      currentNodeKey: this.currentNodeKey,
      checkStrictly: this.checkStrictly,
      checkDescendants: this.checkDescendants,
      defaultCheckedKeys: this.defaultCheckedKeys,
      defaultExpandedKeys: this.defaultExpandedKeys,
      autoExpandParent: this.autoExpandParent,
      defaultExpandAll: this.defaultExpandAll,
      filterNodeMethod: this.filterNodeMethod
    });
    this.root = this.store.root;
    var dragState = this.dragState;
    this.$on('tree-node-drag-start', function (event, treeNode) {
      if (typeof _this.allowDrag === 'function' && !_this.allowDrag(treeNode.node)) {
        event.preventDefault();
        return false;
      }

      event.dataTransfer.effectAllowed = 'move'; // wrap in try catch to address IE's error when first param is 'text/plain'

      try {
        // setData is required for draggable to work in FireFox
        // the content has to be '' so dragging a node out of the tree won't open a new tab in FireFox
        event.dataTransfer.setData('text/plain', '');
      } catch (e) {}

      dragState.draggingNode = treeNode;

      _this.$emit('node-drag-start', treeNode.node, event);
    });
    this.$on('tree-node-drag-over', function (event, treeNode) {
      var dropNode = findNearestComponent(event.target, 'ElTreeNode');
      var oldDropNode = dragState.dropNode;

      if (oldDropNode && oldDropNode !== dropNode) {
        removeClass(oldDropNode.$el, 'is-drop-inner');
      }

      var draggingNode = dragState.draggingNode;
      if (!draggingNode || !dropNode) return;
      var dropPrev = true;
      var dropInner = true;
      var dropNext = true;
      var userAllowDropInner = true;

      if (typeof _this.allowDrop === 'function') {
        dropPrev = _this.allowDrop(draggingNode.node, dropNode.node, 'prev');
        userAllowDropInner = dropInner = _this.allowDrop(draggingNode.node, dropNode.node, 'inner');
        dropNext = _this.allowDrop(draggingNode.node, dropNode.node, 'next');
      }

      event.dataTransfer.dropEffect = dropInner ? 'move' : 'none';

      if ((dropPrev || dropInner || dropNext) && oldDropNode !== dropNode) {
        if (oldDropNode) {
          _this.$emit('node-drag-leave', draggingNode.node, oldDropNode.node, event);
        }

        _this.$emit('node-drag-enter', draggingNode.node, dropNode.node, event);
      }

      if (dropPrev || dropInner || dropNext) {
        dragState.dropNode = dropNode;
      }

      if (dropNode.node.nextSibling === draggingNode.node) {
        dropNext = false;
      }

      if (dropNode.node.previousSibling === draggingNode.node) {
        dropPrev = false;
      }

      if (dropNode.node.contains(draggingNode.node, false)) {
        dropInner = false;
      }

      if (draggingNode.node === dropNode.node || draggingNode.node.contains(dropNode.node)) {
        dropPrev = false;
        dropInner = false;
        dropNext = false;
      }

      var targetPosition = dropNode.$el.getBoundingClientRect();

      var treePosition = _this.$el.getBoundingClientRect();

      var dropType;
      var prevPercent = dropPrev ? dropInner ? 0.25 : dropNext ? 0.45 : 1 : -1;
      var nextPercent = dropNext ? dropInner ? 0.75 : dropPrev ? 0.55 : 0 : 1;
      var indicatorTop = -9999;
      var distance = event.clientY - targetPosition.top;

      if (distance < targetPosition.height * prevPercent) {
        dropType = 'before';
      } else if (distance > targetPosition.height * nextPercent) {
        dropType = 'after';
      } else if (dropInner) {
        dropType = 'inner';
      } else {
        dropType = 'none';
      }

      var iconPosition = dropNode.$el.querySelector('.ss-tree-node__expand-icon').getBoundingClientRect();
      var dropIndicator = _this.$refs.dropIndicator;

      if (dropType === 'before') {
        indicatorTop = iconPosition.top - treePosition.top;
      } else if (dropType === 'after') {
        indicatorTop = iconPosition.bottom - treePosition.top;
      }

      dropIndicator.style.top = indicatorTop + 'px';
      dropIndicator.style.left = iconPosition.right - treePosition.left + 'px';

      if (dropType === 'inner') {
        addClass(dropNode.$el, 'is-drop-inner');
      } else {
        removeClass(dropNode.$el, 'is-drop-inner');
      }

      dragState.showDropIndicator = dropType === 'before' || dropType === 'after';
      dragState.allowDrop = dragState.showDropIndicator || userAllowDropInner;
      dragState.dropType = dropType;

      _this.$emit('node-drag-over', draggingNode.node, dropNode.node, event);
    });
    this.$on('tree-node-drag-end', function (event) {
      var draggingNode = dragState.draggingNode,
          dropType = dragState.dropType,
          dropNode = dragState.dropNode;
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';

      if (draggingNode && dropNode) {
        var draggingNodeCopy = {
          data: draggingNode.node.data
        };

        if (dropType !== 'none') {
          draggingNode.node.remove();
        }

        if (dropType === 'before') {
          dropNode.node.parent.insertBefore(draggingNodeCopy, dropNode.node);
        } else if (dropType === 'after') {
          dropNode.node.parent.insertAfter(draggingNodeCopy, dropNode.node);
        } else if (dropType === 'inner') {
          dropNode.node.insertChild(draggingNodeCopy);
        }

        if (dropType !== 'none') {
          _this.store.registerNode(draggingNodeCopy);
        }

        removeClass(dropNode.$el, 'is-drop-inner');

        _this.$emit('node-drag-end', draggingNode.node, dropNode.node, dropType, event);

        if (dropType !== 'none') {
          _this.$emit('node-drop', draggingNode.node, dropNode.node, dropType, event);
        }
      }

      if (draggingNode && !dropNode) {
        _this.$emit('node-drag-end', draggingNode.node, null, dropType, event);
      }

      dragState.showDropIndicator = false;
      dragState.draggingNode = null;
      dragState.dropNode = null;
      dragState.allowDrop = true;
    });
  },
  mounted: function mounted() {
    this.initTabIndex();
    this.$el.addEventListener('keydown', this.handleKeydown);
  },
  updated: function updated() {
    this.treeItems = this.$el.querySelectorAll('[role=treeitem]');
    this.checkboxItems = this.$el.querySelectorAll('input[type=checkbox]');
  }
});
// CONCATENATED MODULE: ./src/components/tree/components/tree.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_treevue_type_script_lang_js_ = (treevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/tree/components/tree.vue?vue&type=style&index=0&id=2bc89438&lang=scss&scoped=true&
var treevue_type_style_index_0_id_2bc89438_lang_scss_scoped_true_ = __webpack_require__(100);

// CONCATENATED MODULE: ./src/components/tree/components/tree.vue






/* normalize component */

var tree_component = normalizeComponent(
  components_treevue_type_script_lang_js_,
  treevue_type_template_id_2bc89438_scoped_true_render,
  treevue_type_template_id_2bc89438_scoped_true_staticRenderFns,
  false,
  null,
  "2bc89438",
  null
  
)

/* harmony default export */ var tree = (tree_component.exports);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/tree/components/tree-lite.vue?vue&type=template&id=5dda0a70&scoped=true&
var tree_litevue_type_template_id_5dda0a70_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ss-tree-main"},[_c('ss-tree',_vm._g(_vm._b({ref:"tree",attrs:{"empty-text":''},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var node = ref.node;
var data = ref.data;
return (!!node.data.children)?_c('tree-node-content',{attrs:{"type":"node","node":node,"tools":_vm.nodeTools,"show-checkbox":_vm.showCheckbox},on:{"option-click":_vm.optionClick,"tool-click":_vm.operationClick,"update:node":function($event){node=$event}}},[_vm._t("tree-node",null,{"node":node,"data":data})],2):_c('tree-node-content',{attrs:{"type":"leaf","node":node,"tools":_vm.nodeTools,"show-checkbox":_vm.showCheckbox},on:{"option-click":_vm.optionClick,"tool-click":_vm.operationClick}},[_vm._t("leaf-node",null,{"node":node,"data":data})],2)}}],null,true)},'ss-tree',Object.assign({}, _vm.$attrs, _vm.$props),false),_vm.$listeners))],1)}
var tree_litevue_type_template_id_5dda0a70_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/tree/components/tree-lite.vue?vue&type=template&id=5dda0a70&scoped=true&

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/tree/components/node-content.vue?vue&type=template&id=3804d2f2&scoped=true&
var node_contentvue_type_template_id_3804d2f2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ss-tree-node-custom",on:{"mouseover":_vm.customNodeMouseover,"mouseout":_vm.customNodeMouseout}},[_vm._t("default",[_c('div',{staticClass:"ss-tree-node-custom-content"},[(_vm.type === 'node')?_c('i',{staticClass:"sense-icon_file ss-tree-node-custom-icon"}):_vm._e(),_c('div',{staticClass:"ss-tree-node-custom-label",attrs:{"title":_vm.filterTitle(_vm.node.label)}},[_c('ss-name-replacer',{attrs:{"name":_vm.node.label,"type":"1"}})],1)])]),(_vm.tools.length > 0)?_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowTools),expression:"isShowTools"}],staticClass:"ss-tree-node-custom-tools"},_vm._l((_vm.tools),function(item){return _c('li',{directives:[{name:"show",rawName:"v-show",value:(!(_vm.type === 'leaf' && !item.requireToLeaf)),expression:"!(type === 'leaf' && !item.requireToLeaf)"}],key:item.id,staticClass:"ss-tools-item"},[_c('button',{staticClass:"ss-tools-item-icon",style:({background: ("url(" + (item.icon) + ")")}),attrs:{"slot":"reference"},on:{"mouseover":function($event){return _vm.operationMouseOver($event, item.hoverIcon, item)},"mouseout":function($event){return _vm.operationMouseOut($event, item.icon, item)},"click":function($event){$event.stopPropagation();return _vm.operationClick(item)}},slot:"reference"}),_c('span',{staticClass:"ss-tools-item-arrowOuter"}),_c('span',{staticClass:"ss-tools-item-arrowInner"}),_c('ul',{staticClass:"ss-tools-item-options"},_vm._l((item.hoverOption),function(option){return _c('li',{directives:[{name:"show",rawName:"v-show",value:(_vm.checkIsShowRootOption(option.requireToRoot)),expression:"checkIsShowRootOption(option.requireToRoot)"}],key:option.id,staticClass:"ss-tools-item-options-item",on:{"click":function($event){$event.stopPropagation();return _vm.optionClick(option, item)}}},[_vm._v("\n            "+_vm._s(option.label)+"\n          ")])}),0)])}),0):_vm._e()],2)}
var node_contentvue_type_template_id_3804d2f2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/tree/components/node-content.vue?vue&type=template&id=3804d2f2&scoped=true&

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/newPopover/src/main.vue?vue&type=template&id=537b9a10&
var mainvue_type_template_id_537b9a10_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_c('transition',{attrs:{"name":_vm.transition},on:{"after-enter":_vm.handleAfterEnter,"after-leave":_vm.handleAfterLeave}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.disabled && _vm.showPopper),expression:"!disabled && showPopper"}],ref:"popper",staticClass:"ss-new-popover ss-popper",class:[_vm.popperClass, _vm.content && 'ss-new-popover--plain'],style:({ width: _vm.width + 'px' }),attrs:{"role":"tooltip","id":_vm.tooltipId,"aria-hidden":(_vm.disabled || !_vm.showPopper) ? 'true' : 'false'}},[(_vm.title)?_c('div',{staticClass:"ss-new-popover__title",domProps:{"textContent":_vm._s(_vm.title)}}):_vm._e(),_vm._t("default",[_vm._v(_vm._s(_vm.content))])],2)]),_vm._t("reference")],2)}
var mainvue_type_template_id_537b9a10_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/newPopover/src/main.vue?vue&type=template&id=537b9a10&

// CONCATENATED MODULE: ./src/utils/merge.js
/* harmony default export */ var utils_merge = (function (target) {
  for (var i = 1, j = arguments.length; i < j; i++) {
    var source = arguments[i] || {};

    for (var prop in source) {
      if (source.hasOwnProperty(prop)) {
        var value = source[prop];

        if (value !== undefined) {
          target[prop] = value;
        }
      }
    }
  }

  return target;
});
;
// CONCATENATED MODULE: ./src/utils/popup/popup-manager.js


var hasModal = false;
var hasInitZIndex = false;
var popup_manager_zIndex;

var popup_manager_getModal = function getModal() {
  if (external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype.$isServer) return;
  var modalDom = PopupManager.modalDom;

  if (modalDom) {
    hasModal = true;
  } else {
    hasModal = false;
    modalDom = document.createElement('div');
    PopupManager.modalDom = modalDom;
    modalDom.addEventListener('touchmove', function (event) {
      event.preventDefault();
      event.stopPropagation();
    });
    modalDom.addEventListener('click', function () {
      PopupManager.doOnModalClick && PopupManager.doOnModalClick();
    });
  }

  return modalDom;
};

var popup_manager_instances = {};
var PopupManager = {
  modalFade: true,
  getInstance: function getInstance(id) {
    return popup_manager_instances[id];
  },
  register: function register(id, instance) {
    if (id && instance) {
      popup_manager_instances[id] = instance;
    }
  },
  deregister: function deregister(id) {
    if (id) {
      popup_manager_instances[id] = null;
      delete popup_manager_instances[id];
    }
  },
  nextZIndex: function nextZIndex() {
    return PopupManager.zIndex++;
  },
  modalStack: [],
  doOnModalClick: function doOnModalClick() {
    var topItem = PopupManager.modalStack[PopupManager.modalStack.length - 1];
    if (!topItem) return;
    var instance = PopupManager.getInstance(topItem.id);

    if (instance && instance.closeOnClickModal) {
      instance.close();
    }
  },
  openModal: function openModal(id, zIndex, dom, modalClass, modalFade) {
    if (external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype.$isServer) return;
    if (!id || zIndex === undefined) return;
    this.modalFade = modalFade;
    var modalStack = this.modalStack;

    for (var i = 0, j = modalStack.length; i < j; i++) {
      var item = modalStack[i];

      if (item.id === id) {
        return;
      }
    }

    var modalDom = popup_manager_getModal();
    addClass(modalDom, 'v-modal');

    if (this.modalFade && !hasModal) {
      addClass(modalDom, 'v-modal-enter');
    }

    if (modalClass) {
      var classArr = modalClass.trim().split(/\s+/);
      classArr.forEach(function (item) {
        return addClass(modalDom, item);
      });
    }

    setTimeout(function () {
      removeClass(modalDom, 'v-modal-enter');
    }, 200);

    if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
      dom.parentNode.appendChild(modalDom);
    } else {
      document.body.appendChild(modalDom);
    }

    if (zIndex) {
      modalDom.style.zIndex = zIndex;
    }

    modalDom.tabIndex = 0;
    modalDom.style.display = '';
    this.modalStack.push({
      id: id,
      zIndex: zIndex,
      modalClass: modalClass
    });
  },
  closeModal: function closeModal(id) {
    var modalStack = this.modalStack;
    var modalDom = popup_manager_getModal();

    if (modalStack.length > 0) {
      var topItem = modalStack[modalStack.length - 1];

      if (topItem.id === id) {
        if (topItem.modalClass) {
          var classArr = topItem.modalClass.trim().split(/\s+/);
          classArr.forEach(function (item) {
            return removeClass(modalDom, item);
          });
        }

        modalStack.pop();

        if (modalStack.length > 0) {
          modalDom.style.zIndex = modalStack[modalStack.length - 1].zIndex;
        }
      } else {
        for (var i = modalStack.length - 1; i >= 0; i--) {
          if (modalStack[i].id === id) {
            modalStack.splice(i, 1);
            break;
          }
        }
      }
    }

    if (modalStack.length === 0) {
      if (this.modalFade) {
        addClass(modalDom, 'v-modal-leave');
      }

      setTimeout(function () {
        if (modalStack.length === 0) {
          if (modalDom.parentNode) modalDom.parentNode.removeChild(modalDom);
          modalDom.style.display = 'none';
          PopupManager.modalDom = undefined;
        }

        removeClass(modalDom, 'v-modal-leave');
      }, 200);
    }
  }
};
Object.defineProperty(PopupManager, 'zIndex', {
  configurable: true,
  get: function get() {
    if (!hasInitZIndex) {
      popup_manager_zIndex = popup_manager_zIndex || (external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype.$ELEMENT || {}).zIndex || 2000;
      hasInitZIndex = true;
    }

    return popup_manager_zIndex;
  },
  set: function set(value) {
    popup_manager_zIndex = value;
  }
});

var popup_manager_getTopPopup = function getTopPopup() {
  if (external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype.$isServer) return;

  if (PopupManager.modalStack.length > 0) {
    var topPopup = PopupManager.modalStack[PopupManager.modalStack.length - 1];
    if (!topPopup) return;
    var instance = PopupManager.getInstance(topPopup.id);
    return instance;
  }
};

if (!external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype.$isServer) {
  // handle `esc` key when the popup is shown
  window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
      var topPopup = popup_manager_getTopPopup();

      if (topPopup && topPopup.closeOnPressEscape) {
        topPopup.handleClose ? topPopup.handleClose() : topPopup.handleAction ? topPopup.handleAction('cancel') : topPopup.close();
      }
    }
  });
}

/* harmony default export */ var popup_manager = (PopupManager);
// CONCATENATED MODULE: ./src/utils/scrollbar-width.js

var scrollBarWidth;
/* harmony default export */ var scrollbar_width = (function () {
  if (external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype.$isServer) return 0;
  if (scrollBarWidth !== undefined) return scrollBarWidth;
  var outer = document.createElement('div');
  outer.className = 'el-scrollbar__wrap';
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  document.body.appendChild(outer);
  var widthNoScroll = outer.offsetWidth;
  outer.style.overflow = 'scroll';
  var inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);
  var widthWithScroll = inner.offsetWidth;
  outer.parentNode.removeChild(outer);
  scrollBarWidth = widthNoScroll - widthWithScroll;
  return scrollBarWidth;
});
;
// CONCATENATED MODULE: ./src/utils/popup/index.js





var idSeed = 1;
var popup_scrollBarWidth;
/* harmony default export */ var popup = ({
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    openDelay: {},
    closeDelay: {},
    zIndex: {},
    modal: {
      type: Boolean,
      default: false
    },
    modalFade: {
      type: Boolean,
      default: true
    },
    modalClass: {},
    modalAppendToBody: {
      type: Boolean,
      default: false
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    closeOnPressEscape: {
      type: Boolean,
      default: false
    },
    closeOnClickModal: {
      type: Boolean,
      default: false
    }
  },
  beforeMount: function beforeMount() {
    this._popupId = 'popup-' + idSeed++;
    popup_manager.register(this._popupId, this);
  },
  beforeDestroy: function beforeDestroy() {
    popup_manager.deregister(this._popupId);
    popup_manager.closeModal(this._popupId);
    this.restoreBodyStyle();
  },
  data: function data() {
    return {
      opened: false,
      bodyPaddingRight: null,
      computedBodyPaddingRight: 0,
      withoutHiddenClass: true,
      rendered: false
    };
  },
  watch: {
    visible: function visible(val) {
      var _this = this;

      if (val) {
        if (this._opening) return;

        if (!this.rendered) {
          this.rendered = true;
          external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.nextTick(function () {
            _this.open();
          });
        } else {
          this.open();
        }
      } else {
        this.close();
      }
    }
  },
  methods: {
    open: function open(options) {
      var _this2 = this;

      if (!this.rendered) {
        this.rendered = true;
      }

      var props = utils_merge({}, this.$props || this, options);

      if (this._closeTimer) {
        clearTimeout(this._closeTimer);
        this._closeTimer = null;
      }

      clearTimeout(this._openTimer);
      var openDelay = Number(props.openDelay);

      if (openDelay > 0) {
        this._openTimer = setTimeout(function () {
          _this2._openTimer = null;

          _this2.doOpen(props);
        }, openDelay);
      } else {
        this.doOpen(props);
      }
    },
    doOpen: function doOpen(props) {
      if (this.$isServer) return;
      if (this.willOpen && !this.willOpen()) return;
      if (this.opened) return;
      this._opening = true;
      var dom = this.$el;
      var modal = props.modal;
      var zIndex = props.zIndex;

      if (zIndex) {
        popup_manager.zIndex = zIndex;
      }

      if (modal) {
        if (this._closing) {
          popup_manager.closeModal(this._popupId);
          this._closing = false;
        }

        popup_manager.openModal(this._popupId, popup_manager.nextZIndex(), this.modalAppendToBody ? undefined : dom, props.modalClass, props.modalFade);

        if (props.lockScroll) {
          this.withoutHiddenClass = !hasClass(document.body, 'el-popup-parent--hidden');

          if (this.withoutHiddenClass) {
            this.bodyPaddingRight = document.body.style.paddingRight;
            this.computedBodyPaddingRight = parseInt(getStyle(document.body, 'paddingRight'), 10);
          }

          popup_scrollBarWidth = scrollbar_width();
          var bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;
          var bodyOverflowY = getStyle(document.body, 'overflowY');

          if (popup_scrollBarWidth > 0 && (bodyHasOverflow || bodyOverflowY === 'scroll') && this.withoutHiddenClass) {
            document.body.style.paddingRight = this.computedBodyPaddingRight + popup_scrollBarWidth + 'px';
          }

          addClass(document.body, 'el-popup-parent--hidden');
        }
      }

      if (getComputedStyle(dom).position === 'static') {
        dom.style.position = 'absolute';
      }

      dom.style.zIndex = popup_manager.nextZIndex();
      this.opened = true;
      this.onOpen && this.onOpen();
      this.doAfterOpen();
    },
    doAfterOpen: function doAfterOpen() {
      this._opening = false;
    },
    close: function close() {
      var _this3 = this;

      if (this.willClose && !this.willClose()) return;

      if (this._openTimer !== null) {
        clearTimeout(this._openTimer);
        this._openTimer = null;
      }

      clearTimeout(this._closeTimer);
      var closeDelay = Number(this.closeDelay);

      if (closeDelay > 0) {
        this._closeTimer = setTimeout(function () {
          _this3._closeTimer = null;

          _this3.doClose();
        }, closeDelay);
      } else {
        this.doClose();
      }
    },
    doClose: function doClose() {
      this._closing = true;
      this.onClose && this.onClose();

      if (this.lockScroll) {
        setTimeout(this.restoreBodyStyle, 200);
      }

      this.opened = false;
      this.doAfterClose();
    },
    doAfterClose: function doAfterClose() {
      popup_manager.closeModal(this._popupId);
      this._closing = false;
    },
    restoreBodyStyle: function restoreBodyStyle() {
      if (this.modal && this.withoutHiddenClass) {
        document.body.style.paddingRight = this.bodyPaddingRight;
        removeClass(document.body, 'el-popup-parent--hidden');
      }

      this.withoutHiddenClass = true;
    }
  }
});

// CONCATENATED MODULE: ./src/utils/vue-popper.js


var PopperJS = external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.prototype.$isServer ? function () {} : __webpack_require__(101);

var stop = function stop(e) {
  return e.stopPropagation();
};
/**
 * @param {HTMLElement} [reference=$refs.reference] - The reference element used to position the popper.
 * @param {HTMLElement} [popper=$refs.popper] - The HTML element used as popper, or a configuration used to generate the popper.
 * @param {String} [placement=button] - Placement of the popper accepted values: top(-start, -end), right(-start, -end), bottom(-start, -end), left(-start, -end)
 * @param {Number} [offset=0] - Amount of pixels the popper will be shifted (can be negative).
 * @param {Boolean} [visible=false] Visibility of the popup element.
 * @param {Boolean} [visible-arrow=false] Visibility of the arrow, no style.
 */


/* harmony default export */ var vue_popper = ({
  props: {
    transformOrigin: {
      type: [Boolean, String],
      default: true
    },
    placement: {
      type: String,
      default: 'bottom'
    },
    boundariesPadding: {
      type: Number,
      default: 5
    },
    reference: {},
    popper: {},
    offset: {
      default: 0
    },
    value: Boolean,
    visibleArrow: Boolean,
    arrowOffset: {
      type: Number,
      default: 35
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    popperOptions: {
      type: Object,
      default: function _default() {
        return {
          gpuAcceleration: false
        };
      }
    }
  },
  data: function data() {
    return {
      showPopper: false,
      currentPlacement: ''
    };
  },
  watch: {
    value: {
      immediate: true,
      handler: function handler(val) {
        this.showPopper = val;
        this.$emit('input', val);
      }
    },
    showPopper: function showPopper(val) {
      if (this.disabled) return;
      val ? this.updatePopper() : this.destroyPopper();
      this.$emit('input', val);
    }
  },
  methods: {
    createPopper: function createPopper() {
      var _this = this;

      if (this.$isServer) return;
      this.currentPlacement = this.currentPlacement || this.placement;

      if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.currentPlacement)) {
        return;
      }

      var options = this.popperOptions;
      var popper = this.popperElm = this.popperElm || this.popper || this.$refs.popper;
      var reference = this.referenceElm = this.referenceElm || this.reference || this.$refs.reference;

      if (!reference && this.$slots.reference && this.$slots.reference[0]) {
        reference = this.referenceElm = this.$slots.reference[0].elm;
      }

      if (!popper || !reference) return;
      if (this.visibleArrow) this.appendArrow(popper);
      if (this.appendToBody) document.body.appendChild(this.popperElm);

      if (this.popperJS && this.popperJS.destroy) {
        this.popperJS.destroy();
      }

      options.placement = this.currentPlacement;
      options.offset = this.offset;
      options.arrowOffset = this.arrowOffset;
      this.popperJS = new PopperJS(reference, popper, options);
      this.popperJS.onCreate(function (_) {
        _this.$emit('created', _this);

        _this.resetTransformOrigin();

        _this.$nextTick(_this.updatePopper);
      });

      if (typeof options.onUpdate === 'function') {
        this.popperJS.onUpdate(options.onUpdate);
      }

      this.popperJS._popper.style.zIndex = popup_manager.nextZIndex();
      this.popperElm.addEventListener('click', stop);
    },
    updatePopper: function updatePopper() {
      var popperJS = this.popperJS;

      if (popperJS) {
        popperJS.update();

        if (popperJS._popper) {
          popperJS._popper.style.zIndex = popup_manager.nextZIndex();
        }
      } else {
        this.createPopper();
      }
    },
    doDestroy: function doDestroy(forceDestroy) {
      /* istanbul ignore if */
      if (!this.popperJS || this.showPopper && !forceDestroy) return;
      this.popperJS.destroy();
      this.popperJS = null;
    },
    destroyPopper: function destroyPopper() {
      if (this.popperJS) {
        this.resetTransformOrigin();
      }
    },
    resetTransformOrigin: function resetTransformOrigin() {
      if (!this.transformOrigin) return;
      var placementMap = {
        top: 'bottom',
        bottom: 'top',
        left: 'right',
        right: 'left'
      };

      var placement = this.popperJS._popper.getAttribute('x-placement').split('-')[0];

      var origin = placementMap[placement];
      this.popperJS._popper.style.transformOrigin = typeof this.transformOrigin === 'string' ? this.transformOrigin : ['top', 'bottom'].indexOf(placement) > -1 ? "center ".concat(origin) : "".concat(origin, " center");
    },
    appendArrow: function appendArrow(element) {
      var hash;

      if (this.appended) {
        return;
      }

      this.appended = true;

      for (var item in element.attributes) {
        if (/^_v-/.test(element.attributes[item].name)) {
          hash = element.attributes[item].name;
          break;
        }
      }

      var arrow = document.createElement('div');

      if (hash) {
        arrow.setAttribute(hash, '');
      }

      arrow.setAttribute('x-arrow', '');
      arrow.className = 'popper__arrow';
      element.appendChild(arrow);
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.doDestroy(true);

    if (this.popperElm && this.popperElm.parentNode === document.body) {
      this.popperElm.removeEventListener('click', stop);
      document.body.removeChild(this.popperElm);
    }
  },
  // call destroy in keep-alive mode
  deactivated: function deactivated() {
    this.$options.beforeDestroy[0].call(this);
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/newPopover/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var src_mainvue_type_script_lang_js_ = ({
  name: 'ElPopover',
  mixins: [vue_popper],
  props: {
    trigger: {
      type: String,
      default: 'click',
      validator: function validator(value) {
        return ['click', 'focus', 'hover', 'manual'].indexOf(value) > -1;
      }
    },
    openDelay: {
      type: Number,
      default: 0
    },
    closeDelay: {
      type: Number,
      default: 200
    },
    title: String,
    disabled: Boolean,
    content: String,
    reference: {},
    popperClass: String,
    width: {},
    visibleArrow: {
      default: true
    },
    arrowOffset: {
      type: Number,
      default: 0
    },
    transition: {
      type: String,
      default: 'fade-in-linear'
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    tooltipId: function tooltipId() {
      return "ss-new-popover-".concat(generateId());
    }
  },
  watch: {
    showPopper: function showPopper(val) {
      if (this.disabled) {
        return;
      }

      val ? this.$emit('show') : this.$emit('hide');
    }
  },
  mounted: function mounted() {
    var _this = this;

    var reference = this.referenceElm = this.reference || this.$refs.reference;
    var popper = this.popper || this.$refs.popper;

    if (!reference && this.$slots.reference && this.$slots.reference[0]) {
      reference = this.referenceElm = this.$slots.reference[0].elm;
    } // 可访问性


    if (reference) {
      addClass(reference, 'ss-new-popover__reference');
      reference.setAttribute('aria-describedby', this.tooltipId);
      reference.setAttribute('tabindex', this.tabindex); // tab序列

      popper.setAttribute('tabindex', 0);

      if (this.trigger !== 'click') {
        on(reference, 'focusin', function () {
          _this.handleFocus();

          var instance = reference.__vue__;

          if (instance && typeof instance.focus === 'function') {
            instance.focus();
          }
        });
        on(popper, 'focusin', this.handleFocus);
        on(reference, 'focusout', this.handleBlur);
        on(popper, 'focusout', this.handleBlur);
      }

      on(reference, 'keydown', this.handleKeydown);
      on(reference, 'click', this.handleClick);
    }

    if (this.trigger === 'click') {
      on(reference, 'click', this.doToggle);
      on(document, 'click', this.handleDocumentClick);
    } else if (this.trigger === 'hover') {
      on(reference, 'mouseenter', this.handleMouseEnter);
      on(popper, 'mouseenter', this.handleMouseEnter);
      on(reference, 'mouseleave', this.handleMouseLeave);
      on(popper, 'mouseleave', this.handleMouseLeave);
    } else if (this.trigger === 'focus') {
      if (this.tabindex < 0) {
        console.warn('[Element Warn][Popover]a negative taindex means that the element cannot be focused by tab key');
      }

      if (reference.querySelector('input, textarea')) {
        on(reference, 'focusin', this.doShow);
        on(reference, 'focusout', this.doClose);
      } else {
        on(reference, 'mousedown', this.doShow);
        on(reference, 'mouseup', this.doClose);
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.cleanup();
  },
  deactivated: function deactivated() {
    this.cleanup();
  },
  methods: {
    doToggle: function doToggle() {
      this.showPopper = !this.showPopper;
    },
    doShow: function doShow() {
      this.showPopper = true;
    },
    doClose: function doClose() {
      this.showPopper = false;
    },
    handleFocus: function handleFocus() {
      addClass(this.referenceElm, 'focusing');
      if (this.trigger === 'click' || this.trigger === 'focus') this.showPopper = true;
    },
    handleClick: function handleClick() {
      removeClass(this.referenceElm, 'focusing');
    },
    handleBlur: function handleBlur() {
      removeClass(this.referenceElm, 'focusing');
      if (this.trigger === 'click' || this.trigger === 'focus') this.showPopper = false;
    },
    handleMouseEnter: function handleMouseEnter() {
      var _this2 = this;

      clearTimeout(this._timer);

      if (this.openDelay) {
        this._timer = setTimeout(function () {
          _this2.showPopper = true;
        }, this.openDelay);
      } else {
        this.showPopper = true;
      }
    },
    handleKeydown: function handleKeydown(ev) {
      if (ev.keyCode === 27 && this.trigger !== 'manual') {
        // esc
        this.doClose();
      }
    },
    handleMouseLeave: function handleMouseLeave() {
      var _this3 = this;

      clearTimeout(this._timer);

      if (this.closeDelay) {
        this._timer = setTimeout(function () {
          _this3.showPopper = false;
        }, this.closeDelay);
      } else {
        this.showPopper = false;
      }
    },
    handleDocumentClick: function handleDocumentClick(e) {
      var reference = this.reference || this.$refs.reference;
      var popper = this.popper || this.$refs.popper;

      if (!reference && this.$slots.reference && this.$slots.reference[0]) {
        reference = this.referenceElm = this.$slots.reference[0].elm;
      }

      if (!this.$el || !reference || this.$el.contains(e.target) || reference.contains(e.target) || !popper || popper.contains(e.target)) return;
      this.showPopper = false;
    },
    handleAfterEnter: function handleAfterEnter() {
      this.$emit('after-enter');
    },
    handleAfterLeave: function handleAfterLeave() {
      this.$emit('after-leave');
      this.doDestroy();
    },
    cleanup: function cleanup() {
      if (this.openDelay || this.closeDelay) {
        clearTimeout(this._timer);
      }
    }
  },
  destroyed: function destroyed() {
    var reference = this.reference;
    off(reference, 'click', this.doToggle);
    off(reference, 'mouseup', this.doClose);
    off(reference, 'mousedown', this.doShow);
    off(reference, 'focusin', this.doShow);
    off(reference, 'focusout', this.doClose);
    off(reference, 'mousedown', this.doShow);
    off(reference, 'mouseup', this.doClose);
    off(reference, 'mouseleave', this.handleMouseLeave);
    off(reference, 'mouseenter', this.handleMouseEnter);
    off(document, 'click', this.handleDocumentClick);
  }
});
// CONCATENATED MODULE: ./src/components/newPopover/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var newPopover_src_mainvue_type_script_lang_js_ = (src_mainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/newPopover/src/main.vue?vue&type=style&index=0&lang=scss&
var src_mainvue_type_style_index_0_lang_scss_ = __webpack_require__(102);

// CONCATENATED MODULE: ./src/components/newPopover/src/main.vue






/* normalize component */

var src_main_component = normalizeComponent(
  newPopover_src_mainvue_type_script_lang_js_,
  mainvue_type_template_id_537b9a10_render,
  mainvue_type_template_id_537b9a10_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_main = (src_main_component.exports);
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/tree/components/node-content.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * @description 树节点内容
 */


/* harmony default export */ var node_contentvue_type_script_lang_js_ = ({
  name: 'tree-node-content',
  components: {
    Popover: src_main,
    SsNameReplacer: nameReplacer
  },
  props: {
    /**
     * 节点类型
     * 叶子结点
     * 普通节点
     */
    type: {
      type: String,
      default: 'node'
    },

    /**
     * 节点数据
     */
    node: {
      type: Object,
      default: function _default() {
        return {};
      }
    },

    /**
     * 控制操作栏的图标显示
     */
    tools: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    /**
     * 是否展示复选框
     */
    showCheckbox: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      currClient: {
        x: '',
        y: ''
      },
      currentTool: {},
      isShowTools: false,
      hasPopover: false,
      hasHoverItem: false
    };
  },
  mounted: function mounted() {// console.log(this.node)
  },
  methods: {
    /**
     * 操作图标的 mouseover 事件
     */
    operationMouseOver: function operationMouseOver(event, hoverIcon, tool) {
      event.currentTarget.style.background = "url(".concat(hoverIcon, ")");
    },

    /**
     * 操作图标 mouseout 事件
     */
    operationMouseOut: function operationMouseOut(event, icon) {
      event.currentTarget.style.background = "url(".concat(icon, ")");
    },

    /**
     * 下拉选项 点击事件
     */
    optionClick: function optionClick(hoverOption, operationItem) {
      this.$emit('option-click', this.node.data, hoverOption, operationItem, this.node);
    },

    /**
     * 操作项点击事件
     */
    operationClick: function operationClick(operationItem) {
      this.$emit('tool-click', this.node.data, operationItem, this.node);
    },
    checkIsShowRootOption: function checkIsShowRootOption(requireToRoot) {
      if (requireToRoot !== false) {
        return true;
      } else {
        if (this.node.parent.parent === null) {
          return false;
        }
      }

      return true;
    },
    customNodeMouseover: function customNodeMouseover() {
      this.isShowTools = true;
      this.hasHoverItem = true;
    },
    customNodeMouseout: function customNodeMouseout() {
      if (!this.hasPopover) {
        this.isShowTools = false;
      }

      this.hasHoverItem = false;
    },
    popoverShow: function popoverShow() {
      this.isShowTools = true;
      this.hasPopover = true;
    },
    popoverHide: function popoverHide() {
      if (!this.hasHoverItem) {
        this.isShowTools = false;
      }

      this.hasPopover = false;
    },
    filterTitle: function filterTitle(title) {
      var reg = /##.*?##/g;
      var temp = title.match(reg);

      if (temp) {
        return "";
      } else {
        return title;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/tree/components/node-content.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_node_contentvue_type_script_lang_js_ = (node_contentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/tree/components/node-content.vue?vue&type=style&index=0&id=3804d2f2&lang=scss&scoped=true&
<<<<<<< HEAD
var node_contentvue_type_style_index_0_id_3804d2f2_lang_scss_scoped_true_ = __webpack_require__(103);
=======
var node_contentvue_type_style_index_0_id_3804d2f2_lang_scss_scoped_true_ = __webpack_require__(101);
>>>>>>> origin/master

// CONCATENATED MODULE: ./src/components/tree/components/node-content.vue






/* normalize component */

var node_content_component = normalizeComponent(
  components_node_contentvue_type_script_lang_js_,
  node_contentvue_type_template_id_3804d2f2_scoped_true_render,
  node_contentvue_type_template_id_3804d2f2_scoped_true_staticRenderFns,
  false,
  null,
  "3804d2f2",
  null
  
)

/* harmony default export */ var node_content = (node_content_component.exports);
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/tree/components/tree-lite.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var tree_litevue_type_script_lang_js_ = ({
  name: 'TreeLite',
  components: {
    SsTree: tree,
    treeNodeContent: node_content
  },
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    propsOption: {
      type: Object,
      default: function _default() {
        return {
          children: 'children',
          label: 'name'
        };
      }
    },
    isNodeOperational: {
      type: Boolean,
      default: true
    },
    treeConfig: {
      type: Object,
      default: function _default() {
        return {
          emptyImg: '',
          emptyText: '暂无数据'
        };
      }
    },
    showCheckbox: {
      type: Boolean,
      default: true
    },
    nodeTools: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    defaultCheckedKeys: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    nodeKey: {
      type: String,
      default: 'id'
    },
    containerWidth: {
      type: [Number, String],
      default: ''
    }
  },
  computed: {
    computEmptyImg: function computEmptyImg() {
      if (typeof this.treeConfig.emptyImg === 'undefined') {
        return __webpack_require__(104);
      } else {
        return this.treeConfig.emptyImg;
      }
    }
  },
  mounted: function mounted() {},
  methods: {
    /**
     * 树节点点击
     */
    handleNodeClick: function handleNodeClick(data) {
      this.$emit('nodeClick', data);
    },

    /**
     * 节点中操作栏的下拉项点击
     */
    optionClick: function optionClick() {
      var _this$$parent;

      (_this$$parent = this.$parent).$emit.apply(_this$$parent, ['option-click'].concat(Array.prototype.slice.call(arguments)));
    },

    /**
     * 点击操作的图标
     */
    operationClick: function operationClick() {
      var _this$$parent2;

      (_this$$parent2 = this.$parent).$emit.apply(_this$$parent2, ['tool-click'].concat(Array.prototype.slice.call(arguments)));
    },

    /**
     * 节点选择点击
     */
    nodeCheckedChange: function nodeCheckedChange(nodeData, node) {
      this.$emit('nodeCheckedChange', nodeData, node);
    },
    getTreeVm: function getTreeVm() {
      return this.$refs.tree;
    }
  }
});
// CONCATENATED MODULE: ./src/components/tree/components/tree-lite.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_tree_litevue_type_script_lang_js_ = (tree_litevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/tree/components/tree-lite.vue?vue&type=style&index=0&id=5dda0a70&lang=scss&scoped=true&
var tree_litevue_type_style_index_0_id_5dda0a70_lang_scss_scoped_true_ = __webpack_require__(105);

// CONCATENATED MODULE: ./src/components/tree/components/tree-lite.vue






/* normalize component */

var tree_lite_component = normalizeComponent(
  components_tree_litevue_type_script_lang_js_,
  tree_litevue_type_template_id_5dda0a70_scoped_true_render,
  tree_litevue_type_template_id_5dda0a70_scoped_true_staticRenderFns,
  false,
  null,
  "5dda0a70",
  null
  
)

/* harmony default export */ var tree_lite = (tree_lite_component.exports);
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/tree/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * @description 树组件入口
 */




var removeSameItemProcess = false;
/* harmony default export */ var lib_vue_loader_options_src_components_treevue_type_script_lang_js_ = ({
  name: 'SsTree',
  components: {
    SsInput: input,
    ElTree: tree,
    TreeLite: tree_lite,
    SsCheckbox: components_checkbox
  },
  props: {
    // 组件标题
    title: {
      type: String,
      default: ''
    },
    // 搜索内容返回数据
    searchData: Array,
    //　title组
    titleGroup: {
      type: Object,
      default: function _default() {
        return {
          searchTitle: '组织用户',
          treeTitle: '组织分组'
        };
      }
    },
    // 显示树搜索内容title
    showSearchTitle: {
      type: Boolean,
      default: false
    },
    // 显示树的标题
    showTreeTitle: {
      type: Boolean,
      default: false
    },
    // 搜索输入的内容，双向绑定
    searchContent: {
      type: String,
      default: ''
    },
    // 空状态文本
    treeEmptyText: {
      type: String,
      default: '暂无数据'
    },
    showEmpty: {
      type: Boolean,
      default: false
    },
    // 选中元素，包含异步没拿到的。
    checkedList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    // 是否树下面相同节点元素
    deleteSameSelectedKeysNode: {
      type: Boolean,
      default: false
    },
    nodeTools: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    searchNodeTools: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    showCheckbox: {
      type: Boolean,
      default: true
    },
    nodeKey: {
      type: String,
      default: 'id'
    }
  },
  data: function data() {
    return {
      searchValue: '',
      searchList: [],
      isLoadTree: true,
      isSearching: false,
      containerWidth: '',
      containerHeight: ''
    };
  },
  provide: function provide() {
    return {
      containerWidth: this.containerWidth,
      containerHeight: this.containerHeight
    };
  },
  computed: {
    dataKey: function dataKey() {
      return this.nodeKey || 'id';
    },
    leafImage: function leafImage() {
      var defaultKey = 'image';

      if (this.props) {
        return this.props.leafImage || defaultKey;
      }

      return defaultKey;
    },
    label: function label() {
      var defaultKey = 'name';

      if (this.props) {
        return this.props.label || defaultKey;
      }

      return defaultKey;
    }
  },
  watch: {
    searchValue: function searchValue(newVal) {
      this.$emit('update:searchContent', newVal);
    },
    searchData: function searchData(newVal) {
      var _this = this;

      this.searchList = newVal;

      if (newVal.length && this.checkedList.length) {
        this.searchList = this.searchList.reduce(function (acc, curr) {
          var isIncludeId = _this.checkedList.some(function (item) {
            return curr[_this.dataKey] === item[_this.dataKey];
          });

          return acc.concat(Object.assign(curr, {
            isChecked: isIncludeId
          }));
        }, []);
      } else {
        this.searchList = this.searchList.map(function (item) {
          return Object.assign(item, {
            isChecked: false
          });
        });
      }
    }
  },
  mounted: function mounted() {
    this.containerWidth = this.$refs.ssTree.offsetWidth;
    this.containerHeight = this.$refs.ssTree.offsetHeight;
  },
  methods: {
    optionClick: function optionClick(hoverOption, operationItem) {
      this.$emit('optionClick', hoverOption, operationItem);
    },
    operationClick: function operationClick(operationItem) {
      this.$emit('operationClick', operationItem);
    },
    nodeClick: function nodeClick(data) {
      this.$emit('nodeClick', data);
    },
    enterHit: function enterHit(e) {
      this.$emit('searchEnterHit', e);
    },
    nodeCheckedChange: function nodeCheckedChange(nodeData, node) {
      this.$emit('nodeCheckedChange', nodeData, node);
    },
    getTreeInstance: function getTreeInstance() {
      return {
        treeMain: this.$refs.treeMain && this.$refs.treeMain.getTreeVm()
      };
    },

    /**
     * 暴露给外部调用，在异步加载子节点的时候有用，比如搜索之后需要重新去触发tree里面的load
     */
    refreshTree: function refreshTree() {
      var _this2 = this;

      this.isLoadTree = false;
      this.$nextTick().then(function () {
        _this2.isLoadTree = true;
      });
    },
    handleCheckBox: function handleCheckBox(isChecked, event, item) {
      var _this$getTreeInstance = this.getTreeInstance(),
          treeMain = _this$getTreeInstance.treeMain;

      this.$emit('changeSearchCheckbox', item, isChecked);
      treeMain.setChecked(item[this.dataKey], isChecked);
      this.updateSelected(isChecked, item);
    },
    updateSelected: function updateSelected(isChecked, item) {
      var _this3 = this;

      var _this$getTreeInstance2 = this.getTreeInstance(),
          treeMain = _this$getTreeInstance2.treeMain;

      if (isChecked) {
        var isSame = this.checkedList.some(function (node) {
          return node[_this3.dataKey] === item[_this3.dataKey];
        }); // 存在重复的id不往里添加

        if (isSame) {
          return;
        }

        this.$emit('update:checkedList', this.checkedList.concat(item));
      } else {
        var checkedList = this.checkedList.reduce(function (acc, curr) {
          if (curr[_this3.dataKey] !== item[_this3.dataKey]) {
            return acc.concat(curr);
          }

          return acc;
        }, []);
        this.$emit('update:checkedList', checkedList); // 如果需要删除所有节点跟这个相同id的节点，做个递归删除

        if (this.deleteSameSelectedKeysNode && !removeSameItemProcess) {
          removeSameItemProcess = true;
          this.updateSearchList(item, false);
          treeMain.$children.forEach(function (component) {
            _this3.removeSelectedSameKey(component.node, item);
          });
        }
      }
    },

    /**
     * 移除相同node-key选中的节点
     */
    removeSelectedSameKey: function removeSelectedSameKey(nodeInstance, params) {
      var _this4 = this;

      var _this$getTreeInstance3 = this.getTreeInstance(),
          treeMain = _this$getTreeInstance3.treeMain;

      nodeInstance.childNodes.forEach(function (item) {
        if (item.childNodes.length) {
          _this4.removeSelectedSameKey(item, params);
        }

        if (item.key === params[_this4.dataKey] && item.checked === true) {
          item.checked = false;
        }
      });
      removeSameItemProcess = false;
    },

    /**
     * 删除一项元素
     */
    removeCheckedItem: function removeCheckedItem(item) {
      var _this5 = this;

      var checkedList = this.checkedList.reduce(function (acc, curr) {
        if (curr[_this5.dataKey] !== item[_this5.dataKey]) {
          return acc.concat(curr);
        }

        return acc;
      }, []);
      this.$emit('update:checkedList', checkedList);
    },
    search: function search() {
      this.isSearching = !!this.searchValue;

      if (!this.searchValue) {
        this.searchList = [];
      }

      this.$emit('search');
    },
    handleCheckChange: function handleCheckChange(node, isChecked, childrenIsChecked) {
      this.$emit('check-change', node, isChecked, childrenIsChecked);
      this.updateSelected(isChecked, node);

      if (this.searchList) {
        this.updateSearchList(node, isChecked);
      }
    },
    updateSearchList: function updateSearchList(node, isChecked) {
      var _this6 = this;

      this.searchList.map(function (item) {
        if (node[_this6.dataKey] === item[_this6.dataKey]) {
          item.isChecked = isChecked;
        }
      });
    },
    searchNodeClick: function searchNodeClick(data) {
      this.$emit('search-node-click', data);
    },
    searchClear: function searchClear() {
      var _this7 = this;

      this.searchValue = '';
      this.$nextTick().then(function () {
        _this7.$emit('clear-search-content');
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/tree/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_components_treevue_type_script_lang_js_ = (lib_vue_loader_options_src_components_treevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/tree/index.vue?vue&type=style&index=0&id=46df7818&lang=scss&scoped=true&
<<<<<<< HEAD
var treevue_type_style_index_0_id_46df7818_lang_scss_scoped_true_ = __webpack_require__(106);
=======
var treevue_type_style_index_0_id_46df7818_lang_scss_scoped_true_ = __webpack_require__(104);
>>>>>>> origin/master

// CONCATENATED MODULE: ./src/components/tree/index.vue






/* normalize component */

var components_tree_component = normalizeComponent(
  src_components_treevue_type_script_lang_js_,
  treevue_type_template_id_46df7818_scoped_true_render,
  treevue_type_template_id_46df7818_scoped_true_staticRenderFns,
  false,
  null,
  "46df7818",
  null
  
)

/* harmony default export */ var components_tree = (components_tree_component.exports);
// CONCATENATED MODULE: ./libEntry/install/tree/index.js
/*
 * @Author: your name
 * @Date: 2020-09-11 11:07:59
 * @LastEditTime: 2020-09-16 10:49:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /sense/lib/install/tree/index.js
 */


components_tree.install = function (Vue) {
  Vue.component(components_tree.name, components_tree);
};

/* harmony default export */ var install_tree = (components_tree);
// CONCATENATED MODULE: ./libEntry/install/tree-lite/index.js
/*
 * @Author: your name
 * @Date: 2020-09-16 10:48:17
 * @LastEditTime: 2020-09-16 11:10:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /sense/lib/install/treeLite/index.js
 */


tree_lite.install = function (Vue) {
  Vue.component(tree_lite.name, tree_lite);
};

/* harmony default export */ var install_tree_lite = (tree_lite);
// CONCATENATED MODULE: ./src/components/intro/core/overlay.js
function overlay_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function overlay_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function overlay_createClass(Constructor, protoProps, staticProps) { if (protoProps) overlay_defineProperties(Constructor.prototype, protoProps); if (staticProps) overlay_defineProperties(Constructor, staticProps); return Constructor; }

var Overlay = /*#__PURE__*/function () {
  function Overlay(config) {
    overlay_classCallCheck(this, Overlay);

    this.config = config;
  }

  overlay_createClass(Overlay, [{
    key: "attachNode",
    value: function attachNode() {
      if (!this.node) {
        var overlay = document.createElement('div');
        overlay.setAttribute('id', 'SsIntroOverlay');
        document.body.appendChild(overlay);
        this.node = overlay;
      }
    }
  }, {
    key: "highlight",
    value: function highlight(element) {
      this.show();
      this.highlightElment = element;
      this.highlightElment.onHighlighted();
    }
  }, {
    key: "show",
    value: function show() {
      var _this = this;

      this.attachNode();

      if (this.node && this.node.style.opacity == 0.8) {
        return;
      }

      window.setTimeout(function () {
        _this.node.style.position = 'fixed';
        _this.node.style.top = '0';
        _this.node.style.right = '0';
        _this.node.style.bottom = '0';
        _this.node.style.left = '0';
        _this.node.style.background = '#000';
        _this.node.style.opacity = '0.8';
      });
    }
  }, {
    key: "clear",
    value: function clear() {
      this.highlightElment && this.highlightElment.onDeselected();
      this.highlightElment = null;

      if (!this.node) {
        return;
      }

      this.removeNode();
    }
  }, {
    key: "removeNode",
    value: function removeNode() {
      if (this.node && this.node.parentElement) {
        this.node.parentElement.removeChild(this.node);
      }
    }
  }]);

  return Overlay;
}();

/* harmony default export */ var overlay = (Overlay);
// CONCATENATED MODULE: ./src/components/newPopover/src/directive.js
var getReference = function getReference(el, binding, vnode) {
  var _ref = binding.expression ? binding.value : binding.arg;

  var popper = vnode.context.$refs[_ref];

  if (popper) {
    if (Array.isArray(popper)) {
      popper[0].$refs.reference = el;
    } else {
      popper.$refs.reference = el;
    }
  }
};

/* harmony default export */ var directive = ({
  bind: function bind(el, binding, vnode) {
    getReference(el, binding, vnode);
  },
  inserted: function inserted(el, binding, vnode) {
    getReference(el, binding, vnode);
  }
});
// CONCATENATED MODULE: ./src/components/newPopover/index.js
/*
 * @Author: your name
 * @Date: 2020-10-07 15:15:53
 * @LastEditTime: 2020-10-07 15:37:22
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /sense/src/components/newPopover/index.js
 */



external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.directive('popover', directive);
/* istanbul ignore next */

src_main.install = function (Vue) {
  Vue.directive('popover', directive);
  Vue.component(src_main.name, src_main);
};

src_main.directive = directive;
/* harmony default export */ var newPopover = (src_main);
// CONCATENATED MODULE: ./src/components/intro/core/popover.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || popover_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function popover_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { popover_typeof = function _typeof(obj) { return typeof obj; }; } else { popover_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return popover_typeof(obj); }

function popover_toConsumableArray(arr) { return popover_arrayWithoutHoles(arr) || popover_iterableToArray(arr) || popover_unsupportedIterableToArray(arr) || popover_nonIterableSpread(); }

function popover_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function popover_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return popover_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return popover_arrayLikeToArray(o, minLen); }

function popover_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function popover_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return popover_arrayLikeToArray(arr); }

function popover_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function popover_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function popover_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function popover_createClass(Constructor, protoProps, staticProps) { if (protoProps) popover_defineProperties(Constructor.prototype, protoProps); if (staticProps) popover_defineProperties(Constructor, staticProps); return Constructor; }



external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.use(newPopover);

var popover_Popover = /*#__PURE__*/function () {
  function Popover(_ref) {
    var options = _ref.options,
        node = _ref.node,
        buttons = _ref.buttons;

    popover_classCallCheck(this, Popover);

    this.ElementPopover = external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_default.a.extend(newPopover);
    this.popoverOptions = options;
    this.popoverDom = null;
    this.node = node;
    this.buttons = buttons;
  }

  popover_createClass(Popover, [{
    key: "show",
    value: function show() {
      var component = new this.ElementPopover({
        propsData: _objectSpread(_objectSpread({}, this.popoverOptions), {}, {
          trigger: 'manual',
          value: true
        })
      });
      component.$refs['reference'] = this.node;
      component.reference = this.node;
      component.$mount();
      this.popoverDom = component.$el;
      document.body.appendChild(this.popoverDom);
      this.prepareShowFromElement();
    }
  }, {
    key: "hide",
    value: function hide() {
      if (this.popoverDom) {
        document.body.removeChild(this.popoverDom);
        this.popoverDom = null;
      }
    }
  }, {
    key: "prepareShowFromElement",
    value: function prepareShowFromElement() {
      var buttonGroup = this.getButtonsDom();
      var _this$popoverOptions = this.popoverOptions,
          _this$popoverOptions$ = _this$popoverOptions.placement,
          placement = _this$popoverOptions$ === void 0 ? 'bottom' : _this$popoverOptions$,
          className = _this$popoverOptions.className,
          style = _this$popoverOptions.style;
      var popoverMainDom = this.popoverDom.firstChild;
      this.popoverDom.classList.add('ss-intro-popover__container', placement);
      popoverMainDom.appendChild(buttonGroup);

      if (className) {
        var _popoverMainDom$class;

        if (typeof className === 'string') {
          className = className.split(' ');
        }

        (_popoverMainDom$class = popoverMainDom.classList).add.apply(_popoverMainDom$class, popover_toConsumableArray(className));
      }

      if (style) {
        if (popover_typeof(style) === 'object') {
          var cssText = '';
          Object.entries(style).forEach(function (_ref2) {
            var _ref3 = _slicedToArray(_ref2, 2),
                key = _ref3[0],
                val = _ref3[1];

            cssText += "".concat(key, ": ").concat(val, ";");
          });
          popoverMainDom.style.cssText = cssText;
        } else if (typeof style === 'string') {
          popoverMainDom.style.cssText = style;
        } else {
          throw new Error('style is not object or string!');
        }
      }

      this.setPopoverOffset(placement);
    }
  }, {
    key: "getButtonsDom",
    value: function getButtonsDom() {
      var div = document.createElement('div');
      var buttons = this.buttons;
      div.classList.add('ss-intro-flex', 'ss-intro-flex--end');
      div.style.marginTop = '10px';

      var _loop = function _loop(i) {
        var buttonOpt = buttons[i];
        var button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.classList.add('ss-intro-btn', buttonOpt.className);
        button.innerText = buttonOpt.text;

        button.onclick = function (event) {
          event.stopPropagation();
          event.preventDefault();
          buttonOpt.handle(event);
        };

        div.appendChild(button);
      };

      for (var i = 0; i < buttons.length; i++) {
        _loop(i);
      }

      return div;
    }
  }, {
    key: "setPopoverOffset",
    value: function setPopoverOffset(placement) {
      var popoverContainer = this.popoverDom[this.popoverDom.firstChild ? 'firstChild' : 'firstElementChild'];

      var _placement$split = placement.split('-'),
          _placement$split2 = _slicedToArray(_placement$split, 2),
          direction = _placement$split2[0],
          horizontal = _placement$split2[1];

      var baseMargin = 20;

      var _this$node$getBoundin = this.node.getBoundingClientRect(),
          x = _this$node$getBoundin.x,
          y = _this$node$getBoundin.y,
          width = _this$node$getBoundin.width,
          height = _this$node$getBoundin.height;

      if (direction === 'bottom') {
        if (!horizontal || horizontal === 'start') {
          this.popoverDom.style.left = "".concat(x, "px");
        }

        if (horizontal === 'end') {
          this.popoverDom.style.left = "".concat(Math.floor(x + width), "px");
        }

        this.popoverDom.style.top = "".concat(Math.floor(y + height), "px");
        popoverContainer.style.transform = "translateY(".concat(baseMargin, "px)");
      }

      if (direction === 'right') {
        var left = Math.floor(x + width);
        var transform = "translateX(calc(100% + ".concat(baseMargin, "px))");

        if (!horizontal || horizontal === 'start') {
          this.popoverDom.style.top = "".concat(y, "px");
        }

        if (horizontal === 'end') {
          var top = Math.floor(y);
          this.popoverDom.style.top = "".concat(top, "px");
          transform += " translateY(".concat(height, "px)");
        }

        this.popoverDom.style.left = "".concat(left, "px");
        popoverContainer.style.transform = transform;
      }

      if (direction === 'left') {
        if (!horizontal || horizontal === 'start') {
          this.popoverDom.style.top = "".concat(y, "px");
        }

        if (horizontal === 'end') {}

        this.popoverDom.style.left = "".concat(x, "px");
        popoverContainer.style.transform = "translateX(calc(-100% - ".concat(baseMargin, "px))");
      }
    }
  }]);

  return Popover;
}();

/* harmony default export */ var core_popover = (popover_Popover);
// CONCATENATED MODULE: ./src/components/intro/core/element.js
function element_toConsumableArray(arr) { return element_arrayWithoutHoles(arr) || element_iterableToArray(arr) || element_unsupportedIterableToArray(arr) || element_nonIterableSpread(); }

function element_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function element_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return element_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return element_arrayLikeToArray(o, minLen); }

function element_iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function element_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return element_arrayLikeToArray(arr); }

function element_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function element_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function element_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function element_createClass(Constructor, protoProps, staticProps) { if (protoProps) element_defineProperties(Constructor.prototype, protoProps); if (staticProps) element_defineProperties(Constructor, staticProps); return Constructor; }



var element_Element = /*#__PURE__*/function () {
  function Element(options) {
    element_classCallCheck(this, Element);

    this.node = options.node;
    this.overlay = options.overlay;
    this.stepIndex = options.stepIndex;
    this.popover = new core_popover({
      options: options.popover,
      buttons: options.buttons,
      node: this.node
    });
    this.options = {
      onHighlighted: options.onHighlighted,
      onDeselected: options.onDeselected,
      customClass: options.customClass,
      useClone: options.useClone
    };
  }

  element_createClass(Element, [{
    key: "scrollManually",
    value: function scrollManually() {
      var elementRect = this.node.getBoundingClientRect();
      var absoluteElementTop = elementRect.top + window.pageYOffset;
      var middle = absoluteElementTop - window.innerHeight / 2;
      window.scrollTo(0, middle);
    }
  }, {
    key: "bringInView",
    value: function bringInView() {
      if (!this.node.scrollIntoView) {
        this.scrollManually();
        return;
      }

      try {
        this.node.scrollIntoView({
          behavior: 'instant',
          block: 'center'
        });
      } catch (error) {
        this.scrollManually();
      }
    }
  }, {
    key: "addCloneNodeStyle",
    value: function addCloneNodeStyle() {
      var getNodeStyles = function getNodeStyles(node) {
        var computedStyle = window.getComputedStyle(node, null);
        var styles = computedStyle.cssText;

        if (!styles) {
          for (var key in computedStyle) {
            if (!isNaN(+key)) {
              continue;
            }

            var value = computedStyle.getPropertyValue(key);

            if (value) {
              styles += "".concat(key, ": ").concat(value, ";");
            }
          }
        }

        return styles;
      };

      var _this$node$getBoundin = this.node.getBoundingClientRect(),
          x = _this$node$getBoundin.x,
          y = _this$node$getBoundin.y,
          width = _this$node$getBoundin.width,
          height = _this$node$getBoundin.height;

      var originStyle = getNodeStyles(this.node);
      var styleDom = document.createElement('style');
      var seed = 0;
      var styleInnerText = ".ss-clone-temp-css {".concat(originStyle, "}");
      var documentHead = document.head;

      var setCloneChildNodeStyle = function setCloneChildNodeStyle(nodes) {
        nodes = element_toConsumableArray(nodes);

        for (var i = 0; i < nodes.length; i++) {
          var node = nodes[i];

          if (node.nodeType != 1 && node.nodeType != 9) {
            continue;
          }

          if (node.hasChildNodes()) {
            setCloneChildNodeStyle(node.childNodes);
            continue;
          }

          var styles = getNodeStyles(node);
          styleInnerText += "".concat(styleInnerText, " .ss-clone-child-temp-").concat(seed, "{").concat(styles, "}");
          node.classList.add("ss-clone-child-temp-".concat(seed));
          seed++;
        }
      };

      if (originStyle && originStyle[originStyle.length - 1] !== ';') {
        originStyle += ';';
      }

      if (this.cloneNode.hasChildNodes()) {
        setCloneChildNodeStyle(this.cloneNode.childNodes);
      }

      console.log(styleInnerText);
      styleDom.innerText = styleInnerText;
      this.cloneUseStyleNode = styleDom;
      documentHead.insertBefore(this.cloneUseStyleNode, documentHead.querySelector('style'));
      this.cloneNode.classList.add('ss-clone-temp-css');
      this.cloneNode.style.cssText = "\n            position: fixed;\n            width: ".concat(width, "px;\n            height: ").concat(height, "px;\n            left: ").concat(x, "px;\n            top: ").concat(y, "px;\n        ");
    }
  }, {
    key: "onHighlighted",
    value: function onHighlighted() {
      this.bringInView();
      this.addHighlightClasses();

      if (this.options.useClone) {
        this.cloneNode = this.node.cloneNode(true);
        document.body.appendChild(this.cloneNode);
        this.addCloneNodeStyle();
      } else {
        this.fixStackingContext(this.node);
      }

      this.popover.show();

      if (typeof this.options.onHighlighted === 'function') {
        this.options.onHighlighted();
      }
    }
  }, {
    key: "addHighlightClasses",
    value: function addHighlightClasses() {
      var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.node;
      node.classList.add('ss-intro-highlight__element');

      if (this.options.customClass) {
        node.classList.add(this.options.customClass);
      }

      if (this.canSetPosition(node)) {
        node.classList.add('ss-relative');
      }
    }
  }, {
    key: "removeHighlightClasses",
    value: function removeHighlightClasses() {
      this.node.classList.remove('ss-intro-highlight__element');

      if (this.options.customClass) {
        this.node.classList.remove(this.options.customClass);
      }

      if (this.node.classList.contains('ss-relative')) {
        this.node.classList.remove('ss-relative');
      }

      var stackingDom = document.querySelectorAll('.ss-fix-stacking-context');

      for (var i = 0; i < stackingDom.length; i++) {
        stackingDom[i].classList.remove('ss-fix-stacking-context');
      }
    }
  }, {
    key: "fixStackingContext",
    value: function fixStackingContext(node) {
      var parent = node.parentNode;

      while (parent) {
        if (!parent.tagName || parent.tagName.toLowerCase() === 'body') {
          break;
        }

        var _getComputedStyle = getComputedStyle(node),
            zIndex = _getComputedStyle.zIndex,
            transform = _getComputedStyle.transform,
            perspective = _getComputedStyle.perspective,
            transformStyle = _getComputedStyle.transformStyle,
            transformBox = _getComputedStyle.transformBox,
            filter = _getComputedStyle.filter,
            opacity = _getComputedStyle.opacity;

        if (/\[0-9]+/.test(zIndex) || opacity < 1 || transform !== 'none' || transformBox !== 'border-box' || transformStyle !== 'flat' || perspective !== 'none' || filter !== 'none') {
          parent.classList.add('ss-fix-stacking-context');
        }

        parent = parent.parentNode;
      }
    }
  }, {
    key: "canSetPosition",
    value: function canSetPosition(node) {
      if (this.options.useClone) {
        return false;
      }

      var position = node.style.position;
      return ['relative', 'absolute', 'fixed'].indexOf(position) === -1;
    }
  }, {
    key: "onDeselected",
    value: function onDeselected() {
      this.popover.hide();
      this.removeHighlightClasses();

      if (this.options.useClone) {
        document.body.removeChild(this.cloneNode);
        document.head.removeChild(this.cloneUseStyleNode);
      }

      if (typeof this.options.onDeselected === 'function') {
        this.options.onDeselected();
      }
    }
  }]);

  return Element;
}();

/* harmony default export */ var core_element = (element_Element);
// CONCATENATED MODULE: ./src/components/intro/tools/index.js
function tools_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { tools_typeof = function _typeof(obj) { return typeof obj; }; } else { tools_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return tools_typeof(obj); }

var isDomElement = function isDomElement(obj) {
  return tools_typeof(obj) === 'object' && obj instanceof HTMLElement;
};
var createDomFromString = function createDomFromString(str) {
  var div = document.createElement('div');
  div.innerHTML = str;
  return div.firstChild;
};
// EXTERNAL MODULE: ./src/components/intro/style/_index.scss
var _index = __webpack_require__(107);

// CONCATENATED MODULE: ./src/components/intro/index.js
function intro_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function intro_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function intro_createClass(Constructor, protoProps, staticProps) { if (protoProps) intro_defineProperties(Constructor.prototype, protoProps); if (staticProps) intro_defineProperties(Constructor, staticProps); return Constructor; }






var intro_Intro = /*#__PURE__*/function () {
  function Intro() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    intro_classCallCheck(this, Intro);

    this.steps = [];
    this.currentStepIndex = 0;
    this.overlay = new overlay(config);
    this.onStart = config.onStart;
    this.onEnd = config.onEnd;
  }

  intro_createClass(Intro, [{
    key: "defineSteps",
    value: function defineSteps(steps) {
      this.steps = [];

      for (var i = 0; i < steps.length; i++) {
        var element = this.prepareElementFromStep(steps[i], steps, i);

        if (!element) {
          continue;
        }

        this.steps.push(element);
      }
    }
  }, {
    key: "start",
    value: function start() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.currentStepIndex = index;
      this.overlay.highlight(this.steps[index]);

      if (typeof this.onStart === 'function') {
        this.onStart();
      }
    }
  }, {
    key: "prepareElementFromStep",
    value: function prepareElementFromStep(step, steps, index) {
      if (!step.element) {
        throw new Error("element is required in step ".concat(index, " !"));
      }

      var querySelector = null;

      if (isDomElement(step.element)) {
        querySelector = step.element;
      } else {
        querySelector = document.querySelector(step.element);
      }

      if (!querySelector) {
        throw new Error('element is not found !');
      }

      var elementOptions = {
        node: querySelector,
        overlay: this.overlay,
        popover: step.popover,
        stepIndex: index,
        onHighlighted: step.onHighlighted,
        onDeselected: step.onDeselected,
        customClass: step.customClass || '',
        useClone: step.useClone || false
      };
      var stepLen = steps.length;
      var buttons = [];

      if (index === 0 && stepLen === 1 || index + 1 === stepLen) {
        buttons.push({
          text: '知道了',
          className: 'ss-intro-btn--primary',
          handle: this.handleSkip.bind(this)
        });
      } else if (index === 0 && stepLen > 1 || index > 0 && index !== stepLen) {
        var arr = [{
          text: '跳过',
          className: 'ss-intro-btn--plain',
          handle: this.handleSkip.bind(this)
        }, {
          text: '下一步',
          className: 'ss-intro-btn--primary',
          handle: this.handleNext.bind(this)
        }];
        buttons = buttons.concat(arr);
      }

      elementOptions.buttons = buttons;
      return new core_element(elementOptions);
    }
  }, {
    key: "handleNext",
    value: function handleNext() {
      // 隐藏当前显示的popover
      this.steps[this.currentStepIndex].onDeselected();
      this.currentStepIndex++;
      var step = this.steps[this.currentStepIndex];

      if (!step) {
        this.overlay.clear();
        this.currentStepIndex = 0;
        return;
      }

      this.overlay.highlight(step);
    }
  }, {
    key: "handlePrev",
    value: function handlePrev() {
      // 隐藏当前显示的popover
      this.steps[this.currentStepIndex].onDeselected();
      this.currentStepIndex--;
      var step = this.steps[this.currentStepIndex];

      if (!step) {
        this.overlay.clear();
        this.currentStepIndex = 0;
        return;
      }

      this.overlay.highlight(step);
    }
  }, {
    key: "handleSkip",
    value: function handleSkip() {
      this.overlay.clear();

      if (typeof this.onEnd === 'function') {
        this.onEnd();
      }
    }
  }]);

  return Intro;
}();

/* harmony default export */ var intro = (intro_Intro);
// CONCATENATED MODULE: ./libEntry/install/intro/index.js


intro.install = function (Vue) {
  Vue.prototype.$Intro = intro;
};

/* harmony default export */ var install_intro = (intro);
<<<<<<< HEAD
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/baseLayout/index.vue?vue&type=template&id=4e7fa376&scoped=true&
var baseLayoutvue_type_template_id_4e7fa376_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"baseLayoutWrap"},[(_vm.showDialog)?_c('dialog-box',{attrs:{"popInfo":_vm.popInfo},on:{"closePop":_vm.closePop,"confirmPop":_vm.confirmPop}}):_vm._e(),(_vm.showEditModal)?_c('hint-model',{on:{"editLeave":_vm.editLeave,"cancelLeave":_vm.cancelLeave}}):_vm._e(),_vm._m(0)],1)}
var baseLayoutvue_type_template_id_4e7fa376_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"topPrompt",staticStyle:{"opacity":"0","height":"0"},attrs:{"id":"TopPrompt"}},[_c('div',{staticClass:"topPromptContent"})])}]


// CONCATENATED MODULE: ./src/components/baseLayout/index.vue?vue&type=template&id=4e7fa376&scoped=true&
=======
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/baseLayout/index.vue?vue&type=template&id=43993a26&scoped=true&
var baseLayoutvue_type_template_id_43993a26_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"baseLayoutWrap"},[(_vm.showDialog)?_c('dialog-box',{attrs:{"popInfo":_vm.popInfo},on:{"closePop":_vm.closePop,"confirmPop":_vm.confirmPop}}):_vm._e(),(_vm.showEditModal)?_c('hint-model',{on:{"editLeave":_vm.editLeave,"cancelLeave":_vm.cancelLeave}}):_vm._e(),_vm._m(0)],1)}
var baseLayoutvue_type_template_id_43993a26_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"topPrompt",staticStyle:{"opacity":"0","height":"0"},attrs:{"id":"TopPrompt"}},[_c('div',{staticClass:"topPromptContent"})])}]


// CONCATENATED MODULE: ./src/components/baseLayout/index.vue?vue&type=template&id=43993a26&scoped=true&
>>>>>>> origin/master

// EXTERNAL MODULE: ./src/components/baseLayout/utils/animation.css
var animation = __webpack_require__(108);

// CONCATENATED MODULE: ./src/components/baseLayout/utils/findDom.js
function findDom_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function findDom_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function findDom_createClass(Constructor, protoProps, staticProps) { if (protoProps) findDom_defineProperties(Constructor.prototype, protoProps); if (staticProps) findDom_defineProperties(Constructor, staticProps); return Constructor; }



var $JQuery = /*#__PURE__*/function () {
  function $JQuery(selector) {
    findDom_classCallCheck(this, $JQuery);

    var domList = document.querySelectorAll(selector);

    for (var i = 0; i < domList.length; i++) {
      this[i] = domList[i];
    }

    this.length = domList.length;
    this.selector = selector;
  }

  findDom_createClass($JQuery, [{
    key: "get",
    value: function get(index) {
      return this[index];
    }
  }, {
    key: "each",
    value: function each(fn) {
      for (var i = 0; i < this.length; i++) {
        var elm = this[i];
        fn(elm);
      }
    }
  }, {
    key: "on",
    value: function on(type, selector, fn) {
      if (fn == null) {
        fn = selector;
        selector = null;
      }

      return this.each(function (elm) {
        elm.addEventListener(type, function (event) {
          event = event || window.event;
          var target = event.target;

          if (selector) {
            if (target.matches(selector)) {
              fn.call(target, event);
            }
          } else {
            fn.call(target, event);
          }
        });
      });
    }
  }, {
    key: "hasClass",
    value: function hasClass(className) {
      return this.length === 1 ? this['0'].className ? this['0'].className.indexOf(className) > 0 : false : false;
    }
  }, {
    key: "val",
    value: function val(value) {
      if (value == undefined) {
        return this.length === 1 ? this['0'].value ? this['0'].value : null : null;
      } else {
        if (this.length === 1) {
          this['0'].value = value;
        }
      }
    }
  }, {
    key: "addClass",
    value: function addClass(className) {
      this.each(function (elm) {
        elm.classList.add(className);
      });
      return this;
    }
  }, {
    key: "removeClass",
    value: function removeClass(className) {
      this.each(function (elm) {
        elm.classList.remove(className);
      });
    }
  }, {
    key: "show",
    value: function show() {
      this.each(function (elm) {
        elm.style.display = 'block';
        elm.style.opacity = '1';
        elm.style.height = 'auto';
      });
      return this;
    }
  }, {
    key: "hide",
    value: function hide() {
      this.each(function (elm) {
        elm.style.display = 'none';
      });
      return this;
    }
  }, {
    key: "css",
    value: function css(className, val) {
      var _this = this;

      if (val == null && className instanceof Object && className.constructor === Object) {
        var _loop = function _loop(key) {
          _this.each(function (elm) {
            elm.style[key] = className[key];
          });
        };

        for (var key in className) {
          _loop(key);
        }
      } else {
        this.each(function (elm) {
          elm.style[className] = val;
        });
      }

      return this;
    }
  }, {
    key: "fadeIn",
    value: function fadeIn() {
      this.each(function (elm) {
        elm.classList.add("fade");
        setTimeout(function () {
          elm.classList.add("fadein");
        }, 100);
      });
      return this;
    }
  }, {
    key: "fadeOut",
    value: function fadeOut() {
      this.each(function (elm) {
        elm.classList.add("fade");
      });
      return this;
    }
  }, {
    key: "html",
    value: function html(dom) {
      this.each(function (elm) {
        elm.innerHTML = dom;
      });
      return this;
    }
  }, {
    key: "append",
    value: function append(htmlStr) {
      this.each(function (elm) {
        elm.appendChild(htmlStr);
      });
      return this;
    }
  }, {
    key: "prepend",
    value: function prepend(htmlStr) {
      this.each(function (elm) {
        elm.insertBefore(htmlStr);
      });
      return this;
    }
  }, {
    key: "data",
    value: function data(attr) {
      return this.each(function (elm) {
        elm.getAttribute(attr.split('data-')[1]);
      });
    }
  }, {
    key: "parents",
    value: function parents() {
      return this.each(function (elm) {
        return elm.offsetParent;
      });
    }
  }, {
    key: "attr",
    value: function attr(_attr, value) {
      if (value) {
        return this.each(function (elm) {
          return elm.setAttribute(_attr, value);
        });
      } else {
        return this.each(function (elm) {
          return elm.getAttribute(_attr);
        });
      }
    }
  }]);

  return $JQuery;
}();

function $JQ(selector) {
  return new $JQuery(selector);
}
/* harmony default export */ var findDom = ($JQ);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/baseLayout/components/dialog.vue?vue&type=template&id=92886fba&scoped=true&
var dialogvue_type_template_id_92886fba_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.showPop)?_c('div',{staticClass:"jqDailogWrap"},[_c('div',{staticClass:"jqDailog"},[_c('div',{staticClass:"popBox"},[_c('a',{staticClass:"clsBtn",on:{"click":_vm.closePop}}),_c('div',{staticClass:"iconContent"},[(_vm.iconUrl)?_c('img',{attrs:{"src":_vm.iconUrl}}):_vm._e(),_c('p',{staticClass:"title"},[_vm._v(_vm._s(_vm.popData.title))])]),_c('div',{staticClass:"txtBox"},[_c('p',{domProps:{"innerHTML":_vm._s(_vm.popData.text)}})]),_c('div',{staticClass:"btn-area"},[_c('div',{staticClass:"btnGroup"},[(_vm.popData.isShowCancelBtn)?_c('a',{staticClass:"sgBtn _cancel",on:{"click":_vm.closePop}},[_vm._v(_vm._s(_vm.popData.canceltext))]):_vm._e(),_c('a',{staticClass:"sgBtn _ok",on:{"click":_vm.confirmPop}},[_vm._v(_vm._s(_vm.popData.oktext))])])])])])]):_vm._e()}
var dialogvue_type_template_id_92886fba_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/baseLayout/components/dialog.vue?vue&type=template&id=92886fba&scoped=true&

// CONCATENATED MODULE: ./src/components/baseLayout/utils/mapTool.js
var popIcon = {
  'info': '../images/alert/blue_info_prompt.svg',
  'success': '../images/alert/green_info_prompt.svg',
  'error': '../images/alert/red_info_prompt.svg'
};
/* harmony default export */ var mapTool = ({
  popIcon: popIcon
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/baseLayout/components/dialog.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var dialogvue_type_script_lang_js_ = ({
  props: {
    popInfo: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      showPop: true,
      popDefault: {
        type: 'info',
        text: '提示',
        title: '提示',
        btn: 2,
        canClose: true,
        oktext: '确定',
        canceltext: '取消',
        isShowCancelBtn: true
      }
    };
  },
  created: function created() {},
  mounted: function mounted() {},
  computed: {
    //弹框图标
    iconUrl: function iconUrl() {
      return popIcon[this.popInfo.type] || null;
    },
    popData: function popData() {
      console.log('popData', this.popInfo, Object.prototype.toString.call(this.popInfo));

      if (this.popInfo && Object.prototype.toString.call(this.popInfo) === '[object Object]') {
        return Object.assign(this.popDefault, this.popInfo);
      } else {
        return this.popInfo;
      }
    }
  },
  methods: {
    closePop: function closePop() {
      this.showPop = false;
      this.$emit('closePop');
    },
    confirmPop: function confirmPop() {
      this.showPop = false;
      this.$emit('confirmPop');
    }
  }
});
// CONCATENATED MODULE: ./src/components/baseLayout/components/dialog.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_dialogvue_type_script_lang_js_ = (dialogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/baseLayout/components/dialog.vue?vue&type=style&index=0&id=92886fba&lang=scss&scoped=true&
var dialogvue_type_style_index_0_id_92886fba_lang_scss_scoped_true_ = __webpack_require__(113);

// CONCATENATED MODULE: ./src/components/baseLayout/components/dialog.vue






/* normalize component */

var dialog_component = normalizeComponent(
  components_dialogvue_type_script_lang_js_,
  dialogvue_type_template_id_92886fba_scoped_true_render,
  dialogvue_type_template_id_92886fba_scoped_true_staticRenderFns,
  false,
  null,
  "92886fba",
  null
  
)

/* harmony default export */ var components_dialog = (dialog_component.exports);
// CONCATENATED MODULE: ./src/components/baseLayout/utils/jsTools.js
/**
 * readCookie 读取cookies
 * @param {str} name
 */
function readCookie(name) {
  var arr = null;
  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');

  if (document.cookie && (arr = document.cookie.match(reg))) {
    return unescape(arr[2]);
  } else {
    return null;
  }
}
/* harmony default export */ var jsTools = ({
  readCookie: readCookie
});
// CONCATENATED MODULE: ./src/components/baseLayout/utils/config.js
function config_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var permissionList = config_defineProperty({
  'buy_version': ["coupon", "exercise", "activity", "question_answer", "alive_exported_audio", "alive_share_file", "alive_reward", "member", "index_diy", "index_name_diy", "index_share_diy", "hide_sub_count", "hide_resource_count", "alive_show_man_time", "pay_info_write", "vip_hidden_xiaoe_log", "vip_alive_hidden_xiaoe", "vip_self_domain", "vip_api", "vip_little_program", "vip_app", "vip_shop_make", "vip_service_binding", "share_resource", "punch_card"],
  'version0': ['account_manage', 'activity', 'alive_exported_audio', 'alive_PPT', 'alive_push', 'alive_reward', 'alive_share_file', 'alive_show_man_time', 'alive_video_voice', 'alive_voice', 'attention_public_signal', 'audio', 'banner', 'column', 'comment_manage', 'community', 'coupon', 'data_analysis', 'distribution', 'distribution_poster', 'exercise', 'gift_buy', 'img_text', 'income_manage', 'invite_card', 'invite_code', 'member', 'msg_notice', 'open_record_manage', 'orders_export', 'package_visible', 'page_count', 'PC_support', 'punch_card', 'question_answer', 'resource_category', 'server_msg', 'share_resource', 'short_link', 'student_show', 'system_msg_all', 'system_msg_person', 'user_feedback_show', 'video'],
  'version1': ['account_manage', 'alive_exported_audio', 'alive_reward', 'alive_show_man_time', 'alive_voice', 'attention_public_signal', 'audio', 'banner', 'column', 'comment_manage', 'community', 'coupon', 'data_analysis', 'distribution', 'distribution_poster', 'gift_buy', 'img_text', 'income_manage', 'index_share_diy', 'invite_card', 'invite_code', 'open_record_manage', 'orders_export', 'page_count', 'short_link', 'student_show', 'system_msg_all', 'system_msg_person', 'user_feedback_show', 'video'],
  'version2': ['account_manage', 'activity', 'alive_exported_audio', 'alive_reward', 'alive_show_man_time', 'alive_voice', 'attention_public_signal', 'audio', 'banner', 'column', 'comment_manage', 'community', 'coupon', 'data_analysis', 'distribution', 'distribution_poster', 'gift_buy', 'img_text', 'income_manage', 'index_name_diy', 'index_share_diy', 'invite_card', 'invite_code', 'member', 'msg_notice', 'open_record_manage', 'orders_export', 'page_count', 'question_answer', 'resource_category', 'server_msg', 'short_link', 'student_show', 'system_msg_all', 'system_msg_person', 'user_feedback_show', 'video'],
  'version3': ['account_manage', 'activity', 'alive_exported_audio', 'alive_PPT', 'alive_reward', 'alive_share_file', 'alive_show_man_time', 'alive_video_voice', 'alive_voice', 'attention_public_signal', 'audio', 'banner', 'column', 'comment_manage', 'community', 'coupon', 'data_analysis', 'distribution', 'distribution_poster', 'exercise', 'gift_buy', 'hide_resource_count', 'hide_sub_count', 'img_text', 'income_manage', 'index_diy', 'index_name_diy', 'index_share_diy', 'invite_card', 'invite_code', 'member', 'msg_notice', 'open_record_manage', 'orders_export', 'package_visible', 'page_count', 'pay_info_write', 'question_answer', 'resource_category', 'server_msg', 'share_resource', 'short_link', 'student_show', 'system_msg_all', 'system_msg_person', 'user_feedback_show', 'video', 'vip_little_program'],
  'version4': ['account_manage', 'alive_PPT', 'alive_push', 'alive_share_file', 'alive_video_voice', 'alive_voice', 'attention_public_signal', 'audio', 'banner', 'column', 'comment_manage', 'community', 'data_analysis', 'distribution', 'distribution_poster', 'gift_buy', 'img_text', 'income_manage', 'invite_card', 'invite_code', 'msg_notice', 'open_record_manage', 'orders_export', 'page_count', 'PC_support', 'resource_category', 'server_msg', 'short_link', 'student_show', 'system_msg_all', 'system_msg_person', 'user_feedback_show', 'video'],
  'version5': ['account_manage', 'alive_PPT', 'alive_push', 'alive_share_file', 'alive_video_voice', 'alive_voice', 'attention_public_signal', 'audio', 'banner', 'column', 'comment_manage', 'community', 'data_analysis', 'distribution', 'distribution_poster', 'gift_buy', 'img_text', 'income_manage', 'invite_card', 'invite_code', 'msg_notice', 'open_record_manage', 'orders_export', 'page_count', 'PC_support', 'resource_category', 'server_msg', 'short_link', 'student_show', 'system_msg_all', 'system_msg_person', 'user_feedback_show', 'video']
}, "version5", ['account_manage', 'alive_PPT', 'alive_push', 'alive_share_file', 'alive_video_voice', 'alive_voice', 'attention_public_signal', 'audio', 'banner', 'column', 'comment_manage', 'community', 'data_analysis', 'distribution', 'distribution_poster', 'gift_buy', 'img_text', 'income_manage', 'invite_card', 'invite_code', 'msg_notice', 'open_record_manage', 'orders_export', 'page_count', 'PC_support', 'resource_category', 'server_msg', 'short_link', 'student_show', 'system_msg_all', 'system_msg_person', 'user_feedback_show', 'video']);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/baseLayout/components/hintModel.vue?vue&type=template&id=3d72d658&scoped=true&
var hintModelvue_type_template_id_3d72d658_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editDailogWrap editmodal-open"},[_c('div',{staticClass:"editmodal-backdrop",on:{"click":_vm.cancel}}),_c('div',{staticClass:"editmodal fade in",attrs:{"id":"upload_EditModal"}},[_c('div',{staticClass:"editmodal-dialog"},[_c('div',{staticClass:"editmodal-content",staticStyle:{"padding-left":"10px"}},[_vm._m(0),_c('div',{staticClass:"editmodal-footer"},[_c('button',{staticClass:"btnMid xeBtnDefault",attrs:{"type":"button"},on:{"click":_vm.cancel}},[_vm._v("\r\n                        取消\r\n                    ")]),_c('button',{staticClass:"btnMid btnBlue",staticStyle:{"margin-left":"10px"},attrs:{"id":"leavePage","type":"button"},on:{"click":_vm.handleLeave}},[_vm._v("\r\n                        确定\r\n                    ")])])])])])])}
var hintModelvue_type_template_id_3d72d658_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editmodal-body"},[_c('div',{staticStyle:{"text-align":"center","font-size":"1.4em"}},[_c('p',[_vm._v("此时离开将丢失已编辑的内容，是否离开？")])])])}]


// CONCATENATED MODULE: ./src/components/baseLayout/components/hintModel.vue?vue&type=template&id=3d72d658&scoped=true&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/baseLayout/components/hintModel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var hintModelvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      showModal: false
    };
  },
  computed: {},
  methods: {
    cancel: function cancel() {
      this.$emit('cancelLeave');
    },
    handleLeave: function handleLeave() {
      this.$emit('editLeave');
    }
  }
});
// CONCATENATED MODULE: ./src/components/baseLayout/components/hintModel.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_hintModelvue_type_script_lang_js_ = (hintModelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/baseLayout/components/hintModel.vue?vue&type=style&index=0&id=3d72d658&lang=scss&scoped=true&
var hintModelvue_type_style_index_0_id_3d72d658_lang_scss_scoped_true_ = __webpack_require__(114);

// CONCATENATED MODULE: ./src/components/baseLayout/components/hintModel.vue






/* normalize component */

var hintModel_component = normalizeComponent(
  components_hintModelvue_type_script_lang_js_,
  hintModelvue_type_template_id_3d72d658_scoped_true_render,
  hintModelvue_type_template_id_3d72d658_scoped_true_staticRenderFns,
  false,
  null,
  "3d72d658",
  null
  
)

/* harmony default export */ var hintModel = (hintModel_component.exports);
// CONCATENATED MODULE: ./src/components/baseLayout/utils/windowMethods.js




var trigger = function trigger(elm, type) {
  try {
    if (elm.dispatchEvent) {
      //创建一个事件对象
      var evt = new Event(type); //初始化事件，支持冒泡，支持阻止默认

      evt.initEvent(type, true, true); //发配事件

      elm.dispatchEvent(evt);
    } else if (elm.fireEvent) {
      elm.fireEvent('on' + type);
    } else {
      console.log('无法触发trigger');
    }
  } catch (e) {
    console.log(e);
  }
}; //改变阅读状态


window.changeViewState = function (noticeId) {
  external_axios_default.a.post('/notice/update', {
    id: noticeId
  }, {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }).then(function () {
    console.log(noticeId);
    console.log(data);
  });
}; // 显示loading


window.showLoading = function () {
  $JQ("#base_loading").show();
  $JQ(".base_content").addClass("contentFilter");
  $JQ('.progress-bar-striped').addClass('active');
}; // 隐藏loading


window.hideLoading = function () {
  $JQ("#base_loading").hide();
  $JQ(".base_content").removeClass("contentFilter");
  $JQ('.progress-bar-striped').attr('aria-valuenow', '100');
  $JQ('.progress-bar-striped').html('100%');
  $JQ('.progress-bar-striped').css('width', '100%');
  $JQ('.progress-bar-striped').removeClass('active');
};

window.reloadPage = function () {
  if (window.location.reload) {
    window.location.reload();
  } else {
    window.location.href = window.location.href;
  }
};

window.keyEnter = function (target) {
  var domList = $JQ("input");
  var inputLength = domList.length;

  if (inputLength) {
    for (var i = 0; i < inputLength; i++) {
      var elm = domList[i];

      elm.onkeypress = function (e) {
        //当按下按键时
        if (e.which == 13) {
          //回车键的键位序号为13
          trigger(target, "click"); //触发登录按钮的点击事件
        }
      };
    }
  }
}; //获取url参数


window.getUrlParam = function (name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象

  var r = window.location.search.substr(1).match(reg); //匹配目标参数

  if (r != null) return decodeURI(r[2]);
  return null; //返回参数值
}; //获取字符串长度（汉字算两个字符，字母数字算一个）


window.getByteLen = function (val) {
  var len = 0;

  for (var i = 0; i < val.length; i++) {
    var a = val.charAt(i);

    if (a.match(/[^\x00-\xff]/ig) != null) {
      len += 2;
    } else {
      len += 1;
    }
  }

  return len;
}; //按照汉字两个字符，字母一个字符的方式截取字符串


window.getByteSubString = function (val, num) {
  var len = 0;
  var temp = '';

  for (var i = 0; i < val.length; i++) {
    var a = val.charAt(i);

    if (a.match(/[^\x00-\xff]/ig) != null) {
      len += 2;
    } else {
      len += 1;
    }

    if (len > num) {
      return temp;
    } else {
      temp += a;
    }
  }

  return temp;
}; //获取时间的函数
//获取当天时间 或者昨天的前天的日期


window.getNowDay = function (type, count) {
  type = type || 'onlyDay';
  count = count || 0;
  var date = new Date();
  date.setDate(date.getDate() + count);
  var day = date.getDate(),
      month = date.getMonth() + 1,
      hours = date.getHours(),
      minutes = date.getMinutes(),
      seconds = date.getSeconds();

  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }

  if (day >= 1 && day <= 9) {
    day = "0" + day;
  }

  if (hours >= 1 && hours <= 9) {
    hours = "0" + hours;
  }

  if (minutes >= 1 && minutes <= 9) {
    minutes = "0" + minutes;
  }

  if (seconds >= 1 && seconds <= 9) {
    seconds = "0" + seconds;
  }

  if (type === 'onlyDay') {
    return date.getFullYear() + '-' + month + '-' + day;
  } else {
    return date.getFullYear() + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
  }
}; //获取到N天前日期


window.getOneDay = function (N) {
  var date = new Date();
  date.setDate(date.getDate() - N);
  var month = date.getMonth() + 1;
  var day = date.getDate();

  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }

  if (day >= 1 && day <= 9) {
    day = "0" + day;
  }

  return date.getFullYear() + '-' + month + '-' + day;
}; //获取当月的第一天


window.getNowMonth = function () {
  var date = new Date();
  var month = date.getMonth() + 1;

  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }

  return date.getFullYear() + '-' + month + '-' + '01';
}; //采用正则表达式获取地址栏参数（name）


window.GetQueryString = function (name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURIComponent(r[2]);
  return null;
}; //获取当前页的pathname，拼接参数然后跳转


window.spliceSearchParams = function (obj) {
  var url,
      searchKey,
      pathName = window.location.pathname;
  url = pathName + '?';

  for (searchKey in obj) {
    url += searchKey + '=' + obj[searchKey] + '&';
  }

  window.location.href = url;
}; //获取当前页完整url用于回跳


window.resetUrl = function (objUrl) {
  //获取当前页url
  var reurl = encodeURIComponent(window.location.href); //转向目标地址

  window.location.href = objUrl + '&reurl=' + reurl;
}; //设置层级页面数据缓存


window.setTopUrlCookie = function (topcookie, resourceInfo) {
  var urlInfo = window.location.href;
  readCookie(topcookie, resourceInfo + '|' + urlInfo, {
    path: '/'
  });
}; //显示上下路径 201130-201209


window.setTopUrlInfo = function (cookie_name, innerTo) {
  var topUrlInfos = readCookie(cookie_name);
  innerTo = innerTo ? innerTo : 0;

  if (topUrlInfos) {
    var topcookie = topUrlInfos.split('|');
    var tempDom = document.createElement('span');

    if (innerTo == 0) {
      var addHtml = "<span><a href='" + topcookie[1] + "'>" + topcookie[0] + "</a></span>&nbsp;>&nbsp;";
      tempDom.innerHTML = addHtml;
      $JQ('.base_explain').prepend(tempDom);
    } else {
      var _addHtml = "<span>&nbsp;>&nbsp;<a href='" + topcookie[1] + "'>" + topcookie[0] + "</a></span>";

      tempDom.innerHTML = _addHtml;
      $JQ('.base_explain').append(tempDom);
    }
  }
}; //回跳至编辑内容来路路径
// cookieName,来路cookie,listUrl,原始列表url


window.reListUrl = function (cookieName, listUrl) {
  var cookieInfo = readCookie(cookieName);

  if (cookieInfo) {
    var reListInfo = cookieInfo.split('|')[1];

    if (reListInfo) {
      window.location.href = reListInfo;
    } else {
      window.location.href = listUrl;
    }
  } else {
    window.location.href = listUrl;
  }
}; //打印对象


window.writeObj = function (obj) {
  var description = "";

  for (var i in obj) {
    var property = obj[i];
    description += i + " = " + property + "\n";
  }

  alert(description);
}; //JS检查浏览器中的flashplayer版本


window.flashChecker = function () {
  var hasFlash = 0; //是否安装了flash

  var flashVersion = 0; //flash版本

  var browserKernel = 0; //浏览器内核

  if (document.all) {
    var swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');

    if (swf) {
      hasFlash = 1;
      VSwf = swf.GetVariable("$version");
      flashVersion = parseInt(VSwf.split(" ")[1].split(",")[0]);
    }
  } else {
    if (navigator.plugins && navigator.plugins.length > 0) {
      var _swf = navigator.plugins["Shockwave Flash"]; //writeObj(navigator.plugins["Shockwave Flash"]);

      if (_swf) {
        //MacOS
        if (navigator.userAgent.indexOf('Mac OS X') > 0) {
          hasFlash = 1;
        } else if (navigator.userAgent.indexOf("Chrome") >= 0) {
          //chrome
          browserKernel = 'chrome';

          if (_swf.filename.indexOf("pepflashplayer") >= 0) {
            hasFlash = 1;

            var words = _swf.description.split(" ");

            for (var i = 0; i < words.length; ++i) {
              if (isNaN(parseInt(words[i]))) continue;
              flashVersion = parseInt(words[i]);
            }
          }
        } else {
          //firefox
          hasFlash = 1;

          var _words = _swf.description.split(" ");

          for (var _i = 0; _i < _words.length; ++_i) {
            if (isNaN(parseInt(_words[_i]))) continue;
            flashVersion = parseInt(_words[_i]);
          }
        }
      }
    }
  }

  return {
    f: hasFlash,
    v: flashVersion,
    b: browserKernel
  };
};
/*判断IE浏览器版本*/


window.getInternetExplorerVersion = function () {
  var ua = navigator.userAgent; //是IE浏览器

  if (ua.indexOf("MSIE") != -1) {
    //判断浏览器版本 低于IE10 做出提示
    if (ua.indexOf("MSIE 9.0") != -1 || ua.indexOf("MSIE 8.0") != -1 || ua.indexOf("MSIE 7.0") != -1) {
      baseUtils.show.redTip('发现您的IE浏览器版本较低，为了不影响您的使用体验，建议您使用Chrome浏览器或将IE浏览器升级为IE 10及以上版本', function () {}, 3600, 'top-center');
    }
  }
}; //新建公共方法入口


window.baseUtils = function () {
  var baseUtils = {
    show: {
      colors: {
        red: '#f06d6b',
        blue: '#2a75ed',
        yellow: '#ffbb5e'
      },
      // 201130-201209 有记录 /courseDetail/member
      defaultTip: function defaultTip(content, callback, time, color) {
        var $Tip = $JQ('#TopPrompt'),
            $TipText = $JQ('#TopPrompt .topPromptContent');
        time = time || 2000;
        $TipText.html(content); // 默认fadeIn、fadeOut 300ms

        $Tip.css('backgroundColor', this.colors[color]).show().fadeIn();
        setTimeout(function () {
          $Tip.fadeOut().hide();
          if (callback) callback.call($Tip);
        }, time);
      },
      //  蓝色顶部提示条
      blueTip: function blueTip(content, callback, time) {
        this.defaultTip(content, callback, time, 'blue');
      },
      //  红色顶部提示条
      redTip: function redTip(content, callback, time) {
        this.defaultTip(content, callback, time, 'red');
      },
      //黄色提示
      yellowTip: function yellowTip(content, callback, time) {
        this.defaultTip(content, callback, time, 'yellow');
      }
    },

    /**
     * 输入的最大价格 100万， 单位：元
     */
    maxInputPrice: 1000000
  }; //窗口Id值 // 201130-201209 无记录

  baseUtils.showWindow = function (domId) {
    var tempDom = document.createElement('div');
    var htmlString = '<div class="modal-backdrop in"></div>';
    tempDom.innerHTML = htmlString;
    $JQ("body").append(tempDom);
    privateFun.preventScroll();
    $JQ("#" + domId).css({
      "z-index": "1050"
    }).show();
  };

  baseUtils.hideWindow = function (domId) {
    var selfDom = $JQ(".modal-backdrop.in")[0];
    selfDom.parentNode.removeChild(selfDom);
    privateFun.enableScroll();
    $JQ("#" + domId).hide();
  }; //显示局部 loading 动画 // 201130-201209 无记录


  baseUtils.showLoading = function (loadingId) {
    $JQ("#_localLoading" + loadingId).show();
  };

  baseUtils.hideLoading = function (loadingId) {
    $JQ("#_localLoading" + loadingId).hide();
  };

  var privateFun = {
    preventScroll: function preventScroll() {
      // 禁止
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '8px';
      window.addEventListener('touchmove', this._preventDefault);
    },
    enableScroll: function enableScroll() {
      // 恢复
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
      window.removeEventListener('touchmove', this._preventDefault);
    },
    _preventDefault: function _preventDefault(e) {
      e.preventDefault();
    }
  };
  return baseUtils;
}();
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/baseLayout/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//






var ENTERPRISE_WECHAT_AUTH = '1'; // 企业微信授权用户类型

/* harmony default export */ var baseLayoutvue_type_script_lang_js_ = ({
  name: 'SsbaseLayout',
  props: {
    loginInfo: {
      type: Object,
      default: function _default() {
        return {
          loginKey: 'appsc',
          hasMutiShop: true
        };
      }
    }
  },
  data: function data() {
    return {
      showDialog: false,
      popInfo: null,
      showEditModal: false
    };
  },
  components: {
    dialogBox: components_dialog,
    hintModel: hintModel
  },
  created: function created() {
    var _this = this;

    this.$nextTick(function () {
      _this.initEvent();

      _this.loadingTime(); //页面加载时间统计


      _this.initLoginState(); // 轮询登录态变化


      _this.initCheckbox(); // checkbox 初始化 


      _this.initWindowMethods(); // 初始化window方法


      _this.initUnActiveTabClick(); // 无权限的检查


      _this.techSuportClick(); //小鹅通技术支持    


      _this.hideScrollBar(); // 火狐浏览器影藏滚动条 

    });
  },
  mounted: function mounted() {},
  computed: {},
  methods: {
    // 初始化事件 -待处理
    initEvent: function initEvent() {
      //插件版本过期提醒
      $JQ('body').on('click', '.plug_overtime', function () {
        var text = '该功能需要在开通标准版的基础上进行付费使用，建议尽快升级至标准版，再购买该功能的使用权限';

        if (this.hasClass('no_need_buy')) {
          text = '该功能需要在开通标准版的基础上进行使用，建议尽快升级至标准版';
        }

        if (this.hasClass("distributionShop")) {
          text = '该功能需要在开通标准版基础上方可使用。您当前为分销版店铺，如需使用建议升级至标准版，升级后即可购买该服务使用';
        }

        this.popInfo = {
          text: text,
          type: 'info',
          oktext: '立即升级'
        }; // 弹出框

        this.showDialog = true;

        this.confirmPop = function () {
          window.location.href = '/personal_service/service_buy';
        };

        this.closePop = function () {
          window.location.href = '/personal_service/service_buy';
        };
      }); //版本过期提醒

      $JQ('body').on('click', '.ver_overtime', function (event) {
        event.preventDefault();
        var text = '该功能需要在开通标准版基础上方可使用。您的标准版服务已到期，建议尽快续费标准版，续费后可继续使用该功能';
        var btnText = '立即续费';

        if (globVersionType == 0) {
          text = '该功能需要在开通标准版基础上方可使用。您的试用期已过，建议尽快升级至标准版，升级后可继续使用该功能';
          btnText = '立即升级';
        } // 企学院-试用版


        if (globVersionType == 170) {
          // 针对企业微信授权用户
          if (window.__shop_type === ENTERPRISE_WECHAT_AUTH) {
            text = '该功能需要开通企学院正式版方可使用。您的试用期已过，请前往企业微信应用管理升级正式版，升级后即可继续使用该功能';
            btnText = '好的';
          } else {
            text = '该功能需要开通企学院正式版方可使用。您的试用期已过，建议尽快升级正式版，升级后即可继续使用该功能';
            btnText = '立即升级';
          }
        } // 企学院-正式版


        if (globVersionType == 171) {
          if (window.__shop_type === ENTERPRISE_WECHAT_AUTH) {
            text = '该功能需要在开通企学院正式版上方可使用。您的服务已到期，请前往企业微信应用管理进行续费，续费后即可继续使用该功能';
            btnText = '好的';
          } else {
            text = '该功能需要开通企学院正式版方可使用。您的服务已到期，建议尽快续费，续费后即可继续使用该功能';
            btnText = '立即续费';
          }
        }

        if (globVersionType == 1 || globVersionType == 2 || globVersionType == 3) {
          text = '当前版本不支持该功能，请先升级至标准版';
          btnText = '立即升级';
        }

        if ((globVersionType == 170 || globVersionType == 171) && window.__shop_type === ENTERPRISE_WECHAT_AUTH) {
          this.popInfo = {
            text: text,
            type: 'info',
            oktext: btnText
          }; // 弹出框

          this.showDialog = true;

          this.confirmPop = function () {};

          this.closePop = function () {};
        } else {
          this.popInfo = {
            text: text,
            type: 'info',
            oktext: btnText
          }; // 弹出框

          this.showDialog = true;

          this.confirmPop = function () {
            window.location.href = '/personal_service/service_buy';
          };

          this.closePop = function () {
            window.location.href = '/personal_service/service_buy';
          };
        }
      }); //分销版没有权限的提示

      if ($JQ('#forbidAccess').val()) {
        if (!window.history.forward()) {
          window.baseUtils && window.baseUtils.show.redTip($JQ('#forbidAccess').val());
          $JQ('#forbidAccess').val('');
        }
      } // 小鹅通埋点点击事件统计，在需要统计的按钮上加上data-xiaoe-count=string,string以_隔开 


      $JQ('body').on('click', '[data-xiaoe-count]', function (e) {
        var $target = e.target;
        var count = $target.getAttribute('data-xiaoe-count') || $target.parentNode.getAttribute('data-xiaoe-count');

        if (count) {
          var arr = [{
            et: 1,
            actn: count
          }];
          window._YS_report && window._YS_report.push(arr);
        }
      }); // 按钮组按下状态

      !function () {
        //普通按钮
        if ($JQ(".xeBtnDefault")[0]) {
          $JQ(".xeBtnDefault")[0].onmousedown = function () {
            this.addClass("xeBtnDefaultDown");
          };

          $JQ(".xeBtnDefault")[0].onmouseup = function () {
            this.removeClass("xeBtnDefaultDown");
          };
        } //蓝色按钮


        if ($JQ(".btnBlue")[0]) {
          $JQ(".btnBlue")[0].onmousedown = function () {
            this.addClass("btnBlueDown");
          };

          $JQ(".btnBlue")[0].onmouseup = function () {
            this.removeClass("btnBlueDown");
          };
        } //红色按钮


        if ($JQ(".btnRed")[0]) {
          $JQ(".btnRed")[0].onmousedown = function () {
            this.addClass("btnRedDown");
          };

          $JQ(".btnRed")[0].onmouseup = function () {
            this.removeClass("btnRedDown");
          };
        }
      }();
    },
    // 轮询登录态变化
    initLoginState: function initLoginState() {
      var _this2 = this;

      //轮询本地cookie是否发生变化
      var appsc = this.loginInfo.loginKey || 'appsc';

      if (window.__app_env === 'inside') {
        appsc = "".concat(appsc, "_inside");
      } else if (window.__app_env === 'test') {
        appsc = "".concat(appsc, "_test");
      }

      var accountCookieId = readCookie(appsc);
      var checkAccountState = setInterval(function () {
        if (readCookie(appsc) != accountCookieId && _this2.loginInfo.hasMutiShop) {
          var text = '您已切换到其他店铺，当前页面需要刷新后才能继续操作';

          if (typeof readCookie(appsc) == 'undefined' && typeof accountCookieId != 'undefined') {
            text = '您的登录已过期，请在刷新后重新登录。';
          }

          _this2.loginStateHint(text);

          clearInterval(checkAccountState);
        } else {
          if (typeof readCookie(appsc) == 'undefined' && typeof accountCookieId != 'undefined') {
            console.log('检查登录；鹅3333333333333333333');
            var _text = '您的登录已过期，请在刷新后重新登录。';

            _this2.loginStateHint(_text);

            clearInterval(checkAccountState);
          }
        }
      }, 1000);
    },
    // 登录提示
    loginStateHint: function loginStateHint(text) {
      // 清除侧边栏缓存
      window.removeSidebarInfo();
      this.popInfo = {
        text: text,
        type: 'info',
        isShowCancelBtn: false
      };
      this.showDialog = true;

      this.confirmPop = function () {
        window.location.href = '/index';
      };

      this.closePop = function () {
        window.location.href = '/index';
      };
    },
    // checkbox 初始化
    initCheckbox: function initCheckbox() {
      $JQ('.checkbox-base').each(function (elm) {
        if (elm.getAttribute && elm.getAttribute('checked')) {
          elm.classList.add('checkbox-base');
        }
      });
      $JQ('body').on('click', '.checkbox-base', function (elm) {
        console.log('elm', elm);

        if (!elm.getAttribute) {
          return;
        }

        if (elm.getAttribute('checked')) {
          elm.classList.add('checkbox-active');
        } else {
          elm.classList.remove('checkbox-active');
        }
      });
    },
    // 无权限的检查
    initUnActiveTabClick: function initUnActiveTabClick() {
      $JQ(".baseUnActiveTab").on('click', function () {
        window.baseUtils && window.baseUtils.show.redTip('您的账号没有相关操作权限，如有疑问请联系店铺管理员');
      });
    },
    // 点击xiaoe_tech
    techSuportClick: function techSuportClick() {
      $JQ('#techSuport').on('click', function () {
        window.open('https://www.xiaoe-tech.com/');
      });
    },
    //页面加载时间统计
    loadingTime: function loadingTime() {
      //指定合法路由
      var validArr = ['/resource_list_page', //资源列表
      '/comment_admin', //评论列表
      '/customer', //用户列表
      '/new/customer', //用户列表
      '/order_manage/order_list', //订单列表
      '/finance_manage/revenue_record', //我的资产
      '/open_detail' ///渠道页面统计
      ];
      var pathName = window.location.pathname;
      var performanceTime = parseInt(window.performance.now()); //页面加载时间

      var appid = $JQ('#xet_app_id').val();

      for (var index = 0; index < validArr.length; index++) {
        if (pathName.startsWith(validArr[index])) {
          var customer_2 = '/new/customer';

          if (pathName === customer_2) {
            pathName = '/customer';
          }

          pathName = 'b_' + pathName.substring(1);
          window.action_spend_time_report && window.action_spend_time_report(performanceTime, pathName, appid);
        }
      }
    },
    // 是否有问答
    getQAInfo: function getQAInfo() {
      Axios.get("/QA/isHaveQA", {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }).then(function (data) {
        if (data.code == 0) {
          // 已经有问答 则跳往详情
          window.location.href = "/QA/questionAndAnswerDetail";
        } else if (data.code == 1) {
          // 还没有问答 则跳往创建
          window.location.href = "/QA/createQuestionAndAnswer";
        }
      }).catch(function (err) {
        console.log(err);
        baseUtils.show.redTip("网络错误，请稍后再试！");
      });
    },

    /*
      侧边栏改版后的逻辑 18/12/5
      href-传过来的路由 isVueRoute-是否是vue前端路由      
    */
    leaveCurpageHint: function leaveCurpageHint(href, isVueRoute) {
      var _this3 = this;

      var tempCurHref = window.location.href.split('://')[1];
      var curIndex = tempCurHref.indexOf('/');
      var curhref = tempCurHref.substring(curIndex); // 点击侧边栏的

      var gotoHerf = function gotoHerf(isVueRoute) {
        // 如果是isVueRoute-false后端路由或者中间页路由启动公共loading
        if (!isVueRoute || href.indexOf('entry/') > -1) {
          window.sideTimer = setTimeout(window.showLoading, 1200);
          console.log('VueRoute', isVueRoute);
          /*
           当前页面路径就是传入路径或者 当前路径是前端路由并且跳转目标路径也是前端路由
           如果重复点击，间隔一段时间隐藏loading、
          */

          if (curhref == href || curhref.indexOf('#') > -1 && href.indexOf('#') > -1) {
            setTimeout(function () {
              clearTimeout(window.sideTimer);
              hideLoading();
            }, 2200);
          }
        }

        console.log('href', href);
        window.location.href = href;
      };

      if (href) {
        if (window.getSaveFlag && window.getSaveFlag()) {
          // 编辑离开时浮层提醒
          this.showEditModal = true; // 重写离开的函数

          this.editLeave = function () {
            gotoHerf(isVueRoute);
            _this3.showEditModal = false;
          };
        } else {
          gotoHerf(isVueRoute);
        }
      }
    },
    // 初始化window方法
    initWindowMethods: function initWindowMethods() {
      var _this4 = this;

      // 清除侧边栏localstorage数据的缓存
      window['removeSidebarInfo'] = function () {
        var len = localStorage.length;

        for (var i = 0; i < len; i++) {
          var key = localStorage.key(i);

          if (key && key.includes("_sidebarInfo")) {
            localStorage.removeItem(key);
          }
        }
      }; // 侧边栏跳转


      window['leavepageHint'] = function (href, isVueRoute) {
        _this4.leaveCurpageHint(href, isVueRoute);
      }; //版本判断的函数


      window._versionCheck = {
        overdueAlert: function overdueAlert(text, oktext) {
          // 弹出框
          this.popInfo = {
            text: text,
            type: 'info',
            oktext: oktext
          };
          this.showDialog = true;

          this.confirmPop = function () {
            window.location.href = '/personal_service/service_buy';
          };

          this.closePop = function () {
            window.location.href = '/personal_service/service_buy';
          };
        },
        versionHasPlugin: function versionHasPlugin(version, plugin) {
          console.log(permissionList);
          return permissionList['version' + version].indexOf(plugin) >= 0;
        },
        success: function success(_success) {
          if (typeof _success === 'string') {
            window.location.href = _success;
          } else if (typeof _success === 'function') {
            _success();
          }
        },
        checkPluginState: function checkPluginState(plugin, pluginState, versionState, success, session) {
          var notOverdue = pluginState == 0 || pluginState == 1 || plugin == ''; //功能包未过期

          if (versionState == 3) {
            //试用版过期
            //标准版内功能包
            if (plugin == '' || permissionList.version4.indexOf(plugin) >= 0) {
              this.overdueAlert('该功能需要在开通标准版基础上方可使用。您的试用期已过，建议尽快升级至标准版，升级后可继续使用该功能', '立即升级');
              return false;
            } else {
              //需要购买的功能包
              this.overdueAlert('该功能需要在开通标准版基础上方可使用。您的试用期已过，建议尽快升级至标准版，升级后即可购买该服务', '立即升级');
              return false;
            }
          } else if (versionState == 4) {
            //试用版未过期
            if (notOverdue) {
              if (plugin == 'question_answer') {
                //问答特殊处理
                this.getQAInfo();
                return;
              }

              this.success(success);
              return true;
            } else {
              this.overdueAlert('您当前处于试用期阶段，请升级至标准版后购买该服务即可使用', '立即升级');
              return false;
            }
          } //标准版已过期


          if (versionState == 1) {
            if (notOverdue) {
              this.overdueAlert('该功能需要在开通标准版基础上方可使用。您的标准版服务已到期，建议尽快续费标准版，续费后可继续使用该功能', '立即续费');
              return false;
            } else {
              this.overdueAlert('您的标准版服务已到期，建议尽快续费。续费后可享有该功能', '立即续费');
              return false;
            }
          } //老版本判断


          if ([6, 8, 10].indexOf(versionState) >= 0) {
            if (plugin == '') {
              this.success(success);
              return true;
            }

            if (versionState == 6) {
              //基础版
              if (permissionList.version1.indexOf(plugin) == -1) {
                if (permissionList.buy_version.indexOf(plugin) >= 0) {
                  window.location.href = '/entry/' + plugin;
                  return false;
                }

                this.overdueAlert('当前版本不支持该功能，请先升级至标准版', '立即升级');
                return false;
              }
            }

            if (versionState == 8) {
              //成长版
              if (permissionList.version2.indexOf(plugin) == -1) {
                if (permissionList.buy_version.indexOf(plugin) >= 0) {
                  window.location.href = '/entry/' + plugin;
                  return false;
                }

                this.overdueAlert('当前版本不支持该功能，请先升级至标准版', '立即升级');
                return false;
              }
            }

            if (versionState == 10) {
              //专业版
              if (permissionList.version3.indexOf(plugin) == -1) {
                if (permissionList.buy_version.indexOf(plugin) >= 0) {
                  window.location.href = '/entry/' + plugin;
                  return false;
                }

                this.overdueAlert('当前版本不支持该功能，请先升级至标准版', '立即升级');
                return false;
              }
            }
          }

          if (notOverdue) {
            if (localStorage[plugin] || plugin == '' || this.versionHasPlugin(globVersionType, plugin)) {
              if (plugin == 'question_answer') {
                //问答特殊处理
                this.getQAInfo();
                return true;
              }

              this.success(success);
              return true;
            } else {
              localStorage[plugin] = plugin;
              window.location.href = '/entry/' + plugin;
              return;
            }
          } else {
            if (plugin === 'punch_card') {
              window.location.href = '/punch_card/punchCalendar';
              return false;
            } // 以下代码针对分销版店铺，页面统计不是功能包不需要购买


            if (session === 5) {
              if (plugin === 'page_count') {
                this.success(success);
                return false;
              }
            } //没有权限，跳转前往购买


            window.location.href = '/entry/' + plugin;
          }

          return false;
        }
      };
    },
    // 火狐浏览器影藏侧边滚动条
    hideScrollBar: function hideScrollBar() {
      var userAgent = navigator.userAgent;
      var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器

      if (isFF) {
        //如果是火狐浏览器，调用niceScroll插件，隐藏滚动条
        var nice = $("html").niceScroll();
        $("#base_slide").getNiceScroll().show();
        $("#base_slide").getNiceScroll().resize();
        $("#base_slide").niceScroll({
          cursorborder: "",
          cursorcolor: "#F6F8F9",
          boxzoom: false,
          cursorwidth: "0px",
          preventmultitouchscrolling: true,
          nativeparentscrolling: false,
          enablescrollonselection: false,
          smoothscroll: false
        });
      }
    },
    // 关闭弹窗
    closePop: function closePop() {
      this.showDialog = false;
    },
    confirmPop: function confirmPop() {
      this.showDialog = false;
    },
    // 模态框取消
    cancelLeave: function cancelLeave() {
      this.showEditModal = false;
    },
    // 模态框离开
    editLeave: function editLeave() {}
  }
});
// CONCATENATED MODULE: ./src/components/baseLayout/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_baseLayoutvue_type_script_lang_js_ = (baseLayoutvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/baseLayout/index.vue





/* normalize component */

var baseLayout_component = normalizeComponent(
  components_baseLayoutvue_type_script_lang_js_,
<<<<<<< HEAD
  baseLayoutvue_type_template_id_4e7fa376_scoped_true_render,
  baseLayoutvue_type_template_id_4e7fa376_scoped_true_staticRenderFns,
  false,
  null,
  "4e7fa376",
=======
  baseLayoutvue_type_template_id_43993a26_scoped_true_render,
  baseLayoutvue_type_template_id_43993a26_scoped_true_staticRenderFns,
  false,
  null,
  "43993a26",
>>>>>>> origin/master
  null
  
)

/* harmony default export */ var baseLayout = (baseLayout_component.exports);
// CONCATENATED MODULE: ./libEntry/install/base-layout/index.js


baseLayout.install = function (Vue) {
  Vue.component(baseLayout.name, baseLayout);
};

/* harmony default export */ var base_layout = (baseLayout);
// EXTERNAL MODULE: external "@vue/babel-helper-vue-jsx-merge-props"
var babel_helper_vue_jsx_merge_props_ = __webpack_require__(54);
var babel_helper_vue_jsx_merge_props_default = /*#__PURE__*/__webpack_require__.n(babel_helper_vue_jsx_merge_props_);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/phoneInput/index.vue?vue&type=script&lang=js&








var H5 = 'H5';
var PC = 'PC';
var CODE_LIST_PATH = '/xe.sms.nation_code.list/1.0.0';
var phoneInputvue_type_script_lang_js_RegExp = /[^\d]/g;

var validatePhoneNumber = function validatePhoneNumber(area, phoneNumber) {
  window.console.log('校验', [area, phoneNumber]);
  return true;
};

/* harmony default export */ var phoneInputvue_type_script_lang_js_ = ({
  name: 'SsPhoneInput',
  model: {
    prop: 'value',
    event: 'value-change'
  },
  mixins: [emitter],
  directives: {
    Clickoutside: clickoutside
  },
  components: {
    SsDropdown: dropdown,
    SsDropdownItem: dropdownItem,
    SsDropdownMenu: dropdownMenu,
    SsLoading: loading
  },
  props: {
    width: {
      default: '320px',
      type: String
    },
    theme: {
      default: PC,
      validator: function validator(theme) {
        return [H5, PC].indexOf(theme) !== -1;
      }
    },
    validate: {
      type: Function,
      default: validatePhoneNumber
    },
    placeholder: {
      type: String,
      default: '请输入手机号'
    },
    additionalValidate: {
      type: Function
    },
    showError: {
      type: Boolean,
      default: true
    },
    value: {
      type: String
    }
  },
  data: function data() {
    return {
      placement: 'bottomLeft',
      menuWidth: 0,
      codeList: [],
      phoneNumber: '',
      dropdownVisible: false,
      current: {
        nation_name: '中国',
        nation_code: '+86'
      },
      loading: false
    };
  },
  computed: {
    inputStyle: function inputStyle(_ref) {
      var width = _ref.width;
      return {
        width: width
      };
    },
    formatValue: function formatValue(_ref2) {
      var current = _ref2.current,
          phoneNumber = _ref2.phoneNumber;
      return "".concat(current.nation_code, "-").concat(phoneNumber);
    }
  },
  watch: {
    dropdownVisible: function dropdownVisible(val) {
      this.broadcast('SsDropdownMenu', 'visible', val);
    },
    current: function current(_current) {
      var _this = this;

      this.$emit('code-change', _current);
      this.$nextTick(function () {
        _this.broadcast('SsDropdownMenu', 'update');
      });
    },
    formatValue: function formatValue(val) {
      this.$emit('value-change', val);
    }
  },
  created: function created() {
    this.initCodeData();
  },
  mounted: function mounted() {
    this.menuWidth = this.$el.clientWidth;
  },
  methods: {
    initCodeData: function initCodeData() {
      var _this2 = this;

      this.loading = true;
      external_axios_default.a.get(CODE_LIST_PATH).then(function (_ref3) {
        var data = _ref3.data;
        var list = data.data.list;
        _this2.codeList = list;
      }).catch(function (err) {
        window.console.log(err);
      }).finally(function () {
        _this2.loading = false;
      });
    },
    getValue: function getValue() {
      return this.formatValue;
    },
    handleValidate: function handleValidate() {
      var current = this.current,
          phoneNumber = this.phoneNumber;

      if (this.additionalValidate) {
        return this.validate(current, phoneNumber) && this.additionalValidate(current, phoneNumber);
      }

      return this.validate(current, phoneNumber);
    },
    handleEnter: function handleEnter(e) {
      e.stopPropagation(); // window.console.log('enter', e);

      this.$emit('enter', this.phoneNumber, e);
    },
    handleChange: function handleChange(e) {
      e.stopPropagation(); // window.console.log('change', e);

      this.$emit('change', this.phoneNumber, e);
    },
    handleKeyup: function handleKeyup(e) {
      e.stopPropagation();

      if (e.code === 'Enter') {
        this.handleEnter(e);
      } else {
        this.$emit('keyup', this.phoneNumber, e); // window.console.log('keyup', e);
      }
    },
    handleBlur: function handleBlur(e) {
      e.stopPropagation(); // window.console.log('blur', e);

      this.$emit('blur', this.phoneNumber, e);

      if (this.handleValidate()) {// window.console.log('校验成功');
      } else {// window.console.log('校验失败');
        }
    },
    handleFocus: function handleFocus(e) {
      e.stopPropagation(); // window.console.log('focus', e);

      this.$emit('focus', this.phoneNumber, e);
    },
    handleInput: function handleInput(e) {
      var phoneNumber = this.phoneNumber;

      if (!phoneInputvue_type_script_lang_js_RegExp.test(phoneNumber)) {
        // window.console.log('input', e);
        this.$emit('input', phoneNumber, e);
      } else {
        this.phoneNumber = phoneNumber.replace(phoneInputvue_type_script_lang_js_RegExp, '');
      }
    },
    toggleDropdown: function toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
    handleClose: function handleClose() {
      this.dropdownVisible = false;
    },
    isRowActive: function isRowActive(row) {
      var current = this.current;
      return row.nation_code === current.nation_code;
    },
    handleRowSelect: function handleRowSelect(row) {
      this.current = row;
      this.handleClose();
    },
    renderCodeCell: function renderCodeCell() {
      var h = this.$createElement;
      var current = this.current;
      return h("div", {
        "class": "code-cell",
        "on": {
          "click": this.toggleDropdown
        }
      }, [current.nation_code]);
    },
    renderCodeRow: function renderCodeRow(row) {
      var _this3 = this;

      var h = this.$createElement;
      var text = "".concat(row.nation_code, "_").concat(row.nation_name);
      return h("div", {
        "class": ['row', this.isRowActive(row) && 'row-active'],
        "on": {
          "click": function click() {
            return _this3.handleRowSelect(row);
          }
        },
        "attrs": {
          "title": text
        }
      }, [text]);
    },
    renderCodeSelection: function renderCodeSelection() {
      var _this4 = this;

      var h = this.$createElement;
      var codeList = this.codeList,
          menuWidth = this.menuWidth,
          loading = this.loading;
      return h("ss-dropdown-menu", {
        "attrs": {
          "width": menuWidth
        }
      }, [loading && h("ss-loading"), codeList.map(function (row) {
        return h("ss-dropdown-item", [_this4.renderCodeRow(row)]);
      })]);
    },
    renderInput: function renderInput() {
      var _this5 = this;

      var h = this.$createElement;
      var placeholder = this.placeholder;
      return h("div", {
        "class": "input-wrap"
      }, [h("input", babel_helper_vue_jsx_merge_props_default()([{
        "on": {
          "input": [function ($event) {
            if ($event.target.composing) return;
            _this5.phoneNumber = $event.target.value;
          }, function (e) {
            return _this5.handleInput(e);
          }],
          "focus": function focus(e) {
            return _this5.handleFocus(e);
          },
          "blur": function blur(e) {
            return _this5.handleBlur(e);
          },
          "keyup": function keyup(e) {
            return _this5.handleKeyup(e);
          },
          "change": function change(e) {
            return _this5.handleChange(e);
          }
        },
        "attrs": {
          "type": "text",
          "maxlength": "11",
          "placeholder": placeholder
        },
        "class": "input__inner",
        "domProps": {
          "value": _this5.phoneNumber
        }
      }, {
        directives: [{
          name: "model",
          value: _this5.phoneNumber,
          modifiers: {}
        }]
      }]))]);
    }
  },
  render: function render() {
    var h = arguments[0];
    var inputStyle = this.inputStyle;
    return h("div", {
      "class": "ss-phone-input",
      "directives": [{
        name: "clickoutside",
        value: this.handleClose
      }],
      "style": inputStyle
    }, [this.renderCodeCell(), this.renderCodeSelection(), this.renderInput()]);
  },
  destroyed: function destroyed() {}
});
// CONCATENATED MODULE: ./src/components/phoneInput/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_phoneInputvue_type_script_lang_js_ = (phoneInputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/phoneInput/index.vue?vue&type=style&index=0&id=f8de1768&lang=scss&scoped=true&
var phoneInputvue_type_style_index_0_id_f8de1768_lang_scss_scoped_true_ = __webpack_require__(115);

// CONCATENATED MODULE: ./src/components/phoneInput/index.vue
var phoneInput_render, phoneInput_staticRenderFns





/* normalize component */

var phoneInput_component = normalizeComponent(
  components_phoneInputvue_type_script_lang_js_,
  phoneInput_render,
  phoneInput_staticRenderFns,
  false,
  null,
  "f8de1768",
  null
  
)

/* harmony default export */ var phoneInput = (phoneInput_component.exports);
// CONCATENATED MODULE: ./libEntry/install/phone-input/index.js


phoneInput.install = function (Vue) {
  Vue.component(phoneInput.name, phoneInput);
};

/* harmony default export */ var phone_input = (phoneInput);
// CONCATENATED MODULE: ./libEntry/install/index.js



































var components = [install_alert, install_badge, install_button, install_checkbox, install_dropdown, dropdown_menu, dropdown_item, install_input, install_message, message_box, install_modal, install_option, install_pagination, install_popover, install_radio, install_select, install_steps, install_step, install_tabs, tab_pane, install_tag, resource_select, install_switch, top_tips, assign_modal, auth_modal, share_modal, default_tips, name_replacer, push_setting_dialog, install_tree, install_tree_lite, base_layout, phone_input];

var install_install = function install(Vue) {
  components.forEach(function (component) {
    component.name && Vue.component(component.name, component);
  });
  Vue.prototype.$message = install_message;
};


/* harmony default export */ var libEntry_install = ({
  install: install_install,
  Alert: install_alert,
  Badge: install_badge,
  Button: install_button,
  Checkbox: install_checkbox,
  Dropdown: install_dropdown,
  DropdownMenu: dropdown_menu,
  DropdownItem: dropdown_item,
  Input: install_input,
  Message: install_message,
  MessageBox: message_box,
  Modal: install_modal,
  Option: install_option,
  Pagination: install_pagination,
  Popover: install_popover,
  Radio: install_radio,
  Select: install_select,
  Steps: install_steps,
  Step: install_step,
  Tabs: install_tabs,
  TabPane: tab_pane,
  Tag: install_tag,
  ResourceSelect: resource_select,
  Switch: install_switch,
  TopTips: top_tips,
  AssignModal: assign_modal,
  AuthModal: auth_modal,
  ShareModal: share_modal,
  DefaultTips: default_tips,
  NameReplacer: name_replacer,
  PushSettingDialog: push_setting_dialog,
  Tree: install_tree,
  TreeLite: install_tree_lite,
  Intro: install_intro,
  baseLayout: base_layout,
  PhoneInput: phone_input
});
// CONCATENATED MODULE: ./libEntry/build/index.js

/* harmony default export */ var build = __webpack_exports__["default"] = (libEntry_install);

/***/ })
/******/ ])["default"];