import React from 'react';
import { render } from '@testing-library/react';
import TodoInput from './TodoInput';

describe('<TodoInput />', () => {
    it('matches snapshot', () => {
        const utils = render(<TodoInput />);
        expect(utils.container).toMatchSnapshot();
    });

    it('has a input and a button', () => {
        const utils = render(<TodoInput />);
        expect(utils.container.querySelector('.input')).not.toBeNull();
        expect(utils.container.querySelector('.button')).not.toBeNull();
    });
});
