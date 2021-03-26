const mongoose = require("mongoose");

const PaginaSchema = mongoose.Schema({
    conocimientos: {
        type: String,
        require: true
    },

    proyectos: {
        type: String,
        require: true
    },
    nota_conocimientos: {
        type: String,
        require: true
    },

    nota_proyectos: {
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

const Pagina = mongoose.model("Pagina", PaginaSchema);
module.exports = Pagina;