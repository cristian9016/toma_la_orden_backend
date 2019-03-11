import { ResponseBody } from '../common/response-body';
import { Request, Response } from 'express';
import { Plate } from '../../services/common/plate';
import { platesService } from '../../services/plates-service';
import { Orden } from '../../services/common/orden';
import { orderService } from '../../services/order-service';

export function insertOrder(req: any, res: Response, next) {
    let body: Orden = req.body;
    let idUsuario = req.id;
    body.idUsuario = idUsuario;
    orderService.insert(body)
        .then(result => res.send(new ResponseBody(true, true)))
        .catch(err => res.status(500)
            .send(new ResponseBody(false, null, err)));
}