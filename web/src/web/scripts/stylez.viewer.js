const SessionStorage = require('./stylez.storage');

const evalHTML = (partialHTML) => {

    try {
        let parser = new DOMParser();
        let fixedContent = parser.parseFromString(partialHTML, 'text/html');

        let partialDoc = new DocumentFragment();
        partialDoc.append(fixedContent.body);

        return partialDoc.firstChild.innerHTML;

    } catch (error) {
        return error.message;
    }

}

const fetchPattern = async () => {

    let url = './app/config/stylez.json';

    return fetch(url)
        .then((response) => {

            if (response.status === 200) {

                return response.json();

            } else {

                throw "Error current status: " + response.status + " - " + url;

            }

        })
        .catch(error => {

            console.error('ERROR:::::', error);

        })

}

let pattern = fetchPattern();

pattern.then(data => {

    let patterns = data.patterns.sort((a, b) => {
        if (a.file < b.file) {
            return -1;
        }
        if (a.file > b.file) {
            return 1;
        }
        return 0;
    })

    var curSession = SessionStorage.getCurrentFilter();

    let currentPatterns = patterns.filter(item => {
        return item.category === curSession.category;
    });

    let currentFilter = SessionStorage.getCurrentFilter();

    if (curSession.category === 'pages' ||
        curSession.category === 'templates') {

        if (currentPatterns.length !== 0) {

            let curIndex = currentFilter.index ? currentFilter.index : 0;

            currentFilter.maxIndex = currentPatterns.length - 1;
            currentFilter.index = curIndex;

            currentFilter.title = currentPatterns[curIndex].title;

            currentPatterns = [currentPatterns[curIndex]];

            // let currentPatternTitle = document.querySelector('.a-filtername');
            // currentPatternTitle.textContent = currentFilter.title;

            SessionStorage.updateStatus(currentFilter);

        } else {

            currentFilter.maxIndex = null;
            currentFilter.index = null;
            currentFilter.title = null;

            SessionStorage.updateStatus(currentFilter);

        }

    } else {

        currentFilter.maxIndex = null;
        currentFilter.index = null;
        currentFilter.title = null;

        SessionStorage.updateStatus(currentFilter);    

    }

    if (currentPatterns.length !== 0) {

        const patternsContainer = document.querySelector('.patterns');

        currentPatterns.forEach(pattern => {

            let curTemplate = stylez.templates[pattern.title];

            let templateContent;

            try {
                templateContent = curTemplate();
            } catch (error) {
                console.error(`Error in Pattern ${pattern.title}: ${error.message}`);
                templateContent = `Error in Pattern ${pattern.title}: ${error.message}`;
            }

            if (curTemplate !== undefined && templateContent !== 'undefined') {

                let evaledContent = evalHTML(templateContent);

                const content = `<div data-category='${pattern.category}' class='viewer-pattern'>
            <div class='viewer-header'>
                <div title='${ pattern.title }' class='viewer-title'>${ pattern.title }</div>
                <div title='${pattern.file }' class='viewer-filename'>${pattern.file.split('/').pop()}</div>
            </div>
            <div class='viewer-content'>
            ${ evaledContent }
            </div>
            <pre class='viewer-code'>${ evaledContent.replace(/</g, '&lt;').replace(/>/g, '&gt;') }</pre>
            </div>`;

                patternsContainer.insertAdjacentHTML('beforeend', content);

            }

        })
    }

})