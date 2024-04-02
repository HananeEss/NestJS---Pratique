import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActorsModule } from './actors/actors.module';
import { DirectorsModule } from './directors/directors.module';
import { MoviesModule } from './movies/movies.module';
import { MoviesRevenuesModule } from './movies_revenues/movies_revenues.module';
@Module({
  imports: [ActorsModule, DirectorsModule, MoviesModule, MoviesRevenuesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
