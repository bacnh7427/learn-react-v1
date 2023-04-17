import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const match = useRouteMatch();
    return (
        <div>
            Todo share UI
           <Switch>
            <Route path={match.path} component={ListPage} exact />
            <Route path={`${match.path}/:todoId`} component={DetailPage}  />
           </Switch>
        </div>
    );
}

export default TodoFeature;