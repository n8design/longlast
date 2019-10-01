import "core-js/modules/es6.promise";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es6.regexp.replace";
import "core-js/modules/es6.regexp.split";
import "core-js/modules/es6.array.sort";
import "regenerator-runtime/runtime";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Stylez = require('./stylez.js');

var fetchPattern =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var url;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('Started');
            url = './app/config/stylez.json';
            return _context.abrupt("return", fetch(url).then(function (response) {
              if (response.status === 200) {
                return response.json();
              } else {
                throw "Error current status: " + response.status + " - " + url;
              }
            }).catch(function (error) {
              console.log(error);
            }));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchPattern() {
    return _ref.apply(this, arguments);
  };
}();

var pattern = fetchPattern();
pattern.then(function (data) {
  console.log(Stylez);
  var patterns = data.patterns.sort(function (a, b) {
    if (a.file < b.file) {
      return -1;
    }

    if (a.file > b.file) {
      return 1;
    }

    return 0;
  });
  var curSession = Stylez.SessionStorage.getCurrentFilter();
  console.log('SESSION :::: ', curSession);
  var currentPatterns = patterns.filter(function (item) {
    return item.category === curSession.category;
  });
  currentPatterns.forEach(function (pattern) {
    var patternsContainer = document.querySelector('.patterns');
    var curTemplate = stylez.templates[pattern.title];

    if (curTemplate !== undefined) {
      var content = "<div data-category='".concat(pattern.category, "' class='viewer-pattern'>\n            <div class='viewer-header'>\n                <div title='").concat(pattern.title, "' class='viewer-title'>").concat(pattern.title, "</div>\n                <div title='").concat(pattern.file, "' class='viewer-filename'>").concat(pattern.file.split('/').pop(), "</div>\n            </div>\n            <div class='viewer-content'>\n            ").concat(curTemplate(), "\n            </div>\n            <pre class='viewer-code'>").concat(curTemplate().replace(/</g, '&lt;').replace(/>/g, '&gt;'), "</pre>\n            </div>");
      patternsContainer.insertAdjacentHTML('beforeend', content);
    }
  });
});
//# sourceMappingURL=stylez.viewer.js.map
