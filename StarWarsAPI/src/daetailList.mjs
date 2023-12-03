import { templateMaker, toLocalStorage } from "./utils.mjs";
import templates from "./templateList.mjs";

const template = new templates;
export default class  listTemplate{

    constructor(dataSource, param, element){
        this.dataSource = dataSource;
        this.param = param;
        this.element = element;
    }

    async intoIt(){
        const list = await this.dataSource.getData(this.param)
        console.log(list)
        this.renderList(list);
    }
    renderList(list){

        toLocalStorage(list);

        if (this.param === "people") {
            templateMaker(template.templatePeople, this.element, list);            
        }if(this.param === "films"){
            templateMaker(template.templateFilm, this.element, list);
        }if(this.param === "species"){
            templateMaker(template.templateSpecies, this.element, list);
        }if(this.param === "vehicles" || this.param === "starships"){
            templateMaker(template.templateShipVehicle, this.element, list);
        }else {
            
        }
    }
}