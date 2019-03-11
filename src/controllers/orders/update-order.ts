import { ResponseBody } from '../common/response-body';
import { Request, Response } from 'express';
import { Orden } from '../../services/common/orden';
import { orderService } from '../../services/order-service';

export function updateOrder(req: Request, res: Response, next) {
    let body: Orden = req.body;
    delete body._id;
    let id: string = req.params.id;
    orderService.update(id, body)
        .then(result => res.send(new ResponseBody(true, true)))
        .catch(err => res.status(500)
            .send(new ResponseBody(false, null, err)));
}