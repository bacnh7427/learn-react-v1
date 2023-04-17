import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom';
Header.propTypes = {
    
};

function Header(props) {
    return (
        <div>
            <p><Link to="/todos">Link Todos</Link></p>
            <p><Link to="/albums">Link Album</Link></p>
            <p><Link to="/counters">Link Counter</Link></p>
            <p><Link to="/colors">Link Colors</Link></p>
            <p><NavLink to="/todos" activeClassName="active-todos">NavLink Todos</NavLink></p>
            <p><NavLink to="/albums">NavLink Album</NavLink></p>
            <p><NavLink to="/counters">NavLink Counter</NavLink></p>
            <p><NavLink to="/colors">NavLink Colors</NavLink></p>
        </div>
    );
}

export default Header;