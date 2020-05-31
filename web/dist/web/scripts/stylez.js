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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/web/scripts/stylez.js");
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

/***/ "./lib/web/scripts/stylez.events.js":
/*!******************************************!*\
  !*** ./lib/web/scripts/stylez.events.js ***!
  \******************************************/
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

var CONSTANTS = __webpack_require__(/*! ./stylez.constants */ "./lib/web/scripts/stylez.constants.js");

var SessionStorage = __webpack_require__(/*! ./stylez.storage */ "./lib/web/scripts/stylez.storage.js");

var Events =
/*#__PURE__*/
function () {
  function Events() {
    _classCallCheck(this, Events);
  }

  _createClass(Events, null, [{
    key: "_updateIframeContent",
    value: function _updateIframeContent() {
      var iframe = document.querySelector(CONSTANTS.viewerFrame);
      iframe.contentWindow.location.href = "viewer.html";
    }
  }, {
    key: "_toggleButtons",
    value: function _toggleButtons(btnList, curButton) {
      btnList.forEach(function (btn) {
        if (btn === curButton) {
          btn.classList.add('selected');
        } else {
          btn.classList.remove('selected');
        }
      }); // updateing Session Status

      SessionStorage.updateStatus();
    } // Handle Category selection

  }, {
    key: "filterCategories",
    value: function filterCategories(event) {
      if (event.target.dataset !== null && event.target.dataset.filter !== null && ["atoms", "molecules", "organism"].indexOf(event.target.dataset.filter) !== -1, Events.detectUserClick(event)) {
        var curSession = SessionStorage.getCurrentFilter();
        curSession.category = event.target.dataset.filter;
        curSession.index = null;
        curSession.maxIndex = null;
        SessionStorage.updateStatus(curSession);
      }

      var curButton = event.target,
          allButtons = document.querySelectorAll(CONSTANTS.dmAtomicFilter);

      Events._toggleButtons(allButtons, curButton);

      Events._updateIframeContent();
    } // Handle deviceFiltering

  }, {
    key: "filterDeviceType",
    value: function filterDeviceType(event) {
      var curButton = event.target,
          allButtons = document.querySelectorAll(CONSTANTS.dmDeviceTypes),
          viewerFrame = document.querySelector(CONSTANTS.viewerFrame);

      Events._toggleButtons(allButtons, curButton); // Check for update the full width


      var newWidth = curButton.dataset.size !== 'full' ? curButton.dataset.size : -1; // if width !== full set precicse pixels

      if (newWidth !== -1) {
        viewerFrame.style.maxWidth = "".concat(newWidth, "px");
      } else {
        // unset and rest to 100vw;
        viewerFrame.style.maxWidth = "100vw";
      }
    }
  }, {
    key: "setWidth",
    value: function setWidth(event) {
      // Timeout to make sure resize is finished
      setTimeout(function () {
        var curWidth = document.querySelector(CONSTANTS.curWidth);

        if (curWidth !== null && curWidth !== undefined) {
          curWidth.value = window.innerWidth;
        }

        var curHeight = document.querySelector(CONSTANTS.curHeight);

        if (curHeight !== null && curHeight !== undefined) {
          curHeight.value = window.innerHeight;
        }
      }, 250);
    }
  }, {
    key: "toggleTocs",
    value: function toggleTocs(event) {
      var tocs = document.querySelector(CONSTANTS.tocs);
      tocs.classList.toggle('active');
    }
  }, {
    key: "setTocFilter",
    value: function setTocFilter(event) {
      event.preventDefault();
      var curButton = event.target,
          curIndex = curButton.dataset.index,
          curFilter = curButton.dataset.filter;
      var curSession = SessionStorage.getCurrentFilter();
      curSession.category = curFilter;
      curSession.index = parseInt(curIndex);
      curSession.maxIndex = document.querySelectorAll("button.a-toc-toggle[data-filter='".concat(curFilter, "']")).length;
      SessionStorage.updateStatus(curSession);
      document.querySelector('.o-tocs').classList.remove('active');
      var activeButton = document.querySelector("button.a-filter[data-filter='".concat(curFilter, "']"));
      var allButtons = document.querySelectorAll("button.a-filter");

      Events._toggleButtons(allButtons, activeButton); // force the Storage Change to show slider if required


      Events.detectStorageChange(null);

      Events._updateIframeContent();
    }
    /**
     * Change Index of current element
     * @param {event} event 
     */

  }, {
    key: "changeIndex",
    value: function changeIndex(event) {
      var curItem = event.target;

      if (curItem.dataset !== undefined && curItem.dataset.filter !== undefined) {
        var curSession = SessionStorage.getCurrentFilter();

        if (curItem.dataset.filter === 'next-item') {
          if (curSession.index + 1 < curSession.maxIndex) {
            curSession.index = curSession.index + 1;
          } else {
            curSession.index = 0;
          }

          SessionStorage.updateStatus(curSession);

          Events._updateIframeContent();
        }

        if (curItem.dataset.filter === 'prev-item') {
          if (curSession.index - 1 >= 0) {
            curSession.index = curSession.index - 1;
          } else {
            curSession.index = curSession.maxIndex;
          }

          SessionStorage.updateStatus(curSession);

          Events._updateIframeContent();
        }
      }
    }
    /**
     * Detecht Storage Changes
     * @param {event} event 
     */

  }, {
    key: "detectStorageChange",
    value: function detectStorageChange(event) {
      var currentSession = SessionStorage.getCurrentFilter();

      if (currentSession.title !== null && currentSession.maxIndex !== null && currentSession.maxIndex > 1) {
        var currentPatternTitle = document.querySelector('.a-filtername');
        currentPatternTitle.textContent = currentSession.title;
        var itemSlider = document.querySelector('.m-itemslider');

        if (itemSlider !== null) {
          itemSlider.classList.remove('hidden');
          itemSlider.classList.add('show');
          itemSlider.setAttribute('aria-hidden', false);
          itemSlider.setAttribute('aria-disabled', false);
        }
      } else {
        var _itemSlider = document.querySelector('.m-itemslider');

        if (_itemSlider !== null) {
          _itemSlider.classList.add('hidden');

          _itemSlider.classList.remove('show');

          _itemSlider.setAttribute('aria-hidden', true);

          _itemSlider.setAttribute('aria-disabled', true);
        }
      }
    }
    /**
     * Checks if user clicked or click was executed by script
     * @param {Event} event 
     */

  }, {
    key: "detectUserClick",
    value: function detectUserClick(event) {
      return event.screenX && event.screenX != 0 && event.screenY && event.screenY != 0;
    }
  }]);

  return Events;
}();

module.exports = Events;

/***/ }),

/***/ "./lib/web/scripts/stylez.js":
/*!***********************************!*\
  !*** ./lib/web/scripts/stylez.js ***!
  \***********************************/
/*! exports provided: Stylez */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stylez", function() { return Stylez; });
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.set */ "./node_modules/core-js/modules/es6.set.js");
/* harmony import */ var core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_set__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator */ "./node_modules/core-js/modules/es7.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.symbol */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_9__);




















function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

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

var SessionStorage = __webpack_require__(/*! ./stylez.storage */ "./lib/web/scripts/stylez.storage.js");

var Events = __webpack_require__(/*! ./stylez.events */ "./lib/web/scripts/stylez.events.js"); // const Data = require('./styles.data');


var Stylez =
/*#__PURE__*/
function () {
  function Stylez() {
    _classCallCheck(this, Stylez);

    window.addEventListener('storage', Events.detectStorageChange); // init internamels

    this.CONSTANTS = _CONSTANTS;
    this.Events = Events; // register category filters

    this.btnsCatFilter = document.querySelectorAll(this.CONSTANTS.dmAtomicFilter);
    this.btnsCatFilter.forEach(function (btn) {
      btn.addEventListener('click', Events.filterCategories);
    }); // register device types

    this.btnDeviceSelector = document.querySelectorAll(this.CONSTANTS.dmDeviceTypes);
    this.btnDeviceSelector.forEach(function (btn) {
      btn.addEventListener('click', Events.filterDeviceType);
    });
    window.addEventListener('resize', Events.setWidth); // set the initial width

    Events.setWidth(null);
    this.btnTocs = document.querySelector(this.CONSTANTS.dmFilterTocs);

    if (this.btnTocs !== null && this.btnTocs !== null) {
      this.btnTocs.addEventListener('click', Events.toggleTocs);
    }

    this.btnPagers = document.querySelectorAll(this.CONSTANTS.pagers);
    this.btnPagers.forEach(function (pager) {
      pager.addEventListener('click', Events.changeIndex);
    });
    SessionStorage.setCurrentFilter(); // force slider to show or not

    Events.detectStorageChange(null);
    this.renderToc();
  }

  _createClass(Stylez, [{
    key: "_fetchPattern",
    value: function _fetchPattern() {
      var url;
      return regeneratorRuntime.async(function _fetchPattern$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = './app/config/stylez.json';
              _context.next = 3;
              return regeneratorRuntime.awrap(fetch(url).then(function (response) {
                if (response.status === 200) {
                  return response.json();
                } else {
                  throw 'Error current status: ' + response.status + ' - ' + url;
                }
              }).catch(function (error) {
                console.error('ERROR :::', error);
              }));

            case 3:
              return _context.abrupt("return", _context.sent);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "renderToc",
    value: function renderToc() {
      var _this = this;

      var toc = document.querySelector('.o-tocsinner');

      var pattern = this._fetchPattern();

      var patternString = {};
      pattern.then(function (data) {
        var patternItems = data.patterns; // create unique values first

        var categories = _toConsumableArray(new Set(patternItems.map(function (item) {
          return item.category;
        }))); // create statistics object


        var categoryStats = new Object();
        categories.forEach(function (item) {
          // create properties
          categoryStats[item] = 0;
        });
        var cateogryStat = {};
        data.patterns.forEach(function (item) {
          if (patternString[item.category] === undefined) {
            patternString[item.category] = '';
          }

          patternString[item.category] += "<li><button \n                data-filter='".concat(item.category, "' \n                data-index='").concat(categoryStats[item.category], "' \n                class='a-toc-toggle'>").concat(item.title, "</button></li>");
          categoryStats[item.category] += 1;
        }); // Just in case no objects exist

        var tocOutput = "<ul><li><h2>Atoms</h2><ol>".concat(typeof patternString['atoms'] === "undefined" ? '' : patternString['atoms'], "</ol></li></ul>\n            <ul><li><h2>Molecules</h2><ol>").concat(typeof patternString['molecules'] === "undefined" ? '' : patternString['molecules'], "</ol></li></ul>\n            <ul><li><h2>Organism</h2><ol>").concat(typeof patternString['organism'] === "undefined" ? '' : patternString['organism'], "</ol></li></ul>\n            <ul><li><h2>Templates</h2><ol>").concat(typeof patternString['templates'] === "undefined" ? '' : patternString['templates'], "</ol></li></ul>\n            <ul><li><h2>Pages</h2><ol>").concat(typeof patternString['pages'] === "undefined" ? '' : patternString['pages'], "</ol></li></ul>");
        toc.innerHTML = tocOutput;
        document.querySelectorAll('.a-toc-toggle').forEach(function (item) {
          item.addEventListener('click', _this.Events.setTocFilter);
        }); // Apply filter
      });
    }
  }]);

  return Stylez;
}();
var ui = new Stylez();

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

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');

var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});

module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
    throw TypeError(name + ': incorrect invocation!');
  }

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

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");

module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");

var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag'); // ES3 wrong here


var ARG = cof(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) {
    /* empty */
  }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T // builtinTag case
  : ARG ? cof(O) // ES3 arguments fallback
  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
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

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");

var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");

var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");

var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");

var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");

var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey;

var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");

var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index]; // frozen object case

  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME; // collection type

      that._i = create(null); // index

      that._f = undefined; // first entry

      that._l = undefined; // last entry

      that[SIZE] = 0; // size

      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }

        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);

        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        }

        return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn
      /* , that = undefined */
      ) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;

        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this); // revert to the last existing entry

          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index; // change existing entry

    if (entry) {
      entry.v = value; // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true),
        // <- index
        k: key,
        // <- key
        v: value,
        // <- value
        p: prev = that._l,
        // <- previous entry
        n: undefined,
        // <- next entry
        r: false // <- removed

      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++; // add to index

      if (index !== 'F') that._i[index] = entry;
    }

    return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target

      this._k = kind; // kind

      this._l = undefined; // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l; // revert to the last existing entry

      while (entry && entry.r) entry = entry.p; // get next entry


      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      } // return step by kind


      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // add [@@species], 23.1.2.2, 23.2.2.2

    setSpecies(NAME);
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");

