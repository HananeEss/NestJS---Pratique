import { ApiProperty } from '@nestjs/swagger';

export class directorDTO {
  @ApiProperty()
  director_id: number;
  @ApiProperty()
  first_name: string;
  @ApiProperty()
  last_name: string;
  @ApiProperty()
  date_of_birth: Date;
  @ApiProperty()
  nationality: string;
  @ApiProperty()
  add_date: Date;
  @ApiProperty()
  update_date: Date;
}
