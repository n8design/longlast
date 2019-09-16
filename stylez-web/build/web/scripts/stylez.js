'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _CONSTANTS = {
  dmAtomicFilter: '.m-filters .a-filter',
  dmDeviceTypes: '.m-devicetypes .a-filter',
  dmFilterTocs: '.m-filtertocs .a-filter',
  viewerFrame: '.o-viewer',
  tocs: '.o-tocs',
  curWidth: '.a-input.js-curWidth',
  curHeight: '.a-input.js-curHeight'
};

var Events =
/*#__PURE__*/
function () {
  function Events() {
    _classCallCheck(this, Events);
  }

  _createClass(Events, null, [{
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
      var curButton = event.target,
          allButtons = document.querySelectorAll(_CONSTANTS.dmAtomicFilter);

      Events._toggleButtons(allButtons, curButton);
    } // Handle deviceFiltering

  }, {
    key: "filterDeviceType",
    value: function filterDeviceType(event) {
      var curButton = event.target,
          allButtons = document.querySelectorAll(_CONSTANTS.dmDeviceTypes),
          viewerFrame = document.querySelector(_CONSTANTS.viewerFrame);

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
        var curWidth = document.querySelector(_CONSTANTS.curWidth);
        curWidth.value = window.innerWidth;
        var curHeight = document.querySelector(_CONSTANTS.curHeight);
        curHeight.value = window.innerHeight;
      }, 250);
    }
  }, {
    key: "toggleTocs",
    value: function toggleTocs(event) {
      var tocs = document.querySelector(_CONSTANTS.tocs);
      tocs.classList.toggle('active');
    }
  }]);

  return Events;
}();

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
        deviceSize: 'full'
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
      var defaultSession = this._returnDefault();

      var stylezSession = sessionStorage.getItem('stylez');

      if (stylezSession === undefined || stylezSession === null) {
        sessionStorage.setItem('stylez', JSON.stringify(defaultSession));

        this._getSelectedCategory();

        this._getSelectedDeviceSize();
      } else {
        var newStatus = JSON.parse(stylezSession);
        newStatus.category = this._getSelectedCategory();
        newStatus.deviceSize = this._getSelectedDeviceSize();
        sessionStorage.setItem('stylez', JSON.stringify(newStatus));

        this._getSelectedCategory();

        this._getSelectedDeviceSize();
      }
    }
  }, {
    key: "setCurrentFilter",
    value: function setCurrentFilter() {
      var curStatus = sessionStorage.getItem('stylez') !== undefined ? JSON.parse(sessionStorage.getItem('stylez')) : this._returnDefault();
      var categoryFilter = document.querySelector("button[data-filter=\"".concat(curStatus.category, "\"]"));
      categoryFilter.classList.add('selected');
      categoryFilter.click();
      var deviceFilter = document.querySelector("button[data-size=\"".concat(curStatus.deviceSize, "\"]"));
      deviceFilter.classList.add('selected');
      deviceFilter.click();
    }
  }]);

  return SessionStorage;
}();

var Stylez = function Stylez() {
  _classCallCheck(this, Stylez);

  // init internamels
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
  this.btnTocs.addEventListener('click', Events.toggleTocs);
  SessionStorage.setCurrentFilter();
};

var ui = new Stylez();
//# sourceMappingURL=stylez.js.map
