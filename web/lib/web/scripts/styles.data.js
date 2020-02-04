import "regenerator-runtime/runtime";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StylezData =
/*#__PURE__*/
function () {
  function StylezData() {
    _classCallCheck(this, StylezData);
  }

  _createClass(StylezData, null, [{
    key: "Patterns",
    value: function Patterns() {
      var url;
      return regeneratorRuntime.async(function Patterns$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = './app/config/stylez.json';
              _context.next = 3;
              return regeneratorRuntime.awrap(fetch(url).then(function (response) {
                if (response.status === 200) {
                  return response.json();
                } else {
                  throw "Error current status: " + response.status + " - " + url;
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
  }]);

  return StylezData;
}();

module.exports = StylezData;
//# sourceMappingURL=styles.data.js.map
