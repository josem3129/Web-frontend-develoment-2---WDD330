const url = "https://swapi.dev/api/"


export default class gerExternalAPI{

    async getData (category){
        const response = await fetch(`${url}${category}`);
        try {
            const data = await response.json()
            // const docs = data.docs
            return data.results
        } catch (error) {
            
        }
        
    }

    async getSpanData(url){
        const response = await fetch(url);
        try {
            const data = await response.json()
            // console.log(data)
            return data
        } catch (error) {
            
        }
    }
}