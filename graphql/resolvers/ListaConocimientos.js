const Conocimiento = require("../../modelos/Conocimiento");

module.exports = {
    ListaConocimientos:{
        conocimientos_principales: async (_, {tipo}) => {
            
            try{
                const principales = await Conocimiento.find().where({tipo: tipo});
                return principales;

            }
            catch(err){
                console.log(err);
            }
        },
        conocimientos_secundarios: async (_, {tipo}) => {
            
            try{
                const secundarios = await Conocimiento.find().where({tipo: tipo});
                return secundarios;

            }
            catch(err){
                console.log(err);
            }
        }
    }
}   
