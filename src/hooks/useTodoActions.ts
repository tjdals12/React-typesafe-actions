import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from 'modules/todos';

export default function useTodoActions(id: number) {
    const dispatch = useDispatch();
    const toggle = useCallback(() => dispatch(toggleTodo(id)), [dispatch, id]);
    const remove = useCallback(() => dispatch(removeTodo(id)), [dispatch, id]);

    return {
        toggle,
        remove,
    };
}
