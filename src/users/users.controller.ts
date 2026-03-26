import {
  Controller,
  Get,
  UnauthorizedException,
  Headers,
} from '@nestjs/common';
import { UsersService } from './users.service';
//import { User } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUser(@Headers('authorization') auth: string) {
    const token = auth.replace('Bearer ', '');

    if (token !== 'meu-token') {
      throw new UnauthorizedException('token-invalido');
    }

    return this.usersService.getUser();
  }
  /*
  @Post()
  create(@Body() user: User) {
    return this.usersService.create(user);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(Number(id));
  } */
}
