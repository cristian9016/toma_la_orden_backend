import { ResponseBody } from '../common/response-body';
import { Request, Response } from 'express';
import { Plate } from '../../services/common/plate';
import { platesService } from '../../services/plates-service';

export function insertPlate(req: any, res: Response, next) {
    let body: Plate = req.body;
    let idUsuario = req.id;
    body.idUsuario = idUsuario;
    platesService.insert(body)
        .then(result => res.send(new ResponseBody(true, true)))
        .catch(err => res.status(500)
            .send(new ResponseBody(false, null, err)));
}