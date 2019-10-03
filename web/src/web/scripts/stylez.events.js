const CONSTANTS = require('./stylez.constants');
const SessionStorage = require('./stylez.storage');

class Events {

    static _toggleButtons(btnList, curButton) {

        btnList.forEach((btn) => {

            if (btn === curButton) {

                btn.classList.add('selected');

            } else {

                btn.classList.remove('selected');

            }

        });

        // updateing Session Status
        SessionStorage.updateStatus();

    }

    // Handle Category selection
    static filterCategories(event) {

        let curButton = event.target,
            allButtons = document.querySelectorAll(CONSTANTS.dmAtomicFilter);

        Events._toggleButtons(allButtons, curButton);

        let iframe = document.querySelector(CONSTANTS.viewerFrame);
        iframe.contentWindow.location.href = "viewer.html"

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

    static changeIndex(event) {

        let curItem = event.target;
        if (curItem.dataset !== undefined &&
            curItem.dataset.filter !== undefined) {

            let curSession = SessionStorage.getCurrentFilter();
            
            console.log(curSession);

            if (curItem.dataset.filter === 'next-item') {
                console.log(curSession.index);
            }

            if (curItem.dataset.filter === 'prev-item') {
                console.log(curSession.index);
            }

        }

    }

}

module.exports = Events;