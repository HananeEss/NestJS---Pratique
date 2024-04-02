import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { DirectorsService } from './directors.service';
import { directorDTO } from './director.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Directors')
@Controller('directors')
export class DirectorsController {
  constructor(private readonly directorsService: DirectorsService) {
  }

  @Get('')
  async getAllDirectors(): Promise<directorDTO[]> {
    return this.directorsService.getAllDirectors();
  }

  @Get(':id')
  async getDirectorById(
    @Param('id', ParseIntPipe) directorId: number,
  ): Promise<directorDTO> {
    return this.directorsService.getDirectorById(directorId);
  }

  @Post('')
  @ApiResponse({
    status: 201,
    description: 'The director has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Error director creation' })
  async createDirector(@Body() directorDTO: directorDTO): Promise<directorDTO> {
    return this.directorsService.createDirector(directorDTO);
  }

  @Put('')
  async updateDirector(@Body() directorDTO: directorDTO): Promise<directorDTO> {
    return this.directorsService.updateDirector(directorDTO);
  }

  @Delete('')
  async deleteDirector(@Body() directorDTO: directorDTO): Promise<directorDTO> {
    return this.directorsService.deleteDirector(directorDTO);
  }
}
