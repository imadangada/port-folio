import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Navbar from './navbar';
import {Helmet} from "react-helmet";
import Skills from './skills';
import Services from './Services';
import Projects from './project';
function App() {
  return (
    
    <div className="App">
      <Header />
      <Navbar />
      <Hero />
      <Skills />
      <Services />
      <Projects />
      <Footer />

      {/* importing helmet fro react */}
      <Helmet>
      <script src="script.js" type="text/Javascript"></script>
    </Helmet>
    </div>
    
  );
}

export default App;
