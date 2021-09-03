import React, {useState, useEffect} from 'react';
import './App.css';
// import logo from './loading.svg';
import Card from './Components/Card'
import Dispatcher from './Components/Dispatcher';
import OrderedItems from './Components/OrderedItems';

function App() {
  const url = 'https://vending-machine-test.vercel.app/api/products';
  const [products, setProducts] = useState([])

  // use state to select a product to the new state to be added to the dispatcher 
  const [select,setSelect] = useState([])
  const message = 'There was an Error with your request'

  // request to obtain the products from internal array
  const fetchApi = async () => {
    try {
      const res = await fetch(url)
      const resJSON = await res.json()
      setProducts(Object.values(resJSON)[0])      
    } catch (error) {
      window.alert(message);
    }
  }

useEffect(()=>{
  fetchApi()
}, [])
  return (
    <div className="App">
  
        <h1 className="text-light h1"> Vending Machine </h1>
          <h2 className="text-light h2">Select your products</h2>
          <div className="container d-flex justify-content-center align-items-center h-100 pb-4">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {/* iterated products to display items */}
                { !products ?  'Loading....' :
                  products.map( (todo,index)=>{
                    // passed setState as props to pass the state to child Comp
                    return <Card 
                    key={index} name={todo.name} prepTime={todo.preparation_time}
                    img={todo.thumbnail} id={todo.id} selectProduct={select =>{
                      setSelect(select)
                      // console.log(select);
              }}
              />
            })
          }
            <Dispatcher name="Dispatcher" id={select.id} prodName={select.name} 
            prepTime={select.prepTime} selectProduct={select =>{
              setSelect(select)}}/>
            <OrderedItems name="Ordered items"/>
          </div>
            </div>
    </div>
  );
}

export default App;