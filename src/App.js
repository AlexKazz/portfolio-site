import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import PostPage from './components/PostPage';

function App() {
  return (
    <div className='bg-custom-cream-500 h-screen font-quicksand'>
      <Navbar />

      <Routes>
        <Route exact path='/' element={<About />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/posts' element={<PostPage />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>

      {/* <Blog /> */}
      {/* <Contact /> */}
    </div>
  );
}

export default App;
