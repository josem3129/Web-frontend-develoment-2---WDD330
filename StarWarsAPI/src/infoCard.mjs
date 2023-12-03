import gerExternalAPI from "./outsideResorces.mjs";
import { templateMaker } from "./utils.mjs";
import infoTemplates from "./infoTemplate.mjs";
const getAPI = new gerExternalAPI;
const infoTemplate = new infoTemplates

export default class infoCard{
    constructor(element, dataSource, name){
        this.element = element;
        this.dataSource = dataSource;
        this.name =  name;
    }

    async inToIt(){
        const object = await getAPI.getSpanData(`https://swapi.dev/api/people/?search=${this.name}`)
        this.displayTemplate(object)
    }

    displayTemplate(list){
        templateMaker(infoTemplate.infoTemplatePeople, this.element,list)
    }
}