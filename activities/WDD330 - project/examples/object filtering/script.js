
var category = ["tents", "backpacks", "sleeping-bags", "hammocks"]
        
const mainElement = document.querySelector("#main");
var API = getData();
var search = "g";

async function getData(category){
    const data = await fetch(`https://wdd330-backend.onrender.com/products/search/${category}`)
        if (data.ok) {
            const dataJson = await data.json()
            const result = dataJson.Result;
            return result
        }else{
            throw{name: "serviceError", message: jsonResponse}
        }
}

let filter = async (category) => {
    
    let API = await getData(category);
    let display = API.filter((object)=>{
        if (search === "") {
            console.log(`error`) 
        } else if(object.Name.includes(search.toLowerCase())){
            console.log(object);
            return object;
        }
    }).map((object) => {
        return `
        <div class="container">
        <p>Name: ${object.Name}</p>
        <p>Prize: ${object.FinalPrice}</p>
        </div>
        <hr>`
    }).join("");

    mainElement.innerHTML = display;
}

category.forEach((element)=>{
    filter(element);

})