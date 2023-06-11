import { useState, useEffect } from 'react';
import TaskCreator from '../TaskCreator';
import NewTaskContainer from './NewTaskContainer';
// create a state that will refresh on every form submission/task completed/task deleted
// Need to add each todo item to the page not just the newest one

function App () {
  
  return (
    <div>
      <h1>TO DO APP</h1>
      <TaskCreator />
      <NewTaskContainer />
    </div>
    
  );

}

export default App
