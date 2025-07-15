import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Features from './pages/Features';
import Details from './pages/Details';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section id="home"><Home /></section>
                  <section id="services"><Services /></section>
                  <section id="features"><Features /></section>
                  <section id="details"><Details /></section>
                  <section id="projects"><Projects /></section>
                  <section id="team"><Team /></section>
                  <section id="contact"><Contact /></section>
                </>
              }
            />
            <Route path="/services" element={<Services />} />
            <Route path="/details" element={<Details />} />
            <Route path="/features" element={<Features />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;