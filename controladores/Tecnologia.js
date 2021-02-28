const Tecnologia = require("../modelos/Tecnologia");

async function obtenerTecnologias(){
    try{
        const tecnologias = await Tecnologia.find();
        return tecnologias;

    }
    catch(err){
        console.log(err);
    }

}

async function crearTecnologia(input, usuario){
    if(!usuario) throw new Error("No tiene permiso de realizar esta accion");

    try{
        const nuevaTecnologia = await Tecnologia.create(input);
        nuevaTecnologia.save();

        return nuevaTecnologia;

    }
    catch(err){
        console.log(err);
    }

}

async function actualizarTecnologia(id, input, usuario){
    if(!usuario) throw new Error("No tiene permiso de realizar esta accion");
    
    try{
       await Tecnologia.findByIdAndUpdate(id, {
            ...input,
            updatedAt: Date.now()
        });

        const tecnologiaActualizada = await Tecnologia.findById(id);

        return tecnologiaActualizada;

    }
    catch(err){
        console.log(err);
    }
}



module.exports = {
    obtenerTecnologias,
    crearTecnologia,
    actualizarTecnologia
}