interface Todo {
  title: string;
  id: number;
}

import { useEffect, useState } from "react";

import "./App.css";
import Login from "./components/Login.1";

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((res) => setTodo(res.slice(0, 10)));
  }, []);

  return (
    <>
      <Login />
      {todo.length > 0
        ? todo.map((item: Todo) => {
            <h1>{item.title}</h1>;
          })
        : console.log("load")}
    </>
  );
}

export default App;
