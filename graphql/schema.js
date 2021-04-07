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
        linkedin: String!
        edad: Int!
        imagen: String!
        descripcion: String!
        estudios: [Estudio]!
        experiencia: [InformacionPerfil]!
        personalidad:[InformacionPerfil]!
        pasatiempos: String!
        telefono: String!
        updatedAt: String!
        createdAt: String!
    }

    type Pagina{
        id: ID!
        conocimientos: String!
        proyectos: String!
        nota_conocimientos: String!
        nota_proyectos: String!
    }

    type ListaProyectos{
        datos: Pagina!
        proyectos_terminados(estado: EstadoProyectoEnum!): [Proyecto]!
        proyectos_pendientes(estado: EstadoProyectoEnum!): [Proyecto]!
    }
    type ListaConocimientos{
        datos: Pagina!
        conocimientos_principales(tipo: TipoConocimientoEnum!): [Conocimiento]!
        conocimientos_secundarios(tipo: TipoConocimientoEnum!): [Conocimiento]!
    }

    type Proyecto{
        id: ID!
        nombre: String!
        descripcion: String!
        tecnologias_principales: [Tecnologia]!
        tecnologias_secundarias: [Tecnologia]!
        repositorios: [Repositorio]!
        detalles: [Detalle]!
        url: String!
        fecha: String!
        estado: EstadoProyectoEnum!
        imagen: String!
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

    type Mejora{
        id: ID!
        descripcion: String!
        mejoras_pendientes: [DatoMejora]!
        mejoras_terminadas: [DatoMejora]!
        notas: String!
    }

    type Estudio{
        titulo: String!
        descripcion: String!
        tecnologia: Tecnologia!
        fecha: String!
        tipo: TipoEstudioEnum!
    }

    type DatoMejora{
        nombre: String!
        descripcion: String!
        fecha: String!
    }

    
    type Repositorio{
        nombre: String!
        url: String!
    }

    type InformacionPerfil{
        texto: String!

    }

    type Detalle{
        nombre: String!
    }

    type Conocimiento{
        id: ID!
        nombre: String!
        tecnologias: [Tecnologia]!
        descripcion: String!
        tipo: TipoConocimientoEnum!
        posicion: Int!
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

    enum TipoConocimientoEnum{
        PRINCIPAL 
        SECUNDARIO
    } 

    enum TipoEstudioEnum{
        ESTUDIO_UNIVERSITARIO
        ESTUDIO_AUTODIDACTA
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

    input crearInformacionPerfilInput{
        texto: String!
    }

    input actualizarInformacionPerfilInput{
        texto: String
    }

    input crearMejoraInput{
        descripcion: String!
        mejoras_pendientes: [DatoMejoraInput]!
        mejoras_terminadas: [DatoMejoraInput]!
        notas: String!
    }

    
    input actualizarMejoraInput{
        descripcion: String
        mejoras_pendientes: [DatoMejoraInput]
        mejoras_terminadas: [DatoMejoraInput]
        notas: String
    }

    input DatoMejoraInput{
        nombre: String!
        descripcion: String!
        fecha: String!
    }

    input crearPaginaInput{
        conocimientos: String!
        proyectos: String!
        nota_conocimientos: String!
        nota_proyectos: String!
    }

    input actualizarPaginaInput{
        conocimientos: String
        proyectos: String
        nota_conocimientos: String
        nota_proyectos: String
    }

    input crearEstudioInput{
        titulo: String!
        descripcion: String!
        tecnologia: ID!
        fecha: String!
        tipo: TipoEstudioEnum!
    }

    input actualizarEstudioInput{
        titulo: String
        descripcion: String
        tecnologia: ID
        fecha: String
        tipo: TipoEstudioEnum
    }


    input Login{
        correo_electronico: String!
        contrasena: String!
    }

    input crearConocimiento{
        nombre: String!
        tecnologias: [ID]!
        descripcion: String!
        tipo: TipoConocimientoEnum!
        posicion: Int!
    }

    input actualizarConocimiento{
        nombre: String
        tecnologias: [ID]
        descripcion: String
        tipo: TipoConocimientoEnum
        posicion: Int
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
        tecnologias_principales: [ID]!
        tecnologias_secundarias: [ID]!
        repositorios: [crearRepositorioInput]!
        detalles: [crearDetalleInput]!
        url: String!
        fecha: String!
        estado: EstadoProyectoEnum!
        imagen: String!
    }

    
    input actualizarProyecto{
        nombre: String
        descripcion: String
        tecnologias_principales: [ID]
        tecnologias_secundarias: [ID]
        repositorios: [actualizarRepositorioInput]
        detalles: [actualizarDetalleInput]
        url: String
        fecha: String
        estado: EstadoProyectoEnum
        imagen: String
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
        linkedin: String!
        edad: Int!
        imagen: String!
        descripcion: String!
        estudios: [crearEstudioInput]!
        experiencia: [crearInformacionPerfilInput]!
        personalidad: [crearInformacionPerfilInput]!
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
        linkedin: String
        edad: Int
        imagen: String
        descripcion: String
        estudios: [actualizarEstudioInput]
        experiencia: [actualizarInformacionPerfilInput]
        personalidad: [actualizarInformacionPerfilInput]
        pasatiempos: String
        telefono: String
    }

    type Query{
        prueba: String!
        obtenerUsuario: Usuario!
        obtenerProyecto(id: ID!): Proyecto!
        obtenerProyectos: [Proyecto]!
        obtenerProyectosTerminados: [Proyecto]!
        obtenerConocimientos: [Conocimiento]!
        obtenerConocimientosSecundarios: [Conocimiento]!
        obtenerTecnologias: [Tecnologia]!
        obtenerMejora: Mejora!
        obtenerListaProyectos(tipo1: EstadoProyectoEnum! tipo2: EstadoProyectoEnum!): ListaProyectos!
        obtenerListaConocimientos(tipo1: TipoConocimientoEnum! tipo2: TipoConocimientoEnum!): ListaConocimientos!
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
        crearMejora(input: crearMejoraInput!): Mejora!
        actualizarMejora(id: ID! input: actualizarMejoraInput!): Mejora!
        crearPagina(input: crearPaginaInput!): Pagina!
        actualizarPagina(id: ID! input: actualizarPaginaInput!): Pagina!
    }


`;
module.exports = typeDefs;