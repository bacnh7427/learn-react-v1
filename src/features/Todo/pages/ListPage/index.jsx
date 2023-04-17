import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
ListPage.propTypes = {
    
};

function ListPage(props) {
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
    const [filteredStatus, setFilteredStatus] = useState('all');

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

    const handleShowAllClick = () => {
        setFilteredStatus('all');
    }

    const handleShowNewClick = () => {
        setFilteredStatus('new');
    }

    const handleShowCompletedClick = () => {
        setFilteredStatus('completed')
    }

    const renderedTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);

    return (
        <div>
            <h3>TodoList</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick}/>

            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default ListPage;