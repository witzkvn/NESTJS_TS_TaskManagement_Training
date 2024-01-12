import { Controller, Get, Param } from '@nestjs/common';
import { Task } from './dto/task.entity';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // @Get()
  // getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
  //   // GET to /tasks OR /tasks?status=OPEN&search=nestjs

  //   // if filters defined : getTaskWithFilters
  //   // else : getAllTasks
  //   if (Object.keys(filterDto).length) {
  //     return this.tasksService.getTaskWithFilters(filterDto);
  //   }

  //   return this.tasksService.getAllTasks();
  // }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Promise<Task> {
    // GET to /tasks/:id
    return this.tasksService.getTaskById(id);
  }

  // @Post()
  // createTask(@Body() createTaskDto: CreateTaskDto): Task {
  //   // POST to /tasks
  //   return this.tasksService.createTask(createTaskDto);
  // }

  // @Delete('/:id')
  // deleteTaskById(@Param('id') id: string): void {
  //   // DELETE to /tasks/:id
  //   this.tasksService.deleteTaskById(id);
  // }

  // @Patch('/:id/status')
  // updateTaskById(
  //   @Param('id') id: string,
  //   @Body() updateTaskStatusDto: UpdateTaskStatusDto,
  // ) {
  //   // PATCH to /tasks/:id/status
  //   const { status } = updateTaskStatusDto;
  //   return this.tasksService.updateTaskById(id, status);
  // }
}
