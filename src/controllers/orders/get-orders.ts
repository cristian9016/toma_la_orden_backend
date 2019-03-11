import { Request, Response } from 'express';
import { ResponseBody } from '../common/response-body';
import { orderService } from '../../services/order-service';

export function getComplete(req: any, res: Response) {
    let id: string = req.id;
    orderService.getComplete(id)
        .then(result => res.send(new ResponseBody(true, result)))
        .catch(err => res.status(500)
            .send(new ResponseBody(false, null, err)));
}

export function getPending(req: any, res: Response) {
    let id: string = req.id;
    orderService.getPending(id)
        .then(result => res.send(new ResponseBody(true, result)))
        .catch(err => res.status(500)
            .send(new ResponseBody(false, null, err)));
}