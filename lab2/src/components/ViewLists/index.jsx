import { Task } from "../Task";

export const ViewLists = (props) => {
  return (
    <div className="card p-2 m-2" style={{ height: "95vh" }}>
      <h1>Tasks I have To Do</h1>
      <button className="btn btn-danger m-2" onClick={props.onDelete}>
        Delete
      </button>
      {props.posts.map((p) => (
        <Task title={p.title} body={p.body} />
      ))}
    </div>
  );
};