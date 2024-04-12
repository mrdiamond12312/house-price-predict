import { Module } from '@nestjs/common';

import { PriceController } from '@/modules/price/controllers/price.controller';
import { PriceService } from '@/modules/price/services/price.service';

@Module({
  providers: [PriceService],
  controllers: [PriceController],
})
export class PriceModule {}
