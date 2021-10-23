import { Card } from "../Card";

export const Task = (props) => {
  return (
    <Card>

      <div>
        <h4>{props.title}</h4>
        <p>{props.body}</p>
        <button className="btn btn-danger m-2"  > delete </button>
      </div>
      
    </Card>
  );
};
