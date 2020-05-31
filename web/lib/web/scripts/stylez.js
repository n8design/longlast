import "core-js/modules/es6.array.from";
import "core-js/modules/es6.regexp.to-string";
import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.symbol";
import "core-js/modules/web.dom.iterable";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es6.string.iterator";
import "core-js/modules/es6.set";
import "regenerator-runtime/runtime";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _CONSTANTS = require('./stylez.constants');

var SessionStorage = require('./stylez.storage');

var Events = require('./stylez.events'); // const Data = require('./styles.data');


export var Stylez =
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
//# sourceMappingURL=stylez.js.map
