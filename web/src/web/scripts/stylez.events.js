const CONSTANTS = require('./stylez.constants');
const SessionStorage = require('./stylez.storage');

class Events {

    static _updateIframeContent() {

        let iframe = document.querySelector(CONSTANTS.viewerFrame);
        iframe.contentWindow.location.href = "viewer.html"

    }

    static _toggleButtons(btnList, curButton) {

        btnList.forEach((btn) => {

            if (btn === curButton) {

                btn.classList.add('selected');

            } else {

                btn.classList.remove('selected');

            }

        });

        // // updateing Session Status
        SessionStorage.updateStatus();

    }

    // Handle Category selection
    static filterCategories(event) {

        let curButton = event.target,
            allButtons = document.querySelectorAll(CONSTANTS.dmAtomicFilter);

        Events._toggleButtons(allButtons, curButton);

        Events._updateIframeContent();
    }

    // Handle deviceFiltering
    static filterDeviceType(event) {

        let curButton = event.target,
            allButtons = document.querySelectorAll(CONSTANTS.dmDeviceTypes),
            viewerFrame = document.querySelector(CONSTANTS.viewerFrame);

        Events._toggleButtons(allButtons, curButton);

        // Check for update the full width
        const newWidth = curButton.dataset.size !== 'full' ? curButton.dataset.size : -1;

        // if width !== full set precicse pixels
        if (newWidth !== -1) {

            viewerFrame.style.maxWidth = `${newWidth}px`;

        } else {

            // unset and rest to 100vw;
            viewerFrame.style.maxWidth = "100vw";

        }

    }

    static setWidth(event) {

        // Timeout to make sure resize is finished
        setTimeout(() => {

            let curWidth = document.querySelector(CONSTANTS.curWidth);

            if (curWidth !== null && curWidth !== undefined) {
                curWidth.value = window.innerWidth;
            }

            let curHeight = document.querySelector(CONSTANTS.curHeight);

            if (curHeight !== null && curHeight !== undefined) {
                curHeight.value = window.innerHeight;
            }

        }, 250);

    }

    static toggleTocs(event) {

        let tocs = document.querySelector(CONSTANTS.tocs);

        tocs.classList.toggle('active');

    }

    static setTocFilter(event) {
        event.preventDefault();
        let curButton = event.target,
            curIndex = curButton.dataset.index,
            curFilter = curButton.dataset.filter;

        let curSession = SessionStorage.getCurrentFilter();
        curSession.category = curFilter;
        curSession.index = parseInt(curIndex);
        curSession.maxIndex = document.querySelectorAll(`button.a-toc-toggle[data-filter='${curFilter}']`).length;

        SessionStorage.updateStatus(curSession);

        document.querySelector('.o-tocs').classList.remove('active');
        
        let activeButton = document.querySelector(`button.a-filter[data-filter='${curFilter}']`);
        let allButtons = document.querySelectorAll(`button.a-filter`);

        Events._toggleButtons(allButtons, activeButton);

        // force the Storage Change to show slider if required
        Events.detectStorageChange(null);
        Events._updateIframeContent();

    }

    /**
     * Change Index of current element
     * @param {event} event 
     */
    static changeIndex(event) {

        let curItem = event.target;

        if (curItem.dataset !== undefined &&
            curItem.dataset.filter !== undefined) {

            let curSession = SessionStorage.getCurrentFilter();

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
    static detectStorageChange(event) {

        let currentSession = SessionStorage.getCurrentFilter();

        console.log('JJJJJJ::::', currentSession, currentSession.title !== null &&
            currentSession.maxIndex !== null &&
            currentSession.maxIndex > 0);

        if (currentSession.title !== null &&
            currentSession.maxIndex !== null &&
            currentSession.maxIndex > 1) {

            let currentPatternTitle = document.querySelector('.a-filtername');
            currentPatternTitle.textContent = currentSession.title;

            let itemSlider = document.querySelector('.m-itemslider');
            console.log('Item Slider::::', itemSlider);

            if (itemSlider !== null) {

                itemSlider.classList.remove('hidden');
                itemSlider.classList.add('show');

            }


        } else {
            let itemSlider = document.querySelector('.m-itemslider');
            console.log('Item Slider::::', itemSlider);

            if (itemSlider !== null) {


                itemSlider.classList.add('hidden');
                itemSlider.classList.remove('show');

            }
        }

    }

}

module.exports = Events;