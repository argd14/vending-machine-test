import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const url = 'https://vending-machine-test.vercel.app/api/products';
  const [state, setstate] = useState()
const fetchApi = async ()=>{
  const res = await fetch(url)
  console.log(res.status);
  const resJSON = await res.json()
  setstate(resJSON)
  console.log(resJSON);
}

useEffect(()=>{
  fetchApi()
}, [])

  return (
    <div className="App">
      <h1>Hola</h1>
    </div>
  );
}

export default App;
