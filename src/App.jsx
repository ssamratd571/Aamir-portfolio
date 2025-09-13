import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Research from "./components/Research";
import Publications from "./components/Publications";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Research />
      <Publications />
      <Contact />
    </div>
  );
}

export default App;


