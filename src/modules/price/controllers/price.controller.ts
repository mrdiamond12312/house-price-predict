import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';

import { PredictInputDto } from '@/modules/price/domains/dtos/request/predict-input.dto';
import { PriceService } from '@/modules/price/services/price.service';

@Controller('price')
export class PriceController {
  constructor(private readonly priceService: PriceService) {}

  @HttpCode(HttpStatus.OK)
  @Get('predict')
  async pricePredict(@Query() predictInput: PredictInputDto) {
    return await this.priceService.predict(predictInput);
  }
}
