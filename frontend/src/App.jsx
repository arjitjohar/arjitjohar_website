import React from 'react';
import Navbar from './components/Navbar';
import goKartingImage from './assets/arjit_go_karting_pic.JPG';
import carbonReportImage from './assets/carbon_report.jpg';
import inorbitInternImage from './assets/arjit_intern.png';
import inorbitRobotSpaceImage from './assets/inorbit_robot_space.webp';
import cjsMeetupImage from './assets/CJS cyber security meetup.JPG';
import awsBadge from './assets/solution architect associate badge.webp';
import bergeronCentreImage from './assets/ZAS-bergeron-108-Edit_2_0-1024x683.jpg';
import ibmGrcBadge from './assets/IBM_skills_badges/GCP IBM badge.png';
import ibmCloudSecurityBadge from './assets/IBM_skills_badges/cloud security IBM.png';
import ibmVulnerabilityBadge from './assets/IBM_skills_badges/vulnerability management IBM.png';
import ibmNetworkSecurityBadge from './assets/IBM_skills_badges/system and network security.png';
import computekSocImage from './assets/Computek college SOC course image.png';

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

const Experiences = () => (
  <div id="experiences" className="p-8 text-content-dark">
    <h1 className="text-4xl font-bold text-primary-green mb-8 text-center">My Journey</h1>

    <div className="bg-white/60 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-12 border border-primary-green/30">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img src={cjsMeetupImage} alt="CJS Cybersecurity Meetup" className="w-full md:w-1/3 rounded-lg shadow-md" />
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-primary-brown mb-3">CJS Cybersecurity Meetup at Queen's Park</h2>
          <p className="font-semibold text-lg text-primary-green mb-4">June 2025</p>
          <p className="mb-4">
            I had the incredible opportunity to attend the CJS Cybersecurity Meetup at Queen's Park, where I engaged with municipal leaders like the Hon. David Piccini and Mike Schreiner. This experience provided a fascinating look into the critical role of cybersecurity in government and public service.
          </p>
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-primary-green">
            <h3 className="font-bold text-primary-green mb-2">Hot Topics in Cybersecurity Today:</h3>
            <ul className="list-disc list-inside text-content-dark space-y-1">
              <li><strong>AI's Dual Role:</strong> AI is being used by attackers for sophisticated phishing, but also by defenders for rapid threat detection.</li>
              <li><strong>Ransomware-as-a-Service (RaaS):</strong> A growing dark web business model allowing anyone to launch ransomware attacks.</li>
              <li><strong>Zero Trust Architecture:</strong> The new standard of "never trust, always verify" is critical for protecting sensitive networks.</li>
            </ul>
          </div>
          <a 
            href="https://www.yes.on.ca/yes-queens-park-event-with-honourable-david-piccini-minister-of-labour-labour-immigration-training-skills-development/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-primary-green text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-brown transition-colors duration-300"
          >
            Read About the Event
          </a>
        </div>
      </div>
    </div>

    <div className="bg-white/60 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-12 border border-primary-green/30">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img src={inorbitRobotSpaceImage} alt="InOrbit Robot Space" className="w-full md:w-1/3 rounded-lg shadow-md" />
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-primary-brown mb-3">Software Engineer at InOrbit</h2>
          <p className="font-semibold text-lg text-primary-green mb-4">Jun 2024 - Nov 2024</p>
          <p className="mb-4">
            Transitioning from intern to a full-time Software Engineer, I took on greater responsibilities, working directly with clients to solve complex challenges and drive product adoption.
          </p>
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-primary-green">
            <h3 className="font-bold text-primary-green mb-2">Key Achievements:</h3>
            <ul className="list-disc list-inside text-content-dark space-y-1">
              <li>Developed custom connectors and integrations using Python & Bash, enhancing network communication.</li>
              <li>Facilitated the rollout of 10+ new features, achieving an 80% adoption rate through root cause analysis.</li>
              <li>Contributed to a 90% customer retention rate by proactively addressing technical pain points.</li>
              <li>Streamlined onboarding for 100+ IoT devices, reducing setup time by 15%.</li>
            </ul>
          </div>
          <a 
            href="https://www.linkedin.com/posts/florianpestoni_intern-activity-7222341438804566016-qmP4?utm_source=share&utm_medium=member_desktop" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-primary-green text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-brown transition-colors duration-300"
          >
            See it on LinkedIn
          </a>
        </div>
      </div>
    </div>

    <div className="bg-white/60 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-12 border border-primary-green/30">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img src={carbonReportImage} alt="Carbon Report Team" className="w-full md:w-1/3 rounded-lg shadow-md" />
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-primary-brown mb-3">🏆 First Place: BEST Startup Experience</h2>
          <p className="font-semibold text-lg text-primary-green mb-4">Project: Carbon Report</p>
          <p className="mb-4">
            I was part of the incredible team that developed <strong className="font-semibold">Carbon Report</strong>, an all-in-one emissions reporting and accounting platform. We tackled a real-world problem aligned with the UN's Sustainable Development Goals, aiming to make sustainability reporting accurate and affordable for major industries.
          </p>
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-primary-green">
            <h3 className="font-bold text-primary-green mb-2">What I Learned:</h3>
            <ul className="list-disc list-inside text-content-dark space-y-1">
              <li>Applied Design Sprint methodology to rapidly innovate and solve complex problems.</li>
              <li>Collaborated in a multi-disciplinary team to build a full-fledged startup concept.</li>
              <li>Gained hands-on experience in creating solutions for a more sustainable and equitable future.</li>
            </ul>
          </div>
          <a 
            href="https://www.yorku.ca/yfile/2023/03/31/students-win-best-startup-experience-awards-for-innovative-startups/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-primary-green text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-brown transition-colors duration-300"
          >
            Read the Y-File Article
          </a>
        </div>
      </div>
    </div>

    <div className="bg-white/60 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-12 border border-primary-green/30">
      <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        <img src={inorbitInternImage} alt="Arjit at InOrbit" className="w-full md:w-1/3 rounded-lg shadow-md" />
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-primary-brown mb-3">Software Engineer Intern at InOrbit</h2>
          <p className="font-semibold text-lg text-primary-green mb-4">Summer 2021</p>
          <p className="mb-4">
            As a software engineer intern at InOrbit, I dove headfirst into the world of robotics. My main project was to create a compelling demo for an upcoming conference, which involved everything from robot configuration and setup to programming and debugging. It was a fantastic, hands-on experience that pushed me to grow.
          </p>
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-primary-green">
            <h3 className="font-bold text-primary-green mb-2">Key Takeaways:</h3>
            <ul className="list-disc list-inside text-content-dark space-y-1">
              <li>Gained extensive experience with ROS, Linux, Docker, and virtual machines.</li>
              <li>Learned the importance of structured task management and ownership in a professional setting.</li>
              <li>Developed a deeper passion for robotics and automation.</li>
            </ul>
          </div>
          <a 
            href="https://www.inorbit.ai/blog/meet-an-inorbiter-the-interns" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-primary-green text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-brown transition-colors duration-300"
          >
            Meet the Interns
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Learning = () => (
  <div id="learning" className="p-8 text-content-dark">
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
            className="inline-block mt-2 bg-primary-green text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-brown transition-colors duration-300"
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
            className="inline-block mt-2 bg-primary-green text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-brown transition-colors duration-300"
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
            className="inline-block mt-2 bg-primary-green text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-brown transition-colors duration-300"
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
            className="inline-block mt-2 bg-primary-green text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-brown transition-colors duration-300"
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
            className="inline-block mt-2 bg-primary-green text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-brown transition-colors duration-300"
          >
            View Credly Badge
          </a>
        </div>
      </div>
    </div>

    <div className="bg-green-50/50 p-6 rounded-lg border-l-4 border-primary-green">
      <h3 className="font-bold text-xl text-primary-green mb-4">Currently Exploring:</h3>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img src={computekSocImage} alt="Computek College SOC Course" className="w-full md:w-1/3 rounded-lg shadow-md" />
        <div className="flex-1">
          <h4 className="font-semibold text-lg text-primary-brown">Security Operations Center Fundamentals</h4>
          <p className="text-sm text-gray-600 mb-2">Present</p>
          <p className="text-content-dark">
            I am currently deepening my expertise in cybersecurity by taking the Security Operations Center Fundamentals course at Computek College.
          </p>
        </div>
      </div>
      <ul className="list-disc list-inside text-content-dark space-y-2 mt-6">
        <li>Diving deeper into advanced React patterns and state management libraries.</li>
        <li>Expanding my knowledge of cloud infrastructure beyond the basics.</li>
        <li>Reading "Designing Data-Intensive Applications" by Martin Kleppmann to understand system architecture better.</li>
      </ul>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-background-light">
      <Navbar />
      <main>
        <About />
        <Experiences />
        <Learning />
      </main>
    </div>
  );
}

export default App;
