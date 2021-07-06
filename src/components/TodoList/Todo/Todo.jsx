import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
import "./todo.scss";
const Todo = ({ todo, completed, handleComplete, handleRemove, index }) => {
  let done = completed === true ? "todo__done" : null;
  let checkMark = completed === true ? "check__mark" : null;
  return (
    <Draggable draggableId={index.toString()} key={index} index={index}>
      {(provided) => (
        <div
          className="todo__container"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="todo__wrapper">
            <div className="todo__typography">
              <div
                className={`todo__circleContainer ${checkMark}`}
                onClick={() => handleComplete(index)}
              >
                {completed && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                    <path
                      fill="none"
                      stroke="#FFF"
                      strokeWidth="2"
                      d="M1 4.304L3.696 7l6-6"
                    />
                  </svg>
                )}
                <div></div>
              </div>
              <h3 className={done}>{todo}</h3>
            </div>
            <div className="todo__remove" onClick={() => handleRemove(index)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                <path
                  fill="#494C6B"
                  fillRule="evenodd"
                  d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

Todo.propTypes = {
  todo: PropTypes.string,
  done: PropTypes.string,
};

export default Todo;
