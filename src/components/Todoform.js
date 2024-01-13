import { useState } from "react";
import { useTodo } from "../context/Todocontext";

function Todoform() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
  };
  return (
    <>
      <form onSubmit={add}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="Enter Todo"
        ></input>
        <button type="submit">Button</button>
      </form>
    </>
  );
}
export default Todoform;
