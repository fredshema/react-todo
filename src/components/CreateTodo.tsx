import "../styles/create-todo.css";

function CreateTodo({ setTodos }: { setTodos: Function }) {
  return (
    <>
      <div className="row create-todo-form px-3 rounded">
        <input type="checkbox" />
        <div className="input">
          <input
            type="text"
            className="py-3"
            placeholder="Create a new todo..."
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                setTodos((prevTodos: string[]) => [
                  ...prevTodos,
                  (e.target as HTMLInputElement).value,
                ]);
                (e.target as HTMLInputElement).value = "";
              }
            }}
          />
        </div>
      </div>
    </>
  );
}

export default CreateTodo;
