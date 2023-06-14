import React from "react";
import Button from '@mui/material/Button';
import Grid  from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";

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
            <ButtonGroup variant="text" aria-label="text button group">
            <Button  onClick={() => taskCompleted(task.id)}>Complete</Button>
            <Button  onClick={() => deleteTask(task.id)}>Delete</Button>
            </ButtonGroup>
            </div>
        </div>
    )
}