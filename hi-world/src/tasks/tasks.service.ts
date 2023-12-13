import { Injectable } from '@nestjs/common'
import { Task } from './interfaces/tasks.interface'

@Injectable()
export class TasksService {
  tasks: Task[] = [
    { id: 1, title: 'Task 1', description: 'Description 1', done: false },
    { id: 2, title: 'Task 2', description: 'Description 2', done: true },
    { id: 3, title: 'Task 3', description: 'Description 3', done: false }
  ]

  getTasks(): Task[] {
    return this.tasks
  }

  getTask(id: number): Task {
    return this.tasks.find(task => task.id === id)
  }
}
