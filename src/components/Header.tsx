import { useEffect, useState } from "react";
import moonIcon from "../assets/images/icon-moon.svg";
import sunIcon from "../assets/images/icon-sun.svg";

function Header({ setTheme, theme }: { setTheme: Function; theme: string }) {
  const [icon, setIcon] = useState(theme === "light" ? moonIcon : sunIcon);

  useEffect(() => {
    setIcon(theme === "light" ? moonIcon : sunIcon);
  });

  return (
    <section className="row justify-between items-center">
      <h1 className="text-lg">TODO</h1>
      <img
        src={icon}
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
