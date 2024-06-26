import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],// by default the classes that are added in the providers are private
  exports:[PowerService]
})
export class PowerModule {}
