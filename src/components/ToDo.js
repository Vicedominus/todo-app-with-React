import React, { useState } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";
import '../stylesheets/ToDo.css';


function ToDo () {

    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        
        if (task.title.trim()) {
            task.title = task.title.trim();
            const taskList = [task, ...tasks];
            setTasks(taskList);
        }      
    };

    const deleteTask = (id) => {
        const taskListUpdated = tasks.filter((task) => task.id !== id);
        setTasks(taskListUpdated)
    };

    const completeTask = (id) => {
        const taskList = tasks.map(task => {
            if (task.id === id) {
                task.isCompleted = !task.isCompleted;
            }
            return task;
        });
        setTasks(taskList);
    };

    return (
        <div className='tasks-list'> 
            <div className='title'>
                <h1>To Do</h1>
            </div>
            <TaskForm onSubmit={addTask} />
            {
                tasks.map((task) => 
                    <Task 
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        isCompleted={task.isCompleted}
                        deleteTask={deleteTask}
                        completeTask={completeTask}
                    />
                )
            }
        </div>
    );
}

export default ToDo;