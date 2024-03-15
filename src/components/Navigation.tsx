import "../styles/nav.css";

export default function Navigation({
  length,
  filter,
  setFilter,
  clearCompleted,
}: {
  length: number;
  filter: string;
  setFilter: Function;
  clearCompleted: Function;
}) {
  return (
    <>
      <section id="nav" className="row justify-between p-3 text-sm">
        <div className="col-auto">
          <span className="text-muted">{length} Items left</span>
        </div>
        <div className="col">
          <div className="row justify-around text-center navs">
            <a
              href="#"
              className={filter === "all" ? "active" : ""}
              onClick={() => setFilter("all")}
            >
              All
            </a>
            <a
              href="#"
              className={filter === "active" ? "active" : ""}
              onClick={() => setFilter("active")}
            >
              Active
            </a>
            <a
              href="#"
              className={filter === "completed" ? "active" : ""}
              onClick={() => setFilter("completed")}
            >
              Completed
            </a>
          </div>
        </div>
        <div className="col-auto text-right">
          <a href="#" onClick={() => clearCompleted()}>
            Clear completed
          </a>
        </div>
      </section>
    </>
  );
}
