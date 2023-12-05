
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
        <p id="homeworld">homeworld: ${object.homeworld}</p>
        <p class="card-footer" ${object.films}</p>
        <p class="card-footer">species: ${object.species}</p>
        <p class="card-footer">Star Sships: ${object.starships}</p>
        <p class="card-footer">Vehicles: ${object.vehicles}</p>
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
        </div>
        <div class = "secondPart">
        <p class="card-footer">species: ${object.species}</p>
        <p class="card-footer">Star Ships: ${object.starships}</p>
        <p class="card-footer">Vehicles: ${object.vehicles}</p>
        <p id="homeworld">homeworld: ${object.character}</p>
        <p class="card-footer" ${object.planets}</p>
        <p class="card-footer" ${object.planets}</p>
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
      </div>
      <div class = "secondPart">
        <p class="card-footer">species: ${object.cargo_capacity}</p>
        <p class="card-footer">Star Ships: ${object.consumables}</p>
        <p class="card-footer">Vehicles: ${object.films}</p>
        <p id="homeworld">homeworld: ${object.pilots}</p>
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
      </div>
      <div class = "secondPart">
        <p class="card-footer">species: ${object.homeworld}</p>
        <p class="card-footer">Star Sships: ${object.people}</p>
        <p class="card-footer">Vehicles: ${object.films}</p>
        <p id="homeworld">homeworld: ${object.character}</p>
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
      </div>
      <div class = "secondPart">
        <p class="card-footer">species: ${object.surface_water}</p>
        <p class="card-footer">Star Ships: ${object.residents}</p>
        <p class="card-footer">Vehicles: ${object.films}</p>
        </div>`
    }
}