import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';
import Contact from './pages/Contact';
import Mentorship from './pages/Mentorship';
import MentorshipDisplay from './pages/MentorshipDisplay';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
 
        <Routes>
          
          <Route path ="/" element={<Home/>}/>
          <Route path ="/projects" element={<Projects/>}/>
          <Route path ="/project/:id" element={<ProjectDisplay/>} />
          <Route path ="/experience" element={<Experience/>}/>
          <Route path ="/contact" element={ <Contact />} />
          <Route path ="/mentorship" element={ <Mentorship />} />
          <Route path ="/mentorship/:id" element={ <MentorshipDisplay />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
