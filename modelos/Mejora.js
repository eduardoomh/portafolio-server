const mongoose = require("mongoose");

const MejoraSchema = mongoose.Schema({
    descripcion: {
        type: String,
        require: true
    },
    mejoras_pendientes: [
        mongoose.Schema({
            nombre: {
                type: String,
                require: true
            },
            descripcion: {
                type: String,
                require: true
            },
            fecha: {
                type: String,
                require: true
            }
        })
    ],
    mejoras_terminadas: [
        mongoose.Schema({
            nombre: {
                type: String,
                require: true
            },
            descripcion: {
                type: String,
                require: true
            },
            fecha: {
                type: String,
                require: true
            }
        })
    ],
    notas: {
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

const Mejora = mongoose.model("Mejora", MejoraSchema);
module.exports = Mejora;