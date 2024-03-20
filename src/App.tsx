import { useEffect, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodosList from "./components/TodosList";

function App() {
  const localTodos = localStorage.getItem("todos");
  const [todos, setTodos] = useState(localTodos ? JSON.parse(localTodos) : []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toggleCheck = (id: number) => {
    const newTodos = todos.map((todo: any) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const clearCompleted = () => {
    const newTodos = todos.filter((todo: any) => !todo.completed);
    setTodos(newTodos);
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo: any) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <>
      <div id="header-bg"></div>
      <div className="px-5 mx-auto" style={{ maxWidth: 580 }}>
        <div style={{ marginTop: 80 }}></div>
        <Header />
        <div style={{ marginTop: 60 }}></div>
        <CreateTodo setTodos={setTodos} />
        <TodosList
          todos={todos}
          toggle={toggleCheck}
          clearCompleted={clearCompleted}
          deleteTodo={deleteTodo}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
