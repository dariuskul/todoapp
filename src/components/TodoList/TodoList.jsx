import Todo from "./Todo/Todo.jsx";
import "./todoList.scss";
const TodoList = ({ todos }) => {
  if (!todos && todos?.length < 0) {
    return <h1>There are no todos right now, add one!</h1>;
  }
  console.log(todos);

  return (
    <div className="todos__container">
      <div className="todos__wrapper">
        {todos.map((todo, idx) => (
          <Todo
            className="todo"
            key={idx}
            todo={todo.name}
            completed={todo.completed}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
