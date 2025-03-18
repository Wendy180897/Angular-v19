import { Injectable } from '@angular/core';
import { type newTask } from './task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor() {}

  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli',
      dueDate: '2025-12-1',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Master Angular',
      summary:
        'Build eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli',
      dueDate: '2025-12-1',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Master Angular',
      summary:
        'Learn eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci veli',
      dueDate: '2025-12-1',
    },
  ];

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(addTask: newTask, userId: string) {
    console.log(addTask);
    const maxId = this.tasks
      .map((task) => parseInt(task.id.substring(1))) // Extraer número del ID
      .reduce((max, num) => (num > max ? num : max), 0); // Encontrar el más alto

    // Crear nuevo ID
    // const newId = `t${maxId + 1}`;
    this.tasks.push({
      id: 't' + (maxId + 1),
      userId: userId,
      title: addTask.title,
      summary: addTask.summary,
      dueDate: addTask.dueDate,
    });
  }

  removeTask(idTask: string) {
    this.tasks = this.tasks.filter((task) => task.id !== idTask);
  }
}
