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
    tecnologias:[{
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
        type: Number,
        require: true
    },
    estado: {
        type: String,
        default: "PENDIENTE"
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

const Proyecto = mongoose.model("Proyecto", ProyectoSchema);
module.exports = Proyecto;