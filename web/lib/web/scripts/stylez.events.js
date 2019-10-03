function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CONSTANTS = require('./stylez.constants');

var SessionStorage = require('./stylez.storage');

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
          allButtons = document.querySelectorAll(CONSTANTS.dmAtomicFilter);

      Events._toggleButtons(allButtons, curButton);

      var iframe = document.querySelector(CONSTANTS.viewerFrame);
      iframe.contentWindow.location.href = "viewer.html";
    } // Handle deviceFiltering

  }, {
    key: "filterDeviceType",
    value: function filterDeviceType(event) {
      var curButton = event.target,
          allButtons = document.querySelectorAll(CONSTANTS.dmDeviceTypes),
          viewerFrame = document.querySelector(CONSTANTS.viewerFrame);

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
        var curWidth = document.querySelector(CONSTANTS.curWidth);

        if (curWidth !== null && curWidth !== undefined) {
          curWidth.value = window.innerWidth;
        }

        var curHeight = document.querySelector(CONSTANTS.curHeight);

        if (curHeight !== null && curHeight !== undefined) {
          curHeight.value = window.innerHeight;
        }
      }, 250);
    }
  }, {
    key: "toggleTocs",
    value: function toggleTocs(event) {
      var tocs = document.querySelector(CONSTANTS.tocs);
      tocs.classList.toggle('active');
    }
  }, {
    key: "changeIndex",
    value: function changeIndex(event) {
      var curItem = event.target;

      if (curItem.dataset !== undefined && curItem.dataset.filter !== undefined) {
        var curSession = SessionStorage.getCurrentFilter();
        console.log(curSession);

        if (curItem.dataset.filter === 'next-item') {
          console.log(curSession.index);
        }

        if (curItem.dataset.filter === 'prev-item') {
          console.log(curSession.index);
        }
      }
    }
  }]);

  return Events;
}();

module.exports = Events;
//# sourceMappingURL=stylez.events.js.map
