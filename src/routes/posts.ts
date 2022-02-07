import { Router, Request, Response } from 'express';
import posts from '../useCases/posts';

const routes = Router();

routes.get('/posts/:userId', (req: Request, res: Response) => {
  return posts.getPostsAFromUserController.handle(req, res);
});

export default routes;
