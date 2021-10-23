import { useState } from "react";
import { Input } from "../Input";

export const AddList = (props) => {
  const [title, setTitle] = useState("Add New ");
  const [body, setBody] = useState("Add Details");

  const handleSubmit = () => {
    console.log("Calling to backend service");
    props.addPost({ title, body });
  };

  return (
    <div className="card p-3 m-2" style={{ height: "95vh" }}>
      <h1>add new task </h1>

      <Input value={title} setValue={setTitle} label="Title" />
      <Input value={body} setValue={setBody} label="Body" />

      <button onClick={handleSubmit} className="btn btn-primary">
        Add task
      </button>
    </div>
  );
};
