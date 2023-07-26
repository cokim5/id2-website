import React from 'react';
import NavBar from './Components/NavBar';
import { Route, Routes } from 'react-router';
import Home from './Pages/Home'
import Projects from './Pages/Projects';
import About from './Pages/About';
import Contact from './Pages/Contact';
import News from './Pages/News';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/news' element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
