import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './Component/header/Header'
import Body from './Component/body/Body'
import Register from './Component/body/Registration'
import Student from './Component/body/Student'
import Footer from './Component/footer/Footer'

const App = () => {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/stud" element={<Student />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App