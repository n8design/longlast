"use strict";

require("node_modules/core-js/stable");

require("node_modules/regenerator-runtime/runtime");

var _utils = require("./utils");

var baconEl = document.querySelector('.bacon');
(0, _utils.GetBacon)().then(function (res) {
  var markup = res.reduce(function (acc, val) {
    return acc += "<p>".concat(val, "</p>");
  }, '');
  baconEl.innerHTML = markup;
}).catch(function (err) {
  return baconEl.innerHTML = err;
});
//# sourceMappingURL=stylez.viewer.js.map
