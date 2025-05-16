import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <>
      <main className="max-w-7xl mx-auto">
        <Navbar />
        <Hero />
        <About />
      </main>
    </>
  );
}

export default App;
