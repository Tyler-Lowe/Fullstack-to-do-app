import React from "react";
import { useState, useEffect } from 'react';


// Need to pass values through for complete and delete??

export default function NewTaskContainer( {task, taskCompleted, deleteTask} ) {

console.log('What is the obj', task.task_completed);
    return (

        <div className="task-container" key={task.id}>
            <div className={task.task_completed ? "completed task-card" : "task-card"}>
            <h2>{task.task_name}</h2>
            <div>
                <p>{task.task_details}</p>
            </div>
            <button onClick={() => taskCompleted(task.id)}>Complete</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
        </div>
    )
}