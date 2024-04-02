import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ActorsService } from './actors.service';
import { ActorDto } from './actor.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Actors')
@Controller('actors')
export class ActorsController {
  constructor(private readonly actorsService: ActorsService) {}
  @Get()
  async getAllActors(): Promise<ActorDto[]> {
    return this.actorsService.getAllActors();
  }
  @Get(':id')
  async getActorById(
    @Param('id', ParseIntPipe) actorId: number,
  ): Promise<ActorDto> {
    return this.actorsService.getActorById(actorId);
  }
  @Post('')
  @ApiResponse({
    status: 201,
    description: 'The actor has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Error actor creation' })
  async createActor(@Body() actorDto: ActorDto): Promise<ActorDto> {
    return this.actorsService.createActor(actorDto);
  }
  @Put('')
  async updateActor(@Body() actorDto: ActorDto): Promise<ActorDto> {
    return this.actorsService.updateActor(actorDto);
  }
  @Delete('')
  async deleteActor(@Body() actorDto: ActorDto): Promise<ActorDto> {
    return this.actorsService.deleteActor(actorDto);
  }
}
