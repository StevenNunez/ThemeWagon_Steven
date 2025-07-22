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
        <Navbar />
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
          </Routes>
        <Footer />
    </Router>
  );
}

export default App;