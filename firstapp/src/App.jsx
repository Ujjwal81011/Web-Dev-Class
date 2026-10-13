import React,{ Suspense} from 'react'
import Reg from './components/Reg'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
const LazyContact =React.lazy(()=>import("./components/Contact"));
// import Contact from './components/Contact'
import About from './components/About'
import CounterP from './components/CounterP'
import Error from './components/Error'
import Product from './components/Product'
import { Route, Routes } from 'react-router-dom'
import Courses from './components/Courses'
import YouTube from "./components/YouTube"
import Certificates from "./components/Certificates"
import Home from './components/Home'
const App = () => {
  return (
    <div className='container'>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/reg" element={<Reg/>}/>
        <Route path="/counter" element={<CounterP/>}/>
        <Route path="/courses" element={<Courses/>}>
        <Route index element={<YouTube/>}/>
        <Route path="youtube" element={<YouTube/>}/>
        <Route path="certificate" element={<Certificates/>}/>
        </Route>
        <Route path="/contact"
         element={<Suspense fallback={<h2>Loading...</h2>}>
          <LazyContact/>
         </Suspense>}/>
        <Route path="/about/" element={<About info="KIET MCA 3rd D WD"/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App