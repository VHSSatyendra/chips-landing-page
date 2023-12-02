import NavBar from './components/navbar/NavBar';
import Hero from './components/hero/Hero';
import Preparation from './components/preparation/Preparation';
import Story from './components/story/Story';
import TempStore from './components/tempstore/TempStore';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Preparation/>
      <Story/>
      <TempStore/>
      <Footer/>
    </div>
  );
}

export default App;
