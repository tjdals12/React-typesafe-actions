import { createAction } from 'typesafe-actions';

export const ADD_TODO = 'todos/ADD_TODO';
export const TOGGLE_TODO = 'todos/TOGGLE_TODO';
export const REMOVE_TODD = 'todos/REMOVE_TODO';

export const addTodo = createAction(ADD_TODO, (text: string) => text)();
export const toggleTodo = createAction(TOGGLE_TODO, (id: number) => id)();
export const removeTodo = createAction(REMOVE_TODD, (id: number) => id)();
