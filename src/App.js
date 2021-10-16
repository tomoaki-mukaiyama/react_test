import React, { useState, useEffect } from  'react';
import './App.css';
import axios from 'axios'

function App() {
  const [images, setImages] = useState([]);
  const [text, setText] = useState('');
  const [query, setQuery] = useState('golden retriever');

   //第二引数の[query]が変更したら実行される
  // useEffect(() => {
  //   console.log('userEffectが走りました。')
  //   fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.REACT_APP_CLIENT_ID}`)
  //   .then(response => response.json())
  //   .then(data => {
  // console.log(data.results[0].urls)
  //     setImages(data.results)
  //   })
  // }, [query])

  //ボタンのsubmitで実行される setQueryが実行されて、useEffectが発火
  const onSubmit = (e) => {
    axios.get(`http://localhost:3000/push`, {withCredentials: true});
    e.preventDefault(); //画面遷移を防ぐ
    setQuery(text);
    setText('');
    console.log("onSubmitが呼ばれました");
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
        {
          images.map(image => (
            <div key={image.id} className="card">
              <img src={image.urls.regular} className="card-img" alt="" />
              <div className="card-contnet">
                <div className="card-title">
                  {image.alt_description}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App;