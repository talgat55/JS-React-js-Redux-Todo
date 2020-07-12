import {createStore, combineReducers} from "redux";
import {TodoReducer} from "./TodoReducer";

export default createStore(combineReducers({
    todos: TodoReducer,
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());