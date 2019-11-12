import React from 'react';
import { render } from '@testing-library/react';
import TodoTemplate from './TodoTemplate';

describe('<TodoTemplate />', () => {
    it('matches snapshot', () => {
        const utils = render(<TodoTemplate />);
        expect(utils.container).toMatchSnapshot();
    });

    it('has a title and a content', () => {
        const utils = render(<TodoTemplate />);
        expect(utils.container.querySelector('.title')).not.toBeNull();
        expect(utils.container.querySelector('.content')).not.toBeNull();
    });
});
