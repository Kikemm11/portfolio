import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Skills from './routes/Skills';
import Projects from './routes/Projects';
import Contact from './routes/Contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio" element={<Home />} />
        <Route path="/portfolio/skills" element={<Skills />} />
        <Route path="/portfolio/projects" element={<Projects />} />
        <Route path="/portfolio/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}