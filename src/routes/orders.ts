import { Router } from 'express';
import { verifyAuth } from '../middlewares/auth';
import { insertOrder } from '../controllers/orders/insert-order';
import { getPending, getComplete } from '../controllers/orders/get-orders';
import { updateOrder } from '../controllers/orders/update-order';
import { deleteOrder } from '../controllers/orders/delete-order';


const orders: Router = Router();

orders.get("/:idUsuario/pending", verifyAuth, getPending);

orders.get("/:idUsuario/complete", verifyAuth, getComplete);

orders.post("/", verifyAuth, insertOrder);

orders.post("/:id/edit", verifyAuth, updateOrder);

orders.delete("/:id", verifyAuth, deleteOrder);

export default orders;