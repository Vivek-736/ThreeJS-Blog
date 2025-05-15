import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "./HackerRoom";

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col mt-20 c-space gap-3">
        <p className="text-center text-white font-medium sm:text-3xl text-2xl font-sans">
          Hello, I am Vivek <span className="waving-hand">👋</span>{" "}
        </p>
        <p className="hero_tag text-gray_gradient">
          Crafting ideas into digital realities
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />
          <HackerRoom />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
