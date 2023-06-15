import { Router } from "express";
import LoginController from "../Controller/LoginController";

const router = Router();

const loginController = new LoginController();

router.post('/login', loginController.login);
router.post('/register', loginController.register);
router.get('/getAll', loginController.getAll);
router.put('/update/:id', loginController.update);
router.delete('/delete/:id', loginController.delete);
export default router;
