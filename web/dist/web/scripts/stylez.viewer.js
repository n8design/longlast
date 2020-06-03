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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/web/scripts/stylez.viewer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/web/scripts/stylez.constants.js":
/*!*********************************************!*\
  !*** ./lib/web/scripts/stylez.constants.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  dmAtomicFilter: '.m-filters .a-filter',
  dmDeviceTypes: '.m-devicetypes .a-filter',
  dmFilterTocs: '.m-filtertocs .a-filter',
  viewerFrame: '.o-viewer',
  tocs: '.o-tocs',
  curWidth: '.a-input.js-curWidth',
  curHeight: '.a-input.js-curHeight',
  pagers: '.m-itemslider .a-filter'
};

/***/ }),

/***/ "./lib/web/scripts/stylez.storage.js":
/*!*******************************************!*\
  !*** ./lib/web/scripts/stylez.storage.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var _CONSTANTS = __webpack_require__(/*! ./stylez.constants */ "./lib/web/scripts/stylez.constants.js");

var STORAGE = 'stylez';

var SessionStorage =
/*#__PURE__*/
function () {
  function SessionStorage() {
    _classCallCheck(this, SessionStorage);
  }

  _createClass(SessionStorage, null, [{
    key: "_returnDefault",
    value: function _returnDefault() {
      return {
        category: 'atoms',
        deviceSize: 'full',
        index: null,
        maxIndex: null,
        title: null
      };
    }
  }, {
    key: "_getSelectedCategory",
    value: function _getSelectedCategory() {
      var curSelected = document.querySelector(_CONSTANTS.dmAtomicFilter + '.selected');

      if (curSelected !== null && curSelected.dataset !== null && curSelected.dataset.filter !== null) {
        return curSelected.dataset.filter !== null ? curSelected.dataset.filter : 'atoms';
      } else {
        return 'atoms';
      }
    }
  }, {
    key: "_getSelectedDeviceSize",
    value: function _getSelectedDeviceSize() {
      var curSelected = document.querySelector(_CONSTANTS.dmDeviceTypes + '.selected');

      if (curSelected !== null && curSelected.dataset !== null && curSelected.dataset.size !== null) {
        return curSelected.dataset.size !== null ? curSelected.dataset.size : 'full';
        ;
      } else {
        return 'full';
      }
    }
  }, {
    key: "updateStatus",
    value: function updateStatus(updates) {
      if (updates === undefined) {
        var defaultSession = this._returnDefault();

        var stylezSession = sessionStorage.getItem(STORAGE);

        if (stylezSession === undefined || stylezSession === null) {
          this._getSelectedCategory();

          this._getSelectedDeviceSize();

          sessionStorage.setItem(STORAGE, JSON.stringify(defaultSession));
        } else {
          var newStatus = JSON.parse(stylezSession);
          newStatus.category = this._getSelectedCategory();
          newStatus.deviceSize = this._getSelectedDeviceSize(); // newStatus.index = null;

          this._getSelectedCategory();

          this._getSelectedDeviceSize();

          sessionStorage.setItem(STORAGE, JSON.stringify(newStatus));
        }
      } else {
        sessionStorage.setItem(STORAGE, JSON.stringify(updates));
      }
    }
  }, {
    key: "setCurrentFilter",
    value: function setCurrentFilter() {
      var curStatus = sessionStorage.getItem(STORAGE) !== null ? JSON.parse(sessionStorage.getItem(STORAGE)) : SessionStorage._returnDefault();
      var categoryFilter = document.querySelector("button[data-filter=\"".concat(curStatus.category, "\"]"));

      if (categoryFilter !== null && categoryFilter !== undefined) {
        categoryFilter.classList.add('selected');
        categoryFilter.click();
      }

      var deviceFilter = document.querySelector("button[data-size=\"".concat(curStatus.deviceSize, "\"]"));

      if (deviceFilter !== null && deviceFilter !== undefined) {
        deviceFilter.classList.add('selected');
        deviceFilter.click();
      }

      var currentPatternTitle = document.querySelector('.a-filtername');

      if (curStatus.title !== null) {
        currentPatternTitle.textContent = curStatus.title;
      } else {
        currentPatternTitle.textContent = ' ';
        var itemSlider = document.querySelector('.m-itemslider');

        if (itemSlider !== null) {
          if (curStatus.maxIndex !== null) {
            itemSlider.classList.add('show');
          }
        }
      }
    }
  }, {
    key: "getCurrentFilter",
    value: function getCurrentFilter() {
      var curStatus = sessionStorage.getItem(STORAGE) !== null ? JSON.parse(sessionStorage.getItem(STORAGE)) : SessionStorage._returnDefault();
      return curStatus;
    }
  }]);

  return SessionStorage;
}();

module.exports = SessionStorage;

/***/ }),

/***/ "./lib/web/scripts/stylez.viewer.js":
/*!******************************************!*\
  !*** ./lib/web/scripts/stylez.viewer.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.sort */ "./node_modules/core-js/modules/es6.array.sort.js");
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__);










var SessionStorage = __webpack_require__(/*! ./stylez.storage */ "./lib/web/scripts/stylez.storage.js");

var Prism = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");

var evalHTML = function evalHTML(partialHTML) {
  try {
    var parser = new DOMParser();
    var fixedContent = parser.parseFromString(partialHTML, 'text/html');
    var partialDoc = new DocumentFragment();
    partialDoc.append(fixedContent.body);
    return partialDoc.firstChild.innerHTML;
  } catch (error) {
    return error.message;
  }
};

var cpyToClipboard = function cpyToClipboard(event) {
  var curElement = event.target.parentElement.parentElement,
      curContent = curElement.querySelector('.viewer-content');

  try {
    navigator.clipboard.writeText(curContent.innerHTML);
  } catch (error) {
    console.error(error);
  }
};

var fetchPattern = function fetchPattern() {
  var url;
  return regeneratorRuntime.async(function fetchPattern$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = './app/config/stylez.json';
          return _context.abrupt("return", fetch(url).then(function (response) {
            if (response.status === 200) {
              return response.json();
            } else {
              throw "Error current status: " + response.status + " - " + url;
            }
          }).catch(function (error) {
            console.error('ERROR :::', error);
          }));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

var pattern = fetchPattern(); // let pattern = StylezData.Pattern();

pattern.then(function (data) {
  var patterns = data.patterns.sort(function (a, b) {
    if (a.file < b.file) {
      return -1;
    }

    if (a.file > b.file) {
      return 1;
    }

    return 0;
  });
  var curSession = SessionStorage.getCurrentFilter();
  var currentPatterns = patterns.filter(function (item) {
    return item.category === curSession.category;
  });
  var currentFilter = SessionStorage.getCurrentFilter();

  if (curSession.category === 'pages' || curSession.category === 'templates' || currentFilter.index !== null) {
    if (currentPatterns.length !== 0) {
      var curIndex = currentFilter.index ? currentFilter.index : 0;
      currentFilter.maxIndex = currentPatterns.length - 1;
      currentFilter.index = curIndex;
      currentFilter.title = currentPatterns[curIndex].title;
      currentPatterns = [currentPatterns[curIndex]]; // let currentPatternTitle = document.querySelector('.a-filtername');
      // currentPatternTitle.textContent = currentFilter.title;

      SessionStorage.updateStatus(currentFilter);
    } else {
      currentFilter.maxIndex = null;
      currentFilter.index = null;
      currentFilter.title = null;
      SessionStorage.updateStatus(currentFilter);
    }
  } else {
    currentFilter.maxIndex = null;
    currentFilter.index = null;
    currentFilter.title = null;
    SessionStorage.updateStatus(currentFilter);
  }

  if (currentPatterns.length !== 0) {
    var patternsContainer = document.querySelector('.patterns');
    var copyCpl = navigator && navigator.clipboard ? "<div title='Copy to clip board' aria-label='Copy to clip board' class='viewer-filename copy'>copy</div>" : "";
    currentPatterns.forEach(function (pattern) {
      var curTemplate = stylez.templates[pattern.name.replace(/.hbs/ig, '')];
      var templateContent;

      try {
        templateContent = curTemplate();
      } catch (error) {
        console.error("Error in Pattern ".concat(pattern.title, ": ").concat(error.message));
        templateContent = "Error in Pattern ".concat(pattern.title, ": ").concat(error.message);
      }

      if (curTemplate !== undefined && templateContent !== 'undefined') {
        var evaledContent = evalHTML(templateContent);
        var content = "<div data-category='".concat(pattern.category, "' class='viewer-pattern' aria-label='Pattern ").concat(pattern.title, "'>\n            <div class='viewer-header' aria-label='Header for ").concat(pattern.title, "' >\n                <div title='").concat(pattern.title, "' class='viewer-title'>").concat(pattern.title, "</div>\n                ").concat(copyCpl, "\n                <div title='").concat(pattern.file, "' class='viewer-filename' aria-lable='file location'>").concat(pattern.file.split('/').pop(), "</div>\n            </div>\n            <div class='viewer-content' aria-label='Content of ").concat(pattern.title, " pattern'>\n            <div class='viewer-contentinner'>\n            ").concat(evaledContent, "\n            </div>\n            </div>\n            <pre class='viewer-code language-markup' data-manual><code>").concat(evaledContent.replace(/</g, '&lt;').replace(/>/g, '&gt;'), "</code></pre>\n            </div>");
        patternsContainer.insertAdjacentHTML('beforeend', content);
      }
    });
    var copyElements = document.querySelectorAll('.copy');
    copyElements.forEach(function (item) {
      item.addEventListener('click', cpyToClipboard);
    });
  } // show markup code


  Prism.highlightAll();
});

/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = {
  version: '2.5.7'
};
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document; // typeof document.createElement is 'object' in old IE


var is = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");

var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;

  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

    out = (own ? target : source)[key]; // bind timers to global for call from export context

    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // extend global

    if (target) redefine(target, key, out, type & $export.U); // export

    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};

global.core = core; // type bitmap

$export.F = 1; // forced

$export.G = 2; // global

$export.S = 4; // static

$export.P = 8; // proto

$export.B = 16; // bind

$export.W = 32; // wrap

$export.U = 64; // safe

$export.R = 128; // real proto method for `library`

module.exports = $export;

/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_fix-re-wks.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];

  if (fails(function () {
    var O = {};

    O[SYMBOL] = function () {
      return 7;
    };

    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
    ? function (string, arg) {
      return rxfn.call(string, this, arg);
    } // 21.2.5.6 RegExp.prototype[@@match](string)
    // 21.2.5.9 RegExp.prototype[@@search](string)
    : function (string) {
      return rxfn.call(string, this);
    });
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', {
    get: function () {
      return 7;
    }
  }).a != 7;
});

/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");

var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');

module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;

/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

var dP = Object.defineProperty;
exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');

var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));

  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});

/***/ }),

/***/ "./node_modules/core-js/modules/_strict-method.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () {
      /* empty */
    }, 1) : method.call(null);
  });
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js"); // instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string


module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();

module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');

var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");

var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;

var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.sort.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.sort.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

var $sort = [].sort;
var test = [1, 2, 3];
$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null); // Old WebKit
}) || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.name.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.name.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;

var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name'; // 19.2.4.2 name

NAME in FProto || __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';

    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.split.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('split', 2, function (defined, SPLIT, $split) {
  'use strict';

  var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");

  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';

  if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it

    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return []; // If `separator` is not a regex, use native split

      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0; // Make `global` and avoid `lastIndex` issues by working with a copy

      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i; // Doesn't need flags gy, but they don't hurt

      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);

      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];

        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index)); // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func

          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }

        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }

      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));

      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    }; // Chakra, V8

  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  } // 21.1.3.17 String.prototype.split(separator, limit)


  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});

/***/ }),

/***/ "./node_modules/prismjs/prism.js":
/*!***************************************!*\
  !*** ./node_modules/prismjs/prism.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/* **********************************************
     Begin prism-core.js
********************************************** */
var _self = typeof window !== 'undefined' ? window // if in browser
: typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope ? self // if in worker
: {} // if in node js
;
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */


var Prism = function (_self) {
  // Private helper vars
  var lang = /\blang(?:uage)?-([\w-]+)\b/i;
  var uniqueId = 0;
  var _ = {
    manual: _self.Prism && _self.Prism.manual,
    disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
    util: {
      encode: function encode(tokens) {
        if (tokens instanceof Token) {
          return new Token(tokens.type, encode(tokens.content), tokens.alias);
        } else if (Array.isArray(tokens)) {
          return tokens.map(encode);
        } else {
          return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
        }
      },
      type: function (o) {
        return Object.prototype.toString.call(o).slice(8, -1);
      },
      objId: function (obj) {
        if (!obj['__id']) {
          Object.defineProperty(obj, '__id', {
            value: ++uniqueId
          });
        }

        return obj['__id'];
      },
      // Deep clone a language definition (e.g. to extend it)
      clone: function deepClone(o, visited) {
        var clone,
            id,
            type = _.util.type(o);

        visited = visited || {};

        switch (type) {
          case 'Object':
            id = _.util.objId(o);

            if (visited[id]) {
              return visited[id];
            }

            clone = {};
            visited[id] = clone;

            for (var key in o) {
              if (o.hasOwnProperty(key)) {
                clone[key] = deepClone(o[key], visited);
              }
            }

            return clone;

          case 'Array':
            id = _.util.objId(o);

            if (visited[id]) {
              return visited[id];
            }

            clone = [];
            visited[id] = clone;
            o.forEach(function (v, i) {
              clone[i] = deepClone(v, visited);
            });
            return clone;

          default:
            return o;
        }
      },

      /**
       * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
       *
       * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
       *
       * @param {Element} element
       * @returns {string}
       */
      getLanguage: function (element) {
        while (element && !lang.test(element.className)) {
          element = element.parentElement;
        }

        if (element) {
          return (element.className.match(lang) || [, 'none'])[1].toLowerCase();
        }

        return 'none';
      },

      /**
       * Returns the script element that is currently executing.
       *
       * This does __not__ work for line script element.
       *
       * @returns {HTMLScriptElement | null}
       */
      currentScript: function () {
        if (typeof document === 'undefined') {
          return null;
        }

        if ('currentScript' in document) {
          return document.currentScript;
        } // IE11 workaround
        // we'll get the src of the current script by parsing IE11's error stack trace
        // this will not work for inline scripts


        try {
          throw new Error();
        } catch (err) {
          // Get file src url from stack. Specifically works with the format of stack traces in IE.
          // A stack will look like this:
          //
          // Error
          //    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
          //    at Global code (http://localhost/components/prism-core.js:606:1)
          var src = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(err.stack) || [])[1];

          if (src) {
            var scripts = document.getElementsByTagName('script');

            for (var i in scripts) {
              if (scripts[i].src == src) {
                return scripts[i];
              }
            }
          }

          return null;
        }
      }
    },
    languages: {
      extend: function (id, redef) {
        var lang = _.util.clone(_.languages[id]);

        for (var key in redef) {
          lang[key] = redef[key];
        }

        return lang;
      },

      /**
       * Insert a token before another token in a language literal
       * As this needs to recreate the object (we cannot actually insert before keys in object literals),
       * we cannot just provide an object, we need an object and a key.
       * @param inside The key (or language id) of the parent
       * @param before The key to insert before.
       * @param insert Object with the key/value pairs to insert
       * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
       */
      insertBefore: function (inside, before, insert, root) {
        root = root || _.languages;
        var grammar = root[inside];
        var ret = {};

        for (var token in grammar) {
          if (grammar.hasOwnProperty(token)) {
            if (token == before) {
              for (var newToken in insert) {
                if (insert.hasOwnProperty(newToken)) {
                  ret[newToken] = insert[newToken];
                }
              }
            } // Do not insert token which also occur in insert. See #1525


            if (!insert.hasOwnProperty(token)) {
              ret[token] = grammar[token];
            }
          }
        }

        var old = root[inside];
        root[inside] = ret; // Update references in other language definitions

        _.languages.DFS(_.languages, function (key, value) {
          if (value === old && key != inside) {
            this[key] = ret;
          }
        });

        return ret;
      },
      // Traverse a language definition with Depth First Search
      DFS: function DFS(o, callback, type, visited) {
        visited = visited || {};
        var objId = _.util.objId;

        for (var i in o) {
          if (o.hasOwnProperty(i)) {
            callback.call(o, i, o[i], type || i);

            var property = o[i],
                propertyType = _.util.type(property);

            if (propertyType === 'Object' && !visited[objId(property)]) {
              visited[objId(property)] = true;
              DFS(property, callback, null, visited);
            } else if (propertyType === 'Array' && !visited[objId(property)]) {
              visited[objId(property)] = true;
              DFS(property, callback, i, visited);
            }
          }
        }
      }
    },
    plugins: {},
    highlightAll: function (async, callback) {
      _.highlightAllUnder(document, async, callback);
    },
    highlightAllUnder: function (container, async, callback) {
      var env = {
        callback: callback,
        container: container,
        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
      };

      _.hooks.run('before-highlightall', env);

      env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

      _.hooks.run('before-all-elements-highlight', env);

      for (var i = 0, element; element = env.elements[i++];) {
        _.highlightElement(element, async === true, env.callback);
      }
    },
    highlightElement: function (element, async, callback) {
      // Find language
      var language = _.util.getLanguage(element);

      var grammar = _.languages[language]; // Set language on the element, if not present

      element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language; // Set language on the parent, for styling

      var parent = element.parentNode;

      if (parent && parent.nodeName.toLowerCase() === 'pre') {
        parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
      }

      var code = element.textContent;
      var env = {
        element: element,
        language: language,
        grammar: grammar,
        code: code
      };

      function insertHighlightedCode(highlightedCode) {
        env.highlightedCode = highlightedCode;

        _.hooks.run('before-insert', env);

        env.element.innerHTML = env.highlightedCode;

        _.hooks.run('after-highlight', env);

        _.hooks.run('complete', env);

        callback && callback.call(env.element);
      }

      _.hooks.run('before-sanity-check', env);

      if (!env.code) {
        _.hooks.run('complete', env);

        callback && callback.call(env.element);
        return;
      }

      _.hooks.run('before-highlight', env);

      if (!env.grammar) {
        insertHighlightedCode(_.util.encode(env.code));
        return;
      }

      if (async && _self.Worker) {
        var worker = new Worker(_.filename);

        worker.onmessage = function (evt) {
          insertHighlightedCode(evt.data);
        };

        worker.postMessage(JSON.stringify({
          language: env.language,
          code: env.code,
          immediateClose: true
        }));
      } else {
        insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
      }
    },
    highlight: function (text, grammar, language) {
      var env = {
        code: text,
        grammar: grammar,
        language: language
      };

      _.hooks.run('before-tokenize', env);

      env.tokens = _.tokenize(env.code, env.grammar);

      _.hooks.run('after-tokenize', env);

      return Token.stringify(_.util.encode(env.tokens), env.language);
    },
    tokenize: function (text, grammar) {
      var rest = grammar.rest;

      if (rest) {
        for (var token in rest) {
          grammar[token] = rest[token];
        }

        delete grammar.rest;
      }

      var tokenList = new LinkedList();
      addAfter(tokenList, tokenList.head, text);
      matchGrammar(text, tokenList, grammar, tokenList.head, 0);
      return toArray(tokenList);
    },
    hooks: {
      all: {},
      add: function (name, callback) {
        var hooks = _.hooks.all;
        hooks[name] = hooks[name] || [];
        hooks[name].push(callback);
      },
      run: function (name, env) {
        var callbacks = _.hooks.all[name];

        if (!callbacks || !callbacks.length) {
          return;
        }

        for (var i = 0, callback; callback = callbacks[i++];) {
          callback(env);
        }
      }
    },
    Token: Token
  };
  _self.Prism = _;

  function Token(type, content, alias, matchedStr, greedy) {
    this.type = type;
    this.content = content;
    this.alias = alias; // Copy of the full string this token was created from

    this.length = (matchedStr || '').length | 0;
    this.greedy = !!greedy;
  }

  Token.stringify = function stringify(o, language) {
    if (typeof o == 'string') {
      return o;
    }

    if (Array.isArray(o)) {
      var s = '';
      o.forEach(function (e) {
        s += stringify(e, language);
      });
      return s;
    }

    var env = {
      type: o.type,
      content: stringify(o.content, language),
      tag: 'span',
      classes: ['token', o.type],
      attributes: {},
      language: language
    };
    var aliases = o.alias;

    if (aliases) {
      if (Array.isArray(aliases)) {
        Array.prototype.push.apply(env.classes, aliases);
      } else {
        env.classes.push(aliases);
      }
    }

    _.hooks.run('wrap', env);

    var attributes = '';

    for (var name in env.attributes) {
      attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
    }

    return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
  };
  /**
   * @param {string} text
   * @param {LinkedList<string | Token>} tokenList
   * @param {any} grammar
   * @param {LinkedListNode<string | Token>} startNode
   * @param {number} startPos
   * @param {boolean} [oneshot=false]
   * @param {string} [target]
   */


  function matchGrammar(text, tokenList, grammar, startNode, startPos, oneshot, target) {
    for (var token in grammar) {
      if (!grammar.hasOwnProperty(token) || !grammar[token]) {
        continue;
      }

      var patterns = grammar[token];
      patterns = Array.isArray(patterns) ? patterns : [patterns];

      for (var j = 0; j < patterns.length; ++j) {
        if (target && target == token + ',' + j) {
          return;
        }

        var pattern = patterns[j],
            inside = pattern.inside,
            lookbehind = !!pattern.lookbehind,
            greedy = !!pattern.greedy,
            lookbehindLength = 0,
            alias = pattern.alias;

        if (greedy && !pattern.pattern.global) {
          // Without the global flag, lastIndex won't work
          var flags = pattern.pattern.toString().match(/[imsuy]*$/)[0];
          pattern.pattern = RegExp(pattern.pattern.source, flags + 'g');
        }

        pattern = pattern.pattern || pattern;

        for ( // iterate the token list and keep track of the current token/string position
        var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
          var str = currentNode.value;

          if (tokenList.length > text.length) {
            // Something went terribly wrong, ABORT, ABORT!
            return;
          }

          if (str instanceof Token) {
            continue;
          }

          var removeCount = 1; // this is the to parameter of removeBetween

          if (greedy && currentNode != tokenList.tail.prev) {
            pattern.lastIndex = pos;
            var match = pattern.exec(text);

            if (!match) {
              break;
            }

            var from = match.index + (lookbehind && match[1] ? match[1].length : 0);
            var to = match.index + match[0].length;
            var p = pos; // find the node that contains the match

            p += currentNode.value.length;

            while (from >= p) {
              currentNode = currentNode.next;
              p += currentNode.value.length;
            } // adjust pos (and p)


            p -= currentNode.value.length;
            pos = p; // the current node is a Token, then the match starts inside another Token, which is invalid

            if (currentNode.value instanceof Token) {
              continue;
            } // find the last node which is affected by this match


            for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === 'string' && !k.prev.value.greedy); k = k.next) {
              removeCount++;
              p += k.value.length;
            }

            removeCount--; // replace with the new match

            str = text.slice(pos, p);
            match.index -= pos;
          } else {
            pattern.lastIndex = 0;
            var match = pattern.exec(str);
          }

          if (!match) {
            if (oneshot) {
              break;
            }

            continue;
          }

          if (lookbehind) {
            lookbehindLength = match[1] ? match[1].length : 0;
          }

          var from = match.index + lookbehindLength,
              match = match[0].slice(lookbehindLength),
              to = from + match.length,
              before = str.slice(0, from),
              after = str.slice(to);
          var removeFrom = currentNode.prev;

          if (before) {
            removeFrom = addAfter(tokenList, removeFrom, before);
            pos += before.length;
          }

          removeRange(tokenList, removeFrom, removeCount);
          var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias, match, greedy);
          currentNode = addAfter(tokenList, removeFrom, wrapped);

          if (after) {
            addAfter(tokenList, currentNode, after);
          }

          if (removeCount > 1) matchGrammar(text, tokenList, grammar, currentNode.prev, pos, true, token + ',' + j);
          if (oneshot) break;
        }
      }
    }
  }
  /**
   * @typedef LinkedListNode
   * @property {T} value
   * @property {LinkedListNode<T> | null} prev The previous node.
   * @property {LinkedListNode<T> | null} next The next node.
   * @template T
   */

  /**
   * @template T
   */


  function LinkedList() {
    /** @type {LinkedListNode<T>} */
    var head = {
      value: null,
      prev: null,
      next: null
    };
    /** @type {LinkedListNode<T>} */

    var tail = {
      value: null,
      prev: head,
      next: null
    };
    head.next = tail;
    /** @type {LinkedListNode<T>} */

    this.head = head;
    /** @type {LinkedListNode<T>} */

    this.tail = tail;
    this.length = 0;
  }
  /**
   * Adds a new node with the given value to the list.
   * @param {LinkedList<T>} list
   * @param {LinkedListNode<T>} node
   * @param {T} value
   * @returns {LinkedListNode<T>} The added node.
   * @template T
   */


  function addAfter(list, node, value) {
    // assumes that node != list.tail && values.length >= 0
    var next = node.next;
    var newNode = {
      value: value,
      prev: node,
      next: next
    };
    node.next = newNode;
    next.prev = newNode;
    list.length++;
    return newNode;
  }
  /**
   * Removes `count` nodes after the given node. The given node will not be removed.
   * @param {LinkedList<T>} list
   * @param {LinkedListNode<T>} node
   * @param {number} count
   * @template T
   */


  function removeRange(list, node, count) {
    var next = node.next;

    for (var i = 0; i < count && next !== list.tail; i++) {
      next = next.next;
    }

    node.next = next;
    next.prev = node;
    list.length -= i;
  }
  /**
   * @param {LinkedList<T>} list
   * @returns {T[]}
   * @template T
   */


  function toArray(list) {
    var array = [];
    var node = list.head.next;

    while (node !== list.tail) {
      array.push(node.value);
      node = node.next;
    }

    return array;
  }

  if (!_self.document) {
    if (!_self.addEventListener) {
      // in Node.js
      return _;
    }

    if (!_.disableWorkerMessageHandler) {
      // In worker
      _self.addEventListener('message', function (evt) {
        var message = JSON.parse(evt.data),
            lang = message.language,
            code = message.code,
            immediateClose = message.immediateClose;

        _self.postMessage(_.highlight(code, _.languages[lang], lang));

        if (immediateClose) {
          _self.close();
        }
      }, false);
    }

    return _;
  } //Get current script and highlight


  var script = _.util.currentScript();

  if (script) {
    _.filename = script.src;

    if (script.hasAttribute('data-manual')) {
      _.manual = true;
    }
  }

  function highlightAutomaticallyCallback() {
    if (!_.manual) {
      _.highlightAll();
    }
  }

  if (!_.manual) {
    // If the document state is "loading", then we'll use DOMContentLoaded.
    // If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
    // DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
    // might take longer one animation frame to execute which can create a race condition where only some plugins have
    // been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
    // See https://github.com/PrismJS/prism/issues/2102
    var readyState = document.readyState;

    if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
      document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
    } else {
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(highlightAutomaticallyCallback);
      } else {
        window.setTimeout(highlightAutomaticallyCallback, 16);
      }
    }
  }

  return _;
}(_self);

