import { ResponseBody } from '../common/response-body';
import { Request, Response } from 'express';
import { orderService } from '../../services/order-service';

export function deleteOrder(req: Request, res: Response, next) {
    let id: string = req.params.id;
    orderService.delete(id)
        .then(result => res.send(new ResponseBody(true, true)))
        .catch(err => res.status(500)
            .send(new ResponseBody(false, null, err)));
}