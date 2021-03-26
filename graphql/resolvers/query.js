const UsuarioController = require("../../controladores/Usuario");
const ProyectoController = require("../../controladores/Proyecto");
const ConocimientoController = require("../../controladores/Conocimiento");
const TecnologiaController = require("../../controladores/Tecnologia");
const MejoraController = require("../../controladores/Mejora");

module.exports = {
    Query:{
        prueba: () => {
            return "conexion react y graphql exitosa"
        },
        obtenerUsuario: () => UsuarioController.obtenerUsuario(),
        obtenerProyecto: (_, {id}) => ProyectoController.obtenerProyecto(id),
        obtenerProyectos: () => ProyectoController.obtenerProyectos(),
        obtenerProyectosTerminados: () => ProyectoController.obtenerProyectosTerminados(),
        obtenerConocimientos: () => ConocimientoController.obtenerConocimientos(),
        obtenerConocimientosSecundarios: () => ConocimientoController.obtenerConocimientosSecundarios(),
        obtenerTecnologias: () => TecnologiaController.obtenerTecnologias(),
        obtenerMejora: () => MejoraController.obtenerMejora(),
        obtenerListaProyectos: () => ProyectoController.obtenerListaProyectos(),
        obtenerListaConocimientos: () => ConocimientoController.obtenerListaConocimientos()
    }
}