import React, {useState} from 'react';
import PropTypes from 'prop-types';

Counter.propTypes = {

    
};

function Counter(props) {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(x => x + 100)}>Add</button>
            <button onClick={() => setCount(x => x - 122)}>Sub</button>
        </div>
    );

}

export default Counter;