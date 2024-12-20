import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Skills from './routes/Skills';
import Projects from './routes/Projects';
import Contact from './routes/Contact';

export default function App() {
  return (
    <Router basename="/portfolio"> {/* Use the base path here */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Make Home relative to "/portfolio" */}
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}