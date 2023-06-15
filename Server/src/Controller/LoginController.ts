import { Request, Response } from "express";
import {StatusCodes} from 'http-status-codes';
import LoginService from "../Service/LoginService";

const service = new LoginService();

export default class LoginController {
  public login = async (req: Request, res: Response) => {
    const { name, phoneNum } = req.body;
    const response = await service.login({ name, phoneNum });
    
    res.status(StatusCodes.OK).json(response);
  };

  public register = async (req: Request, res: Response) => {
    const { name, phoneNum } = req.body;
    const response = await service.register({ name, phoneNum });
    
    res.status(StatusCodes.CREATED).json(response);
  };

  public getAll = async (_req: Request, res: Response) => {
    const response = await service.getAll();
    
    res.status(StatusCodes.OK).json(response);
  };

  public update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, phoneNum } = req.body;
    const response = await service.update({ id, name, phoneNum });
    
    res.status(StatusCodes.OK).json(response);
  };

  public delete = async (req: Request, res: Response) => {
    const { id } = req.params;
    const response = await service.delete(id);
    
    res.status(StatusCodes.NO_CONTENT).json(response);
  };
};