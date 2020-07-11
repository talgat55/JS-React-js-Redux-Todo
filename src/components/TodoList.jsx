import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({todos}) => {
    return (
        todos.map((todo,index) =>(
          <TodoItem
            key={index}
            todo={todo}
          />
        ))
    )
};
export  default  TodoList;