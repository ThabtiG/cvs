import { Injectable } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];
  constructor(
    private loggerService: LoggerService
  ) { }
  loggerTodo(): void {
    this.loggerService.logger(this.todos);
  }
  getTodos(): Todo[] {
    return this.todos;
  }
  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }
  deleteTodo(todo: Todo): Boolean {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
      return true;
    }
    return false;
  }
}
