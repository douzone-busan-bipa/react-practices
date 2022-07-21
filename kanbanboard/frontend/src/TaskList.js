import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import styles from './assets/css/TaskList.css';

export default function TaskList({cardNo, tasks, notifyAddTask, notifyChangeTaskDone}) {
    return (
        <div className='TaskList'>
            <ul>
                {tasks.map(task => <Task
                                        key={task.no}
                                        no={task.no}
                                        name={task.name} 
                                        done={task.done} />)}
            </ul>
            <input
                type='text'
                className={styles.TaskList__add_task}
                placeholder='태스크 추가'/>
        </div>
    );
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape(Task.propTypes))
}