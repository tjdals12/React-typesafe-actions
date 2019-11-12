# React-typesafe-actions

## **1.creeateAction으로 액션 생성 함수 선언**

`v4.X`은 _createStandardAction_ 사용, `v5.X`부터는 createStandardAction가 deprecated 되어 *createAction*을 사용

createAction(`type`, `payload`, `meta`)()
payload, meta는 없는 경우 생략이 가능하며, 선언 후 ()로 바로 실행해주어야 함.

<br>

📎 actions.ts

```tsx
import { createAction, deprecated } from 'typesafe-actions';

export const ADD_TODO = 'todos/ADD_TODO';
export const TOGGLE_TODO = 'todos/TOGGLE_TODO';

export const addTodo = createAction(ADD_TODO, (text: string) => text)();
export const toggleTodo = createAction(TOGGLE_TODO, (id: number) => id)();
```

<br>

## 2. **ActionType으로 액션들의 타입 선언**

기존의 ReturnType`<typeof addTodo>` | ... 에서 아래와 같이 간결하게 작성할 수 있음.

<br>

📎 types.ts

```tsx
import { ActionType } from 'types-actions';
import { addTodo, toggleTodo } from './actions';

const actions = { addTodo, toggleTodo };
export type TodosActionType = ActionType<typeof actions>;
```

<br>

## **3. createReducer로 reducer 생성**

<br>

📎 reducer.ts

```tsx
import { createReducer } from 'typesafe-actions';
import { TodosStateType, TodosActionTypes } from './types';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './types';

// Object Map Style
export default createReducer<TodosStateType, TodosActionTypes>(initialState, {
    [ADD_TODO]: (state, action) => {...생략}
})

// Chain API Style
export default createReducer<TodosStateType, TodosActionType>(initialState)
    .handleAction(ADD_TODO, (state, action) => {...생략})
```

<br>

# 결론

1. redux-actions의 createAction, handleActions와 같은 형식으로 작성할 수 있어서 익숙함.
2. ActionType을 통해 타입을 간결하게 선언할 수 있음.
3. actions, types, reducer를 분리하여 작성하는게 더 편해짐.
