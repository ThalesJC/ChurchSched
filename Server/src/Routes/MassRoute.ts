import { Router } from "express";
import MassController from "../Controller/MassController";

const router = Router();

const massController = new MassController();

router.post('/newmass', massController.newMass);
router.get('/getallmass', massController.allMass);
router.put('/updatemass/:id', massController.updateMass);
router.delete('/deletemass/:id', massController.deleteMass);

export default router;