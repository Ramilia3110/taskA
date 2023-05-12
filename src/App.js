import logo from "./logo.svg";
import "./App.scss";

import { Navbar } from "./components/Navbar";
import { Cover } from "./components/Cover";
import { Home } from "./components/Home";
import { Carousel } from "./components/Carousel";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Cover />
      <Carousel />
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
