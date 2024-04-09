import React from 'react'
import Navbar from './Navbar';
import About from './About';
import Blog from './Blog';
import Contect from './Contect';
import Media from './Media';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function RouteFile() {
  return (
    <>
      <Router>
        <Routes >
          <Route path="/" element={<Navbar />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contect" element={<Contect />} />
          <Route path="/media" element={<Media />} />
        </Routes >
      </Router>
    </>
  )
}

export default RouteFile
