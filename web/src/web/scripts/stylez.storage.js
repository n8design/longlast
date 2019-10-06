const _CONSTANTS = require('./stylez.constants');

const STORAGE = 'stylez';

class SessionStorage {

    static _returnDefault() {
        return {
            category: 'atoms',
            deviceSize: 'full',
            index: null,
            maxIndex: null,
            title: null
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

        if (updates === undefined) {

            let defaultSession = this._returnDefault();

            let stylezSession = sessionStorage.getItem(STORAGE);

            if (stylezSession === undefined ||
                stylezSession === null) {

                this._getSelectedCategory();
                this._getSelectedDeviceSize();

                sessionStorage.setItem(STORAGE, JSON.stringify(defaultSession));

            } else {

                let newStatus = JSON.parse(stylezSession);

                newStatus.category = this._getSelectedCategory();
                newStatus.deviceSize = this._getSelectedDeviceSize();

                this._getSelectedCategory();
                this._getSelectedDeviceSize();

                sessionStorage.setItem(STORAGE, JSON.stringify(newStatus));

            }

        } else {

            sessionStorage.setItem(STORAGE, JSON.stringify(updates));

        }

    }

    static setCurrentFilter() {

        let curStatus = sessionStorage.getItem(STORAGE) !== null ?
            JSON.parse(sessionStorage.getItem(STORAGE)) : SessionStorage._returnDefault();

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

        let currentPatternTitle = document.querySelector('.a-filtername');

        if (curStatus.title !== null) {

            currentPatternTitle.textContent = curStatus.title;

        } else {

            currentPatternTitle.textContent = ' ';
            let itemSlider = document.querySelector('.m-itemslider');

            if (itemSlider !== null) {

                if (curStatus.maxIndex !== null) {
                    itemSlider.classList.add('show');
                }

            }

        }

    }

    static getCurrentFilter() {

        let curStatus = sessionStorage.getItem(STORAGE) !== null ?
            JSON.parse(sessionStorage.getItem(STORAGE)) : SessionStorage._returnDefault();

        return curStatus;

    }

}

module.exports = SessionStorage;