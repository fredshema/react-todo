import "../styles/todo.css";
import Todo from "./Todo";

export default function TodosList({ todos }: { todos: string[] }) {
  return (
    <>
      <div className="row todos-list rounded">
        <div className="col-12">
          <ul className="list-group">
            {todos.map((todo, index) => (
              <li key={index} className="list-group-item">
                <Todo todo={todo} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
