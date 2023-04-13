import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eattt',
            status: 'completed',
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'new',
        },
        {
            id: 3,
            title: 'Gamet',
            status: 'completed',
        },
        {
            id: 4,
            title: 'Coded',
            status: 'new',
        },
        {
            id: 5,
            title: 'Travel',
            status: 'completed',
        },
    ];

    const [todoList, setTodoList] = useState(initTodoList);
    const handleTodoClick = (todo, idx) => {
        // clone current array to the new one
        const newTodoList = [...todoList]

        console.log(todo, idx)

        // toggle state
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        };

        // upgrade todo list
        setTodoList(newTodoList)
    }
    return (
        <div>
            <h3>TodoList</h3>
            <TodoList todoList={todoList} onTodoClick={handleTodoClick}/>
        </div>
    );
}

export default TodoFeature;