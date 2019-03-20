
/**
 * @apiDefine User
 * @apiParam {Object} Usuario Objeto Json
 * @apiParam {String} Usuario._id Identificador de usuario, ignorar en registro
 * @apiParam {String} Usuario.nombre Nombre del usuario
 * @apiParam {String} Usuario.email Email del usuario
 * @apiParam {String} Usuario.celular celular del usuario
 * @apiParam {String} Usuario.password Password del usuario
 * @apiParam {String} Usuario.rol Rol del usuario
 */

export class User{
    _id?:string;
    nombre:string;
    email:string;
    celular:string;
    password:string;
    rol:string;
    restaurante?:string;
}