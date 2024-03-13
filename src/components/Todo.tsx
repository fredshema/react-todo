import { ITodo } from "../types/Todo";

export default function Todo({
  todo,
  toggle,
}: {
  todo: ITodo;
  toggle: Function;
}) {
  const handleToggle = () => {
    toggle(todo.id);
  };
  return (
    <>
      <div className="row todo px-3">
        <input
          type="checkbox"
          className="check"
          checked={todo.completed}
          onChange={handleToggle}
        />
        <span>{todo.title}</span>
      </div>
    </>
  );
}
