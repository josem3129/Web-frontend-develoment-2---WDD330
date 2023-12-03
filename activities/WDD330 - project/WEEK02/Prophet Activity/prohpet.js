const API = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
let prophetArray = [];
const template = document.getElementById('template');
let section = document.querySelector('.card')
let button = document.querySelector('button')
function getProphetData(){
    "use strict";
    fetch(API)
			.then(resp => resp.json())          //  wait for the response and convert it to JSON
			.then(character => {                    //  with the resulting JSON data do something
				prophetArray = prophetArray.concat(character.prophets);
				// character.prophets.forEach(one =>  card.innerHTML = `Loading Characters: ${prophetArray.length} so far ${one.name}`);
                localStorage.setItem('disneyCharacters', JSON.stringify(prophetArray));    
			});
}
function prophetCard(){
    "use strict";

    if (localStorage.getItem('disneyCharacters') !== null) {
		allCharacters = JSON.parse(localStorage.getItem('disneyCharacters'));
    }else{
        getProphetData();
    }

    
    allCharacters.forEach(element => {
        
        let node = template.content.cloneNode(true)
        let name = node.querySelector('h2');
        let date = node.querySelector('p');
        let place  = node.querySelector('p');
        let img  = node.querySelector('.profile');
        
        name.innerHTML = `Name: ${element.name} ${element.lastname}`;
        date.innerHTML = `Birth date ${element.birthdate}`;
        place.innerHTML = `Birth Place: ${element.birthplace}`;
        img.src = element.imageurl;

    });
}
function findProphet(){
    "use strict";
    section.appendChild(prophetCard())
}
button.addEventListener('click',  findProphet());