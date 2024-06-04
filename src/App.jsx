import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

const api = 'http://localhost:3000';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const handleClick = 
  async () => {
    const response = await axios.get(`${api}/blogs`);
    const result = response.data;
    setData(data => result);
  }
  return (
    <>
      <h1>CRUD JSON</h1>
      <p>{data.map((blog) => <li key = {blog.id}>{blog.title}</li>)}</p>
      <button onClick = {handleClick}>click</button>
    </>
  )
}

export default App
