import { useState } from "react";

// import "./App.css";

import TodoItem from "./components/TodoItem";
import { useSelector, useDispatch } from "react-redux";
// import { addTodo, removeTodo } from "./features/todoSlice";
import { addTodo, removeTodo } from "./components/todoSlice";

function App() {
  const [input, setInput] = useState("");

  const count = useSelector((state) => state.todo.count);
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput('')
  };

  const handleTodoDone = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div className="App">
      <h1>TODO List</h1>
      <form className="App-form" onSubmit={handleAddTodo}>
        {/* <input type="text" onInput={(e) => setInput(e.target.value)} /> */}
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Add Task</button>
      </form>
      <div className="Todos">
        {count > 0 &&
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              id={todo.id}
              onCheck={handleTodoDone}
            
            />
          ))}
        {count === 0 && <p>Add Tasks</p>}
      </div>
    </div>
  );
}

export default App;
