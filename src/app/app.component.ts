import { Component,EventEmitter,Output } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent,FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users=DUMMY_USERS;
  title = 'userv19';
  selectedUserId!:string;

  get selectedUser() {
    /*para que no de error en Html hay que quitar el signo de interrogacion y aqui añadir! para convencer en TypeScript que devolvera un valor
    return this.users.find((user)=>user.id===this.selectedUserId)!;
    en este caso se cambia en el html y en el componente de task con un valor que llega de entrada cuando se hace click?
    */
    return this.users.find((user)=>user.id===this.selectedUserId);
  }
  onSelectUser(id:string){
  this.selectedUserId=id;
  }


}
