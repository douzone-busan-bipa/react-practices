import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TaskList from "./TaskList";
import Task from "./Task";
import styles from './assets/scss/Card.scss';

export default function Card({no, title, description, status, tasks}) {
    const [showDetail, setShowDetail] = useState(false);
    const styleSideColor = {
        position: 'absolute',
        zIndex: -1,
        top: 0,
        left: 0,
        bottom: 0,
        width: 3,
        backgroundColor: status === 'ToDo' ? '#bd8D31' : (status === 'Doing' ? '#3a7e28' : '#222')
    }

    return (
        <div className={styles.Card}>
            <div style={styleSideColor}/>
            <div
                className={showDetail ? [styles.Card__Title, styles.Card__Title__Open].join(" ") : styles.Card__Title}
                onClick={e => setShowDetail(!showDetail)}>
                {title}
            </div>
            <div class='Card__Details'>
              {description}
              {
                showDetail ?
                    <TaskList tasks={tasks} /> : 
                    null
              }
            </div> 
        </div>
    );
}

Card.propTypes = {
    // title: PropTypes.string.isRequired,
    title: (props, propName, componentName) => (!props[propName] || typeof props[propName] !== 'string' || props[propName].length > 50) ? new Error(`${propName} in ${componentName} is longer than 50 characters`) : null,
    description: PropTypes.string,
    status: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.shape(Task.propTypes))
}