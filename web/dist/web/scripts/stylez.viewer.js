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
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.sort */ "./node_modules/core-js/modules/es6.array.sort.js");
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__);








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
      var curTemplate = stylez.templates[pattern.title];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYi9zY3JpcHRzL3N0eWxlei5jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vL3dlYi9zY3JpcHRzL3N0eWxlei5zdG9yYWdlLmpzIiwid2VicGFjazovLy93ZWIvc2NyaXB0cy9zdHlsZXoudmlld2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2N0eC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZpeC1yZS13a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hhcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oaWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1yZWdleHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fbGlicmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fc3RyaWN0LW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc29ydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAucmVwbGFjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuc3BsaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvcHJpc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImRtQXRvbWljRmlsdGVyIiwiZG1EZXZpY2VUeXBlcyIsImRtRmlsdGVyVG9jcyIsInZpZXdlckZyYW1lIiwidG9jcyIsImN1cldpZHRoIiwiY3VySGVpZ2h0IiwicGFnZXJzIiwiX0NPTlNUQU5UUyIsInJlcXVpcmUiLCJTVE9SQUdFIiwiU2Vzc2lvblN0b3JhZ2UiLCJjYXRlZ29yeSIsImRldmljZVNpemUiLCJpbmRleCIsIm1heEluZGV4IiwidGl0bGUiLCJjdXJTZWxlY3RlZCIsImRvY3VtZW50IiwidXBkYXRlcyIsImRlZmF1bHRTZXNzaW9uIiwic3R5bGV6U2Vzc2lvbiIsInNlc3Npb25TdG9yYWdlIiwiSlNPTiIsIm5ld1N0YXR1cyIsImN1clN0YXR1cyIsImNhdGVnb3J5RmlsdGVyIiwiZGV2aWNlRmlsdGVyIiwiY3VycmVudFBhdHRlcm5UaXRsZSIsIml0ZW1TbGlkZXIiLCJQcmlzbSIsImV2YWxIVE1MIiwicGFyc2VyIiwiZml4ZWRDb250ZW50IiwicGFydGlhbERvYyIsImVycm9yIiwiY3B5VG9DbGlwYm9hcmQiLCJjdXJFbGVtZW50IiwiZXZlbnQiLCJjdXJDb250ZW50IiwibmF2aWdhdG9yIiwiY29uc29sZSIsImZldGNoUGF0dGVybiIsInVybCIsInJlc3BvbnNlIiwicGF0dGVybiIsInBhdHRlcm5zIiwiYSIsImIiLCJjdXJTZXNzaW9uIiwiY3VycmVudFBhdHRlcm5zIiwiaXRlbSIsImN1cnJlbnRGaWx0ZXIiLCJjdXJJbmRleCIsInBhdHRlcm5zQ29udGFpbmVyIiwiY29weUNwbCIsImN1clRlbXBsYXRlIiwic3R5bGV6IiwidGVtcGxhdGVDb250ZW50IiwiZXZhbGVkQ29udGVudCIsImNvbnRlbnQiLCJjb3B5RWxlbWVudHMiLCJleHBvcnRzIiwiaXQiLCJUeXBlRXJyb3IiLCJpc09iamVjdCIsInRvU3RyaW5nIiwiY2FsbCIsInNsaWNlIiwiY29yZSIsInZlcnNpb24iLCJfX2UiLCJhRnVuY3Rpb24iLCJmbiIsInRoYXQiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJjIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsImlzIiwiY3JlYXRlRWxlbWVudCIsImdsb2JhbCIsImhpZGUiLCJyZWRlZmluZSIsImN0eCIsIlBST1RPVFlQRSIsIiRleHBvcnQiLCJ0eXBlIiwibmFtZSIsInNvdXJjZSIsIklTX0ZPUkNFRCIsIkYiLCJJU19HTE9CQUwiLCJHIiwiSVNfU1RBVElDIiwiUyIsIklTX1BST1RPIiwiUCIsIklTX0JJTkQiLCJCIiwidGFyZ2V0IiwiZXhwUHJvdG8iLCJrZXkiLCJvd24iLCJvdXQiLCJleHAiLCJGdW5jdGlvbiIsIlUiLCJXIiwiUiIsImV4ZWMiLCJlIiwiZmFpbHMiLCJkZWZpbmVkIiwid2tzIiwiS0VZIiwiU1lNQk9MIiwiZm5zIiwic3RyZm4iLCJyeGZuIiwiTyIsIlN0cmluZyIsInByb3RvdHlwZSIsIlJlZ0V4cCIsInN0cmluZyIsImFyZyIsIndpbmRvdyIsIk1hdGgiLCJzZWxmIiwiX19nIiwiaGFzT3duUHJvcGVydHkiLCJkUCIsImNyZWF0ZURlc2MiLCJvYmplY3QiLCJ2YWx1ZSIsImYiLCJjb2YiLCJNQVRDSCIsImlzUmVnRXhwIiwiYW5PYmplY3QiLCJJRThfRE9NX0RFRklORSIsInRvUHJpbWl0aXZlIiwiQXR0cmlidXRlcyIsImJpdG1hcCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImhhcyIsIlNSQyIsIlRPX1NUUklORyIsIiR0b1N0cmluZyIsIlRQTCIsInNwbGl0IiwiaW5zcGVjdFNvdXJjZSIsInZhbCIsInNhZmUiLCJpc0Z1bmN0aW9uIiwiam9pbiIsIlNIQVJFRCIsInN0b3JlIiwicHVzaCIsIm1vZGUiLCJjb3B5cmlnaHQiLCJtZXRob2QiLCJ2YWx1ZU9mIiwiaWQiLCJweCIsInJhbmRvbSIsImNvbmNhdCIsInVpZCIsIlN5bWJvbCIsIlVTRV9TWU1CT0wiLCIkZXhwb3J0cyIsInRvT2JqZWN0IiwiJHNvcnQiLCJzb3J0IiwidGVzdCIsImNvbXBhcmVmbiIsIlJFUExBQ0UiLCIkcmVwbGFjZSIsInJlcGxhY2UiLCJzZWFyY2hWYWx1ZSIsInJlcGxhY2VWYWx1ZSIsIlNQTElUIiwiJHNwbGl0IiwiX3NwbGl0IiwiJHB1c2giLCIkU1BMSVQiLCJMRU5HVEgiLCJMQVNUX0lOREVYIiwiTlBDRyIsInNlcGFyYXRvciIsImxpbWl0Iiwib3V0cHV0IiwiZmxhZ3MiLCJpZ25vcmVDYXNlIiwibXVsdGlsaW5lIiwidW5pY29kZSIsInN0aWNreSIsImxhc3RMYXN0SW5kZXgiLCJzcGxpdExpbWl0Iiwic2VwYXJhdG9yQ29weSIsInNlcGFyYXRvcjIiLCJtYXRjaCIsImxhc3RJbmRleCIsImxhc3RMZW5ndGgiLCJpIiwiX3NlbGYiLCJXb3JrZXJHbG9iYWxTY29wZSIsImxhbmciLCJ1bmlxdWVJZCIsIl8iLCJtYW51YWwiLCJkaXNhYmxlV29ya2VyTWVzc2FnZUhhbmRsZXIiLCJ1dGlsIiwiZW5jb2RlIiwidG9rZW5zIiwiVG9rZW4iLCJhbGlhcyIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsIm8iLCJvYmpJZCIsIm9iaiIsImNsb25lIiwiZGVlcENsb25lIiwidmlzaXRlZCIsImZvckVhY2giLCJ2IiwiZ2V0TGFuZ3VhZ2UiLCJlbGVtZW50IiwiY2xhc3NOYW1lIiwicGFyZW50RWxlbWVudCIsInRvTG93ZXJDYXNlIiwiY3VycmVudFNjcmlwdCIsIkVycm9yIiwiZXJyIiwic3JjIiwic3RhY2siLCJzY3JpcHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJsYW5ndWFnZXMiLCJleHRlbmQiLCJyZWRlZiIsImluc2VydEJlZm9yZSIsImluc2lkZSIsImJlZm9yZSIsImluc2VydCIsInJvb3QiLCJncmFtbWFyIiwicmV0IiwidG9rZW4iLCJuZXdUb2tlbiIsIm9sZCIsIkRGUyIsImNhbGxiYWNrIiwicHJvcGVydHkiLCJwcm9wZXJ0eVR5cGUiLCJwbHVnaW5zIiwiaGlnaGxpZ2h0QWxsIiwiYXN5bmMiLCJoaWdobGlnaHRBbGxVbmRlciIsImNvbnRhaW5lciIsImVudiIsInNlbGVjdG9yIiwiaG9va3MiLCJydW4iLCJlbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJoaWdobGlnaHRFbGVtZW50IiwibGFuZ3VhZ2UiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwibm9kZU5hbWUiLCJjb2RlIiwidGV4dENvbnRlbnQiLCJpbnNlcnRIaWdobGlnaHRlZENvZGUiLCJoaWdobGlnaHRlZENvZGUiLCJpbm5lckhUTUwiLCJXb3JrZXIiLCJ3b3JrZXIiLCJmaWxlbmFtZSIsIm9ubWVzc2FnZSIsImV2dCIsImRhdGEiLCJwb3N0TWVzc2FnZSIsInN0cmluZ2lmeSIsImltbWVkaWF0ZUNsb3NlIiwiaGlnaGxpZ2h0IiwidGV4dCIsInRva2VuaXplIiwicmVzdCIsInRva2VuTGlzdCIsIkxpbmtlZExpc3QiLCJhZGRBZnRlciIsImhlYWQiLCJtYXRjaEdyYW1tYXIiLCJ0b0FycmF5IiwiYWxsIiwiYWRkIiwiY2FsbGJhY2tzIiwibWF0Y2hlZFN0ciIsImdyZWVkeSIsInMiLCJ0YWciLCJjbGFzc2VzIiwiYXR0cmlidXRlcyIsImFsaWFzZXMiLCJzdGFydE5vZGUiLCJzdGFydFBvcyIsIm9uZXNob3QiLCJqIiwibG9va2JlaGluZCIsImxvb2tiZWhpbmRMZW5ndGgiLCJjdXJyZW50Tm9kZSIsIm5leHQiLCJwb3MiLCJ0YWlsIiwic3RyIiwicmVtb3ZlQ291bnQiLCJwcmV2IiwiZnJvbSIsInRvIiwicCIsImsiLCJhZnRlciIsInJlbW92ZUZyb20iLCJyZW1vdmVSYW5nZSIsIndyYXBwZWQiLCJsaXN0Iiwibm9kZSIsIm5ld05vZGUiLCJjb3VudCIsImFycmF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1lc3NhZ2UiLCJwYXJzZSIsImNsb3NlIiwic2NyaXB0IiwiaGFzQXR0cmlidXRlIiwiaGlnaGxpZ2h0QXV0b21hdGljYWxseUNhbGxiYWNrIiwicmVhZHlTdGF0ZSIsImRlZmVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0VGltZW91dCIsIm1hcmt1cCIsImFkZElubGluZWQiLCJ0YWdOYW1lIiwiaW5jbHVkZWRDZGF0YUluc2lkZSIsImRlZiIsInhtbCIsImh0bWwiLCJtYXRobWwiLCJzdmciLCJjc3MiLCJjbGlrZSIsImphdmFzY3JpcHQiLCJqcyIsInF1ZXJ5U2VsZWN0b3IiLCJmaWxlSGlnaGxpZ2h0IiwiRXh0ZW5zaW9ucyIsInByZSIsImdldEF0dHJpYnV0ZSIsImV4dGVuc2lvbiIsImFwcGVuZENoaWxkIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwib25yZWFkeXN0YXRlY2hhbmdlIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwic2V0QXR0cmlidXRlIiwic3RhdHVzVGV4dCIsInNlbmQiLCJydW50aW1lIiwiT3AiLCJoYXNPd24iLCIkU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIl9pbnZva2UiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0IiwiR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCIsIkdlblN0YXRlRXhlY3V0aW5nIiwiR2VuU3RhdGVDb21wbGV0ZWQiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJjb25zdHJ1Y3RvciIsImRpc3BsYXlOYW1lIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsIl9fYXdhaXQiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIlByb21pc2UiLCJ0aGVuIiwidW53cmFwcGVkIiwicHJldmlvdXNQcm9taXNlIiwiZW5xdWV1ZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiaXRlciIsImRvbmUiLCJzdGF0ZSIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwic2tpcFRlbXBSZXNldCIsImNoYXJBdCIsInN0b3AiLCJyb290RW50cnkiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsInJlZ2VuZXJhdG9yUnVudGltZSIsImFjY2lkZW50YWxTdHJpY3RNb2RlIiwiZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBQSxNQUFNLENBQU5BLFVBQWlCO0FBQ2JDLGdCQUFjLEVBREQ7QUFFYkMsZUFBYSxFQUZBO0FBR2JDLGNBQVksRUFIQztBQUliQyxhQUFXLEVBSkU7QUFLYkMsTUFBSSxFQUxTO0FBTWJDLFVBQVEsRUFOSztBQU9iQyxXQUFTLEVBUEk7QUFRYkMsUUFBTSxFQUFFO0FBUkssQ0FBakJSLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLElBQU1TLFVBQVUsR0FBR0MsbUJBQU8sQ0FBMUIs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bnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvd2ViL3NjcmlwdHMvc3R5bGV6LnZpZXdlci5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRtQXRvbWljRmlsdGVyOiAnLm0tZmlsdGVycyAuYS1maWx0ZXInLFxuICAgIGRtRGV2aWNlVHlwZXM6ICcubS1kZXZpY2V0eXBlcyAuYS1maWx0ZXInLFxuICAgIGRtRmlsdGVyVG9jczogJy5tLWZpbHRlcnRvY3MgLmEtZmlsdGVyJyxcbiAgICB2aWV3ZXJGcmFtZTogJy5vLXZpZXdlcicsXG4gICAgdG9jczogJy5vLXRvY3MnLFxuICAgIGN1cldpZHRoOiAnLmEtaW5wdXQuanMtY3VyV2lkdGgnLFxuICAgIGN1ckhlaWdodDogJy5hLWlucHV0LmpzLWN1ckhlaWdodCcsXG4gICAgcGFnZXJzOiAnLm0taXRlbXNsaWRlciAuYS1maWx0ZXInXG59XG4iLCJjb25zdCBfQ09OU1RBTlRTID0gcmVxdWlyZSgnLi9zdHlsZXouY29uc3RhbnRzJyk7XG5jb25zdCBTVE9SQUdFID0gJ3N0eWxleic7XG5cbmNsYXNzIFNlc3Npb25TdG9yYWdlIHtcblxuICAgIHN0YXRpYyBfcmV0dXJuRGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYXRvbXMnLFxuICAgICAgICAgICAgZGV2aWNlU2l6ZTogJ2Z1bGwnLFxuICAgICAgICAgICAgaW5kZXg6IG51bGwsXG4gICAgICAgICAgICBtYXhJbmRleDogbnVsbCxcbiAgICAgICAgICAgIHRpdGxlOiBudWxsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3RhdGljIF9nZXRTZWxlY3RlZENhdGVnb3J5KCkge1xuXG4gICAgICAgIGxldCBjdXJTZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoX0NPTlNUQU5UUy5kbUF0b21pY0ZpbHRlciArICcuc2VsZWN0ZWQnKTtcblxuICAgICAgICBpZiAoY3VyU2VsZWN0ZWQgIT09IG51bGwgJiZcbiAgICAgICAgICAgIGN1clNlbGVjdGVkLmRhdGFzZXQgIT09IG51bGwgJiZcbiAgICAgICAgICAgIGN1clNlbGVjdGVkLmRhdGFzZXQuZmlsdGVyICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBjdXJTZWxlY3RlZC5kYXRhc2V0LmZpbHRlciAhPT0gbnVsbCA/IGN1clNlbGVjdGVkLmRhdGFzZXQuZmlsdGVyIDogJ2F0b21zJztcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICByZXR1cm4gJ2F0b21zJztcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgX2dldFNlbGVjdGVkRGV2aWNlU2l6ZSgpIHtcblxuICAgICAgICBsZXQgY3VyU2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKF9DT05TVEFOVFMuZG1EZXZpY2VUeXBlcyArICcuc2VsZWN0ZWQnKTtcblxuICAgICAgICBpZiAoY3VyU2VsZWN0ZWQgIT09IG51bGwgJiZcbiAgICAgICAgICAgIGN1clNlbGVjdGVkLmRhdGFzZXQgIT09IG51bGwgJiZcbiAgICAgICAgICAgIGN1clNlbGVjdGVkLmRhdGFzZXQuc2l6ZSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICByZXR1cm4gY3VyU2VsZWN0ZWQuZGF0YXNldC5zaXplICE9PSBudWxsID8gY3VyU2VsZWN0ZWQuZGF0YXNldC5zaXplIDogJ2Z1bGwnOztcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICByZXR1cm4gJ2Z1bGwnO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHN0YXRpYyB1cGRhdGVTdGF0dXModXBkYXRlcykge1xuXG4gICAgICAgIGlmICh1cGRhdGVzID09PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgbGV0IGRlZmF1bHRTZXNzaW9uID0gdGhpcy5fcmV0dXJuRGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBsZXQgc3R5bGV6U2Vzc2lvbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU1RPUkFHRSk7XG5cbiAgICAgICAgICAgIGlmIChzdHlsZXpTZXNzaW9uID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICAgICBzdHlsZXpTZXNzaW9uID09PSBudWxsKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9nZXRTZWxlY3RlZENhdGVnb3J5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZ2V0U2VsZWN0ZWREZXZpY2VTaXplKCk7XG5cbiAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFNUT1JBR0UsIEpTT04uc3RyaW5naWZ5KGRlZmF1bHRTZXNzaW9uKSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgbmV3U3RhdHVzID0gSlNPTi5wYXJzZShzdHlsZXpTZXNzaW9uKTtcblxuICAgICAgICAgICAgICAgIG5ld1N0YXR1cy5jYXRlZ29yeSA9IHRoaXMuX2dldFNlbGVjdGVkQ2F0ZWdvcnkoKTtcbiAgICAgICAgICAgICAgICBuZXdTdGF0dXMuZGV2aWNlU2l6ZSA9IHRoaXMuX2dldFNlbGVjdGVkRGV2aWNlU2l6ZSgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIG5ld1N0YXR1cy5pbmRleCA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9nZXRTZWxlY3RlZENhdGVnb3J5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZ2V0U2VsZWN0ZWREZXZpY2VTaXplKCk7XG5cbiAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFNUT1JBR0UsIEpTT04uc3RyaW5naWZ5KG5ld1N0YXR1cykpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTVE9SQUdFLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVzKSk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc3RhdGljIHNldEN1cnJlbnRGaWx0ZXIoKSB7XG5cbiAgICAgICAgbGV0IGN1clN0YXR1cyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU1RPUkFHRSkgIT09IG51bGwgP1xuICAgICAgICAgICAgSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0UpKSA6IFNlc3Npb25TdG9yYWdlLl9yZXR1cm5EZWZhdWx0KCk7XG5cbiAgICAgICAgbGV0IGNhdGVnb3J5RmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYnV0dG9uW2RhdGEtZmlsdGVyPVwiJHtjdXJTdGF0dXMuY2F0ZWdvcnl9XCJdYCk7XG5cbiAgICAgICAgaWYgKGNhdGVnb3J5RmlsdGVyICE9PSBudWxsICYmIGNhdGVnb3J5RmlsdGVyICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgY2F0ZWdvcnlGaWx0ZXIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIGNhdGVnb3J5RmlsdGVyLmNsaWNrKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkZXZpY2VGaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBidXR0b25bZGF0YS1zaXplPVwiJHtjdXJTdGF0dXMuZGV2aWNlU2l6ZX1cIl1gKTtcblxuICAgICAgICBpZiAoZGV2aWNlRmlsdGVyICE9PSBudWxsICYmIGRldmljZUZpbHRlciAhPT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgIGRldmljZUZpbHRlci5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgZGV2aWNlRmlsdGVyLmNsaWNrKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjdXJyZW50UGF0dGVyblRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmEtZmlsdGVybmFtZScpO1xuXG4gICAgICAgIGlmIChjdXJTdGF0dXMudGl0bGUgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgY3VycmVudFBhdHRlcm5UaXRsZS50ZXh0Q29udGVudCA9IGN1clN0YXR1cy50aXRsZTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBjdXJyZW50UGF0dGVyblRpdGxlLnRleHRDb250ZW50ID0gJyAnO1xuICAgICAgICAgICAgbGV0IGl0ZW1TbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubS1pdGVtc2xpZGVyJyk7XG5cbiAgICAgICAgICAgIGlmIChpdGVtU2xpZGVyICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoY3VyU3RhdHVzLm1heEluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1TbGlkZXIuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRDdXJyZW50RmlsdGVyKCkge1xuXG4gICAgICAgIGxldCBjdXJTdGF0dXMgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0UpICE9PSBudWxsID9cbiAgICAgICAgICAgIEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShTVE9SQUdFKSkgOiBTZXNzaW9uU3RvcmFnZS5fcmV0dXJuRGVmYXVsdCgpO1xuXG4gICAgICAgIHJldHVybiBjdXJTdGF0dXM7XG5cbiAgICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTZXNzaW9uU3RvcmFnZTsiLCJjb25zdCBTZXNzaW9uU3RvcmFnZSA9IHJlcXVpcmUoJy4vc3R5bGV6LnN0b3JhZ2UnKTtcbmNvbnN0IFByaXNtID0gcmVxdWlyZSgncHJpc21qcycpO1xuXG5jb25zdCBldmFsSFRNTCA9IChwYXJ0aWFsSFRNTCkgPT4ge1xuXG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgICAgbGV0IGZpeGVkQ29udGVudCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcocGFydGlhbEhUTUwsICd0ZXh0L2h0bWwnKTtcblxuICAgICAgICBsZXQgcGFydGlhbERvYyA9IG5ldyBEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIHBhcnRpYWxEb2MuYXBwZW5kKGZpeGVkQ29udGVudC5ib2R5KTtcblxuICAgICAgICByZXR1cm4gcGFydGlhbERvYy5maXJzdENoaWxkLmlubmVySFRNTDtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBlcnJvci5tZXNzYWdlO1xuICAgIH1cblxufVxuXG5jb25zdCBjcHlUb0NsaXBib2FyZCA9IChldmVudCkgPT4ge1xuXG4gICAgbGV0IGN1ckVsZW1lbnQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LFxuICAgICAgICBjdXJDb250ZW50ID0gY3VyRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudmlld2VyLWNvbnRlbnQnKTtcblxuICAgIHRyeSB7XG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGN1ckNvbnRlbnQuaW5uZXJIVE1MKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG5cbn1cblxuY29uc3QgZmV0Y2hQYXR0ZXJuID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgbGV0IHVybCA9ICcuL2FwcC9jb25maWcvc3R5bGV6Lmpzb24nO1xuXG4gICAgcmV0dXJuIGZldGNoKHVybClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIHRocm93IFwiRXJyb3IgY3VycmVudCBzdGF0dXM6IFwiICsgcmVzcG9uc2Uuc3RhdHVzICsgXCIgLSBcIiArIHVybDtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VSUk9SIDo6OicsIGVycm9yKTtcblxuICAgICAgICB9KVxuXG59XG5cbmxldCBwYXR0ZXJuID0gZmV0Y2hQYXR0ZXJuKCk7XG4vLyBsZXQgcGF0dGVybiA9IFN0eWxlekRhdGEuUGF0dGVybigpO1xuXG5wYXR0ZXJuLnRoZW4oZGF0YSA9PiB7XG5cbiAgICBsZXQgcGF0dGVybnMgPSBkYXRhLnBhdHRlcm5zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgaWYgKGEuZmlsZSA8IGIuZmlsZSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhLmZpbGUgPiBiLmZpbGUpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0pXG5cbiAgICB2YXIgY3VyU2Vzc2lvbiA9IFNlc3Npb25TdG9yYWdlLmdldEN1cnJlbnRGaWx0ZXIoKTtcblxuICAgIGxldCBjdXJyZW50UGF0dGVybnMgPSBwYXR0ZXJucy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtLmNhdGVnb3J5ID09PSBjdXJTZXNzaW9uLmNhdGVnb3J5O1xuICAgIH0pO1xuXG4gICAgbGV0IGN1cnJlbnRGaWx0ZXIgPSBTZXNzaW9uU3RvcmFnZS5nZXRDdXJyZW50RmlsdGVyKCk7XG5cbiAgICBpZiAoY3VyU2Vzc2lvbi5jYXRlZ29yeSA9PT0gJ3BhZ2VzJyB8fFxuICAgICAgICBjdXJTZXNzaW9uLmNhdGVnb3J5ID09PSAndGVtcGxhdGVzJyB8fCBjdXJyZW50RmlsdGVyLmluZGV4ICE9PSBudWxsKSB7XG5cbiAgICAgICAgaWYgKGN1cnJlbnRQYXR0ZXJucy5sZW5ndGggIT09IDApIHtcblxuICAgICAgICAgICAgbGV0IGN1ckluZGV4ID0gY3VycmVudEZpbHRlci5pbmRleCA/IGN1cnJlbnRGaWx0ZXIuaW5kZXggOiAwO1xuXG4gICAgICAgICAgICBjdXJyZW50RmlsdGVyLm1heEluZGV4ID0gY3VycmVudFBhdHRlcm5zLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBjdXJyZW50RmlsdGVyLmluZGV4ID0gY3VySW5kZXg7XG5cbiAgICAgICAgICAgIGN1cnJlbnRGaWx0ZXIudGl0bGUgPSBjdXJyZW50UGF0dGVybnNbY3VySW5kZXhdLnRpdGxlO1xuXG4gICAgICAgICAgICBjdXJyZW50UGF0dGVybnMgPSBbY3VycmVudFBhdHRlcm5zW2N1ckluZGV4XV07XG5cbiAgICAgICAgICAgIC8vIGxldCBjdXJyZW50UGF0dGVyblRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmEtZmlsdGVybmFtZScpO1xuICAgICAgICAgICAgLy8gY3VycmVudFBhdHRlcm5UaXRsZS50ZXh0Q29udGVudCA9IGN1cnJlbnRGaWx0ZXIudGl0bGU7XG5cbiAgICAgICAgICAgIFNlc3Npb25TdG9yYWdlLnVwZGF0ZVN0YXR1cyhjdXJyZW50RmlsdGVyKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBjdXJyZW50RmlsdGVyLm1heEluZGV4ID0gbnVsbDtcbiAgICAgICAgICAgIGN1cnJlbnRGaWx0ZXIuaW5kZXggPSBudWxsO1xuICAgICAgICAgICAgY3VycmVudEZpbHRlci50aXRsZSA9IG51bGw7XG5cbiAgICAgICAgICAgIFNlc3Npb25TdG9yYWdlLnVwZGF0ZVN0YXR1cyhjdXJyZW50RmlsdGVyKTtcblxuICAgICAgICB9XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIGN1cnJlbnRGaWx0ZXIubWF4SW5kZXggPSBudWxsO1xuICAgICAgICBjdXJyZW50RmlsdGVyLmluZGV4ID0gbnVsbDtcbiAgICAgICAgY3VycmVudEZpbHRlci50aXRsZSA9IG51bGw7XG5cbiAgICAgICAgU2Vzc2lvblN0b3JhZ2UudXBkYXRlU3RhdHVzKGN1cnJlbnRGaWx0ZXIpO1xuXG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRQYXR0ZXJucy5sZW5ndGggIT09IDApIHtcblxuICAgICAgICBjb25zdCBwYXR0ZXJuc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXR0ZXJucycpO1xuXG4gICAgICAgIGNvbnN0IGNvcHlDcGwgPSBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLmNsaXBib2FyZCA/IFwiPGRpdiB0aXRsZT0nQ29weSB0byBjbGlwIGJvYXJkJyBhcmlhLWxhYmVsPSdDb3B5IHRvIGNsaXAgYm9hcmQnIGNsYXNzPSd2aWV3ZXItZmlsZW5hbWUgY29weSc+Y29weTwvZGl2PlwiIDogXCJcIjtcblxuICAgICAgICBjdXJyZW50UGF0dGVybnMuZm9yRWFjaChwYXR0ZXJuID0+IHtcblxuICAgICAgICAgICAgbGV0IGN1clRlbXBsYXRlID0gc3R5bGV6LnRlbXBsYXRlc1twYXR0ZXJuLnRpdGxlXTtcblxuICAgICAgICAgICAgbGV0IHRlbXBsYXRlQ29udGVudDtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZUNvbnRlbnQgPSBjdXJUZW1wbGF0ZSgpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBpbiBQYXR0ZXJuICR7cGF0dGVybi50aXRsZX06ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZUNvbnRlbnQgPSBgRXJyb3IgaW4gUGF0dGVybiAke3BhdHRlcm4udGl0bGV9OiAke2Vycm9yLm1lc3NhZ2V9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN1clRlbXBsYXRlICE9PSB1bmRlZmluZWQgJiYgdGVtcGxhdGVDb250ZW50ICE9PSAndW5kZWZpbmVkJykge1xuXG4gICAgICAgICAgICAgICAgbGV0IGV2YWxlZENvbnRlbnQgPSBldmFsSFRNTCh0ZW1wbGF0ZUNvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGA8ZGl2IGRhdGEtY2F0ZWdvcnk9JyR7cGF0dGVybi5jYXRlZ29yeX0nIGNsYXNzPSd2aWV3ZXItcGF0dGVybicgYXJpYS1sYWJlbD0nUGF0dGVybiAkeyBwYXR0ZXJuLnRpdGxlIH0nPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ndmlld2VyLWhlYWRlcicgYXJpYS1sYWJlbD0nSGVhZGVyIGZvciAkeyBwYXR0ZXJuLnRpdGxlIH0nID5cbiAgICAgICAgICAgICAgICA8ZGl2IHRpdGxlPSckeyBwYXR0ZXJuLnRpdGxlIH0nIGNsYXNzPSd2aWV3ZXItdGl0bGUnPiR7IHBhdHRlcm4udGl0bGUgfTwvZGl2PlxuICAgICAgICAgICAgICAgICR7IGNvcHlDcGwgfVxuICAgICAgICAgICAgICAgIDxkaXYgdGl0bGU9JyR7cGF0dGVybi5maWxlIH0nIGNsYXNzPSd2aWV3ZXItZmlsZW5hbWUnIGFyaWEtbGFibGU9J2ZpbGUgbG9jYXRpb24nPiR7cGF0dGVybi5maWxlLnNwbGl0KCcvJykucG9wKCl9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3ZpZXdlci1jb250ZW50JyBhcmlhLWxhYmVsPSdDb250ZW50IG9mICR7IHBhdHRlcm4udGl0bGUgfSBwYXR0ZXJuJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3ZpZXdlci1jb250ZW50aW5uZXInPlxuICAgICAgICAgICAgJHsgZXZhbGVkQ29udGVudCB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHByZSBjbGFzcz0ndmlld2VyLWNvZGUgbGFuZ3VhZ2UtbWFya3VwJyBkYXRhLW1hbnVhbD48Y29kZT4keyBldmFsZWRDb250ZW50LnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC8+L2csICcmZ3Q7JykgfTwvY29kZT48L3ByZT5cbiAgICAgICAgICAgIDwvZGl2PmA7XG5cbiAgICAgICAgICAgICAgICBwYXR0ZXJuc0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGNvbnRlbnQpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuICAgICAgICB2YXIgY29weUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvcHknKTtcblxuICAgICAgICBjb3B5RWxlbWVudHMuZm9yRWFjaChpdGVtID0+IHtcblxuICAgICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNweVRvQ2xpcGJvYXJkKTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8vIHNob3cgbWFya3VwIGNvZGVcbiAgICBQcmlzbS5oaWdobGlnaHRBbGwoKTtcbn0pIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS43JyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gfHwgKGdsb2JhbFtuYW1lXSA9IHt9KSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pO1xuICB2YXIga2V5LCBvd24sIG91dCwgZXhwO1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICBpZiAodGFyZ2V0KSByZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0LCB0eXBlICYgJGV4cG9ydC5VKTtcbiAgICAvLyBleHBvcnRcbiAgICBpZiAoZXhwb3J0c1trZXldICE9IG91dCkgaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgaWYgKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KSBleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGxlbmd0aCwgZXhlYykge1xuICB2YXIgU1lNQk9MID0gd2tzKEtFWSk7XG4gIHZhciBmbnMgPSBleGVjKGRlZmluZWQsIFNZTUJPTCwgJydbS0VZXSk7XG4gIHZhciBzdHJmbiA9IGZuc1swXTtcbiAgdmFyIHJ4Zm4gPSBmbnNbMV07XG4gIGlmIChmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIE8gPSB7fTtcbiAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9O1xuICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG4gIH0pKSB7XG4gICAgcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBzdHJmbik7XG4gICAgaGlkZShSZWdFeHAucHJvdG90eXBlLCBTWU1CT0wsIGxlbmd0aCA9PSAyXG4gICAgICAvLyAyMS4yLjUuOCBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV0oc3RyaW5nLCByZXBsYWNlVmFsdWUpXG4gICAgICAvLyAyMS4yLjUuMTEgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XShzdHJpbmcsIGxpbWl0KVxuICAgICAgPyBmdW5jdGlvbiAoc3RyaW5nLCBhcmcpIHsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMsIGFyZyk7IH1cbiAgICAgIC8vIDIxLjIuNS42IFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF0oc3RyaW5nKVxuICAgICAgLy8gMjEuMi41LjkgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF0oc3RyaW5nKVxuICAgICAgOiBmdW5jdGlvbiAoc3RyaW5nKSB7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzKTsgfVxuICAgICk7XG4gIH1cbn07XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwiLy8gNy4yLjggSXNSZWdFeHAoYXJndW1lbnQpXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBNQVRDSCA9IHJlcXVpcmUoJy4vX3drcycpKCdtYXRjaCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIGlzUmVnRXhwO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmICgoaXNSZWdFeHAgPSBpdFtNQVRDSF0pICE9PSB1bmRlZmluZWQgPyAhIWlzUmVnRXhwIDogY29mKGl0KSA9PSAnUmVnRXhwJyk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgU1JDID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgJHRvU3RyaW5nID0gRnVuY3Rpb25bVE9fU1RSSU5HXTtcbnZhciBUUEwgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbnJlcXVpcmUoJy4vX2NvcmUnKS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiAkdG9TdHJpbmcuY2FsbChpdCk7XG59O1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWwsIHNhZmUpIHtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic7XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCAnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gIGlmIChPW2tleV0gPT09IHZhbCkgcmV0dXJuO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgU1JDKSB8fCBoaWRlKHZhbCwgU1JDLCBPW2tleV0gPyAnJyArIE9ba2V5XSA6IFRQTC5qb2luKFN0cmluZyhrZXkpKSk7XG4gIGlmIChPID09PSBnbG9iYWwpIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSBpZiAoIXNhZmUpIHtcbiAgICBkZWxldGUgT1trZXldO1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9IGVsc2UgaWYgKE9ba2V5XSkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfVxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pO1xuIiwidmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiBjb3JlLnZlcnNpb24sXG4gIG1vZGU6IHJlcXVpcmUoJy4vX2xpYnJhcnknKSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE4IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChtZXRob2QsIGFyZykge1xuICByZXR1cm4gISFtZXRob2QgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNhbGxcbiAgICBhcmcgPyBtZXRob2QuY2FsbChudWxsLCBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sIDEpIDogbWV0aG9kLmNhbGwobnVsbCk7XG4gIH0pO1xufTtcbiIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG4iLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciAkc29ydCA9IFtdLnNvcnQ7XG52YXIgdGVzdCA9IFsxLCAyLCAzXTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBJRTgtXG4gIHRlc3Quc29ydCh1bmRlZmluZWQpO1xufSkgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gVjggYnVnXG4gIHRlc3Quc29ydChudWxsKTtcbiAgLy8gT2xkIFdlYktpdFxufSkgfHwgIXJlcXVpcmUoJy4vX3N0cmljdC1tZXRob2QnKSgkc29ydCkpLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMy4yNSBBcnJheS5wcm90b3R5cGUuc29ydChjb21wYXJlZm4pXG4gIHNvcnQ6IGZ1bmN0aW9uIHNvcnQoY29tcGFyZWZuKSB7XG4gICAgcmV0dXJuIGNvbXBhcmVmbiA9PT0gdW5kZWZpbmVkXG4gICAgICA/ICRzb3J0LmNhbGwodG9PYmplY3QodGhpcykpXG4gICAgICA6ICRzb3J0LmNhbGwodG9PYmplY3QodGhpcyksIGFGdW5jdGlvbihjb21wYXJlZm4pKTtcbiAgfVxufSk7XG4iLCIvLyBAQHJlcGxhY2UgbG9naWNcbnJlcXVpcmUoJy4vX2ZpeC1yZS13a3MnKSgncmVwbGFjZScsIDIsIGZ1bmN0aW9uIChkZWZpbmVkLCBSRVBMQUNFLCAkcmVwbGFjZSkge1xuICAvLyAyMS4xLjMuMTQgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlKHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpXG4gIHJldHVybiBbZnVuY3Rpb24gcmVwbGFjZShzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciBPID0gZGVmaW5lZCh0aGlzKTtcbiAgICB2YXIgZm4gPSBzZWFyY2hWYWx1ZSA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZWFyY2hWYWx1ZVtSRVBMQUNFXTtcbiAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZFxuICAgICAgPyBmbi5jYWxsKHNlYXJjaFZhbHVlLCBPLCByZXBsYWNlVmFsdWUpXG4gICAgICA6ICRyZXBsYWNlLmNhbGwoU3RyaW5nKE8pLCBzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKTtcbiAgfSwgJHJlcGxhY2VdO1xufSk7XG4iLCIvLyBAQHNwbGl0IGxvZ2ljXG5yZXF1aXJlKCcuL19maXgtcmUtd2tzJykoJ3NwbGl0JywgMiwgZnVuY3Rpb24gKGRlZmluZWQsIFNQTElULCAkc3BsaXQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB2YXIgaXNSZWdFeHAgPSByZXF1aXJlKCcuL19pcy1yZWdleHAnKTtcbiAgdmFyIF9zcGxpdCA9ICRzcGxpdDtcbiAgdmFyICRwdXNoID0gW10ucHVzaDtcbiAgdmFyICRTUExJVCA9ICdzcGxpdCc7XG4gIHZhciBMRU5HVEggPSAnbGVuZ3RoJztcbiAgdmFyIExBU1RfSU5ERVggPSAnbGFzdEluZGV4JztcbiAgaWYgKFxuICAgICdhYmJjJ1skU1BMSVRdKC8oYikqLylbMV0gPT0gJ2MnIHx8XG4gICAgJ3Rlc3QnWyRTUExJVF0oLyg/OikvLCAtMSlbTEVOR1RIXSAhPSA0IHx8XG4gICAgJ2FiJ1skU1BMSVRdKC8oPzphYikqLylbTEVOR1RIXSAhPSAyIHx8XG4gICAgJy4nWyRTUExJVF0oLyguPykoLj8pLylbTEVOR1RIXSAhPSA0IHx8XG4gICAgJy4nWyRTUExJVF0oLygpKCkvKVtMRU5HVEhdID4gMSB8fFxuICAgICcnWyRTUExJVF0oLy4/LylbTEVOR1RIXVxuICApIHtcbiAgICB2YXIgTlBDRyA9IC8oKT8/Ly5leGVjKCcnKVsxXSA9PT0gdW5kZWZpbmVkOyAvLyBub25wYXJ0aWNpcGF0aW5nIGNhcHR1cmluZyBncm91cFxuICAgIC8vIGJhc2VkIG9uIGVzNS1zaGltIGltcGxlbWVudGF0aW9uLCBuZWVkIHRvIHJld29yayBpdFxuICAgICRzcGxpdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHRoaXMpO1xuICAgICAgaWYgKHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwKSByZXR1cm4gW107XG4gICAgICAvLyBJZiBgc2VwYXJhdG9yYCBpcyBub3QgYSByZWdleCwgdXNlIG5hdGl2ZSBzcGxpdFxuICAgICAgaWYgKCFpc1JlZ0V4cChzZXBhcmF0b3IpKSByZXR1cm4gX3NwbGl0LmNhbGwoc3RyaW5nLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICAgIHZhciBvdXRwdXQgPSBbXTtcbiAgICAgIHZhciBmbGFncyA9IChzZXBhcmF0b3IuaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLm11bHRpbGluZSA/ICdtJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnVuaWNvZGUgPyAndScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5zdGlja3kgPyAneScgOiAnJyk7XG4gICAgICB2YXIgbGFzdExhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgc3BsaXRMaW1pdCA9IGxpbWl0ID09PSB1bmRlZmluZWQgPyA0Mjk0OTY3Mjk1IDogbGltaXQgPj4+IDA7XG4gICAgICAvLyBNYWtlIGBnbG9iYWxgIGFuZCBhdm9pZCBgbGFzdEluZGV4YCBpc3N1ZXMgYnkgd29ya2luZyB3aXRoIGEgY29weVxuICAgICAgdmFyIHNlcGFyYXRvckNvcHkgPSBuZXcgUmVnRXhwKHNlcGFyYXRvci5zb3VyY2UsIGZsYWdzICsgJ2cnKTtcbiAgICAgIHZhciBzZXBhcmF0b3IyLCBtYXRjaCwgbGFzdEluZGV4LCBsYXN0TGVuZ3RoLCBpO1xuICAgICAgLy8gRG9lc24ndCBuZWVkIGZsYWdzIGd5LCBidXQgdGhleSBkb24ndCBodXJ0XG4gICAgICBpZiAoIU5QQ0cpIHNlcGFyYXRvcjIgPSBuZXcgUmVnRXhwKCdeJyArIHNlcGFyYXRvckNvcHkuc291cmNlICsgJyQoPyFcXFxccyknLCBmbGFncyk7XG4gICAgICB3aGlsZSAobWF0Y2ggPSBzZXBhcmF0b3JDb3B5LmV4ZWMoc3RyaW5nKSkge1xuICAgICAgICAvLyBgc2VwYXJhdG9yQ29weS5sYXN0SW5kZXhgIGlzIG5vdCByZWxpYWJsZSBjcm9zcy1icm93c2VyXG4gICAgICAgIGxhc3RJbmRleCA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF1bTEVOR1RIXTtcbiAgICAgICAgaWYgKGxhc3RJbmRleCA+IGxhc3RMYXN0SW5kZXgpIHtcbiAgICAgICAgICBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCwgbWF0Y2guaW5kZXgpKTtcbiAgICAgICAgICAvLyBGaXggYnJvd3NlcnMgd2hvc2UgYGV4ZWNgIG1ldGhvZHMgZG9uJ3QgY29uc2lzdGVudGx5IHJldHVybiBgdW5kZWZpbmVkYCBmb3IgTlBDR1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb29wLWZ1bmNcbiAgICAgICAgICBpZiAoIU5QQ0cgJiYgbWF0Y2hbTEVOR1RIXSA+IDEpIG1hdGNoWzBdLnJlcGxhY2Uoc2VwYXJhdG9yMiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9yIChpID0gMTsgaSA8IGFyZ3VtZW50c1tMRU5HVEhdIC0gMjsgaSsrKSBpZiAoYXJndW1lbnRzW2ldID09PSB1bmRlZmluZWQpIG1hdGNoW2ldID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChtYXRjaFtMRU5HVEhdID4gMSAmJiBtYXRjaC5pbmRleCA8IHN0cmluZ1tMRU5HVEhdKSAkcHVzaC5hcHBseShvdXRwdXQsIG1hdGNoLnNsaWNlKDEpKTtcbiAgICAgICAgICBsYXN0TGVuZ3RoID0gbWF0Y2hbMF1bTEVOR1RIXTtcbiAgICAgICAgICBsYXN0TGFzdEluZGV4ID0gbGFzdEluZGV4O1xuICAgICAgICAgIGlmIChvdXRwdXRbTEVOR1RIXSA+PSBzcGxpdExpbWl0KSBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYXSA9PT0gbWF0Y2guaW5kZXgpIHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWF0rKzsgLy8gQXZvaWQgYW4gaW5maW5pdGUgbG9vcFxuICAgICAgfVxuICAgICAgaWYgKGxhc3RMYXN0SW5kZXggPT09IHN0cmluZ1tMRU5HVEhdKSB7XG4gICAgICAgIGlmIChsYXN0TGVuZ3RoIHx8ICFzZXBhcmF0b3JDb3B5LnRlc3QoJycpKSBvdXRwdXQucHVzaCgnJyk7XG4gICAgICB9IGVsc2Ugb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgpKTtcbiAgICAgIHJldHVybiBvdXRwdXRbTEVOR1RIXSA+IHNwbGl0TGltaXQgPyBvdXRwdXQuc2xpY2UoMCwgc3BsaXRMaW1pdCkgOiBvdXRwdXQ7XG4gICAgfTtcbiAgLy8gQ2hha3JhLCBWOFxuICB9IGVsc2UgaWYgKCcwJ1skU1BMSVRdKHVuZGVmaW5lZCwgMClbTEVOR1RIXSkge1xuICAgICRzcGxpdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICByZXR1cm4gc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDAgPyBbXSA6IF9zcGxpdC5jYWxsKHRoaXMsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgIH07XG4gIH1cbiAgLy8gMjEuMS4zLjE3IFN0cmluZy5wcm90b3R5cGUuc3BsaXQoc2VwYXJhdG9yLCBsaW1pdClcbiAgcmV0dXJuIFtmdW5jdGlvbiBzcGxpdChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgdmFyIE8gPSBkZWZpbmVkKHRoaXMpO1xuICAgIHZhciBmbiA9IHNlcGFyYXRvciA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZXBhcmF0b3JbU1BMSVRdO1xuICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkID8gZm4uY2FsbChzZXBhcmF0b3IsIE8sIGxpbWl0KSA6ICRzcGxpdC5jYWxsKFN0cmluZyhPKSwgc2VwYXJhdG9yLCBsaW1pdCk7XG4gIH0sICRzcGxpdF07XG59KTtcbiIsIlxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICBCZWdpbiBwcmlzbS1jb3JlLmpzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbnZhciBfc2VsZiA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJylcblx0PyB3aW5kb3cgICAvLyBpZiBpbiBicm93c2VyXG5cdDogKFxuXHRcdCh0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnICYmIHNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZSlcblx0XHQ/IHNlbGYgLy8gaWYgaW4gd29ya2VyXG5cdFx0OiB7fSAgIC8vIGlmIGluIG5vZGUganNcblx0KTtcblxuLyoqXG4gKiBQcmlzbTogTGlnaHR3ZWlnaHQsIHJvYnVzdCwgZWxlZ2FudCBzeW50YXggaGlnaGxpZ2h0aW5nXG4gKiBNSVQgbGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocC9cbiAqIEBhdXRob3IgTGVhIFZlcm91IGh0dHA6Ly9sZWEudmVyb3UubWVcbiAqL1xuXG52YXIgUHJpc20gPSAoZnVuY3Rpb24gKF9zZWxmKXtcblxuLy8gUHJpdmF0ZSBoZWxwZXIgdmFyc1xudmFyIGxhbmcgPSAvXFxibGFuZyg/OnVhZ2UpPy0oW1xcdy1dKylcXGIvaTtcbnZhciB1bmlxdWVJZCA9IDA7XG5cblxudmFyIF8gPSB7XG5cdG1hbnVhbDogX3NlbGYuUHJpc20gJiYgX3NlbGYuUHJpc20ubWFudWFsLFxuXHRkaXNhYmxlV29ya2VyTWVzc2FnZUhhbmRsZXI6IF9zZWxmLlByaXNtICYmIF9zZWxmLlByaXNtLmRpc2FibGVXb3JrZXJNZXNzYWdlSGFuZGxlcixcblx0dXRpbDoge1xuXHRcdGVuY29kZTogZnVuY3Rpb24gZW5jb2RlKHRva2Vucykge1xuXHRcdFx0aWYgKHRva2VucyBpbnN0YW5jZW9mIFRva2VuKSB7XG5cdFx0XHRcdHJldHVybiBuZXcgVG9rZW4odG9rZW5zLnR5cGUsIGVuY29kZSh0b2tlbnMuY29udGVudCksIHRva2Vucy5hbGlhcyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodG9rZW5zKSkge1xuXHRcdFx0XHRyZXR1cm4gdG9rZW5zLm1hcChlbmNvZGUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRva2Vucy5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC9cXHUwMGEwL2csICcgJyk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHR5cGU6IGZ1bmN0aW9uIChvKSB7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcblx0XHR9LFxuXG5cdFx0b2JqSWQ6IGZ1bmN0aW9uIChvYmopIHtcblx0XHRcdGlmICghb2JqWydfX2lkJ10pIHtcblx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgJ19faWQnLCB7IHZhbHVlOiArK3VuaXF1ZUlkIH0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG9ialsnX19pZCddO1xuXHRcdH0sXG5cblx0XHQvLyBEZWVwIGNsb25lIGEgbGFuZ3VhZ2UgZGVmaW5pdGlvbiAoZS5nLiB0byBleHRlbmQgaXQpXG5cdFx0Y2xvbmU6IGZ1bmN0aW9uIGRlZXBDbG9uZShvLCB2aXNpdGVkKSB7XG5cdFx0XHR2YXIgY2xvbmUsIGlkLCB0eXBlID0gXy51dGlsLnR5cGUobyk7XG5cdFx0XHR2aXNpdGVkID0gdmlzaXRlZCB8fCB7fTtcblxuXHRcdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRcdGNhc2UgJ09iamVjdCc6XG5cdFx0XHRcdFx0aWQgPSBfLnV0aWwub2JqSWQobyk7XG5cdFx0XHRcdFx0aWYgKHZpc2l0ZWRbaWRdKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmlzaXRlZFtpZF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNsb25lID0ge307XG5cdFx0XHRcdFx0dmlzaXRlZFtpZF0gPSBjbG9uZTtcblxuXHRcdFx0XHRcdGZvciAodmFyIGtleSBpbiBvKSB7XG5cdFx0XHRcdFx0XHRpZiAoby5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRcdFx0XHRcdGNsb25lW2tleV0gPSBkZWVwQ2xvbmUob1trZXldLCB2aXNpdGVkKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gY2xvbmU7XG5cblx0XHRcdFx0Y2FzZSAnQXJyYXknOlxuXHRcdFx0XHRcdGlkID0gXy51dGlsLm9iaklkKG8pO1xuXHRcdFx0XHRcdGlmICh2aXNpdGVkW2lkXSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHZpc2l0ZWRbaWRdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjbG9uZSA9IFtdO1xuXHRcdFx0XHRcdHZpc2l0ZWRbaWRdID0gY2xvbmU7XG5cblx0XHRcdFx0XHRvLmZvckVhY2goZnVuY3Rpb24gKHYsIGkpIHtcblx0XHRcdFx0XHRcdGNsb25lW2ldID0gZGVlcENsb25lKHYsIHZpc2l0ZWQpO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0cmV0dXJuIGNsb25lO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIG87XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFJldHVybnMgdGhlIFByaXNtIGxhbmd1YWdlIG9mIHRoZSBnaXZlbiBlbGVtZW50IHNldCBieSBhIGBsYW5ndWFnZS14eHh4YCBvciBgbGFuZy14eHh4YCBjbGFzcy5cblx0XHQgKlxuXHRcdCAqIElmIG5vIGxhbmd1YWdlIGlzIHNldCBmb3IgdGhlIGVsZW1lbnQgb3IgdGhlIGVsZW1lbnQgaXMgYG51bGxgIG9yIGB1bmRlZmluZWRgLCBgbm9uZWAgd2lsbCBiZSByZXR1cm5lZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0Z2V0TGFuZ3VhZ2U6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0XHR3aGlsZSAoZWxlbWVudCAmJiAhbGFuZy50ZXN0KGVsZW1lbnQuY2xhc3NOYW1lKSkge1xuXHRcdFx0XHRlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdFx0cmV0dXJuIChlbGVtZW50LmNsYXNzTmFtZS5tYXRjaChsYW5nKSB8fCBbLCAnbm9uZSddKVsxXS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICdub25lJztcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogUmV0dXJucyB0aGUgc2NyaXB0IGVsZW1lbnQgdGhhdCBpcyBjdXJyZW50bHkgZXhlY3V0aW5nLlxuXHRcdCAqXG5cdFx0ICogVGhpcyBkb2VzIF9fbm90X18gd29yayBmb3IgbGluZSBzY3JpcHQgZWxlbWVudC5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtIVE1MU2NyaXB0RWxlbWVudCB8IG51bGx9XG5cdFx0ICovXG5cdFx0Y3VycmVudFNjcmlwdDogZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cdFx0XHRpZiAoJ2N1cnJlbnRTY3JpcHQnIGluIGRvY3VtZW50KSB7XG5cdFx0XHRcdHJldHVybiBkb2N1bWVudC5jdXJyZW50U2NyaXB0O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJRTExIHdvcmthcm91bmRcblx0XHRcdC8vIHdlJ2xsIGdldCB0aGUgc3JjIG9mIHRoZSBjdXJyZW50IHNjcmlwdCBieSBwYXJzaW5nIElFMTEncyBlcnJvciBzdGFjayB0cmFjZVxuXHRcdFx0Ly8gdGhpcyB3aWxsIG5vdCB3b3JrIGZvciBpbmxpbmUgc2NyaXB0c1xuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoKTtcblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHQvLyBHZXQgZmlsZSBzcmMgdXJsIGZyb20gc3RhY2suIFNwZWNpZmljYWxseSB3b3JrcyB3aXRoIHRoZSBmb3JtYXQgb2Ygc3RhY2sgdHJhY2VzIGluIElFLlxuXHRcdFx0XHQvLyBBIHN0YWNrIHdpbGwgbG9vayBsaWtlIHRoaXM6XG5cdFx0XHRcdC8vXG5cdFx0XHRcdC8vIEVycm9yXG5cdFx0XHRcdC8vICAgIGF0IF8udXRpbC5jdXJyZW50U2NyaXB0IChodHRwOi8vbG9jYWxob3N0L2NvbXBvbmVudHMvcHJpc20tY29yZS5qczoxMTk6NSlcblx0XHRcdFx0Ly8gICAgYXQgR2xvYmFsIGNvZGUgKGh0dHA6Ly9sb2NhbGhvc3QvY29tcG9uZW50cy9wcmlzbS1jb3JlLmpzOjYwNjoxKVxuXG5cdFx0XHRcdHZhciBzcmMgPSAoL2F0IFteKFxcclxcbl0qXFwoKC4qKTouKzouK1xcKSQvaS5leGVjKGVyci5zdGFjaykgfHwgW10pWzFdO1xuXHRcdFx0XHRpZiAoc3JjKSB7XG5cdFx0XHRcdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XG5cdFx0XHRcdFx0Zm9yICh2YXIgaSBpbiBzY3JpcHRzKSB7XG5cdFx0XHRcdFx0XHRpZiAoc2NyaXB0c1tpXS5zcmMgPT0gc3JjKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzY3JpcHRzW2ldO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0bGFuZ3VhZ2VzOiB7XG5cdFx0ZXh0ZW5kOiBmdW5jdGlvbiAoaWQsIHJlZGVmKSB7XG5cdFx0XHR2YXIgbGFuZyA9IF8udXRpbC5jbG9uZShfLmxhbmd1YWdlc1tpZF0pO1xuXG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gcmVkZWYpIHtcblx0XHRcdFx0bGFuZ1trZXldID0gcmVkZWZba2V5XTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGxhbmc7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEluc2VydCBhIHRva2VuIGJlZm9yZSBhbm90aGVyIHRva2VuIGluIGEgbGFuZ3VhZ2UgbGl0ZXJhbFxuXHRcdCAqIEFzIHRoaXMgbmVlZHMgdG8gcmVjcmVhdGUgdGhlIG9iamVjdCAod2UgY2Fubm90IGFjdHVhbGx5IGluc2VydCBiZWZvcmUga2V5cyBpbiBvYmplY3QgbGl0ZXJhbHMpLFxuXHRcdCAqIHdlIGNhbm5vdCBqdXN0IHByb3ZpZGUgYW4gb2JqZWN0LCB3ZSBuZWVkIGFuIG9iamVjdCBhbmQgYSBrZXkuXG5cdFx0ICogQHBhcmFtIGluc2lkZSBUaGUga2V5IChvciBsYW5ndWFnZSBpZCkgb2YgdGhlIHBhcmVudFxuXHRcdCAqIEBwYXJhbSBiZWZvcmUgVGhlIGtleSB0byBpbnNlcnQgYmVmb3JlLlxuXHRcdCAqIEBwYXJhbSBpbnNlcnQgT2JqZWN0IHdpdGggdGhlIGtleS92YWx1ZSBwYWlycyB0byBpbnNlcnRcblx0XHQgKiBAcGFyYW0gcm9vdCBUaGUgb2JqZWN0IHRoYXQgY29udGFpbnMgYGluc2lkZWAuIElmIGVxdWFsIHRvIFByaXNtLmxhbmd1YWdlcywgaXQgY2FuIGJlIG9taXR0ZWQuXG5cdFx0ICovXG5cdFx0aW5zZXJ0QmVmb3JlOiBmdW5jdGlvbiAoaW5zaWRlLCBiZWZvcmUsIGluc2VydCwgcm9vdCkge1xuXHRcdFx0cm9vdCA9IHJvb3QgfHwgXy5sYW5ndWFnZXM7XG5cdFx0XHR2YXIgZ3JhbW1hciA9IHJvb3RbaW5zaWRlXTtcblx0XHRcdHZhciByZXQgPSB7fTtcblxuXHRcdFx0Zm9yICh2YXIgdG9rZW4gaW4gZ3JhbW1hcikge1xuXHRcdFx0XHRpZiAoZ3JhbW1hci5oYXNPd25Qcm9wZXJ0eSh0b2tlbikpIHtcblxuXHRcdFx0XHRcdGlmICh0b2tlbiA9PSBiZWZvcmUpIHtcblx0XHRcdFx0XHRcdGZvciAodmFyIG5ld1Rva2VuIGluIGluc2VydCkge1xuXHRcdFx0XHRcdFx0XHRpZiAoaW5zZXJ0Lmhhc093blByb3BlcnR5KG5ld1Rva2VuKSkge1xuXHRcdFx0XHRcdFx0XHRcdHJldFtuZXdUb2tlbl0gPSBpbnNlcnRbbmV3VG9rZW5dO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gRG8gbm90IGluc2VydCB0b2tlbiB3aGljaCBhbHNvIG9jY3VyIGluIGluc2VydC4gU2VlICMxNTI1XG5cdFx0XHRcdFx0aWYgKCFpbnNlcnQuaGFzT3duUHJvcGVydHkodG9rZW4pKSB7XG5cdFx0XHRcdFx0XHRyZXRbdG9rZW5dID0gZ3JhbW1hclt0b2tlbl07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHZhciBvbGQgPSByb290W2luc2lkZV07XG5cdFx0XHRyb290W2luc2lkZV0gPSByZXQ7XG5cblx0XHRcdC8vIFVwZGF0ZSByZWZlcmVuY2VzIGluIG90aGVyIGxhbmd1YWdlIGRlZmluaXRpb25zXG5cdFx0XHRfLmxhbmd1YWdlcy5ERlMoXy5sYW5ndWFnZXMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcblx0XHRcdFx0aWYgKHZhbHVlID09PSBvbGQgJiYga2V5ICE9IGluc2lkZSkge1xuXHRcdFx0XHRcdHRoaXNba2V5XSA9IHJldDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fSxcblxuXHRcdC8vIFRyYXZlcnNlIGEgbGFuZ3VhZ2UgZGVmaW5pdGlvbiB3aXRoIERlcHRoIEZpcnN0IFNlYXJjaFxuXHRcdERGUzogZnVuY3Rpb24gREZTKG8sIGNhbGxiYWNrLCB0eXBlLCB2aXNpdGVkKSB7XG5cdFx0XHR2aXNpdGVkID0gdmlzaXRlZCB8fCB7fTtcblxuXHRcdFx0dmFyIG9iaklkID0gXy51dGlsLm9iaklkO1xuXG5cdFx0XHRmb3IgKHZhciBpIGluIG8pIHtcblx0XHRcdFx0aWYgKG8uaGFzT3duUHJvcGVydHkoaSkpIHtcblx0XHRcdFx0XHRjYWxsYmFjay5jYWxsKG8sIGksIG9baV0sIHR5cGUgfHwgaSk7XG5cblx0XHRcdFx0XHR2YXIgcHJvcGVydHkgPSBvW2ldLFxuXHRcdFx0XHRcdCAgICBwcm9wZXJ0eVR5cGUgPSBfLnV0aWwudHlwZShwcm9wZXJ0eSk7XG5cblx0XHRcdFx0XHRpZiAocHJvcGVydHlUeXBlID09PSAnT2JqZWN0JyAmJiAhdmlzaXRlZFtvYmpJZChwcm9wZXJ0eSldKSB7XG5cdFx0XHRcdFx0XHR2aXNpdGVkW29iaklkKHByb3BlcnR5KV0gPSB0cnVlO1xuXHRcdFx0XHRcdFx0REZTKHByb3BlcnR5LCBjYWxsYmFjaywgbnVsbCwgdmlzaXRlZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgaWYgKHByb3BlcnR5VHlwZSA9PT0gJ0FycmF5JyAmJiAhdmlzaXRlZFtvYmpJZChwcm9wZXJ0eSldKSB7XG5cdFx0XHRcdFx0XHR2aXNpdGVkW29iaklkKHByb3BlcnR5KV0gPSB0cnVlO1xuXHRcdFx0XHRcdFx0REZTKHByb3BlcnR5LCBjYWxsYmFjaywgaSwgdmlzaXRlZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRwbHVnaW5zOiB7fSxcblxuXHRoaWdobGlnaHRBbGw6IGZ1bmN0aW9uKGFzeW5jLCBjYWxsYmFjaykge1xuXHRcdF8uaGlnaGxpZ2h0QWxsVW5kZXIoZG9jdW1lbnQsIGFzeW5jLCBjYWxsYmFjayk7XG5cdH0sXG5cblx0aGlnaGxpZ2h0QWxsVW5kZXI6IGZ1bmN0aW9uKGNvbnRhaW5lciwgYXN5bmMsIGNhbGxiYWNrKSB7XG5cdFx0dmFyIGVudiA9IHtcblx0XHRcdGNhbGxiYWNrOiBjYWxsYmFjayxcblx0XHRcdGNvbnRhaW5lcjogY29udGFpbmVyLFxuXHRcdFx0c2VsZWN0b3I6ICdjb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSwgW2NsYXNzKj1cImxhbmd1YWdlLVwiXSBjb2RlLCBjb2RlW2NsYXNzKj1cImxhbmctXCJdLCBbY2xhc3MqPVwibGFuZy1cIl0gY29kZSdcblx0XHR9O1xuXG5cdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS1oaWdobGlnaHRhbGwnLCBlbnYpO1xuXG5cdFx0ZW52LmVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGVudi5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChlbnYuc2VsZWN0b3IpKTtcblxuXHRcdF8uaG9va3MucnVuKCdiZWZvcmUtYWxsLWVsZW1lbnRzLWhpZ2hsaWdodCcsIGVudik7XG5cblx0XHRmb3IgKHZhciBpID0gMCwgZWxlbWVudDsgZWxlbWVudCA9IGVudi5lbGVtZW50c1tpKytdOykge1xuXHRcdFx0Xy5oaWdobGlnaHRFbGVtZW50KGVsZW1lbnQsIGFzeW5jID09PSB0cnVlLCBlbnYuY2FsbGJhY2spO1xuXHRcdH1cblx0fSxcblxuXHRoaWdobGlnaHRFbGVtZW50OiBmdW5jdGlvbihlbGVtZW50LCBhc3luYywgY2FsbGJhY2spIHtcblx0XHQvLyBGaW5kIGxhbmd1YWdlXG5cdFx0dmFyIGxhbmd1YWdlID0gXy51dGlsLmdldExhbmd1YWdlKGVsZW1lbnQpO1xuXHRcdHZhciBncmFtbWFyID0gXy5sYW5ndWFnZXNbbGFuZ3VhZ2VdO1xuXG5cdFx0Ly8gU2V0IGxhbmd1YWdlIG9uIHRoZSBlbGVtZW50LCBpZiBub3QgcHJlc2VudFxuXHRcdGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShsYW5nLCAnJykucmVwbGFjZSgvXFxzKy9nLCAnICcpICsgJyBsYW5ndWFnZS0nICsgbGFuZ3VhZ2U7XG5cblx0XHQvLyBTZXQgbGFuZ3VhZ2Ugb24gdGhlIHBhcmVudCwgZm9yIHN0eWxpbmdcblx0XHR2YXIgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuXHRcdGlmIChwYXJlbnQgJiYgcGFyZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdwcmUnKSB7XG5cdFx0XHRwYXJlbnQuY2xhc3NOYW1lID0gcGFyZW50LmNsYXNzTmFtZS5yZXBsYWNlKGxhbmcsICcnKS5yZXBsYWNlKC9cXHMrL2csICcgJykgKyAnIGxhbmd1YWdlLScgKyBsYW5ndWFnZTtcblx0XHR9XG5cblx0XHR2YXIgY29kZSA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG5cblx0XHR2YXIgZW52ID0ge1xuXHRcdFx0ZWxlbWVudDogZWxlbWVudCxcblx0XHRcdGxhbmd1YWdlOiBsYW5ndWFnZSxcblx0XHRcdGdyYW1tYXI6IGdyYW1tYXIsXG5cdFx0XHRjb2RlOiBjb2RlXG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIGluc2VydEhpZ2hsaWdodGVkQ29kZShoaWdobGlnaHRlZENvZGUpIHtcblx0XHRcdGVudi5oaWdobGlnaHRlZENvZGUgPSBoaWdobGlnaHRlZENvZGU7XG5cblx0XHRcdF8uaG9va3MucnVuKCdiZWZvcmUtaW5zZXJ0JywgZW52KTtcblxuXHRcdFx0ZW52LmVsZW1lbnQuaW5uZXJIVE1MID0gZW52LmhpZ2hsaWdodGVkQ29kZTtcblxuXHRcdFx0Xy5ob29rcy5ydW4oJ2FmdGVyLWhpZ2hsaWdodCcsIGVudik7XG5cdFx0XHRfLmhvb2tzLnJ1bignY29tcGxldGUnLCBlbnYpO1xuXHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2suY2FsbChlbnYuZWxlbWVudCk7XG5cdFx0fVxuXG5cdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS1zYW5pdHktY2hlY2snLCBlbnYpO1xuXG5cdFx0aWYgKCFlbnYuY29kZSkge1xuXHRcdFx0Xy5ob29rcy5ydW4oJ2NvbXBsZXRlJywgZW52KTtcblx0XHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrLmNhbGwoZW52LmVsZW1lbnQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdF8uaG9va3MucnVuKCdiZWZvcmUtaGlnaGxpZ2h0JywgZW52KTtcblxuXHRcdGlmICghZW52LmdyYW1tYXIpIHtcblx0XHRcdGluc2VydEhpZ2hsaWdodGVkQ29kZShfLnV0aWwuZW5jb2RlKGVudi5jb2RlKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGFzeW5jICYmIF9zZWxmLldvcmtlcikge1xuXHRcdFx0dmFyIHdvcmtlciA9IG5ldyBXb3JrZXIoXy5maWxlbmFtZSk7XG5cblx0XHRcdHdvcmtlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldnQpIHtcblx0XHRcdFx0aW5zZXJ0SGlnaGxpZ2h0ZWRDb2RlKGV2dC5kYXRhKTtcblx0XHRcdH07XG5cblx0XHRcdHdvcmtlci5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdGxhbmd1YWdlOiBlbnYubGFuZ3VhZ2UsXG5cdFx0XHRcdGNvZGU6IGVudi5jb2RlLFxuXHRcdFx0XHRpbW1lZGlhdGVDbG9zZTogdHJ1ZVxuXHRcdFx0fSkpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGluc2VydEhpZ2hsaWdodGVkQ29kZShfLmhpZ2hsaWdodChlbnYuY29kZSwgZW52LmdyYW1tYXIsIGVudi5sYW5ndWFnZSkpO1xuXHRcdH1cblx0fSxcblxuXHRoaWdobGlnaHQ6IGZ1bmN0aW9uICh0ZXh0LCBncmFtbWFyLCBsYW5ndWFnZSkge1xuXHRcdHZhciBlbnYgPSB7XG5cdFx0XHRjb2RlOiB0ZXh0LFxuXHRcdFx0Z3JhbW1hcjogZ3JhbW1hcixcblx0XHRcdGxhbmd1YWdlOiBsYW5ndWFnZVxuXHRcdH07XG5cdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS10b2tlbml6ZScsIGVudik7XG5cdFx0ZW52LnRva2VucyA9IF8udG9rZW5pemUoZW52LmNvZGUsIGVudi5ncmFtbWFyKTtcblx0XHRfLmhvb2tzLnJ1bignYWZ0ZXItdG9rZW5pemUnLCBlbnYpO1xuXHRcdHJldHVybiBUb2tlbi5zdHJpbmdpZnkoXy51dGlsLmVuY29kZShlbnYudG9rZW5zKSwgZW52Lmxhbmd1YWdlKTtcblx0fSxcblxuXHR0b2tlbml6ZTogZnVuY3Rpb24odGV4dCwgZ3JhbW1hcikge1xuXHRcdHZhciByZXN0ID0gZ3JhbW1hci5yZXN0O1xuXHRcdGlmIChyZXN0KSB7XG5cdFx0XHRmb3IgKHZhciB0b2tlbiBpbiByZXN0KSB7XG5cdFx0XHRcdGdyYW1tYXJbdG9rZW5dID0gcmVzdFt0b2tlbl07XG5cdFx0XHR9XG5cblx0XHRcdGRlbGV0ZSBncmFtbWFyLnJlc3Q7XG5cdFx0fVxuXG5cdFx0dmFyIHRva2VuTGlzdCA9IG5ldyBMaW5rZWRMaXN0KCk7XG5cdFx0YWRkQWZ0ZXIodG9rZW5MaXN0LCB0b2tlbkxpc3QuaGVhZCwgdGV4dCk7XG5cblx0XHRtYXRjaEdyYW1tYXIodGV4dCwgdG9rZW5MaXN0LCBncmFtbWFyLCB0b2tlbkxpc3QuaGVhZCwgMCk7XG5cblx0XHRyZXR1cm4gdG9BcnJheSh0b2tlbkxpc3QpO1xuXHR9LFxuXG5cdGhvb2tzOiB7XG5cdFx0YWxsOiB7fSxcblxuXHRcdGFkZDogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgaG9va3MgPSBfLmhvb2tzLmFsbDtcblxuXHRcdFx0aG9va3NbbmFtZV0gPSBob29rc1tuYW1lXSB8fCBbXTtcblxuXHRcdFx0aG9va3NbbmFtZV0ucHVzaChjYWxsYmFjayk7XG5cdFx0fSxcblxuXHRcdHJ1bjogZnVuY3Rpb24gKG5hbWUsIGVudikge1xuXHRcdFx0dmFyIGNhbGxiYWNrcyA9IF8uaG9va3MuYWxsW25hbWVdO1xuXG5cdFx0XHRpZiAoIWNhbGxiYWNrcyB8fCAhY2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGZvciAodmFyIGk9MCwgY2FsbGJhY2s7IGNhbGxiYWNrID0gY2FsbGJhY2tzW2krK107KSB7XG5cdFx0XHRcdGNhbGxiYWNrKGVudik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdFRva2VuOiBUb2tlblxufTtcblxuX3NlbGYuUHJpc20gPSBfO1xuXG5mdW5jdGlvbiBUb2tlbih0eXBlLCBjb250ZW50LCBhbGlhcywgbWF0Y2hlZFN0ciwgZ3JlZWR5KSB7XG5cdHRoaXMudHlwZSA9IHR5cGU7XG5cdHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG5cdHRoaXMuYWxpYXMgPSBhbGlhcztcblx0Ly8gQ29weSBvZiB0aGUgZnVsbCBzdHJpbmcgdGhpcyB0b2tlbiB3YXMgY3JlYXRlZCBmcm9tXG5cdHRoaXMubGVuZ3RoID0gKG1hdGNoZWRTdHIgfHwgJycpLmxlbmd0aHwwO1xuXHR0aGlzLmdyZWVkeSA9ICEhZ3JlZWR5O1xufVxuXG5Ub2tlbi5zdHJpbmdpZnkgPSBmdW5jdGlvbiBzdHJpbmdpZnkobywgbGFuZ3VhZ2UpIHtcblx0aWYgKHR5cGVvZiBvID09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIG87XG5cdH1cblx0aWYgKEFycmF5LmlzQXJyYXkobykpIHtcblx0XHR2YXIgcyA9ICcnO1xuXHRcdG8uZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuXHRcdFx0cyArPSBzdHJpbmdpZnkoZSwgbGFuZ3VhZ2UpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBzO1xuXHR9XG5cblx0dmFyIGVudiA9IHtcblx0XHR0eXBlOiBvLnR5cGUsXG5cdFx0Y29udGVudDogc3RyaW5naWZ5KG8uY29udGVudCwgbGFuZ3VhZ2UpLFxuXHRcdHRhZzogJ3NwYW4nLFxuXHRcdGNsYXNzZXM6IFsndG9rZW4nLCBvLnR5cGVdLFxuXHRcdGF0dHJpYnV0ZXM6IHt9LFxuXHRcdGxhbmd1YWdlOiBsYW5ndWFnZVxuXHR9O1xuXG5cdHZhciBhbGlhc2VzID0gby5hbGlhcztcblx0aWYgKGFsaWFzZXMpIHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheShhbGlhc2VzKSkge1xuXHRcdFx0QXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoZW52LmNsYXNzZXMsIGFsaWFzZXMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbnYuY2xhc3Nlcy5wdXNoKGFsaWFzZXMpO1xuXHRcdH1cblx0fVxuXG5cdF8uaG9va3MucnVuKCd3cmFwJywgZW52KTtcblxuXHR2YXIgYXR0cmlidXRlcyA9ICcnO1xuXHRmb3IgKHZhciBuYW1lIGluIGVudi5hdHRyaWJ1dGVzKSB7XG5cdFx0YXR0cmlidXRlcyArPSAnICcgKyBuYW1lICsgJz1cIicgKyAoZW52LmF0dHJpYnV0ZXNbbmFtZV0gfHwgJycpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKSArICdcIic7XG5cdH1cblxuXHRyZXR1cm4gJzwnICsgZW52LnRhZyArICcgY2xhc3M9XCInICsgZW52LmNsYXNzZXMuam9pbignICcpICsgJ1wiJyArIGF0dHJpYnV0ZXMgKyAnPicgKyBlbnYuY29udGVudCArICc8LycgKyBlbnYudGFnICsgJz4nO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuICogQHBhcmFtIHtMaW5rZWRMaXN0PHN0cmluZyB8IFRva2VuPn0gdG9rZW5MaXN0XG4gKiBAcGFyYW0ge2FueX0gZ3JhbW1hclxuICogQHBhcmFtIHtMaW5rZWRMaXN0Tm9kZTxzdHJpbmcgfCBUb2tlbj59IHN0YXJ0Tm9kZVxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0UG9zXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvbmVzaG90PWZhbHNlXVxuICogQHBhcmFtIHtzdHJpbmd9IFt0YXJnZXRdXG4gKi9cbmZ1bmN0aW9uIG1hdGNoR3JhbW1hcih0ZXh0LCB0b2tlbkxpc3QsIGdyYW1tYXIsIHN0YXJ0Tm9kZSwgc3RhcnRQb3MsIG9uZXNob3QsIHRhcmdldCkge1xuXHRmb3IgKHZhciB0b2tlbiBpbiBncmFtbWFyKSB7XG5cdFx0aWYgKCFncmFtbWFyLmhhc093blByb3BlcnR5KHRva2VuKSB8fCAhZ3JhbW1hclt0b2tlbl0pIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHZhciBwYXR0ZXJucyA9IGdyYW1tYXJbdG9rZW5dO1xuXHRcdHBhdHRlcm5zID0gQXJyYXkuaXNBcnJheShwYXR0ZXJucykgPyBwYXR0ZXJucyA6IFtwYXR0ZXJuc107XG5cblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHBhdHRlcm5zLmxlbmd0aDsgKytqKSB7XG5cdFx0XHRpZiAodGFyZ2V0ICYmIHRhcmdldCA9PSB0b2tlbiArICcsJyArIGopIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgcGF0dGVybiA9IHBhdHRlcm5zW2pdLFxuXHRcdFx0XHRpbnNpZGUgPSBwYXR0ZXJuLmluc2lkZSxcblx0XHRcdFx0bG9va2JlaGluZCA9ICEhcGF0dGVybi5sb29rYmVoaW5kLFxuXHRcdFx0XHRncmVlZHkgPSAhIXBhdHRlcm4uZ3JlZWR5LFxuXHRcdFx0XHRsb29rYmVoaW5kTGVuZ3RoID0gMCxcblx0XHRcdFx0YWxpYXMgPSBwYXR0ZXJuLmFsaWFzO1xuXG5cdFx0XHRpZiAoZ3JlZWR5ICYmICFwYXR0ZXJuLnBhdHRlcm4uZ2xvYmFsKSB7XG5cdFx0XHRcdC8vIFdpdGhvdXQgdGhlIGdsb2JhbCBmbGFnLCBsYXN0SW5kZXggd29uJ3Qgd29ya1xuXHRcdFx0XHR2YXIgZmxhZ3MgPSBwYXR0ZXJuLnBhdHRlcm4udG9TdHJpbmcoKS5tYXRjaCgvW2ltc3V5XSokLylbMF07XG5cdFx0XHRcdHBhdHRlcm4ucGF0dGVybiA9IFJlZ0V4cChwYXR0ZXJuLnBhdHRlcm4uc291cmNlLCBmbGFncyArICdnJyk7XG5cdFx0XHR9XG5cblx0XHRcdHBhdHRlcm4gPSBwYXR0ZXJuLnBhdHRlcm4gfHwgcGF0dGVybjtcblxuXHRcdFx0Zm9yICggLy8gaXRlcmF0ZSB0aGUgdG9rZW4gbGlzdCBhbmQga2VlcCB0cmFjayBvZiB0aGUgY3VycmVudCB0b2tlbi9zdHJpbmcgcG9zaXRpb25cblx0XHRcdFx0dmFyIGN1cnJlbnROb2RlID0gc3RhcnROb2RlLm5leHQsIHBvcyA9IHN0YXJ0UG9zO1xuXHRcdFx0XHRjdXJyZW50Tm9kZSAhPT0gdG9rZW5MaXN0LnRhaWw7XG5cdFx0XHRcdHBvcyArPSBjdXJyZW50Tm9kZS52YWx1ZS5sZW5ndGgsIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUubmV4dFxuXHRcdFx0KSB7XG5cblx0XHRcdFx0dmFyIHN0ciA9IGN1cnJlbnROb2RlLnZhbHVlO1xuXG5cdFx0XHRcdGlmICh0b2tlbkxpc3QubGVuZ3RoID4gdGV4dC5sZW5ndGgpIHtcblx0XHRcdFx0XHQvLyBTb21ldGhpbmcgd2VudCB0ZXJyaWJseSB3cm9uZywgQUJPUlQsIEFCT1JUIVxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChzdHIgaW5zdGFuY2VvZiBUb2tlbikge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIHJlbW92ZUNvdW50ID0gMTsgLy8gdGhpcyBpcyB0aGUgdG8gcGFyYW1ldGVyIG9mIHJlbW92ZUJldHdlZW5cblxuXHRcdFx0XHRpZiAoZ3JlZWR5ICYmIGN1cnJlbnROb2RlICE9IHRva2VuTGlzdC50YWlsLnByZXYpIHtcblx0XHRcdFx0XHRwYXR0ZXJuLmxhc3RJbmRleCA9IHBvcztcblx0XHRcdFx0XHR2YXIgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGV4dCk7XG5cdFx0XHRcdFx0aWYgKCFtYXRjaCkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dmFyIGZyb20gPSBtYXRjaC5pbmRleCArIChsb29rYmVoaW5kICYmIG1hdGNoWzFdID8gbWF0Y2hbMV0ubGVuZ3RoIDogMCk7XG5cdFx0XHRcdFx0dmFyIHRvID0gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGg7XG5cdFx0XHRcdFx0dmFyIHAgPSBwb3M7XG5cblx0XHRcdFx0XHQvLyBmaW5kIHRoZSBub2RlIHRoYXQgY29udGFpbnMgdGhlIG1hdGNoXG5cdFx0XHRcdFx0cCArPSBjdXJyZW50Tm9kZS52YWx1ZS5sZW5ndGg7XG5cdFx0XHRcdFx0d2hpbGUgKGZyb20gPj0gcCkge1xuXHRcdFx0XHRcdFx0Y3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5uZXh0O1xuXHRcdFx0XHRcdFx0cCArPSBjdXJyZW50Tm9kZS52YWx1ZS5sZW5ndGg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGFkanVzdCBwb3MgKGFuZCBwKVxuXHRcdFx0XHRcdHAgLT0gY3VycmVudE5vZGUudmFsdWUubGVuZ3RoO1xuXHRcdFx0XHRcdHBvcyA9IHA7XG5cblx0XHRcdFx0XHQvLyB0aGUgY3VycmVudCBub2RlIGlzIGEgVG9rZW4sIHRoZW4gdGhlIG1hdGNoIHN0YXJ0cyBpbnNpZGUgYW5vdGhlciBUb2tlbiwgd2hpY2ggaXMgaW52YWxpZFxuXHRcdFx0XHRcdGlmIChjdXJyZW50Tm9kZS52YWx1ZSBpbnN0YW5jZW9mIFRva2VuKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBmaW5kIHRoZSBsYXN0IG5vZGUgd2hpY2ggaXMgYWZmZWN0ZWQgYnkgdGhpcyBtYXRjaFxuXHRcdFx0XHRcdGZvciAoXG5cdFx0XHRcdFx0XHR2YXIgayA9IGN1cnJlbnROb2RlO1xuXHRcdFx0XHRcdFx0ayAhPT0gdG9rZW5MaXN0LnRhaWwgJiYgKHAgPCB0byB8fCAodHlwZW9mIGsudmFsdWUgPT09ICdzdHJpbmcnICYmICFrLnByZXYudmFsdWUuZ3JlZWR5KSk7XG5cdFx0XHRcdFx0XHRrID0gay5uZXh0XG5cdFx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0XHRyZW1vdmVDb3VudCsrO1xuXHRcdFx0XHRcdFx0cCArPSBrLnZhbHVlLmxlbmd0aDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmVtb3ZlQ291bnQtLTtcblxuXHRcdFx0XHRcdC8vIHJlcGxhY2Ugd2l0aCB0aGUgbmV3IG1hdGNoXG5cdFx0XHRcdFx0c3RyID0gdGV4dC5zbGljZShwb3MsIHApO1xuXHRcdFx0XHRcdG1hdGNoLmluZGV4IC09IHBvcztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRwYXR0ZXJuLmxhc3RJbmRleCA9IDA7XG5cblx0XHRcdFx0XHR2YXIgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMoc3RyKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICghbWF0Y2gpIHtcblx0XHRcdFx0XHRpZiAob25lc2hvdCkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAobG9va2JlaGluZCkge1xuXHRcdFx0XHRcdGxvb2tiZWhpbmRMZW5ndGggPSBtYXRjaFsxXSA/IG1hdGNoWzFdLmxlbmd0aCA6IDA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgZnJvbSA9IG1hdGNoLmluZGV4ICsgbG9va2JlaGluZExlbmd0aCxcblx0XHRcdFx0XHRtYXRjaCA9IG1hdGNoWzBdLnNsaWNlKGxvb2tiZWhpbmRMZW5ndGgpLFxuXHRcdFx0XHRcdHRvID0gZnJvbSArIG1hdGNoLmxlbmd0aCxcblx0XHRcdFx0XHRiZWZvcmUgPSBzdHIuc2xpY2UoMCwgZnJvbSksXG5cdFx0XHRcdFx0YWZ0ZXIgPSBzdHIuc2xpY2UodG8pO1xuXG5cdFx0XHRcdHZhciByZW1vdmVGcm9tID0gY3VycmVudE5vZGUucHJldjtcblxuXHRcdFx0XHRpZiAoYmVmb3JlKSB7XG5cdFx0XHRcdFx0cmVtb3ZlRnJvbSA9IGFkZEFmdGVyKHRva2VuTGlzdCwgcmVtb3ZlRnJvbSwgYmVmb3JlKTtcblx0XHRcdFx0XHRwb3MgKz0gYmVmb3JlLmxlbmd0aDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJlbW92ZVJhbmdlKHRva2VuTGlzdCwgcmVtb3ZlRnJvbSwgcmVtb3ZlQ291bnQpO1xuXG5cdFx0XHRcdHZhciB3cmFwcGVkID0gbmV3IFRva2VuKHRva2VuLCBpbnNpZGUgPyBfLnRva2VuaXplKG1hdGNoLCBpbnNpZGUpIDogbWF0Y2gsIGFsaWFzLCBtYXRjaCwgZ3JlZWR5KTtcblx0XHRcdFx0Y3VycmVudE5vZGUgPSBhZGRBZnRlcih0b2tlbkxpc3QsIHJlbW92ZUZyb20sIHdyYXBwZWQpO1xuXG5cdFx0XHRcdGlmIChhZnRlcikge1xuXHRcdFx0XHRcdGFkZEFmdGVyKHRva2VuTGlzdCwgY3VycmVudE5vZGUsIGFmdGVyKTtcblx0XHRcdFx0fVxuXG5cblx0XHRcdFx0aWYgKHJlbW92ZUNvdW50ID4gMSlcblx0XHRcdFx0XHRtYXRjaEdyYW1tYXIodGV4dCwgdG9rZW5MaXN0LCBncmFtbWFyLCBjdXJyZW50Tm9kZS5wcmV2LCBwb3MsIHRydWUsIHRva2VuICsgJywnICsgaik7XG5cblx0XHRcdFx0aWYgKG9uZXNob3QpXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogQHR5cGVkZWYgTGlua2VkTGlzdE5vZGVcbiAqIEBwcm9wZXJ0eSB7VH0gdmFsdWVcbiAqIEBwcm9wZXJ0eSB7TGlua2VkTGlzdE5vZGU8VD4gfCBudWxsfSBwcmV2IFRoZSBwcmV2aW91cyBub2RlLlxuICogQHByb3BlcnR5IHtMaW5rZWRMaXN0Tm9kZTxUPiB8IG51bGx9IG5leHQgVGhlIG5leHQgbm9kZS5cbiAqIEB0ZW1wbGF0ZSBUXG4gKi9cblxuLyoqXG4gKiBAdGVtcGxhdGUgVFxuICovXG5mdW5jdGlvbiBMaW5rZWRMaXN0KCkge1xuXHQvKiogQHR5cGUge0xpbmtlZExpc3ROb2RlPFQ+fSAqL1xuXHR2YXIgaGVhZCA9IHsgdmFsdWU6IG51bGwsIHByZXY6IG51bGwsIG5leHQ6IG51bGwgfTtcblx0LyoqIEB0eXBlIHtMaW5rZWRMaXN0Tm9kZTxUPn0gKi9cblx0dmFyIHRhaWwgPSB7IHZhbHVlOiBudWxsLCBwcmV2OiBoZWFkLCBuZXh0OiBudWxsIH07XG5cdGhlYWQubmV4dCA9IHRhaWw7XG5cblx0LyoqIEB0eXBlIHtMaW5rZWRMaXN0Tm9kZTxUPn0gKi9cblx0dGhpcy5oZWFkID0gaGVhZDtcblx0LyoqIEB0eXBlIHtMaW5rZWRMaXN0Tm9kZTxUPn0gKi9cblx0dGhpcy50YWlsID0gdGFpbDtcblx0dGhpcy5sZW5ndGggPSAwO1xufVxuXG4vKipcbiAqIEFkZHMgYSBuZXcgbm9kZSB3aXRoIHRoZSBnaXZlbiB2YWx1ZSB0byB0aGUgbGlzdC5cbiAqIEBwYXJhbSB7TGlua2VkTGlzdDxUPn0gbGlzdFxuICogQHBhcmFtIHtMaW5rZWRMaXN0Tm9kZTxUPn0gbm9kZVxuICogQHBhcmFtIHtUfSB2YWx1ZVxuICogQHJldHVybnMge0xpbmtlZExpc3ROb2RlPFQ+fSBUaGUgYWRkZWQgbm9kZS5cbiAqIEB0ZW1wbGF0ZSBUXG4gKi9cbmZ1bmN0aW9uIGFkZEFmdGVyKGxpc3QsIG5vZGUsIHZhbHVlKSB7XG5cdC8vIGFzc3VtZXMgdGhhdCBub2RlICE9IGxpc3QudGFpbCAmJiB2YWx1ZXMubGVuZ3RoID49IDBcblx0dmFyIG5leHQgPSBub2RlLm5leHQ7XG5cblx0dmFyIG5ld05vZGUgPSB7IHZhbHVlOiB2YWx1ZSwgcHJldjogbm9kZSwgbmV4dDogbmV4dCB9O1xuXHRub2RlLm5leHQgPSBuZXdOb2RlO1xuXHRuZXh0LnByZXYgPSBuZXdOb2RlO1xuXHRsaXN0Lmxlbmd0aCsrO1xuXG5cdHJldHVybiBuZXdOb2RlO1xufVxuLyoqXG4gKiBSZW1vdmVzIGBjb3VudGAgbm9kZXMgYWZ0ZXIgdGhlIGdpdmVuIG5vZGUuIFRoZSBnaXZlbiBub2RlIHdpbGwgbm90IGJlIHJlbW92ZWQuXG4gKiBAcGFyYW0ge0xpbmtlZExpc3Q8VD59IGxpc3RcbiAqIEBwYXJhbSB7TGlua2VkTGlzdE5vZGU8VD59IG5vZGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudFxuICogQHRlbXBsYXRlIFRcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlUmFuZ2UobGlzdCwgbm9kZSwgY291bnQpIHtcblx0dmFyIG5leHQgPSBub2RlLm5leHQ7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQgJiYgbmV4dCAhPT0gbGlzdC50YWlsOyBpKyspIHtcblx0XHRuZXh0ID0gbmV4dC5uZXh0O1xuXHR9XG5cdG5vZGUubmV4dCA9IG5leHQ7XG5cdG5leHQucHJldiA9IG5vZGU7XG5cdGxpc3QubGVuZ3RoIC09IGk7XG59XG4vKipcbiAqIEBwYXJhbSB7TGlua2VkTGlzdDxUPn0gbGlzdFxuICogQHJldHVybnMge1RbXX1cbiAqIEB0ZW1wbGF0ZSBUXG4gKi9cbmZ1bmN0aW9uIHRvQXJyYXkobGlzdCkge1xuXHR2YXIgYXJyYXkgPSBbXTtcblx0dmFyIG5vZGUgPSBsaXN0LmhlYWQubmV4dDtcblx0d2hpbGUgKG5vZGUgIT09IGxpc3QudGFpbCkge1xuXHRcdGFycmF5LnB1c2gobm9kZS52YWx1ZSk7XG5cdFx0bm9kZSA9IG5vZGUubmV4dDtcblx0fVxuXHRyZXR1cm4gYXJyYXk7XG59XG5cblxuaWYgKCFfc2VsZi5kb2N1bWVudCkge1xuXHRpZiAoIV9zZWxmLmFkZEV2ZW50TGlzdGVuZXIpIHtcblx0XHQvLyBpbiBOb2RlLmpzXG5cdFx0cmV0dXJuIF87XG5cdH1cblxuXHRpZiAoIV8uZGlzYWJsZVdvcmtlck1lc3NhZ2VIYW5kbGVyKSB7XG5cdFx0Ly8gSW4gd29ya2VyXG5cdFx0X3NlbGYuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldnQpIHtcblx0XHRcdHZhciBtZXNzYWdlID0gSlNPTi5wYXJzZShldnQuZGF0YSksXG5cdFx0XHRcdGxhbmcgPSBtZXNzYWdlLmxhbmd1YWdlLFxuXHRcdFx0XHRjb2RlID0gbWVzc2FnZS5jb2RlLFxuXHRcdFx0XHRpbW1lZGlhdGVDbG9zZSA9IG1lc3NhZ2UuaW1tZWRpYXRlQ2xvc2U7XG5cblx0XHRcdF9zZWxmLnBvc3RNZXNzYWdlKF8uaGlnaGxpZ2h0KGNvZGUsIF8ubGFuZ3VhZ2VzW2xhbmddLCBsYW5nKSk7XG5cdFx0XHRpZiAoaW1tZWRpYXRlQ2xvc2UpIHtcblx0XHRcdFx0X3NlbGYuY2xvc2UoKTtcblx0XHRcdH1cblx0XHR9LCBmYWxzZSk7XG5cdH1cblxuXHRyZXR1cm4gXztcbn1cblxuLy9HZXQgY3VycmVudCBzY3JpcHQgYW5kIGhpZ2hsaWdodFxudmFyIHNjcmlwdCA9IF8udXRpbC5jdXJyZW50U2NyaXB0KCk7XG5cbmlmIChzY3JpcHQpIHtcblx0Xy5maWxlbmFtZSA9IHNjcmlwdC5zcmM7XG5cblx0aWYgKHNjcmlwdC5oYXNBdHRyaWJ1dGUoJ2RhdGEtbWFudWFsJykpIHtcblx0XHRfLm1hbnVhbCA9IHRydWU7XG5cdH1cbn1cblxuZnVuY3Rpb24gaGlnaGxpZ2h0QXV0b21hdGljYWxseUNhbGxiYWNrKCkge1xuXHRpZiAoIV8ubWFudWFsKSB7XG5cdFx0Xy5oaWdobGlnaHRBbGwoKTtcblx0fVxufVxuXG5pZiAoIV8ubWFudWFsKSB7XG5cdC8vIElmIHRoZSBkb2N1bWVudCBzdGF0ZSBpcyBcImxvYWRpbmdcIiwgdGhlbiB3ZSdsbCB1c2UgRE9NQ29udGVudExvYWRlZC5cblx0Ly8gSWYgdGhlIGRvY3VtZW50IHN0YXRlIGlzIFwiaW50ZXJhY3RpdmVcIiBhbmQgdGhlIHByaXNtLmpzIHNjcmlwdCBpcyBkZWZlcnJlZCwgdGhlbiB3ZSdsbCBhbHNvIHVzZSB0aGVcblx0Ly8gRE9NQ29udGVudExvYWRlZCBldmVudCBiZWNhdXNlIHRoZXJlIG1pZ2h0IGJlIHNvbWUgcGx1Z2lucyBvciBsYW5ndWFnZXMgd2hpY2ggaGF2ZSBhbHNvIGJlZW4gZGVmZXJyZWQgYW5kIHRoZXlcblx0Ly8gbWlnaHQgdGFrZSBsb25nZXIgb25lIGFuaW1hdGlvbiBmcmFtZSB0byBleGVjdXRlIHdoaWNoIGNhbiBjcmVhdGUgYSByYWNlIGNvbmRpdGlvbiB3aGVyZSBvbmx5IHNvbWUgcGx1Z2lucyBoYXZlXG5cdC8vIGJlZW4gbG9hZGVkIHdoZW4gUHJpc20uaGlnaGxpZ2h0QWxsKCkgaXMgZXhlY3V0ZWQsIGRlcGVuZGluZyBvbiBob3cgZmFzdCByZXNvdXJjZXMgYXJlIGxvYWRlZC5cblx0Ly8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9QcmlzbUpTL3ByaXNtL2lzc3Vlcy8yMTAyXG5cdHZhciByZWFkeVN0YXRlID0gZG9jdW1lbnQucmVhZHlTdGF0ZTtcblx0aWYgKHJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJyB8fCByZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnICYmIHNjcmlwdCAmJiBzY3JpcHQuZGVmZXIpIHtcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaGlnaGxpZ2h0QXV0b21hdGljYWxseUNhbGxiYWNrKTtcblx0fSBlbHNlIHtcblx0XHRpZiAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuXHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShoaWdobGlnaHRBdXRvbWF0aWNhbGx5Q2FsbGJhY2spO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR3aW5kb3cuc2V0VGltZW91dChoaWdobGlnaHRBdXRvbWF0aWNhbGx5Q2FsbGJhY2ssIDE2KTtcblx0XHR9XG5cdH1cbn1cblxucmV0dXJuIF87XG5cbn0pKF9zZWxmKTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdG1vZHVsZS5leHBvcnRzID0gUHJpc207XG59XG5cbi8vIGhhY2sgZm9yIGNvbXBvbmVudHMgdG8gd29yayBjb3JyZWN0bHkgaW4gbm9kZS5qc1xuaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG5cdGdsb2JhbC5QcmlzbSA9IFByaXNtO1xufVxuXG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgQmVnaW4gcHJpc20tbWFya3VwLmpzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cblByaXNtLmxhbmd1YWdlcy5tYXJrdXAgPSB7XG5cdCdjb21tZW50JzogLzwhLS1bXFxzXFxTXSo/LS0+Lyxcblx0J3Byb2xvZyc6IC88XFw/W1xcc1xcU10rP1xcPz4vLFxuXHQnZG9jdHlwZSc6IHtcblx0XHRwYXR0ZXJuOiAvPCFET0NUWVBFKD86W14+XCInW1xcXV18XCJbXlwiXSpcInwnW14nXSonKSsoPzpcXFsoPzooPyE8IS0tKVteXCInXFxdXXxcIlteXCJdKlwifCdbXiddKid8PCEtLVtcXHNcXFNdKj8tLT4pKlxcXVxccyopPz4vaSxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0J2NkYXRhJzogLzwhXFxbQ0RBVEFcXFtbXFxzXFxTXSo/XV0+L2ksXG5cdCd0YWcnOiB7XG5cdFx0cGF0dGVybjogLzxcXC8/KD8hXFxkKVteXFxzPlxcLz0kPCVdKyg/Olxccyg/OlxccypbXlxccz5cXC89XSsoPzpcXHMqPVxccyooPzpcIlteXCJdKlwifCdbXiddKid8W15cXHMnXCI+PV0rKD89W1xccz5dKSl8KD89W1xccy8+XSkpKSspP1xccypcXC8/Pi9pLFxuXHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCd0YWcnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC9ePFxcLz9bXlxccz5cXC9dKy9pLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXjxcXC8/Lyxcblx0XHRcdFx0XHQnbmFtZXNwYWNlJzogL15bXlxccz5cXC86XSs6L1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0J2F0dHItdmFsdWUnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC89XFxzKig/OlwiW15cIl0qXCJ8J1teJ10qJ3xbXlxccydcIj49XSspL2ksXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IFtcblx0XHRcdFx0XHRcdC9ePS8sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHBhdHRlcm46IC9eKFxccyopW1wiJ118W1wiJ10kLyxcblx0XHRcdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdCdwdW5jdHVhdGlvbic6IC9cXC8/Pi8sXG5cdFx0XHQnYXR0ci1uYW1lJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvW15cXHM+XFwvXSsvLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQnbmFtZXNwYWNlJzogL15bXlxccz5cXC86XSs6L1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHR9XG5cdH0sXG5cdCdlbnRpdHknOiAvJiM/W1xcZGEtel17MSw4fTsvaVxufTtcblxuUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cFsndGFnJ10uaW5zaWRlWydhdHRyLXZhbHVlJ10uaW5zaWRlWydlbnRpdHknXSA9XG5cdFByaXNtLmxhbmd1YWdlcy5tYXJrdXBbJ2VudGl0eSddO1xuXG4vLyBQbHVnaW4gdG8gbWFrZSBlbnRpdHkgdGl0bGUgc2hvdyB0aGUgcmVhbCBlbnRpdHksIGlkZWEgYnkgUm9tYW4gS29tYXJvdlxuUHJpc20uaG9va3MuYWRkKCd3cmFwJywgZnVuY3Rpb24oZW52KSB7XG5cblx0aWYgKGVudi50eXBlID09PSAnZW50aXR5Jykge1xuXHRcdGVudi5hdHRyaWJ1dGVzWyd0aXRsZSddID0gZW52LmNvbnRlbnQucmVwbGFjZSgvJmFtcDsvLCAnJicpO1xuXHR9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFByaXNtLmxhbmd1YWdlcy5tYXJrdXAudGFnLCAnYWRkSW5saW5lZCcsIHtcblx0LyoqXG5cdCAqIEFkZHMgYW4gaW5saW5lZCBsYW5ndWFnZSB0byBtYXJrdXAuXG5cdCAqXG5cdCAqIEFuIGV4YW1wbGUgb2YgYW4gaW5saW5lZCBsYW5ndWFnZSBpcyBDU1Mgd2l0aCBgPHN0eWxlPmAgdGFncy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRhZ05hbWUgVGhlIG5hbWUgb2YgdGhlIHRhZyB0aGF0IGNvbnRhaW5zIHRoZSBpbmxpbmVkIGxhbmd1YWdlLiBUaGlzIG5hbWUgd2lsbCBiZSB0cmVhdGVkIGFzXG5cdCAqIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBsYW5nIFRoZSBsYW5ndWFnZSBrZXkuXG5cdCAqIEBleGFtcGxlXG5cdCAqIGFkZElubGluZWQoJ3N0eWxlJywgJ2NzcycpO1xuXHQgKi9cblx0dmFsdWU6IGZ1bmN0aW9uIGFkZElubGluZWQodGFnTmFtZSwgbGFuZykge1xuXHRcdHZhciBpbmNsdWRlZENkYXRhSW5zaWRlID0ge307XG5cdFx0aW5jbHVkZWRDZGF0YUluc2lkZVsnbGFuZ3VhZ2UtJyArIGxhbmddID0ge1xuXHRcdFx0cGF0dGVybjogLyhePCFcXFtDREFUQVxcWylbXFxzXFxTXSs/KD89XFxdXFxdPiQpL2ksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXNbbGFuZ11cblx0XHR9O1xuXHRcdGluY2x1ZGVkQ2RhdGFJbnNpZGVbJ2NkYXRhJ10gPSAvXjwhXFxbQ0RBVEFcXFt8XFxdXFxdPiQvaTtcblxuXHRcdHZhciBpbnNpZGUgPSB7XG5cdFx0XHQnaW5jbHVkZWQtY2RhdGEnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC88IVxcW0NEQVRBXFxbW1xcc1xcU10qP1xcXVxcXT4vaSxcblx0XHRcdFx0aW5zaWRlOiBpbmNsdWRlZENkYXRhSW5zaWRlXG5cdFx0XHR9XG5cdFx0fTtcblx0XHRpbnNpZGVbJ2xhbmd1YWdlLScgKyBsYW5nXSA9IHtcblx0XHRcdHBhdHRlcm46IC9bXFxzXFxTXSsvLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXNbbGFuZ11cblx0XHR9O1xuXG5cdFx0dmFyIGRlZiA9IHt9O1xuXHRcdGRlZlt0YWdOYW1lXSA9IHtcblx0XHRcdHBhdHRlcm46IFJlZ0V4cCgvKDxfX1tcXHNcXFNdKj8+KSg/OjwhXFxbQ0RBVEFcXFtbXFxzXFxTXSo/XFxdXFxdPlxccyp8W1xcc1xcU10pKj8oPz08XFwvX18+KS8uc291cmNlLnJlcGxhY2UoL19fL2csIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRhZ05hbWU7IH0pLCAnaScpLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdGluc2lkZTogaW5zaWRlXG5cdFx0fTtcblxuXHRcdFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ21hcmt1cCcsICdjZGF0YScsIGRlZik7XG5cdH1cbn0pO1xuXG5QcmlzbS5sYW5ndWFnZXMueG1sID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnbWFya3VwJywge30pO1xuUHJpc20ubGFuZ3VhZ2VzLmh0bWwgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuUHJpc20ubGFuZ3VhZ2VzLm1hdGhtbCA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXA7XG5QcmlzbS5sYW5ndWFnZXMuc3ZnID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cDtcblxuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgIEJlZ2luIHByaXNtLWNzcy5qc1xuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG4oZnVuY3Rpb24gKFByaXNtKSB7XG5cblx0dmFyIHN0cmluZyA9IC8oXCJ8JykoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxLztcblxuXHRQcmlzbS5sYW5ndWFnZXMuY3NzID0ge1xuXHRcdCdjb21tZW50JzogL1xcL1xcKltcXHNcXFNdKj9cXCpcXC8vLFxuXHRcdCdhdHJ1bGUnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvQFtcXHctXStbXFxzXFxTXSo/KD86O3woPz1cXHMqXFx7KSkvLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdydWxlJzogL15AW1xcdy1dKy8sXG5cdFx0XHRcdCdzZWxlY3Rvci1mdW5jdGlvbi1hcmd1bWVudCc6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvKFxcYnNlbGVjdG9yXFxzKlxcKCg/IVxccypcXCkpXFxzKikoPzpbXigpXXxcXCgoPzpbXigpXXxcXChbXigpXSpcXCkpKlxcKSkrPyg/PVxccypcXCkpLyxcblx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRcdGFsaWFzOiAnc2VsZWN0b3InXG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gU2VlIHJlc3QgYmVsb3dcblx0XHRcdH1cblx0XHR9LFxuXHRcdCd1cmwnOiB7XG5cdFx0XHRwYXR0ZXJuOiBSZWdFeHAoJ3VybFxcXFwoKD86JyArIHN0cmluZy5zb3VyY2UgKyAnfFteXFxuXFxyKCldKilcXFxcKScsICdpJyksXG5cdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J2Z1bmN0aW9uJzogL151cmwvaSxcblx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL15cXCh8XFwpJC9cblx0XHRcdH1cblx0XHR9LFxuXHRcdCdzZWxlY3Rvcic6IFJlZ0V4cCgnW157fVxcXFxzXSg/Oltee307XCJcXCddfCcgKyBzdHJpbmcuc291cmNlICsgJykqPyg/PVxcXFxzKlxcXFx7KScpLFxuXHRcdCdzdHJpbmcnOiB7XG5cdFx0XHRwYXR0ZXJuOiBzdHJpbmcsXG5cdFx0XHRncmVlZHk6IHRydWVcblx0XHR9LFxuXHRcdCdwcm9wZXJ0eSc6IC9bLV9hLXpcXHhBMC1cXHVGRkZGXVstXFx3XFx4QTAtXFx1RkZGRl0qKD89XFxzKjopL2ksXG5cdFx0J2ltcG9ydGFudCc6IC8haW1wb3J0YW50XFxiL2ksXG5cdFx0J2Z1bmN0aW9uJzogL1stYS16MC05XSsoPz1cXCgpL2ksXG5cdFx0J3B1bmN0dWF0aW9uJzogL1soKXt9OzosXS9cblx0fTtcblxuXHRQcmlzbS5sYW5ndWFnZXMuY3NzWydhdHJ1bGUnXS5pbnNpZGUucmVzdCA9IFByaXNtLmxhbmd1YWdlcy5jc3M7XG5cblx0dmFyIG1hcmt1cCA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXA7XG5cdGlmIChtYXJrdXApIHtcblx0XHRtYXJrdXAudGFnLmFkZElubGluZWQoJ3N0eWxlJywgJ2NzcycpO1xuXG5cdFx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnaW5zaWRlJywgJ2F0dHItdmFsdWUnLCB7XG5cdFx0XHQnc3R5bGUtYXR0cic6IHtcblx0XHRcdFx0cGF0dGVybjogL1xccypzdHlsZT0oXCJ8JykoPzpcXFxcW1xcc1xcU118KD8hXFwxKVteXFxcXF0pKlxcMS9pLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQnYXR0ci1uYW1lJzoge1xuXHRcdFx0XHRcdFx0cGF0dGVybjogL15cXHMqc3R5bGUvaSxcblx0XHRcdFx0XHRcdGluc2lkZTogbWFya3VwLnRhZy5pbnNpZGVcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9eXFxzKj1cXHMqWydcIl18WydcIl1cXHMqJC8sXG5cdFx0XHRcdFx0J2F0dHItdmFsdWUnOiB7XG5cdFx0XHRcdFx0XHRwYXR0ZXJuOiAvLisvaSxcblx0XHRcdFx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmNzc1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0YWxpYXM6ICdsYW5ndWFnZS1jc3MnXG5cdFx0XHR9XG5cdFx0fSwgbWFya3VwLnRhZyk7XG5cdH1cblxufShQcmlzbSkpO1xuXG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgQmVnaW4gcHJpc20tY2xpa2UuanNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuUHJpc20ubGFuZ3VhZ2VzLmNsaWtlID0ge1xuXHQnY29tbWVudCc6IFtcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W15cXFxcXSlcXC9cXCpbXFxzXFxTXSo/KD86XFwqXFwvfCQpLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXlxcXFw6XSlcXC9cXC8uKi8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0fVxuXHRdLFxuXHQnc3RyaW5nJzoge1xuXHRcdHBhdHRlcm46IC8oW1wiJ10pKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS8sXG5cdFx0Z3JlZWR5OiB0cnVlXG5cdH0sXG5cdCdjbGFzcy1uYW1lJzoge1xuXHRcdHBhdHRlcm46IC8oXFxiKD86Y2xhc3N8aW50ZXJmYWNlfGV4dGVuZHN8aW1wbGVtZW50c3x0cmFpdHxpbnN0YW5jZW9mfG5ldylcXHMrfFxcYmNhdGNoXFxzK1xcKClbXFx3LlxcXFxdKy9pLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQncHVuY3R1YXRpb24nOiAvWy5cXFxcXS9cblx0XHR9XG5cdH0sXG5cdCdrZXl3b3JkJzogL1xcYig/OmlmfGVsc2V8d2hpbGV8ZG98Zm9yfHJldHVybnxpbnxpbnN0YW5jZW9mfGZ1bmN0aW9ufG5ld3x0cnl8dGhyb3d8Y2F0Y2h8ZmluYWxseXxudWxsfGJyZWFrfGNvbnRpbnVlKVxcYi8sXG5cdCdib29sZWFuJzogL1xcYig/OnRydWV8ZmFsc2UpXFxiLyxcblx0J2Z1bmN0aW9uJzogL1xcdysoPz1cXCgpLyxcblx0J251bWJlcic6IC9cXGIweFtcXGRhLWZdK1xcYnwoPzpcXGJcXGQrXFwuP1xcZCp8XFxCXFwuXFxkKykoPzplWystXT9cXGQrKT8vaSxcblx0J29wZXJhdG9yJzogL1s8Pl09P3xbIT1dPT89P3wtLT98XFwrXFwrP3wmJj98XFx8XFx8P3xbPyovfl4lXS8sXG5cdCdwdW5jdHVhdGlvbic6IC9be31bXFxdOygpLC46XS9cbn07XG5cblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICBCZWdpbiBwcmlzbS1qYXZhc2NyaXB0LmpzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cblByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0ID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnY2xpa2UnLCB7XG5cdCdjbGFzcy1uYW1lJzogW1xuXHRcdFByaXNtLmxhbmd1YWdlcy5jbGlrZVsnY2xhc3MtbmFtZSddLFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXiRcXHdcXHhBMC1cXHVGRkZGXSlbXyRBLVpcXHhBMC1cXHVGRkZGXVskXFx3XFx4QTAtXFx1RkZGRl0qKD89XFwuKD86cHJvdG90eXBlfGNvbnN0cnVjdG9yKSkvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH1cblx0XSxcblx0J2tleXdvcmQnOiBbXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLygoPzpefH0pXFxzKikoPzpjYXRjaHxmaW5hbGx5KVxcYi8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W14uXXxcXC5cXC5cXC5cXHMqKVxcYig/OmFzfGFzeW5jKD89XFxzKig/OmZ1bmN0aW9uXFxifFxcKHxbJFxcd1xceEEwLVxcdUZGRkZdfCQpKXxhd2FpdHxicmVha3xjYXNlfGNsYXNzfGNvbnN0fGNvbnRpbnVlfGRlYnVnZ2VyfGRlZmF1bHR8ZGVsZXRlfGRvfGVsc2V8ZW51bXxleHBvcnR8ZXh0ZW5kc3xmb3J8ZnJvbXxmdW5jdGlvbnxnZXR8aWZ8aW1wbGVtZW50c3xpbXBvcnR8aW58aW5zdGFuY2VvZnxpbnRlcmZhY2V8bGV0fG5ld3xudWxsfG9mfHBhY2thZ2V8cHJpdmF0ZXxwcm90ZWN0ZWR8cHVibGljfHJldHVybnxzZXR8c3RhdGljfHN1cGVyfHN3aXRjaHx0aGlzfHRocm93fHRyeXx0eXBlb2Z8dW5kZWZpbmVkfHZhcnx2b2lkfHdoaWxlfHdpdGh8eWllbGQpXFxiLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRdLFxuXHQnbnVtYmVyJzogL1xcYig/Oig/OjBbeFhdKD86W1xcZEEtRmEtZl0oPzpfW1xcZEEtRmEtZl0pPykrfDBbYkJdKD86WzAxXSg/Ol9bMDFdKT8pK3wwW29PXSg/OlswLTddKD86X1swLTddKT8pKyluP3woPzpcXGQoPzpfXFxkKT8pK258TmFOfEluZmluaXR5KVxcYnwoPzpcXGIoPzpcXGQoPzpfXFxkKT8pK1xcLj8oPzpcXGQoPzpfXFxkKT8pKnxcXEJcXC4oPzpcXGQoPzpfXFxkKT8pKykoPzpbRWVdWystXT8oPzpcXGQoPzpfXFxkKT8pKyk/Lyxcblx0Ly8gQWxsb3cgZm9yIGFsbCBub24tQVNDSUkgY2hhcmFjdGVycyAoU2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIwMDg0NDQpXG5cdCdmdW5jdGlvbic6IC8jP1tfJGEtekEtWlxceEEwLVxcdUZGRkZdWyRcXHdcXHhBMC1cXHVGRkZGXSooPz1cXHMqKD86XFwuXFxzKig/OmFwcGx5fGJpbmR8Y2FsbClcXHMqKT9cXCgpLyxcblx0J29wZXJhdG9yJzogLy0tfFxcK1xcK3xcXCpcXCo9P3w9PnwmJnxcXHxcXHx8WyE9XT09fDw8PT98Pj4+Pz0/fFstKyovJSZ8XiE9PD5dPT98XFwuezN9fFxcP1suP10/fFt+Ol0vXG59KTtcblxuUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRbJ2NsYXNzLW5hbWUnXVswXS5wYXR0ZXJuID0gLyhcXGIoPzpjbGFzc3xpbnRlcmZhY2V8ZXh0ZW5kc3xpbXBsZW1lbnRzfGluc3RhbmNlb2Z8bmV3KVxccyspW1xcdy5cXFxcXSsvO1xuXG5QcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdqYXZhc2NyaXB0JywgJ2tleXdvcmQnLCB7XG5cdCdyZWdleCc6IHtcblx0XHRwYXR0ZXJuOiAvKCg/Ol58W14kXFx3XFx4QTAtXFx1RkZGRi5cIidcXF0pXFxzXSlcXHMqKVxcLyg/OlxcWyg/OlteXFxdXFxcXFxcclxcbl18XFxcXC4pKl18XFxcXC58W14vXFxcXFxcW1xcclxcbl0pK1xcL1tnaW15dXNdezAsNn0oPz0oPzpcXHN8XFwvXFwqW1xcc1xcU10qP1xcKlxcLykqKD86JHxbXFxyXFxuLC47On0pXFxdXXxcXC9cXC8pKS8sXG5cdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0Ly8gVGhpcyBtdXN0IGJlIGRlY2xhcmVkIGJlZm9yZSBrZXl3b3JkIGJlY2F1c2Ugd2UgdXNlIFwiZnVuY3Rpb25cIiBpbnNpZGUgdGhlIGxvb2stZm9yd2FyZFxuXHQnZnVuY3Rpb24tdmFyaWFibGUnOiB7XG5cdFx0cGF0dGVybjogLyM/W18kYS16QS1aXFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKig/PVxccypbPTpdXFxzKig/OmFzeW5jXFxzKik/KD86XFxiZnVuY3Rpb25cXGJ8KD86XFwoKD86W14oKV18XFwoW14oKV0qXFwpKSpcXCl8W18kYS16QS1aXFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKilcXHMqPT4pKS8sXG5cdFx0YWxpYXM6ICdmdW5jdGlvbidcblx0fSxcblx0J3BhcmFtZXRlcic6IFtcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKGZ1bmN0aW9uKD86XFxzK1tfJEEtWmEtelxceEEwLVxcdUZGRkZdWyRcXHdcXHhBMC1cXHVGRkZGXSopP1xccypcXChcXHMqKSg/IVxccykoPzpbXigpXXxcXChbXigpXSpcXCkpKz8oPz1cXHMqXFwpKS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogL1tfJGEtelxceEEwLVxcdUZGRkZdWyRcXHdcXHhBMC1cXHVGRkZGXSooPz1cXHMqPT4pL2ksXG5cdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKFxcKFxccyopKD8hXFxzKSg/OlteKCldfFxcKFteKCldKlxcKSkrPyg/PVxccypcXClcXHMqPT4pLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKCg/OlxcYnxcXHN8XikoPyEoPzphc3xhc3luY3xhd2FpdHxicmVha3xjYXNlfGNhdGNofGNsYXNzfGNvbnN0fGNvbnRpbnVlfGRlYnVnZ2VyfGRlZmF1bHR8ZGVsZXRlfGRvfGVsc2V8ZW51bXxleHBvcnR8ZXh0ZW5kc3xmaW5hbGx5fGZvcnxmcm9tfGZ1bmN0aW9ufGdldHxpZnxpbXBsZW1lbnRzfGltcG9ydHxpbnxpbnN0YW5jZW9mfGludGVyZmFjZXxsZXR8bmV3fG51bGx8b2Z8cGFja2FnZXxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmV0dXJufHNldHxzdGF0aWN8c3VwZXJ8c3dpdGNofHRoaXN8dGhyb3d8dHJ5fHR5cGVvZnx1bmRlZmluZWR8dmFyfHZvaWR8d2hpbGV8d2l0aHx5aWVsZCkoPyFbJFxcd1xceEEwLVxcdUZGRkZdKSkoPzpbXyRBLVphLXpcXHhBMC1cXHVGRkZGXVskXFx3XFx4QTAtXFx1RkZGRl0qXFxzKilcXChcXHMqKSg/IVxccykoPzpbXigpXXxcXChbXigpXSpcXCkpKz8oPz1cXHMqXFwpXFxzKlxceykvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcblx0XHR9XG5cdF0sXG5cdCdjb25zdGFudCc6IC9cXGJbQS1aXSg/OltBLVpfXXxcXGR4PykqXFxiL1xufSk7XG5cblByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2phdmFzY3JpcHQnLCAnc3RyaW5nJywge1xuXHQndGVtcGxhdGUtc3RyaW5nJzoge1xuXHRcdHBhdHRlcm46IC9gKD86XFxcXFtcXHNcXFNdfFxcJHsoPzpbXnt9XXx7KD86W157fV18e1tefV0qfSkqfSkrfXwoPyFcXCR7KVteXFxcXGBdKSpgLyxcblx0XHRncmVlZHk6IHRydWUsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQndGVtcGxhdGUtcHVuY3R1YXRpb24nOiB7XG5cdFx0XHRcdHBhdHRlcm46IC9eYHxgJC8sXG5cdFx0XHRcdGFsaWFzOiAnc3RyaW5nJ1xuXHRcdFx0fSxcblx0XHRcdCdpbnRlcnBvbGF0aW9uJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvKCg/Ol58W15cXFxcXSkoPzpcXFxcezJ9KSopXFwkeyg/Oltee31dfHsoPzpbXnt9XXx7W159XSp9KSp9KSt9Lyxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J2ludGVycG9sYXRpb24tcHVuY3R1YXRpb24nOiB7XG5cdFx0XHRcdFx0XHRwYXR0ZXJuOiAvXlxcJHt8fSQvLFxuXHRcdFx0XHRcdFx0YWxpYXM6ICdwdW5jdHVhdGlvbidcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHJlc3Q6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQnc3RyaW5nJzogL1tcXHNcXFNdKy9cblx0XHR9XG5cdH1cbn0pO1xuXG5pZiAoUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cCkge1xuXHRQcmlzbS5sYW5ndWFnZXMubWFya3VwLnRhZy5hZGRJbmxpbmVkKCdzY3JpcHQnLCAnamF2YXNjcmlwdCcpO1xufVxuXG5QcmlzbS5sYW5ndWFnZXMuanMgPSBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdDtcblxuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgIEJlZ2luIHByaXNtLWZpbGUtaGlnaGxpZ2h0LmpzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdGlmICh0eXBlb2Ygc2VsZiA9PT0gJ3VuZGVmaW5lZCcgfHwgIXNlbGYuUHJpc20gfHwgIXNlbGYuZG9jdW1lbnQgfHwgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtFbGVtZW50fSBbY29udGFpbmVyPWRvY3VtZW50XVxuXHQgKi9cblx0c2VsZi5QcmlzbS5maWxlSGlnaGxpZ2h0ID0gZnVuY3Rpb24oY29udGFpbmVyKSB7XG5cdFx0Y29udGFpbmVyID0gY29udGFpbmVyIHx8IGRvY3VtZW50O1xuXG5cdFx0dmFyIEV4dGVuc2lvbnMgPSB7XG5cdFx0XHQnanMnOiAnamF2YXNjcmlwdCcsXG5cdFx0XHQncHknOiAncHl0aG9uJyxcblx0XHRcdCdyYic6ICdydWJ5Jyxcblx0XHRcdCdwczEnOiAncG93ZXJzaGVsbCcsXG5cdFx0XHQncHNtMSc6ICdwb3dlcnNoZWxsJyxcblx0XHRcdCdzaCc6ICdiYXNoJyxcblx0XHRcdCdiYXQnOiAnYmF0Y2gnLFxuXHRcdFx0J2gnOiAnYycsXG5cdFx0XHQndGV4JzogJ2xhdGV4J1xuXHRcdH07XG5cblx0XHRBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgncHJlW2RhdGEtc3JjXScpKS5mb3JFYWNoKGZ1bmN0aW9uIChwcmUpIHtcblx0XHRcdC8vIGlnbm9yZSBpZiBhbHJlYWR5IGxvYWRlZFxuXHRcdFx0aWYgKHByZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtc3JjLWxvYWRlZCcpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gbG9hZCBjdXJyZW50XG5cdFx0XHR2YXIgc3JjID0gcHJlLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKTtcblxuXHRcdFx0dmFyIGxhbmd1YWdlLCBwYXJlbnQgPSBwcmU7XG5cdFx0XHR2YXIgbGFuZyA9IC9cXGJsYW5nKD86dWFnZSk/LShbXFx3LV0rKVxcYi9pO1xuXHRcdFx0d2hpbGUgKHBhcmVudCAmJiAhbGFuZy50ZXN0KHBhcmVudC5jbGFzc05hbWUpKSB7XG5cdFx0XHRcdHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAocGFyZW50KSB7XG5cdFx0XHRcdGxhbmd1YWdlID0gKHByZS5jbGFzc05hbWUubWF0Y2gobGFuZykgfHwgWywgJyddKVsxXTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFsYW5ndWFnZSkge1xuXHRcdFx0XHR2YXIgZXh0ZW5zaW9uID0gKHNyYy5tYXRjaCgvXFwuKFxcdyspJC8pIHx8IFssICcnXSlbMV07XG5cdFx0XHRcdGxhbmd1YWdlID0gRXh0ZW5zaW9uc1tleHRlbnNpb25dIHx8IGV4dGVuc2lvbjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGNvZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjb2RlJyk7XG5cdFx0XHRjb2RlLmNsYXNzTmFtZSA9ICdsYW5ndWFnZS0nICsgbGFuZ3VhZ2U7XG5cblx0XHRcdHByZS50ZXh0Q29udGVudCA9ICcnO1xuXG5cdFx0XHRjb2RlLnRleHRDb250ZW50ID0gJ0xvYWRpbmfigKYnO1xuXG5cdFx0XHRwcmUuYXBwZW5kQ2hpbGQoY29kZSk7XG5cblx0XHRcdHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuXHRcdFx0eGhyLm9wZW4oJ0dFVCcsIHNyYywgdHJ1ZSk7XG5cblx0XHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0KSB7XG5cblx0XHRcdFx0XHRpZiAoeGhyLnN0YXR1cyA8IDQwMCAmJiB4aHIucmVzcG9uc2VUZXh0KSB7XG5cdFx0XHRcdFx0XHRjb2RlLnRleHRDb250ZW50ID0geGhyLnJlc3BvbnNlVGV4dDtcblxuXHRcdFx0XHRcdFx0UHJpc20uaGlnaGxpZ2h0RWxlbWVudChjb2RlKTtcblx0XHRcdFx0XHRcdC8vIG1hcmsgYXMgbG9hZGVkXG5cdFx0XHRcdFx0XHRwcmUuc2V0QXR0cmlidXRlKCdkYXRhLXNyYy1sb2FkZWQnLCAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgaWYgKHhoci5zdGF0dXMgPj0gNDAwKSB7XG5cdFx0XHRcdFx0XHRjb2RlLnRleHRDb250ZW50ID0gJ+KcliBFcnJvciAnICsgeGhyLnN0YXR1cyArICcgd2hpbGUgZmV0Y2hpbmcgZmlsZTogJyArIHhoci5zdGF0dXNUZXh0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdGNvZGUudGV4dENvbnRlbnQgPSAn4pyWIEVycm9yOiBGaWxlIGRvZXMgbm90IGV4aXN0IG9yIGlzIGVtcHR5Jztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdHhoci5zZW5kKG51bGwpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gZXhlY3V0ZSBpbnNpZGUgaGFuZGxlciwgZm9yIGRyb3BwaW5nIEV2ZW50IGFzIGFyZ3VtZW50XG5cdFx0c2VsZi5QcmlzbS5maWxlSGlnaGxpZ2h0KCk7XG5cdH0pO1xuXG59KSgpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iXSwic291cmNlUm9vdCI6IiJ9