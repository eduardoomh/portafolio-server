const Proyecto = require("../modelos/Proyecto");

async function obtenerProyecto(id){
    try{
        const proyecto = await Proyecto.findById(id).populate("tecnologias");
        return proyecto;

    }
    catch(err){
        console.log(err);
    }

}

async function obtenerProyectos(){
    try{
        const Proyectos = await Proyecto.find().populate("tecnologias");
        return Proyectos;

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
    crearProyecto,
    actualizarProyecto
}