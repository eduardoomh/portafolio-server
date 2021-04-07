const {ApolloServer} = require("apollo-server-express");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({path: ".env"});
const jwt = require("jsonwebtoken");

const app = express();

const typeDefs = require("./graphql/schema");
const { Query } = require("./graphql/resolvers/query");
const { Mutation } = require("./graphql/resolvers/mutation");
const { Conocimiento } = require("./graphql/resolvers/Conocimiento");
const { Proyecto } = require("./graphql/resolvers/Proyecto");
const { ListaProyectos } = require("./graphql/resolvers/ListaProyectos");
const { ListaConocimientos } = require("./graphql/resolvers/ListaConocimientos");
const { Estudio } = require("./graphql/resolvers/Estudio");

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Mutation,
        Conocimiento,
        Proyecto,
        ListaProyectos,
        ListaConocimientos,
        Estudio
    },
    context: ({req}) => {
        const token = req.headers.authorization;

        if(token){
            try{
                const usuario = jwt.verify(
                    token.replace("bearer ", ""),
                    process.env.SECRET_KEY
                );
                return {
                    usuario,
                };

            }
            catch(error){
                console.log("#### ERROR ####");
                console.log(error);
                throw new Error(" token invalido");
            }
        }
    }
})

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
}

server.applyMiddleware({ app, cors: corsOptions });

const PORT = process.env.PORT || 4000;
const DB = process.env.DB;

mongoose.connect("mongodb+srv://jesusmh:wilsonmaniaco@smokerdb.f7rcr.mongodb.net/portafoliodb?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    app.listen(PORT, () => {
        console.log(`servidor de peliculas corriendo en la direccion http://localhost:${PORT}/graphql`);
    })
}).catch((err)=>{
    console.log(err);
    console.log("tenemos un error")
})