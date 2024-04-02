import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AuthService } from './auth.service';
import { UserDto } from './auth.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get()
  getUser(): Promise<object> {
    return this.authService.getUser();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): Promise<object> {
    return this.authService.getUserById(id);
  }

  @Post('register')
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully registered.',
  })
  @ApiResponse({ status: 403, description: 'Error user registration' })
  registerUser(@Body() userDto: UserDto) {
    return this.authService.registerUser(userDto);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() userDto: UserDto) {
    return this.authService.updateUser(id, userDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.authService.deleteUser(id);
  }
}
