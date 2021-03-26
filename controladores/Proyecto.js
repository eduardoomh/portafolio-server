const Proyecto = require("../modelos/Proyecto");
const Pagina = require("../modelos/Pagina");

async function obtenerProyecto(id){
    try{
        const proyecto = await Proyecto.findById(id);
        return proyecto;

    }
    catch(err){
        console.log(err);
    }

}

async function obtenerProyectos(){
    try{
        const Proyectos = await Proyecto.find().where({estado: "PENDIENTE"});
        return Proyectos;

    }
    catch(err){
        console.log(err);
    }
}

async function obtenerProyectosTerminados(){
    try{
        const Proyectos = await Proyecto.find().where({estado: "DISPONIBLE"});
        return Proyectos;

    }
    catch(err){
        console.log(err);
    }
}

async function obtenerListaProyectos(){
    try{
        const listaProyectos = await Pagina.findOne();
        return{
            datos: listaProyectos
        }
    }
    catch(err){
        console.log(err);
    }
}

async function crearProyecto(input, usuario){
    if(!usuario) throw new Error("No tiene permiso de hacer esta accion");

    try{
        const nuevoProyecto = await Proyecto.create(input);
        nuevoProyecto.save();

        return nuevoProyecto;

    }
    catch(err){
        console.log(err);
    }

}

async function actualizarProyecto(id, input, usuario){
    if(!usuario) throw new Error("No tiene permiso de hacer esta accion");

    try{
        await Proyecto.findByIdAndUpdate(id, {
            ...input,
            updatedAt: Date.now()
        });
        const ProyectoActualizado = await Proyecto.findById(id);
        return ProyectoActualizado;
        
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    obtenerProyecto,
    obtenerProyectos,
    obtenerProyectosTerminados,
    obtenerListaProyectos,
    crearProyecto,
    actualizarProyecto
}