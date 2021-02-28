const Conocimiento = require("../modelos/Conocimiento");

async function obtenerConocimientos(){
    try{
        const conocimientos = await Conocimiento.find().populate("tecnologias");
        return conocimientos;

    }
    catch(err){
        console.log(err);
    }

}

async function crearConocimiento(input, usuario){
    if(!usuario) throw new Error("No tiene permiso de hacer esta accion");

    try{
        const nuevoConocimiento = await Conocimiento.create(input);
        nuevoConocimiento.save();

        return nuevoConocimiento;

    }
    catch(err){
        console.log(err);
    }
}

async function actualizarConocimiento(id, input, usuario){
    if(!usuario) throw new Error("No tiene permiso de hacer esta accion")

    try{
        await Conocimiento.findByIdAndUpdate(id, {
            ...input,
            updatedAt: Date.now()
        });
        const conocimientoActualizado = await Conocimiento.findById(id);
        return conocimientoActualizado;
        
    }
    catch(err){
        console.log(err);
    }

}

module.exports = {
    obtenerConocimientos,
    crearConocimiento,
    actualizarConocimiento
}