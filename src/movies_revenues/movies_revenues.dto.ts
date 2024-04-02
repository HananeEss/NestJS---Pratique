import { ApiProperty } from '@nestjs/swagger';

export class MoviesRevenuesDTO {
  @ApiProperty()
  revenue_id: number;
  @ApiProperty()
  movie_id: number;
  @ApiProperty()
  revenues_domestic: number;
  @ApiProperty()
  revenues_international: number;
}
