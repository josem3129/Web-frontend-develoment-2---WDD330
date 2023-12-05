const url = "https://swapi.dev/api/"


export default class gerExternalAPI{

    async getData (category){
        const storage = localStorage.getItem(category)
        if ( storage === null) {
            const response = await fetch(`${url}${category}`);
            try {
                const data = await response.json()
                // const docs = data.docs
                localStorage.setItem(`${category}`, JSON.stringify(data.results))
                return data.results
            } catch (error) {
                
            }
            
        }else{
            return JSON.parse(storage)
        }
        
    }

    getSpanData(name){

        var nameInfo = []; 
        var category  = ["films", "people","starships","vehicles"]

        function filter(category){

            let API = JSON.parse(localStorage.getItem(category));
            if (API === null) {
               return alert("error no data found")
            }
            let display = API.filter((object)=>{
                let ObjectName = object.name;

                if (ObjectName === undefined) {
                    ObjectName = object.title;
                } 

                if(ObjectName.toLowerCase() == name.toLowerCase()){
                    nameInfo.push(object);
                }else{
                  return {Name: `Not found`}
                }
               
            })
        }
        
        category.forEach((e)=>{
            filter(e);
        })

        return nameInfo
    }  

    searchData(name){
        

        function filter(category){

            let API = JSON.parse(localStorage.getItem(category));
            if (API === null) {
               return alert("error no data found")
            }
            let display = API.filter((object)=>{
                let ObjectName = object.name;

                if (ObjectName === undefined) {
                    ObjectName = object.title;
                } 

                if(ObjectName.toLowerCase().includes(name.toLowerCase())){
                    return object;
                }else{
                  return {Name: `Not found`}
                }
               
            })
        }
        
        category.forEach((e)=>{
            filter(e);
        })
    }  
}