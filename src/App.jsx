import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import PostDetail from './components/PostDetail';
import Contact from './components/Contact';
import Competitive from './pages/Programming/Competitive';
import CompetitveRoadmap from './pages/Programming/CompetitveRoadmap';
import Datatype from './pages/Programming/Basics/Datatype';
import BasicsOfCpp from './pages/Programming/BasicsOfCpp';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/competitive-programming" element={<Competitive />} />
        <Route path="/Basics/Datatype" element={<Datatype />} />
        <Route path="/Basics-Of-Cpp" element={<BasicsOfCpp />} />
        <Route path="/competitive-programming-roadmap" element={<CompetitveRoadmap />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
