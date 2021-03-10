const Tecnologia = require("../../modelos/Tecnologia");

module.exports = {
    Proyecto:{
        tecnologias_principales: async ({tecnologias_principales}) => {
            
            try{
                let tecnologiasArray = [];


                for await (id of tecnologias_principales) {
                    let tecnologiaObj = await Tecnologia.findOne(id);
                    tecnologiasArray.push(tecnologiaObj);

                }

                return tecnologiasArray; 

            }
            catch(err){
                console.log(err);
            }
        },
        tecnologias_secundarias: async ({tecnologias_secundarias}) => {
            
            try{
                let tecnologiasArray = [];


                for await (id of tecnologias_secundarias) {
                    let tecnologiaObj = await Tecnologia.findOne(id);
                    tecnologiasArray.push(tecnologiaObj);

                }

                return tecnologiasArray; 

            }
            catch(err){
                console.log(err);
            }
        },
    }
}   
