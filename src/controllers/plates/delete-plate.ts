import { ResponseBody } from '../common/response-body';
import { Request, Response } from 'express';
import { Plate } from '../../services/common/plate';
import { platesService } from '../../services/plates-service';

export function deletePlate(req: Request, res: Response, next) {
    let id: string = req.params.id;
    platesService.delete(id)
        .then(result => res.send(new ResponseBody(true, true)))
        .catch(err => res.status(500)
            .send(new ResponseBody(false, null, err)));
}