import { Component, Output, EventEmitter, Input } from '@angular/core';
import { User } from '../../user/user.model';
import { newTask } from '../task/task.model';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Output() closeTask = new EventEmitter<void>();
  //Para no traer aquí también el Usuario y ya esta en el componente tasks creo una
  //interfaz con los 3 datos que se obtienen de este componente
  @Input({ required: true }) user!: User;
  // enteredTask=signal<Task>({
  enteredTask: newTask = {
    title: '',
    summary: '',
    dueDate: '',
  };
  constructor(private taskService: TasksService) {}

  onAddTask() {
    this.taskService.addTask(
      {
        title: this.enteredTask.title,
        summary: this.enteredTask.summary,
        dueDate: this.enteredTask.dueDate,
      },
      this.user.id
    );

    this.closeTask.emit();
  }
  onCloseAddTask() {
    this.closeTask.emit();
  }
}
