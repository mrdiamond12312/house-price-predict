import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

export class PredictInputDto {
  @ApiPropertyOptional()
  @IsNumberString()
  month?: number;

  @ApiPropertyOptional()
  @IsNumberString()
  year?: number;

  @ApiPropertyOptional()
  @IsNumberString()
  bedrooms?: number;

  @ApiPropertyOptional()
  @IsNumberString()
  bathrooms?: number;

  @ApiPropertyOptional()
  @IsNumberString()
  sqft_living?: number;

  @ApiPropertyOptional()
  @IsNumberString()
  sqft_lot?: number;

  @ApiPropertyOptional()
  @IsNumberString()
  floors?: number;

  @ApiPropertyOptional()
  @IsNumberString()
  waterfront?: number;

  @ApiPropertyOptional()
  @IsNumberString()
  view?: number;

  @ApiPropertyOptional()
  @IsNumberString()
  condition?: number;

  @ApiPropertyOptional()
  @IsNumberString()
  grade?: number;

  @ApiPropertyOptional()
  @IsNumberString()
  sqft_above?: number;

  @ApiPropertyOptional()
  @IsNumberString()
  sqft_basement?: number;

  @ApiPropertyOptional()
  @IsNumberString()
  yr_built?: number;

  @ApiPropertyOptional()
  @IsNumberString()
  yr_renovated?: number;

  @ApiPropertyOptional()
  @IsNumberString()
  lat?: number;

  @ApiPropertyOptional()
  @IsNumberString()
  long?: number;

  @ApiPropertyOptional()
  @IsNumberString()
  sqft_living15?: number;

  @ApiPropertyOptional()
  @IsNumberString()
  sqft_lot15?: number;
}
