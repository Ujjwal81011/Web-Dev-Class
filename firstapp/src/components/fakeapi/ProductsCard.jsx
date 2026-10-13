import React, { useEffect, useState } from 'react'
import Card from './fakeapi/Card';

const ProductsCard = () => {
  const [products,setProducts]=useState([]);
  const getQuotes=async ()=>{
        const data=await fetch("https://dummyjson.com/products");
        const response=await data.json();
        setProducts(await response.products);
  }
  useEffect(()=>{
    getQuotes();
    //  fetch("https://dummyjson.com/quotes")
    //  .then(response=>response.json())
    //  .then(data=>setQuotes(data.quotes))
    //  .catch(error=>alert(error.message))
  },[])
  return (
    <div className='container'>
      <h2>List of Products</h2>
    <div className='row'>
{products.map((row)=>(
       <Card
       id={row.id}
       title={row.title}
       description={row.description}
       category={row.category}
       price={row.price}
       rating={row.rating}
       stock={row.stock}
       thumbnail={row.thumbnail}
       />
      ))}
     </div>
    </div>
  )
}

export default ProductsCard