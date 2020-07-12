import {ADD_TODO, DELETE_TODO, SET_FILTER, TOGGLE_TODO} from "./types";

/**
 *
 * @param content
 * @returns {{payload: {content: *}, type: string}}
 */
export const addTodo = content => {
    return {
        type: ADD_TODO,
        payload: {
            content
        }
    }
};

/**
 *
 * @param id
 * @returns {{payload: {id: *}, type: string}}
 */
export const toggleTodo = id=>{
  return {
      type: TOGGLE_TODO,
      payload: {
          id
      }
  }
};
/**
 *
 * @param id
 * @returns {{payload: {id: *}, type: string}}
 */
export const deleteTodo = id =>{
    return {
        type: DELETE_TODO,
        payload: {
            id
        }
    }
};
/**
 *
 * @param filter
 * @returns {{payload: {filter: *}, type: string}}
 */
export const setFilter = filter =>{
    return{
        type: SET_FILTER,
        payload: {
            filter
        }
    }
};



