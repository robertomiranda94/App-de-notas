let fs = require('fs');

let misFunciones = {
    leerJSON: function () {
        let tareas = fs.readFileSync('tareas.json', 'utf-8');

        tareas = JSON.parse(tareas);

        return tareas;
    },

    escribirJSON: function (arrayTareas) {/* Ejercicio 2 */
        let nuevasTareas = JSON.stringify(arrayTareas); // convierte el array del parametro en un string JSON
        fs.writeFileSync('tareas.json', nuevasTareas); //agrega la nueva informacion al archivo tareas.json 
        console.log('Nueva tarea agregada');
    },

    guardarTarea: function (unaNuevaTarea) { // guarda una nueva tarea
        let todasLasTareas = this.leerJSON();
        todasLasTareas.push(unaNuevaTarea);
        this.escribirJSON(todasLasTareas);
    },

    filtrarPorEstado: function (parametroEstado){ /* Ejercicio 3 */
        let leerPorEstado = this.leerJSON();// se usa leerJSON para obtener todas las tareas de tareas.json
        leerPorEstado = leerPorEstado.filter(unaTarea => unaTarea.estado == parametroEstado)
        return leerPorEstado;
    } 

}

module.exports = misFunciones;