import PostsRepository from '../../../repositories/PostsRepository';

class GetPostsAFromUseCase {
  postsRepository: PostsRepository;
  constructor(repository: PostsRepository) {
    this.postsRepository = repository;
  }

  async execute(userId: number) {
    const response = await this.postsRepository.GetPosts();

    const allUserPosts = response.filter((u) => u.userId === userId);

    return allUserPosts;
  }
}

export default GetPostsAFromUseCase;
