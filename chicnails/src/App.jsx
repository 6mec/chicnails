import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <h1 style={{ color: 'gold', fontSize: '3em', textAlign: 'center' }}>Chic Nails - Nail Courses</h1>
      <div className="course-list" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ color: 'gray' }}>Available Courses</h2>
        <div className="course" style={{ backgroundColor: 'rgba(255, 215, 0, 0.1)', borderRadius: '8px', padding: '1rem', margin: '1rem 0', width: '80%' }}>
          <h3 style={{ color: 'gold' }}>Nail Art Basics</h3>
          <p style={{ color: 'gray' }}>Learn the fundamentals of nail art in this introductory course.</p>
        </div>
        <div className="course" style={{ backgroundColor: 'rgba(255, 215, 0, 0.1)', borderRadius: '8px', padding: '1rem', margin: '1rem 0', width: '80%' }}>
          <h3 style={{ color: 'gold' }}>Advanced Nail Techniques</h3>
          <p style={{ color: 'gray' }}>Take your skills to the next level with advanced techniques.</p>
        </div>
        <div className="course" style={{ backgroundColor: 'rgba(255, 215, 0, 0.1)', borderRadius: '8px', padding: '1rem', margin: '1rem 0', width: '80%' }}>
          <h3 style={{ color: 'gold' }}>Gel Nail Application</h3>
          <p style={{ color: 'gray' }}>Master the art of gel nail application in this comprehensive course.</p>
        </div>
      </div>
    </Router>
  )
}

export default App;
