const Stylez =  require('./stylez.js');

const fetchPattern = async () => {

    console.log('Started');

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

            console.log(error);

        })

}

let pattern = fetchPattern();

pattern.then(data => {

    console.log(Stylez);

    let patterns = data.patterns.sort((a, b) => {
        if (a.file < b.file) {
            return -1;
        }
        if (a.file > b.file) {
            return 1;
        }
        return 0;
    })

    var curSession = Stylez.SessionStorage.getCurrentFilter();

    console.log('SESSION :::: ', curSession);

    let currentPatterns = patterns.filter(item => {
        return item.category === curSession.category;
    });


    currentPatterns.forEach(pattern => {

        const patternsContainer = document.querySelector('.patterns');

        let curTemplate = stylez.templates[pattern.title];

        if (curTemplate !== undefined) {

            const content = `<div data-category='${pattern.category}' class='viewer-pattern'>
            <div class='viewer-header'>
                <div title='${ pattern.title }' class='viewer-title'>${ pattern.title }</div>
                <div title='${pattern.file }' class='viewer-filename'>${pattern.file.split('/').pop()}</div>
            </div>
            <div class='viewer-content'>
            ${ curTemplate() }
            </div>
            <pre class='viewer-code'>${ curTemplate().replace(/</g, '&lt;').replace(/>/g, '&gt;') }</pre>
            </div>`

            patternsContainer.insertAdjacentHTML('beforeend', content);

        }

    })

})