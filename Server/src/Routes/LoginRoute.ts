import { Router } from "express";
import LoginController from "../Controller/LoginController";

const router = Router();

const loginController = new LoginController();

router.post('/', loginController.login);
// router.get('/', loginController.teste)

export default router;
