import React, { useState, FormEvent } from 'react';
import classNames from 'classnames/bind';
import useAddTodo from 'hooks/useAddTodo';
import styles from './TodoInput.scss';

const cx = classNames.bind(styles);

export default function TodoInput(): JSX.Element {
    const [value, setValue] = useState('');
    const addTodo = useAddTodo();

    const onSubmit = (e: FormEvent): void => {
        e.preventDefault();
        addTodo(value);
        setValue('');
    };

    return (
        <form className={cx('todo-input')} onSubmit={onSubmit}>
            <input
                className="input"
                placeholder="할 일을 입력하세요."
                value={value}
                onChange={(e): void => setValue(e.target.value)}
            />
            <button className="button" type="submit">
                등록
            </button>
        </form>
    );
}
