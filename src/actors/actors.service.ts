import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ActorDto } from './actor.dto';

const prisma = new PrismaClient();
@Injectable()
export class ActorsService {
  async getAllActors(): Promise<ActorDto[]> {
    return prisma.actor.findMany();
  }
  async getActorById(actorId: number): Promise<ActorDto> {
    return prisma.actor.findUnique({ where: { actor_id: actorId } });
  }
  async createActor(actorDto: ActorDto): Promise<ActorDto> {
    return prisma.actor.create({
      data: {
        actor_id: actorDto.actor_id,
        first_name: actorDto.first_name,
        last_name: actorDto.last_name,
        gender: actorDto.gender,
        date_of_birth: actorDto.date_of_birth,
        add_date: actorDto.add_date,
        update_date: actorDto.update_date,
      },
    });
  }
  async updateActor(actorDto: ActorDto): Promise<ActorDto> {
    return prisma.actor.update({
      where: { actor_id: actorDto.actor_id },
      data: {
        actor_id: actorDto.actor_id,
        first_name: actorDto.first_name,
        last_name: actorDto.last_name,
        gender: actorDto.gender,
        date_of_birth: actorDto.date_of_birth,
        add_date: actorDto.add_date,
        update_date: actorDto.update_date,
      },
    });
  }
  async deleteActor(actorDto: ActorDto): Promise<ActorDto> {
    return prisma.actor.update({
      where: { actor_id: actorDto.actor_id },
      data: {
        update_date: actorDto.update_date,
      },
    });
  }
}
