const Proyecto = require("../../modelos/Proyecto");

module.exports = {
    ListaProyectos:{
        proyectos_terminados: async (_, {estado}) => {
            
            try{
                const terminados = await Proyecto.find().where({estado: estado});
                return terminados;

            }
            catch(err){
                console.log(err);
            }
        },
        proyectos_pendientes: async (_, {estado}) => {
            
            try{
                const pendientes = await Proyecto.find().where({estado: estado});
                return pendientes;

            }
            catch(err){
                console.log(err);
            }
        }
    }
}   
