import React from 'react';
import './Done.css';

function Done({ doneTasks }) { 
    return (
        <div id="Done">
            <h3>Completed Tasks:</h3>
            <ul>
                {doneTasks.map((task) => (
                    <li key={task.id}>{task.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default Done;