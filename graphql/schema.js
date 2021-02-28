const {gql} = require("apollo-server-express");

const typeDefs = gql`

    type Usuario{
        id: ID!
        nombres: String!
        apellido_paterno: String!
        apellido_materno: String!
        correo_electronico: String!
        contrasena: String!
        apodo: String!
        facebook: String!
        github: String!
        edad: Int!
        imagen: String!
        descripcion: String!
        experiencia: String!
        estudios: String!
        personalidad: String!
        pasatiempos: String!
        telefono: String!
        updatedAt: String!
        createdAt: String!
    }

    type Proyecto{
        id: ID!
        nombre: String!
        descripcion: String!
        tecnologias: [Tecnologia]!
        repositorios: [Repositorio]!
        detalles: [Detalle]!
        url: String!
        fecha: Int!
        estado: EstadoProyectoEnum!
        updatedAt: String!
        createdAt: String!
    }

    type Tecnologia{
        id: ID!
        nombre: String!
        imagen: String!
        updatedAt: String!
        createdAt: String!
    }

    type Repositorio{
        nombre: String!
        url: String!
    }

    type Detalle{
        nombre: String!
    }

    type Conocimiento{
        id: ID!
        nombre: String!
        tecnologias: [Tecnologia]!
        descripcion: String!
        updatedAt: String!
        createdAt: String!
    }

    type Token{
        token: String!
    }

    enum EstadoProyectoEnum{
        DISPONIBLE
        EN_DESARROLLO
        CREACION_DE_WIREFRAME
        PENDIENTE
    }

    input crearRepositorioInput{
        nombre: String!
        url: String!
    }

    input actualizarRepositorioInput{
        nombre: String!
        url: String!
    }

    input crearDetalleInput{
        nombre: String!
    }

    input actualizarDetalleInput{
        nombre: String
    }

    input Login{
        correo_electronico: String!
        contrasena: String!
    }

    input crearConocimiento{
        nombre: String!
        tecnologias: [ID]!
        descripcion: String!
    }

    input actualizarConocimiento{
        nombre: String
        tecnologias: [ID]
        descripcion: String
    }

    input crearTecnologia{
        nombre: String!
        imagen: String!
    }

    input actualizarTecnologia{
        nombre: String
        imagen: String
    }

    input crearProyecto{
        nombre: String!
        descripcion: String!
        tecnologias: [ID]!
        repositorios: [crearRepositorioInput]!
        detalles: [crearDetalleInput]!
        url: String!
        fecha: Int!
        estado: EstadoProyectoEnum!
    }

    
    input actualizarProyecto{
        nombre: String
        descripcion: String
        tecnologias: [ID]
        repositorios: [actualizarRepositorioInput]
        detalles: [actualizarDetalleInput]
        url: String
        fecha: Int
        estado: EstadoProyectoEnum
    }

    input crearUsuario{
        nombres: String!
        apellido_paterno: String!
        apellido_materno: String!
        correo_electronico: String!
        apodo: String!
        contrasena: String!
        facebook: String!
        github: String!
        edad: Int!
        imagen: String!
        descripcion: String!
        experiencia: String!
        estudios: String!
        personalidad: String!
        pasatiempos: String!
        telefono: String!
    }

    input actualizarUsuario{
        nombres: String
        apellido_paterno: String
        apellido_materno: String
        correo_electronico: String
        apodo: String
        contrasena: String
        facebook: String
        github: String
        edad: Int
        imagen: String
        descripcion: String
        experiencia: String
        estudios: String
        personalidad: String
        pasatiempos: String
        telefono: String
    }

    type Query{
        obtenerUsuario(id: ID!): Usuario!
        obtenerProyecto(id: ID!): Proyecto!
        obtenerProyectos: [Proyecto]!
        obtenerConocimientos: [Conocimiento]!
        obtenerTecnologias: [Tecnologia]!
    }

    type Mutation{
        crearUsuario(input: crearUsuario!): Usuario!
        loguearse(input: Login!): Token!
        actualizarUsuario(id: ID! input: actualizarUsuario!): Usuario!
        crearProyecto(input: crearProyecto!): Proyecto!
        actualizarProyecto(id: ID! input: actualizarProyecto!): Proyecto!
        crearConocimiento(input: crearConocimiento!): Conocimiento!
        actualizarConocimiento(id: ID! input: actualizarConocimiento!): Conocimiento!
        crearTecnologia(input: crearTecnologia!): Tecnologia!
        actualizarTecnologia(id: ID! input: actualizarTecnologia!): Tecnologia!
    }


`;
module.exports = typeDefs;