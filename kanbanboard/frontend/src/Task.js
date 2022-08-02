import React from 'react';
import PropTypes from 'prop-types';
import styles from './assets/css/Task.css';

export default function Task({no, name, done, callback}) {
    return (
        <li className={styles.Task}>
            <input 
                type='checkbox' 
                checked={done === 'Y'}
                onChange={e => {
                    callback(no, e.target.checked ? 'Y' : 'N');
                }}/>
            {name}
            <a href='#' className={styles.Task__remove}/>
        </li>
    );
}

Task.propTypes = {
    name: PropTypes.string.isRequired
}