import { Module } from '@nestjs/common';
import { MoviesService } from '../movies/movies.service';
import { MoviesRevenuesService } from './movies_revenues.service';
import { MoviesRevenuesController } from './movies_revenues.controller';

@Module({
  providers: [MoviesRevenuesService, MoviesService],
  controllers: [MoviesRevenuesController],
})
export class MoviesRevenuesModule {}
