import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Categories from './components/Categories';
import Services from './components/Services';
import About from './components/About';
import './App.css'
import Footer from './components/Footer';

function App() {
  

  return (
   <div>
    <Navbar />
    <Home />
    <Categories />
    <Services />
    <About />
    <Footer />
   </div>
  )
}

export default App
