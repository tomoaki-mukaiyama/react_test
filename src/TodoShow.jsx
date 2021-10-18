import React, { useState, useEffect } from 'react';
import axios from 'axios'

function TodoShow (props) {
  const [todo, setTodo] = useState([])
  
  const getTodo = id => {
    axios.get(`http://localhost:3000/todos/${id}`)
    .then(resp => {
      setTodo(resp.data)
    })
    .catch(e => {
      console.log(e)
    })
  }

  useEffect(() => {
    getTodo(props.match.params.id)
  }, [props.match.params.id])
  
  return(
    <>
    <h2>{todo.task}</h2>
    {todo.description}
    </>
  )
}

export default TodoShow
