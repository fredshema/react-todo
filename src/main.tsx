import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const theme = localStorage.getItem("theme");
document.documentElement.classList.remove("light", "dark");
if (theme !== null) {
  document.documentElement.classList.add(theme);
} else {
  if (window.matchMedia !== undefined) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <div className="attribution">
      Challenge by&nbsp;
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a href="https://github.com/fredshema" target="_blank">
        Fred Shema
      </a>
      .
    </div>
  </>
);
