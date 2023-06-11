import { useState, useEffect } from 'react';
import TaskCreator from '../TaskCreator';
import NewTaskContainer from '../NewTaskContainer';
import './App.css'
// create a state that will refresh on every form submission/task completed/task deleted
// Need to add each todo item to the page not just the newest one




function App () {
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
      <h1>TO DO APP</h1>
      <TaskCreator taskList={taskList} getTasks={getTasks} setTaskList={setTaskList}/>
      {taskList.map(task => (
        <NewTaskContainer key={task.id} task={task}  />
      ))}
      
    </div>
    
  );

}

export default App
