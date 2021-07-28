import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar'
import Home from './sections/home/home'
import Contact from './sections/contact/contact'
import About from './sections/about/about'
import Icons from './sections/icons/icons'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About />
      <Icons />
      <Contact />
    </div>
  );


}

export default App;
