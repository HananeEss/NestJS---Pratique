import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './auth.dto';

@Injectable()
export class AuthService {
  private users = [];

  async getUser(): Promise<object> {
    return this.users;
  }

  async registerUser(createCatDto: CreateCatDto): Promise<string> {
    const user = createCatDto;
    this.users.push(user);
    return `user enregistré : ${user.username}`;
  }
  async updateUser(username: string): Promise<string> {
    return `user ${username} mis à jour`;
  }

  async deleteUser(username1: string): Promise<string> {
    this.users.filter((user) => user.username !== username1);
    return 'user supprimé ';
  }
}
