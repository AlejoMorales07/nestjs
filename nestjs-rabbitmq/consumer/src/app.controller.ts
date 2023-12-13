import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  
  @MessagePattern({cmd:'cats'})
  getCatName(name: string): string {
    return `Cat name: ${name}`
  }
}
