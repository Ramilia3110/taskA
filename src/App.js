import logo from "./logo.svg";
import "./App.scss";
import { Cover } from "./components/Cover";
import { Home } from "./components/Home";
import { Carousel } from "./components/Carousel";
function App() {
  return (
    <div className="App">
      <Cover />
      <Carousel />
      <Home />
    </div>
  );
}

export default App;
