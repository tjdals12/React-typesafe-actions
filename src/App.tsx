import React from 'react';
import TodoTemplate from 'components/TodoTemplate';
import TodoInput from 'components/TodoInput';
import TodoList from 'components/TodoList';

const App: React.FC = () => {
    return (
        <TodoTemplate>
            <TodoInput />
            <TodoList />
        </TodoTemplate>
    );
};

export default App;
