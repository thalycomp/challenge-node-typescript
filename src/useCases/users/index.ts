import UsersRepositories from '../../repositories/UsersRepository';

import GetUserController from './GetUsers/GetUserController';
import GetUserUC from './GetUsers/GetUserUC';

const usersRepository = new UsersRepositories();

const getUserUC = new GetUserUC(usersRepository);
const getUserController = new GetUserController(getUserUC);

export default {
  getUserController,
};
