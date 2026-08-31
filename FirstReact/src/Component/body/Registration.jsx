import React from 'react'

const Registration = () => {
  return (
    <>
        <h2>Registration Form</h2>
        <form>
            <input type="text"
            name= "user"
            placeholder='enter user name' />
            <input type="password" 
            placeholder='Enter passwords'/>
        </form>
    </>
  )
}

export default Registration