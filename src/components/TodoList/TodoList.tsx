import React from 'react';
import classNames from 'classnames/bind';
import TodoItem from 'components/TodoItem';
import useTodos from 'hooks/useTodos';
import styles from './TodoList.scss';

const cx = classNames.bind(styles);

export default function TodoList(): JSX.Element {
    const todos = useTodos();

    return (
        <div className={cx('todo-list')}>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
}
