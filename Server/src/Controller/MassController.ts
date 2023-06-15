import { Request, Response } from "express";
import MassService from "../Service/MassService";

const service = new MassService();

export default class MassController {
  public newMass = async (req: Request, res: Response) => {};

  public allMass = async (_req: Request, res: Response) => {};

  public updateMass = async (req: Request, res: Response) => {};

  public deleteMass = async (req: Request, res: Response) => {};
}
