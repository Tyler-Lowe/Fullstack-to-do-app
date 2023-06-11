import { useState, useEffect } from 'react';
import TaskCreator from '../TaskCreator';
import NewTaskContainer from './NewTaskContainer';


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
