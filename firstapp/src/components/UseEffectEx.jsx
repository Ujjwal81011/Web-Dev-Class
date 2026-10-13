import React, { useEffect, useState } from 'react'

const UseEffectEx = () => {
    const [product,setProducts]=useState([])
    useEffect(()=>{
        fetch("https://dummyjson.com/carts")
        .then(response=>response.json())
        .then(data=>setProducts(data.carts))
        .catch(error=>alert(error.message))
        
    },[])
   
  return (
    <div className='container' style={{height:"80vh"}}>
        {product.map((item)=>(
          <div key={item.id}>
            <li>ID:{item.id}</li>
            <li>Total Products:{item.totalProducts}</li>
            <li>Total Quantity:{item.totalQuantity}</li>           
            </div>
        ))}
        </div>
  )
}

export default UseEffectEx