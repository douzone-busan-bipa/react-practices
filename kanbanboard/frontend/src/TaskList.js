import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import styles from './assets/css/TaskList.css';

export default function TaskList({cardNo, tasks, callbackAddTask, callbackChangeTaskDone}) {
    return (
        <div className='TaskList'>
            <ul>
                {tasks.map(task => <Task
                                        key={task.no}
                                        no={task.no}
                                        name={task.name} 
                                        done={task.done}
                                        callback={callbackChangeTaskDone} />)}
            </ul>
            <input
                type='text'
                className={styles.TaskList__add_task}
                placeholder='태스크 추가'
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        callbackAddTask(e.target.value);
                        e.target.value = '';
                    }
                }}/>
        </div>
    );
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape(Task.propTypes))
}