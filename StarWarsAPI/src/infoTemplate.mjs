import gerExternalAPI from "./outsideResorces.mjs"
const getData = new gerExternalAPI;
async function toImportUrl(url){
  console.log(url)
  const object = await  getData.getSpanData(url);
  let name = object.name;
  if (name === undefined) {
   name = object.title;
   return name;
  }
  return name;
}

export default class infoTemplates {

    infoTemplatePeople(object){
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
        <p class="homeWorld">${toImportUrl(object.homeworld)}</p>
        <p class="film">${toImportUrl(object.films)}</p>
        <p class="species">${toImportUrl(object.species)}</p>
        <p class="starship ">${toImportUrl(object.starships)}</p>
        <p class="vehicles">${toImportUrl(object.vehicles)}</p>

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