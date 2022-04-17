let fs = require('fs');

let tareasJSON = {

   listar: function (){

    let tareas = fs.readFileSync('tareas.json','utf-8');
    tareas = JSON.parse(tareas);

    return tareas;

}
}


module.exports = tareasJSON;