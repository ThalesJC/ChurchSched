import 'express-async-errors';
import express, { Request, Response } from 'express';
import {StatusCodes} from 'http-status-codes';
import errorMiddleware from './Middlewares/errorMiddleware';
import loginRouter from './Routes/LoginRoute';

const app = express();

app.use(express.json());
app.use(loginRouter);

app.get('/', (_req: Request, res: Response) => {
  return res.status(StatusCodes.OK).send('Hello World!');
});

app.use(errorMiddleware);

export default app;
