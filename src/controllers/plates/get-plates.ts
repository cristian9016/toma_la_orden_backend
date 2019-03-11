import { Request, Response } from 'express';
import { platesService } from '../../services/plates-service';
import { ResponseBody } from '../common/response-body';

export function getPlates(req: any, res: Response) {
    let id: string = req.id;
    platesService.getAll(id)
        .then(result => res.send(new ResponseBody(true, result)))
        .catch(err => res.status(500)
            .send(new ResponseBody(false, null, err)));
}