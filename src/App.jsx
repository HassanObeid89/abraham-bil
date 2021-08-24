import './App.css';
import HeroSection from "./components/HeroSection";
import Instruction from './components/Instruction'
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Instruction />
      <ContactForm />
    </div>
  );
}

export default App;
