import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.input';
import { UpdateUserDto } from './dto/update-user.input';
import { isValidCPF } from '../utils/validate-cpf';
import { formatCpf } from 'src/utils/format-cpf';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    if (!isValidCPF(createUserDto.cpf)) {
      throw new UnauthorizedException('Invalid CPF!');
    }

    createUserDto.cpf = formatCpf(createUserDto.cpf);

    try {
      const newUser = await this.usersService.create(createUserDto);
      return newUser;
    } catch (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Data conflict!');
      }
      throw new Error(err.message);
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    if (updateUserDto.cpf) {
      updateUserDto.cpf = formatCpf(updateUserDto.cpf);

      if (!isValidCPF(updateUserDto.cpf)) {
        throw new UnauthorizedException('Invalid CPF!');
      }
    }

    try {
      const user = await this.usersService.update(id, updateUserDto);
      if (user) {
        return user;
      }
    } catch (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Data conflict!');
      }
      throw new Error(err.message);
    }
    throw new NotFoundException('User not exists!');
  }

  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    return users;
  }

  @Get(':id')
  async getOne(@Param('id') id: number): Promise<User> {
    const user = await this.usersService.findOne(id);

    if (!user) {
      throw new NotFoundException('User not exists!');
    }

    return user;
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<User> {
    const user = await this.usersService.delete(id);

    if (!user) {
      throw new NotFoundException('User not exists!');
    }

    return user;
  }
}
