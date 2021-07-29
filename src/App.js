import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar'
import Home from './sections/home/home'
import Contact from './sections/contact/contact'
import About from './sections/about/about'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About />
      <Contact />
      <p className="copyright">© 2020 TIMOK019</p>
    </div>
  );


}

export default App;
