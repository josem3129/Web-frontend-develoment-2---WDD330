import gerExternalAPI from "./outsideResorces.mjs"
const getData = new gerExternalAPI;

async function toImportUrl(url){

  if (url.length == 0) {
    return "empty"
  }
  else if(typeof url ==="string") {
    const result = await getData.getSpanData(url);
    const name = result.name;
    console.log(name);
    return name;
  } else {
    let nameList = [];
    url.forEach(async (element) => {
      let arrayObject = await getData.getSpanData(element);
      let name = arrayObject.name;
      if (name === undefined) {
        name = arrayObject.title;
        console.log(`title: ${name}`);
        return name
      }
      console.log(`name: ${name}`);
      return name
    });
  }
  // console.log(url)
    
  
}

export default class infoTemplates {

    infoTemplatePeople(object){
      console.log(toImportUrl(object.homeworld))
        return `
        <div class="card">
        <h2 class="indent">${object.name}</h2>
        <div class = "firstPart">
        <p class="card-footer"> ${object.birth_year}</p>
        <p class="card-footer"> ${object.eye_color}</p>
        <p class="card-footer"> ${object.gender}</p>
        <p class="card-footer"> ${object.hair_color}</p>
        <p class="card-footer"> ${object.height}</p>
        <p class="card-footer"> ${object.mass}</p>
        <p class="card-footer"> ${object.skin_color}</p>
        </div>
        <div class = "secondPart">
        <p class="homeWorld">homeworld: ${toImportUrl(object.homeworld).PromiseResult}</p>
        <p class="film"> films: ${toImportUrl(object.films).PromiseResult}</p>
        <p class="species">species: ${toImportUrl(object.species).PromiseResult}</p>
        <p class="starship ">Star Sships: ${toImportUrl(object.starships).PromiseResult}</p>
        <p class="vehicles">Vehicles: ${toImportUrl(object.vehicles).PromiseResult}</p>
        </div>`

    }
    infoTemplateFilm(object){
        return `
        <div class="card">
        <h2 class="indent">${object.title}</h2>
        <p class="card-footer"> ${object.episode_id}</p>
        <p class="card-footer"> ${object.director}</p>
        <p class="card-footer"> ${object.producer}</p>
        <p class="card-footer"> ${object.release_date}</p>
        </div>`
    }
    infoTemplateShipVehicle(object){
        return `
        <div class="card">
        <h2 class="indent">${object.name}</h2>
        <p class="card-footer"> ${object.model}</p>
        <p class="card-footer"> ${object.manufacturer}</p>
        <p class="card-footer"> ${object.cost_in_crdits}</p>
        <p class="card-footer"> ${object.length}</p>
        <p class="card-footer"> ${object.crew}</p>
        <p class="card-footer"> ${object.passengers}</p>
        <p class="card-footer"> ${object.max_atmosphering_speed}</p>
      </div>`
    }
    infoTemplateSpecies(object){
        return `
        <div class="card">
        <h2 class="indent">${object.name}</h2>
        <p class="card-footer"> ${object.classification}</p>
        <p class="card-footer"> ${object.designation}</p>
        <p class="card-footer"> ${object.average_height}</p>
        <p class="card-footer"> ${object.avarage_lifespan}</p>
        <p class="card-footer"> ${object.eye_color}</p>
        <p class="card-footer"> ${object.hair_color}</p>
        <p class="card-footer"> ${object.language}</p>
      </div>`
    }
    infoTemplatePlanets(object){
        return `
        <div class="card">
        <h2 class="indent">${object.name}</h2>
        <p class="card-footer"> ${object.diameter}</p>
        <p class="card-footer"> ${object.rotation_speed}</p>
        <p class="card-footer"> ${object.orbital_period}</p>
        <p class="card-footer"> ${object.gravity}</p>
        <p class="card-footer"> ${object.population}</p>
        <p class="card-footer"> ${object.climate}</p>
        <p class="card-footer"> ${object.terrain}</p>
      </div>`
    }
}