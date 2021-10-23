// import { Todo } from "./components/Todo";
// export const App = () => {
//   const todos=[
//    { title:"first", details: "do the first" },
//    { title:"second", details: "do the first" },
//    { title:"third", details: "do the first" },
//    { title:"fourth", details: "do the first" },
//   ];
//   // return <h1>App</h1>;
//   return(

// <div>
//   <h1>my to do list</h1>
//   {todos.map((todo) => (
//     <Todo title={todo.title} details={todo.details} />
//   ))}
// </div>


//   )


// };
import { useState } from "react";
import { ViewLists } from "./components/ViewLists";
import { AddList } from "./components/AddList";

export const App = () => {
  const [posts, setPosts] = useState([]);

  
  const handleDelete = () => {
    setPosts([]);
  };
 

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <AddList addPost={addPost} />
        </div>
        <div className="col-6">
          <ViewLists
            posts={posts}
            onDelete={handleDelete}
            // itemdelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};