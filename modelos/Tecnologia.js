const mongoose = require("mongoose");

const TecnologiaSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    imagen: {
        type: String,
        require: true
    },
    updatedAt:{
        type: Date,
        require: Date.now()
    },
    createdAt:{
        type: Date,
        require: Date.now()
    },

});

const Tecnologia = mongoose.model("Tecnologia", TecnologiaSchema);
module.exports = Tecnologia;