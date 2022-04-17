let tareasJSON = require("./funcionesDeTareas");

let comando = process.argv[2];

switch(comando){
    
    case "listar":
        console.log("*****************************");
        console.log(tareasJSON.listar());
        console.log("*****************************");
        break;

    case undefined:
        console.log("*****************************");
        console.log("Atención - Tenés que pasar una acción.");
        console.log("*****************************");
        break;

    default:
        console.log("*****************************");
        console.log("No entiendo qué querés hacer.");
        console.log("*****************************");
        break;
}