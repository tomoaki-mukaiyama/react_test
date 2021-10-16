import React, { useState, useEffect } from  'react';
import './App.css';
import axios from 'axios'

function App() {
  const [text, setText] = useState('');
  const [query, setQuery] = useState('');

   //第二引数の[query]が変更したら実行される
  useEffect(() => {
    console.log('userEffectが走りました。')
    axios.post(`http://localhost:3000/todos`, {task: query});
  }, [query])

  //ボタンのsubmitで実行される setQueryが実行されて、useEffectが発火
  const onSubmit = (e) => {
    e.preventDefault(); //画面遷移を防ぐ
    setQuery(text);
    setText('');
    console.log("onSubmitが呼ばれました。");
  }
  
  return(
    <div className="App">
      <div className="main">
        <form onSubmit={onSubmit}>
          <input 
            type="text"
            onChange={e => setText(e.target.value)}
            value = {text}
            />
            <button type="submit">Search</button>
        </form>
      </div>
      <div className="container">
      </div>
    </div>
  )
}

export default App;