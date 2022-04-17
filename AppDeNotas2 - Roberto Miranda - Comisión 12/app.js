let misFunciones = require('./funcionesDeTareas'); // importa todas las funciones creadas en el archivo funcionesDeTareas

let process = require("process") // uso del modulo process para interactuar con el terminal

let accion = process.argv[2]

switch (accion) {
    case 'listar':
        console.log('--------------------------------------');
        let tareas = misFunciones.leerJSON(); // lista todas las tareas
        tareas.forEach(unaTarea => { /* Ejercicio 1 */ //forEach recorre todo el array
            console.log(`La tarea ${unaTarea.titulo} se encuentra ${unaTarea.estado}`); //se muestra el titulo y estado de cada tarea
        });
        console.log('--------------------------------------');
        break;

    case 'crear': /* Ejercicio 2 */
        let tareaGuardar = {
            titulo: process.argv[3],
            estado: 'pendiente' /* Ejercicio 2c_iii*/ // Estado de la tarea será siempre "pentiente" 
        }
        misFunciones.guardarTarea(tareaGuardar);//uso de la funcion guardarTarea
        break

    case 'filtrar': /* Ejercicio 3 */
        let estado = process.argv[3]; //ingresar por consola el estado de la tarea a filtrar
        let resultado = misFunciones.filtrarPorEstado(estado); // queda guardado en una variable el estado ingresado
        console.log('--------------------------------------');
        resultado.forEach(element => {// recorrer cada elemento del array
            console.log(`La tarea ${element.titulo} se encuentra ${element.estado}`);
        })
        console.log('--------------------------------------');
        break

    case undefined:
        console.log('--------------------------------------');
        console.log('Atención - Tienes que pasar una acción');
        console.log('--------------------------------------');
        break;

    default:
        console.log('--------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('--------------------------------------');
        break;
}