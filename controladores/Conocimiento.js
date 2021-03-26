const { where } = require("../modelos/Conocimiento");
const Conocimiento = require("../modelos/Conocimiento");
const Pagina = require("../modelos/Pagina");

async function obtenerConocimientos(){
    try{
        const conocimientos = await Conocimiento.find().where({tipo: "PRINCIPAL"});
        return conocimientos;

    }
    catch(err){
        console.log(err);
    }

}

async function obtenerConocimientosSecundarios(){
    try{
        const conocimientos = await Conocimiento.find().where({tipo: "SECUNDARIO"});
        return conocimientos;

    }
    catch(err){
        console.log(err);
    }

}

async function obtenerListaConocimientos(){
    try{
        const listaConocimientos = await Pagina.findOne();
        return{
            datos: listaConocimientos
        }
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
    obtenerConocimientosSecundarios,
    obtenerListaConocimientos,
    crearConocimiento,
    actualizarConocimiento
}