import React from "react";
import { useState, useEffect } from 'react';


// Need to pass values through for complete and delete??

export default function NewTaskContainer() {
    const [taskList, setTaskList] = useState([]);
// Do a get here using form data to create visual tasks
// 
// 
function getTasks() {
    return fetch('/todo')
    .then(response => response.json())
    .catch((error) => {
        console.log(error);
    })
}

useEffect(() => {
    console.log('Fetching tasks!');
    getTasks().then(task => setTaskList(task));
    console.log('tyler here',taskList)
}, []);

    return (

        <div>
            <ul>

            </ul>
            <h2>Task Name</h2>
            <div>
                <p>Task Details</p>
            </div>
            <button>Complete</button>
            <button>Delete</button>
        </div>
    )
}