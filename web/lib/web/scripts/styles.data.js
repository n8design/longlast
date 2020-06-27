function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StylezData = /*#__PURE__*/function () {
  function StylezData() {
    _classCallCheck(this, StylezData);
  }

  _createClass(StylezData, null, [{
    key: "Patterns",
    value: function () {
      var _Patterns = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var url;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = './app/config/stylez.json';
                _context.next = 3;
                return fetch(url).then(function (response) {
                  if (response.status === 200) {
                    return response.json();
                  } else {
                    throw "Error current status: " + response.status + " - " + url;
                  }
                }).catch(function (error) {
                  console.error('ERROR :::', error);
                });

              case 3:
                return _context.abrupt("return", _context.sent);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function Patterns() {
        return _Patterns.apply(this, arguments);
      }

      return Patterns;
    }()
  }]);

  return StylezData;
}();

module.exports = StylezData;
//# sourceMappingURL=styles.data.js.map
