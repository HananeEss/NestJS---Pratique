import { Injectable } from '@nestjs/common';
import { directorDTO } from './director.dto';
import { PrismaClient } from '@prisma/client';
import { MovieDto } from "../movies/movie.dto";

const prisma = new PrismaClient();
@Injectable()
export class DirectorsService {
  async getAllDirectors(): Promise<directorDTO[]> {
    return prisma.director.findMany();
  }
  async getDirectorById(directorId: number): Promise<directorDTO> {
    return prisma.director.findUnique({ where: { director_id: directorId } });
  }
  async createDirector(directorDTO: directorDTO): Promise<directorDTO> {
    return prisma.director.create({
      data: {
        director_id: directorDTO.director_id,
        first_name: directorDTO.first_name,
        last_name: directorDTO.last_name,
        date_of_birth: directorDTO.date_of_birth,
        nationality: directorDTO.nationality,
        add_date: directorDTO.add_date,
        update_date: directorDTO.update_date,
      },
    });
  }
  async updateDirector(directorDTO: directorDTO): Promise<directorDTO> {
    return prisma.director.update({
      where: { director_id: directorDTO.director_id },
      data: {
        director_id: directorDTO.director_id,
        first_name: directorDTO.first_name,
        last_name: directorDTO.last_name,
        date_of_birth: directorDTO.date_of_birth,
        nationality: directorDTO.nationality,
        add_date: directorDTO.add_date,
        update_date: directorDTO.update_date,
      },
    });
  }
  async deleteDirector(directorDTO: directorDTO): Promise<directorDTO> {
    return prisma.director.update({
      where: { director_id: directorDTO.director_id },
      data: {
        update_date: directorDTO.update_date,
      },
    });
  }
}
