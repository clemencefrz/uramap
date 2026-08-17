import {
  Controller,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { PoisService } from './pois.service';

@Controller('pois')
export class PoisController {
  constructor(private readonly poisService: PoisService) {}
  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id', ParseIntPipe) id: string) {
    const poi = this.poisService.findOne(id);
    if (!poi) {
      throw new NotFoundException(`Le point d'intérêt "${id}" est introuvable`);
    }
    return poi;
  }
}
