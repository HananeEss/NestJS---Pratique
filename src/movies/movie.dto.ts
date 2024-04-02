import { ApiProperty } from '@nestjs/swagger';

export class MovieDto {
  @ApiProperty()
  movie_id: number;
  @ApiProperty()
  movie_name: string;
  @ApiProperty()
  movie_length: number;
  @ApiProperty()
  movie_lang: string;
  @ApiProperty()
  age_certificate: string;
  @ApiProperty()
  release_date: Date;
  @ApiProperty()
  director_id: number;
}