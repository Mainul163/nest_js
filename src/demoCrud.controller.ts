import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateUserDTO } from './dto';

let USERS = [];

@Controller('/demoCrud')
export class DemoCrud {
  @Post()
  addUser(@Body() createUserDto: CreateUserDTO) {
    USERS.push(createUserDto);
    return 'User added';
  }

  @Get()
  getUser() {
    return USERS;
  }

  @Get(':id')
  getUserBYId(@Param('id') id: number) {
    return USERS.find((user) => user.id === id);
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() updateUserDTO: CreateUserDTO) {
    const userIdx = USERS.findIndex((user) => user.id === id);

    if (!userIdx) {
      return;
    }
    USERS[userIdx] = updateUserDTO;
  }
  @Delete('id')
  deleteUser(@Param('id') id: number) {
    USERS = USERS.filter((user) => user.id === id);
  }
}
