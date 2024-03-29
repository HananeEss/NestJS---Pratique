import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AuthService } from './auth.service';
import { CreateCatDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get()
  getUser() {
    return this.authService.getUser();
  }

  @Post('register')
  registerUser(@Body() createCatDto: CreateCatDto) {
    return this.authService.registerUser(createCatDto);
  }

  @Put(':username')
  updateUser(@Param('username') username: string) {
    return this.authService.updateUser(username);
  }

  @Delete(':username1')
  deleteUser(@Param('username1') username1: string) {
    return this.authService.deleteUser(username1);
  }
}
