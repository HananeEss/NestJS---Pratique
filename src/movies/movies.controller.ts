import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { MoviesService } from './movies.service';
import { MovieDto } from './movie.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Movies')
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('')
  async getAllMovies(): Promise<MovieDto[]> {
    return this.moviesService.getAllMovies();
  }

  @Get(':id')
  async getMovieById(
    @Param('id', ParseIntPipe) movieId: number,
  ): Promise<MovieDto> {
    return this.moviesService.getMovieById(movieId);
  }

  @Post('')
  @ApiResponse({
    status: 201,
    description: 'The movie has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Error movie creation' })
  async createMovie(@Body() movieDto: MovieDto): Promise<MovieDto> {
    return this.moviesService.createMovie(movieDto);
  }

  @Put('')
  async updateMovie(@Body() movieDto: MovieDto): Promise<MovieDto> {
    return this.moviesService.updateMovie(movieDto);
  }

  @Delete('')
  async deleteMovie(@Body() movieDto: MovieDto): Promise<MovieDto> {
    return this.moviesService.deleteMovie(movieDto);
  }
}
