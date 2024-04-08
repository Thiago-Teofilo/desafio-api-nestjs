import { Injectable, Inject } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.input';
import { UpdateUserDto } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async create(user: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(user);
    return await this.userRepository.save(newUser);
  }

  async update(id: number, data: UpdateUserDto): Promise<User> {
    const userToUpdate = await this.userRepository.findOneBy({ id });

    if (!userToUpdate) {
      return null;
    }

    Object.assign(userToUpdate, data);
    return await this.userRepository.save(userToUpdate);
  }

  async findAll(): Promise<User[]> {
    const users = await this.userRepository.find();

    return users;
  }

  async findOne(id: number): Promise<User | null> {
    const user = await this.userRepository.findOneBy({
      id,
    });

    if (user) {
      return user;
    }
    return null;
  }

  async delete(id: number): Promise<User | null> {
    const user = await this.userRepository.findOneBy({
      id,
    });

    if (user) {
      await this.userRepository.delete(user);
      return user;
    }
    return null;
  }
}
