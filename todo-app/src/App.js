import './App.css';
import React, { useEffect, useState } from 'react';
import Todo from './Todo';
function App() {

  const getitems = () =>{
    const localdata = localStorage.getItem('todos');
    return localdata ? JSON.parse(localdata) : [];
  }
  const [todos,setTodos] = useState(getitems());
  const [input,setInput] = useState([]);

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos]);

  const remov = ()=>{
    setTodos(todos.filter(todo => todo == '.'));
  }

  const readtodo = () =>{
    console.log('hey');
    setTodos([...todos,input]);
    setInput("");

  }
  return (
    <div className="App">
      <h1 className ='app__heading'>Todo-app</h1>
      <input className='app__input' placeholder='enter here...' value= {input} onChange= {e => setInput(e.target.value)} />
      <button className='app__btn' onClick= {readtodo}>add todo</button> 
      <button className='app__del' onClick={remov}>delete</button>
      <div>
       <h2 className='app__heading2'>Todo lists</h2>
       {todos.map(todo => <p><Todo text= {todo}/></p>)}
      </div> 
    </div>
  );
}

export default App;
