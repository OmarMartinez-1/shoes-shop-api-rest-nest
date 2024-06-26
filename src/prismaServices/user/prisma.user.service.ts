import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/app/prisma.service';
import { User, Prisma } from '@prisma/client'

@Injectable()
export class PrismaUserService {
    constructor(private prisma: PrismaService) { }

    async user(
        userWhereUniqueInput: Prisma.UserWhereUniqueInput,
    ): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: userWhereUniqueInput,
        });
    }

    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        return this.prisma.user.create({
          data,
        });
      }

}
