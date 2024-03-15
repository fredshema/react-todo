import { Draggable } from "react-beautiful-dnd";
import CrossImage from "../assets/images/icon-cross.svg";
import { ITodo } from "../types/Todo";

export default function Todo({
  todo,
  index,
  toggle,
  deleteTodo,
}: {
  todo: ITodo;
  index: number;
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
    <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="row todo px-3 items-center"
        >
          <input
            type="checkbox"
            className="check"
            checked={todo.completed}
            onChange={handleToggle}
          />
          <div className="col">
            <p className="my-0">{todo.title}</p>
          </div>
          <img
            src={CrossImage}
            alt="cross"
            className="close"
            onClick={handleDelete}
          />
        </div>
      )}
    </Draggable>
  );
}
