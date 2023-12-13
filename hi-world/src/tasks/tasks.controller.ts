import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { CreateTaskDto } from './dto/create-task.dto'
import { Task } from './interfaces/tasks.interface'
import { TasksService } from './tasks.service'

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Get()
  getTasks(): Task[] {
    return this.tasksService.getTasks()
  }

  @Get(':id')
  getTask(@Param('id') id: string): Task {
    return this.tasksService.getTask(parseInt(id))
  }

  @Post()
  createTask(@Body() task: CreateTaskDto): string {
    return 'Creating a task'
  }

  @Put()
  updateTask(): string {
    return 'Updating a task'
  }

  @Delete()
  deleteTask(): string {
    return 'Deleting a task'
  }
}
