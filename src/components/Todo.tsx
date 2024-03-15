import CrossImage from "../assets/images/icon-cross.svg";
import { ITodo } from "../types/Todo";

export default function Todo({
  todo,
  toggle,
  deleteTodo,
}: {
  todo: ITodo;
  toggle: Function;
  deleteTodo: Function;
}) {
  const handleToggle = () => {
    toggle(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <>
      <div className="row todo px-3 items-center">
        <input
          type="checkbox"
          className="check"
          checked={todo.completed}
          onChange={handleToggle}
        />
        <p className="my-0">{todo.title}</p>
        <div className="col"></div>
        <img
          src={CrossImage}
          alt="cross"
          className="close"
          onClick={handleDelete}
        />
      </div>
    </>
  );
}
