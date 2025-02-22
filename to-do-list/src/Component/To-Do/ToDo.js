// ToDo.js
import React, { useState } from 'react';
import './ToDo.css';
import Done from '../Done/Done';

function ToDo() {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Wake up', checked: false },
        { id: 2, text: 'Exercise', checked: false },
        { id: 3, text: 'Task 3', checked: false },
    ]);
    const [doneTasks, setDoneTasks] = useState([]);

    const handleCheckboxChange = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, checked: !task.checked } : task
            )
        );
    };

    const add = () => {
        const newTaskText = prompt("Enter new task:");
        if (newTaskText) {
            setTasks((prevTasks) => [
                ...prevTasks,
                { id: Date.now(), text: newTaskText, checked: false },
            ]);
        }
    };

    const update = () => {
        const checkedTasks = tasks.filter((task) => task.checked);
        setDoneTasks(checkedTasks);
    };

    const del = () => {
        const uncheckedTasks = tasks.filter((task) => !task.checked);
        const checkedTasks = tasks.filter((task) => task.checked);
        setTasks(uncheckedTasks);
        setDoneTasks(checkedTasks);
    };

    return (
        <div>
            <div id="todo">
                <h3>Things to Do:</h3>
                {tasks.map((task) => (
                    <label key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.checked}
                            onChange={() => handleCheckboxChange(task.id)}
                        />
                        {task.text}
                        <br />
                    </label>
                ))}
                <br/>
                <button className="btn btn-primary" onClick={add}>
                    Add
                </button>
                <button className="btn btn-success" onClick={update}>
                    Update
                </button>
                <button className="btn btn-danger" onClick={del}>
                    Delete
                </button>
            </div>
            <Done doneTasks={doneTasks} />
        </div>
    );
}

export default ToDo;