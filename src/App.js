import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Blog from './components/Blog';

function App() {
  return (
    <main className='text-gray-800 body-font'>
      <Navbar />

      {/* <About /> */}
      <Projects />

      {/* <Blog /> */}
      {/* <Contact /> */}
    </main>
  );
}

export default App;
