import { createReducer } from 'typesafe-actions';
import { TodosStateType, TodosActionTypes } from './types';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODD } from './actions';

const initialState: TodosStateType = [
    {
        id: 0,
        text: 'Typescript',
        done: true,
    },
    {
        id: 1,
        text: 'React TDD',
        done: true,
    },
    {
        id: 2,
        text: 'typesafe-actions',
        done: false,
    },
];

export default createReducer<TodosStateType, TodosActionTypes>(initialState, {
    [ADD_TODO]: (state, action) =>
        state.concat({ id: Math.max(...state.map(todo => todo.id)) + 1, text: action.payload, done: false }),
    [TOGGLE_TODO]: (state, action) =>
        state.map(todo => (todo.id === action.payload ? { ...todo, done: !todo.done } : todo)),
    [REMOVE_TODD]: (state, action) => state.filter(todo => todo.id !== action.payload),
});
