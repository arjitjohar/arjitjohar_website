import React from 'react';
import goKartingImage from '../assets/arjit_go_karting_pic.JPG';
import rockClimbingGif from '../assets/rock+climbing+video.gif';
const About = () => (
  <div id="about" className="p-8 text-[var(--eerie-black)]">
    <div className="bg-[var(--steel-blue)]/60 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-12 border border-[var(--keppel)]/30">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img src={goKartingImage} alt="Arjit Go-Karting" className="w-full md:w-1/3 rounded-lg shadow-md" />
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-[var(--eerie-black)] mb-4">Arjit Johar</h1>
          <p className="text-lg mb-4 text-[var(--eerie-black)]">
            I'm a passionate and driven software developer with a knack for turning complex problems into elegant, sustainable solutions. From winning startup competitions with innovative platforms like Carbon Report to architecting cloud solutions on AWS, I thrive on building things that make an impact. I'm always learning, always creating, and always ready for the next challenge.
          </p>
        </div>
      </div>
    </div>

    <div className="bg-[var(--keppel)]/50 p-6 rounded-lg border-l-4 border-[var(--keppel)] mt-12">
      <h2 className="text-3xl font-bold text-[var(--eerie-black)] mb-6 text-center">From Crags to Code</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <img src={rockClimbingGif} alt="Arjit Rock Climbing" className="w-full rounded-lg shadow-md" />
        </div>
        <div className="md:w-1/2">
          <p className="text-lg mb-4 text-[var(--eerie-black)]">
            For the past two years, I've been passionate about rock climbing. It's more than just a sport to me; it's a mental and physical challenge that has taught me invaluable lessons. I love the process of working through a tough route, collaborating with friends, and pushing my limits.
          </p>
          <p className="text-lg text-[var(--eerie-black)]">
            Interestingly, I've found many parallels between climbing and my journey in tech. Both require creative problem-solving, resilience in the face of setbacks, clear communication with a team, and the ability to improvise when things don't go as planned. Whether I'm debugging a complex piece of code or figuring out a sequence on a boulder, the core principles remain the same.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
