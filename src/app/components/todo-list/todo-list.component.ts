import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, selectTodoListItems } from './reducers';
import { Observable } from 'rxjs';
import { TodoListItem } from './models';
import { AddedItem, CompletedItem } from './actions/list.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList$: Observable<TodoListItem[]>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.todoList$ = this.store.select(selectTodoListItems);
  }

  add(item: HTMLInputElement) {
    this.store.dispatch(new AddedItem(item.value));
    item.value = '';
    item.focus();
  }

  complete(item: TodoListItem) {
    this.store.dispatch(new CompletedItem(item));
  }
}
