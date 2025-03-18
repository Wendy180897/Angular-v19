import { Component, EventEmitter, Input, Output, output } from '@angular/core';
//import {type User } from './user.model';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: Boolean;
  @Output() select = new EventEmitter<string>();

  /*En lugar de hacerlo con el decorador @Input , hay una función que es un Signal que realiza lo mismo pero sin
  tener que !: ya que sino da un error por no estar inicializado. Dentro se puede inicializar un valor   avatar=input<string>('hola');
 recordar que en html al ser un signal se llama con avatar() y en vez de un get con el computed.
este input son solo de entrada de lectura no se podría cambiar el valor con set, se  continuará con la explicación sin signals
//Esta es una función de typeScript no es una señal como el input(), existe la funcion output() para cuando se use la señal de input no tener que usar decoradores
select=output<string>();
avatar=input.required<string>();
name=input.required<string>();
imagePath=computed(()=>{
return "/assets/users/"+this.avatar();});*/
  get imagePath() {
    return '/assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
