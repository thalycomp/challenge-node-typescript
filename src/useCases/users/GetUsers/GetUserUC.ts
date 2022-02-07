import UsersRepository from '../../../repositories/UsersRepository';

class GetUserUseCase {
  usersRepository: UsersRepository;
  constructor(repository: UsersRepository) {
    this.usersRepository = repository;
  }

  async execute() {
    const response = await this.usersRepository.GetUser();

    const usersBelongingToGroups = response.filter((u) =>
      u.company.name.toUpperCase().includes('GROUP')
    );

    return usersBelongingToGroups;
  }
}

export default GetUserUseCase;
