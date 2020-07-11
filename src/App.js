import React from 'react';
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilter from "./components/VisibilityFilter";

const FILTERS = ['all', 'complete', 'inncomplete'];
function App() {
  return (
    <div className="App">
       <h1>TODO</h1>
      <AddTodo/>
      <TodoList  todos={[{content: 'Task 1'}]} />
      <VisibilityFilter filter={FILTERS} />
    </div>
  );
}

export default App;
