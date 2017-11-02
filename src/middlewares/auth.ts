import { verify } from 'jsonwebtoken';
import { config } from './../config/global';
import { Request, Response } from 'express';
import { resFail } from './../controllers/common/response-body'

export function verifyAuth(req: any, res: Response, next) {
    let token = req.get('Authorization');
    verify(token, config.secret, (err, data) => {
        if (err) {
            resFail(res,401,"usuario no autorizado");
        }else{
            let payload:any = data;
            req.id = payload.id;
            next();
        }
    });

}