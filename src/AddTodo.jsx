import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Button = styled.button`
  background-color: white;
  border-style: none;
  padding: 0px;
`;
const Form = styled.input`
  height: 40px;
  width: 95%;
  padding: 0 10px;
  font-size: 18px;
  margin: 10px;
`;

const TextArea = styled.textarea`
  height: 400px;
  width: 95%;
  padding: 0 10px;
  font-size: 18px;
  margin: 10px;
`;

function AddTodo(props) {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [query, setQuery] = useState("");

  //第二引数の[query]が変更したら実行される
  useEffect(() => {
    axios
      .post(`http://localhost:3000/todos`, {
        task: query[0],
        description: query[1],
      })
      .catch((e) => {
        console.log(e);
      });
  }, [query]);

  //ボタンのsubmitで実行される setQueryが実行されて、useEffectが発火
  const onSubmit = (e) => {
    e.preventDefault(); //画面遷移を防ぐ
    setQuery([task, description]);
    setTask("");
    setDescription("");
  };

  return (
    <>
      <div className="App">
        <div className="main">
          <form onSubmit={onSubmit}>
            <ul>
              <li>
                <Form
                  onChange={(e) => setTask(e.target.value)}
                  value={task}
                  placeholder="task"
                />
              </li>
              <li>
                <TextArea
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  placeholder="description"
                />
              </li>
              <Button type="submit"></Button>
            </ul>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
