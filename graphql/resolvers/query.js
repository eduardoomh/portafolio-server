const UsuarioController = require("../../controladores/Usuario");
const ProyectoController = require("../../controladores/Proyecto");
const ConocimientoController = require("../../controladores/Conocimiento");
const TecnologiaController = require("../../controladores/Tecnologia");

module.exports = {
    Query:{
        obtenerUsuario: (_, {id}) => UsuarioController.obtenerUsuario(id),
        obtenerProyecto: (_, {id}) => ProyectoController.obtenerProyecto(id),
        obtenerProyectos: () => ProyectoController.obtenerProyectos(),
        obtenerConocimientos: () => ConocimientoController.obtenerConocimientos(),
        obtenerTecnologias: () => TecnologiaController.obtenerTecnologias()
    }
}