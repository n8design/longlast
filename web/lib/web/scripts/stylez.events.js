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
    key: "_updateIframeContent",
    value: function _updateIframeContent() {
      var iframe = document.querySelector(CONSTANTS.viewerFrame);
      iframe.contentWindow.location.href = "viewer.html";
    }
  }, {
    key: "_toggleButtons",
    value: function _toggleButtons(btnList, curButton) {
      btnList.forEach(function (btn) {
        if (btn === curButton) {
          btn.classList.add('selected');
        } else {
          btn.classList.remove('selected');
        }
      }); // // updateing Session Status

      SessionStorage.updateStatus();
    } // Handle Category selection

  }, {
    key: "filterCategories",
    value: function filterCategories(event) {
      var curButton = event.target,
          allButtons = document.querySelectorAll(CONSTANTS.dmAtomicFilter);

      Events._toggleButtons(allButtons, curButton);

      Events._updateIframeContent();
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
    /**
     * Change Index of current element
     * @param {event} event 
     */

  }, {
    key: "changeIndex",
    value: function changeIndex(event) {
      var curItem = event.target;

      if (curItem.dataset !== undefined && curItem.dataset.filter !== undefined) {
        var curSession = SessionStorage.getCurrentFilter();

        if (curItem.dataset.filter === 'next-item') {
          if (curSession.index + 1 < curSession.maxIndex) {
            curSession.index = curSession.index + 1;
          } else {
            curSession.index = 0;
          }

          SessionStorage.updateStatus(curSession);

          Events._updateIframeContent();
        }

        if (curItem.dataset.filter === 'prev-item') {
          if (curSession.index - 1 >= 0) {
            curSession.index = curSession.index - 1;
          } else {
            curSession.index = curSession.maxIndex;
          }

          SessionStorage.updateStatus(curSession);

          Events._updateIframeContent();
        }
      }
    }
    /**
     * Detecht Storage Changes
     * @param {event} event 
     */

  }, {
    key: "detectStorageChange",
    value: function detectStorageChange(event) {
      var currentSession = SessionStorage.getCurrentFilter();
      console.log('JJJJJJ::::', currentSession, currentSession.title !== null && currentSession.maxIndex !== null && currentSession.maxIndex > 0);

      if (currentSession.title !== null && currentSession.maxIndex !== null && currentSession.maxIndex > 1) {
        var currentPatternTitle = document.querySelector('.a-filtername');
        currentPatternTitle.textContent = currentSession.title;
        var itemSlider = document.querySelector('.m-itemslider');
        console.log('Item Slider::::', itemSlider);

        if (itemSlider !== null) {
          itemSlider.classList.remove('hidden');
          itemSlider.classList.add('show');
        }
      } else {
        var _itemSlider = document.querySelector('.m-itemslider');

        console.log('Item Slider::::', _itemSlider);

        if (_itemSlider !== null) {
          _itemSlider.classList.add('hidden');

          _itemSlider.classList.remove('show');
        }
      }
    }
  }]);

  return Events;
}();

module.exports = Events;
//# sourceMappingURL=stylez.events.js.map
