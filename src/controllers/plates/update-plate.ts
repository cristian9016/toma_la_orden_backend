import { ResponseBody } from '../common/response-body';
import { Request, Response } from 'express';
import { Plate } from '../../services/common/plate';
import { platesService } from '../../services/plates-service';

export function updatePlate(req: Request, res: Response, next) {
    let body: Plate = req.body;
    let id: string = req.params.id;
    platesService.update(id, body)
        .then(result => res.send(new ResponseBody(true, true)))
        .catch(err => res.status(500)
            .send(new ResponseBody(false, null, err)));
}