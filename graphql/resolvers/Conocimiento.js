const Tecnologia = require("../../modelos/Tecnologia");

module.exports = {
    Conocimiento:{
        tecnologias: async ({tecnologias}) => {
            
            try{
                let tecnologiasArray = [];


                for await (id of tecnologias) {
                    let tecnologiaObj = await Tecnologia.findOne(id);
                    tecnologiasArray.push(tecnologiaObj);

                }

                return tecnologiasArray; 

            }
            catch(err){
                console.log(err);
            }
        }
    }
}   
