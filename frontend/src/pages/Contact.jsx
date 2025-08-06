import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2ea3c9dc-50d9-4206-86ee-e822860b5a4a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully test");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="p-8 text-[var(--eerie-black)]">
      <div className="bg-[var(--steel-blue)]/60 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-12 border border-[var(--keppel)]/30">
        <h1 className="text-4xl font-bold text-[var(--eerie-black)] mb-8 text-center">Contact Me</h1>
        <form onSubmit={onSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-[var(--eerie-black)] font-bold mb-2">Name</label>
            <input type="text" name="name" id="name" required className="shadow appearance-none border rounded w-full py-2 px-3 text-[var(--eerie-black)] leading-tight focus:outline-none focus:shadow-outline bg-[var(--keppel)]" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-[var(--eerie-black)] font-bold mb-2">Email</label>
            <input type="email" name="email" id="email" required className="shadow appearance-none border rounded w-full py-2 px-3 text-[var(--eerie-black)] leading-tight focus:outline-none focus:shadow-outline bg-[var(--keppel)]" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-[var(--eerie-black)] font-bold mb-2">Message</label>
            <textarea name="message" id="message" required rows="5" className="shadow appearance-none border rounded w-full py-2 px-3 text-[var(--eerie-black)] leading-tight focus:outline-none focus:shadow-outline bg-[var(--keppel)]"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-[var(--keppel)] text-[var(--eerie-black)] font-bold py-2 px-4 rounded-lg border border-[var(--keppel)] hover:bg-[var(--onyx)] hover:border-[var(--cinnabar)] transition-all duration-300 transform hover:scale-105">
              Submit Form
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <span className="text-[var(--eerie-black)]">{result}</span>
        </div>
        <div className="text-center mt-8">
          <h2 className="text-2xl font-bold text-[var(--eerie-black)] mb-4">Connect with me</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/arjitjohar/" target="_blank" rel="noopener noreferrer" className="text-[var(--eerie-black)] hover:text-[var(--keppel)] transition-colors duration-300">
              <FaLinkedin size={32} />
            </a>
            <a href="https://github.com/arjitjohar" target="_blank" rel="noopener noreferrer" className="text-[var(--eerie-black)] hover:text-[var(--keppel)] transition-colors duration-300">
              <FaGithub size={32} />
            </a>
            <a href="mailto:arjitjohar@gmail.com" className="text-[var(--eerie-black)] hover:text-[var(--keppel)] transition-colors duration-300">
              <FaEnvelope size={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
