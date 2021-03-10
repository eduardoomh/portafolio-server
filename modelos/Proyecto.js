const mongoose = require("mongoose");

const ProyectoSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    descripcion: {
        type: String,
        require: true
    },
    tecnologias_principales:[{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "Tecnologia"
    }],
    tecnologias_secundarias:[{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "Tecnologia"
    }],
    repositorios: [
        mongoose.Schema({
            nombre: {
                type: String,
                require: true,
                default: null

            },
            url:{
                type: String,
                require: true,
                default: null,
            }
        })
    ],
    detalles: [
        mongoose.Schema({
            nombre: {
                type: String,
                require: true
            }
        })
    ],
    url: {
        type: String,
        require: true
    },
    fecha: {
        type: String,
        require: true
    },
    estado: {
        type: String,
        default: "EN_DESARROLLO"
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

const Proyecto = mongoose.model("Proyecto", ProyectoSchema);
module.exports = Proyecto;