const _CONSTANTS = require('./stylez.constants');
const SessionStorage = require('./stylez.storage');
const Events = require('./stylez.events');
// const Data = require('./styles.data');

export class Stylez {

    constructor() {

        window.addEventListener('storage', Events.detectStorageChange)

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

            pager.addEventListener('click', Events.changeIndex)

        });

        SessionStorage.setCurrentFilter();

        // force slider to show or not
        Events.detectStorageChange(null);

        this.renderToc();

    }

    async _fetchPattern() {

        let url = './app/config/stylez.json';

        return await fetch(url)
            .then((response) => {

                if (response.status === 200) {

                    return response.json();

                } else {

                    throw 'Error current status: ' + response.status + ' - ' + url;

                }

            })
            .catch(error => {

                console.error('ERROR :::', error);

            })

    }


    renderToc() {

        const toc = document.querySelector('.o-tocsinner');

        let pattern = this._fetchPattern();

        let patternString = {};

        pattern.then((data) => {

            let patternItems = data.patterns;

            // create unique values first
            let categories = [...new Set(patternItems.map(item => item.category))];
            // create statistics object
            let categoryStats = new Object();
            categories.forEach(item => {
                // create properties
                categoryStats[item] = 0;
            })

            let cateogryStat = {

            }

            data.patterns.forEach(item => {


                if (patternString[item.category] === undefined) {
                    patternString[item.category] = '';
                }

                patternString[item.category] += `<li><button 
                data-filter='${item.category}' 
                data-index='${categoryStats[item.category]}' 
                class='a-toc-toggle'>${item.title}</button></li>`;

                categoryStats[item.category] += 1;

            });

            // Just in case no objects exist
            let tocOutput =
                `<ul><li><h2>Atoms</h2><ol>${
                    typeof(patternString['atoms']) === "undefined" ? '' : patternString['atoms']
                }</ol></li></ul>
            <ul><li><h2>Molecules</h2><ol>${
                typeof(patternString['molecules']) === "undefined" ? '' : patternString['molecules']
                }</ol></li></ul>
            <ul><li><h2>Organism</h2><ol>${
                    typeof(patternString['organism']) === "undefined" ? '' : patternString['organism']
                }</ol></li></ul>
            <ul><li><h2>Templates</h2><ol>${
                typeof(patternString['templates']) === "undefined" ? '' : patternString['templates']
                }</ol></li></ul>
            <ul><li><h2>Pages</h2><ol>${
                typeof(patternString['pages']) === "undefined" ? '' : patternString['pages']
                }</ol></li></ul>`;

            toc.innerHTML = tocOutput;

            document.querySelectorAll('.a-toc-toggle').forEach(item => {
                item.addEventListener('click', this.Events.setTocFilter);
            })
            // Apply filter


        });



    }

}

const ui = new Stylez;