import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() taskComplete = new EventEmitter<string>();

  // ngOnInit(){
  //   console.log(this.task);
  // }
  private tasksService = inject(TasksService);
  // constructor(private taskService: TasksService) {}
  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
    // this.taskComplete.emit(this.task.id);
  }
}
