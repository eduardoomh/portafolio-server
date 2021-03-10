const mongoose = require("mongoose");

const ConocimientoSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    descripcion: {
        type: String,
        require: true
    },
    tecnologias:[{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "Tecnologia"
    }],
    tipo: {
        type: String,
        default: "SECUNDARIO"
    },
    posicion: {
        type: Number,
        default: 0
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

const Conocimiento = mongoose.model("Conocimiento", ConocimientoSchema);
module.exports = Conocimiento;