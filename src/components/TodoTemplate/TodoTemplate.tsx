import React from 'react';
import classNames from 'classnames/bind';
import styles from './TodoTemplate.scss';

const cx = classNames.bind(styles);

export default function PageTemplate({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <div className={cx('page-template')}>
            <h2 className={cx('title')}>TODO LIST</h2>
            <div className={cx('content')}>{children}</div>
        </div>
    );
}
