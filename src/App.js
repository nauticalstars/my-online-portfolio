import "./App.css";
import Heroheader from "./Heroheader";
import Navbar from "./Navbar";
import About from "./About";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Heroheader />
        <About />
      </header>
    </div>
  );
}

export default App;
