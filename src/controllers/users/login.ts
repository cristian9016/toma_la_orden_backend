import { userService } from '../../services/user-service';
import { ResponseBody } from '../common/response-body';
import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { config } from './../../config/global';
var md5 = require('md5');

/**
 * @apiDefine LoginBody
 * @apiParam {Object} Credenciales Objeto Json
 * @apiParam {String} Credenciales.email Email de usuario
 * @apiParam {String} Credenciales.password Password de usuario
 */
export interface LoginBody {
    email: string;
    password: string;
}

export function login(req: Request, res: Response, next) {
    let body: LoginBody = req.body;
    body.password = md5(body.password);
    userService.login(body.email, body.password)
        .then(result => {
            if (result) {
                let token = sign({ id: result._id }, config.secret, { expiresIn: "1h" });
                let rol = result.rol;
                res.send(new ResponseBody(true, { token, rol }));
            }
            else res.send(new ResponseBody(false));
        })
        .catch(err => res.status(500)
            .send(new ResponseBody(false, null, err)));
}