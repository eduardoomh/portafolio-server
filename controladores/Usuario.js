const Usuario = require("../modelos/Usuario");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function crearToken(usuario, SECRET_KEY, expiresIn){

    const payload = {
        ...usuario
    }

    return jwt.sign(payload, SECRET_KEY, {expiresIn});
}  
    


async function obtenerUsuario(){
    try{
        const usuario = await Usuario.findById("605d4ce91dd5d30368757d0b")
        return usuario;

    }
    catch(err){
        console.log(err);
    }

}

async function crearUsuario(input){
    const datosUsuario = input;

    try{
        const salt = bcrypt.genSaltSync(10);
        datosUsuario.contrasena = await bcrypt.hash(datosUsuario.contrasena, salt);

        const usuario = await Usuario.create(datosUsuario);
        usuario.save();

        return usuario;

    }
    catch(err){
        console.log(err);
    }
}

async function loguearse(input){
    const {correo_electronico, contrasena} = input;

    try{
        const usuario = await Usuario.findOne({correo_electronico: correo_electronico});

        if(!usuario) throw new Error("El correo o contrasena son incorrectos");

        const contrasenaExitosa = await bcrypt.compare(contrasena, usuario.contrasena);
        if(!contrasenaExitosa) throw new Error("El correo o contrasena son incorrectos");
    
        return{
            token: crearToken(usuario, process.env.SECRET_KEY, "24h")
        } 

    }
    catch(err){
        console.log(err);
    }
}

async function actualizarUsuario(id, input, usuario){
    if(!usuario) throw new Error("No cuenta con los permisos para hacer esta accion");

    try{
         await Usuario.findByIdAndUpdate(id, {
            ...input,
            updatedAt: Date.now()
        });

        const usuario = await Usuario.findById(id);
        return usuario;

    }
    catch(err){
       console.log(err); 
    }
}

module.exports = {
    obtenerUsuario,
    crearUsuario,
    loguearse,
    actualizarUsuario
}