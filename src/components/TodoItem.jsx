import React from 'react';

const TodoItem = ({todo}) =>{
    return(
        <li>
            {todo.content}
        </li>
    )
};

export  default  TodoItem;