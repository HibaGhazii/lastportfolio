import './App.css';
import Footer from './components/Footer';
import GetInTouch from './components/GetInTouch';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
      <div id='Home' className="App">
        <Navbar/>
        <HeroSection/>
        <Skills/>
        <Projects/>
        <GetInTouch/>
        <Footer/> 

      </div>
  );
}

export default App;
