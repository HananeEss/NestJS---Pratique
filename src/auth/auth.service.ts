import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UserDto } from './auth.dto';

@Injectable()
export class AuthService {
  private users = [];

  async getUser(): Promise<object> {
    return this.users;
  }

  async getUserById(id: string): Promise<object> {
    return this.users.find((user) => user.id === id);
  }

  async registerUser(userDto: UserDto): Promise<object> {
    const newUser = { id: uuidv4(), ...userDto };
    this.users.push(newUser);
    return newUser;
  }

  async updateUser(id: string, userDto: UserDto): Promise<string> {
    const userIndex = this.users.findIndex((user) => user.id === id);
    this.users[userIndex] = { id, ...userDto };
    return 'Utilisateur mis à jour avec succès';
  }

  async deleteUser(id: string): Promise<string> {
    this.users = this.users.filter((user) => user.id !== id);
    return 'user supprimé';
  }
}
