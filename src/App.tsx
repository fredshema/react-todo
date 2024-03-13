import { useEffect, useState } from "react";
import bgDesktopDark from "./assets/images/bg-desktop-dark.jpg";
import bgDesktop from "./assets/images/bg-desktop-light.jpg";
import CreateTodo from "./components/CreateTodo";
import Header from "./components/Header";
import TodosList from "./components/TodosList";

function App() {
  const localTodos = localStorage.getItem("todos");
  const [todos, setTodos] = useState(localTodos ? JSON.parse(localTodos) : []);
  const [theme, setTheme] = useState("dark");
  const [bg, setBg] = useState(bgDesktop);

  useEffect(() => {
    setBg(theme === "light" ? bgDesktop : bgDesktopDark);
  });

  return (
    <>
      <div>
        <div
          style={{
            top: 0,
            zIndex: -1,
            height: 250,
            width: "100%",
            position: "fixed",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${bg})`,
          }}
        ></div>
        <div
          className="px-5"
          style={{
            maxWidth: 580,
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <div style={{ marginTop: 60 }}></div>
          <Header setTheme={setTheme} theme={theme} />
          <CreateTodo setTodos={setTodos} />
          <TodosList todos={todos} />
        </div>
      </div>
    </>
  );
}

export default App;
