import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
const todos = [
  { name: "Jog around the park", completed: false },
  { name: "he", completed: "false" },
];
const App = () => {
  return (
    <div>
      <Header />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
