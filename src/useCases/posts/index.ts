import PostsRepositories from '../../repositories/PostsRepository';

import GetPostsAFromUserController from './GetPostsAFromUser/GetPostsAFromUserController';
import GetPostsAFromUserUC from './GetPostsAFromUser/GetPostsAFromUserUC';

const postsRepository = new PostsRepositories();

const getPostsAFromUserUC = new GetPostsAFromUserUC(postsRepository);
const getPostsAFromUserController = new GetPostsAFromUserController(
  getPostsAFromUserUC
);

export default {
  getPostsAFromUserController,
};
