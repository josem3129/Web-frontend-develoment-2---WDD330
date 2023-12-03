const url = "https://pokeapi.co/api/v2/pokemon"
const div = document.querySelector(".poke")
const result = [];

async function PokeFinder(){
    const returnData = await fetch(url);
    if(returnData.ok){
        const data = await returnData.json();
        PokeCount(data)
    }
    
}
function PokeCount(data){
    
    console.log(data.count);
    result.push(data.results);
    div.textContent = `count: ${data.count}`;
    
    data.results.forEach(pokemon => {
        const madeDiv = document.createElement('div');
        madeDiv.textContent = `name: ${pokemon.name}`;
        div.appendChild(madeDiv);
    });
    
}

PokeFinder();