
const URL = 'http://www.mocky.io/v2/5b97533d30000070000bd533';

export default {
    async fetch() {
        try {
                let response = await fetch(URL);
                let responseJsonData = await response.json();
                return responseJsonData;
            }
        catch(e) {
            console.log(e)
        }
    }
}