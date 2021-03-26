const Pagina = require("../modelos/Pagina");

async function obtenerPagina(){
    try{
        const pagina = await Pagina.findOne();
        return pagina;

    }
    catch(err){
        console.log(err);
    }

}


async function crearPagina(input, usuario){
    if(!usuario) throw new Error("No tiene permiso de hacer esta accion");

    try{
        const nuevaPagina = await Pagina.create(input);
        nuevaPagina.save();

        return nuevaPagina;

    }
    catch(err){
        console.log(err);
    }
}

async function actualizarPagina(id, input, usuario){
    if(!usuario) throw new Error("No tiene permiso de hacer esta accion")

    try{
        await Pagina.findByIdAndUpdate(id, {
            ...input,
            updatedAt: Date.now()
        });
        const paginaActualizada = await Pagina.findById(id);
        return paginaActualizada;
        
    }
    catch(err){
        console.log(err);
    }

}

module.exports = {
    obtenerPagina,
    crearPagina,
    actualizarPagina
}