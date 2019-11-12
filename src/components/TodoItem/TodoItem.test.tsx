import React from 'react';
import { render } from '@testing-library/react';
import TodoItem from './TodoItem';

describe('<TodoItem />', () => {
    it('matches snapshot', () => {
        const utils = render(<TodoItem todo={{ id: 0, text: 'Something 1', done: false }} />);
        expect(utils.container).toMatchSnapshot();
    });

    it('has a input and two spans', () => {
        const utils = render(<TodoItem todo={{ id: 0, text: 'Something 1', done: false }} />);
        expect(utils.container.querySelector('.input')).not.toBeNull();
        expect(utils.container.querySelector('.text')).not.toBeNull();
        expect(utils.container.querySelector('.remove')).not.toBeNull();
    });
});
