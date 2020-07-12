import {createStore, combineReducers} from "redux";
import {TodoReducer} from "./TodoReducer";
import {visibilityFilterReducer} from "./visibilityFilterReducer";

export default createStore(combineReducers({
    todos: TodoReducer,
    visibilityFilter: visibilityFilterReducer,
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());