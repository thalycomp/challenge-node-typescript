import api from '../providers/axios';

interface IPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

class PostsRepository {
  async GetPosts(): Promise<Array<IPosts>> {
    const { data } = await api.get('posts');

    return data;
  }
}

export default PostsRepository;
