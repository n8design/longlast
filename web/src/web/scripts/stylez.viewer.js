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

const cpyToClipboard = (event) => {

    let curElement = event.target.parentElement.parentElement,
        curContent = curElement.querySelector('.viewer-content');

    try {
        navigator.clipboard.writeText(curContent.innerHTML);
    } catch (error) {
        console.error(error);
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

            console.error('ERROR :::', error);

        })

}

let pattern = fetchPattern();
// let pattern = StylezData.Pattern();

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
        curSession.category === 'templates' || currentFilter.index !== null) {

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

        const copyCpl = navigator && navigator.clipboard ? "<div title='Copy to clip board' aria-label='Copy to clip board' class='viewer-filename copy'>copy</div>" : "";

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

                const content = `<div data-category='${pattern.category}' class='viewer-pattern' aria-label='Pattern ${ pattern.title }'>
            <div class='viewer-header' aria-label='Header for ${ pattern.title }' >
                <div title='${ pattern.title }' class='viewer-title'>${ pattern.title }</div>
                ${ copyCpl }
                <div title='${pattern.file }' class='viewer-filename' aria-lable='file location'>${pattern.file.split('/').pop()}</div>
            </div>
            <div class='viewer-content' aria-label='Content of ${ pattern.title } pattern'>
            ${ evaledContent }
            </div>
            <pre class='viewer-code'>${ evaledContent.replace(/</g, '&lt;').replace(/>/g, '&gt;') }</pre>
            </div>`;

                patternsContainer.insertAdjacentHTML('beforeend', content);

            }

        })

        var copyElements = document.querySelectorAll('.copy');

        copyElements.forEach(item => {

            item.addEventListener('click', cpyToClipboard);

        });

    }

})