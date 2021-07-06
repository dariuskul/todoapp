import { useState } from "react";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import { clearCompleted } from "./helpers/clearCompleted";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const handleAddTodo = (e) => {
    e.preventDefault();
    setTodos((rest) => [...rest, { name: input, completed: false }]);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleComplete = (idx) => {
    let newArr = [...todos];
    newArr[idx].completed = !newArr[idx].completed;
    setTodos(newArr);
  };

  const handleRemove = (idx) => {
    let modifiedArr = [...todos];
    modifiedArr.splice(idx, 1);
    setTodos(modifiedArr);
  };

  const handleClear = () => {
    let newArr = clearCompleted(todos);
    setTodos(newArr);
  };

  const handleReorder = ({ destination, source }) => {
    if (destination !== null && source !== null) {
      let arr = [...todos];
      let temp = arr[destination.index];
      arr[destination.index] = arr[source.index];
      arr[source.index] = temp;

      setTodos(arr);
    }
  };

  return (
    <div>
      <Header handleChange={handleChange} handleAddTodo={handleAddTodo} />
      {todos && (
        <TodoList
          todos={todos}
          handleComplete={handleComplete}
          handleRemove={handleRemove}
          handleClear={handleClear}
          handleReorder={handleReorder}
        />
      )}
    </div>
  );
};

export default App;
