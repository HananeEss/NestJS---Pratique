import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { MoviesRevenuesService } from './movies_revenues.service';
import { MoviesRevenuesDTO } from './movies_revenues.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Movies Revenues')
@Controller('movies-revenues')
export class MoviesRevenuesController {
  constructor(private readonly moviesRevenuesService: MoviesRevenuesService) {}
  @Get('')
  async getAllMoviesRevenues(): Promise<MoviesRevenuesDTO[]> {
    return this.moviesRevenuesService.getAllMoviesRevenues();
  }
  @Get(':id')
  async getMoviesRevenuesById(
    @Param('id', ParseIntPipe) movieRevenuesId: number,
  ): Promise<MoviesRevenuesDTO> {
    return this.moviesRevenuesService.getMoviesRevenuesById(movieRevenuesId);
  }
  @Post('')
  @ApiResponse({
    status: 201,
    description: 'The movie Revenue has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Error movie Revenue creation' })
  async createMovieRevenues(
    @Body() moviesRevenuesDTO: MoviesRevenuesDTO,
  ): Promise<MoviesRevenuesDTO> {
    return this.moviesRevenuesService.createMovieRevenues(moviesRevenuesDTO);
  }
  @Put('')
  async updateMovieRevenues(@Body() moviesRevenuesDTO: MoviesRevenuesDTO): Promise<MoviesRevenuesDTO> {
    return this.moviesRevenuesService.updateMovieRevenues(moviesRevenuesDTO);
  }

  @Delete('')
  async deleteMovieRevenues(@Body() moviesRevenuesDTO: MoviesRevenuesDTO): Promise<MoviesRevenuesDTO> {
    return this.moviesRevenuesService.deleteMovieRevenues(moviesRevenuesDTO);
  }
}
