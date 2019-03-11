import { userService } from '../../services/user-service';
import { User } from '../../services/common/user';
import { ResponseBody } from '../common/response-body';
import { Request, Response } from 'express';
var md5 = require('md5');

export function signin(req: Request, res: Response, next) {
    let body: User = req.body;
    body.password = md5(body.password);
    userService.signin(body)
        .then(result => res.send(new ResponseBody(true,true)))
        .catch(err => res.status(500)
            .send(new ResponseBody(false, null, err)));
}