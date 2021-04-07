const Tecnologia = require("../../modelos/Tecnologia");

module.exports = {
        Estudio:{
            tecnologia: async ({tecnologia}) => {
                
                try{
                    
                    let tecnologiaObjeto = await Tecnologia.findOne(tecnologia);
                    return tecnologiaObjeto; 

                }
                catch(err){
                    console.log(err);
                }
            }
    }
}   
