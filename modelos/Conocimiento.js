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
    updatedAt:{
        type: Date,
        require: Date.now()
    },
    createdAt:{
        type: Date,
        require: Date.now()
    },

});

const Conocimiento = mongoose.model("Conocimiento", ConocimientoSchema);
module.exports = Conocimiento;