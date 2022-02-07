import { Router, Request, Response } from 'express';
import users from '../useCases/users';

const routes = Router();

routes.get('/users', (req: Request, res: Response) => {
  return users.getUserController.handle(req, res);
});

export default routes;
