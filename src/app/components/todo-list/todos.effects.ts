import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { TodosDataService } from './todos.data.service';
import * as actions from './actions/list.actions';
import { filter, map, switchMap } from 'rxjs/operators';

@Injectable()
export class TodosEffects {

  @Effect() itemAdded$ = this.actions$
    .pipe(
      ofType(actions.ITEM_ADDED),
      // 1. Convert it to AddedItem action (map),
      map(a => a as actions.AddedItem),
      // 2. call the service's add method.
      switchMap(a => this.service.addTodo(a.item.description)
        .pipe(
          // 3. Dispatch AddedItemSuccessfully
          map(result => new actions.ItemAddedSuccessfully(a.item.id, result))
        )
      )
    );

  constructor(private actions$: Actions, private service: TodosDataService) { }
}
