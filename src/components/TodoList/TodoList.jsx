import { useState } from "react";

import { calculateCompleted } from "../../helpers/calculateCompletedTodos.js";
import { filter } from "../../helpers/filter.js";

import Controls from "../Controls/Controls.jsx";
import Todo from "./Todo/Todo.jsx";

import { DragDropContext, Droppable } from "react-beautiful-dnd";

import "./todoList.scss";
const TodoList = ({
  todos,
  handleComplete,
  handleRemove,
  handleClear,
  handleReorder,
}) => {
  const [filterBy, setFilterBy] = useState("");

  if (!todos && todos?.length < 0) {
    return <h1>There are no todos right now, add one!</h1>;
  }

  const todoLefts = calculateCompleted(todos);
  const todosToShow = filter(todos, filterBy);

  return (
    <div className="todos__container">
      <div className="todos__wrapper">
        <DragDropContext onDragEnd={(res) => handleReorder(res)}>
          <Droppable droppableId="todos">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {todosToShow.map((todo, idx) => (
                  <Todo
                    key={idx}
                    className="todo"
                    todo={todo.name}
                    completed={todo.completed}
                    handleComplete={handleComplete}
                    index={idx}
                    handleRemove={handleRemove}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        {todos.length > 0 && (
          <Controls
            completedCount={todoLefts}
            setFilterBy={setFilterBy}
            clear={handleClear}
          />
        )}
      </div>
    </div>
  );
};

export default TodoList;
