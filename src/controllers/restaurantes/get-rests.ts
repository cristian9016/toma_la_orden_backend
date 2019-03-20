import { Request, Response } from 'express';
import { ResponseBody } from '../common/response-body';
import { restauranteService } from '../../services/restaurante-service.1';

export function getRestaurants(req: any, res: Response) {
    let id: string = req.id;
    restauranteService.getAll(id)
        .then(result => res.send(new ResponseBody(true, result)))
        .catch(err => res.status(500)
            .send(new ResponseBody(false, null, err)));
}