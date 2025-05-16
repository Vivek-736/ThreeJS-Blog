import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "./CanvasLoader";
import Developer from "./Developer";
import { useState } from "react";

const Work = () => {
  const [animationName, setAnimationName] = useState("idle");

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white">
        <h3 className="head-text">My Work</h3>
        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<CanvasLoader />}>
                <Developer
                  position-y={-3}
                  scale={3}
                  animationName={animationName}
                />
              </Suspense>
            </Canvas>
          </div>
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl shadow-xl text-white space-y-5">
              <h2 className="text-3xl font-bold text-gradient bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                My Developer Journey ✨
              </h2>

              <p className="leading-relaxed text-lg sm:text-xl text-gray-300">
                From mastering{" "}
                <span className="font-semibold text-white">
                  HTML, CSS, JavaScript
                </span>{" "}
                to building scalable web apps with{" "}
                <span className="font-semibold text-white">
                  React, Next.js, Node.js, Prisma, and Tailwind CSS
                </span>
                , and leveling up my backend skills with{" "}
                <span className="font-semibold text-white">
                  MongoDB and TypeScript
                </span>
                , I’ve built a full-stack arsenal to solve real-world problems
                creatively.
              </p>

              <div className="space-y-4 cursor-pointer" onClick={() => setAnimationName("salute")}>               <div className="bg-zinc-700/60 rounded-xl p-4 hover:bg-zinc-700 transition">
                  <h3 className="text-2xl font-semibold text-pink-400">
                    ❤️ Lovable Clone
                  </h3>
                  <p className="text-gray-300">
                    A pixel-perfect responsive clone of the popular e-commerce
                    fashion brand “Lovable” with smooth UI and authentication
                    flow.
                  </p>
                </div>

                <div className="bg-zinc-700/60 rounded-xl p-4 hover:bg-zinc-700 transition cursor-pointer" onClick={() => setAnimationName("clapping")}>
                  <h3 className="text-2xl font-semibold text-blue-400">
                    💬 LinkLine Chat App
                  </h3>
                  <p className="text-gray-300">
                    A real-time chat application built using Next.js, Prisma,
                    Pusher, and Tailwind, featuring Google Auth, typing
                    indicators, and conversation deletion.
                  </p>
                </div>

                <div className="bg-zinc-700/60 rounded-xl p-4 hover:bg-zinc-700 transition cursor-pointer" onClick={() => setAnimationName("victory")}>
                  <h3 className="text-2xl font-semibold text-green-400">
                    🏫 College Pulse
                  </h3>
                  <p className="text-gray-300">
                    A vibrant community platform designed for college students
                    to connect, discuss, and collaborate, built with scalability
                    and social features in mind.
                  </p>
                </div>

                <div className="bg-zinc-700/60 rounded-xl p-4 hover:bg-zinc-700 transition cursor-pointer" onClick={() => setAnimationName("salute")}>
                  <h3 className="text-2xl font-semibold text-yellow-400">
                    🧠 AI-Powered ToDo
                  </h3>
                  <p className="text-gray-300">
                    A smart to-do list app enhanced with AI suggestions,
                    auto-prioritization, and motivational prompts for enhanced
                    productivity.
                  </p>
                </div>

                <div className="bg-zinc-700/60 rounded-xl p-4 hover:bg-zinc-700 transition cursor-pointer" onClick={() => setAnimationName("clapping")}>
                  <h3 className="text-2xl font-semibold text-cyan-400">
                    📚 AI Learning Hub
                  </h3>
                  <p className="text-gray-300">
                    A central learning platform powered by GenAI, offering
                    curated content recommendations, code explanations, and
                    practice environments.
                  </p>
                </div>

                <div className="bg-zinc-700/60 rounded-xl p-4 hover:bg-zinc-700 transition cursor-pointer" onClick={() => setAnimationName("victory")}>
                  <h3 className="text-2xl font-semibold text-rose-400">
                    🎤 AI Voice Interview
                  </h3>
                  <p className="text-gray-300">
                    An interactive platform that simulates voice-based
                    interviews using AI, helping users practice technical and
                    behavioral questions in real-time.
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-400 pt-5">
                Built with passion by Vivek — always learning, always building
                🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
