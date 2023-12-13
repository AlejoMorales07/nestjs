import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('CATS_SERVICE')  private client:ClientProxy) {}
 
  sendCatData(name:string) {
    return  this.client.send({cmd:'cats'}, name)
  }
}
