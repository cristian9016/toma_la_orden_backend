import { ResponseBody } from '../common/response-body';
import { Request, Response } from 'express';
import { Restaurante } from '../../services/common/restaurante';
import { restauranteService } from '../../services/restaurante-service.1';

export function insertRestaurant(req: any, res: Response, next) {
    let body: Restaurante = req.body;
    let idDueno = req.id;
    body.idDueno = idDueno;
    restauranteService.insert(body)
        .then(result => res.send(new ResponseBody(true, true)))
        .catch(err => res.status(500)
            .send(new ResponseBody(false, null, err)));
}