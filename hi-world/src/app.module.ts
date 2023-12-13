import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MessageModule } from './message/message.module'
import { TasksModule } from './tasks/tasks.module'

@Module({
  imports: [TasksModule, MessageModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
