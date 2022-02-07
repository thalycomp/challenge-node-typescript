import { Request, Response } from 'express';
import GetPostsAFromUserUC from './GetPostsAFromUserUC';

class GetPostsAFromUserController {
  getPostsUC: GetPostsAFromUserUC;

  constructor(getPostsUC: GetPostsAFromUserUC) {
    this.getPostsUC = getPostsUC;
  }

  async handle(req: Request, res: Response) {
    const { userId } = req.params;

    try {
      const response = await this.getPostsUC.execute(Number(userId));

      return res.status(200).send(response);
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  }
}

export default GetPostsAFromUserController;
