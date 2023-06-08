import { Request, Response } from "express";
import LoginService from "../Service/LoginService";

const service = new LoginService();

export default class LoginController {
  public login = async (req: Request, res: Response) => {
    const { name, phoneNumber } = req.body;
    const response = await service.login({ name, phoneNumber });
    console.log(response);
    
    res.status(200).json(response);
  };

  // public teste = async (req: Request, res: Response) => {
  //   const response = await service.teste();
  //   const response = "teste"
  //   console.log("camada CONTROLLER", response);
    
  //   res.status(200).send('teste')
  // };

};