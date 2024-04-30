import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/app/prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class PrismaProductService {

    constructor(private prisma: PrismaService) { }

    async products(params: {
        id?: String;
        name?: String;
        price?: Number;
        brand?: String;
        category?: String;
    }): Promise<Product[]> {
        const { id, name, price, brand, category, } = params;
        return this.prisma.product.findMany({
            
            select: {
                
                id,
                name,
                price,
                brand,
                category,

            }
        });
    }

}
