import "./App.css";
import { TodoProvider } from "./context/Todocontext";
import Todoform from "./components/Todoform";
import TodoItem from "./components/TodoItem";
import { useEffect, useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  console.log(todos);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <TodoProvider
        value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
      >
        <Todoform></Todoform>
        {todos.map((todo) => (
          // <div key={todo.id}>
          <TodoItem todo={todo} />
          // </div>
          //
        ))}
      </TodoProvider>
    </>
  );
}

export default App;
