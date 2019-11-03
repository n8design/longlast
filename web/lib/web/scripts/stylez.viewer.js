import "core-js/modules/es6.promise";
import "core-js/modules/es6.object.to-string";
import "core-js/modules/es6.regexp.replace";
import "core-js/modules/es6.regexp.split";
import "core-js/modules/es6.array.sort";
import "regenerator-runtime/runtime";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var SessionStorage = require('./stylez.storage');

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
    }, _callee);
  }));

  return function fetchPattern() {
    return _ref.apply(this, arguments);
  };
}();

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
    var copyCpl = navigator && navigator.clipboard ? "<div title='copy' class='viewer-filename copy'>copy</div>" : "";
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
        var content = "<div data-category='".concat(pattern.category, "' class='viewer-pattern'>\n            <div class='viewer-header'>\n                <div title='").concat(pattern.title, "' class='viewer-title'>").concat(pattern.title, "</div>\n                ").concat(copyCpl, "\n                <div title='").concat(pattern.file, "' class='viewer-filename'>").concat(pattern.file.split('/').pop(), "</div>\n            </div>\n            <div class='viewer-content'>\n            ").concat(evaledContent, "\n            </div>\n            <pre class='viewer-code'>").concat(evaledContent.replace(/</g, '&lt;').replace(/>/g, '&gt;'), "</pre>\n            </div>");
        patternsContainer.insertAdjacentHTML('beforeend', content);
      }
    });
    var copyElements = document.querySelectorAll('.copy');
    copyElements.forEach(function (item) {
      item.addEventListener('click', cpyToClipboard);
    });
  }
});
//# sourceMappingURL=stylez.viewer.js.map
