import { Component, computed, input, signal } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent],
})

export class TasksComponent {
  userId = input<string>('');
  allTasks = signal(dummyTasks);
  form = signal(false);
  tasks = computed(() =>
    this.allTasks().filter((task) => task.userId === this.userId())
  );
  user = computed(() => {
    const user = DUMMY_USERS.find((user) => user.id == this.userId());
    return user;
  });

  onCompleteTask(id: string) {
    this.allTasks.set(this.allTasks().filter((task) => task.id !== id));
  }

  onAddTask() {
    this.form.set(true);
  }
}
