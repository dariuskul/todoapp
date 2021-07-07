import { useState } from "react";
import toggleMoonIcon from "../../assets/icon-moon.svg";
import toggleSunIcon from "../../assets/icon-sun.svg";
const ThemeToggle = () => {
  const [dark, setDark] = useState(false);
  const handleMode = () => {
    const element = document.getElementById("root");
    if (element.className === "dark__mode") {
      element.className = "";
      setDark(false);
    } else {
      element.className = "dark__mode";
      setDark(true);
    }
  };

  return (
    <>
      <div className="theme__toggle" onClick={handleMode}>
        <img
          src={dark ? toggleSunIcon : toggleMoonIcon}
          alt="switch to dark mode"
        />
      </div>
    </>
  );
};

export default ThemeToggle;
