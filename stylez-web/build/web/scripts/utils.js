"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetBacon = void 0;

var GetBacon = function GetBacon() {
  var body = fetch('https://baconipsum.com/api/?type=all-meat&paras=3').then(function (res) {
    return res.json();
  });
  return body;
};

exports.GetBacon = GetBacon;
//# sourceMappingURL=utils.js.map
