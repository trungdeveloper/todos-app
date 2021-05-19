import React, { useState } from "react";
import Todo from "./Todo";

function App() {
  const [state, setState] = useState();
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setState(e.target.value);
  }

  const handleClick = () => {
    const newTodo = todos;
    newTodo.push(state);
    setTodos(newTodo);
  }


  return (
    <div className="App">
      <input value={state} onChange={(e) => handleChange} />
      <button onClick={handleClick}>Submit</button>
      {todos.map(e => <Todo todo={e} />)}
    </div>
  );
}

export default App;
