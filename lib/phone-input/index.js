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
/******/ 	return __webpack_require__(__webpack_require__.s = 93);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
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


/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return off; });
/* unused harmony export once */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hasClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getStyle; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @description　
 */

var isServer = vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$isServer;
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

/***/ }),

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/dropdown/dropdownMenu.vue?vue&type=template&id=24e289c8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"ss-dropdown-menu",class:[_vm.isShow && 'ss-dropdown-menu__show'],style:(_vm.style)},[(_vm.$slots.default)?_vm._t("default"):_c('div',{staticClass:"ss-dropdown-menu-empty"},[_vm._v("\n    选项为空\n  ")])],2)}
var staticRenderFns = []


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
var dropdownMenuvue_type_style_index_0_lang_scss_ = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/dropdown/dropdownMenu.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dropdown_dropdownMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var dropdownMenu = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_dropdownItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_dropdownItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_dropdownItem_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 136:
/***/ (function(module, exports) {

module.exports = require("@vue/babel-helper-vue-jsx-merge-props");

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f8de1768_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(131);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f8de1768_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_f8de1768_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* eslint-disable */


var nodeList = [];
var ctx = '@@clickoutsideContext';
var startClick;
var seed = 0;
!vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$isServer && Object(_dom__WEBPACK_IMPORTED_MODULE_1__[/* on */ "e"])(document, 'mousedown', function (e) {
  return startClick = e;
});
!vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$isServer && Object(_dom__WEBPACK_IMPORTED_MODULE_1__[/* on */ "e"])(document, 'mouseup', function (e) {
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


/* harmony default export */ __webpack_exports__["a"] = ({
  bind: function bind(el, binding, vnode) {
    nodeList.push(el);
    var id = seed++;
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

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/dropdown/index.vue?vue&type=template&id=0457d65d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ss-dropdown",on:{"mouseenter":_vm.handleEnter,"mouseleave":_vm.handleLeave,"click":function($event){$event.stopPropagation();return _vm.handleClick($event)}}},[_vm._t("default"),_vm._t("menu")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/dropdown/index.vue?vue&type=template&id=0457d65d&

// EXTERNAL MODULE: ./src/mixins/emitter.js
var emitter = __webpack_require__(5);

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
  mixins: [emitter["a" /* default */]],
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
var dropdownvue_type_style_index_0_lang_scss_ = __webpack_require__(103);

// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/dropdown/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_dropdownvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var dropdown = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/dropdown/dropdownItem.vue?vue&type=template&id=5ffd710e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"ss-dropdown-item",class:[_vm.disabled && 'ss-dropdown-item__disabled'],on:{"click":function($event){$event.stopPropagation();return _vm.handleClick($event)}}},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/dropdown/dropdownItem.vue?vue&type=template&id=5ffd710e&

// EXTERNAL MODULE: ./src/mixins/emitter.js
var emitter = __webpack_require__(5);

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
  mixins: [emitter["a" /* default */]],
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
var dropdownItemvue_type_style_index_0_lang_scss_ = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/dropdown/dropdownItem.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dropdown_dropdownItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var dropdownItem = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_dropdownMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_dropdownMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_5_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_2_1_1_css_loader_dist_cjs_js_ref_2_1_node_modules_vue_loader_15_9_6_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_2_1_6_postcss_loader_lib_index_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_2_1_1_sass_resources_loader_lib_loader_js_ref_2_4_node_modules_vue_loader_15_9_6_vue_loader_lib_index_js_vue_loader_options_dropdownMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = ({
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

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/loading/index.vue?vue&type=template&id=d917cfae&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"global-widget-loading",style:({position:_vm.is_fixed,background: _vm.background})},[_c('div',{staticClass:"loading-content",style:({top: _vm.top})},[_c('svg',{staticClass:"circular",attrs:{"viewBox":"25 25 50 50"}},[_c('circle',{staticClass:"path",style:({stroke: _vm.invite_color}),attrs:{"cx":"50","cy":"50","r":"20","fill":"none"}})]),_c('p',{staticClass:"loadingText",style:({ color: _vm.invite_color})},[_vm._v(_vm._s(_vm.tip_txt))])])])}
var staticRenderFns = []


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
var loadingvue_type_style_index_0_lang_scss_ = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/loading/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_loadingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var loading = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@vue/babel-helper-vue-jsx-merge-props"
var babel_helper_vue_jsx_merge_props_ = __webpack_require__(136);
var babel_helper_vue_jsx_merge_props_default = /*#__PURE__*/__webpack_require__.n(babel_helper_vue_jsx_merge_props_);

// EXTERNAL MODULE: ./src/mixins/emitter.js
var emitter = __webpack_require__(5);

// EXTERNAL MODULE: ./src/utils/clickoutside.js
var clickoutside = __webpack_require__(23);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./src/components/dropdown/index.vue + 4 modules
var dropdown = __webpack_require__(25);

// EXTERNAL MODULE: ./src/components/dropdown/dropdownMenu.vue + 4 modules
var dropdownMenu = __webpack_require__(10);

// EXTERNAL MODULE: ./src/components/dropdown/dropdownItem.vue + 4 modules
var dropdownItem = __webpack_require__(26);

// EXTERNAL MODULE: ./src/components/loading/index.vue + 4 modules
var loading = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.2.2@babel-loader/lib!./node_modules/_vue-loader@15.9.6@vue-loader/lib??vue-loader-options!./src/components/phoneInput/index.vue?vue&type=script&lang=js&








var H5 = 'H5';
var PC = 'PC';
var CODE_LIST_PATH = '/xe.sms.nation_code.list/1.0.0';
var RegExp = /[^\d]/g;

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
  mixins: [emitter["a" /* default */]],
  directives: {
    Clickoutside: clickoutside["a" /* default */]
  },
  components: {
    SsDropdown: dropdown["a" /* default */],
    SsDropdownItem: dropdownItem["a" /* default */],
    SsDropdownMenu: dropdownMenu["a" /* default */],
    SsLoading: loading["a" /* default */]
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

      if (!RegExp.test(phoneNumber)) {
        // window.console.log('input', e);
        this.$emit('input', phoneNumber, e);
      } else {
        this.phoneNumber = phoneNumber.replace(RegExp, '');
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
var phoneInputvue_type_style_index_0_id_f8de1768_lang_scss_scoped_true_ = __webpack_require__(170);

// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.6@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/phoneInput/index.vue
var render, staticRenderFns





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_phoneInputvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "f8de1768",
  null
  
)

/* harmony default export */ var phoneInput = (component.exports);
// CONCATENATED MODULE: ./libEntry/install/phone-input/index.js


phoneInput.install = function (Vue) {
  Vue.component(phoneInput.name, phoneInput);
};

/* harmony default export */ var phone_input = __webpack_exports__["default"] = (phoneInput);

/***/ })

/******/ })["default"];