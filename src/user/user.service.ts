import { Injectable } from '@nestjs/common';

import { IUser } from './user.interface';

@Injectable()
export class UserService {
  private readonly users: IUser[] = [];
  create(user: IUser) {
    return this.users.push(user);
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user: IUser) => user.id === id);
  }

  update(id: number, data: Partial<IUser>) {
    return this.users.map((user: IUser) =>
      user.id === id ? { ...user, ...data } : user,
    );
  }

  remove(id: number) {
    return this.users.filter((user: IUser) => user.id !== id);
  }
}
