import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './Component/header/Header'
import Student from './Component/body/Student'
import Registration from './Component/body/Registration'
import Counter from './Component/Counter'
import Plus from './Component/Plus'
import Footer from './Component/footer/Footer'
import Error from './Component/Error'

const App = () => {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/stud" element={<Student />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/plus" element={<Plus />} />
        <Route path="*" element = {<Error/>}/>
      </Routes>

      <Footer />
    </div>
  )
}

export default App