var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");

var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");

var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");

var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");

var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");

var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};

  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY, KEY == 'delete' ? function (a) {
      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'has' ? function has(a) {
      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'get' ? function get(a) {
      return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'add' ? function add(a) {
      fn.call(this, a === 0 ? 0 : a);
      return this;
    } : function set(a, b) {
      fn.call(this, a === 0 ? 0 : a, b);
      return this;
    });
  };

  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C(); // early implementations not supports chaining

    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false

    var THROWS_ON_PRIMITIVES = fails(function () {
      instance.has(1);
    }); // most early implementations doesn't supports iterables, most modern - not close it correctly

    var ACCEPT_ITERABLES = $iterDetect(function (iter) {
      new C(iter);
    }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same

    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;

      while (index--) $instance[ADDER](index, index);

      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);
  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);
  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
  return C;
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

/***/ "./node_modules/core-js/modules/_create-property.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_create-property.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;
};

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

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),

/***/ "./node_modules/core-js/modules/_enum-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");

module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;

  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;

    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  }

  return result;
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

/***/ "./node_modules/core-js/modules/_flags.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_flags.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 21.2.5.3 get RegExp.prototype.flags

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");

var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");

var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");

var BREAK = {};
var RETURN = {};

var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () {
    return iterable;
  } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!'); // fast case for arrays with default iterator

  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};

exports.BREAK = BREAK;
exports.RETURN = RETURN;

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

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;

module.exports = document && document.documentElement;

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

/***/ "./node_modules/core-js/modules/_inherit-if-required.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var setPrototypeOf = __webpack_require__(/*! ./_set-proto */ "./node_modules/core-js/modules/_set-proto.js").set;

module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;

  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  }

  return that;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js"); // eslint-disable-next-line no-prototype-builtins


module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');

var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");

module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

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

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");

var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");

var IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () {
  return this;
});

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, {
    next: descriptor(1, next)
  });
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");

var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");

var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");

var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");

var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');

var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () {
  return this;
};

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);

  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];

    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };

      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }

    return function entries() {
      return new Constructor(this, kind);
    };
  };

  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype; // Fix native

  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));

    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true); // fix for some old engines

      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  } // fix Array#{values, @@iterator}.name in V8 / FF


  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;

    $default = function values() {
      return $native.call(this);
    };
  } // Define iterator


  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  } // Plug for library


  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;

  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }

  return methods;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');

var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();

  riter['return'] = function () {
    SAFE_CLOSING = true;
  }; // eslint-disable-next-line no-throw-literal


  Array.from(riter, function () {
    throw 2;
  });
} catch (e) {
  /* empty */
}

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;

  try {
    var arr = [7];
    var iter = arr[ITERATOR]();

    iter.next = function () {
      return {
        done: safe = true
      };
    };

    arr[ITERATOR] = function () {
      return iter;
    };

    exec(arr);
  } catch (e) {
    /* empty */
  }

  return safe;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return {
    value: value,
    done: !!done
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;

/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;

var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});

var setMeta = function (it) {
  setDesc(it, META, {
    value: {
      i: 'O' + ++id,
      // object ID
      w: {} // weak collections IDs

    }
  });
};

var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F'; // not necessary to add metadata

    if (!create) return 'E'; // add missing metadata

    setMeta(it); // return object ID
  }

  return it[META].i;
};

var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true; // not necessary to add metadata

    if (!create) return false; // add missing metadata

    setMeta(it); // return hash weak collections IDs
  }

  return it[META].w;
}; // add metadata on freeze-family methods calling


var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};

var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");

var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

var Empty = function () {
  /* empty */
};

var PROTOTYPE = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');

  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';

  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);

  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);

  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;

  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];

  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = createDict();

  return Properties === undefined ? result : dPs(result, Properties);
};

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

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;

  while (length > i) dP.f(O, P = keys[i++], Properties[P]);

  return O;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");

var gOPD = Object.getOwnPropertyDescriptor;
exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) {
    /* empty */
  }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn-ext.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f;

var toString = {}.toString;
var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopn.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");

var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");

var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];

  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }

  return O instanceof Object ? ObjectProto : null;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);

var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key); // Don't enum bug & hidden keys


  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }

  return result;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");

var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

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

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");

module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);

  return target;
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

/***/ "./node_modules/core-js/modules/_set-proto.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.

/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};

module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
  function (test, buggy, set) {
    try {
      set = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js")(Function.call, __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, '__proto__').set, 2);
      set(test, []);
      buggy = !(test instanceof Array);
    } catch (e) {
      buggy = true;
    }

    return function setPrototypeOf(O, proto) {
      check(O, proto);
      if (buggy) O.__proto__ = proto;else set(O, proto);
      return O;
    };
  }({}, false) : undefined),
  check: check
};

/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");

var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () {
      return this;
    }
  });
};

/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
    configurable: true,
    value: tag
  });
};

/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');

var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");

module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

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

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js"); // true  -> String#at
// false -> String#codePointAt


module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");

var max = Math.max;
var min = Math.min;

module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;

module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");

var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");

var min = Math.min;

module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
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

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

/***/ }),

/***/ "./node_modules/core-js/modules/_wks-define.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");

var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");

var defineProperty = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;

module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, {
    value: wksExt.f(name)
  });
};

/***/ }),

/***/ "./node_modules/core-js/modules/_wks-ext.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");

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

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');

var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");

module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.from.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.from.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");

var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");

var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");

var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");

var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/modules/_create-property.js");

var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");

$export($export.S + $export.F * !__webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  Array.from(iter);
}), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike
  /* , mapfn = undefined, thisArg = undefined */
  ) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2); // if object isn't iterable or it's array with default iterator - use simple case

    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);

      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }

    result.length = index;
    return result;
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");

var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");

var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js"); // 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()


module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target

  this._i = 0; // next index

  this._k = kind; // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;

  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }

  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)

Iterators.Arguments = Iterators.Array;
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 19.1.3.6 Object.prototype.toString()

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");

var test = {};
test[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';

if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");

var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
}; // 21.2.5.14 RegExp.prototype.toString()


if (__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return $toString.call({
    source: 'a',
    flags: 'b'
  }) != '/a/b';
})) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  }); // FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}

/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");

var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");

var SET = 'Set'; // 23.2 Set Objects

module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true); // 21.1.3.27 String.prototype[@@iterator]()


__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target

  this._i = 0; // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return {
    value: undefined,
    done: true
  };
  point = $at(O, index);
  this._i += point.length;
  return {
    value: point,
    done: false
  };
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // ECMAScript 6 symbols shim

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");

var META = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").KEY;

var $fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js");

var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");

var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");

var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");

var wksExt = __webpack_require__(/*! ./_wks-ext */ "./node_modules/core-js/modules/_wks-ext.js");

var wksDefine = __webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js");

var enumKeys = __webpack_require__(/*! ./_enum-keys */ "./node_modules/core-js/modules/_enum-keys.js");

var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");

var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");

var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");

var _create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");

var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ "./node_modules/core-js/modules/_object-gopn-ext.js");

var $GOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/modules/_object-gopd.js");

var $DP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");

var $keys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;

var _stringify = $JSON && $JSON.stringify;

var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () {
      return dP(this, 'a', {
        value: 7
      }).a;
    }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);

  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);

  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, {
        enumerable: createDesc(0, false)
      });
    }

    return setSymbolDesc(it, key, D);
  }

  return dP(it, key, D);
};

var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;

  while (l > i) $defineProperty(it, key = keys[i++], P[key]);

  return it;
};

var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};

var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};

var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;

  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  }

  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;

  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  }

  return result;
}; // 19.4.1.1 Symbol([description])


if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);

    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };

    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
      configurable: true,
      set: $set
    });
    return wrap(tag);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });
  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/modules/_object-gopn.js").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {
  Symbol: $Symbol
});

for (var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');

    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () {
    setter = true;
  },
  useSimple: function () {
    setter = false;
  }
});
$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
}); // 24.3.2 JSON.stringify(value [, replacer [, space]])

$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol(); // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols

  return _stringify([S]) != '[null]' || _stringify({
    a: S
  }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;

    while (arguments.length > i) args.push(arguments[i++]);

    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
}); // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)

$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf); // 19.4.3.5 Symbol.prototype[@@toStringTag]

setToStringTag($Symbol, 'Symbol'); // 20.2.1.9 Math[@@toStringTag]

setToStringTag(Math, 'Math', true); // 24.3.3 JSON[@@toStringTag]

setToStringTag(global.JSON, 'JSON', true);

/***/ }),

/***/ "./node_modules/core-js/modules/es7.symbol.async-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ "./node_modules/core-js/modules/_wks-define.js")('asyncIterator');

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");

var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");

var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");

var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");

var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");

