import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Blog from './components/Blog';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route exact path='/' element={<Projects />}></Route>
        <Route exact path='/contact' element={<Contact />}></Route>
      </Routes>

      {/* <Blog /> */}
      {/* <Contact /> */}
    </div>
  );
}

export default App;
