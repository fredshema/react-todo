import { useState } from "react";
import moonIcon from "../assets/images/icon-moon.svg";
import sunIcon from "../assets/images/icon-sun.svg";

function Header() {
  let theme = localStorage.getItem("theme");
  if (theme === null) {
    if (window.matchMedia !== undefined) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        theme = "dark";
      } else {
        theme = "light";
      }
    }
  }

  const [icon, setIcon] = useState(theme === "light" ? moonIcon : sunIcon);

  const setTheme = (theme: string) => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.remove(theme === "light" ? "dark" : "light");
    document.documentElement.classList.add(theme);
    setIcon(theme === "light" ? moonIcon : sunIcon);
  };

  return (
    <section className="row justify-between items-center">
      <h1>TODO</h1>
      <img
        src={icon}
        style={{
          width: "1.5rem"
        }}
        alt="Toggle theme"
        className="img-fluid cursor-pointer"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      />
    </section>
  );
}

export default Header;
