import { Router } from 'express';
import { getPlates } from '../controllers/plates/get-plates';
import { insertPlate } from '../controllers/plates/insert-plate';
import { deletePlate } from '../controllers/plates/delete-plate';
import { updatePlate } from '../controllers/plates/update-plate';
import { verifyAuth } from '../middlewares/auth';


const plates: Router = Router();

plates.get("/", verifyAuth, getPlates);

plates.post("/", verifyAuth, insertPlate);

plates.delete("/:id", verifyAuth, deletePlate);

plates.post("/:id/edit", verifyAuth, updatePlate);

export default plates;