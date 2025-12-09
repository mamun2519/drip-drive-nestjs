import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
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

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
