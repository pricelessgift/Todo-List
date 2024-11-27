import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const Todo = ({task, toogleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>
        <p onClick={() => toogleComplete(task.id)}
          className={`${task.completed ? 'completed' : ''}
          `}> {task.task} </p>
        <div>
            <FontAwesomeIcon icon={faPenToSquare} 
            onClick={() => editTodo(task.id)}/>
            <FontAwesomeIcon icon={faTrash} onClick={()=> deleteTodo(task.id)} />
        </div>
    </div>
  )
}

export default Todo;