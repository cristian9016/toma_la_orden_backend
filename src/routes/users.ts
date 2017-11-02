import { Router } from 'express';
import { login, signin } from '../controllers/users/index';


const users: Router = Router();
/**
 * @api {POST} /api/v1/users/login Inicio de Sesion
 * @apiName Login
 * @apiGroup Usuarios
 * @apiVersion 1.0.0
 * 
 * @apiUse LoginBody
 * 
 * @apiSuccess {Object} Respuesta Objeto JSON
 * @apiSuccess {Boolean} Respuesta.success True sin las credenciales son correctas
 * @apiSuccess {String} Respuesta.data Token de sesion de usuario 
 * 
 * 
 */

//apidoc -i src/
users.post("/login", login);

/**
 * * @api {POST} /api/v1/users/singin Registro de usuario
 * @apiName Signin
 * @apiGroup Usuarios
 * @apiVersion 1.0.0
 * 
 * @apiUse User
 * 
 * @apiSuccess {Object} Respuesta Objeto JSON
 * @apiSuccess {Boolean} Respuesta.success True si el usuario se registro correctamente
 * 
 */
users.post("/signin", signin);

export default users;
