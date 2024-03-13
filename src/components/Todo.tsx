export default function Todo({ todo }: { todo: string }) {
  return (
    <>
      <div className="row todo px-3 rounded">
        <input type="checkbox" className="check" />
        <span>{todo}</span>
      </div>
    </>
  );
}
