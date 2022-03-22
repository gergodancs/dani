import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Expertises from "./components/Expertises";
import Footer from "./components/Footer";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="App">
      <Landing />
      <AboutMe />
      <Expertises />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
