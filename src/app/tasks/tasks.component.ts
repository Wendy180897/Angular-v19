import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { User } from '../user/user.model';
import { AddTaskComponent } from './add-task/add-task.component';
import { newTask, Task } from './task/task.model';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  /*En este caso el Input no se establece required porque el nombre hasta que no este
   pulsado no hay un dato de entrada.
   También se puede usar la alternativa tubería   @Input() userName: string | undefined;
   coge el valor string o indefinido*/
  @Input({ required: true }) user!: User;
  isAddTask: boolean = false;
  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.user.id);
  }

  onStartTask() {
    this.isAddTask = true;
  }

  onCloseAddTask() {
    this.isAddTask = false;
  }
}
