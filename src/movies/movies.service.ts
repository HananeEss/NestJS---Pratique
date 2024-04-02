import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { MovieDto } from './movie.dto';

const prisma = new PrismaClient();
@Injectable()
export class MoviesService {
  async getAllMovies(): Promise<MovieDto[]> {
    return prisma.movie.findMany();
  }
  async getMovieById(movieId: number): Promise<MovieDto> {
    return prisma.movie.findUnique({ where: { movie_id: movieId } });
  }
  async createMovie(movieDto: MovieDto): Promise<MovieDto> {
    return prisma.movie.create({
      data: {
        movie_id: movieDto.movie_id,
        movie_name: movieDto.movie_name,
        movie_length: movieDto.movie_length,
        movie_lang: movieDto.movie_lang,
        age_certificate: movieDto.age_certificate,
        release_date: movieDto.release_date,
        director_id: movieDto.director_id,
      },
    });
  }
  async updateMovie(movieDto: MovieDto): Promise<MovieDto> {
    return prisma.movie.update({
      where: { movie_id: movieDto.movie_id },
      data: {
        movie_id: movieDto.movie_id,
        movie_name: movieDto.movie_name,
        movie_length: movieDto.movie_length,
        movie_lang: movieDto.movie_lang,
        age_certificate: movieDto.age_certificate,
        release_date: movieDto.release_date,
        director_id: movieDto.director_id,
      },
    });
  }
  async deleteMovie(movieDto: MovieDto): Promise<MovieDto> {
    return prisma.movie.update({
      where: { movie_id: movieDto.movie_id },
      data: {
        release_date: movieDto.release_date,
      },
    });
  }
}
