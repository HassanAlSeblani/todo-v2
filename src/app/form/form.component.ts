import { Component } from '@angular/core';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  nuovo: string = '';

  service: TodoService;

  constructor(service: TodoService) {
    this.service = service;
  }

  add() {
    this.service.addNew(this.nuovo);
  }
}
