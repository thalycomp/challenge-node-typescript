import { Request, Response } from 'express';
import GetUserUC from './GetUserUC';

class GetUserController {
  getUserUC: GetUserUC;

  constructor(getPostsUC: GetUserUC) {
    this.getUserUC = getPostsUC;
  }

  async handle(req: Request, res: Response) {
    try {
      const response = await this.getUserUC.execute();

      return res.status(200).send(response);
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  }
}

export default GetUserController;
