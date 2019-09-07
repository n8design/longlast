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

class Events {

    static _toggleButtons(btnList, curButton) {

        btnList.forEach((btn) => {
            if (btn === curButton) {
                btn.classList.add('selected');
            } else {
                btn.classList.remove('selected');
            }
        })

    }

    // Handle Category selection
    static filterCategories(event) {

        let curButton = event.target,
            allButtons = document.querySelectorAll(_CONSTANTS.dmAtomicFilter);

        Events._toggleButtons(allButtons, curButton);

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
            curWidth.value = window.innerWidth;

            let curHeight = document.querySelector(_CONSTANTS.curHeight);
            curHeight.value = window.innerHeight;

        }, 250);

    }

    static toggleTocs(event){

        let tocs = document.querySelector(_CONSTANTS.tocs);
        
        tocs.classList.toggle('active');


    }

}

class Stylez {

    constructor() {
        // init internamels
        this.CONSTANTS = _CONSTANTS;
        this.Events = Events;

        // register category filters
        this.btnsCatFilter = document.querySelectorAll(this.CONSTANTS.dmAtomicFilter);
        this.btnsCatFilter.forEach((btn) => {
            btn.addEventListener('click', this.Events.filterCategories);
        });

        // register device types
        this.btnDeviceSelector = document.querySelectorAll(this.CONSTANTS.dmDeviceTypes);
        this.btnDeviceSelector.forEach((btn) => {
            btn.addEventListener('click', this.Events.filterDeviceType);
        });

        window.addEventListener('resize', this.Events.setWidth);
        // set the initial width
        this.Events.setWidth(null);


        this.btnTocs = document.querySelector(this.CONSTANTS.dmFilterTocs);
        this.btnTocs.addEventListener('click', this.Events.toggleTocs);

    }

}

const ui = new Stylez;

console.log(Stylez);
console.log(ui.CONSTANTS);
console.log(ui.storage);