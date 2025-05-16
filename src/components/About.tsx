import { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from './Button';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('vivekvrc777@gmail.com');
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Hi, I’m Vivek</p>
              <p className="grid-subtext">
                I’m a passionate full-stack developer who thrives on solving complex problems, building intuitive
                user experiences, and always learning new technologies.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-cover rounded-lg" />
            <div>
              <p className="grid-headtext">My Tech Stack</p>
              <p className="grid-subtext">
                I work with modern tools like React, Next.js, Tailwind, Node.js, Prisma, and TypeScript to create
                powerful, scalable web applications. I'm also diving deeper into DSA.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 20.5937, lng: 78.9629, text: 'India', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">Let’s Collaborate Globally</p>
              <p className="grid-subtext">
                Based in India, but available for remote opportunities worldwide. Let’s build something impactful together.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Coding Is My Craft</p>
              <p className="grid-subtext">
                Whether it's backend logic or frontend finesse, I find joy in every part of the development process.
                For me, coding isn't just a skill—it's a calling. I'm always experimenting, building, and growing.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Get in Touch</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  Email
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
