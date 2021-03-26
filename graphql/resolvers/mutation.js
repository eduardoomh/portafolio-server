const UsuarioController = require("../../controladores/Usuario");
const ProyectoController = require("../../controladores/Proyecto");
const ConocimientoController = require("../../controladores/Conocimiento");
const TecnologiaController = require("../../controladores/Tecnologia");
const MejoraController = require("../../controladores/Mejora");
const PaginaController = require("../../controladores/Pagina");

module.exports = {
    Mutation:{
        crearUsuario: (_, {input}) => UsuarioController.crearUsuario(input),
        loguearse: (_, {input}) => UsuarioController.loguearse(input),
        actualizarUsuario: (_, {id, input}, {usuario}) => UsuarioController.actualizarUsuario(id, input, usuario),
        crearProyecto: (_, {input}, {usuario}) => ProyectoController.crearProyecto(input, usuario),
        actualizarProyecto: (_, {id, input}, {usuario}) => ProyectoController.actualizarProyecto(id, input, usuario),
        crearConocimiento: (_, {input}, {usuario}) => ConocimientoController.crearConocimiento(input, usuario),
        actualizarConocimiento: (_,{id, input}, {usuario}) => ConocimientoController.actualizarConocimiento(id, input, usuario),
        crearTecnologia: (_,{input}, {usuario}) => TecnologiaController.crearTecnologia(input, usuario),
        actualizarTecnologia: (_, {id, input}, {usuario}) => TecnologiaController.actualizarTecnologia(id, input, usuario),
        crearMejora: (_,{input}, {usuario}) => MejoraController.crearMejora(input, usuario),
        actualizarMejora: (_, {id, input}, {usuario}) => MejoraController.actualizarMejora(id, input, usuario),
        crearPagina: (_, {input}, {usuario}) => PaginaController.crearPagina(input, usuario),
        actualizarPagina: (_, {id, input}, {usuario}) => PaginaController.actualizarPagina(id, input, usuario)
    }
}