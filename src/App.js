import React, { useState } from 'react';
import ToDos from './components/ToDos';
import _tasks from './_intial';
import NewTaskForm from './components/NewTaskForm';
import Config from './ToDoContext';
import config from './config';

function App() {
  const [tasks, setTasks] = useState(_tasks)

  return (
    <Config.Provider value={config}>
      <div className='container'>
        <h1 className='my-4'>To Do</h1>
        <NewTaskForm addTodo={task => setTasks([...tasks, task])} />
        <hr />
        <ToDos tasks={tasks} />
      </div>
    </Config.Provider>
  );
}

export default App;
