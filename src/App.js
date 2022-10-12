import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';

function App() {
  return (
    <main className='text-gray-400 bg-gray-900 body-font'>
      <Navbar />
      {/* <ToastContainer
        position='bottom-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme='colored'
      /> */}
      <About />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
    </main>
  );
}

export default App;
