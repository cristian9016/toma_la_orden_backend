import { ResponseBody } from '../common/response-body';
import { Request, Response } from 'express';
import { Restaurante } from '../../services/common/restaurante';
import { restauranteService } from '../../services/restaurante-service.1';

export function updateRestaurante(req: Request, res: Response, next) {
    let body: Restaurante = req.body;
    delete body._id;
    let id: string = req.params.id;
    restauranteService.update(id, body)
        .then(result => res.send(new ResponseBody(true, true)))
        .catch(err => res.status(500)
            .send(new ResponseBody(false, null, err)));
}