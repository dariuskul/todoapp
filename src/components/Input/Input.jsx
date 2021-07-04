import check from "../../assets/icon-check.svg";
import "./input.scss";
const Input = ({
  isInput,
  handleChange,
  todo,
  handleDone,
  handleRemove,
  handleSubmit,
}) => {
  if (isInput) {
    return (
      <div className="input__wrapper">
        <div className="input__checkmark">
          <form className="input__form" onSubmit={handleSubmit}>
            <div className="input__circleContainer">
              <div className="input__circle" />
            </div>
            <input
              onChange={handleChange}
              type="text"
              placeholder="Create a new todo"
            />
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="todo__wrapper">
      {todo ? <div className="todo__container"></div> : <h1>Empty</h1>}
    </div>
  );
};

export default Input;
