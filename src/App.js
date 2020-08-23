import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() { 
  const nayoks = [ 'Abir','Rasel','Ajad','Mamun','Rahdiul','Mehedi','Momin']
  const productsList = [
      { name:'PhotoShope', price:'$90.99'},
      { name:'Illustator', price:'$60.90'},
      { name:'Lightroom', price:'$50.90'},
      { name:'Premiere Pro', price:' $40.5'},
   
  ]
  // const productName = productsList.map(product => product.price)
  //  console.log(productName);
  // const nayokName = nayoks.map(rashidul => rashidul )
  //  console.log(nayokName);
  return (
    <div className="App">
      <header className="App-header">
        <Users></Users>
      <Counter></Counter>
        <ol>
          {
            nayoks.map(nayok => <li>{nayok}</li>) 
          } 
          {/* <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li> */}
        </ol>  
       
          {
            productsList.map(pd => <Product productShow = {pd}></Product>)
          }
          
        
        {/* <Product productShow = {productsList[0]}></Product>
        <Product productShow = {productsList[1]}></Product>
        <Product productShow = {productsList[2]}></Product>
        <Product productShow = {productsList[3]}></Product>       */}
      </header>
    </div>
  );
}
function Users (){
  const [users, setUsers] = useState([]);
  useEffect (() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h1>Define of Users :{users.length} </h1>
      <ul>
        {
          users.map(user => <li>{user.name} {user.phone} </li>)
        }
      </ul>
    </div>
  )
}
function Counter (){
  const [count, setCount] = useState(0);
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick ={() => setCount (count+1)}>Increase</button>
      <button onClick={() => setCount (count-1)}>Decrease</button>
    </div>
  )
}

function Product(props){
  const productColor = {
      color: 'red',
      border: '1px solid gray',
      borderRadius : '5px',
      backgroundColor: 'lightgray',
      height: '250px',
      width: '200px',
      float: 'left',
      margin: '10px',
    
  }
    return(
      <div style={productColor}>
        
        <h5>{props.productShow.name}</h5>
        <h4> {props.productShow.price}</h4>
        <button>Buy Now</button>
      </div>
    )
  }


export default App;
