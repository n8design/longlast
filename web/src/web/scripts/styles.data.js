class StylezData {

    static async Patterns() {

        let url = './app/config/stylez.json';

        return await fetch(url)
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

}

module.exports = StylezData;