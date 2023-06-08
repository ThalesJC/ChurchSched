import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

const errorMiddleware: ErrorRequestHandler = (error, _req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = error;
  console.error(`name: ${name}`);

  switch (name) {
    case 'validationError':
      res.status(400).json({ message: details[0].message });
      break;
      case 'NotFoundError':
        res.status(404).json({ message });
        break;
      case 'ConflictError':
        res.status(409).json({ message });
        break;
    default:
      console.log(error);
      res.sendStatus(500);
  }

  next();
};

export default errorMiddleware;
