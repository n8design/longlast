function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _CONSTANTS = require('./stylez.constants');

var SessionStorage = require('./stylez.storage');

var Events = require('./stylez.events');

export var Stylez = function Stylez() {
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
  SessionStorage.setCurrentFilter();
};
var ui = new Stylez();
//# sourceMappingURL=stylez.js.map
