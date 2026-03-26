import { Injectable } from '@nestjs/common';
//import { User } from './users.entity';

@Injectable()
export class UsersService {
  getUser() {
    return {
      name: 'Edgar',
      avatar: 'https://i.pravatar.cc/150',
    };
  }

  /*
  private users: User[] = [];

  //POST -> localhost:3000/users/
  create(user: User): User {
    this.users.push(user);
    return user;
  }

  //GET -> localhost:3000/users
  findAll(): User[] {
    return this.users;
  }

  //GET -> localhost:3000/users/1
  findOne(id: number): User | undefined {
    return this.users.find((user) => user.id === id);
  }*/
}
