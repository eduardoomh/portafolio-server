const mongoose = require("mongoose");

const UsuarioSchema = mongoose.Schema({
    nombres: {
        type: String,
        require: true
    },
    apellido_paterno: {
        type: String,
        require: true
    },
    apellido_materno: {
        type: String,
        require: true
    },
    correo_electronico:{
        type: String,
        require: true,
        unique: true
    },
    contrasena: {
        type: String,
        require: true,
    },
    apodo:{
        type: String,
        require: true
    },
    facebook:{
        type: String,
        require: true
    },
    github:{
        type: String,
        require: true
    },
    linkedin:{
        type: String,
        require: true
    },
    edad:{
        type: Number,
        require: true
    },
    imagen:{
        type: String,
        require: true
    },
    descripcion: {
        type: String,
        require: true
    },
    estudios: [
        mongoose.Schema({
            titulo: {
                type: String,
                require: true
            },
            descripcion: {
                type: String,
                require: true
            },
            tecnologia: {
                type: mongoose.Schema.Types.ObjectId,
                require: true,
                ref: "Tecnologia"
            },
            fecha: {
                type: String,
                require: true
            },
            tipo: {
                type: String,
                require: true
            }
        })
    ],
    experiencia: [
        mongoose.Schema({
            texto: {
                type: String,
                require: true
            }
        })
    ],
    personalidad: [
        mongoose.Schema({
            texto: {
                type: String,
                require: true
            }
        })
    ],
    pasatiempos: {
        type: String,
        require: true
    },
    telefono:{
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

const Usuario = mongoose.model("Usuario", UsuarioSchema);

module.exports = Usuario;