if ( true && module.exports) {
  module.exports = Prism;
} // hack for components to work correctly in node.js


if (typeof global !== 'undefined') {
  global.Prism = Prism;
}
/* **********************************************
     Begin prism-markup.js
********************************************** */


Prism.languages.markup = {
  'comment': /<!--[\s\S]*?-->/,
  'prolog': /<\?[\s\S]+?\?>/,
  'doctype': {
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,
    greedy: true
  },
  'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
  'tag': {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
    greedy: true,
    inside: {
      'tag': {
        pattern: /^<\/?[^\s>\/]+/i,
        inside: {
          'punctuation': /^<\/?/,
          'namespace': /^[^\s>\/:]+:/
        }
      },
      'attr-value': {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
        inside: {
          'punctuation': [/^=/, {
            pattern: /^(\s*)["']|["']$/,
            lookbehind: true
          }]
        }
      },
      'punctuation': /\/?>/,
      'attr-name': {
        pattern: /[^\s>\/]+/,
        inside: {
          'namespace': /^[^\s>\/:]+:/
        }
      }
    }
  },
  'entity': /&#?[\da-z]{1,8};/i
};
Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = Prism.languages.markup['entity']; // Plugin to make entity title show the real entity, idea by Roman Komarov

Prism.hooks.add('wrap', function (env) {
  if (env.type === 'entity') {
    env.attributes['title'] = env.content.replace(/&amp;/, '&');
  }
});
Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
  /**
   * Adds an inlined language to markup.
   *
   * An example of an inlined language is CSS with `<style>` tags.
   *
   * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addInlined('style', 'css');
   */
  value: function addInlined(tagName, lang) {
    var includedCdataInside = {};
    includedCdataInside['language-' + lang] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: true,
      inside: Prism.languages[lang]
    };
    includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
    var inside = {
      'included-cdata': {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: includedCdataInside
      }
    };
    inside['language-' + lang] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[lang]
    };
    var def = {};
    def[tagName] = {
      pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
        return tagName;
      }), 'i'),
      lookbehind: true,
      greedy: true,
      inside: inside
    };
    Prism.languages.insertBefore('markup', 'cdata', def);
  }
});
Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;
/* **********************************************
     Begin prism-css.js
********************************************** */

