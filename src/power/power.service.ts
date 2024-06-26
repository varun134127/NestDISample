import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {

    supplyPower(watts: number){
      console.log('Supplying worth of power.',watts);
    }
}
