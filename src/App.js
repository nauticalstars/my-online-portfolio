import Heroheader from "./Heroheader";
import Navbar from "./Navbar";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Heroheader />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </header>
    </div>
  );
}

export default App;
