import React from 'react';

const TodoItem = ({todo,id, toggleTodo}) =>{
    return(
        <li
            className={todo.complete ? 'completed': ''}
            onClick={ () => toggleTodo(id) }
        >
            {todo.content}
        </li>
    )
};

export  default  TodoItem;