import { useState } from "react";
import "../styles/todo.css";
import { ITodo } from "../types/Todo";
import Navigation from "./Navigation";
import Todo from "./Todo";

type IFilter = "all" | "active" | "completed";

export default function TodosList({
  todos,
  toggle,
  clearCompleted,
}: {
  todos: ITodo[];
  toggle: Function;
  clearCompleted: Function;
}) {
  const [filter, setFilter] = useState<IFilter>("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
  });

  const leftItems = todos.filter((todo) => !todo.completed).length;

  return (
    <>
      <div className="row todos-list rounded flex-wrap shadow-md">
        <div className="col-12">
          <ul className="list-group">
            {filteredTodos.map((todo) => (
              <Todo key={todo.id} todo={todo} toggle={toggle} />
            ))}
          </ul>
        </div>
        <div className="col-12">
          <Navigation
            length={leftItems}
            filter={filter}
            setFilter={setFilter}
            clearCompleted={clearCompleted}
          />
        </div>
      </div>
    </>
  );
}
