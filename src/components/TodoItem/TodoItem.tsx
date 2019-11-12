import React from 'react';
import classNames from 'classnames/bind';
import useTodoActions from 'hooks/useTodoActions';
import styles from './TodoItem.scss';

const cx = classNames.bind(styles);

type TodoItemProps = {
    todo: { id: number; text: string; done: boolean };
};

export default function TodoItem({ todo }: TodoItemProps): JSX.Element {
    const { toggle, remove } = useTodoActions(todo.id);

    return (
        <li className={cx('todo-item')}>
            <input className={cx(`input ${todo.done ? 'done' : ''}`)} type="checkbox" checked={todo.done} readOnly />
            <span className={cx(`text ${todo.done ? 'done' : ''}`)} onClick={toggle}>
                {todo.text}
            </span>
            <span className={cx('remove')} onClick={remove}>
                X
            </span>
        </li>
    );
}
