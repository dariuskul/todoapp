import Input from "../Input/Input";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./header.scss";
const Header = ({ handleChange, handleAddTodo }) => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__typography">
          <h1>Todo</h1>
          <ThemeToggle />
        </div>

        <div className="header__input">
          <Input
            isInput
            handleChange={handleChange}
            handleAddTodo={handleAddTodo}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
