import { Component } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  list: Todo[];

  constructor(private service: TodoService) {
    this.list = service.dati;
  }

  delete(id: number) {
    this.service.delete(id);
  }

  toggle(id: number) {
    this.service.toggleCompletato(id);
  }
}
