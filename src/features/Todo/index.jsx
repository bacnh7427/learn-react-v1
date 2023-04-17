import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import NotFound from '../../components/NotFound';
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
            <Route path={`${match.path}/:todoId`} component={DetailPage} exact />
            <Route component={NotFound}/>            
           </Switch>
        </div>
    );
}

export default TodoFeature;