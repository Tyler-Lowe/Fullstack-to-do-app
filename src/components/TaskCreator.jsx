import React from "react";
import  TextField  from "@mui/material/TextField";
import { useState } from 'react';

// do a post here with form data this post should call the newtaskcontainer function that will do a get request and populate todo item

export default function TaskCreator( {getTasks, setTaskList}) {
    const [taskName, setTaskName] = useState("");
    const [taskDetails, setTaskDetails] = useState("");
   
    const updateTask = (event) => {
        setTaskName(event.target.value);
      }
    
      const updateTaskDetails = (event) => {
        setTaskDetails(event.target.value);
      }

      const handleSubmit = (event) => {
        console.log({event});
        event.preventDefault();
    
        addTask({ taskName: taskName, taskDetails: taskDetails}).then(() => {
            getTasks().then(setTaskList);
        })

        setTaskName('');
        setTaskDetails('');

    }
    
    function addTask(task) {
        console.log('Are we adding the task?', task);
        return fetch('/todo', {
            method: 'POST',
            body: JSON.stringify(task),
            headers: { 'Content-Type': 'application/json' }
        })
        .then((response) => {
            if (response.status !== 201) {
                throw new Error('Bad Status on addTask');
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
<form onSubmit={handleSubmit}>
    <TextField variant="outlined" value={taskName} type="text" placeholder="Task Name" onChange={updateTask} />
    <TextField  variant="outlined" value={taskDetails} type="text" placeholder="Task Details" onChange={updateTaskDetails} />
    <input  type="submit" value="Submit" />
    {/* are we seen? */}
</form>
    )
}



