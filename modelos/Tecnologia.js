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
        default: Date.now(),
        require: true
    },
    createdAt:{
        type: Date,
        default: Date.now(),
        require: true
    },

});

const Tecnologia = mongoose.model("Tecnologia", TecnologiaSchema);
module.exports = Tecnologia;