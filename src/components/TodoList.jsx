import React from 'react';
import TodoItem from "./TodoItem";
import {connect} from 'react-redux';
import * as _ from 'underscore';
import {toggleTodo} from "../store/actions";
import {FILTER_ALL, FILTER_COMPLETED} from "../store/types";


const TodoList = ({todos,toggleTodo}) => {
    return (
        _.keys(todos).map( id =>(
          <TodoItem
            key={id}
            id={id}
            toggleTodo={toggleTodo}
            todo={todos[id]}
          />
        ))
    )
};
const mapStateToProps = state =>{

    if(state.visibilityFilter.activeFilter === FILTER_ALL){
        return{
            todos: state.todos.data
        }
    }else if( state.visibilityFilter.activeFilter ===  FILTER_COMPLETED){
        return {
            todos: _.pick(state.todos.data, todo => todo.complete)
        }
    } else{
        return {
            todos: _.pick(state.todos.data, todo => !todo.complete)
        }
    }
};
const mapDispatchToProps = {
    toggleTodo
};

export  default  connect( mapStateToProps , mapDispatchToProps) (TodoList);