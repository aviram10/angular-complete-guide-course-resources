import { Component, input, output } from '@angular/core';
import { Task } from '../types';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task = input.required<Task>();
  select = output<string>();
  
  complete() {
    this.select.emit(this.task().id);
  }
}
