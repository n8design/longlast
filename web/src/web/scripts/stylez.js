const _CONSTANTS = require('./stylez.constants');
const SessionStorage = require('./stylez.storage');
const Events = require('./stylez.events');

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

        this.btnPagers = document.querySelectorAll(this.CONSTANTS.pagers);
        
        this.btnPagers.forEach(pager => {
            console.log(pager.dataset.filter);
            pager.addEventListener('click', Events.changeIndex)
        });

        SessionStorage.setCurrentFilter();

        window.addEventListener('storage', (event)=>{
            console.log(event);
            console.log('Something changed');
            console.log(SessionStorage.getCurrentFilter());
        })

    }

}

const ui = new Stylez;