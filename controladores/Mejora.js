const Mejora = require("../modelos/Mejora");

async function obtenerMejora(){
    try{
        const mejora = await Mejora.findOne();
        return mejora;

    }
    catch(err){
        console.log(err);
    }

}


async function crearMejora(input, usuario){
    if(!usuario) throw new Error("No tiene permiso de hacer esta accion");

    try{
        const nuevaMejora = await Mejora.create(input);
        nuevaMejora.save();

        return nuevaMejora;

    }
    catch(err){
        console.log(err);
    }
}

async function actualizarMejora(id, input, usuario){
    if(!usuario) throw new Error("No tiene permiso de hacer esta accion")

    try{
        await Mejora.findByIdAndUpdate(id, {
            ...input,
            updatedAt: Date.now()
        });
        const mejoraActualizada = await Mejora.findById(id);
        return mejoraActualizada;
        
    }
    catch(err){
        console.log(err);
    }

}

module.exports = {
    obtenerMejora,
    crearMejora,
    actualizarMejora
}