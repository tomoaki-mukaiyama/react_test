import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Form = styled.input`
  height: 40px;
  width: 95%;
  padding: 0 10px;
  font-size: 18px;
  margin: auto;
`;

function AddTodo(props) {
  const [url, setUrl] = useState("");

  //第二引数の[query]が変更したら実行される
  const postTodo = () => {
    axios
      .post(`http://localhost:3000/todos/scrape`, {
        task: url,
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const focusForm = () => {
    var input = document.querySelector("input");
    input.focus();
  };

  //ボタンのsubmitで実行される setQueryが実行されて、useEffectが発火
  const onSubmit = (e) => {
    e.preventDefault(); //画面遷移を防ぐ
    postTodo(url);
    setUrl("");
  };

  useEffect(() => {
    focusForm();
  }, []);

  return (
    <>
      <div className="App">
        <div className="main">
          <form onSubmit={onSubmit}>
            <ul>
              <li>
                <Form
                  onChange={(e) => setUrl(e.target.value)}
                  value={url}
                  placeholder="url"
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
