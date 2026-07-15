import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PoisController } from './pois/pois.controller';
import { PoisService } from './pois/pois.service';
import { PoisModule } from './pois/pois.module';

@Module({
  imports: [PoisModule],
  controllers: [AppController, PoisController],
  providers: [AppService, PoisService],
})
export class AppModule {}
