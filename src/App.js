import React from 'react';
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilter from "./components/VisibilityFilter";
import {Provider} from 'react-redux'
import store from './redux/store'

const FILTERS = ['all', 'complete', 'incomplete'];

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>TODO</h1>
                <AddTodo/>
                <TodoList todos={[{content: 'Task 1'}]}/>
                <VisibilityFilter filter={FILTERS}/>
            </div>
        </Provider>
    );
}

export default App;
