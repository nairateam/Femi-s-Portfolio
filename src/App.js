import "./App.css";
// import works from './Media/data/data'
import About from "./Sections/About";
import Connect from "./Sections/Connect";
import Footer from "./Sections/Footer";
import Hero from "./Sections/Hero";
import Nav from "./Sections/Nav";
import Portfolio from "./Sections/Portfolio";

function App() {
  // const [projects, setProjects] = useState(works);
  return (
    <>
      <div className="App">
        <Nav />
        <Hero />
        <About />
        <Portfolio />
        <Connect />
      </div>
      <Footer />
      </>
  );
}

export default App;
