import React, {useState, useEffect} from 'react';
import './App.css';
import Cards from './Components/Cards'

function App() {
  const url = 'https://vending-machine-test.vercel.app/api/products';
  const [products, setProducts] = useState([])

  // request to obtain the products from internal array
  const fetchApi = async () => {
    const res = await fetch(url)
    const resJSON = await res.json()
    setProducts(Object.values(resJSON)[0])
    console.log(products)
  }

useEffect(()=>{
  fetchApi()
}, [])
  return (
    <div className="App">
      <div>
        <h1 className="text-light"> Vending Machine </h1>
          <h2 className="text-light">Select your products</h2>
          {/* iterated products to display items */}
          <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row row-cols-1 row-cols-md-3 g-4">
          { !products ? 'Loading... ':
            products.map( (todo,index)=>{
              return <Cards key={todo.id} name={todo.name} prepTime={todo.preparation_time}
              img={todo.thumbnail}
              />
          })
          }
          </div>
            </div>
      </div> 
    </div>
  );
}

export default App;
