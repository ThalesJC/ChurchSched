import { Request, Response } from "express";
import {StatusCodes} from 'http-status-codes';
import LoginService from "../Service/LoginService";

const service = new LoginService();

export default class LoginController {
  public login = async (req: Request, res: Response) => {
    const { name, phoneNumber } = req.body;
    const response = await service.login({ name, phoneNumber });
    
    res.status(StatusCodes.OK).json(response);
  };

  public register = async (req: Request, res: Response) => {
    const { name, phoneNumber } = req.body;
    const response = await service.register({ name, phoneNumber });
    
    res.status(StatusCodes.CREATED).json(response);
  };

  public getAll = async (_req: Request, res: Response) => {
    const response = await service.getAll();
    
    res.status(StatusCodes.OK).json(response);
  };

  public update = async (req: Request, res: Response) => {
    const { name, phoneNumber } = req.body;
    const response = await service.update({ name, phoneNumber });
    
    res.status(StatusCodes.OK).json(response);
  };

  public delete = async (req: Request, res: Response) => {
    const { id } = req.body;
    const response = await service.delete(id);
    
    res.status(StatusCodes.NO_CONTENT).json(response);
  };
};