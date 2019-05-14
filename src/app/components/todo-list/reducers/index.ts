import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { TodoListItem } from '../models';
export interface TodoEntity {
  id: string;
  description: string;
}


export interface State extends EntityState<TodoEntity> {
  completedIds: string[];
}

const initialState: State = {
  ids: ['1', '2'],
  entities: {
    1: { id: '1', description: 'Clean Garage' },
    2: { id: '2', description: 'Finish Daryl\'s Deck' }
  },
  completedIds: ['1']
};

const adapter = createEntityAdapter<TodoEntity>();
export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    default: {
      return state;
    }
  }
}


// feature
// tslint:disable-next-line: variable-name
export const _selectTodosFeature = createFeatureSelector<State>('todos');

// per branch


// helpers
export const { selectAll: _selectAllTodos } = adapter.getSelectors(_selectTodosFeature);
export const _selectCompletedIds = createSelector(_selectTodosFeature, f => f.completedIds);
// components
// selector that returns TodoListItem[]
export const selectTodoListItems = createSelector(_selectAllTodos, _selectCompletedIds, (todos, ids) => {
  return todos.map(todo => {
    return ({
      id: todo.id,
      description: todo.description,
      completed: ids.some(i => i === todo.id)
    }) as TodoListItem;
  });
});
