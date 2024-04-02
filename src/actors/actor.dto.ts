import { ApiProperty } from '@nestjs/swagger';

export class ActorDto {
  @ApiProperty()
  actor_id: number;
  @ApiProperty()
  first_name: string;
  @ApiProperty()
  last_name: string;
  @ApiProperty()
  gender: string;
  @ApiProperty()
  date_of_birth: Date;
  @ApiProperty()
  add_date: Date;
  @ApiProperty()
  update_date: Date;
}
