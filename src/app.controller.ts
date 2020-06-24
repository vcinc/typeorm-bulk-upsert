import { Controller, Post } from '@nestjs/common';
import { UsersService } from './user/user.service';
import { User } from './user/user.entity';

@Controller()
export class AppController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  getHello() {
    const users = [
      new User({
        socialSecurityNumber: 'abc',
        specialCode: '123',
        isActive: true,
      }),
      new User({
        socialSecurityNumber: 'def',
        specialCode: '456',
        isActive: true,
      }),
    ];
    return this.userService.createOrUpdate(users);
  }
}
