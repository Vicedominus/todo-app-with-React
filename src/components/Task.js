import React from 'react';
import '../stylesheets/Task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Task ({ id, title, isCompleted, completeTask, deleteTask }) {
    /* 
        completeTask: a function to set a task as completed
        deleteTask: a function to delete a task
    */
    return (
        <div className={`task-container ${ (isCompleted) ? 'completed' : 'iscompleted' }`} >
            <div className='task-title' onClick={() => completeTask(id)}>
                <p>{title}</p>
            </div>
            <div className='icon-container'>
                <AiOutlineCloseCircle 
                    className='icon'
                    onClick={() => deleteTask(id)}
                />
            </div>
        </div>
    );
}

export default Task;