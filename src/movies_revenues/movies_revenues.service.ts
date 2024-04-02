import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { MoviesRevenuesDTO } from './movies_revenues.dto';

const prisma = new PrismaClient();

@Injectable()
export class MoviesRevenuesService {
  async getAllMoviesRevenues(): Promise<MoviesRevenuesDTO[]> {
    return prisma.moviesRevenues.findMany();
  }
  async getMoviesRevenuesById(
    movieRevenuesId: number,
  ): Promise<MoviesRevenuesDTO> {
    return prisma.moviesRevenues.findUnique({ where: { revenue_id: movieRevenuesId } });
  }
  async createMovieRevenues(
    moviesRevenuesDTO: MoviesRevenuesDTO,
  ): Promise<MoviesRevenuesDTO> {
    return prisma.moviesRevenues.create({
      data: {
        revenue_id: moviesRevenuesDTO.revenue_id,
        movie_id: moviesRevenuesDTO.movie_id,
        revenues_domestic: moviesRevenuesDTO.revenues_domestic,
        revenues_international: moviesRevenuesDTO.revenues_international,
      },
    });
  }
  async updateMovieRevenues(
    moviesRevenuesDTO: MoviesRevenuesDTO,
  ): Promise<MoviesRevenuesDTO> {
    return prisma.moviesRevenues.update({
      where: { revenue_id: moviesRevenuesDTO.revenue_id },
      data: {
        revenue_id: moviesRevenuesDTO.revenue_id,
        movie_id: moviesRevenuesDTO.movie_id,
        revenues_domestic: moviesRevenuesDTO.revenues_domestic,
        revenues_international: moviesRevenuesDTO.revenues_international,
      },
    });
  }
  async deleteMovieRevenues(
    moviesRevenuesDTO: MoviesRevenuesDTO,
  ): Promise<MoviesRevenuesDTO> {
    return prisma.moviesRevenues.update({
      where: { revenue_id: moviesRevenuesDTO.revenue_id },
      data: {
        revenues_domestic: moviesRevenuesDTO.revenues_domestic,
      },
    });
  }
}
