import React from 'react';
import goKartingImage from '../assets/arjit_go_karting_pic.JPG';

const About = () => (
  <div id="about" className="p-8 text-content-dark">
    <div className="bg-white/60 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-12 border border-primary-green/30">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img src={goKartingImage} alt="Arjit Go-Karting" className="w-full md:w-1/3 rounded-lg shadow-md" />
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-primary-green mb-4">Arjit Johar</h1>
          <p className="text-lg mb-4">
            I'm a passionate and driven software developer with a knack for turning complex problems into elegant, sustainable solutions. From winning startup competitions with innovative platforms like Carbon Report to architecting cloud solutions on AWS, I thrive on building things that make an impact. I'm always learning, always creating, and always ready for the next challenge.
          </p>
        </div>
      </div>
    </div>

    <div className="bg-green-50/50 p-6 rounded-lg border-l-4 border-primary-green">
      <h2 className="text-2xl font-bold text-primary-brown mb-3">More About My Journey</h2>
      <p className="mb-2">
        This is a great place to expand on your story. You could mention your journey into software development, your favorite technologies, and what you enjoy doing in your free time (like go-karting!).
      </p>
      <p>
        This section can give visitors a deeper sense of who you are beyond the professional portfolio.
      </p>
    </div>
  </div>
);

export default About;
