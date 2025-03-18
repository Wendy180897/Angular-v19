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
  constructor(private taskService: TasksService) {}
  //añadido al Service como private
  // tasks = [
  //   {
  //     id: 't1',
  //     userId: 'u1',
  //     title: 'Master Angular',
  //     summary:
  //       'Learn eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli',
  //     dueDate: '2025-12-1',
  //   },
  //   {
  //     id: 't2',
  //     userId: 'u3',
  //     title: 'Master Angular',
  //     summary:
  //       'Build eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli',
  //     dueDate: '2025-12-1',
  //   },
  //   {
  //     id: 't3',
  //     userId: 'u3',
  //     title: 'Master Angular',
  //     summary:
  //       'Learn eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli',
  //     dueDate: '2025-12-1',
  //   },
  // ];

  get selectedUserTasks() {
    /*para que no de error en Html hay que quitar el signo de interrogacion y aqui añadir! para convencer en TypeScript que devolvera un valor
    return this.users.find((user)=>user.id===this.selectedUserId)!;
    en este caso se cambia en el html y en el componente de task con un valor que llega de entrada cuando se hace click?
    */
    // return this.tasks.filter((task) => task.userId === this.user.id);
    return this.taskService.getUserTasks(this.user.id);
  }

  onCompleteTask(idTask: string) {
    // console.log(idTask);
    // this.tasks = this.tasks.filter((task) => task.id !== idTask);
    //Se encuentra en el Servicio ahora
    this.taskService.removeTask(idTask);
  }
  onStartTask() {
    this.isAddTask = true;
  }

  // onAddTask(addTask: newTask) {
  //   // console.log(addTask);
  //   // const maxId = this.tasks
  //   //   .map((task) => parseInt(task.id.substring(1))) // Extraer número del ID
  //   //   .reduce((max, num) => (num > max ? num : max), 0); // Encontrar el más alto

  //   // // Crear nuevo ID
  //   // // const newId = `t${maxId + 1}`;
  //   // this.tasks.push({
  //   //   id: 't' + (maxId + 1),
  //   //   userId: this.user.id,
  //   //   title: addTask.title,
  //   //   summary: addTask.summary,
  //   //   dueDate: addTask.dueDate,
  //   // });
  //   // console.log(this.tasks);
  //   this.isAddTask = false;
  // }

  onAddTask(addTask: newTask) {
    this.taskService.addTask(addTask, this.user.id);
    this.isAddTask = false;
  }

  onCancelTask() {
    this.isAddTask = false;
  }
}
