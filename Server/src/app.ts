import 'express-async-errors';
import express, { Request, Response } from 'express';
import {StatusCodes} from 'http-status-codes';

const app = express();

app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  return res.status(StatusCodes.OK).send('Hello World!');
});

export default app;
