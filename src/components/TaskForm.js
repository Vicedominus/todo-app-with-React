import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import '../stylesheets/TaskForm.css';


function TaskForm ({ onSubmit }) {

    const [input, setInput] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: uuidv4(),
            title: input,
            isCompleted: false
        }
        console.log(newTask);
        e.target.text.value = '';
        onSubmit(newTask);
    };

    return (
        <div className="form-container">
            <form className="task-form"  onSubmit={handleSubmit}>
                <input
                    className="task-input"
                    type="text"
                    placeholder="add task"
                    name="text"
                    required
                    onChange={handleInput}
                />
                <button className="task-button">Add</button>      
            </form>
        </div>
    );
}

export default TaskForm;