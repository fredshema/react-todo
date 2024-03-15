import "../styles/create-todo.css";
import { ITodo } from "../types/Todo";

function CreateTodo({ setTodos }: { setTodos: Function }) {
  const handleCreateTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const input = String((e.target as HTMLInputElement).value);
      setTodos((prevTodos: ITodo[]) => [
        ...prevTodos,
        {
          id: new Date().getTime(),
          title: input,
          completed: false,
        },
      ]);
      (e.target as HTMLInputElement).value = "";
    }
  };
  return (
    <>
      <div className="row create-todo-form px-3 rounded">
        <input type="checkbox" />
        <div className="input">
          <input
            type="text"
            className="py-3"
            placeholder="Create a new todo..."
            onKeyUp={handleCreateTodo}
          />
        </div>
      </div>
    </>
  );
}

export default CreateTodo;
