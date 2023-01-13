import './App.css';
import Navbar from './components/Navbar';
import Social from './components/Social';
import Result from './components/Result';
import Tech from './components/Tech';
import HagridTabs from './components/HagridTabs';
import Action from './components/Action';
import About from './components/About';
import Pricing from './components/Pricing';
import Hagridface from './components/Hagridface';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Social/>
      <Result/>
      <Tech/>
      <HagridTabs/>
      <Action/>
      <About/>
      <Pricing/>
      <Hagridface/>
      <Footer/>
    </div>
  );
}

export default App;
