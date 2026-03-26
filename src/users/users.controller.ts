import {
  Controller,
  Get,
  UnauthorizedException,
  Headers,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUser(@Headers('authorization') auth: string) {
    if (!auth) {
      throw new UnauthorizedException('Token não fornecido');
    }

    const token = auth.replace('Bearer ', '');

    if (token !== 'meu-token') {
      throw new UnauthorizedException('token-invalido');
    }

    return this.usersService.getUser();
  }
}
