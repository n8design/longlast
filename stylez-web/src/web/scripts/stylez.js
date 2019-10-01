'use strict';

const _CONSTANTS = {
    dmAtomicFilter: '.m-filters .a-filter',
    dmDeviceTypes: '.m-devicetypes .a-filter',
    dmFilterTocs: '.m-filtertocs .a-filter',
    viewerFrame: '.o-viewer',
    tocs: '.o-tocs',
    curWidth: '.a-input.js-curWidth',
    curHeight: '.a-input.js-curHeight',
}

export class Events {

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
            allButtons = document.querySelectorAll(_CONSTANTS.dmAtomicFilter);

        Events._toggleButtons(allButtons, curButton);

        let iframe = document.querySelector(_CONSTANTS.viewerFrame);
        iframe.contentWindow.location.href = "viewer.html"

    }

    // Handle deviceFiltering
    static filterDeviceType(event) {

        let curButton = event.target,
            allButtons = document.querySelectorAll(_CONSTANTS.dmDeviceTypes),
            viewerFrame = document.querySelector(_CONSTANTS.viewerFrame);

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

            let curWidth = document.querySelector(_CONSTANTS.curWidth);

            if (curWidth !== null && curWidth !== undefined) {
                curWidth.value = window.innerWidth;
            }

            let curHeight = document.querySelector(_CONSTANTS.curHeight);

            if (curHeight !== null && curHeight !== undefined) {
                curHeight.value = window.innerHeight;
            }

        }, 250);

    }

    static toggleTocs(event) {

        let tocs = document.querySelector(_CONSTANTS.tocs);

        tocs.classList.toggle('active');

    }

}

export class SessionStorage {

    static _returnDefault() {
        return {
            category: 'atoms',
            deviceSize: 'full'
        };
    }

    static _getSelectedCategory() {

        let curSelected = document.querySelector(_CONSTANTS.dmAtomicFilter + '.selected');

        if (curSelected !== null &&
            curSelected.dataset !== null &&
            curSelected.dataset.filter !== null) {

            return curSelected.dataset.filter !== null ? curSelected.dataset.filter : 'atoms';

        } else {

            return 'atoms';

        }

    }

    static _getSelectedDeviceSize() {

        let curSelected = document.querySelector(_CONSTANTS.dmDeviceTypes + '.selected');

        if (curSelected !== null &&
            curSelected.dataset !== null &&
            curSelected.dataset.size !== null) {

            return curSelected.dataset.size !== null ? curSelected.dataset.size : 'full';;

        } else {

            return 'full';

        }

    }

    static updateStatus(updates) {

        let defaultSession = this._returnDefault();

        let stylezSession = sessionStorage.getItem('stylez');

        if (stylezSession === undefined ||
            stylezSession === null) {

            sessionStorage.setItem('stylez', JSON.stringify(defaultSession));

            this._getSelectedCategory();
            this._getSelectedDeviceSize();

        } else {

            let newStatus = JSON.parse(stylezSession);

            newStatus.category = this._getSelectedCategory();
            newStatus.deviceSize = this._getSelectedDeviceSize();

            sessionStorage.setItem('stylez', JSON.stringify(newStatus));

            this._getSelectedCategory();
            this._getSelectedDeviceSize();

        }

    }

    static setCurrentFilter() {


        let curStatus = sessionStorage.getItem('stylez') !== null ?
            JSON.parse(sessionStorage.getItem('stylez')) : SessionStorage._returnDefault();

        let categoryFilter = document.querySelector(`button[data-filter="${curStatus.category}"]`);
        if (categoryFilter !== null && categoryFilter !== undefined) {
            categoryFilter.classList.add('selected');
            categoryFilter.click();
        }

        let deviceFilter = document.querySelector(`button[data-size="${curStatus.deviceSize}"]`);
        if (deviceFilter !== null && deviceFilter !== undefined) {
            deviceFilter.classList.add('selected');
            deviceFilter.click();
        }

    }

    static getCurrentFilter() {

        let curStatus = sessionStorage.getItem('stylez') !== null ?
            JSON.parse(sessionStorage.getItem('stylez')) : SessionStorage._returnDefault();

        return curStatus;

    }

}

export class Stylez {

    constructor() {
        // init internamels
        this.CONSTANTS = _CONSTANTS;
        this.Events = Events;

        // register category filters
        this.btnsCatFilter = document.querySelectorAll(this.CONSTANTS.dmAtomicFilter);
        this.btnsCatFilter.forEach((btn) => {
            btn.addEventListener('click', Events.filterCategories);
        });

        // register device types
        this.btnDeviceSelector = document.querySelectorAll(this.CONSTANTS.dmDeviceTypes);
        this.btnDeviceSelector.forEach((btn) => {
            btn.addEventListener('click', Events.filterDeviceType);
        });

        window.addEventListener('resize', Events.setWidth);
        // set the initial width
        Events.setWidth(null);

        this.btnTocs = document.querySelector(this.CONSTANTS.dmFilterTocs);
        if (this.btnTocs !== null && this.btnTocs !== null) {

            this.btnTocs.addEventListener('click', Events.toggleTocs);

        }

        SessionStorage.setCurrentFilter();

    }

}

const ui = new Stylez;