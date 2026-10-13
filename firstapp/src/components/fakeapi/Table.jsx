import React, { useEffect, useState } from 'react'

const Table = () => {
  const [recipes,setRecipes]=useState([]);
  const getQuotes=async ()=>{
        const data=await fetch("https://dummyjson.com/recipes");
        const response=await data.json();
        setRecipes(await response.recipes);
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
      <h2>List of Quotes</h2>
      <table className='table table-dark'>
        <thead className='table-dark text-center'>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Ingredients</th>
          <th>Instructions</th>
          <th>Image</th>
        </tr>
        </thead>
        <tbody className='table-warning'>
{recipes.map((row)=>(
        <tr>
          <td>{row.id}</td>
          <td>{row.name}</td>
          <td>{row.ingredients.map(
            (list,index)=>(<li key={index}>{list}</li>)
          )}</td>
          <td>{row.instructions.map(
            (list,index)=>(<li key={index}>{list}</li>)
          )}</td>
          <td><img src={row.image} width={100} height={100} alt="not found"></img></td>
        </tr>
      ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table