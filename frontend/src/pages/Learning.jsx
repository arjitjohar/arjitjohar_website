import React from 'react';
import awsBadge from '../assets/solution architect associate badge.webp';
import bergeronCentreImage from '../assets/ZAS-bergeron-108-Edit_2_0-1024x683.jpg';
import ibmGrcBadge from '../assets/IBM_skills_badges/GCP IBM badge.png';
import ibmCloudSecurityBadge from '../assets/IBM_skills_badges/cloud security IBM.png';
import ibmVulnerabilityBadge from '../assets/IBM_skills_badges/vulnerability management IBM.png';
import ibmNetworkSecurityBadge from '../assets/IBM_skills_badges/system and network security.png';

const Learning = () => {
  return (
    <div className="p-8 text-content-dark">
      <h1 className="text-4xl font-bold text-primary-green mb-8 text-center">My Learning Journey</h1>

      <div className="bg-white/60 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-12 border border-primary-green/30">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <img src={bergeronCentreImage} alt="ZAS Bergeron Centre at York University" className="w-full md:w-1/3 rounded-lg shadow-md" />
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-primary-brown mb-3">Software Engineering at York University</h2>
            <p className="font-semibold text-lg text-primary-green mb-4">2018 - 2023</p>
            <p className="mb-4">
              My time at York University was an amazing deep-dive into the world of software engineering. It was five years of challenging projects, late-night study sessions fueled by coffee, and learning the fundamentals that shape my work today.
            </p>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-primary-green">
              <h3 className="font-bold text-primary-green mb-2">Core Learnings:</h3>
              <ul className="list-disc list-inside text-content-dark space-y-1">
                <li>Mastering data structures, algorithms, and the art of writing clean, efficient code.</li>
                <li>Surviving electrical circuits and linear algebra (a rite of passage for any engineering student!).</li>
                <li>Collaborating on team projects, learning that great software is built together.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/60 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-12 border border-primary-green/30">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img src={awsBadge} alt="AWS Certified Solutions Architect - Associate Badge" className="w-32 h-32" />
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-primary-brown mb-3">AWS Certified Solutions Architect</h2>
            <p className="font-semibold text-lg text-primary-green mb-2">Associate Level</p>
            <p className="text-sm text-gray-600 mb-4">Issued: March 03, 2025</p>
            <p className="mb-4">
              I'm proud to have earned the AWS Solutions Architect - Associate certification! This journey deepened my understanding of designing and deploying scalable, highly available, and fault-tolerant systems on AWS. It was a challenging but incredibly rewarding experience that solidified my cloud computing skills.
            </p>
            <a 
              href="https://www.credly.com/badges/9fca6ddb-cb90-4918-8fe4-5702b1d216be" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-2 bg-primary-green text-black font-bold py-2 px-4 rounded-lg hover:bg-primary-brown transition-colors duration-300"
            >
              View Credly Badge
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white/60 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-12 border border-primary-green/30">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img src={ibmCloudSecurityBadge} alt="IBM Cloud Security Badge" className="w-32 h-32" />
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-primary-brown mb-3">Cloud Security</h2>
            <p className="text-sm text-gray-600 mb-4">Issued: June 18, 2025</p>
            <p className="mb-4">
              This credential showcases advanced competencies in protecting cloud systems, data, applications, and infrastructure, and applying the right cloud computing framework for an organization’s needs.
            </p>
            <a 
              href="https://www.credly.com/earner/earned/badge/940833fc-2453-4fc2-996f-fdc1b6daf745" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-2 bg-primary-green text-black font-bold py-2 px-4 rounded-lg hover:bg-primary-brown transition-colors duration-300"
            >
              View Credly Badge
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white/60 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-12 border border-primary-green/30">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img src={ibmNetworkSecurityBadge} alt="IBM Systems and Network Security Badge" className="w-32 h-32" />
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-primary-brown mb-3">Systems and Network Security</h2>
            <p className="text-sm text-gray-600 mb-4">Issued: June 02, 2025</p>
            <p className="mb-4">
              This credential demonstrates advanced competencies in designing secure networks, securing host operating systems, updating firmware, and enhancing system architectures.
            </p>
            <a 
              href="https://www.credly.com/badges/91ce8f0d-70a4-4b3b-815e-86a487f9f136" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-2 bg-primary-green text-black font-bold py-2 px-4 rounded-lg hover:bg-primary-brown transition-colors duration-300"
            >
              View Credly Badge
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white/60 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-12 border border-primary-green/30">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img src={ibmVulnerabilityBadge} alt="IBM Vulnerability Management Badge" className="w-32 h-32" />
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-primary-brown mb-3">Vulnerability Management</h2>
            <p className="text-sm text-gray-600 mb-4">Issued: May 23, 2025</p>
            <p className="mb-4">
              This credential showcases advanced competencies in applying appropriate controls to vulnerabilities, justifying threat mitigation tactics, and categorizing vulnerabilities by severity.
            </p>
            <a 
              href="https://www.credly.com/earner/earned/badge/8c61b82b-9aeb-4bd7-bb4d-fb5d4a9bd836" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-2 bg-primary-green text-black font-bold py-2 px-4 rounded-lg hover:bg-primary-brown transition-colors duration-300"
            >
              View Credly Badge
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white/60 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-12 border border-primary-green/30">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img src={ibmGrcBadge} alt="IBM GRC and Data Privacy Badge" className="w-32 h-32" />
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-primary-brown mb-3">Governance, Risk, Compliance, and Data Privacy</h2>
            <p className="mb-4">
              This certification from IBM provided me with a strong foundation in the critical areas of GRC and data privacy, essential for building secure and trustworthy systems in today's data-driven world.
            </p>
            <a 
              href="https://www.credly.com/earner/earned/badge/5d1f45e6-36fb-46c6-87d8-179e66267ee6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-2 bg-primary-green text-black font-bold py-2 px-4 rounded-lg hover:bg-primary-brown transition-colors duration-300"
            >
              View Credly Badge
            </a>
          </div>
        </div>
      </div>

      <div className="bg-green-50/50 p-6 rounded-lg border-l-4 border-primary-green">
        <h3 className="font-bold text-xl text-primary-green mb-4">Currently Exploring:</h3>
        <ul className="list-disc list-inside text-content-dark space-y-2">
          <li>Diving deeper into advanced React patterns and state management libraries.</li>
          <li>Expanding my knowledge of cloud infrastructure beyond the basics.</li>
          <li>Reading "Designing Data-Intensive Applications" by Martin Kleppmann to understand system architecture better.</li>
        </ul>
      </div>
    </div>
  );
};

export default Learning;
