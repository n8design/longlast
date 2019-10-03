const _CONSTANTS = require('./stylez.constants');

class SessionStorage {

    static _returnDefault() {
        return {
            category: 'atoms',
            deviceSize: 'full',
            index: null,
            maxIndex: null
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

module.exports = SessionStorage;