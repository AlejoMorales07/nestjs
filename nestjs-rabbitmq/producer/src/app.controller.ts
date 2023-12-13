import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Cat } from './dto/cat.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/cats')
  sendCatData(@Body() cat:Cat){
    return this.appService.sendCatData(cat.name);
  }
}
