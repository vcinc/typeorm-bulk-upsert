import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

// https://github.com/typeorm/typeorm/blob/master/test/github-issues/1780/issue-1780.ts
// https://github.com/typeorm/typeorm/commit/706d93fb05978a54243e57754c52d331a6aa063c

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createOrUpdate(user: User[]) {
    return this.usersRepository
      .createQueryBuilder()
      .insert()
      .orUpdate({
        overwrite: ['is_active'],
      })
      .into(User)
      .values(user)
      .execute();
  }
}
