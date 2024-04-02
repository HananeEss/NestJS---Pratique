import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { DirectorsService } from '../directors/directors.service';

@Module({
  providers: [MoviesService, DirectorsService],
  controllers: [MoviesController],
})
export class MoviesModule {}
