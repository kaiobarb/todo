import React, { useContext } from 'react';
import Config from '../ToDoContext';

export const Todo = ({ task, ...rest }) => (
  <div className='card mb-2' {...rest}>
    <div className='card-body'>
      <div className='card-title'>
        {task.title}
      </div>
      <div className='card-text'>
        {task.description}
      </div>
      <div className='footer'>
        {task.createdOn}
      </div>
    </div>
  </div>
)

export default ({tasks = []}) => {
  const conf = useContext(Config);
  return(
    <>
      {tasks
        .sort(conf.sorter)
        .map((task, index) => (
        <Todo task={task} key={index}/>
        ))}
    </>
  )
}