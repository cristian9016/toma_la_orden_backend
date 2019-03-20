import { ResponseBody } from '../common/response-body';
import { Request, Response } from 'express';
import { RestauranteService, restauranteService } from '../../services/restaurante-service.1';

export function deleteRestaurant(req: Request, res: Response, next) {
    let id: string = req.params.id;
    restauranteService.delete(id)
        .then(result => res.send(new ResponseBody(true, true)))
        .catch(err => res.status(500)
            .send(new ResponseBody(false, null, err)));
}