import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";

function App() {
  return (
    <>
      <main className="max-w-7xl mx-auto">
        <Navbar />
        <Hero />
        <About />
        <Work />
      </main>
    </>
  );
}

export default App;
