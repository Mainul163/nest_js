import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserDTO } from './dto';

const USERS = [];

@Controller('/demoCrud')
export class DemoCrud {
  @Post()
  addUser(@Body() createUserDto: CreateUserDTO) {
    USERS.push(createUserDto);
    return 'User added';
  }
}
