import gerExternalAPI from "./outsideResorces.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();
const getData = new gerExternalAPI
console.log(getData.getData(`people`))