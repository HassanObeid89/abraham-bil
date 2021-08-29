import './App.css';
import HeroSection from "./components/HeroSection";
import Instruction from './components/Instruction'
import ContactForm from "./components/ContactForm";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Instruction />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
