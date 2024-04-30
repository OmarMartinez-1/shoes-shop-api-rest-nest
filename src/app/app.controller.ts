import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Controller('app')
export class AppController {

    constructor(private prisma: PrismaService){}

    @Get("/")
    async products (params: Product): Promise<Product[]>{
        
        

    }

}
