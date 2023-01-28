import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio';
import About from './components/About'
import Contact from './components/Contact'
import Resume from './components/Resume'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/react-portfolio">
      <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
