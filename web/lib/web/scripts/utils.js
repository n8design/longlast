export var GetBacon = function GetBacon() {
  var body = fetch('https://baconipsum.com/api/?type=all-meat&paras=3').then(function (res) {
    return res.json();
  });
  return body;
};