var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;
var DOMIterables = {
  CSSRuleList: true,
  // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true,
  // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true,
  // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;

  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYi9zY3JpcHRzL3N0eWxlei5jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vL3dlYi9zY3JpcHRzL3N0eWxlei5ldmVudHMuanMiLCJ3ZWJwYWNrOi8vL3dlYi9zY3JpcHRzL3N0eWxlei5qcyIsIndlYnBhY2s6Ly8vd2ViL3NjcmlwdHMvc3R5bGV6LnN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4taW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24tc3Ryb25nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2NvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY3R4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19leHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZm9yLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19odG1sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2luaGVyaXQtaWYtcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLWFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21ldGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NldC1wcm90by5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zdHJpbmctYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3VpZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL192YWxpZGF0ZS1jb2xsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3drcy1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL193a3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5mbGFncy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAudG8tc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnNldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJkbUF0b21pY0ZpbHRlciIsImRtRGV2aWNlVHlwZXMiLCJkbUZpbHRlclRvY3MiLCJ2aWV3ZXJGcmFtZSIsInRvY3MiLCJjdXJXaWR0aCIsImN1ckhlaWdodCIsInBhZ2VycyIsIkNPTlNUQU5UUyIsInJlcXVpcmUiLCJTZXNzaW9uU3RvcmFnZSIsIkV2ZW50cyIsImlmcmFtZSIsImRvY3VtZW50IiwiYnRuTGlzdCIsImN1ckJ1dHRvbiIsImJ0biIsImV2ZW50IiwiY3VyU2Vzc2lvbiIsImFsbEJ1dHRvbnMiLCJuZXdXaWR0aCIsInNldFRpbWVvdXQiLCJ3aW5kb3ciLCJjdXJJbmRleCIsImN1ckZpbHRlciIsInBhcnNlSW50IiwiYWN0aXZlQnV0dG9uIiwiY3VySXRlbSIsImN1cnJlbnRTZXNzaW9uIiwiY3VycmVudFBhdHRlcm5UaXRsZSIsIml0ZW1TbGlkZXIiLCJfQ09OU1RBTlRTIiwiU3R5bGV6IiwicGFnZXIiLCJ1cmwiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJ0b2MiLCJwYXR0ZXJuIiwicGF0dGVyblN0cmluZyIsInBhdHRlcm5JdGVtcyIsImRhdGEiLCJjYXRlZ29yaWVzIiwiaXRlbSIsImNhdGVnb3J5U3RhdHMiLCJjYXRlb2dyeVN0YXQiLCJ0b2NPdXRwdXQiLCJ1aSIsIlNUT1JBR0UiLCJjYXRlZ29yeSIsImRldmljZVNpemUiLCJpbmRleCIsIm1heEluZGV4IiwidGl0bGUiLCJjdXJTZWxlY3RlZCIsInVwZGF0ZXMiLCJkZWZhdWx0U2Vzc2lvbiIsInN0eWxlelNlc3Npb24iLCJzZXNzaW9uU3RvcmFnZSIsIkpTT04iLCJuZXdTdGF0dXMiLCJjdXJTdGF0dXMiLCJjYXRlZ29yeUZpbHRlciIsImRldmljZUZpbHRlciIsImV4cG9ydHMiLCJpdCIsIlR5cGVFcnJvciIsIlVOU0NPUEFCTEVTIiwiQXJyYXlQcm90byIsIkFycmF5IiwicHJvdG90eXBlIiwidW5kZWZpbmVkIiwia2V5IiwiQ29uc3RydWN0b3IiLCJuYW1lIiwiZm9yYmlkZGVuRmllbGQiLCJpc09iamVjdCIsInRvSU9iamVjdCIsInRvTGVuZ3RoIiwidG9BYnNvbHV0ZUluZGV4IiwiSVNfSU5DTFVERVMiLCIkdGhpcyIsImVsIiwiZnJvbUluZGV4IiwiTyIsImxlbmd0aCIsInZhbHVlIiwiY29mIiwiVEFHIiwiQVJHIiwiYXJndW1lbnRzIiwidHJ5R2V0IiwiZSIsIlQiLCJCIiwiT2JqZWN0IiwiY2FsbGVlIiwidG9TdHJpbmciLCJjYWxsIiwic2xpY2UiLCJkUCIsImYiLCJjcmVhdGUiLCJyZWRlZmluZUFsbCIsImN0eCIsImFuSW5zdGFuY2UiLCJmb3JPZiIsIiRpdGVyRGVmaW5lIiwic3RlcCIsInNldFNwZWNpZXMiLCJERVNDUklQVE9SUyIsImZhc3RLZXkiLCJ2YWxpZGF0ZSIsIlNJWkUiLCJnZXRFbnRyeSIsInRoYXQiLCJlbnRyeSIsIl9pIiwiX2YiLCJuIiwiayIsImdldENvbnN0cnVjdG9yIiwid3JhcHBlciIsIk5BTUUiLCJJU19NQVAiLCJBRERFUiIsIkMiLCJpdGVyYWJsZSIsIl90IiwiX2wiLCJjbGVhciIsInIiLCJwIiwiaSIsIm5leHQiLCJwcmV2IiwiZm9yRWFjaCIsImNhbGxiYWNrZm4iLCJ2IiwiaGFzIiwiZ2V0IiwiZGVmIiwic2V0U3Ryb25nIiwiaXRlcmF0ZWQiLCJraW5kIiwiX2siLCJnbG9iYWwiLCIkZXhwb3J0IiwicmVkZWZpbmUiLCJtZXRhIiwiZmFpbHMiLCIkaXRlckRldGVjdCIsInNldFRvU3RyaW5nVGFnIiwiaW5oZXJpdElmUmVxdWlyZWQiLCJtZXRob2RzIiwiY29tbW9uIiwiSVNfV0VBSyIsIkJhc2UiLCJwcm90byIsImZpeE1ldGhvZCIsIktFWSIsImZuIiwiYSIsImFkZCIsInNldCIsImIiLCJlbnRyaWVzIiwiTkVFRCIsImluc3RhbmNlIiwiSEFTTlRfQ0hBSU5JTkciLCJUSFJPV1NfT05fUFJJTUlUSVZFUyIsIkFDQ0VQVF9JVEVSQUJMRVMiLCJpdGVyIiwiQlVHR1lfWkVSTyIsIiRpbnN0YW5jZSIsInRhcmdldCIsImNvbnN0cnVjdG9yIiwiRyIsIlciLCJGIiwiY29yZSIsInZlcnNpb24iLCJfX2UiLCIkZGVmaW5lUHJvcGVydHkiLCJjcmVhdGVEZXNjIiwib2JqZWN0IiwiYUZ1bmN0aW9uIiwiYyIsImFwcGx5IiwiZGVmaW5lUHJvcGVydHkiLCJpcyIsImNyZWF0ZUVsZW1lbnQiLCJzcGxpdCIsImdldEtleXMiLCJnT1BTIiwicElFIiwicmVzdWx0IiwiZ2V0U3ltYm9scyIsInN5bWJvbHMiLCJpc0VudW0iLCJwdXNoIiwiaGlkZSIsIlBST1RPVFlQRSIsInR5cGUiLCJzb3VyY2UiLCJJU19GT1JDRUQiLCJJU19HTE9CQUwiLCJJU19TVEFUSUMiLCJTIiwiSVNfUFJPVE8iLCJQIiwiSVNfQklORCIsImV4cFByb3RvIiwib3duIiwib3V0IiwiZXhwIiwiRnVuY3Rpb24iLCJVIiwiUiIsImV4ZWMiLCJhbk9iamVjdCIsImlnbm9yZUNhc2UiLCJtdWx0aWxpbmUiLCJ1bmljb2RlIiwic3RpY2t5IiwiaXNBcnJheUl0ZXIiLCJnZXRJdGVyRm4iLCJCUkVBSyIsIlJFVFVSTiIsIklURVJBVE9SIiwiaXRlckZuIiwiaXRlcmF0b3IiLCJkb25lIiwiTWF0aCIsInNlbGYiLCJfX2ciLCJoYXNPd25Qcm9wZXJ0eSIsImRvY3VtZW50RWxlbWVudCIsInNldFByb3RvdHlwZU9mIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJJdGVyYXRvcnMiLCJpc0FycmF5IiwiYXJnIiwicmV0IiwiZGVzY3JpcHRvciIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiTElCUkFSWSIsIiRpdGVyQ3JlYXRlIiwiZ2V0UHJvdG90eXBlT2YiLCJCVUdHWSIsImtleXMiLCJGRl9JVEVSQVRPUiIsIktFWVMiLCJWQUxVRVMiLCJyZXR1cm5UaGlzIiwiREVGQVVMVCIsIklTX1NFVCIsIkZPUkNFRCIsImdldE1ldGhvZCIsInZhbHVlcyIsIkRFRl9WQUxVRVMiLCJWQUxVRVNfQlVHIiwiJG5hdGl2ZSIsIiRkZWZhdWx0IiwiJGVudHJpZXMiLCIkYW55TmF0aXZlIiwiU0FGRV9DTE9TSU5HIiwicml0ZXIiLCJmcm9tIiwic2tpcENsb3NpbmciLCJzYWZlIiwiYXJyIiwiTUVUQSIsInNldERlc2MiLCJpZCIsImlzRXh0ZW5zaWJsZSIsIkZSRUVaRSIsInByZXZlbnRFeHRlbnNpb25zIiwic2V0TWV0YSIsInciLCJnZXRXZWFrIiwib25GcmVlemUiLCJkUHMiLCJlbnVtQnVnS2V5cyIsIklFX1BST1RPIiwiRW1wdHkiLCJjcmVhdGVEaWN0IiwibHQiLCJndCIsImlmcmFtZURvY3VtZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwiYXBwZW5kQ2hpbGQiLCJzcmMiLCJjb250ZW50V2luZG93Iiwib3BlbiIsIndyaXRlIiwiY2xvc2UiLCJQcm9wZXJ0aWVzIiwiSUU4X0RPTV9ERUZJTkUiLCJ0b1ByaW1pdGl2ZSIsIkF0dHJpYnV0ZXMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiZ09QRCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdPUE4iLCJ3aW5kb3dOYW1lcyIsImdldE93blByb3BlcnR5TmFtZXMiLCJnZXRXaW5kb3dOYW1lcyIsIiRrZXlzIiwiaGlkZGVuS2V5cyIsImNvbmNhdCIsImdldE93blByb3BlcnR5U3ltYm9scyIsInRvT2JqZWN0IiwiT2JqZWN0UHJvdG8iLCJhcnJheUluZGV4T2YiLCJuYW1lcyIsImJpdG1hcCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIlNSQyIsIlRPX1NUUklORyIsIiR0b1N0cmluZyIsIlRQTCIsImluc3BlY3RTb3VyY2UiLCJ2YWwiLCJpc0Z1bmN0aW9uIiwiam9pbiIsIlN0cmluZyIsImNoZWNrIiwidGVzdCIsImJ1Z2d5IiwiX19wcm90b19fIiwiU1BFQ0lFUyIsInRhZyIsInN0YXQiLCJzaGFyZWQiLCJ1aWQiLCJTSEFSRUQiLCJzdG9yZSIsIm1vZGUiLCJjb3B5cmlnaHQiLCJ0b0ludGVnZXIiLCJkZWZpbmVkIiwicG9zIiwicyIsImwiLCJjaGFyQ29kZUF0IiwiY2hhckF0IiwibWF4IiwibWluIiwiY2VpbCIsImZsb29yIiwiaXNOYU4iLCJJT2JqZWN0IiwidmFsdWVPZiIsInB4IiwicmFuZG9tIiwiVFlQRSIsIndrc0V4dCIsIiRTeW1ib2wiLCJTeW1ib2wiLCJVU0VfU1lNQk9MIiwiJGV4cG9ydHMiLCJjbGFzc29mIiwiZ2V0SXRlcmF0b3JNZXRob2QiLCJjcmVhdGVQcm9wZXJ0eSIsImFycmF5TGlrZSIsImFMZW4iLCJtYXBmbiIsIm1hcHBpbmciLCJhZGRUb1Vuc2NvcGFibGVzIiwiQXJndW1lbnRzIiwiZmxhZ3MiLCJSZWdFeHAiLCIkZmxhZ3MiLCJkZWZpbmUiLCJzdHJvbmciLCJTRVQiLCJTZXQiLCIkYXQiLCJwb2ludCIsIiRmYWlscyIsIndrcyIsIndrc0RlZmluZSIsImVudW1LZXlzIiwiX2NyZWF0ZSIsImdPUE5FeHQiLCIkR09QRCIsIiREUCIsIiRKU09OIiwiX3N0cmluZ2lmeSIsInN0cmluZ2lmeSIsIkhJRERFTiIsIlRPX1BSSU1JVElWRSIsIlN5bWJvbFJlZ2lzdHJ5IiwiQWxsU3ltYm9scyIsIk9QU3ltYm9scyIsIlVTRV9OQVRJVkUiLCJRT2JqZWN0Iiwic2V0dGVyIiwiZmluZENoaWxkIiwic2V0U3ltYm9sRGVzYyIsIkQiLCJwcm90b0Rlc2MiLCJ3cmFwIiwic3ltIiwiaXNTeW1ib2wiLCIkZGVmaW5lUHJvcGVydGllcyIsIiRjcmVhdGUiLCIkcHJvcGVydHlJc0VudW1lcmFibGUiLCJFIiwiJGdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIiRnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiJGdldE93blByb3BlcnR5U3ltYm9scyIsIklTX09QIiwiJHNldCIsImVzNlN5bWJvbHMiLCJqIiwid2VsbEtub3duU3ltYm9scyIsImtleUZvciIsInVzZVNldHRlciIsInVzZVNpbXBsZSIsImFyZ3MiLCJyZXBsYWNlciIsIiRyZXBsYWNlciIsIiRpdGVyYXRvcnMiLCJUT19TVFJJTkdfVEFHIiwiQXJyYXlWYWx1ZXMiLCJET01JdGVyYWJsZXMiLCJDU1NSdWxlTGlzdCIsIkNTU1N0eWxlRGVjbGFyYXRpb24iLCJDU1NWYWx1ZUxpc3QiLCJDbGllbnRSZWN0TGlzdCIsIkRPTVJlY3RMaXN0IiwiRE9NU3RyaW5nTGlzdCIsIkRPTVRva2VuTGlzdCIsIkRhdGFUcmFuc2Zlckl0ZW1MaXN0IiwiRmlsZUxpc3QiLCJIVE1MQWxsQ29sbGVjdGlvbiIsIkhUTUxDb2xsZWN0aW9uIiwiSFRNTEZvcm1FbGVtZW50IiwiSFRNTFNlbGVjdEVsZW1lbnQiLCJNZWRpYUxpc3QiLCJNaW1lVHlwZUFycmF5IiwiTmFtZWROb2RlTWFwIiwiTm9kZUxpc3QiLCJQYWludFJlcXVlc3RMaXN0IiwiUGx1Z2luIiwiUGx1Z2luQXJyYXkiLCJTVkdMZW5ndGhMaXN0IiwiU1ZHTnVtYmVyTGlzdCIsIlNWR1BhdGhTZWdMaXN0IiwiU1ZHUG9pbnRMaXN0IiwiU1ZHU3RyaW5nTGlzdCIsIlNWR1RyYW5zZm9ybUxpc3QiLCJTb3VyY2VCdWZmZXJMaXN0IiwiU3R5bGVTaGVldExpc3QiLCJUZXh0VHJhY2tDdWVMaXN0IiwiVGV4dFRyYWNrTGlzdCIsIlRvdWNoTGlzdCIsImNvbGxlY3Rpb25zIiwiZXhwbGljaXQiLCJDb2xsZWN0aW9uIiwicnVudGltZSIsIk9wIiwiaGFzT3duIiwiaXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJpbm5lckZuIiwib3V0ZXJGbiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjb250ZXh0IiwiQ29udGV4dCIsIl9pbnZva2UiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJvYmoiLCJlcnIiLCJHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0IiwiR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCIsIkdlblN0YXRlRXhlY3V0aW5nIiwiR2VuU3RhdGVDb21wbGV0ZWQiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJHcCIsImRpc3BsYXlOYW1lIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwibWV0aG9kIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJtYXJrIiwiYXdyYXAiLCJfX2F3YWl0IiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJQcm9taXNlIiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiZW5xdWV1ZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiYXN5bmMiLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsInJldmVyc2UiLCJwb3AiLCJpdGVyYXRvck1ldGhvZCIsInNraXBUZW1wUmVzZXQiLCJzdG9wIiwicm9vdEVudHJ5Iiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJyZWdlbmVyYXRvclJ1bnRpbWUiLCJhY2NpZGVudGFsU3RyaWN0TW9kZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMx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aUI7QUF1TGxCd0MsaUJBQWEsRUFBRSxVQUFTaGIsUUFBVCxFQUFtQmtaLFVBQW5CLEVBQStCQyxPQUEvQixFQUF3QztBQUNyRCxXQUFLVCxRQUFMLEdBQWdCO0FBQ2RsUyxnQkFBUSxFQUFFNEIsTUFBTSxDQUFDcEksUUFBRCxDQURGO0FBRWRrWixrQkFBVSxFQUFFQSxVQUZFO0FBR2RDLGVBQU8sRUFBRUE7QUFISyxPQUFoQjs7QUFNQSxVQUFJLEtBQUtoQyxNQUFMLEtBQWdCLE1BQXBCLEVBQTRCO0FBQzFCO0FBQ0E7QUFDQSxhQUFLaFEsR0FBTCxHQUFXM0ssU0FBWDtBQUNEOztBQUVELGFBQU9tYSxnQkFBUDtBQUNEO0FBck1pQixHQUFwQixDQTNlZ0MsQ0FtckJoQztBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFPMWEsT0FBUDtBQUVELENBenJCYyxFQTByQmI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUE2QmpFLE1BQU0sQ0FBQ2lFLE9BQXBDLEdBQThDLFNBOXJCakMsQ0FBZjs7QUFpc0JBLElBQUk7QUFDRmdmLG9CQUFrQixHQUFHL0YsT0FBckI7QUFDRCxDQUZELENBRUUsT0FBT2dHLG9CQUFQLEVBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBelYsVUFBUSxDQUFDLEdBQUQsRUFBTSx3QkFBTixDQUFSLENBQXdDeVAsT0FBeEM7QUFDRCxDIiwiZmlsZSI6InN0eWxlei5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL3dlYi9zY3JpcHRzL3N0eWxlei5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRtQXRvbWljRmlsdGVyOiAnLm0tZmlsdGVycyAuYS1maWx0ZXInLFxuICAgIGRtRGV2aWNlVHlwZXM6ICcubS1kZXZpY2V0eXBlcyAuYS1maWx0ZXInLFxuICAgIGRtRmlsdGVyVG9jczogJy5tLWZpbHRlcnRvY3MgLmEtZmlsdGVyJyxcbiAgICB2aWV3ZXJGcmFtZTogJy5vLXZpZXdlcicsXG4gICAgdG9jczogJy5vLXRvY3MnLFxuICAgIGN1cldpZHRoOiAnLmEtaW5wdXQuanMtY3VyV2lkdGgnLFxuICAgIGN1ckhlaWdodDogJy5hLWlucHV0LmpzLWN1ckhlaWdodCcsXG4gICAgcGFnZXJzOiAnLm0taXRlbXNsaWRlciAuYS1maWx0ZXInXG59XG4iLCJjb25zdCBDT05TVEFOVFMgPSByZXF1aXJlKCcuL3N0eWxlei5jb25zdGFudHMnKTtcbmNvbnN0IFNlc3Npb25TdG9yYWdlID0gcmVxdWlyZSgnLi9zdHlsZXouc3RvcmFnZScpO1xuXG5jbGFzcyBFdmVudHMge1xuXG4gICAgc3RhdGljIF91cGRhdGVJZnJhbWVDb250ZW50KCkge1xuXG4gICAgICAgIGxldCBpZnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKENPTlNUQU5UUy52aWV3ZXJGcmFtZSk7XG4gICAgICAgIGlmcmFtZS5jb250ZW50V2luZG93LmxvY2F0aW9uLmhyZWYgPSBcInZpZXdlci5odG1sXCJcblxuICAgIH1cblxuICAgIHN0YXRpYyBfdG9nZ2xlQnV0dG9ucyhidG5MaXN0LCBjdXJCdXR0b24pIHtcblxuICAgICAgICBidG5MaXN0LmZvckVhY2goKGJ0bikgPT4ge1xuXG4gICAgICAgICAgICBpZiAoYnRuID09PSBjdXJCdXR0b24pIHtcblxuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICAvLyB1cGRhdGVpbmcgU2Vzc2lvbiBTdGF0dXNcbiAgICAgICAgU2Vzc2lvblN0b3JhZ2UudXBkYXRlU3RhdHVzKCk7XG5cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgQ2F0ZWdvcnkgc2VsZWN0aW9uXG4gICAgc3RhdGljIGZpbHRlckNhdGVnb3JpZXMoZXZlbnQpIHtcblxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmRhdGFzZXQgIT09IG51bGwgJiZcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5kYXRhc2V0LmZpbHRlciAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgKFtcImF0b21zXCIsIFwibW9sZWN1bGVzXCIsIFwib3JnYW5pc21cIl0uaW5kZXhPZihldmVudC50YXJnZXQuZGF0YXNldC5maWx0ZXIpICE9PSAtMSksXG4gICAgICAgICAgICBFdmVudHMuZGV0ZWN0VXNlckNsaWNrKGV2ZW50KSkge1xuXG4gICAgICAgICAgICBsZXQgY3VyU2Vzc2lvbiA9IFNlc3Npb25TdG9yYWdlLmdldEN1cnJlbnRGaWx0ZXIoKTtcblxuICAgICAgICAgICAgY3VyU2Vzc2lvbi5jYXRlZ29yeSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmZpbHRlcjtcbiAgICAgICAgICAgIGN1clNlc3Npb24uaW5kZXggPSBudWxsXG4gICAgICAgICAgICBjdXJTZXNzaW9uLm1heEluZGV4ID0gbnVsbFxuXG4gICAgICAgICAgICBTZXNzaW9uU3RvcmFnZS51cGRhdGVTdGF0dXMoY3VyU2Vzc2lvbik7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjdXJCdXR0b24gPSBldmVudC50YXJnZXQsXG4gICAgICAgICAgICBhbGxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChDT05TVEFOVFMuZG1BdG9taWNGaWx0ZXIpO1xuXG4gICAgICAgIEV2ZW50cy5fdG9nZ2xlQnV0dG9ucyhhbGxCdXR0b25zLCBjdXJCdXR0b24pO1xuXG4gICAgICAgIEV2ZW50cy5fdXBkYXRlSWZyYW1lQ29udGVudCgpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBkZXZpY2VGaWx0ZXJpbmdcbiAgICBzdGF0aWMgZmlsdGVyRGV2aWNlVHlwZShldmVudCkge1xuXG4gICAgICAgIGxldCBjdXJCdXR0b24gPSBldmVudC50YXJnZXQsXG4gICAgICAgICAgICBhbGxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChDT05TVEFOVFMuZG1EZXZpY2VUeXBlcyksXG4gICAgICAgICAgICB2aWV3ZXJGcmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoQ09OU1RBTlRTLnZpZXdlckZyYW1lKTtcblxuICAgICAgICBFdmVudHMuX3RvZ2dsZUJ1dHRvbnMoYWxsQnV0dG9ucywgY3VyQnV0dG9uKTtcblxuICAgICAgICAvLyBDaGVjayBmb3IgdXBkYXRlIHRoZSBmdWxsIHdpZHRoXG4gICAgICAgIGNvbnN0IG5ld1dpZHRoID0gY3VyQnV0dG9uLmRhdGFzZXQuc2l6ZSAhPT0gJ2Z1bGwnID8gY3VyQnV0dG9uLmRhdGFzZXQuc2l6ZSA6IC0xO1xuXG4gICAgICAgIC8vIGlmIHdpZHRoICE9PSBmdWxsIHNldCBwcmVjaWNzZSBwaXhlbHNcbiAgICAgICAgaWYgKG5ld1dpZHRoICE9PSAtMSkge1xuXG4gICAgICAgICAgICB2aWV3ZXJGcmFtZS5zdHlsZS5tYXhXaWR0aCA9IGAke25ld1dpZHRofXB4YDtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAvLyB1bnNldCBhbmQgcmVzdCB0byAxMDB2dztcbiAgICAgICAgICAgIHZpZXdlckZyYW1lLnN0eWxlLm1heFdpZHRoID0gXCIxMDB2d1wiO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHN0YXRpYyBzZXRXaWR0aChldmVudCkge1xuXG4gICAgICAgIC8vIFRpbWVvdXQgdG8gbWFrZSBzdXJlIHJlc2l6ZSBpcyBmaW5pc2hlZFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICAgICAgbGV0IGN1cldpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihDT05TVEFOVFMuY3VyV2lkdGgpO1xuXG4gICAgICAgICAgICBpZiAoY3VyV2lkdGggIT09IG51bGwgJiYgY3VyV2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGN1cldpZHRoLnZhbHVlID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBjdXJIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKENPTlNUQU5UUy5jdXJIZWlnaHQpO1xuXG4gICAgICAgICAgICBpZiAoY3VySGVpZ2h0ICE9PSBudWxsICYmIGN1ckhlaWdodCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY3VySGVpZ2h0LnZhbHVlID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sIDI1MCk7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgdG9nZ2xlVG9jcyhldmVudCkge1xuXG4gICAgICAgIGxldCB0b2NzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihDT05TVEFOVFMudG9jcyk7XG5cbiAgICAgICAgdG9jcy5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcblxuICAgIH1cblxuICAgIHN0YXRpYyBzZXRUb2NGaWx0ZXIoZXZlbnQpIHtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgY3VyQnV0dG9uID0gZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgY3VySW5kZXggPSBjdXJCdXR0b24uZGF0YXNldC5pbmRleCxcbiAgICAgICAgICAgIGN1ckZpbHRlciA9IGN1ckJ1dHRvbi5kYXRhc2V0LmZpbHRlcjtcblxuICAgICAgICBsZXQgY3VyU2Vzc2lvbiA9IFNlc3Npb25TdG9yYWdlLmdldEN1cnJlbnRGaWx0ZXIoKTtcbiAgICAgICAgY3VyU2Vzc2lvbi5jYXRlZ29yeSA9IGN1ckZpbHRlcjtcbiAgICAgICAgY3VyU2Vzc2lvbi5pbmRleCA9IHBhcnNlSW50KGN1ckluZGV4KTtcbiAgICAgICAgY3VyU2Vzc2lvbi5tYXhJbmRleCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYGJ1dHRvbi5hLXRvYy10b2dnbGVbZGF0YS1maWx0ZXI9JyR7Y3VyRmlsdGVyfSddYCkubGVuZ3RoO1xuXG4gICAgICAgIFNlc3Npb25TdG9yYWdlLnVwZGF0ZVN0YXR1cyhjdXJTZXNzaW9uKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuby10b2NzJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cbiAgICAgICAgbGV0IGFjdGl2ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGJ1dHRvbi5hLWZpbHRlcltkYXRhLWZpbHRlcj0nJHtjdXJGaWx0ZXJ9J11gKTtcbiAgICAgICAgbGV0IGFsbEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBidXR0b24uYS1maWx0ZXJgKTtcblxuICAgICAgICBFdmVudHMuX3RvZ2dsZUJ1dHRvbnMoYWxsQnV0dG9ucywgYWN0aXZlQnV0dG9uKTtcblxuICAgICAgICAvLyBmb3JjZSB0aGUgU3RvcmFnZSBDaGFuZ2UgdG8gc2hvdyBzbGlkZXIgaWYgcmVxdWlyZWRcbiAgICAgICAgRXZlbnRzLmRldGVjdFN0b3JhZ2VDaGFuZ2UobnVsbCk7XG4gICAgICAgIEV2ZW50cy5fdXBkYXRlSWZyYW1lQ29udGVudCgpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIEluZGV4IG9mIGN1cnJlbnQgZWxlbWVudFxuICAgICAqIEBwYXJhbSB7ZXZlbnR9IGV2ZW50IFxuICAgICAqL1xuICAgIHN0YXRpYyBjaGFuZ2VJbmRleChldmVudCkge1xuXG4gICAgICAgIGxldCBjdXJJdGVtID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgICAgIGlmIChjdXJJdGVtLmRhdGFzZXQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgY3VySXRlbS5kYXRhc2V0LmZpbHRlciAhPT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgIGxldCBjdXJTZXNzaW9uID0gU2Vzc2lvblN0b3JhZ2UuZ2V0Q3VycmVudEZpbHRlcigpO1xuXG4gICAgICAgICAgICBpZiAoY3VySXRlbS5kYXRhc2V0LmZpbHRlciA9PT0gJ25leHQtaXRlbScpIHtcblxuICAgICAgICAgICAgICAgIGlmIChjdXJTZXNzaW9uLmluZGV4ICsgMSA8IGN1clNlc3Npb24ubWF4SW5kZXgpIHtcblxuICAgICAgICAgICAgICAgICAgICBjdXJTZXNzaW9uLmluZGV4ID0gY3VyU2Vzc2lvbi5pbmRleCArIDE7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGN1clNlc3Npb24uaW5kZXggPSAwO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgU2Vzc2lvblN0b3JhZ2UudXBkYXRlU3RhdHVzKGN1clNlc3Npb24pO1xuICAgICAgICAgICAgICAgIEV2ZW50cy5fdXBkYXRlSWZyYW1lQ29udGVudCgpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjdXJJdGVtLmRhdGFzZXQuZmlsdGVyID09PSAncHJldi1pdGVtJykge1xuXG4gICAgICAgICAgICAgICAgaWYgKGN1clNlc3Npb24uaW5kZXggLSAxID49IDApIHtcblxuICAgICAgICAgICAgICAgICAgICBjdXJTZXNzaW9uLmluZGV4ID0gY3VyU2Vzc2lvbi5pbmRleCAtIDE7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGN1clNlc3Npb24uaW5kZXggPSBjdXJTZXNzaW9uLm1heEluZGV4O1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgU2Vzc2lvblN0b3JhZ2UudXBkYXRlU3RhdHVzKGN1clNlc3Npb24pO1xuICAgICAgICAgICAgICAgIEV2ZW50cy5fdXBkYXRlSWZyYW1lQ29udGVudCgpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZWNodCBTdG9yYWdlIENoYW5nZXNcbiAgICAgKiBAcGFyYW0ge2V2ZW50fSBldmVudCBcbiAgICAgKi9cbiAgICBzdGF0aWMgZGV0ZWN0U3RvcmFnZUNoYW5nZShldmVudCkge1xuXG4gICAgICAgIGxldCBjdXJyZW50U2Vzc2lvbiA9IFNlc3Npb25TdG9yYWdlLmdldEN1cnJlbnRGaWx0ZXIoKTtcblxuICAgICAgICBpZiAoY3VycmVudFNlc3Npb24udGl0bGUgIT09IG51bGwgJiZcbiAgICAgICAgICAgIGN1cnJlbnRTZXNzaW9uLm1heEluZGV4ICE9PSBudWxsICYmXG4gICAgICAgICAgICBjdXJyZW50U2Vzc2lvbi5tYXhJbmRleCA+IDEpIHtcblxuICAgICAgICAgICAgbGV0IGN1cnJlbnRQYXR0ZXJuVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYS1maWx0ZXJuYW1lJyk7XG4gICAgICAgICAgICBjdXJyZW50UGF0dGVyblRpdGxlLnRleHRDb250ZW50ID0gY3VycmVudFNlc3Npb24udGl0bGU7XG5cbiAgICAgICAgICAgIGxldCBpdGVtU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm0taXRlbXNsaWRlcicpO1xuXG4gICAgICAgICAgICBpZiAoaXRlbVNsaWRlciAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgaXRlbVNsaWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBpdGVtU2xpZGVyLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcblxuICAgICAgICAgICAgICAgIGl0ZW1TbGlkZXIuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpdGVtU2xpZGVyLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsIGZhbHNlKTtcblxuXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBsZXQgaXRlbVNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tLWl0ZW1zbGlkZXInKTtcblxuICAgICAgICAgICAgaWYgKGl0ZW1TbGlkZXIgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgICAgIGl0ZW1TbGlkZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgaXRlbVNsaWRlci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG5cbiAgICAgICAgICAgICAgICBpdGVtU2xpZGVyLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBpdGVtU2xpZGVyLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB1c2VyIGNsaWNrZWQgb3IgY2xpY2sgd2FzIGV4ZWN1dGVkIGJ5IHNjcmlwdFxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFxuICAgICAqL1xuICAgIHN0YXRpYyBkZXRlY3RVc2VyQ2xpY2soZXZlbnQpe1xuICAgICAgICByZXR1cm4gZXZlbnQuc2NyZWVuWCAmJiBldmVudC5zY3JlZW5YICE9IDAgJiYgZXZlbnQuc2NyZWVuWSAmJiBldmVudC5zY3JlZW5ZICE9IDBcbiAgICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFdmVudHM7IiwiY29uc3QgX0NPTlNUQU5UUyA9IHJlcXVpcmUoJy4vc3R5bGV6LmNvbnN0YW50cycpO1xuY29uc3QgU2Vzc2lvblN0b3JhZ2UgPSByZXF1aXJlKCcuL3N0eWxlei5zdG9yYWdlJyk7XG5jb25zdCBFdmVudHMgPSByZXF1aXJlKCcuL3N0eWxlei5ldmVudHMnKTtcbi8vIGNvbnN0IERhdGEgPSByZXF1aXJlKCcuL3N0eWxlcy5kYXRhJyk7XG5cbmV4cG9ydCBjbGFzcyBTdHlsZXoge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCBFdmVudHMuZGV0ZWN0U3RvcmFnZUNoYW5nZSlcblxuICAgICAgICAvLyBpbml0IGludGVybmFtZWxzXG4gICAgICAgIHRoaXMuQ09OU1RBTlRTID0gX0NPTlNUQU5UUztcbiAgICAgICAgdGhpcy5FdmVudHMgPSBFdmVudHM7XG5cbiAgICAgICAgLy8gcmVnaXN0ZXIgY2F0ZWdvcnkgZmlsdGVyc1xuICAgICAgICB0aGlzLmJ0bnNDYXRGaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuQ09OU1RBTlRTLmRtQXRvbWljRmlsdGVyKTtcbiAgICAgICAgdGhpcy5idG5zQ2F0RmlsdGVyLmZvckVhY2goKGJ0bikgPT4ge1xuICAgICAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRXZlbnRzLmZpbHRlckNhdGVnb3JpZXMpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyByZWdpc3RlciBkZXZpY2UgdHlwZXNcbiAgICAgICAgdGhpcy5idG5EZXZpY2VTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5DT05TVEFOVFMuZG1EZXZpY2VUeXBlcyk7XG4gICAgICAgIHRoaXMuYnRuRGV2aWNlU2VsZWN0b3IuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBFdmVudHMuZmlsdGVyRGV2aWNlVHlwZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBFdmVudHMuc2V0V2lkdGgpO1xuICAgICAgICAvLyBzZXQgdGhlIGluaXRpYWwgd2lkdGhcbiAgICAgICAgRXZlbnRzLnNldFdpZHRoKG51bGwpO1xuXG4gICAgICAgIHRoaXMuYnRuVG9jcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5DT05TVEFOVFMuZG1GaWx0ZXJUb2NzKTtcbiAgICAgICAgaWYgKHRoaXMuYnRuVG9jcyAhPT0gbnVsbCAmJiB0aGlzLmJ0blRvY3MgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgdGhpcy5idG5Ub2NzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRXZlbnRzLnRvZ2dsZVRvY3MpO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJ0blBhZ2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5DT05TVEFOVFMucGFnZXJzKTtcbiAgICAgICAgdGhpcy5idG5QYWdlcnMuZm9yRWFjaChwYWdlciA9PiB7XG5cbiAgICAgICAgICAgIHBhZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgRXZlbnRzLmNoYW5nZUluZGV4KVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFNlc3Npb25TdG9yYWdlLnNldEN1cnJlbnRGaWx0ZXIoKTtcblxuICAgICAgICAvLyBmb3JjZSBzbGlkZXIgdG8gc2hvdyBvciBub3RcbiAgICAgICAgRXZlbnRzLmRldGVjdFN0b3JhZ2VDaGFuZ2UobnVsbCk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJUb2MoKTtcblxuICAgIH1cblxuICAgIGFzeW5jIF9mZXRjaFBhdHRlcm4oKSB7XG5cbiAgICAgICAgbGV0IHVybCA9ICcuL2FwcC9jb25maWcvc3R5bGV6Lmpzb24nO1xuXG4gICAgICAgIHJldHVybiBhd2FpdCBmZXRjaCh1cmwpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIHRocm93ICdFcnJvciBjdXJyZW50IHN0YXR1czogJyArIHJlc3BvbnNlLnN0YXR1cyArICcgLSAnICsgdXJsO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VSUk9SIDo6OicsIGVycm9yKTtcblxuICAgICAgICAgICAgfSlcblxuICAgIH1cblxuXG4gICAgcmVuZGVyVG9jKCkge1xuXG4gICAgICAgIGNvbnN0IHRvYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vLXRvY3Npbm5lcicpO1xuXG4gICAgICAgIGxldCBwYXR0ZXJuID0gdGhpcy5fZmV0Y2hQYXR0ZXJuKCk7XG5cbiAgICAgICAgbGV0IHBhdHRlcm5TdHJpbmcgPSB7fTtcblxuICAgICAgICBwYXR0ZXJuLnRoZW4oKGRhdGEpID0+IHtcblxuICAgICAgICAgICAgbGV0IHBhdHRlcm5JdGVtcyA9IGRhdGEucGF0dGVybnM7XG5cbiAgICAgICAgICAgIC8vIGNyZWF0ZSB1bmlxdWUgdmFsdWVzIGZpcnN0XG4gICAgICAgICAgICBsZXQgY2F0ZWdvcmllcyA9IFsuLi5uZXcgU2V0KHBhdHRlcm5JdGVtcy5tYXAoaXRlbSA9PiBpdGVtLmNhdGVnb3J5KSldO1xuICAgICAgICAgICAgLy8gY3JlYXRlIHN0YXRpc3RpY3Mgb2JqZWN0XG4gICAgICAgICAgICBsZXQgY2F0ZWdvcnlTdGF0cyA9IG5ldyBPYmplY3QoKTtcbiAgICAgICAgICAgIGNhdGVnb3JpZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgcHJvcGVydGllc1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5U3RhdHNbaXRlbV0gPSAwO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbGV0IGNhdGVvZ3J5U3RhdCA9IHtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkYXRhLnBhdHRlcm5zLmZvckVhY2goaXRlbSA9PiB7XG5cblxuICAgICAgICAgICAgICAgIGlmIChwYXR0ZXJuU3RyaW5nW2l0ZW0uY2F0ZWdvcnldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVyblN0cmluZ1tpdGVtLmNhdGVnb3J5XSA9ICcnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBhdHRlcm5TdHJpbmdbaXRlbS5jYXRlZ29yeV0gKz0gYDxsaT48YnV0dG9uIFxuICAgICAgICAgICAgICAgIGRhdGEtZmlsdGVyPScke2l0ZW0uY2F0ZWdvcnl9JyBcbiAgICAgICAgICAgICAgICBkYXRhLWluZGV4PScke2NhdGVnb3J5U3RhdHNbaXRlbS5jYXRlZ29yeV19JyBcbiAgICAgICAgICAgICAgICBjbGFzcz0nYS10b2MtdG9nZ2xlJz4ke2l0ZW0udGl0bGV9PC9idXR0b24+PC9saT5gO1xuXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlTdGF0c1tpdGVtLmNhdGVnb3J5XSArPSAxO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gSnVzdCBpbiBjYXNlIG5vIG9iamVjdHMgZXhpc3RcbiAgICAgICAgICAgIGxldCB0b2NPdXRwdXQgPVxuICAgICAgICAgICAgICAgIGA8dWw+PGxpPjxoMj5BdG9tczwvaDI+PG9sPiR7XG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZihwYXR0ZXJuU3RyaW5nWydhdG9tcyddKSA9PT0gXCJ1bmRlZmluZWRcIiA/ICcnIDogcGF0dGVyblN0cmluZ1snYXRvbXMnXVxuICAgICAgICAgICAgICAgIH08L29sPjwvbGk+PC91bD5cbiAgICAgICAgICAgIDx1bD48bGk+PGgyPk1vbGVjdWxlczwvaDI+PG9sPiR7XG4gICAgICAgICAgICAgICAgdHlwZW9mKHBhdHRlcm5TdHJpbmdbJ21vbGVjdWxlcyddKSA9PT0gXCJ1bmRlZmluZWRcIiA/ICcnIDogcGF0dGVyblN0cmluZ1snbW9sZWN1bGVzJ11cbiAgICAgICAgICAgICAgICB9PC9vbD48L2xpPjwvdWw+XG4gICAgICAgICAgICA8dWw+PGxpPjxoMj5PcmdhbmlzbTwvaDI+PG9sPiR7XG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZihwYXR0ZXJuU3RyaW5nWydvcmdhbmlzbSddKSA9PT0gXCJ1bmRlZmluZWRcIiA/ICcnIDogcGF0dGVyblN0cmluZ1snb3JnYW5pc20nXVxuICAgICAgICAgICAgICAgIH08L29sPjwvbGk+PC91bD5cbiAgICAgICAgICAgIDx1bD48bGk+PGgyPlRlbXBsYXRlczwvaDI+PG9sPiR7XG4gICAgICAgICAgICAgICAgdHlwZW9mKHBhdHRlcm5TdHJpbmdbJ3RlbXBsYXRlcyddKSA9PT0gXCJ1bmRlZmluZWRcIiA/ICcnIDogcGF0dGVyblN0cmluZ1sndGVtcGxhdGVzJ11cbiAgICAgICAgICAgICAgICB9PC9vbD48L2xpPjwvdWw+XG4gICAgICAgICAgICA8dWw+PGxpPjxoMj5QYWdlczwvaDI+PG9sPiR7XG4gICAgICAgICAgICAgICAgdHlwZW9mKHBhdHRlcm5TdHJpbmdbJ3BhZ2VzJ10pID09PSBcInVuZGVmaW5lZFwiID8gJycgOiBwYXR0ZXJuU3RyaW5nWydwYWdlcyddXG4gICAgICAgICAgICAgICAgfTwvb2w+PC9saT48L3VsPmA7XG5cbiAgICAgICAgICAgIHRvYy5pbm5lckhUTUwgPSB0b2NPdXRwdXQ7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hLXRvYy10b2dnbGUnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLkV2ZW50cy5zZXRUb2NGaWx0ZXIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIEFwcGx5IGZpbHRlclxuXG5cbiAgICAgICAgfSk7XG5cblxuXG4gICAgfVxuXG59XG5cbmNvbnN0IHVpID0gbmV3IFN0eWxlejsiLCJjb25zdCBfQ09OU1RBTlRTID0gcmVxdWlyZSgnLi9zdHlsZXouY29uc3RhbnRzJyk7XG5jb25zdCBTVE9SQUdFID0gJ3N0eWxleic7XG5cbmNsYXNzIFNlc3Npb25TdG9yYWdlIHtcblxuICAgIHN0YXRpYyBfcmV0dXJuRGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYXRvbXMnLFxuICAgICAgICAgICAgZGV2aWNlU2l6ZTogJ2Z1bGwnLFxuICAgICAgICAgICAgaW5kZXg6IG51bGwsXG4gICAgICAgICAgICBtYXhJbmRleDogbnVsbCxcbiAgICAgICAgICAgIHRpdGxlOiBudWxsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3RhdGljIF9nZXRTZWxlY3RlZENhdGVnb3J5KCkge1xuXG4gICAgICAgIGxldCBjdXJTZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoX0NPTlNUQU5UUy5kbUF0b21pY0ZpbHRlciArICcuc2VsZWN0ZWQnKTtcblxuICAgICAgICBpZiAoY3VyU2VsZWN0ZWQgIT09IG51bGwgJiZcbiAgICAgICAgICAgIGN1clNlbGVjdGVkLmRhdGFzZXQgIT09IG51bGwgJiZcbiAgICAgICAgICAgIGN1clNlbGVjdGVkLmRhdGFzZXQuZmlsdGVyICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBjdXJTZWxlY3RlZC5kYXRhc2V0LmZpbHRlciAhPT0gbnVsbCA/IGN1clNlbGVjdGVkLmRhdGFzZXQuZmlsdGVyIDogJ2F0b21zJztcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICByZXR1cm4gJ2F0b21zJztcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgX2dldFNlbGVjdGVkRGV2aWNlU2l6ZSgpIHtcblxuICAgICAgICBsZXQgY3VyU2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKF9DT05TVEFOVFMuZG1EZXZpY2VUeXBlcyArICcuc2VsZWN0ZWQnKTtcblxuICAgICAgICBpZiAoY3VyU2VsZWN0ZWQgIT09IG51bGwgJiZcbiAgICAgICAgICAgIGN1clNlbGVjdGVkLmRhdGFzZXQgIT09IG51bGwgJiZcbiAgICAgICAgICAgIGN1clNlbGVjdGVkLmRhdGFzZXQuc2l6ZSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICByZXR1cm4gY3VyU2VsZWN0ZWQuZGF0YXNldC5zaXplICE9PSBudWxsID8gY3VyU2VsZWN0ZWQuZGF0YXNldC5zaXplIDogJ2Z1bGwnOztcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICByZXR1cm4gJ2Z1bGwnO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHN0YXRpYyB1cGRhdGVTdGF0dXModXBkYXRlcykge1xuXG4gICAgICAgIGlmICh1cGRhdGVzID09PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgbGV0IGRlZmF1bHRTZXNzaW9uID0gdGhpcy5fcmV0dXJuRGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBsZXQgc3R5bGV6U2Vzc2lvbiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU1RPUkFHRSk7XG5cbiAgICAgICAgICAgIGlmIChzdHlsZXpTZXNzaW9uID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICAgICBzdHlsZXpTZXNzaW9uID09PSBudWxsKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9nZXRTZWxlY3RlZENhdGVnb3J5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZ2V0U2VsZWN0ZWREZXZpY2VTaXplKCk7XG5cbiAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFNUT1JBR0UsIEpTT04uc3RyaW5naWZ5KGRlZmF1bHRTZXNzaW9uKSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgbmV3U3RhdHVzID0gSlNPTi5wYXJzZShzdHlsZXpTZXNzaW9uKTtcblxuICAgICAgICAgICAgICAgIG5ld1N0YXR1cy5jYXRlZ29yeSA9IHRoaXMuX2dldFNlbGVjdGVkQ2F0ZWdvcnkoKTtcbiAgICAgICAgICAgICAgICBuZXdTdGF0dXMuZGV2aWNlU2l6ZSA9IHRoaXMuX2dldFNlbGVjdGVkRGV2aWNlU2l6ZSgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIG5ld1N0YXR1cy5pbmRleCA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9nZXRTZWxlY3RlZENhdGVnb3J5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZ2V0U2VsZWN0ZWREZXZpY2VTaXplKCk7XG5cbiAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFNUT1JBR0UsIEpTT04uc3RyaW5naWZ5KG5ld1N0YXR1cykpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShTVE9SQUdFLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVzKSk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc3RhdGljIHNldEN1cnJlbnRGaWx0ZXIoKSB7XG5cbiAgICAgICAgbGV0IGN1clN0YXR1cyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oU1RPUkFHRSkgIT09IG51bGwgP1xuICAgICAgICAgICAgSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0UpKSA6IFNlc3Npb25TdG9yYWdlLl9yZXR1cm5EZWZhdWx0KCk7XG5cbiAgICAgICAgbGV0IGNhdGVnb3J5RmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYnV0dG9uW2RhdGEtZmlsdGVyPVwiJHtjdXJTdGF0dXMuY2F0ZWdvcnl9XCJdYCk7XG5cbiAgICAgICAgaWYgKGNhdGVnb3J5RmlsdGVyICE9PSBudWxsICYmIGNhdGVnb3J5RmlsdGVyICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgY2F0ZWdvcnlGaWx0ZXIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIGNhdGVnb3J5RmlsdGVyLmNsaWNrKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkZXZpY2VGaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBidXR0b25bZGF0YS1zaXplPVwiJHtjdXJTdGF0dXMuZGV2aWNlU2l6ZX1cIl1gKTtcblxuICAgICAgICBpZiAoZGV2aWNlRmlsdGVyICE9PSBudWxsICYmIGRldmljZUZpbHRlciAhPT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgIGRldmljZUZpbHRlci5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgZGV2aWNlRmlsdGVyLmNsaWNrKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjdXJyZW50UGF0dGVyblRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmEtZmlsdGVybmFtZScpO1xuXG4gICAgICAgIGlmIChjdXJTdGF0dXMudGl0bGUgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgY3VycmVudFBhdHRlcm5UaXRsZS50ZXh0Q29udGVudCA9IGN1clN0YXR1cy50aXRsZTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBjdXJyZW50UGF0dGVyblRpdGxlLnRleHRDb250ZW50ID0gJyAnO1xuICAgICAgICAgICAgbGV0IGl0ZW1TbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubS1pdGVtc2xpZGVyJyk7XG5cbiAgICAgICAgICAgIGlmIChpdGVtU2xpZGVyICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoY3VyU3RhdHVzLm1heEluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1TbGlkZXIuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRDdXJyZW50RmlsdGVyKCkge1xuXG4gICAgICAgIGxldCBjdXJTdGF0dXMgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0UpICE9PSBudWxsID9cbiAgICAgICAgICAgIEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShTVE9SQUdFKSkgOiBTZXNzaW9uU3RvcmFnZS5fcmV0dXJuRGVmYXVsdCgpO1xuXG4gICAgICAgIHJldHVybiBjdXJTdGF0dXM7XG5cbiAgICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTZXNzaW9uU3RvcmFnZTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyAyMi4xLjMuMzEgQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG52YXIgVU5TQ09QQUJMRVMgPSByZXF1aXJlKCcuL193a3MnKSgndW5zY29wYWJsZXMnKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuaWYgKEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkgcmVxdWlyZSgnLi9faGlkZScpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgQXJyYXlQcm90b1tVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbiIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciAkaXRlckRlZmluZSA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIHNldFNwZWNpZXMgPSByZXF1aXJlKCcuL19zZXQtc3BlY2llcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBmYXN0S2V5ID0gcmVxdWlyZSgnLi9fbWV0YScpLmZhc3RLZXk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgU0laRSA9IERFU0NSSVBUT1JTID8gJ19zJyA6ICdzaXplJztcblxudmFyIGdldEVudHJ5ID0gZnVuY3Rpb24gKHRoYXQsIGtleSkge1xuICAvLyBmYXN0IGNhc2VcbiAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpO1xuICB2YXIgZW50cnk7XG4gIGlmIChpbmRleCAhPT0gJ0YnKSByZXR1cm4gdGhhdC5faVtpbmRleF07XG4gIC8vIGZyb3plbiBvYmplY3QgY2FzZVxuICBmb3IgKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgIGlmIChlbnRyeS5rID09IGtleSkgcmV0dXJuIGVudHJ5O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uICh3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKSB7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uICh0aGF0LCBpdGVyYWJsZSkge1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcbiAgICAgIHRoYXQuX3QgPSBOQU1FOyAgICAgICAgIC8vIGNvbGxlY3Rpb24gdHlwZVxuICAgICAgdGhhdC5faSA9IGNyZWF0ZShudWxsKTsgLy8gaW5kZXhcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgIC8vIGZpcnN0IGVudHJ5XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAgICAvLyBsYXN0IGVudHJ5XG4gICAgICB0aGF0W1NJWkVdID0gMDsgICAgICAgICAvLyBzaXplXG4gICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgfSk7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgIC8vIDIzLjEuMy4xIE1hcC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgLy8gMjMuMi4zLjIgU2V0LnByb3RvdHlwZS5jbGVhcigpXG4gICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICAgIGZvciAodmFyIHRoYXQgPSB2YWxpZGF0ZSh0aGlzLCBOQU1FKSwgZGF0YSA9IHRoYXQuX2ksIGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmIChlbnRyeS5wKSBlbnRyeS5wID0gZW50cnkucC5uID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGRlbGV0ZSBkYXRhW2VudHJ5LmldO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQuX2YgPSB0aGF0Ll9sID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGF0W1NJWkVdID0gMDtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuMyBNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG4gICAgICAvLyAyMy4yLjMuNCBTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB0aGF0ID0gdmFsaWRhdGUodGhpcywgTkFNRSk7XG4gICAgICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkubjtcbiAgICAgICAgICB2YXIgcHJldiA9IGVudHJ5LnA7XG4gICAgICAgICAgZGVsZXRlIHRoYXQuX2lbZW50cnkuaV07XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYgKHByZXYpIHByZXYubiA9IG5leHQ7XG4gICAgICAgICAgaWYgKG5leHQpIG5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYgKHRoYXQuX2YgPT0gZW50cnkpIHRoYXQuX2YgPSBuZXh0O1xuICAgICAgICAgIGlmICh0aGF0Ll9sID09IGVudHJ5KSB0aGF0Ll9sID0gcHJldjtcbiAgICAgICAgICB0aGF0W1NJWkVdLS07XG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICAgICAgdmFsaWRhdGUodGhpcywgTkFNRSk7XG4gICAgICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCAzKTtcbiAgICAgICAgdmFyIGVudHJ5O1xuICAgICAgICB3aGlsZSAoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGlzLl9mKSB7XG4gICAgICAgICAgZihlbnRyeS52LCBlbnRyeS5rLCB0aGlzKTtcbiAgICAgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgICAgICB3aGlsZSAoZW50cnkgJiYgZW50cnkucikgZW50cnkgPSBlbnRyeS5wO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpIHtcbiAgICAgICAgcmV0dXJuICEhZ2V0RW50cnkodmFsaWRhdGUodGhpcywgTkFNRSksIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHRoaXMsIE5BTUUpW1NJWkVdO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uICh0aGF0LCBrZXksIHZhbHVlKSB7XG4gICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICB2YXIgcHJldiwgaW5kZXg7XG4gICAgLy8gY2hhbmdlIGV4aXN0aW5nIGVudHJ5XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICBlbnRyeS52ID0gdmFsdWU7XG4gICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0Ll9sID0gZW50cnkgPSB7XG4gICAgICAgIGk6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLCAvLyA8LSBpbmRleFxuICAgICAgICBrOiBrZXksICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0ga2V5XG4gICAgICAgIHY6IHZhbHVlLCAgICAgICAgICAgICAgICAgICAgICAvLyA8LSB2YWx1ZVxuICAgICAgICBwOiBwcmV2ID0gdGhhdC5fbCwgICAgICAgICAgICAgLy8gPC0gcHJldmlvdXMgZW50cnlcbiAgICAgICAgbjogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgIC8vIDwtIG5leHQgZW50cnlcbiAgICAgICAgcjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHJlbW92ZWRcbiAgICAgIH07XG4gICAgICBpZiAoIXRoYXQuX2YpIHRoYXQuX2YgPSBlbnRyeTtcbiAgICAgIGlmIChwcmV2KSBwcmV2Lm4gPSBlbnRyeTtcbiAgICAgIHRoYXRbU0laRV0rKztcbiAgICAgIC8vIGFkZCB0byBpbmRleFxuICAgICAgaWYgKGluZGV4ICE9PSAnRicpIHRoYXQuX2lbaW5kZXhdID0gZW50cnk7XG4gICAgfSByZXR1cm4gdGhhdDtcbiAgfSxcbiAgZ2V0RW50cnk6IGdldEVudHJ5LFxuICBzZXRTdHJvbmc6IGZ1bmN0aW9uIChDLCBOQU1FLCBJU19NQVApIHtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gICAgICB0aGlzLl90ID0gdmFsaWRhdGUoaXRlcmF0ZWQsIE5BTUUpOyAvLyB0YXJnZXRcbiAgICAgIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAgICAgIC8vIGtpbmRcbiAgICAgIHRoaXMuX2wgPSB1bmRlZmluZWQ7ICAgICAgICAgICAgICAgIC8vIHByZXZpb3VzXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgdmFyIGtpbmQgPSB0aGF0Ll9rO1xuICAgICAgdmFyIGVudHJ5ID0gdGhhdC5fbDtcbiAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgd2hpbGUgKGVudHJ5ICYmIGVudHJ5LnIpIGVudHJ5ID0gZW50cnkucDtcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZiAoIXRoYXQuX3QgfHwgISh0aGF0Ll9sID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGF0Ll90Ll9mKSkge1xuICAgICAgICAvLyBvciBmaW5pc2ggdGhlIGl0ZXJhdGlvblxuICAgICAgICB0aGF0Ll90ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gc3RlcCgxKTtcbiAgICAgIH1cbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcbiAgICAgIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgZW50cnkuayk7XG4gICAgICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgZW50cnkudik7XG4gICAgICByZXR1cm4gc3RlcCgwLCBbZW50cnkuaywgZW50cnkudl0pO1xuICAgIH0sIElTX01BUCA/ICdlbnRyaWVzJyA6ICd2YWx1ZXMnLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJyk7XG52YXIgbWV0YSA9IHJlcXVpcmUoJy4vX21ldGEnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyICRpdGVyRGV0ZWN0ID0gcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgaW5oZXJpdElmUmVxdWlyZWQgPSByZXF1aXJlKCcuL19pbmhlcml0LWlmLXJlcXVpcmVkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE5BTUUsIHdyYXBwZXIsIG1ldGhvZHMsIGNvbW1vbiwgSVNfTUFQLCBJU19XRUFLKSB7XG4gIHZhciBCYXNlID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgQyA9IEJhc2U7XG4gIHZhciBBRERFUiA9IElTX01BUCA/ICdzZXQnIDogJ2FkZCc7XG4gIHZhciBwcm90byA9IEMgJiYgQy5wcm90b3R5cGU7XG4gIHZhciBPID0ge307XG4gIHZhciBmaXhNZXRob2QgPSBmdW5jdGlvbiAoS0VZKSB7XG4gICAgdmFyIGZuID0gcHJvdG9bS0VZXTtcbiAgICByZWRlZmluZShwcm90bywgS0VZLFxuICAgICAgS0VZID09ICdkZWxldGUnID8gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gZmFsc2UgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdoYXMnID8gZnVuY3Rpb24gaGFzKGEpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gZmFsc2UgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdnZXQnID8gZnVuY3Rpb24gZ2V0KGEpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gdW5kZWZpbmVkIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnYWRkJyA/IGZ1bmN0aW9uIGFkZChhKSB7IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTsgcmV0dXJuIHRoaXM7IH1cbiAgICAgICAgOiBmdW5jdGlvbiBzZXQoYSwgYikgeyBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSwgYik7IHJldHVybiB0aGlzOyB9XG4gICAgKTtcbiAgfTtcbiAgaWYgKHR5cGVvZiBDICE9ICdmdW5jdGlvbicgfHwgIShJU19XRUFLIHx8IHByb3RvLmZvckVhY2ggJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICBuZXcgQygpLmVudHJpZXMoKS5uZXh0KCk7XG4gIH0pKSkge1xuICAgIC8vIGNyZWF0ZSBjb2xsZWN0aW9uIGNvbnN0cnVjdG9yXG4gICAgQyA9IGNvbW1vbi5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwgbWV0aG9kcyk7XG4gICAgbWV0YS5ORUVEID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQygpO1xuICAgIC8vIGVhcmx5IGltcGxlbWVudGF0aW9ucyBub3Qgc3VwcG9ydHMgY2hhaW5pbmdcbiAgICB2YXIgSEFTTlRfQ0hBSU5JTkcgPSBpbnN0YW5jZVtBRERFUl0oSVNfV0VBSyA/IHt9IDogLTAsIDEpICE9IGluc3RhbmNlO1xuICAgIC8vIFY4IH4gIENocm9taXVtIDQwLSB3ZWFrLWNvbGxlY3Rpb25zIHRocm93cyBvbiBwcmltaXRpdmVzLCBidXQgc2hvdWxkIHJldHVybiBmYWxzZVxuICAgIHZhciBUSFJPV1NfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgaW5zdGFuY2UuaGFzKDEpOyB9KTtcbiAgICAvLyBtb3N0IGVhcmx5IGltcGxlbWVudGF0aW9ucyBkb2Vzbid0IHN1cHBvcnRzIGl0ZXJhYmxlcywgbW9zdCBtb2Rlcm4gLSBub3QgY2xvc2UgaXQgY29ycmVjdGx5XG4gICAgdmFyIEFDQ0VQVF9JVEVSQUJMRVMgPSAkaXRlckRldGVjdChmdW5jdGlvbiAoaXRlcikgeyBuZXcgQyhpdGVyKTsgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgLy8gZm9yIGVhcmx5IGltcGxlbWVudGF0aW9ucyAtMCBhbmQgKzAgbm90IHRoZSBzYW1lXG4gICAgdmFyIEJVR0dZX1pFUk8gPSAhSVNfV0VBSyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBWOCB+IENocm9taXVtIDQyLSBmYWlscyBvbmx5IHdpdGggNSsgZWxlbWVudHNcbiAgICAgIHZhciAkaW5zdGFuY2UgPSBuZXcgQygpO1xuICAgICAgdmFyIGluZGV4ID0gNTtcbiAgICAgIHdoaWxlIChpbmRleC0tKSAkaW5zdGFuY2VbQURERVJdKGluZGV4LCBpbmRleCk7XG4gICAgICByZXR1cm4gISRpbnN0YW5jZS5oYXMoLTApO1xuICAgIH0pO1xuICAgIGlmICghQUNDRVBUX0lURVJBQkxFUykge1xuICAgICAgQyA9IHdyYXBwZXIoZnVuY3Rpb24gKHRhcmdldCwgaXRlcmFibGUpIHtcbiAgICAgICAgYW5JbnN0YW5jZSh0YXJnZXQsIEMsIE5BTUUpO1xuICAgICAgICB2YXIgdGhhdCA9IGluaGVyaXRJZlJlcXVpcmVkKG5ldyBCYXNlKCksIHRhcmdldCwgQyk7XG4gICAgICAgIGlmIChpdGVyYWJsZSAhPSB1bmRlZmluZWQpIGZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICAgICAgcmV0dXJuIHRoYXQ7XG4gICAgICB9KTtcbiAgICAgIEMucHJvdG90eXBlID0gcHJvdG87XG4gICAgICBwcm90by5jb25zdHJ1Y3RvciA9IEM7XG4gICAgfVxuICAgIGlmIChUSFJPV1NfT05fUFJJTUlUSVZFUyB8fCBCVUdHWV9aRVJPKSB7XG4gICAgICBmaXhNZXRob2QoJ2RlbGV0ZScpO1xuICAgICAgZml4TWV0aG9kKCdoYXMnKTtcbiAgICAgIElTX01BUCAmJiBmaXhNZXRob2QoJ2dldCcpO1xuICAgIH1cbiAgICBpZiAoQlVHR1lfWkVSTyB8fCBIQVNOVF9DSEFJTklORykgZml4TWV0aG9kKEFEREVSKTtcbiAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIHNob3VsZCBub3QgY29udGFpbnMgLmNsZWFyIG1ldGhvZFxuICAgIGlmIChJU19XRUFLICYmIHByb3RvLmNsZWFyKSBkZWxldGUgcHJvdG8uY2xlYXI7XG4gIH1cblxuICBzZXRUb1N0cmluZ1RhZyhDLCBOQU1FKTtcblxuICBPW05BTUVdID0gQztcbiAgJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAoQyAhPSBCYXNlKSwgTyk7XG5cbiAgaWYgKCFJU19XRUFLKSBjb21tb24uc2V0U3Ryb25nKEMsIE5BTUUsIElTX01BUCk7XG5cbiAgcmV0dXJuIEM7XG59O1xuIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS43JyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGluZGV4LCB2YWx1ZSkge1xuICBpZiAoaW5kZXggaW4gb2JqZWN0KSAkZGVmaW5lUHJvcGVydHkuZihvYmplY3QsIGluZGV4LCBjcmVhdGVEZXNjKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W2luZGV4XSA9IHZhbHVlO1xufTtcbiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG4iLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciByZXN1bHQgPSBnZXRLZXlzKGl0KTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmIChnZXRTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KTtcbiAgICB2YXIgaXNFbnVtID0gcElFLmY7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKHN5bWJvbHMubGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gfHwgKGdsb2JhbFtuYW1lXSA9IHt9KSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pO1xuICB2YXIga2V5LCBvd24sIG91dCwgZXhwO1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICBpZiAodGFyZ2V0KSByZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0LCB0eXBlICYgJGV4cG9ydC5VKTtcbiAgICAvLyBleHBvcnRcbiAgICBpZiAoZXhwb3J0c1trZXldICE9IG91dCkgaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgaWYgKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KSBleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3NcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0aGF0ID0gYW5PYmplY3QodGhpcyk7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgaWYgKHRoYXQuZ2xvYmFsKSByZXN1bHQgKz0gJ2cnO1xuICBpZiAodGhhdC5pZ25vcmVDYXNlKSByZXN1bHQgKz0gJ2knO1xuICBpZiAodGhhdC5tdWx0aWxpbmUpIHJlc3VsdCArPSAnbSc7XG4gIGlmICh0aGF0LnVuaWNvZGUpIHJlc3VsdCArPSAndSc7XG4gIGlmICh0aGF0LnN0aWNreSkgcmVzdWx0ICs9ICd5JztcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIEJSRUFLID0ge307XG52YXIgUkVUVVJOID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1IpIHtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpO1xuICB2YXIgZiA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZiAoaXNBcnJheUl0ZXIoaXRlckZuKSkgZm9yIChsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTspIHtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXQ7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0aGF0LCB0YXJnZXQsIEMpIHtcbiAgdmFyIFMgPSB0YXJnZXQuY29uc3RydWN0b3I7XG4gIHZhciBQO1xuICBpZiAoUyAhPT0gQyAmJiB0eXBlb2YgUyA9PSAnZnVuY3Rpb24nICYmIChQID0gUy5wcm90b3R5cGUpICE9PSBDLnByb3RvdHlwZSAmJiBpc09iamVjdChQKSAmJiBzZXRQcm90b3R5cGVPZikge1xuICAgIHNldFByb3RvdHlwZU9mKHRoYXQsIFApO1xuICB9IHJldHVybiB0aGF0O1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG4iLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiB0eXBlb2YgSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG4iLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBzYWZlKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSwgc2FmZSk7XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgU1JDID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgJHRvU3RyaW5nID0gRnVuY3Rpb25bVE9fU1RSSU5HXTtcbnZhciBUUEwgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbnJlcXVpcmUoJy4vX2NvcmUnKS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiAkdG9TdHJpbmcuY2FsbChpdCk7XG59O1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWwsIHNhZmUpIHtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic7XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCAnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gIGlmIChPW2tleV0gPT09IHZhbCkgcmV0dXJuO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgU1JDKSB8fCBoaWRlKHZhbCwgU1JDLCBPW2tleV0gPyAnJyArIE9ba2V5XSA6IFRQTC5qb2luKFN0cmluZyhrZXkpKSk7XG4gIGlmIChPID09PSBnbG9iYWwpIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSBpZiAoIXNhZmUpIHtcbiAgICBkZWxldGUgT1trZXldO1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9IGVsc2UgaWYgKE9ba2V5XSkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfVxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pO1xuIiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChPLCBwcm90bykge1xuICBhbk9iamVjdChPKTtcbiAgaWYgKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpIHRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uICh0ZXN0LCBidWdneSwgc2V0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaCAoZSkgeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmIChidWdneSkgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgdmFyIEMgPSBnbG9iYWxbS0VZXTtcbiAgaWYgKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pIGRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcbiIsInZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogY29yZS52ZXJzaW9uLFxuICBtb2RlOiByZXF1aXJlKCcuL19saWJyYXJ5JykgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxOCBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG4iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgVFlQRSkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSB8fCBpdC5fdCAhPT0gVFlQRSkgdGhyb3cgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYgKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpIGRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHsgdmFsdWU6IHdrc0V4dC5mKG5hbWUpIH0pO1xufTtcbiIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpO1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuL19jcmVhdGUtcHJvcGVydHknKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7IEFycmF5LmZyb20oaXRlcik7IH0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4xIEFycmF5LmZyb20oYXJyYXlMaWtlLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyogLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCAqLykge1xuICAgIHZhciBPID0gdG9PYmplY3QoYXJyYXlMaWtlKTtcbiAgICB2YXIgQyA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXk7XG4gICAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBtYXBmbiA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuICAgIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBpdGVyRm4gPSBnZXRJdGVyRm4oTyk7XG4gICAgdmFyIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZiAobWFwcGluZykgbWFwZm4gPSBjdHgobWFwZm4sIGFMZW4gPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZiAoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXIoaXRlckZuKSkpIHtcbiAgICAgIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEMoKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKSB7XG4gICAgICAgIGNyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yIChyZXN1bHQgPSBuZXcgQyhsZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgdGVzdCA9IHt9O1xudGVzdFtyZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKV0gPSAneic7XG5pZiAodGVzdCArICcnICE9ICdbb2JqZWN0IHpdJykge1xuICByZXF1aXJlKCcuL19yZWRlZmluZScpKE9iamVjdC5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAnW29iamVjdCAnICsgY2xhc3NvZih0aGlzKSArICddJztcbiAgfSwgdHJ1ZSk7XG59XG4iLCIvLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFncygpXG5pZiAocmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAvLi9nLmZsYWdzICE9ICdnJykgcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZihSZWdFeHAucHJvdG90eXBlLCAnZmxhZ3MnLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiByZXF1aXJlKCcuL19mbGFncycpXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnJlcXVpcmUoJy4vZXM2LnJlZ2V4cC5mbGFncycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgJGZsYWdzID0gcmVxdWlyZSgnLi9fZmxhZ3MnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciAkdG9TdHJpbmcgPSAvLi9bVE9fU1RSSU5HXTtcblxudmFyIGRlZmluZSA9IGZ1bmN0aW9uIChmbikge1xuICByZXF1aXJlKCcuL19yZWRlZmluZScpKFJlZ0V4cC5wcm90b3R5cGUsIFRPX1NUUklORywgZm4sIHRydWUpO1xufTtcblxuLy8gMjEuMi41LjE0IFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcoKVxuaWYgKHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkgeyByZXR1cm4gJHRvU3RyaW5nLmNhbGwoeyBzb3VyY2U6ICdhJywgZmxhZ3M6ICdiJyB9KSAhPSAnL2EvYic7IH0pKSB7XG4gIGRlZmluZShmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICB2YXIgUiA9IGFuT2JqZWN0KHRoaXMpO1xuICAgIHJldHVybiAnLycuY29uY2F0KFIuc291cmNlLCAnLycsXG4gICAgICAnZmxhZ3MnIGluIFIgPyBSLmZsYWdzIDogIURFU0NSSVBUT1JTICYmIFIgaW5zdGFuY2VvZiBSZWdFeHAgPyAkZmxhZ3MuY2FsbChSKSA6IHVuZGVmaW5lZCk7XG4gIH0pO1xuLy8gRkY0NC0gUmVnRXhwI3RvU3RyaW5nIGhhcyBhIHdyb25nIG5hbWVcbn0gZWxzZSBpZiAoJHRvU3RyaW5nLm5hbWUgIT0gVE9fU1RSSU5HKSB7XG4gIGRlZmluZShmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJHRvU3RyaW5nLmNhbGwodGhpcyk7XG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tc3Ryb25nJyk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgU0VUID0gJ1NldCc7XG5cbi8vIDIzLjIgU2V0IE9iamVjdHNcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKFNFVCwgZnVuY3Rpb24gKGdldCkge1xuICByZXR1cm4gZnVuY3Rpb24gU2V0KCkgeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMi4zLjEgU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXG4gIGFkZDogZnVuY3Rpb24gYWRkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodmFsaWRhdGUodGhpcywgU0VUKSwgdmFsdWUgPSB2YWx1ZSA9PT0gMCA/IDAgOiB2YWx1ZSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgTUVUQSA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVk7XG52YXIgJGZhaWxzID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgd2tzRXh0ID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpO1xudmFyIHdrc0RlZmluZSA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKTtcbnZhciBlbnVtS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIF9jcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZ09QTkV4dCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpO1xudmFyICRHT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciAkRFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QRCA9ICRHT1BELmY7XG52YXIgZFAgPSAkRFAuZjtcbnZhciBnT1BOID0gZ09QTkV4dC5mO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRKU09OID0gZ2xvYmFsLkpTT047XG52YXIgX3N0cmluZ2lmeSA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBISURERU4gPSB3a3MoJ19oaWRkZW4nKTtcbnZhciBUT19QUklNSVRJVkUgPSB3a3MoJ3RvUHJpbWl0aXZlJyk7XG52YXIgaXNFbnVtID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPUFN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyIFVTRV9OQVRJVkUgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkUCh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoaXQsIGtleSwgRCkge1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYgKHByb3RvRGVzYykgZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZiAocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bykgZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKSB7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8pICRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghRC5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhpdCwgSElEREVOKSkgZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pIGl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwgeyBlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKSB7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIga2V5O1xuICB3aGlsZSAobCA+IGkpICRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApIHtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpIHtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIGl0ID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmIChEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIEQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgdmFyIG5hbWVzID0gZ09QTih0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gIHZhciBJU19PUCA9IGl0ID09PSBPYmplY3RQcm90bztcbiAgdmFyIG5hbWVzID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKSByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmICghVVNFX05BVElWRSkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90bykgJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKERFU0NSSVBUT1JTICYmIHNldHRlcikgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0IH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKSB7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBTeW1ib2w6ICRTeW1ib2wgfSk7XG5cbmZvciAodmFyIGVzNlN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaiA9IDA7IGVzNlN5bWJvbHMubGVuZ3RoID4gajspd2tzKGVzNlN5bWJvbHNbaisrXSk7XG5cbmZvciAodmFyIHdlbGxLbm93blN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBrID0gMDsgd2VsbEtub3duU3ltYm9scy5sZW5ndGggPiBrOykgd2tzRGVmaW5lKHdlbGxLbm93blN5bWJvbHNbaysrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioc3ltKSB7XG4gICAgaWYgKCFpc1N5bWJvbChzeW0pKSB0aHJvdyBUeXBlRXJyb3Ioc3ltICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gICAgZm9yICh2YXIga2V5IGluIFN5bWJvbFJlZ2lzdHJ5KSBpZiAoU3ltYm9sUmVnaXN0cnlba2V5XSA9PT0gc3ltKSByZXR1cm4ga2V5O1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoeyBhOiBTIH0pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkge1xuICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgICRyZXBsYWNlciA9IHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlcGxhY2VyKSAmJiBpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiAkcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7XG4iLCJ2YXIgJGl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgSVRFUkFUT1IgPSB3a3MoJ2l0ZXJhdG9yJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHdrcygndG9TdHJpbmdUYWcnKTtcbnZhciBBcnJheVZhbHVlcyA9IEl0ZXJhdG9ycy5BcnJheTtcblxudmFyIERPTUl0ZXJhYmxlcyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBDU1NTdHlsZURlY2xhcmF0aW9uOiBmYWxzZSxcbiAgQ1NTVmFsdWVMaXN0OiBmYWxzZSxcbiAgQ2xpZW50UmVjdExpc3Q6IGZhbHNlLFxuICBET01SZWN0TGlzdDogZmFsc2UsXG4gIERPTVN0cmluZ0xpc3Q6IGZhbHNlLFxuICBET01Ub2tlbkxpc3Q6IHRydWUsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiBmYWxzZSxcbiAgRmlsZUxpc3Q6IGZhbHNlLFxuICBIVE1MQWxsQ29sbGVjdGlvbjogZmFsc2UsXG4gIEhUTUxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTEZvcm1FbGVtZW50OiBmYWxzZSxcbiAgSFRNTFNlbGVjdEVsZW1lbnQ6IGZhbHNlLFxuICBNZWRpYUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBNaW1lVHlwZUFycmF5OiBmYWxzZSxcbiAgTmFtZWROb2RlTWFwOiBmYWxzZSxcbiAgTm9kZUxpc3Q6IHRydWUsXG4gIFBhaW50UmVxdWVzdExpc3Q6IGZhbHNlLFxuICBQbHVnaW46IGZhbHNlLFxuICBQbHVnaW5BcnJheTogZmFsc2UsXG4gIFNWR0xlbmd0aExpc3Q6IGZhbHNlLFxuICBTVkdOdW1iZXJMaXN0OiBmYWxzZSxcbiAgU1ZHUGF0aFNlZ0xpc3Q6IGZhbHNlLFxuICBTVkdQb2ludExpc3Q6IGZhbHNlLFxuICBTVkdTdHJpbmdMaXN0OiBmYWxzZSxcbiAgU1ZHVHJhbnNmb3JtTGlzdDogZmFsc2UsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IGZhbHNlLFxuICBTdHlsZVNoZWV0TGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIFRleHRUcmFja0N1ZUxpc3Q6IGZhbHNlLFxuICBUZXh0VHJhY2tMaXN0OiBmYWxzZSxcbiAgVG91Y2hMaXN0OiBmYWxzZVxufTtcblxuZm9yICh2YXIgY29sbGVjdGlvbnMgPSBnZXRLZXlzKERPTUl0ZXJhYmxlcyksIGkgPSAwOyBpIDwgY29sbGVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBjb2xsZWN0aW9uc1tpXTtcbiAgdmFyIGV4cGxpY2l0ID0gRE9NSXRlcmFibGVzW05BTUVdO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGtleTtcbiAgaWYgKHByb3RvKSB7XG4gICAgaWYgKCFwcm90b1tJVEVSQVRPUl0pIGhpZGUocHJvdG8sIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG4gICAgaWYgKCFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gICAgSXRlcmF0b3JzW05BTUVdID0gQXJyYXlWYWx1ZXM7XG4gICAgaWYgKGV4cGxpY2l0KSBmb3IgKGtleSBpbiAkaXRlcmF0b3JzKSBpZiAoIXByb3RvW2tleV0pIHJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==