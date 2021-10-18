import React, { useState, useEffect } from "react";
import axios from "axios";

function AddTodo(props) {
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");

  //第二引数の[query]が変更したら実行される
  useEffect(() => {
    axios.post(`http://localhost:3000/todos`, { task: query }).catch((e) => {
      console.log(e);
    });
  }, [query]);

  //ボタンのsubmitで実行される setQueryが実行されて、useEffectが発火
  const onSubmit = (e) => {
    e.preventDefault(); //画面遷移を防ぐ
    setQuery(text);
    setText("");
  };

  return (
    <>
      <div className="App">
        <div className="main">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <button type="submit">POST</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
