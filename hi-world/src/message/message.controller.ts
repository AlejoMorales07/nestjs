import { Controller, Get, Headers, HttpCode, Param, Post } from '@nestjs/common'
import { MessageService } from './message.service'

@Controller('message')
export class MessageController {
  constructor(private messageService: MessageService) {}
  @Get()
  @HttpCode(200)
  getMessage(@Param() params: any, @Headers() headers: any): string {
    return 'Hello World!'
  }
}
