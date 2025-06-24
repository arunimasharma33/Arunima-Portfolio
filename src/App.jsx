import Hero from './components/Hero';
import About from './components/About';

import AboutIntro from './components/AboutIntro';
import Work from './components/Work';
import Collaborate from './components/Collaborate';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Hero />
      <div id="info" className="min-h-screen">
        <AboutIntro />
      </div>
      <About/>
      

      <div id="work" className="min-h-screen">
        <Work />
      </div>
      

      <Collaborate/>
      <Footer/>
    </>
  );
}

export default App;
