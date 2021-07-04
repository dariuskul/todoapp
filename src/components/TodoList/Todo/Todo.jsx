import PropTypes from "prop-types";
import "./todo.scss";
const Todo = ({ todo, completed }) => {
  let done = completed === true ? "todo__done" : null;
  return (
    <div className="todo__container">
      <div className="todo__wrapper">
        <div className="todo__typography">
          <div className="todo__circleContainer">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
              <path
                fill="none"
                stroke="black"
                stroke-width="2"
                d="M1 4.304L3.696 7l6-6"
              />
            </svg>
            <div className="todo__circle"></div>
          </div>
          <h3 className={done}>{todo}</h3>
        </div>
        <div className="todo__remove">
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
  );
};

Todo.propTypes = {
  todo: PropTypes.string,
  done: PropTypes.string,
};

export default Todo;