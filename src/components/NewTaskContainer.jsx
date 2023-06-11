import React from "react";
import { useState, useEffect } from 'react';


// Need to pass values through for complete and delete??

export default function NewTaskContainer(  {task} ) {

console.log('What is the obj', task);
    return (

        <div className="task-container" key={task.id}>
            <div className="task-card">
            <p>{task.task_name}</p>
            <div>
                <p>{task.task_details}</p>
            </div>
            <button>Complete</button>
            <button>Delete</button>
            </div>
        </div>
    )
}