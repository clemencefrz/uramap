import { Injectable } from '@nestjs/common';
import { Poi } from './poi';

@Injectable()
export class PoisService {
  findOne(id: string): Poi {
    return { poi_id: id, title: 'Titre du POI' };
  }
}
