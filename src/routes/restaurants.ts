import { Router } from 'express';
import { verifyAuth } from '../middlewares/auth';
import { insertRestaurant } from '../controllers/restaurantes/insert-rest';
import { deleteRestaurant } from '../controllers/restaurantes/delete-rest';
import { getRestaurants } from '../controllers/restaurantes/get-rests';
import { updateRestaurante } from '../controllers/restaurantes/update-rest';


const restaurants: Router = Router();

restaurants.get("/", verifyAuth, getRestaurants);

restaurants.post("/", verifyAuth, insertRestaurant);

restaurants.delete("/:id", verifyAuth, deleteRestaurant);

restaurants.post("/:id/edit", verifyAuth, updateRestaurante);

export default restaurants;