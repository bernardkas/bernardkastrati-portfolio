import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Socialnks from "./components/Socialnks";

function App() {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div>
      <NavBar links={links} />
      <Home links={links} />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Socialnks />
    </div>
  );
}

export default App;
