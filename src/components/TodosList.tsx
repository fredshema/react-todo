import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import EmptyImg from "../assets/images/3016826.webp";
import "../styles/todo.css";
import { ITodo } from "../types/Todo";
import Navigation from "./Navigation";
import Todo from "./Todo";

type IFilter = "all" | "active" | "completed";

const reorder = (list: ITodo[], startIndex: any, endIndex: any) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default function TodosList({
  todos,
  toggle,
  clearCompleted,
  deleteTodo,
}: {
  todos: ITodo[];
  toggle: Function;
  clearCompleted: Function;
  deleteTodo: Function;
}) {
  const [filter, setFilter] = useState<IFilter>("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
  });

  const leftItems = todos.filter((todo) => !todo.completed).length;

  const [items, setItems] = useState(todos);

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    setItems(reorder(items, result.source.index, result.destination.index));
  };

  return (
    <>
      <div className="row todos-list rounded flex-wrap shadow-md">
        {todos.length === 0 && (
          <div className="col-12 flex-center flex-col py-3">
            <img
              src={EmptyImg}
              style={{ maxWidth: 150 }}
              alt="empty"
              className="empty-img"
            />
            <p className="my-0">Waiting for new tasks</p>
          </div>
        )}
        {todos.length > 0 && (
          <div className="col-12">
            <ul className="list-group">
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      {filteredTodos.map((todo, index) => (
                        <Draggable
                          key={todo.id.toString()}
                          draggableId={todo.id.toString()}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <Todo
                                todo={todo}
                                toggle={toggle}
                                deleteTodo={deleteTodo}
                              />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </ul>
          </div>
        )}
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
