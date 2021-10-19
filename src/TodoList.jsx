import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/todos")
      .then((resp) => {
        console.log(resp.data);
        setTodos(resp.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <div className="task-container">
        <ul className="content-task">
          {todos.map((todo) => {
            return (
              <Link to={"/todo/" + todo.id}>
                <li>
                  {todo.created_at}　{todo.task}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
