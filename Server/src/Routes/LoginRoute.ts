import { Router } from "express";
import LoginController from "../Controller/LoginController";

const router = Router();

const loginController = new LoginController();

router.post('/login', loginController.login);
router.post('/register', loginController.register);
router.get('/getAll', loginController.getAll);
router.put('/update', loginController.update);
router.delete('/delete', loginController.delete);
export default router;
