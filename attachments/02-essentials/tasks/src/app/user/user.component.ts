import { Component, computed, input, output } from '@angular/core';
import { User } from '../types';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user = input.required<User>();
  select = output<string>();
  path = computed(() =>'users/' + this.user().avatar);

  onClickUser(){
    this.select.emit(this.user().id);
  }
}
