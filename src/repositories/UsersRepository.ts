import api from '../providers/axios';

interface IUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

class UsersRepository {
  async GetUser(): Promise<Array<IUsers>> {
    const { data } = await api.get('users');

    return data;
  }
}

export default UsersRepository;