(function (Prism) {
  var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  Prism.languages.css = {
    'comment': /\/\*[\s\S]*?\*\//,
    'atrule': {
      pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
      inside: {
        'rule': /^@[\w-]+/,
        'selector-function-argument': {
          pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,
          lookbehind: true,
          alias: 'selector'
        } // See rest below

      }
    },
    'url': {
      pattern: RegExp('url\\((?:' + string.source + '|[^\n\r()]*)\\)', 'i'),
      greedy: true,
      inside: {
        'function': /^url/i,
        'punctuation': /^\(|\)$/
      }
    },
    'selector': RegExp('[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'),
    'string': {
      pattern: string,
      greedy: true
    },
    'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
    'important': /!important\b/i,
    'function': /[-a-z0-9]+(?=\()/i,
    'punctuation': /[(){};:,]/
  };
  Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
  var markup = Prism.languages.markup;

  if (markup) {
    markup.tag.addInlined('style', 'css');
    Prism.languages.insertBefore('inside', 'attr-value', {
      'style-attr': {
        pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
        inside: {
          'attr-name': {
            pattern: /^\s*style/i,
            inside: markup.tag.inside
          },
          'punctuation': /^\s*=\s*['"]|['"]\s*$/,
          'attr-value': {
            pattern: /.+/i,
            inside: Prism.languages.css
          }
        },
        alias: 'language-css'
      }
    }, markup.tag);
  }
})(Prism);
/* **********************************************
     Begin prism-clike.js
********************************************** */


Prism.languages.clike = {
  'comment': [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: true
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: true,
    greedy: true
  }],
  'string': {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  'class-name': {
    pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: true,
    inside: {
      'punctuation': /[.\\]/
    }
  },
  'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  'boolean': /\b(?:true|false)\b/,
  'function': /\w+(?=\()/,
  'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  'punctuation': /[{}[\];(),.:]/
};
/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
  'class-name': [Prism.languages.clike['class-name'], {
    pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
    lookbehind: true
  }],
  'keyword': [{
    pattern: /((?:^|})\s*)(?:catch|finally)\b/,
    lookbehind: true
  }, {
    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: true
  }],
  'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  'function': /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  'operator': /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/
});
Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
Prism.languages.insertBefore('javascript', 'keyword', {
  'regex': {
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
    lookbehind: true,
    greedy: true
  },
  // This must be declared before keyword because we use "function" inside the look-forward
  'function-variable': {
    pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
    alias: 'function'
  },
  'parameter': [{
    pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }, {
    pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
    inside: Prism.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }],
  'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
Prism.languages.insertBefore('javascript', 'string', {
  'template-string': {
    pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
    greedy: true,
    inside: {
      'template-punctuation': {
        pattern: /^`|`$/,
        alias: 'string'
      },
      'interpolation': {
        pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
        lookbehind: true,
        inside: {
          'interpolation-punctuation': {
            pattern: /^\${|}$/,
            alias: 'punctuation'
          },
          rest: Prism.languages.javascript
        }
      },
      'string': /[\s\S]+/
    }
  }
});

if (Prism.languages.markup) {
  Prism.languages.markup.tag.addInlined('script', 'javascript');
}

Prism.languages.js = Prism.languages.javascript;
/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {
  if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
    return;
  }
  /**
   * @param {Element} [container=document]
   */


  self.Prism.fileHighlight = function (container) {
    container = container || document;
    var Extensions = {
      'js': 'javascript',
      'py': 'python',
      'rb': 'ruby',
      'ps1': 'powershell',
      'psm1': 'powershell',
      'sh': 'bash',
      'bat': 'batch',
      'h': 'c',
      'tex': 'latex'
    };
    Array.prototype.slice.call(container.querySelectorAll('pre[data-src]')).forEach(function (pre) {
      // ignore if already loaded
      if (pre.hasAttribute('data-src-loaded')) {
        return;
      } // load current


      var src = pre.getAttribute('data-src');
      var language,
          parent = pre;
      var lang = /\blang(?:uage)?-([\w-]+)\b/i;

      while (parent && !lang.test(parent.className)) {
        parent = parent.parentNode;
      }

      if (parent) {
        language = (pre.className.match(lang) || [, ''])[1];
      }

      if (!language) {
        var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
        language = Extensions[extension] || extension;
      }

      var code = document.createElement('code');
      code.className = 'language-' + language;
      pre.textContent = '';
      code.textContent = 'Loading…';
      pre.appendChild(code);
      var xhr = new XMLHttpRequest();
      xhr.open('GET', src, true);

      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status < 400 && xhr.responseText) {
            code.textContent = xhr.responseText;
            Prism.highlightElement(code); // mark as loaded

            pre.setAttribute('data-src-loaded', '');
          } else if (xhr.status >= 400) {
            code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
          } else {
            code.textContent = '✖ Error: File does not exist or is empty';
          }
        }
      };

      xhr.send(null);
    });
  };

  document.addEventListener('DOMContentLoaded', function () {
    // execute inside handler, for dropping Event as argument
    self.Prism.fileHighlight();
  });
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function () {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function (record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYi9zY3JpcHRzL3N0eWxlei5jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vL3dlYi9zY3JpcHRzL3N0eWxlei5zdG9yYWdlLmpzIiwid2VicGFjazovLy93ZWIvc2NyaXB0cy9zdHlsZXoudmlld2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZpeC1yZS13a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1yZWdleHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaWN0LW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc29ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5uYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5yZXBsYWNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9wcmlzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZG1BdG9taWNGaWx0ZXIiLCJkbURldmljZVR5cGVzIiwiZG1GaWx0ZXJUb2NzIiwidmlld2VyRnJhbWUiLCJ0b2NzIiwiY3VyV2lkdGgiLCJjdXJIZWlnaHQiLCJwYWdlcnMiLCJfQ09OU1RBTlRTIiwicmVxdWlyZSIsIlNUT1JBR0UiLCJTZXNzaW9uU3RvcmFnZSIsImNhdGVnb3J5IiwiZGV2aWNlU2l6ZSIsImluZGV4IiwibWF4SW5kZXgiLCJ0aXRsZSIsImN1clNlbGVjdGVkIiwiZG9jdW1lbnQiLCJ1cGRhdGVzIiwiZGVmYXVsdFNlc3Npb24iLCJzdHlsZXpTZXNzaW9uIiwic2Vzc2lvblN0b3JhZ2UiLCJKU09OIiwibmV3U3RhdHVzIiwiY3VyU3RhdHVzIiwiY2F0ZWdvcnlGaWx0ZXIiLCJkZXZpY2VGaWx0ZXIiLCJjdXJyZW50UGF0dGVyblRpdGxlIiwiaXRlbVNsaWRlciIsIlByaXNtIiwiZXZhbEhUTUwiLCJwYXJzZXIiLCJmaXhlZENvbnRlbnQiLCJwYXJ0aWFsRG9jIiwiZXJyb3IiLCJjcHlUb0NsaXBib2FyZCIsImN1ckVsZW1lbnQiLCJldmVudCIsImN1ckNvbnRlbnQiLCJuYXZpZ2F0b3IiLCJjb25zb2xlIiwiZmV0Y2hQYXR0ZXJuIiwidXJsIiwicmVzcG9uc2UiLCJwYXR0ZXJuIiwicGF0dGVybnMiLCJhIiwiYiIsImN1clNlc3Npb24iLCJjdXJyZW50UGF0dGVybnMiLCJpdGVtIiwiY3VycmVudEZpbHRlciIsImN1ckluZGV4IiwicGF0dGVybnNDb250YWluZXIiLCJjb3B5Q3BsIiwiY3VyVGVtcGxhdGUiLCJzdHlsZXoiLCJ0ZW1wbGF0ZUNvbnRlbnQiLCJldmFsZWRDb250ZW50IiwiY29udGVudCIsImNvcHlFbGVtZW50cyIsImV4cG9ydHMiLCJpdCIsIlR5cGVFcnJvciIsImlzT2JqZWN0IiwidG9TdHJpbmciLCJjYWxsIiwic2xpY2UiLCJjb3JlIiwidmVyc2lvbiIsIl9fZSIsImFGdW5jdGlvbiIsImZuIiwidGhhdCIsImxlbmd0aCIsInVuZGVmaW5lZCIsImMiLCJhcHBseSIsImFyZ3VtZW50cyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiaXMiLCJjcmVhdGVFbGVtZW50IiwiZ2xvYmFsIiwiaGlkZSIsInJlZGVmaW5lIiwiY3R4IiwiUFJPVE9UWVBFIiwiJGV4cG9ydCIsInR5cGUiLCJuYW1lIiwic291cmNlIiwiSVNfRk9SQ0VEIiwiRiIsIklTX0dMT0JBTCIsIkciLCJJU19TVEFUSUMiLCJTIiwiSVNfUFJPVE8iLCJQIiwiSVNfQklORCIsIkIiLCJ0YXJnZXQiLCJleHBQcm90byIsImtleSIsIm93biIsIm91dCIsImV4cCIsIkZ1bmN0aW9uIiwiVSIsIlciLCJSIiwiZXhlYyIsImUiLCJmYWlscyIsImRlZmluZWQiLCJ3a3MiLCJLRVkiLCJTWU1CT0wiLCJmbnMiLCJzdHJmbiIsInJ4Zm4iLCJPIiwiU3RyaW5nIiwicHJvdG90eXBlIiwiUmVnRXhwIiwic3RyaW5nIiwiYXJnIiwid2luZG93IiwiTWF0aCIsInNlbGYiLCJfX2ciLCJoYXNPd25Qcm9wZXJ0eSIsImRQIiwiY3JlYXRlRGVzYyIsIm9iamVjdCIsInZhbHVlIiwiZiIsImNvZiIsIk1BVENIIiwiaXNSZWdFeHAiLCJhbk9iamVjdCIsIklFOF9ET01fREVGSU5FIiwidG9QcmltaXRpdmUiLCJBdHRyaWJ1dGVzIiwiYml0bWFwIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiaGFzIiwiU1JDIiwiVE9fU1RSSU5HIiwiJHRvU3RyaW5nIiwiVFBMIiwic3BsaXQiLCJpbnNwZWN0U291cmNlIiwidmFsIiwic2FmZSIsImlzRnVuY3Rpb24iLCJqb2luIiwiU0hBUkVEIiwic3RvcmUiLCJwdXNoIiwibW9kZSIsImNvcHlyaWdodCIsIm1ldGhvZCIsInZhbHVlT2YiLCJpZCIsInB4IiwicmFuZG9tIiwiY29uY2F0IiwidWlkIiwiU3ltYm9sIiwiVVNFX1NZTUJPTCIsIiRleHBvcnRzIiwidG9PYmplY3QiLCIkc29ydCIsInNvcnQiLCJ0ZXN0IiwiY29tcGFyZWZuIiwiRlByb3RvIiwibmFtZVJFIiwiTkFNRSIsIm1hdGNoIiwiUkVQTEFDRSIsIiRyZXBsYWNlIiwicmVwbGFjZSIsInNlYXJjaFZhbHVlIiwicmVwbGFjZVZhbHVlIiwiU1BMSVQiLCIkc3BsaXQiLCJfc3BsaXQiLCIkcHVzaCIsIiRTUExJVCIsIkxFTkdUSCIsIkxBU1RfSU5ERVgiLCJOUENHIiwic2VwYXJhdG9yIiwibGltaXQiLCJvdXRwdXQiLCJmbGFncyIsImlnbm9yZUNhc2UiLCJtdWx0aWxpbmUiLCJ1bmljb2RlIiwic3RpY2t5IiwibGFzdExhc3RJbmRleCIsInNwbGl0TGltaXQiLCJzZXBhcmF0b3JDb3B5Iiwic2VwYXJhdG9yMiIsImxhc3RJbmRleCIsImxhc3RMZW5ndGgiLCJpIiwiX3NlbGYiLCJXb3JrZXJHbG9iYWxTY29wZSIsImxhbmciLCJ1bmlxdWVJZCIsIl8iLCJtYW51YWwiLCJkaXNhYmxlV29ya2VyTWVzc2FnZUhhbmRsZXIiLCJ1dGlsIiwiZW5jb2RlIiwidG9rZW5zIiwiVG9rZW4iLCJhbGlhcyIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsIm8iLCJvYmpJZCIsIm9iaiIsImNsb25lIiwiZGVlcENsb25lIiwidmlzaXRlZCIsImZvckVhY2giLCJ2IiwiZ2V0TGFuZ3VhZ2UiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwicGFyZW50RWxlbWVudCIsInRvTG93ZXJDYXNlIiwiY3VycmVudFNjcmlwdCIsIkVycm9yIiwiZXJyIiwic3JjIiwic3RhY2siLCJzY3JpcHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJsYW5ndWFnZXMiLCJleHRlbmQiLCJyZWRlZiIsImluc2VydEJlZm9yZSIsImluc2lkZSIsImJlZm9yZSIsImluc2VydCIsInJvb3QiLCJncmFtbWFyIiwicmV0IiwidG9rZW4iLCJuZXdUb2tlbiIsIm9sZCIsIkRGUyIsImNhbGxiYWNrIiwicHJvcGVydHkiLCJwcm9wZXJ0eVR5cGUiLCJwbHVnaW5zIiwiaGlnaGxpZ2h0QWxsIiwiYXN5bmMiLCJoaWdobGlnaHRBbGxVbmRlciIsImNvbnRhaW5lciIsImVudiIsInNlbGVjdG9yIiwiaG9va3MiLCJydW4iLCJlbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJoaWdobGlnaHRFbGVtZW50IiwibGFuZ3VhZ2UiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwibm9kZU5hbWUiLCJjb2RlIiwidGV4dENvbnRlbnQiLCJpbnNlcnRIaWdobGlnaHRlZENvZGUiLCJoaWdobGlnaHRlZENvZGUiLCJpbm5lckhUTUwiLCJXb3JrZXIiLCJ3b3JrZXIiLCJmaWxlbmFtZSIsIm9ubWVzc2FnZSIsImV2dCIsImRhdGEiLCJwb3N0TWVzc2FnZSIsInN0cmluZ2lmeSIsImltbWVkaWF0ZUNsb3NlIiwiaGlnaGxpZ2h0IiwidGV4dCIsInRva2VuaXplIiwicmVzdCIsInRva2VuTGlzdCIsIkxpbmtlZExpc3QiLCJhZGRBZnRlciIsImhlYWQiLCJtYXRjaEdyYW1tYXIiLCJ0b0FycmF5IiwiYWxsIiwiYWRkIiwiY2FsbGJhY2tzIiwibWF0Y2hlZFN0ciIsImdyZWVkeSIsInMiLCJ0YWciLCJjbGFzc2VzIiwiYXR0cmlidXRlcyIsImFsaWFzZXMiLCJzdGFydE5vZGUiLCJzdGFydFBvcyIsIm9uZXNob3QiLCJqIiwibG9va2JlaGluZCIsImxvb2tiZWhpbmRMZW5ndGgiLCJjdXJyZW50Tm9kZSIsIm5leHQiLCJwb3MiLCJ0YWlsIiwic3RyIiwicmVtb3ZlQ291bnQiLCJwcmV2IiwiZnJvbSIsInRvIiwicCIsImsiLCJhZnRlciIsInJlbW92ZUZyb20iLCJyZW1vdmVSYW5nZSIsIndyYXBwZWQiLCJsaXN0Iiwibm9kZSIsIm5ld05vZGUiLCJjb3VudCIsImFycmF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1lc3NhZ2UiLCJwYXJzZSIsImNsb3NlIiwic2NyaXB0IiwiaGFzQXR0cmlidXRlIiwiaGlnaGxpZ2h0QXV0b21hdGljYWxseUNhbGxiYWNrIiwicmVhZHlTdGF0ZSIsImRlZmVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0VGltZW91dCIsIm1hcmt1cCIsImFkZElubGluZWQiLCJ0YWdOYW1lIiwiaW5jbHVkZWRDZGF0YUluc2lkZSIsImRlZiIsInhtbCIsImh0bWwiLCJtYXRobWwiLCJzdmciLCJjc3MiLCJjbGlrZSIsImphdmFzY3JpcHQiLCJqcyIsInF1ZXJ5U2VsZWN0b3IiLCJmaWxlSGlnaGxpZ2h0IiwiRXh0ZW5zaW9ucyIsInByZSIsImdldEF0dHJpYnV0ZSIsImV4dGVuc2lvbiIsImFwcGVuZENoaWxkIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwib25yZWFkeXN0YXRlY2hhbmdlIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwic2V0QXR0cmlidXRlIiwic3RhdHVzVGV4dCIsInNlbmQiLCJydW50aW1lIiwiT3AiLCJoYXNPd24iLCIkU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIl9pbnZva2UiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0IiwiR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCIsIkdlblN0YXRlRXhlY3V0aW5nIiwiR2VuU3RhdGVDb21wbGV0ZWQiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJjb25zdHJ1Y3RvciIsImRpc3BsYXlOYW1lIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsIl9fYXdhaXQiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIlByb21pc2UiLCJ0aGVuIiwidW53cmFwcGVkIiwicHJldmlvdXNQcm9taXNlIiwiZW5xdWV1ZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiaXRlciIsImRvbmUiLCJzdGF0ZSIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwic2tpcFRlbXBSZXNldCIsImNoYXJBdCIsInN0b3AiLCJyb290RW50cnkiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsInJlZ2VuZXJhdG9yUnVudGltZSIsImFjY2lkZW50YWxTdHJpY3RNb2RlIiwiZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBQSxNQUFNLENBQU5BLFVBQWlCO0FBQ2JDLGdCQUFjLEVBREQ7QUFFYkMsZUFBYSxFQUZBO0FBR2JDLGNBQVksRUFIQztBQUliQyxhQUFXLEVBSkU7QUFLYkMsTUFBSSxFQUxTO0FBTWJDLFVBQVEsRUFOSztBQU9iQyxXQUFTLEVBUEk7QUFRYkMs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O0FBQ0EsUUFBNkIvRCxNQUFNLENBQUMrRCxPQUFwQyxHQUE4QyxTQTlyQmpDLENBQWY7O0FBaXNCQSxJQUFJO0FBQ0YyYSxvQkFBa0IsR0FBRzNHLE9BQXJCO0FBQ0QsQ0FGRCxDQUVFLE9BQU80RyxvQkFBUCxFQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTVYLFVBQVEsQ0FBQyxHQUFELEVBQU0sd0JBQU4sQ0FBUixDQUF3Q2dSLE9BQXhDO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUNydEJELElBQUk2RyxDQUFKLEMsQ0FFQTs7QUFDQUEsQ0FBQyxHQUFJLFlBQVc7QUFDZixTQUFPLElBQVA7QUFDQSxDQUZHLEVBQUo7O0FBSUEsSUFBSTtBQUNIO0FBQ0FBLEdBQUMsR0FBR0EsQ0FBQyxJQUFJLElBQUk3WCxRQUFKLENBQWEsYUFBYixHQUFUO0FBQ0EsQ0FIRCxDQUdFLE9BQU9LLENBQVAsRUFBVTtBQUNYO0FBQ0EsTUFBSSxPQUFPZSxNQUFQLEtBQWtCLFFBQXRCLEVBQWdDeVcsQ0FBQyxHQUFHelcsTUFBSjtBQUNoQyxDLENBRUQ7QUFDQTtBQUNBOzs7QUFFQW5JLE1BQU0sQ0FBQytELE9BQVAsR0FBaUI2YSxDQUFqQixDIiwiZmlsZSI6InN0eWxlei52aWV3ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi93ZWIvc2NyaXB0cy9zdHlsZXoudmlld2VyLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZG1BdG9taWNGaWx0ZXI6ICcubS1maWx0ZXJzIC5hLWZpbHRlcicsXG4gICAgZG1EZXZpY2VUeXBlczogJy5tLWRldmljZXR5cGVzIC5hLWZpbHRlcicsXG4gICAgZG1GaWx0ZXJUb2NzOiAnLm0tZmlsdGVydG9jcyAuYS1maWx0ZXInLFxuICAgIHZpZXdlckZyYW1lOiAnLm8tdmlld2VyJyxcbiAgICB0b2NzOiAnLm8tdG9jcycsXG4gICAgY3VyV2lkdGg6ICcuYS1pbnB1dC5qcy1jdXJXaWR0aCcsXG4gICAgY3VySGVpZ2h0OiAnLmEtaW5wdXQuanMtY3VySGVpZ2h0JyxcbiAgICBwYWdlcnM6ICcubS1pdGVtc2xpZGVyIC5hLWZpbHRlcidcbn1cbiIsImNvbnN0IF9DT05TVEFOVFMgPSByZXF1aXJlKCcuL3N0eWxlei5jb25zdGFudHMnKTtcbmNvbnN0IFNUT1JBR0UgPSAnc3R5bGV6JztcblxuY2xhc3MgU2Vzc2lvblN0b3JhZ2Uge1xuXG4gICAgc3RhdGljIF9yZXR1cm5EZWZhdWx0KCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2F0ZWdvcnk6ICdhdG9tcycsXG4gICAgICAgICAgICBkZXZpY2VTaXplOiAnZnVsbCcsXG4gICAgICAgICAgICBpbmRleDogbnVsbCxcbiAgICAgICAgICAgIG1heEluZGV4OiBudWxsLFxuICAgICAgICAgICAgdGl0bGU6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgX2dldFNlbGVjdGVkQ2F0ZWdvcnkoKSB7XG5cbiAgICAgICAgbGV0IGN1clNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihfQ09OU1RBTlRTLmRtQXRvbWljRmlsdGVyICsgJy5zZWxlY3RlZCcpO1xuXG4gICAgICAgIGlmIChjdXJTZWxlY3RlZCAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgY3VyU2VsZWN0ZWQuZGF0YXNldCAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgY3VyU2VsZWN0ZWQuZGF0YXNldC5maWx0ZXIgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgcmV0dXJuIGN1clNlbGVjdGVkLmRhdGFzZXQuZmlsdGVyICE9PSBudWxsID8gY3VyU2VsZWN0ZWQuZGF0YXNldC5maWx0ZXIgOiAnYXRvbXMnO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHJldHVybiAnYXRvbXMnO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHN0YXRpYyBfZ2V0U2VsZWN0ZWREZXZpY2VTaXplKCkge1xuXG4gICAgICAgIGxldCBjdXJTZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoX0NPTlNUQU5UUy5kbURldmljZVR5cGVzICsgJy5zZWxlY3RlZCcpO1xuXG4gICAgICAgIGlmIChjdXJTZWxlY3RlZCAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgY3VyU2VsZWN0ZWQuZGF0YXNldCAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgY3VyU2VsZWN0ZWQuZGF0YXNldC5zaXplICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBjdXJTZWxlY3RlZC5kYXRhc2V0LnNpemUgIT09IG51bGwgPyBjdXJTZWxlY3RlZC5kYXRhc2V0LnNpemUgOiAnZnVsbCc7O1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHJldHVybiAnZnVsbCc7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc3RhdGljIHVwZGF0ZVN0YXR1cyh1cGRhdGVzKSB7XG5cbiAgICAgICAgaWYgKHVwZGF0ZXMgPT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICBsZXQgZGVmYXVsdFNlc3Npb24gPSB0aGlzLl9yZXR1cm5EZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGxldCBzdHlsZXpTZXNzaW9uID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShTVE9SQUdFKTtcblxuICAgICAgICAgICAgaWYgKHN0eWxlelNlc3Npb24gPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgICAgIHN0eWxlelNlc3Npb24gPT09IG51bGwpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuX2dldFNlbGVjdGVkQ2F0ZWdvcnkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9nZXRTZWxlY3RlZERldmljZVNpemUoKTtcblxuICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU1RPUkFHRSwgSlNPTi5zdHJpbmdpZnkoZGVmYXVsdFNlc3Npb24pKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIGxldCBuZXdTdGF0dXMgPSBKU09OLnBhcnNlKHN0eWxlelNlc3Npb24pO1xuXG4gICAgICAgICAgICAgICAgbmV3U3RhdHVzLmNhdGVnb3J5ID0gdGhpcy5fZ2V0U2VsZWN0ZWRDYXRlZ29yeSgpO1xuICAgICAgICAgICAgICAgIG5ld1N0YXR1cy5kZXZpY2VTaXplID0gdGhpcy5fZ2V0U2VsZWN0ZWREZXZpY2VTaXplKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gbmV3U3RhdHVzLmluZGV4ID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIHRoaXMuX2dldFNlbGVjdGVkQ2F0ZWdvcnkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9nZXRTZWxlY3RlZERldmljZVNpemUoKTtcblxuICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oU1RPUkFHRSwgSlNPTi5zdHJpbmdpZnkobmV3U3RhdHVzKSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFNUT1JBR0UsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZXMpKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0Q3VycmVudEZpbHRlcigpIHtcblxuICAgICAgICBsZXQgY3VyU3RhdHVzID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShTVE9SQUdFKSAhPT0gbnVsbCA/XG4gICAgICAgICAgICBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU1RPUkFHRSkpIDogU2Vzc2lvblN0b3JhZ2UuX3JldHVybkRlZmF1bHQoKTtcblxuICAgICAgICBsZXQgY2F0ZWdvcnlGaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBidXR0b25bZGF0YS1maWx0ZXI9XCIke2N1clN0YXR1cy5jYXRlZ29yeX1cIl1gKTtcblxuICAgICAgICBpZiAoY2F0ZWdvcnlGaWx0ZXIgIT09IG51bGwgJiYgY2F0ZWdvcnlGaWx0ZXIgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICBjYXRlZ29yeUZpbHRlci5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgY2F0ZWdvcnlGaWx0ZXIuY2xpY2soKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRldmljZUZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGJ1dHRvbltkYXRhLXNpemU9XCIke2N1clN0YXR1cy5kZXZpY2VTaXplfVwiXWApO1xuXG4gICAgICAgIGlmIChkZXZpY2VGaWx0ZXIgIT09IG51bGwgJiYgZGV2aWNlRmlsdGVyICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgZGV2aWNlRmlsdGVyLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBkZXZpY2VGaWx0ZXIuY2xpY2soKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGN1cnJlbnRQYXR0ZXJuVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYS1maWx0ZXJuYW1lJyk7XG5cbiAgICAgICAgaWYgKGN1clN0YXR1cy50aXRsZSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBjdXJyZW50UGF0dGVyblRpdGxlLnRleHRDb250ZW50ID0gY3VyU3RhdHVzLnRpdGxlO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGN1cnJlbnRQYXR0ZXJuVGl0bGUudGV4dENvbnRlbnQgPSAnICc7XG4gICAgICAgICAgICBsZXQgaXRlbVNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tLWl0ZW1zbGlkZXInKTtcblxuICAgICAgICAgICAgaWYgKGl0ZW1TbGlkZXIgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgICAgIGlmIChjdXJTdGF0dXMubWF4SW5kZXggIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbVNsaWRlci5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc3RhdGljIGdldEN1cnJlbnRGaWx0ZXIoKSB7XG5cbiAgICAgICAgbGV0IGN1clN0YXR1cyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU1RPUkFHRSkgIT09IG51bGwgP1xuICAgICAgICAgICAgSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0UpKSA6IFNlc3Npb25TdG9yYWdlLl9yZXR1cm5EZWZhdWx0KCk7XG5cbiAgICAgICAgcmV0dXJuIGN1clN0YXR1cztcblxuICAgIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlc3Npb25TdG9yYWdlOyIsImNvbnN0IFNlc3Npb25TdG9yYWdlID0gcmVxdWlyZSgnLi9zdHlsZXouc3RvcmFnZScpO1xuY29uc3QgUHJpc20gPSByZXF1aXJlKCdwcmlzbWpzJyk7XG5cbmNvbnN0IGV2YWxIVE1MID0gKHBhcnRpYWxIVE1MKSA9PiB7XG5cbiAgICB0cnkge1xuICAgICAgICBsZXQgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgICAgICBsZXQgZml4ZWRDb250ZW50ID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhwYXJ0aWFsSFRNTCwgJ3RleHQvaHRtbCcpO1xuXG4gICAgICAgIGxldCBwYXJ0aWFsRG9jID0gbmV3IERvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgcGFydGlhbERvYy5hcHBlbmQoZml4ZWRDb250ZW50LmJvZHkpO1xuXG4gICAgICAgIHJldHVybiBwYXJ0aWFsRG9jLmZpcnN0Q2hpbGQuaW5uZXJIVE1MO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gICAgfVxuXG59XG5cbmNvbnN0IGNweVRvQ2xpcGJvYXJkID0gKGV2ZW50KSA9PiB7XG5cbiAgICBsZXQgY3VyRWxlbWVudCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQsXG4gICAgICAgIGN1ckNvbnRlbnQgPSBjdXJFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3ZXItY29udGVudCcpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY3VyQ29udGVudC5pbm5lckhUTUwpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cblxufVxuXG5jb25zdCBmZXRjaFBhdHRlcm4gPSBhc3luYyAoKSA9PiB7XG5cbiAgICBsZXQgdXJsID0gJy4vYXBwL2NvbmZpZy9zdHlsZXouanNvbic7XG5cbiAgICByZXR1cm4gZmV0Y2godXJsKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgdGhyb3cgXCJFcnJvciBjdXJyZW50IHN0YXR1czogXCIgKyByZXNwb25zZS5zdGF0dXMgKyBcIiAtIFwiICsgdXJsO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcblxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRVJST1IgOjo6JywgZXJyb3IpO1xuXG4gICAgICAgIH0pXG5cbn1cblxubGV0IHBhdHRlcm4gPSBmZXRjaFBhdHRlcm4oKTtcbi8vIGxldCBwYXR0ZXJuID0gU3R5bGV6RGF0YS5QYXR0ZXJuKCk7XG5cbnBhdHRlcm4udGhlbihkYXRhID0+IHtcblxuICAgIGxldCBwYXR0ZXJucyA9IGRhdGEucGF0dGVybnMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBpZiAoYS5maWxlIDwgYi5maWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGEuZmlsZSA+IGIuZmlsZSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSlcblxuICAgIHZhciBjdXJTZXNzaW9uID0gU2Vzc2lvblN0b3JhZ2UuZ2V0Q3VycmVudEZpbHRlcigpO1xuXG4gICAgbGV0IGN1cnJlbnRQYXR0ZXJucyA9IHBhdHRlcm5zLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uY2F0ZWdvcnkgPT09IGN1clNlc3Npb24uY2F0ZWdvcnk7XG4gICAgfSk7XG5cbiAgICBsZXQgY3VycmVudEZpbHRlciA9IFNlc3Npb25TdG9yYWdlLmdldEN1cnJlbnRGaWx0ZXIoKTtcblxuICAgIGlmIChjdXJTZXNzaW9uLmNhdGVnb3J5ID09PSAncGFnZXMnIHx8XG4gICAgICAgIGN1clNlc3Npb24uY2F0ZWdvcnkgPT09ICd0ZW1wbGF0ZXMnIHx8IGN1cnJlbnRGaWx0ZXIuaW5kZXggIT09IG51bGwpIHtcblxuICAgICAgICBpZiAoY3VycmVudFBhdHRlcm5zLmxlbmd0aCAhPT0gMCkge1xuXG4gICAgICAgICAgICBsZXQgY3VySW5kZXggPSBjdXJyZW50RmlsdGVyLmluZGV4ID8gY3VycmVudEZpbHRlci5pbmRleCA6IDA7XG5cbiAgICAgICAgICAgIGN1cnJlbnRGaWx0ZXIubWF4SW5kZXggPSBjdXJyZW50UGF0dGVybnMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGN1cnJlbnRGaWx0ZXIuaW5kZXggPSBjdXJJbmRleDtcblxuICAgICAgICAgICAgY3VycmVudEZpbHRlci50aXRsZSA9IGN1cnJlbnRQYXR0ZXJuc1tjdXJJbmRleF0udGl0bGU7XG5cbiAgICAgICAgICAgIGN1cnJlbnRQYXR0ZXJucyA9IFtjdXJyZW50UGF0dGVybnNbY3VySW5kZXhdXTtcblxuICAgICAgICAgICAgLy8gbGV0IGN1cnJlbnRQYXR0ZXJuVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYS1maWx0ZXJuYW1lJyk7XG4gICAgICAgICAgICAvLyBjdXJyZW50UGF0dGVyblRpdGxlLnRleHRDb250ZW50ID0gY3VycmVudEZpbHRlci50aXRsZTtcblxuICAgICAgICAgICAgU2Vzc2lvblN0b3JhZ2UudXBkYXRlU3RhdHVzKGN1cnJlbnRGaWx0ZXIpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGN1cnJlbnRGaWx0ZXIubWF4SW5kZXggPSBudWxsO1xuICAgICAgICAgICAgY3VycmVudEZpbHRlci5pbmRleCA9IG51bGw7XG4gICAgICAgICAgICBjdXJyZW50RmlsdGVyLnRpdGxlID0gbnVsbDtcblxuICAgICAgICAgICAgU2Vzc2lvblN0b3JhZ2UudXBkYXRlU3RhdHVzKGN1cnJlbnRGaWx0ZXIpO1xuXG4gICAgICAgIH1cblxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgY3VycmVudEZpbHRlci5tYXhJbmRleCA9IG51bGw7XG4gICAgICAgIGN1cnJlbnRGaWx0ZXIuaW5kZXggPSBudWxsO1xuICAgICAgICBjdXJyZW50RmlsdGVyLnRpdGxlID0gbnVsbDtcblxuICAgICAgICBTZXNzaW9uU3RvcmFnZS51cGRhdGVTdGF0dXMoY3VycmVudEZpbHRlcik7XG5cbiAgICB9XG5cbiAgICBpZiAoY3VycmVudFBhdHRlcm5zLmxlbmd0aCAhPT0gMCkge1xuXG4gICAgICAgIGNvbnN0IHBhdHRlcm5zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhdHRlcm5zJyk7XG5cbiAgICAgICAgY29uc3QgY29weUNwbCA9IG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IuY2xpcGJvYXJkID8gXCI8ZGl2IHRpdGxlPSdDb3B5IHRvIGNsaXAgYm9hcmQnIGFyaWEtbGFiZWw9J0NvcHkgdG8gY2xpcCBib2FyZCcgY2xhc3M9J3ZpZXdlci1maWxlbmFtZSBjb3B5Jz5jb3B5PC9kaXY+XCIgOiBcIlwiO1xuXG4gICAgICAgIGN1cnJlbnRQYXR0ZXJucy5mb3JFYWNoKHBhdHRlcm4gPT4ge1xuXG4gICAgICAgICAgICBsZXQgY3VyVGVtcGxhdGUgPSBzdHlsZXoudGVtcGxhdGVzW3BhdHRlcm4ubmFtZS5yZXBsYWNlKC8uaGJzL2lnLCAnJyldO1xuXG4gICAgICAgICAgICBsZXQgdGVtcGxhdGVDb250ZW50O1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlQ29udGVudCA9IGN1clRlbXBsYXRlKCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGluIFBhdHRlcm4gJHtwYXR0ZXJuLnRpdGxlfTogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlQ29udGVudCA9IGBFcnJvciBpbiBQYXR0ZXJuICR7cGF0dGVybi50aXRsZX06ICR7ZXJyb3IubWVzc2FnZX1gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY3VyVGVtcGxhdGUgIT09IHVuZGVmaW5lZCAmJiB0ZW1wbGF0ZUNvbnRlbnQgIT09ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgZXZhbGVkQ29udGVudCA9IGV2YWxIVE1MKHRlbXBsYXRlQ29udGVudCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gYDxkaXYgZGF0YS1jYXRlZ29yeT0nJHtwYXR0ZXJuLmNhdGVnb3J5fScgY2xhc3M9J3ZpZXdlci1wYXR0ZXJuJyBhcmlhLWxhYmVsPSdQYXR0ZXJuICR7IHBhdHRlcm4udGl0bGUgfSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSd2aWV3ZXItaGVhZGVyJyBhcmlhLWxhYmVsPSdIZWFkZXIgZm9yICR7IHBhdHRlcm4udGl0bGUgfScgPlxuICAgICAgICAgICAgICAgIDxkaXYgdGl0bGU9JyR7IHBhdHRlcm4udGl0bGUgfScgY2xhc3M9J3ZpZXdlci10aXRsZSc+JHsgcGF0dGVybi50aXRsZSB9PC9kaXY+XG4gICAgICAgICAgICAgICAgJHsgY29weUNwbCB9XG4gICAgICAgICAgICAgICAgPGRpdiB0aXRsZT0nJHtwYXR0ZXJuLmZpbGUgfScgY2xhc3M9J3ZpZXdlci1maWxlbmFtZScgYXJpYS1sYWJsZT0nZmlsZSBsb2NhdGlvbic+JHtwYXR0ZXJuLmZpbGUuc3BsaXQoJy8nKS5wb3AoKX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ndmlld2VyLWNvbnRlbnQnIGFyaWEtbGFiZWw9J0NvbnRlbnQgb2YgJHsgcGF0dGVybi50aXRsZSB9IHBhdHRlcm4nPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ndmlld2VyLWNvbnRlbnRpbm5lcic+XG4gICAgICAgICAgICAkeyBldmFsZWRDb250ZW50IH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cHJlIGNsYXNzPSd2aWV3ZXItY29kZSBsYW5ndWFnZS1tYXJrdXAnIGRhdGEtbWFudWFsPjxjb2RlPiR7IGV2YWxlZENvbnRlbnQucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZndDsnKSB9PC9jb2RlPjwvcHJlPlxuICAgICAgICAgICAgPC9kaXY+YDtcblxuICAgICAgICAgICAgICAgIHBhdHRlcm5zQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgY29udGVudCk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuXG4gICAgICAgIHZhciBjb3B5RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29weScpO1xuXG4gICAgICAgIGNvcHlFbGVtZW50cy5mb3JFYWNoKGl0ZW0gPT4ge1xuXG4gICAgICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3B5VG9DbGlwYm9hcmQpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLy8gc2hvdyBtYXJrdXAgY29kZVxuICAgIFByaXNtLmhpZ2hsaWdodEFsbCgpO1xufSkiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi41LjcnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSk7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmICh0YXJnZXQpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmIChleHBvcnRzW2tleV0gIT0gb3V0KSBoaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZiAoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpIGV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgbGVuZ3RoLCBleGVjKSB7XG4gIHZhciBTWU1CT0wgPSB3a3MoS0VZKTtcbiAgdmFyIGZucyA9IGV4ZWMoZGVmaW5lZCwgU1lNQk9MLCAnJ1tLRVldKTtcbiAgdmFyIHN0cmZuID0gZm5zWzBdO1xuICB2YXIgcnhmbiA9IGZuc1sxXTtcbiAgaWYgKGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgTyA9IHt9O1xuICAgIE9bU1lNQk9MXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH07XG4gICAgcmV0dXJuICcnW0tFWV0oTykgIT0gNztcbiAgfSkpIHtcbiAgICByZWRlZmluZShTdHJpbmcucHJvdG90eXBlLCBLRVksIHN0cmZuKTtcbiAgICBoaWRlKFJlZ0V4cC5wcm90b3R5cGUsIFNZTUJPTCwgbGVuZ3RoID09IDJcbiAgICAgIC8vIDIxLjIuNS44IFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXShzdHJpbmcsIHJlcGxhY2VWYWx1ZSlcbiAgICAgIC8vIDIxLjIuNS4xMSBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdKHN0cmluZywgbGltaXQpXG4gICAgICA/IGZ1bmN0aW9uIChzdHJpbmcsIGFyZykgeyByZXR1cm4gcnhmbi5jYWxsKHN0cmluZywgdGhpcywgYXJnKTsgfVxuICAgICAgLy8gMjEuMi41LjYgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXShzdHJpbmcpXG4gICAgICAvLyAyMS4yLjUuOSBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXShzdHJpbmcpXG4gICAgICA6IGZ1bmN0aW9uIChzdHJpbmcpIHsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMpOyB9XG4gICAgKTtcbiAgfVxufTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIvLyA3LjIuOCBJc1JlZ0V4cChhcmd1bWVudClcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIE1BVENIID0gcmVxdWlyZSgnLi9fd2tzJykoJ21hdGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgaXNSZWdFeHA7XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgKChpc1JlZ0V4cCA9IGl0W01BVENIXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBjb2YoaXQpID09ICdSZWdFeHAnKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBTUkMgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJyk7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciAkdG9TdHJpbmcgPSBGdW5jdGlvbltUT19TVFJJTkddO1xudmFyIFRQTCA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbCwgc2FmZSkge1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYgKE9ba2V5XSA9PT0gdmFsKSByZXR1cm47XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIGlmICghc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH0gZWxzZSBpZiAoT1trZXldKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG4iLCJ2YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246IGNvcmUudmVyc2lvbixcbiAgbW9kZTogcmVxdWlyZSgnLi9fbGlicmFyeScpID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTggRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1ldGhvZCwgYXJnKSB7XG4gIHJldHVybiAhIW1ldGhvZCAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtY2FsbFxuICAgIGFyZyA/IG1ldGhvZC5jYWxsKG51bGwsIGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgMSkgOiBtZXRob2QuY2FsbChudWxsKTtcbiAgfSk7XG59O1xuIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyICRzb3J0ID0gW10uc29ydDtcbnZhciB0ZXN0ID0gWzEsIDIsIDNdO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIElFOC1cbiAgdGVzdC5zb3J0KHVuZGVmaW5lZCk7XG59KSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBWOCBidWdcbiAgdGVzdC5zb3J0KG51bGwpO1xuICAvLyBPbGQgV2ViS2l0XG59KSB8fCAhcmVxdWlyZSgnLi9fc3RyaWN0LW1ldGhvZCcpKCRzb3J0KSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjI1IEFycmF5LnByb3RvdHlwZS5zb3J0KGNvbXBhcmVmbilcbiAgc29ydDogZnVuY3Rpb24gc29ydChjb21wYXJlZm4pIHtcbiAgICByZXR1cm4gY29tcGFyZWZuID09PSB1bmRlZmluZWRcbiAgICAgID8gJHNvcnQuY2FsbCh0b09iamVjdCh0aGlzKSlcbiAgICAgIDogJHNvcnQuY2FsbCh0b09iamVjdCh0aGlzKSwgYUZ1bmN0aW9uKGNvbXBhcmVmbikpO1xuICB9XG59KTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgRlByb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIG5hbWVSRSA9IC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopLztcbnZhciBOQU1FID0gJ25hbWUnO1xuXG4vLyAxOS4yLjQuMiBuYW1lXG5OQU1FIGluIEZQcm90byB8fCByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmIGRQKEZQcm90bywgTkFNRSwge1xuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKCcnICsgdGhpcykubWF0Y2gobmFtZVJFKVsxXTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG59KTtcbiIsIi8vIEBAcmVwbGFjZSBsb2dpY1xucmVxdWlyZSgnLi9fZml4LXJlLXdrcycpKCdyZXBsYWNlJywgMiwgZnVuY3Rpb24gKGRlZmluZWQsIFJFUExBQ0UsICRyZXBsYWNlKSB7XG4gIC8vIDIxLjEuMy4xNCBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2Uoc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSlcbiAgcmV0dXJuIFtmdW5jdGlvbiByZXBsYWNlKHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIE8gPSBkZWZpbmVkKHRoaXMpO1xuICAgIHZhciBmbiA9IHNlYXJjaFZhbHVlID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlYXJjaFZhbHVlW1JFUExBQ0VdO1xuICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICA/IGZuLmNhbGwoc2VhcmNoVmFsdWUsIE8sIHJlcGxhY2VWYWx1ZSlcbiAgICAgIDogJHJlcGxhY2UuY2FsbChTdHJpbmcoTyksIHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpO1xuICB9LCAkcmVwbGFjZV07XG59KTtcbiIsIi8vIEBAc3BsaXQgbG9naWNcbnJlcXVpcmUoJy4vX2ZpeC1yZS13a3MnKSgnc3BsaXQnLCAyLCBmdW5jdGlvbiAoZGVmaW5lZCwgU1BMSVQsICRzcGxpdCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4vX2lzLXJlZ2V4cCcpO1xuICB2YXIgX3NwbGl0ID0gJHNwbGl0O1xuICB2YXIgJHB1c2ggPSBbXS5wdXNoO1xuICB2YXIgJFNQTElUID0gJ3NwbGl0JztcbiAgdmFyIExFTkdUSCA9ICdsZW5ndGgnO1xuICB2YXIgTEFTVF9JTkRFWCA9ICdsYXN0SW5kZXgnO1xuICBpZiAoXG4gICAgJ2FiYmMnWyRTUExJVF0oLyhiKSovKVsxXSA9PSAnYycgfHxcbiAgICAndGVzdCdbJFNQTElUXSgvKD86KS8sIC0xKVtMRU5HVEhdICE9IDQgfHxcbiAgICAnYWInWyRTUExJVF0oLyg/OmFiKSovKVtMRU5HVEhdICE9IDIgfHxcbiAgICAnLidbJFNQTElUXSgvKC4/KSguPykvKVtMRU5HVEhdICE9IDQgfHxcbiAgICAnLidbJFNQTElUXSgvKCkoKS8pW0xFTkdUSF0gPiAxIHx8XG4gICAgJydbJFNQTElUXSgvLj8vKVtMRU5HVEhdXG4gICkge1xuICAgIHZhciBOUENHID0gLygpPz8vLmV4ZWMoJycpWzFdID09PSB1bmRlZmluZWQ7IC8vIG5vbnBhcnRpY2lwYXRpbmcgY2FwdHVyaW5nIGdyb3VwXG4gICAgLy8gYmFzZWQgb24gZXM1LXNoaW0gaW1wbGVtZW50YXRpb24sIG5lZWQgdG8gcmV3b3JrIGl0XG4gICAgJHNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHZhciBzdHJpbmcgPSBTdHJpbmcodGhpcyk7XG4gICAgICBpZiAoc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDApIHJldHVybiBbXTtcbiAgICAgIC8vIElmIGBzZXBhcmF0b3JgIGlzIG5vdCBhIHJlZ2V4LCB1c2UgbmF0aXZlIHNwbGl0XG4gICAgICBpZiAoIWlzUmVnRXhwKHNlcGFyYXRvcikpIHJldHVybiBfc3BsaXQuY2FsbChzdHJpbmcsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgICAgdmFyIG91dHB1dCA9IFtdO1xuICAgICAgdmFyIGZsYWdzID0gKHNlcGFyYXRvci5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnN0aWNreSA/ICd5JyA6ICcnKTtcbiAgICAgIHZhciBsYXN0TGFzdEluZGV4ID0gMDtcbiAgICAgIHZhciBzcGxpdExpbWl0ID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IDQyOTQ5NjcyOTUgOiBsaW1pdCA+Pj4gMDtcbiAgICAgIC8vIE1ha2UgYGdsb2JhbGAgYW5kIGF2b2lkIGBsYXN0SW5kZXhgIGlzc3VlcyBieSB3b3JraW5nIHdpdGggYSBjb3B5XG4gICAgICB2YXIgc2VwYXJhdG9yQ29weSA9IG5ldyBSZWdFeHAoc2VwYXJhdG9yLnNvdXJjZSwgZmxhZ3MgKyAnZycpO1xuICAgICAgdmFyIHNlcGFyYXRvcjIsIG1hdGNoLCBsYXN0SW5kZXgsIGxhc3RMZW5ndGgsIGk7XG4gICAgICAvLyBEb2Vzbid0IG5lZWQgZmxhZ3MgZ3ksIGJ1dCB0aGV5IGRvbid0IGh1cnRcbiAgICAgIGlmICghTlBDRykgc2VwYXJhdG9yMiA9IG5ldyBSZWdFeHAoJ14nICsgc2VwYXJhdG9yQ29weS5zb3VyY2UgKyAnJCg/IVxcXFxzKScsIGZsYWdzKTtcbiAgICAgIHdoaWxlIChtYXRjaCA9IHNlcGFyYXRvckNvcHkuZXhlYyhzdHJpbmcpKSB7XG4gICAgICAgIC8vIGBzZXBhcmF0b3JDb3B5Lmxhc3RJbmRleGAgaXMgbm90IHJlbGlhYmxlIGNyb3NzLWJyb3dzZXJcbiAgICAgICAgbGFzdEluZGV4ID0gbWF0Y2guaW5kZXggKyBtYXRjaFswXVtMRU5HVEhdO1xuICAgICAgICBpZiAobGFzdEluZGV4ID4gbGFzdExhc3RJbmRleCkge1xuICAgICAgICAgIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4LCBtYXRjaC5pbmRleCkpO1xuICAgICAgICAgIC8vIEZpeCBicm93c2VycyB3aG9zZSBgZXhlY2AgbWV0aG9kcyBkb24ndCBjb25zaXN0ZW50bHkgcmV0dXJuIGB1bmRlZmluZWRgIGZvciBOUENHXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvb3AtZnVuY1xuICAgICAgICAgIGlmICghTlBDRyAmJiBtYXRjaFtMRU5HVEhdID4gMSkgbWF0Y2hbMF0ucmVwbGFjZShzZXBhcmF0b3IyLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzW0xFTkdUSF0gLSAyOyBpKyspIGlmIChhcmd1bWVudHNbaV0gPT09IHVuZGVmaW5lZCkgbWF0Y2hbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKG1hdGNoW0xFTkdUSF0gPiAxICYmIG1hdGNoLmluZGV4IDwgc3RyaW5nW0xFTkdUSF0pICRwdXNoLmFwcGx5KG91dHB1dCwgbWF0Y2guc2xpY2UoMSkpO1xuICAgICAgICAgIGxhc3RMZW5ndGggPSBtYXRjaFswXVtMRU5HVEhdO1xuICAgICAgICAgIGxhc3RMYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgICAgaWYgKG91dHB1dFtMRU5HVEhdID49IHNwbGl0TGltaXQpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVhdID09PSBtYXRjaC5pbmRleCkgc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXSsrOyAvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wXG4gICAgICB9XG4gICAgICBpZiAobGFzdExhc3RJbmRleCA9PT0gc3RyaW5nW0xFTkdUSF0pIHtcbiAgICAgICAgaWYgKGxhc3RMZW5ndGggfHwgIXNlcGFyYXRvckNvcHkudGVzdCgnJykpIG91dHB1dC5wdXNoKCcnKTtcbiAgICAgIH0gZWxzZSBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCkpO1xuICAgICAgcmV0dXJuIG91dHB1dFtMRU5HVEhdID4gc3BsaXRMaW1pdCA/IG91dHB1dC5zbGljZSgwLCBzcGxpdExpbWl0KSA6IG91dHB1dDtcbiAgICB9O1xuICAvLyBDaGFrcmEsIFY4XG4gIH0gZWxzZSBpZiAoJzAnWyRTUExJVF0odW5kZWZpbmVkLCAwKVtMRU5HVEhdKSB7XG4gICAgJHNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHJldHVybiBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCA/IFtdIDogX3NwbGl0LmNhbGwodGhpcywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgfTtcbiAgfVxuICAvLyAyMS4xLjMuMTcgU3RyaW5nLnByb3RvdHlwZS5zcGxpdChzZXBhcmF0b3IsIGxpbWl0KVxuICByZXR1cm4gW2Z1bmN0aW9uIHNwbGl0KHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICB2YXIgTyA9IGRlZmluZWQodGhpcyk7XG4gICAgdmFyIGZuID0gc2VwYXJhdG9yID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlcGFyYXRvcltTUExJVF07XG4gICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWQgPyBmbi5jYWxsKHNlcGFyYXRvciwgTywgbGltaXQpIDogJHNwbGl0LmNhbGwoU3RyaW5nKE8pLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgfSwgJHNwbGl0XTtcbn0pO1xuIiwiXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgIEJlZ2luIHByaXNtLWNvcmUuanNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxudmFyIF9zZWxmID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKVxuXHQ/IHdpbmRvdyAgIC8vIGlmIGluIGJyb3dzZXJcblx0OiAoXG5cdFx0KHR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZiBpbnN0YW5jZW9mIFdvcmtlckdsb2JhbFNjb3BlKVxuXHRcdD8gc2VsZiAvLyBpZiBpbiB3b3JrZXJcblx0XHQ6IHt9ICAgLy8gaWYgaW4gbm9kZSBqc1xuXHQpO1xuXG4vKipcbiAqIFByaXNtOiBMaWdodHdlaWdodCwgcm9idXN0LCBlbGVnYW50IHN5bnRheCBoaWdobGlnaHRpbmdcbiAqIE1JVCBsaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwL1xuICogQGF1dGhvciBMZWEgVmVyb3UgaHR0cDovL2xlYS52ZXJvdS5tZVxuICovXG5cbnZhciBQcmlzbSA9IChmdW5jdGlvbiAoX3NlbGYpe1xuXG4vLyBQcml2YXRlIGhlbHBlciB2YXJzXG52YXIgbGFuZyA9IC9cXGJsYW5nKD86dWFnZSk/LShbXFx3LV0rKVxcYi9pO1xudmFyIHVuaXF1ZUlkID0gMDtcblxuXG52YXIgXyA9IHtcblx0bWFudWFsOiBfc2VsZi5QcmlzbSAmJiBfc2VsZi5QcmlzbS5tYW51YWwsXG5cdGRpc2FibGVXb3JrZXJNZXNzYWdlSGFuZGxlcjogX3NlbGYuUHJpc20gJiYgX3NlbGYuUHJpc20uZGlzYWJsZVdvcmtlck1lc3NhZ2VIYW5kbGVyLFxuXHR1dGlsOiB7XG5cdFx0ZW5jb2RlOiBmdW5jdGlvbiBlbmNvZGUodG9rZW5zKSB7XG5cdFx0XHRpZiAodG9rZW5zIGluc3RhbmNlb2YgVG9rZW4pIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBUb2tlbih0b2tlbnMudHlwZSwgZW5jb2RlKHRva2Vucy5jb250ZW50KSwgdG9rZW5zLmFsaWFzKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0b2tlbnMpKSB7XG5cdFx0XHRcdHJldHVybiB0b2tlbnMubWFwKGVuY29kZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdG9rZW5zLnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoL1xcdTAwYTAvZywgJyAnKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0dHlwZTogZnVuY3Rpb24gKG8pIHtcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuXHRcdH0sXG5cblx0XHRvYmpJZDogZnVuY3Rpb24gKG9iaikge1xuXHRcdFx0aWYgKCFvYmpbJ19faWQnXSkge1xuXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCAnX19pZCcsIHsgdmFsdWU6ICsrdW5pcXVlSWQgfSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gb2JqWydfX2lkJ107XG5cdFx0fSxcblxuXHRcdC8vIERlZXAgY2xvbmUgYSBsYW5ndWFnZSBkZWZpbml0aW9uIChlLmcuIHRvIGV4dGVuZCBpdClcblx0XHRjbG9uZTogZnVuY3Rpb24gZGVlcENsb25lKG8sIHZpc2l0ZWQpIHtcblx0XHRcdHZhciBjbG9uZSwgaWQsIHR5cGUgPSBfLnV0aWwudHlwZShvKTtcblx0XHRcdHZpc2l0ZWQgPSB2aXNpdGVkIHx8IHt9O1xuXG5cdFx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdFx0Y2FzZSAnT2JqZWN0Jzpcblx0XHRcdFx0XHRpZCA9IF8udXRpbC5vYmpJZChvKTtcblx0XHRcdFx0XHRpZiAodmlzaXRlZFtpZF0pIHtcblx0XHRcdFx0XHRcdHJldHVybiB2aXNpdGVkW2lkXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2xvbmUgPSB7fTtcblx0XHRcdFx0XHR2aXNpdGVkW2lkXSA9IGNsb25lO1xuXG5cdFx0XHRcdFx0Zm9yICh2YXIga2V5IGluIG8pIHtcblx0XHRcdFx0XHRcdGlmIChvLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdFx0XHRcdFx0Y2xvbmVba2V5XSA9IGRlZXBDbG9uZShvW2tleV0sIHZpc2l0ZWQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiBjbG9uZTtcblxuXHRcdFx0XHRjYXNlICdBcnJheSc6XG5cdFx0XHRcdFx0aWQgPSBfLnV0aWwub2JqSWQobyk7XG5cdFx0XHRcdFx0aWYgKHZpc2l0ZWRbaWRdKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmlzaXRlZFtpZF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNsb25lID0gW107XG5cdFx0XHRcdFx0dmlzaXRlZFtpZF0gPSBjbG9uZTtcblxuXHRcdFx0XHRcdG8uZm9yRWFjaChmdW5jdGlvbiAodiwgaSkge1xuXHRcdFx0XHRcdFx0Y2xvbmVbaV0gPSBkZWVwQ2xvbmUodiwgdmlzaXRlZCk7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRyZXR1cm4gY2xvbmU7XG5cblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm4gbztcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogUmV0dXJucyB0aGUgUHJpc20gbGFuZ3VhZ2Ugb2YgdGhlIGdpdmVuIGVsZW1lbnQgc2V0IGJ5IGEgYGxhbmd1YWdlLXh4eHhgIG9yIGBsYW5nLXh4eHhgIGNsYXNzLlxuXHRcdCAqXG5cdFx0ICogSWYgbm8gbGFuZ3VhZ2UgaXMgc2V0IGZvciB0aGUgZWxlbWVudCBvciB0aGUgZWxlbWVudCBpcyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAsIGBub25lYCB3aWxsIGJlIHJldHVybmVkLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRnZXRMYW5ndWFnZTogZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRcdHdoaWxlIChlbGVtZW50ICYmICFsYW5nLnRlc3QoZWxlbWVudC5jbGFzc05hbWUpKSB7XG5cdFx0XHRcdGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZWxlbWVudCkge1xuXHRcdFx0XHRyZXR1cm4gKGVsZW1lbnQuY2xhc3NOYW1lLm1hdGNoKGxhbmcpIHx8IFssICdub25lJ10pWzFdLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gJ25vbmUnO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBSZXR1cm5zIHRoZSBzY3JpcHQgZWxlbWVudCB0aGF0IGlzIGN1cnJlbnRseSBleGVjdXRpbmcuXG5cdFx0ICpcblx0XHQgKiBUaGlzIGRvZXMgX19ub3RfXyB3b3JrIGZvciBsaW5lIHNjcmlwdCBlbGVtZW50LlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge0hUTUxTY3JpcHRFbGVtZW50IHwgbnVsbH1cblx0XHQgKi9cblx0XHRjdXJyZW50U2NyaXB0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdGlmICgnY3VycmVudFNjcmlwdCcgaW4gZG9jdW1lbnQpIHtcblx0XHRcdFx0cmV0dXJuIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQ7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElFMTEgd29ya2Fyb3VuZFxuXHRcdFx0Ly8gd2UnbGwgZ2V0IHRoZSBzcmMgb2YgdGhlIGN1cnJlbnQgc2NyaXB0IGJ5IHBhcnNpbmcgSUUxMSdzIGVycm9yIHN0YWNrIHRyYWNlXG5cdFx0XHQvLyB0aGlzIHdpbGwgbm90IHdvcmsgZm9yIGlubGluZSBzY3JpcHRzXG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcigpO1xuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdC8vIEdldCBmaWxlIHNyYyB1cmwgZnJvbSBzdGFjay4gU3BlY2lmaWNhbGx5IHdvcmtzIHdpdGggdGhlIGZvcm1hdCBvZiBzdGFjayB0cmFjZXMgaW4gSUUuXG5cdFx0XHRcdC8vIEEgc3RhY2sgd2lsbCBsb29rIGxpa2UgdGhpczpcblx0XHRcdFx0Ly9cblx0XHRcdFx0Ly8gRXJyb3Jcblx0XHRcdFx0Ly8gICAgYXQgXy51dGlsLmN1cnJlbnRTY3JpcHQgKGh0dHA6Ly9sb2NhbGhvc3QvY29tcG9uZW50cy9wcmlzbS1jb3JlLmpzOjExOTo1KVxuXHRcdFx0XHQvLyAgICBhdCBHbG9iYWwgY29kZSAoaHR0cDovL2xvY2FsaG9zdC9jb21wb25lbnRzL3ByaXNtLWNvcmUuanM6NjA2OjEpXG5cblx0XHRcdFx0dmFyIHNyYyA9ICgvYXQgW14oXFxyXFxuXSpcXCgoLiopOi4rOi4rXFwpJC9pLmV4ZWMoZXJyLnN0YWNrKSB8fCBbXSlbMV07XG5cdFx0XHRcdGlmIChzcmMpIHtcblx0XHRcdFx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTtcblx0XHRcdFx0XHRmb3IgKHZhciBpIGluIHNjcmlwdHMpIHtcblx0XHRcdFx0XHRcdGlmIChzY3JpcHRzW2ldLnNyYyA9PSBzcmMpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHNjcmlwdHNbaV07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRsYW5ndWFnZXM6IHtcblx0XHRleHRlbmQ6IGZ1bmN0aW9uIChpZCwgcmVkZWYpIHtcblx0XHRcdHZhciBsYW5nID0gXy51dGlsLmNsb25lKF8ubGFuZ3VhZ2VzW2lkXSk7XG5cblx0XHRcdGZvciAodmFyIGtleSBpbiByZWRlZikge1xuXHRcdFx0XHRsYW5nW2tleV0gPSByZWRlZltrZXldO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbGFuZztcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogSW5zZXJ0IGEgdG9rZW4gYmVmb3JlIGFub3RoZXIgdG9rZW4gaW4gYSBsYW5ndWFnZSBsaXRlcmFsXG5cdFx0ICogQXMgdGhpcyBuZWVkcyB0byByZWNyZWF0ZSB0aGUgb2JqZWN0ICh3ZSBjYW5ub3QgYWN0dWFsbHkgaW5zZXJ0IGJlZm9yZSBrZXlzIGluIG9iamVjdCBsaXRlcmFscyksXG5cdFx0ICogd2UgY2Fubm90IGp1c3QgcHJvdmlkZSBhbiBvYmplY3QsIHdlIG5lZWQgYW4gb2JqZWN0IGFuZCBhIGtleS5cblx0XHQgKiBAcGFyYW0gaW5zaWRlIFRoZSBrZXkgKG9yIGxhbmd1YWdlIGlkKSBvZiB0aGUgcGFyZW50XG5cdFx0ICogQHBhcmFtIGJlZm9yZSBUaGUga2V5IHRvIGluc2VydCBiZWZvcmUuXG5cdFx0ICogQHBhcmFtIGluc2VydCBPYmplY3Qgd2l0aCB0aGUga2V5L3ZhbHVlIHBhaXJzIHRvIGluc2VydFxuXHRcdCAqIEBwYXJhbSByb290IFRoZSBvYmplY3QgdGhhdCBjb250YWlucyBgaW5zaWRlYC4gSWYgZXF1YWwgdG8gUHJpc20ubGFuZ3VhZ2VzLCBpdCBjYW4gYmUgb21pdHRlZC5cblx0XHQgKi9cblx0XHRpbnNlcnRCZWZvcmU6IGZ1bmN0aW9uIChpbnNpZGUsIGJlZm9yZSwgaW5zZXJ0LCByb290KSB7XG5cdFx0XHRyb290ID0gcm9vdCB8fCBfLmxhbmd1YWdlcztcblx0XHRcdHZhciBncmFtbWFyID0gcm9vdFtpbnNpZGVdO1xuXHRcdFx0dmFyIHJldCA9IHt9O1xuXG5cdFx0XHRmb3IgKHZhciB0b2tlbiBpbiBncmFtbWFyKSB7XG5cdFx0XHRcdGlmIChncmFtbWFyLmhhc093blByb3BlcnR5KHRva2VuKSkge1xuXG5cdFx0XHRcdFx0aWYgKHRva2VuID09IGJlZm9yZSkge1xuXHRcdFx0XHRcdFx0Zm9yICh2YXIgbmV3VG9rZW4gaW4gaW5zZXJ0KSB7XG5cdFx0XHRcdFx0XHRcdGlmIChpbnNlcnQuaGFzT3duUHJvcGVydHkobmV3VG9rZW4pKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0W25ld1Rva2VuXSA9IGluc2VydFtuZXdUb2tlbl07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBEbyBub3QgaW5zZXJ0IHRva2VuIHdoaWNoIGFsc28gb2NjdXIgaW4gaW5zZXJ0LiBTZWUgIzE1MjVcblx0XHRcdFx0XHRpZiAoIWluc2VydC5oYXNPd25Qcm9wZXJ0eSh0b2tlbikpIHtcblx0XHRcdFx0XHRcdHJldFt0b2tlbl0gPSBncmFtbWFyW3Rva2VuXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dmFyIG9sZCA9IHJvb3RbaW5zaWRlXTtcblx0XHRcdHJvb3RbaW5zaWRlXSA9IHJldDtcblxuXHRcdFx0Ly8gVXBkYXRlIHJlZmVyZW5jZXMgaW4gb3RoZXIgbGFuZ3VhZ2UgZGVmaW5pdGlvbnNcblx0XHRcdF8ubGFuZ3VhZ2VzLkRGUyhfLmxhbmd1YWdlcywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuXHRcdFx0XHRpZiAodmFsdWUgPT09IG9sZCAmJiBrZXkgIT0gaW5zaWRlKSB7XG5cdFx0XHRcdFx0dGhpc1trZXldID0gcmV0O1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9LFxuXG5cdFx0Ly8gVHJhdmVyc2UgYSBsYW5ndWFnZSBkZWZpbml0aW9uIHdpdGggRGVwdGggRmlyc3QgU2VhcmNoXG5cdFx0REZTOiBmdW5jdGlvbiBERlMobywgY2FsbGJhY2ssIHR5cGUsIHZpc2l0ZWQpIHtcblx0XHRcdHZpc2l0ZWQgPSB2aXNpdGVkIHx8IHt9O1xuXG5cdFx0XHR2YXIgb2JqSWQgPSBfLnV0aWwub2JqSWQ7XG5cblx0XHRcdGZvciAodmFyIGkgaW4gbykge1xuXHRcdFx0XHRpZiAoby5oYXNPd25Qcm9wZXJ0eShpKSkge1xuXHRcdFx0XHRcdGNhbGxiYWNrLmNhbGwobywgaSwgb1tpXSwgdHlwZSB8fCBpKTtcblxuXHRcdFx0XHRcdHZhciBwcm9wZXJ0eSA9IG9baV0sXG5cdFx0XHRcdFx0ICAgIHByb3BlcnR5VHlwZSA9IF8udXRpbC50eXBlKHByb3BlcnR5KTtcblxuXHRcdFx0XHRcdGlmIChwcm9wZXJ0eVR5cGUgPT09ICdPYmplY3QnICYmICF2aXNpdGVkW29iaklkKHByb3BlcnR5KV0pIHtcblx0XHRcdFx0XHRcdHZpc2l0ZWRbb2JqSWQocHJvcGVydHkpXSA9IHRydWU7XG5cdFx0XHRcdFx0XHRERlMocHJvcGVydHksIGNhbGxiYWNrLCBudWxsLCB2aXNpdGVkKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSBpZiAocHJvcGVydHlUeXBlID09PSAnQXJyYXknICYmICF2aXNpdGVkW29iaklkKHByb3BlcnR5KV0pIHtcblx0XHRcdFx0XHRcdHZpc2l0ZWRbb2JqSWQocHJvcGVydHkpXSA9IHRydWU7XG5cdFx0XHRcdFx0XHRERlMocHJvcGVydHksIGNhbGxiYWNrLCBpLCB2aXNpdGVkKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdHBsdWdpbnM6IHt9LFxuXG5cdGhpZ2hsaWdodEFsbDogZnVuY3Rpb24oYXN5bmMsIGNhbGxiYWNrKSB7XG5cdFx0Xy5oaWdobGlnaHRBbGxVbmRlcihkb2N1bWVudCwgYXN5bmMsIGNhbGxiYWNrKTtcblx0fSxcblxuXHRoaWdobGlnaHRBbGxVbmRlcjogZnVuY3Rpb24oY29udGFpbmVyLCBhc3luYywgY2FsbGJhY2spIHtcblx0XHR2YXIgZW52ID0ge1xuXHRcdFx0Y2FsbGJhY2s6IGNhbGxiYWNrLFxuXHRcdFx0Y29udGFpbmVyOiBjb250YWluZXIsXG5cdFx0XHRzZWxlY3RvcjogJ2NvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdLCBbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIGNvZGUsIGNvZGVbY2xhc3MqPVwibGFuZy1cIl0sIFtjbGFzcyo9XCJsYW5nLVwiXSBjb2RlJ1xuXHRcdH07XG5cblx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLWhpZ2hsaWdodGFsbCcsIGVudik7XG5cblx0XHRlbnYuZWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoZW52LmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKGVudi5zZWxlY3RvcikpO1xuXG5cdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS1hbGwtZWxlbWVudHMtaGlnaGxpZ2h0JywgZW52KTtcblxuXHRcdGZvciAodmFyIGkgPSAwLCBlbGVtZW50OyBlbGVtZW50ID0gZW52LmVsZW1lbnRzW2krK107KSB7XG5cdFx0XHRfLmhpZ2hsaWdodEVsZW1lbnQoZWxlbWVudCwgYXN5bmMgPT09IHRydWUsIGVudi5jYWxsYmFjayk7XG5cdFx0fVxuXHR9LFxuXG5cdGhpZ2hsaWdodEVsZW1lbnQ6IGZ1bmN0aW9uKGVsZW1lbnQsIGFzeW5jLCBjYWxsYmFjaykge1xuXHRcdC8vIEZpbmQgbGFuZ3VhZ2Vcblx0XHR2YXIgbGFuZ3VhZ2UgPSBfLnV0aWwuZ2V0TGFuZ3VhZ2UoZWxlbWVudCk7XG5cdFx0dmFyIGdyYW1tYXIgPSBfLmxhbmd1YWdlc1tsYW5ndWFnZV07XG5cblx0XHQvLyBTZXQgbGFuZ3VhZ2Ugb24gdGhlIGVsZW1lbnQsIGlmIG5vdCBwcmVzZW50XG5cdFx0ZWxlbWVudC5jbGFzc05hbWUgPSBlbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKGxhbmcsICcnKS5yZXBsYWNlKC9cXHMrL2csICcgJykgKyAnIGxhbmd1YWdlLScgKyBsYW5ndWFnZTtcblxuXHRcdC8vIFNldCBsYW5ndWFnZSBvbiB0aGUgcGFyZW50LCBmb3Igc3R5bGluZ1xuXHRcdHZhciBwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG5cdFx0aWYgKHBhcmVudCAmJiBwYXJlbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3ByZScpIHtcblx0XHRcdHBhcmVudC5jbGFzc05hbWUgPSBwYXJlbnQuY2xhc3NOYW1lLnJlcGxhY2UobGFuZywgJycpLnJlcGxhY2UoL1xccysvZywgJyAnKSArICcgbGFuZ3VhZ2UtJyArIGxhbmd1YWdlO1xuXHRcdH1cblxuXHRcdHZhciBjb2RlID0gZWxlbWVudC50ZXh0Q29udGVudDtcblxuXHRcdHZhciBlbnYgPSB7XG5cdFx0XHRlbGVtZW50OiBlbGVtZW50LFxuXHRcdFx0bGFuZ3VhZ2U6IGxhbmd1YWdlLFxuXHRcdFx0Z3JhbW1hcjogZ3JhbW1hcixcblx0XHRcdGNvZGU6IGNvZGVcblx0XHR9O1xuXG5cdFx0ZnVuY3Rpb24gaW5zZXJ0SGlnaGxpZ2h0ZWRDb2RlKGhpZ2hsaWdodGVkQ29kZSkge1xuXHRcdFx0ZW52LmhpZ2hsaWdodGVkQ29kZSA9IGhpZ2hsaWdodGVkQ29kZTtcblxuXHRcdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS1pbnNlcnQnLCBlbnYpO1xuXG5cdFx0XHRlbnYuZWxlbWVudC5pbm5lckhUTUwgPSBlbnYuaGlnaGxpZ2h0ZWRDb2RlO1xuXG5cdFx0XHRfLmhvb2tzLnJ1bignYWZ0ZXItaGlnaGxpZ2h0JywgZW52KTtcblx0XHRcdF8uaG9va3MucnVuKCdjb21wbGV0ZScsIGVudik7XG5cdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjay5jYWxsKGVudi5lbGVtZW50KTtcblx0XHR9XG5cblx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLXNhbml0eS1jaGVjaycsIGVudik7XG5cblx0XHRpZiAoIWVudi5jb2RlKSB7XG5cdFx0XHRfLmhvb2tzLnJ1bignY29tcGxldGUnLCBlbnYpO1xuXHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2suY2FsbChlbnYuZWxlbWVudCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS1oaWdobGlnaHQnLCBlbnYpO1xuXG5cdFx0aWYgKCFlbnYuZ3JhbW1hcikge1xuXHRcdFx0aW5zZXJ0SGlnaGxpZ2h0ZWRDb2RlKF8udXRpbC5lbmNvZGUoZW52LmNvZGUpKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoYXN5bmMgJiYgX3NlbGYuV29ya2VyKSB7XG5cdFx0XHR2YXIgd29ya2VyID0gbmV3IFdvcmtlcihfLmZpbGVuYW1lKTtcblxuXHRcdFx0d29ya2VyLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2dCkge1xuXHRcdFx0XHRpbnNlcnRIaWdobGlnaHRlZENvZGUoZXZ0LmRhdGEpO1xuXHRcdFx0fTtcblxuXHRcdFx0d29ya2VyLnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0bGFuZ3VhZ2U6IGVudi5sYW5ndWFnZSxcblx0XHRcdFx0Y29kZTogZW52LmNvZGUsXG5cdFx0XHRcdGltbWVkaWF0ZUNsb3NlOiB0cnVlXG5cdFx0XHR9KSk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0aW5zZXJ0SGlnaGxpZ2h0ZWRDb2RlKF8uaGlnaGxpZ2h0KGVudi5jb2RlLCBlbnYuZ3JhbW1hciwgZW52Lmxhbmd1YWdlKSk7XG5cdFx0fVxuXHR9LFxuXG5cdGhpZ2hsaWdodDogZnVuY3Rpb24gKHRleHQsIGdyYW1tYXIsIGxhbmd1YWdlKSB7XG5cdFx0dmFyIGVudiA9IHtcblx0XHRcdGNvZGU6IHRleHQsXG5cdFx0XHRncmFtbWFyOiBncmFtbWFyLFxuXHRcdFx0bGFuZ3VhZ2U6IGxhbmd1YWdlXG5cdFx0fTtcblx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLXRva2VuaXplJywgZW52KTtcblx0XHRlbnYudG9rZW5zID0gXy50b2tlbml6ZShlbnYuY29kZSwgZW52LmdyYW1tYXIpO1xuXHRcdF8uaG9va3MucnVuKCdhZnRlci10b2tlbml6ZScsIGVudik7XG5cdFx0cmV0dXJuIFRva2VuLnN0cmluZ2lmeShfLnV0aWwuZW5jb2RlKGVudi50b2tlbnMpLCBlbnYubGFuZ3VhZ2UpO1xuXHR9LFxuXG5cdHRva2VuaXplOiBmdW5jdGlvbih0ZXh0LCBncmFtbWFyKSB7XG5cdFx0dmFyIHJlc3QgPSBncmFtbWFyLnJlc3Q7XG5cdFx0aWYgKHJlc3QpIHtcblx0XHRcdGZvciAodmFyIHRva2VuIGluIHJlc3QpIHtcblx0XHRcdFx0Z3JhbW1hclt0b2tlbl0gPSByZXN0W3Rva2VuXTtcblx0XHRcdH1cblxuXHRcdFx0ZGVsZXRlIGdyYW1tYXIucmVzdDtcblx0XHR9XG5cblx0XHR2YXIgdG9rZW5MaXN0ID0gbmV3IExpbmtlZExpc3QoKTtcblx0XHRhZGRBZnRlcih0b2tlbkxpc3QsIHRva2VuTGlzdC5oZWFkLCB0ZXh0KTtcblxuXHRcdG1hdGNoR3JhbW1hcih0ZXh0LCB0b2tlbkxpc3QsIGdyYW1tYXIsIHRva2VuTGlzdC5oZWFkLCAwKTtcblxuXHRcdHJldHVybiB0b0FycmF5KHRva2VuTGlzdCk7XG5cdH0sXG5cblx0aG9va3M6IHtcblx0XHRhbGw6IHt9LFxuXG5cdFx0YWRkOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2spIHtcblx0XHRcdHZhciBob29rcyA9IF8uaG9va3MuYWxsO1xuXG5cdFx0XHRob29rc1tuYW1lXSA9IGhvb2tzW25hbWVdIHx8IFtdO1xuXG5cdFx0XHRob29rc1tuYW1lXS5wdXNoKGNhbGxiYWNrKTtcblx0XHR9LFxuXG5cdFx0cnVuOiBmdW5jdGlvbiAobmFtZSwgZW52KSB7XG5cdFx0XHR2YXIgY2FsbGJhY2tzID0gXy5ob29rcy5hbGxbbmFtZV07XG5cblx0XHRcdGlmICghY2FsbGJhY2tzIHx8ICFjYWxsYmFja3MubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Zm9yICh2YXIgaT0wLCBjYWxsYmFjazsgY2FsbGJhY2sgPSBjYWxsYmFja3NbaSsrXTspIHtcblx0XHRcdFx0Y2FsbGJhY2soZW52KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0VG9rZW46IFRva2VuXG59O1xuXG5fc2VsZi5QcmlzbSA9IF87XG5cbmZ1bmN0aW9uIFRva2VuKHR5cGUsIGNvbnRlbnQsIGFsaWFzLCBtYXRjaGVkU3RyLCBncmVlZHkpIHtcblx0dGhpcy50eXBlID0gdHlwZTtcblx0dGhpcy5jb250ZW50ID0gY29udGVudDtcblx0dGhpcy5hbGlhcyA9IGFsaWFzO1xuXHQvLyBDb3B5IG9mIHRoZSBmdWxsIHN0cmluZyB0aGlzIHRva2VuIHdhcyBjcmVhdGVkIGZyb21cblx0dGhpcy5sZW5ndGggPSAobWF0Y2hlZFN0ciB8fCAnJykubGVuZ3RofDA7XG5cdHRoaXMuZ3JlZWR5ID0gISFncmVlZHk7XG59XG5cblRva2VuLnN0cmluZ2lmeSA9IGZ1bmN0aW9uIHN0cmluZ2lmeShvLCBsYW5ndWFnZSkge1xuXHRpZiAodHlwZW9mIG8gPT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gbztcblx0fVxuXHRpZiAoQXJyYXkuaXNBcnJheShvKSkge1xuXHRcdHZhciBzID0gJyc7XG5cdFx0by5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRzICs9IHN0cmluZ2lmeShlLCBsYW5ndWFnZSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHM7XG5cdH1cblxuXHR2YXIgZW52ID0ge1xuXHRcdHR5cGU6IG8udHlwZSxcblx0XHRjb250ZW50OiBzdHJpbmdpZnkoby5jb250ZW50LCBsYW5ndWFnZSksXG5cdFx0dGFnOiAnc3BhbicsXG5cdFx0Y2xhc3NlczogWyd0b2tlbicsIG8udHlwZV0sXG5cdFx0YXR0cmlidXRlczoge30sXG5cdFx0bGFuZ3VhZ2U6IGxhbmd1YWdlXG5cdH07XG5cblx0dmFyIGFsaWFzZXMgPSBvLmFsaWFzO1xuXHRpZiAoYWxpYXNlcykge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KGFsaWFzZXMpKSB7XG5cdFx0XHRBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShlbnYuY2xhc3NlcywgYWxpYXNlcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVudi5jbGFzc2VzLnB1c2goYWxpYXNlcyk7XG5cdFx0fVxuXHR9XG5cblx0Xy5ob29rcy5ydW4oJ3dyYXAnLCBlbnYpO1xuXG5cdHZhciBhdHRyaWJ1dGVzID0gJyc7XG5cdGZvciAodmFyIG5hbWUgaW4gZW52LmF0dHJpYnV0ZXMpIHtcblx0XHRhdHRyaWJ1dGVzICs9ICcgJyArIG5hbWUgKyAnPVwiJyArIChlbnYuYXR0cmlidXRlc1tuYW1lXSB8fCAnJykucmVwbGFjZSgvXCIvZywgJyZxdW90OycpICsgJ1wiJztcblx0fVxuXG5cdHJldHVybiAnPCcgKyBlbnYudGFnICsgJyBjbGFzcz1cIicgKyBlbnYuY2xhc3Nlcy5qb2luKCcgJykgKyAnXCInICsgYXR0cmlidXRlcyArICc+JyArIGVudi5jb250ZW50ICsgJzwvJyArIGVudi50YWcgKyAnPic7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XG4gKiBAcGFyYW0ge0xpbmtlZExpc3Q8c3RyaW5nIHwgVG9rZW4+fSB0b2tlbkxpc3RcbiAqIEBwYXJhbSB7YW55fSBncmFtbWFyXG4gKiBAcGFyYW0ge0xpbmtlZExpc3ROb2RlPHN0cmluZyB8IFRva2VuPn0gc3RhcnROb2RlXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnRQb3NcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29uZXNob3Q9ZmFsc2VdXG4gKiBAcGFyYW0ge3N0cmluZ30gW3RhcmdldF1cbiAqL1xuZnVuY3Rpb24gbWF0Y2hHcmFtbWFyKHRleHQsIHRva2VuTGlzdCwgZ3JhbW1hciwgc3RhcnROb2RlLCBzdGFydFBvcywgb25lc2hvdCwgdGFyZ2V0KSB7XG5cdGZvciAodmFyIHRva2VuIGluIGdyYW1tYXIpIHtcblx0XHRpZiAoIWdyYW1tYXIuaGFzT3duUHJvcGVydHkodG9rZW4pIHx8ICFncmFtbWFyW3Rva2VuXSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dmFyIHBhdHRlcm5zID0gZ3JhbW1hclt0b2tlbl07XG5cdFx0cGF0dGVybnMgPSBBcnJheS5pc0FycmF5KHBhdHRlcm5zKSA/IHBhdHRlcm5zIDogW3BhdHRlcm5zXTtcblxuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgcGF0dGVybnMubGVuZ3RoOyArK2opIHtcblx0XHRcdGlmICh0YXJnZXQgJiYgdGFyZ2V0ID09IHRva2VuICsgJywnICsgaikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBwYXR0ZXJuID0gcGF0dGVybnNbal0sXG5cdFx0XHRcdGluc2lkZSA9IHBhdHRlcm4uaW5zaWRlLFxuXHRcdFx0XHRsb29rYmVoaW5kID0gISFwYXR0ZXJuLmxvb2tiZWhpbmQsXG5cdFx0XHRcdGdyZWVkeSA9ICEhcGF0dGVybi5ncmVlZHksXG5cdFx0XHRcdGxvb2tiZWhpbmRMZW5ndGggPSAwLFxuXHRcdFx0XHRhbGlhcyA9IHBhdHRlcm4uYWxpYXM7XG5cblx0XHRcdGlmIChncmVlZHkgJiYgIXBhdHRlcm4ucGF0dGVybi5nbG9iYWwpIHtcblx0XHRcdFx0Ly8gV2l0aG91dCB0aGUgZ2xvYmFsIGZsYWcsIGxhc3RJbmRleCB3b24ndCB3b3JrXG5cdFx0XHRcdHZhciBmbGFncyA9IHBhdHRlcm4ucGF0dGVybi50b1N0cmluZygpLm1hdGNoKC9baW1zdXldKiQvKVswXTtcblx0XHRcdFx0cGF0dGVybi5wYXR0ZXJuID0gUmVnRXhwKHBhdHRlcm4ucGF0dGVybi5zb3VyY2UsIGZsYWdzICsgJ2cnKTtcblx0XHRcdH1cblxuXHRcdFx0cGF0dGVybiA9IHBhdHRlcm4ucGF0dGVybiB8fCBwYXR0ZXJuO1xuXG5cdFx0XHRmb3IgKCAvLyBpdGVyYXRlIHRoZSB0b2tlbiBsaXN0IGFuZCBrZWVwIHRyYWNrIG9mIHRoZSBjdXJyZW50IHRva2VuL3N0cmluZyBwb3NpdGlvblxuXHRcdFx0XHR2YXIgY3VycmVudE5vZGUgPSBzdGFydE5vZGUubmV4dCwgcG9zID0gc3RhcnRQb3M7XG5cdFx0XHRcdGN1cnJlbnROb2RlICE9PSB0b2tlbkxpc3QudGFpbDtcblx0XHRcdFx0cG9zICs9IGN1cnJlbnROb2RlLnZhbHVlLmxlbmd0aCwgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0XG5cdFx0XHQpIHtcblxuXHRcdFx0XHR2YXIgc3RyID0gY3VycmVudE5vZGUudmFsdWU7XG5cblx0XHRcdFx0aWYgKHRva2VuTGlzdC5sZW5ndGggPiB0ZXh0Lmxlbmd0aCkge1xuXHRcdFx0XHRcdC8vIFNvbWV0aGluZyB3ZW50IHRlcnJpYmx5IHdyb25nLCBBQk9SVCwgQUJPUlQhXG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHN0ciBpbnN0YW5jZW9mIFRva2VuKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgcmVtb3ZlQ291bnQgPSAxOyAvLyB0aGlzIGlzIHRoZSB0byBwYXJhbWV0ZXIgb2YgcmVtb3ZlQmV0d2VlblxuXG5cdFx0XHRcdGlmIChncmVlZHkgJiYgY3VycmVudE5vZGUgIT0gdG9rZW5MaXN0LnRhaWwucHJldikge1xuXHRcdFx0XHRcdHBhdHRlcm4ubGFzdEluZGV4ID0gcG9zO1xuXHRcdFx0XHRcdHZhciBtYXRjaCA9IHBhdHRlcm4uZXhlYyh0ZXh0KTtcblx0XHRcdFx0XHRpZiAoIW1hdGNoKSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR2YXIgZnJvbSA9IG1hdGNoLmluZGV4ICsgKGxvb2tiZWhpbmQgJiYgbWF0Y2hbMV0gPyBtYXRjaFsxXS5sZW5ndGggOiAwKTtcblx0XHRcdFx0XHR2YXIgdG8gPSBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aDtcblx0XHRcdFx0XHR2YXIgcCA9IHBvcztcblxuXHRcdFx0XHRcdC8vIGZpbmQgdGhlIG5vZGUgdGhhdCBjb250YWlucyB0aGUgbWF0Y2hcblx0XHRcdFx0XHRwICs9IGN1cnJlbnROb2RlLnZhbHVlLmxlbmd0aDtcblx0XHRcdFx0XHR3aGlsZSAoZnJvbSA+PSBwKSB7XG5cdFx0XHRcdFx0XHRjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLm5leHQ7XG5cdFx0XHRcdFx0XHRwICs9IGN1cnJlbnROb2RlLnZhbHVlLmxlbmd0aDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gYWRqdXN0IHBvcyAoYW5kIHApXG5cdFx0XHRcdFx0cCAtPSBjdXJyZW50Tm9kZS52YWx1ZS5sZW5ndGg7XG5cdFx0XHRcdFx0cG9zID0gcDtcblxuXHRcdFx0XHRcdC8vIHRoZSBjdXJyZW50IG5vZGUgaXMgYSBUb2tlbiwgdGhlbiB0aGUgbWF0Y2ggc3RhcnRzIGluc2lkZSBhbm90aGVyIFRva2VuLCB3aGljaCBpcyBpbnZhbGlkXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnROb2RlLnZhbHVlIGluc3RhbmNlb2YgVG9rZW4pIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIGZpbmQgdGhlIGxhc3Qgbm9kZSB3aGljaCBpcyBhZmZlY3RlZCBieSB0aGlzIG1hdGNoXG5cdFx0XHRcdFx0Zm9yIChcblx0XHRcdFx0XHRcdHZhciBrID0gY3VycmVudE5vZGU7XG5cdFx0XHRcdFx0XHRrICE9PSB0b2tlbkxpc3QudGFpbCAmJiAocCA8IHRvIHx8ICh0eXBlb2Ygay52YWx1ZSA9PT0gJ3N0cmluZycgJiYgIWsucHJldi52YWx1ZS5ncmVlZHkpKTtcblx0XHRcdFx0XHRcdGsgPSBrLm5leHRcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdHJlbW92ZUNvdW50Kys7XG5cdFx0XHRcdFx0XHRwICs9IGsudmFsdWUubGVuZ3RoO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZW1vdmVDb3VudC0tO1xuXG5cdFx0XHRcdFx0Ly8gcmVwbGFjZSB3aXRoIHRoZSBuZXcgbWF0Y2hcblx0XHRcdFx0XHRzdHIgPSB0ZXh0LnNsaWNlKHBvcywgcCk7XG5cdFx0XHRcdFx0bWF0Y2guaW5kZXggLT0gcG9zO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHBhdHRlcm4ubGFzdEluZGV4ID0gMDtcblxuXHRcdFx0XHRcdHZhciBtYXRjaCA9IHBhdHRlcm4uZXhlYyhzdHIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCFtYXRjaCkge1xuXHRcdFx0XHRcdGlmIChvbmVzaG90KSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChsb29rYmVoaW5kKSB7XG5cdFx0XHRcdFx0bG9va2JlaGluZExlbmd0aCA9IG1hdGNoWzFdID8gbWF0Y2hbMV0ubGVuZ3RoIDogMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBmcm9tID0gbWF0Y2guaW5kZXggKyBsb29rYmVoaW5kTGVuZ3RoLFxuXHRcdFx0XHRcdG1hdGNoID0gbWF0Y2hbMF0uc2xpY2UobG9va2JlaGluZExlbmd0aCksXG5cdFx0XHRcdFx0dG8gPSBmcm9tICsgbWF0Y2gubGVuZ3RoLFxuXHRcdFx0XHRcdGJlZm9yZSA9IHN0ci5zbGljZSgwLCBmcm9tKSxcblx0XHRcdFx0XHRhZnRlciA9IHN0ci5zbGljZSh0byk7XG5cblx0XHRcdFx0dmFyIHJlbW92ZUZyb20gPSBjdXJyZW50Tm9kZS5wcmV2O1xuXG5cdFx0XHRcdGlmIChiZWZvcmUpIHtcblx0XHRcdFx0XHRyZW1vdmVGcm9tID0gYWRkQWZ0ZXIodG9rZW5MaXN0LCByZW1vdmVGcm9tLCBiZWZvcmUpO1xuXHRcdFx0XHRcdHBvcyArPSBiZWZvcmUubGVuZ3RoO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmVtb3ZlUmFuZ2UodG9rZW5MaXN0LCByZW1vdmVGcm9tLCByZW1vdmVDb3VudCk7XG5cblx0XHRcdFx0dmFyIHdyYXBwZWQgPSBuZXcgVG9rZW4odG9rZW4sIGluc2lkZSA/IF8udG9rZW5pemUobWF0Y2gsIGluc2lkZSkgOiBtYXRjaCwgYWxpYXMsIG1hdGNoLCBncmVlZHkpO1xuXHRcdFx0XHRjdXJyZW50Tm9kZSA9IGFkZEFmdGVyKHRva2VuTGlzdCwgcmVtb3ZlRnJvbSwgd3JhcHBlZCk7XG5cblx0XHRcdFx0aWYgKGFmdGVyKSB7XG5cdFx0XHRcdFx0YWRkQWZ0ZXIodG9rZW5MaXN0LCBjdXJyZW50Tm9kZSwgYWZ0ZXIpO1xuXHRcdFx0XHR9XG5cblxuXHRcdFx0XHRpZiAocmVtb3ZlQ291bnQgPiAxKVxuXHRcdFx0XHRcdG1hdGNoR3JhbW1hcih0ZXh0LCB0b2tlbkxpc3QsIGdyYW1tYXIsIGN1cnJlbnROb2RlLnByZXYsIHBvcywgdHJ1ZSwgdG9rZW4gKyAnLCcgKyBqKTtcblxuXHRcdFx0XHRpZiAob25lc2hvdClcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBAdHlwZWRlZiBMaW5rZWRMaXN0Tm9kZVxuICogQHByb3BlcnR5IHtUfSB2YWx1ZVxuICogQHByb3BlcnR5IHtMaW5rZWRMaXN0Tm9kZTxUPiB8IG51bGx9IHByZXYgVGhlIHByZXZpb3VzIG5vZGUuXG4gKiBAcHJvcGVydHkge0xpbmtlZExpc3ROb2RlPFQ+IHwgbnVsbH0gbmV4dCBUaGUgbmV4dCBub2RlLlxuICogQHRlbXBsYXRlIFRcbiAqL1xuXG4vKipcbiAqIEB0ZW1wbGF0ZSBUXG4gKi9cbmZ1bmN0aW9uIExpbmtlZExpc3QoKSB7XG5cdC8qKiBAdHlwZSB7TGlua2VkTGlzdE5vZGU8VD59ICovXG5cdHZhciBoZWFkID0geyB2YWx1ZTogbnVsbCwgcHJldjogbnVsbCwgbmV4dDogbnVsbCB9O1xuXHQvKiogQHR5cGUge0xpbmtlZExpc3ROb2RlPFQ+fSAqL1xuXHR2YXIgdGFpbCA9IHsgdmFsdWU6IG51bGwsIHByZXY6IGhlYWQsIG5leHQ6IG51bGwgfTtcblx0aGVhZC5uZXh0ID0gdGFpbDtcblxuXHQvKiogQHR5cGUge0xpbmtlZExpc3ROb2RlPFQ+fSAqL1xuXHR0aGlzLmhlYWQgPSBoZWFkO1xuXHQvKiogQHR5cGUge0xpbmtlZExpc3ROb2RlPFQ+fSAqL1xuXHR0aGlzLnRhaWwgPSB0YWlsO1xuXHR0aGlzLmxlbmd0aCA9IDA7XG59XG5cbi8qKlxuICogQWRkcyBhIG5ldyBub2RlIHdpdGggdGhlIGdpdmVuIHZhbHVlIHRvIHRoZSBsaXN0LlxuICogQHBhcmFtIHtMaW5rZWRMaXN0PFQ+fSBsaXN0XG4gKiBAcGFyYW0ge0xpbmtlZExpc3ROb2RlPFQ+fSBub2RlXG4gKiBAcGFyYW0ge1R9IHZhbHVlXG4gKiBAcmV0dXJucyB7TGlua2VkTGlzdE5vZGU8VD59IFRoZSBhZGRlZCBub2RlLlxuICogQHRlbXBsYXRlIFRcbiAqL1xuZnVuY3Rpb24gYWRkQWZ0ZXIobGlzdCwgbm9kZSwgdmFsdWUpIHtcblx0Ly8gYXNzdW1lcyB0aGF0IG5vZGUgIT0gbGlzdC50YWlsICYmIHZhbHVlcy5sZW5ndGggPj0gMFxuXHR2YXIgbmV4dCA9IG5vZGUubmV4dDtcblxuXHR2YXIgbmV3Tm9kZSA9IHsgdmFsdWU6IHZhbHVlLCBwcmV2OiBub2RlLCBuZXh0OiBuZXh0IH07XG5cdG5vZGUubmV4dCA9IG5ld05vZGU7XG5cdG5leHQucHJldiA9IG5ld05vZGU7XG5cdGxpc3QubGVuZ3RoKys7XG5cblx0cmV0dXJuIG5ld05vZGU7XG59XG4vKipcbiAqIFJlbW92ZXMgYGNvdW50YCBub2RlcyBhZnRlciB0aGUgZ2l2ZW4gbm9kZS4gVGhlIGdpdmVuIG5vZGUgd2lsbCBub3QgYmUgcmVtb3ZlZC5cbiAqIEBwYXJhbSB7TGlua2VkTGlzdDxUPn0gbGlzdFxuICogQHBhcmFtIHtMaW5rZWRMaXN0Tm9kZTxUPn0gbm9kZVxuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XG4gKiBAdGVtcGxhdGUgVFxuICovXG5mdW5jdGlvbiByZW1vdmVSYW5nZShsaXN0LCBub2RlLCBjb3VudCkge1xuXHR2YXIgbmV4dCA9IG5vZGUubmV4dDtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudCAmJiBuZXh0ICE9PSBsaXN0LnRhaWw7IGkrKykge1xuXHRcdG5leHQgPSBuZXh0Lm5leHQ7XG5cdH1cblx0bm9kZS5uZXh0ID0gbmV4dDtcblx0bmV4dC5wcmV2ID0gbm9kZTtcblx0bGlzdC5sZW5ndGggLT0gaTtcbn1cbi8qKlxuICogQHBhcmFtIHtMaW5rZWRMaXN0PFQ+fSBsaXN0XG4gKiBAcmV0dXJucyB7VFtdfVxuICogQHRlbXBsYXRlIFRcbiAqL1xuZnVuY3Rpb24gdG9BcnJheShsaXN0KSB7XG5cdHZhciBhcnJheSA9IFtdO1xuXHR2YXIgbm9kZSA9IGxpc3QuaGVhZC5uZXh0O1xuXHR3aGlsZSAobm9kZSAhPT0gbGlzdC50YWlsKSB7XG5cdFx0YXJyYXkucHVzaChub2RlLnZhbHVlKTtcblx0XHRub2RlID0gbm9kZS5uZXh0O1xuXHR9XG5cdHJldHVybiBhcnJheTtcbn1cblxuXG5pZiAoIV9zZWxmLmRvY3VtZW50KSB7XG5cdGlmICghX3NlbGYuYWRkRXZlbnRMaXN0ZW5lcikge1xuXHRcdC8vIGluIE5vZGUuanNcblx0XHRyZXR1cm4gXztcblx0fVxuXG5cdGlmICghXy5kaXNhYmxlV29ya2VyTWVzc2FnZUhhbmRsZXIpIHtcblx0XHQvLyBJbiB3b3JrZXJcblx0XHRfc2VsZi5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2dCkge1xuXHRcdFx0dmFyIG1lc3NhZ2UgPSBKU09OLnBhcnNlKGV2dC5kYXRhKSxcblx0XHRcdFx0bGFuZyA9IG1lc3NhZ2UubGFuZ3VhZ2UsXG5cdFx0XHRcdGNvZGUgPSBtZXNzYWdlLmNvZGUsXG5cdFx0XHRcdGltbWVkaWF0ZUNsb3NlID0gbWVzc2FnZS5pbW1lZGlhdGVDbG9zZTtcblxuXHRcdFx0X3NlbGYucG9zdE1lc3NhZ2UoXy5oaWdobGlnaHQoY29kZSwgXy5sYW5ndWFnZXNbbGFuZ10sIGxhbmcpKTtcblx0XHRcdGlmIChpbW1lZGlhdGVDbG9zZSkge1xuXHRcdFx0XHRfc2VsZi5jbG9zZSgpO1xuXHRcdFx0fVxuXHRcdH0sIGZhbHNlKTtcblx0fVxuXG5cdHJldHVybiBfO1xufVxuXG4vL0dldCBjdXJyZW50IHNjcmlwdCBhbmQgaGlnaGxpZ2h0XG52YXIgc2NyaXB0ID0gXy51dGlsLmN1cnJlbnRTY3JpcHQoKTtcblxuaWYgKHNjcmlwdCkge1xuXHRfLmZpbGVuYW1lID0gc2NyaXB0LnNyYztcblxuXHRpZiAoc2NyaXB0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1tYW51YWwnKSkge1xuXHRcdF8ubWFudWFsID0gdHJ1ZTtcblx0fVxufVxuXG5mdW5jdGlvbiBoaWdobGlnaHRBdXRvbWF0aWNhbGx5Q2FsbGJhY2soKSB7XG5cdGlmICghXy5tYW51YWwpIHtcblx0XHRfLmhpZ2hsaWdodEFsbCgpO1xuXHR9XG59XG5cbmlmICghXy5tYW51YWwpIHtcblx0Ly8gSWYgdGhlIGRvY3VtZW50IHN0YXRlIGlzIFwibG9hZGluZ1wiLCB0aGVuIHdlJ2xsIHVzZSBET01Db250ZW50TG9hZGVkLlxuXHQvLyBJZiB0aGUgZG9jdW1lbnQgc3RhdGUgaXMgXCJpbnRlcmFjdGl2ZVwiIGFuZCB0aGUgcHJpc20uanMgc2NyaXB0IGlzIGRlZmVycmVkLCB0aGVuIHdlJ2xsIGFsc28gdXNlIHRoZVxuXHQvLyBET01Db250ZW50TG9hZGVkIGV2ZW50IGJlY2F1c2UgdGhlcmUgbWlnaHQgYmUgc29tZSBwbHVnaW5zIG9yIGxhbmd1YWdlcyB3aGljaCBoYXZlIGFsc28gYmVlbiBkZWZlcnJlZCBhbmQgdGhleVxuXHQvLyBtaWdodCB0YWtlIGxvbmdlciBvbmUgYW5pbWF0aW9uIGZyYW1lIHRvIGV4ZWN1dGUgd2hpY2ggY2FuIGNyZWF0ZSBhIHJhY2UgY29uZGl0aW9uIHdoZXJlIG9ubHkgc29tZSBwbHVnaW5zIGhhdmVcblx0Ly8gYmVlbiBsb2FkZWQgd2hlbiBQcmlzbS5oaWdobGlnaHRBbGwoKSBpcyBleGVjdXRlZCwgZGVwZW5kaW5nIG9uIGhvdyBmYXN0IHJlc291cmNlcyBhcmUgbG9hZGVkLlxuXHQvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL1ByaXNtSlMvcHJpc20vaXNzdWVzLzIxMDJcblx0dmFyIHJlYWR5U3RhdGUgPSBkb2N1bWVudC5yZWFkeVN0YXRlO1xuXHRpZiAocmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnIHx8IHJlYWR5U3RhdGUgPT09ICdpbnRlcmFjdGl2ZScgJiYgc2NyaXB0ICYmIHNjcmlwdC5kZWZlcikge1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBoaWdobGlnaHRBdXRvbWF0aWNhbGx5Q2FsbGJhY2spO1xuXHR9IGVsc2Uge1xuXHRcdGlmICh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG5cdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGhpZ2hsaWdodEF1dG9tYXRpY2FsbHlDYWxsYmFjayk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KGhpZ2hsaWdodEF1dG9tYXRpY2FsbHlDYWxsYmFjaywgMTYpO1xuXHRcdH1cblx0fVxufVxuXG5yZXR1cm4gXztcblxufSkoX3NlbGYpO1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0bW9kdWxlLmV4cG9ydHMgPSBQcmlzbTtcbn1cblxuLy8gaGFjayBmb3IgY29tcG9uZW50cyB0byB3b3JrIGNvcnJlY3RseSBpbiBub2RlLmpzXG5pZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0Z2xvYmFsLlByaXNtID0gUHJpc207XG59XG5cblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICBCZWdpbiBwcmlzbS1tYXJrdXAuanNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cCA9IHtcblx0J2NvbW1lbnQnOiAvPCEtLVtcXHNcXFNdKj8tLT4vLFxuXHQncHJvbG9nJzogLzxcXD9bXFxzXFxTXSs/XFw/Pi8sXG5cdCdkb2N0eXBlJzoge1xuXHRcdHBhdHRlcm46IC88IURPQ1RZUEUoPzpbXj5cIidbXFxdXXxcIlteXCJdKlwifCdbXiddKicpKyg/OlxcWyg/Oig/ITwhLS0pW15cIidcXF1dfFwiW15cIl0qXCJ8J1teJ10qJ3w8IS0tW1xcc1xcU10qPy0tPikqXFxdXFxzKik/Pi9pLFxuXHRcdGdyZWVkeTogdHJ1ZVxuXHR9LFxuXHQnY2RhdGEnOiAvPCFcXFtDREFUQVxcW1tcXHNcXFNdKj9dXT4vaSxcblx0J3RhZyc6IHtcblx0XHRwYXR0ZXJuOiAvPFxcLz8oPyFcXGQpW15cXHM+XFwvPSQ8JV0rKD86XFxzKD86XFxzKlteXFxzPlxcLz1dKyg/Olxccyo9XFxzKig/OlwiW15cIl0qXCJ8J1teJ10qJ3xbXlxccydcIj49XSsoPz1bXFxzPl0pKXwoPz1bXFxzLz5dKSkpKyk/XFxzKlxcLz8+L2ksXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3RhZyc6IHtcblx0XHRcdFx0cGF0dGVybjogL148XFwvP1teXFxzPlxcL10rL2ksXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9ePFxcLz8vLFxuXHRcdFx0XHRcdCduYW1lc3BhY2UnOiAvXlteXFxzPlxcLzpdKzovXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQnYXR0ci12YWx1ZSc6IHtcblx0XHRcdFx0cGF0dGVybjogLz1cXHMqKD86XCJbXlwiXSpcInwnW14nXSonfFteXFxzJ1wiPj1dKykvaSxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogW1xuXHRcdFx0XHRcdFx0L149Lyxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0cGF0dGVybjogL14oXFxzKilbXCInXXxbXCInXSQvLFxuXHRcdFx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0J3B1bmN0dWF0aW9uJzogL1xcLz8+Lyxcblx0XHRcdCdhdHRyLW5hbWUnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC9bXlxccz5cXC9dKy8sXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCduYW1lc3BhY2UnOiAvXlteXFxzPlxcLzpdKzovXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH1cblx0fSxcblx0J2VudGl0eSc6IC8mIz9bXFxkYS16XXsxLDh9Oy9pXG59O1xuXG5QcmlzbS5sYW5ndWFnZXMubWFya3VwWyd0YWcnXS5pbnNpZGVbJ2F0dHItdmFsdWUnXS5pbnNpZGVbJ2VudGl0eSddID1cblx0UHJpc20ubGFuZ3VhZ2VzLm1hcmt1cFsnZW50aXR5J107XG5cbi8vIFBsdWdpbiB0byBtYWtlIGVudGl0eSB0aXRsZSBzaG93IHRoZSByZWFsIGVudGl0eSwgaWRlYSBieSBSb21hbiBLb21hcm92XG5QcmlzbS5ob29rcy5hZGQoJ3dyYXAnLCBmdW5jdGlvbihlbnYpIHtcblxuXHRpZiAoZW52LnR5cGUgPT09ICdlbnRpdHknKSB7XG5cdFx0ZW52LmF0dHJpYnV0ZXNbJ3RpdGxlJ10gPSBlbnYuY29udGVudC5yZXBsYWNlKC8mYW1wOy8sICcmJyk7XG5cdH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cC50YWcsICdhZGRJbmxpbmVkJywge1xuXHQvKipcblx0ICogQWRkcyBhbiBpbmxpbmVkIGxhbmd1YWdlIHRvIG1hcmt1cC5cblx0ICpcblx0ICogQW4gZXhhbXBsZSBvZiBhbiBpbmxpbmVkIGxhbmd1YWdlIGlzIENTUyB3aXRoIGA8c3R5bGU+YCB0YWdzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGFnTmFtZSBUaGUgbmFtZSBvZiB0aGUgdGFnIHRoYXQgY29udGFpbnMgdGhlIGlubGluZWQgbGFuZ3VhZ2UuIFRoaXMgbmFtZSB3aWxsIGJlIHRyZWF0ZWQgYXNcblx0ICogY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGxhbmcgVGhlIGxhbmd1YWdlIGtleS5cblx0ICogQGV4YW1wbGVcblx0ICogYWRkSW5saW5lZCgnc3R5bGUnLCAnY3NzJyk7XG5cdCAqL1xuXHR2YWx1ZTogZnVuY3Rpb24gYWRkSW5saW5lZCh0YWdOYW1lLCBsYW5nKSB7XG5cdFx0dmFyIGluY2x1ZGVkQ2RhdGFJbnNpZGUgPSB7fTtcblx0XHRpbmNsdWRlZENkYXRhSW5zaWRlWydsYW5ndWFnZS0nICsgbGFuZ10gPSB7XG5cdFx0XHRwYXR0ZXJuOiAvKF48IVxcW0NEQVRBXFxbKVtcXHNcXFNdKz8oPz1cXF1cXF0+JCkvaSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlc1tsYW5nXVxuXHRcdH07XG5cdFx0aW5jbHVkZWRDZGF0YUluc2lkZVsnY2RhdGEnXSA9IC9ePCFcXFtDREFUQVxcW3xcXF1cXF0+JC9pO1xuXG5cdFx0dmFyIGluc2lkZSA9IHtcblx0XHRcdCdpbmNsdWRlZC1jZGF0YSc6IHtcblx0XHRcdFx0cGF0dGVybjogLzwhXFxbQ0RBVEFcXFtbXFxzXFxTXSo/XFxdXFxdPi9pLFxuXHRcdFx0XHRpbnNpZGU6IGluY2x1ZGVkQ2RhdGFJbnNpZGVcblx0XHRcdH1cblx0XHR9O1xuXHRcdGluc2lkZVsnbGFuZ3VhZ2UtJyArIGxhbmddID0ge1xuXHRcdFx0cGF0dGVybjogL1tcXHNcXFNdKy8sXG5cdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlc1tsYW5nXVxuXHRcdH07XG5cblx0XHR2YXIgZGVmID0ge307XG5cdFx0ZGVmW3RhZ05hbWVdID0ge1xuXHRcdFx0cGF0dGVybjogUmVnRXhwKC8oPF9fW1xcc1xcU10qPz4pKD86PCFcXFtDREFUQVxcW1tcXHNcXFNdKj9cXF1cXF0+XFxzKnxbXFxzXFxTXSkqPyg/PTxcXC9fXz4pLy5zb3VyY2UucmVwbGFjZSgvX18vZywgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGFnTmFtZTsgfSksICdpJyksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBpbnNpZGVcblx0XHR9O1xuXG5cdFx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnbWFya3VwJywgJ2NkYXRhJywgZGVmKTtcblx0fVxufSk7XG5cblByaXNtLmxhbmd1YWdlcy54bWwgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdtYXJrdXAnLCB7fSk7XG5QcmlzbS5sYW5ndWFnZXMuaHRtbCA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXA7XG5QcmlzbS5sYW5ndWFnZXMubWF0aG1sID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cDtcblByaXNtLmxhbmd1YWdlcy5zdmcgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuXG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgQmVnaW4gcHJpc20tY3NzLmpzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbihmdW5jdGlvbiAoUHJpc20pIHtcblxuXHR2YXIgc3RyaW5nID0gLyhcInwnKSg/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvO1xuXG5cdFByaXNtLmxhbmd1YWdlcy5jc3MgPSB7XG5cdFx0J2NvbW1lbnQnOiAvXFwvXFwqW1xcc1xcU10qP1xcKlxcLy8sXG5cdFx0J2F0cnVsZSc6IHtcblx0XHRcdHBhdHRlcm46IC9AW1xcdy1dK1tcXHNcXFNdKj8oPzo7fCg/PVxccypcXHspKS8sXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J3J1bGUnOiAvXkBbXFx3LV0rLyxcblx0XHRcdFx0J3NlbGVjdG9yLWZ1bmN0aW9uLWFyZ3VtZW50Jzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC8oXFxic2VsZWN0b3JcXHMqXFwoKD8hXFxzKlxcKSlcXHMqKSg/OlteKCldfFxcKCg/OlteKCldfFxcKFteKCldKlxcKSkqXFwpKSs/KD89XFxzKlxcKSkvLFxuXHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdFx0YWxpYXM6ICdzZWxlY3Rvcidcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBTZWUgcmVzdCBiZWxvd1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J3VybCc6IHtcblx0XHRcdHBhdHRlcm46IFJlZ0V4cCgndXJsXFxcXCgoPzonICsgc3RyaW5nLnNvdXJjZSArICd8W15cXG5cXHIoKV0qKVxcXFwpJywgJ2knKSxcblx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQnZnVuY3Rpb24nOiAvXnVybC9pLFxuXHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXlxcKHxcXCkkL1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J3NlbGVjdG9yJzogUmVnRXhwKCdbXnt9XFxcXHNdKD86W157fTtcIlxcJ118JyArIHN0cmluZy5zb3VyY2UgKyAnKSo/KD89XFxcXHMqXFxcXHspJyksXG5cdFx0J3N0cmluZyc6IHtcblx0XHRcdHBhdHRlcm46IHN0cmluZyxcblx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdH0sXG5cdFx0J3Byb3BlcnR5JzogL1stX2EtelxceEEwLVxcdUZGRkZdWy1cXHdcXHhBMC1cXHVGRkZGXSooPz1cXHMqOikvaSxcblx0XHQnaW1wb3J0YW50JzogLyFpbXBvcnRhbnRcXGIvaSxcblx0XHQnZnVuY3Rpb24nOiAvWy1hLXowLTldKyg/PVxcKCkvaSxcblx0XHQncHVuY3R1YXRpb24nOiAvWygpe307OixdL1xuXHR9O1xuXG5cdFByaXNtLmxhbmd1YWdlcy5jc3NbJ2F0cnVsZSddLmluc2lkZS5yZXN0ID0gUHJpc20ubGFuZ3VhZ2VzLmNzcztcblxuXHR2YXIgbWFya3VwID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cDtcblx0aWYgKG1hcmt1cCkge1xuXHRcdG1hcmt1cC50YWcuYWRkSW5saW5lZCgnc3R5bGUnLCAnY3NzJyk7XG5cblx0XHRQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdpbnNpZGUnLCAnYXR0ci12YWx1ZScsIHtcblx0XHRcdCdzdHlsZS1hdHRyJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvXFxzKnN0eWxlPShcInwnKSg/OlxcXFxbXFxzXFxTXXwoPyFcXDEpW15cXFxcXSkqXFwxL2ksXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdhdHRyLW5hbWUnOiB7XG5cdFx0XHRcdFx0XHRwYXR0ZXJuOiAvXlxccypzdHlsZS9pLFxuXHRcdFx0XHRcdFx0aW5zaWRlOiBtYXJrdXAudGFnLmluc2lkZVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL15cXHMqPVxccypbJ1wiXXxbJ1wiXVxccyokLyxcblx0XHRcdFx0XHQnYXR0ci12YWx1ZSc6IHtcblx0XHRcdFx0XHRcdHBhdHRlcm46IC8uKy9pLFxuXHRcdFx0XHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuY3NzXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbGlhczogJ2xhbmd1YWdlLWNzcydcblx0XHRcdH1cblx0XHR9LCBtYXJrdXAudGFnKTtcblx0fVxuXG59KFByaXNtKSk7XG5cblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICBCZWdpbiBwcmlzbS1jbGlrZS5qc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG5QcmlzbS5sYW5ndWFnZXMuY2xpa2UgPSB7XG5cdCdjb21tZW50JzogW1xuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXlxcXFxdKVxcL1xcKltcXHNcXFNdKj8oPzpcXCpcXC98JCkvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhefFteXFxcXDpdKVxcL1xcLy4qLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRncmVlZHk6IHRydWVcblx0XHR9XG5cdF0sXG5cdCdzdHJpbmcnOiB7XG5cdFx0cGF0dGVybjogLyhbXCInXSkoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxLyxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0J2NsYXNzLW5hbWUnOiB7XG5cdFx0cGF0dGVybjogLyhcXGIoPzpjbGFzc3xpbnRlcmZhY2V8ZXh0ZW5kc3xpbXBsZW1lbnRzfHRyYWl0fGluc3RhbmNlb2Z8bmV3KVxccyt8XFxiY2F0Y2hcXHMrXFwoKVtcXHcuXFxcXF0rL2ksXG5cdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCdwdW5jdHVhdGlvbic6IC9bLlxcXFxdL1xuXHRcdH1cblx0fSxcblx0J2tleXdvcmQnOiAvXFxiKD86aWZ8ZWxzZXx3aGlsZXxkb3xmb3J8cmV0dXJufGlufGluc3RhbmNlb2Z8ZnVuY3Rpb258bmV3fHRyeXx0aHJvd3xjYXRjaHxmaW5hbGx5fG51bGx8YnJlYWt8Y29udGludWUpXFxiLyxcblx0J2Jvb2xlYW4nOiAvXFxiKD86dHJ1ZXxmYWxzZSlcXGIvLFxuXHQnZnVuY3Rpb24nOiAvXFx3Kyg/PVxcKCkvLFxuXHQnbnVtYmVyJzogL1xcYjB4W1xcZGEtZl0rXFxifCg/OlxcYlxcZCtcXC4/XFxkKnxcXEJcXC5cXGQrKSg/OmVbKy1dP1xcZCspPy9pLFxuXHQnb3BlcmF0b3InOiAvWzw+XT0/fFshPV09Pz0/fC0tP3xcXCtcXCs/fCYmP3xcXHxcXHw/fFs/Ki9+XiVdLyxcblx0J3B1bmN0dWF0aW9uJzogL1t7fVtcXF07KCksLjpdL1xufTtcblxuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgIEJlZ2luIHByaXNtLWphdmFzY3JpcHQuanNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHQgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcblx0J2NsYXNzLW5hbWUnOiBbXG5cdFx0UHJpc20ubGFuZ3VhZ2VzLmNsaWtlWydjbGFzcy1uYW1lJ10sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhefFteJFxcd1xceEEwLVxcdUZGRkZdKVtfJEEtWlxceEEwLVxcdUZGRkZdWyRcXHdcXHhBMC1cXHVGRkZGXSooPz1cXC4oPzpwcm90b3R5cGV8Y29uc3RydWN0b3IpKS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fVxuXHRdLFxuXHQna2V5d29yZCc6IFtcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKCg/Ol58fSlcXHMqKSg/OmNhdGNofGZpbmFsbHkpXFxiLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXi5dfFxcLlxcLlxcLlxccyopXFxiKD86YXN8YXN5bmMoPz1cXHMqKD86ZnVuY3Rpb25cXGJ8XFwofFskXFx3XFx4QTAtXFx1RkZGRl18JCkpfGF3YWl0fGJyZWFrfGNhc2V8Y2xhc3N8Y29uc3R8Y29udGludWV8ZGVidWdnZXJ8ZGVmYXVsdHxkZWxldGV8ZG98ZWxzZXxlbnVtfGV4cG9ydHxleHRlbmRzfGZvcnxmcm9tfGZ1bmN0aW9ufGdldHxpZnxpbXBsZW1lbnRzfGltcG9ydHxpbnxpbnN0YW5jZW9mfGludGVyZmFjZXxsZXR8bmV3fG51bGx8b2Z8cGFja2FnZXxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmV0dXJufHNldHxzdGF0aWN8c3VwZXJ8c3dpdGNofHRoaXN8dGhyb3d8dHJ5fHR5cGVvZnx1bmRlZmluZWR8dmFyfHZvaWR8d2hpbGV8d2l0aHx5aWVsZClcXGIvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH0sXG5cdF0sXG5cdCdudW1iZXInOiAvXFxiKD86KD86MFt4WF0oPzpbXFxkQS1GYS1mXSg/Ol9bXFxkQS1GYS1mXSk/KSt8MFtiQl0oPzpbMDFdKD86X1swMV0pPykrfDBbb09dKD86WzAtN10oPzpfWzAtN10pPykrKW4/fCg/OlxcZCg/Ol9cXGQpPykrbnxOYU58SW5maW5pdHkpXFxifCg/OlxcYig/OlxcZCg/Ol9cXGQpPykrXFwuPyg/OlxcZCg/Ol9cXGQpPykqfFxcQlxcLig/OlxcZCg/Ol9cXGQpPykrKSg/OltFZV1bKy1dPyg/OlxcZCg/Ol9cXGQpPykrKT8vLFxuXHQvLyBBbGxvdyBmb3IgYWxsIG5vbi1BU0NJSSBjaGFyYWN0ZXJzIChTZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjAwODQ0NClcblx0J2Z1bmN0aW9uJzogLyM/W18kYS16QS1aXFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKig/PVxccyooPzpcXC5cXHMqKD86YXBwbHl8YmluZHxjYWxsKVxccyopP1xcKCkvLFxuXHQnb3BlcmF0b3InOiAvLS18XFwrXFwrfFxcKlxcKj0/fD0+fCYmfFxcfFxcfHxbIT1dPT18PDw9P3w+Pj4/PT98Wy0rKi8lJnxeIT08Pl09P3xcXC57M318XFw/Wy4/XT98W346XS9cbn0pO1xuXG5QcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFsnY2xhc3MtbmFtZSddWzBdLnBhdHRlcm4gPSAvKFxcYig/OmNsYXNzfGludGVyZmFjZXxleHRlbmRzfGltcGxlbWVudHN8aW5zdGFuY2VvZnxuZXcpXFxzKylbXFx3LlxcXFxdKy87XG5cblByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2phdmFzY3JpcHQnLCAna2V5d29yZCcsIHtcblx0J3JlZ2V4Jzoge1xuXHRcdHBhdHRlcm46IC8oKD86XnxbXiRcXHdcXHhBMC1cXHVGRkZGLlwiJ1xcXSlcXHNdKVxccyopXFwvKD86XFxbKD86W15cXF1cXFxcXFxyXFxuXXxcXFxcLikqXXxcXFxcLnxbXi9cXFxcXFxbXFxyXFxuXSkrXFwvW2dpbXl1c117MCw2fSg/PSg/Olxcc3xcXC9cXCpbXFxzXFxTXSo/XFwqXFwvKSooPzokfFtcXHJcXG4sLjs6fSlcXF1dfFxcL1xcLykpLyxcblx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdGdyZWVkeTogdHJ1ZVxuXHR9LFxuXHQvLyBUaGlzIG11c3QgYmUgZGVjbGFyZWQgYmVmb3JlIGtleXdvcmQgYmVjYXVzZSB3ZSB1c2UgXCJmdW5jdGlvblwiIGluc2lkZSB0aGUgbG9vay1mb3J3YXJkXG5cdCdmdW5jdGlvbi12YXJpYWJsZSc6IHtcblx0XHRwYXR0ZXJuOiAvIz9bXyRhLXpBLVpcXHhBMC1cXHVGRkZGXVskXFx3XFx4QTAtXFx1RkZGRl0qKD89XFxzKls9Ol1cXHMqKD86YXN5bmNcXHMqKT8oPzpcXGJmdW5jdGlvblxcYnwoPzpcXCgoPzpbXigpXXxcXChbXigpXSpcXCkpKlxcKXxbXyRhLXpBLVpcXHhBMC1cXHVGRkZGXVskXFx3XFx4QTAtXFx1RkZGRl0qKVxccyo9PikpLyxcblx0XHRhbGlhczogJ2Z1bmN0aW9uJ1xuXHR9LFxuXHQncGFyYW1ldGVyJzogW1xuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oZnVuY3Rpb24oPzpcXHMrW18kQS1aYS16XFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKik/XFxzKlxcKFxccyopKD8hXFxzKSg/OlteKCldfFxcKFteKCldKlxcKSkrPyg/PVxccypcXCkpLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvW18kYS16XFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKig/PVxccyo9PikvaSxcblx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oXFwoXFxzKikoPyFcXHMpKD86W14oKV18XFwoW14oKV0qXFwpKSs/KD89XFxzKlxcKVxccyo9PikvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oKD86XFxifFxcc3xeKSg/ISg/OmFzfGFzeW5jfGF3YWl0fGJyZWFrfGNhc2V8Y2F0Y2h8Y2xhc3N8Y29uc3R8Y29udGludWV8ZGVidWdnZXJ8ZGVmYXVsdHxkZWxldGV8ZG98ZWxzZXxlbnVtfGV4cG9ydHxleHRlbmRzfGZpbmFsbHl8Zm9yfGZyb218ZnVuY3Rpb258Z2V0fGlmfGltcGxlbWVudHN8aW1wb3J0fGlufGluc3RhbmNlb2Z8aW50ZXJmYWNlfGxldHxuZXd8bnVsbHxvZnxwYWNrYWdlfHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xyZXR1cm58c2V0fHN0YXRpY3xzdXBlcnxzd2l0Y2h8dGhpc3x0aHJvd3x0cnl8dHlwZW9mfHVuZGVmaW5lZHx2YXJ8dm9pZHx3aGlsZXx3aXRofHlpZWxkKSg/IVskXFx3XFx4QTAtXFx1RkZGRl0pKSg/OltfJEEtWmEtelxceEEwLVxcdUZGRkZdWyRcXHdcXHhBMC1cXHVGRkZGXSpcXHMqKVxcKFxccyopKD8hXFxzKSg/OlteKCldfFxcKFteKCldKlxcKSkrPyg/PVxccypcXClcXHMqXFx7KS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdH1cblx0XSxcblx0J2NvbnN0YW50JzogL1xcYltBLVpdKD86W0EtWl9dfFxcZHg/KSpcXGIvXG59KTtcblxuUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnamF2YXNjcmlwdCcsICdzdHJpbmcnLCB7XG5cdCd0ZW1wbGF0ZS1zdHJpbmcnOiB7XG5cdFx0cGF0dGVybjogL2AoPzpcXFxcW1xcc1xcU118XFwkeyg/Oltee31dfHsoPzpbXnt9XXx7W159XSp9KSp9KSt9fCg/IVxcJHspW15cXFxcYF0pKmAvLFxuXHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCd0ZW1wbGF0ZS1wdW5jdHVhdGlvbic6IHtcblx0XHRcdFx0cGF0dGVybjogL15gfGAkLyxcblx0XHRcdFx0YWxpYXM6ICdzdHJpbmcnXG5cdFx0XHR9LFxuXHRcdFx0J2ludGVycG9sYXRpb24nOiB7XG5cdFx0XHRcdHBhdHRlcm46IC8oKD86XnxbXlxcXFxdKSg/OlxcXFx7Mn0pKilcXCR7KD86W157fV18eyg/Oltee31dfHtbXn1dKn0pKn0pK30vLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQnaW50ZXJwb2xhdGlvbi1wdW5jdHVhdGlvbic6IHtcblx0XHRcdFx0XHRcdHBhdHRlcm46IC9eXFwke3x9JC8sXG5cdFx0XHRcdFx0XHRhbGlhczogJ3B1bmN0dWF0aW9uJ1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0cmVzdDogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdCdzdHJpbmcnOiAvW1xcc1xcU10rL1xuXHRcdH1cblx0fVxufSk7XG5cbmlmIChQcmlzbS5sYW5ndWFnZXMubWFya3VwKSB7XG5cdFByaXNtLmxhbmd1YWdlcy5tYXJrdXAudGFnLmFkZElubGluZWQoJ3NjcmlwdCcsICdqYXZhc2NyaXB0Jyk7XG59XG5cblByaXNtLmxhbmd1YWdlcy5qcyA9IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0O1xuXG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgQmVnaW4gcHJpc20tZmlsZS1oaWdobGlnaHQuanNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0aWYgKHR5cGVvZiBzZWxmID09PSAndW5kZWZpbmVkJyB8fCAhc2VsZi5QcmlzbSB8fCAhc2VsZi5kb2N1bWVudCB8fCAhZG9jdW1lbnQucXVlcnlTZWxlY3Rvcikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge0VsZW1lbnR9IFtjb250YWluZXI9ZG9jdW1lbnRdXG5cdCAqL1xuXHRzZWxmLlByaXNtLmZpbGVIaWdobGlnaHQgPSBmdW5jdGlvbihjb250YWluZXIpIHtcblx0XHRjb250YWluZXIgPSBjb250YWluZXIgfHwgZG9jdW1lbnQ7XG5cblx0XHR2YXIgRXh0ZW5zaW9ucyA9IHtcblx0XHRcdCdqcyc6ICdqYXZhc2NyaXB0Jyxcblx0XHRcdCdweSc6ICdweXRob24nLFxuXHRcdFx0J3JiJzogJ3J1YnknLFxuXHRcdFx0J3BzMSc6ICdwb3dlcnNoZWxsJyxcblx0XHRcdCdwc20xJzogJ3Bvd2Vyc2hlbGwnLFxuXHRcdFx0J3NoJzogJ2Jhc2gnLFxuXHRcdFx0J2JhdCc6ICdiYXRjaCcsXG5cdFx0XHQnaCc6ICdjJyxcblx0XHRcdCd0ZXgnOiAnbGF0ZXgnXG5cdFx0fTtcblxuXHRcdEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdwcmVbZGF0YS1zcmNdJykpLmZvckVhY2goZnVuY3Rpb24gKHByZSkge1xuXHRcdFx0Ly8gaWdub3JlIGlmIGFscmVhZHkgbG9hZGVkXG5cdFx0XHRpZiAocHJlLmhhc0F0dHJpYnV0ZSgnZGF0YS1zcmMtbG9hZGVkJykpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBsb2FkIGN1cnJlbnRcblx0XHRcdHZhciBzcmMgPSBwcmUuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpO1xuXG5cdFx0XHR2YXIgbGFuZ3VhZ2UsIHBhcmVudCA9IHByZTtcblx0XHRcdHZhciBsYW5nID0gL1xcYmxhbmcoPzp1YWdlKT8tKFtcXHctXSspXFxiL2k7XG5cdFx0XHR3aGlsZSAocGFyZW50ICYmICFsYW5nLnRlc3QocGFyZW50LmNsYXNzTmFtZSkpIHtcblx0XHRcdFx0cGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChwYXJlbnQpIHtcblx0XHRcdFx0bGFuZ3VhZ2UgPSAocHJlLmNsYXNzTmFtZS5tYXRjaChsYW5nKSB8fCBbLCAnJ10pWzFdO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWxhbmd1YWdlKSB7XG5cdFx0XHRcdHZhciBleHRlbnNpb24gPSAoc3JjLm1hdGNoKC9cXC4oXFx3KykkLykgfHwgWywgJyddKVsxXTtcblx0XHRcdFx0bGFuZ3VhZ2UgPSBFeHRlbnNpb25zW2V4dGVuc2lvbl0gfHwgZXh0ZW5zaW9uO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgY29kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NvZGUnKTtcblx0XHRcdGNvZGUuY2xhc3NOYW1lID0gJ2xhbmd1YWdlLScgKyBsYW5ndWFnZTtcblxuXHRcdFx0cHJlLnRleHRDb250ZW50ID0gJyc7XG5cblx0XHRcdGNvZGUudGV4dENvbnRlbnQgPSAnTG9hZGluZ+KApic7XG5cblx0XHRcdHByZS5hcHBlbmRDaGlsZChjb2RlKTtcblxuXHRcdFx0dmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG5cdFx0XHR4aHIub3BlbignR0VUJywgc3JjLCB0cnVlKTtcblxuXHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0aWYgKHhoci5yZWFkeVN0YXRlID09IDQpIHtcblxuXHRcdFx0XHRcdGlmICh4aHIuc3RhdHVzIDwgNDAwICYmIHhoci5yZXNwb25zZVRleHQpIHtcblx0XHRcdFx0XHRcdGNvZGUudGV4dENvbnRlbnQgPSB4aHIucmVzcG9uc2VUZXh0O1xuXG5cdFx0XHRcdFx0XHRQcmlzbS5oaWdobGlnaHRFbGVtZW50KGNvZGUpO1xuXHRcdFx0XHRcdFx0Ly8gbWFyayBhcyBsb2FkZWRcblx0XHRcdFx0XHRcdHByZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjLWxvYWRlZCcsICcnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSBpZiAoeGhyLnN0YXR1cyA+PSA0MDApIHtcblx0XHRcdFx0XHRcdGNvZGUudGV4dENvbnRlbnQgPSAn4pyWIEVycm9yICcgKyB4aHIuc3RhdHVzICsgJyB3aGlsZSBmZXRjaGluZyBmaWxlOiAnICsgeGhyLnN0YXR1c1RleHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0Y29kZS50ZXh0Q29udGVudCA9ICfinJYgRXJyb3I6IEZpbGUgZG9lcyBub3QgZXhpc3Qgb3IgaXMgZW1wdHknO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0eGhyLnNlbmQobnVsbCk7XG5cdFx0fSk7XG5cdH07XG5cblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcblx0XHQvLyBleGVjdXRlIGluc2lkZSBoYW5kbGVyLCBmb3IgZHJvcHBpbmcgRXZlbnQgYXMgYXJndW1lbnRcblx0XHRzZWxmLlByaXNtLmZpbGVIaWdobGlnaHQoKTtcblx0fSk7XG5cbn0pKCk7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiJdLCJzb3VyY2VSb290IjoiIn0=