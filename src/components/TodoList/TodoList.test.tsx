import React from 'react';
import { render } from '@testing-library/react';
import TodoList from './TodoList';

describe('<TodoList />', () => {
    it('matches snapshot', () => {
        const utils = render(<TodoList />);
        expect(utils.container).toMatchSnapshot();
    });
});
