import "./input.scss";
const Input = ({
  isInput,
  handleChange,
  todo,
  handleDone,
  handleRemove,
  handleAddTodo,
}) => {
  if (isInput) {
    return (
      <div className="input__wrapper">
        <div className="input__checkmark">
          <form className="input__form" onSubmit={handleAddTodo}>
            <div className="input__circleContainer">
              <div className="input__circle" />
            </div>
            <input
              onChange={handleChange}
              type="text"
              required
              placeholder="Create a new todo"
            />
          </form>
        </div>
      </div>
    );
  }
};

export default Input;
