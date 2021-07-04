import toggleMoonIcon from "../../assets/icon-moon.svg";
const ThemeToggle = () => {
  return (
    <>
      <div className="theme__toggle">
        <img src={toggleMoonIcon} alt="switch to dark mode" />
      </div>
    </>
  );
};

export default ThemeToggle;
