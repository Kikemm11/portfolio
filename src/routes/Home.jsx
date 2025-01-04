import React from 'react';
import Navbar from '../components/Navbar';
import meImage from '../assets/me.jpg';

function Home() {
  return (
    <div className="max-w-10xl p-2 text-center">
      <Navbar />

      {/* Greeting and Name */}
      <div className="text-center mt-16">
        <h1 className="text-8xl font-poppins text-white">Hi there!</h1>
        <p className="text-xl font-italic font-arial mt-2 text-white">Iván Maldonado | Software Developer</p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center mt-40 lg:mr-20">
        {/* Left Section: Image */}
        <div className="lg:w-1/3 flex justify-center mb-8 lg:mb-0">
          <img
            src={meImage}
            alt="Me"
            className="w-64 h-auto rounded-xl shadow-lg transform hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Right Section: About Me */}
        <div className="lg:w-2/3 flex flex-col justify-center items-center text-center lg:text-left">
          <h2 className="text-5xl font-poppins mb-4 text-white">About Me</h2>
          <div className="bg-white/80 hover:bg-white/90 p-4 rounded-xl shadow-md w-full max-w-6xl flex flex-col transition-opacity duration-300">
            <p className="text-lg text-gray-700">
              I'm a Backend-Oriented Software Developer with over 4 years of experience, currently finishing a Systems Engineering degree in the University of Los Andes, Mérida-Venezuela. 
              I have worked on multiple projects, taking on different roles that have allowed me to apply and refine my technical skills and process modeling 
              expertise in a comprehensive manner. My academic background and professional experience have equipped me to take complex challenges and deliver 
              efficient solutions using diverse technologies.
              <br />
              <br />
              I consider myself as an appasionate of codding and love to contribute with interesting projects while learning 
              new technologies along the way in order to develop new tech solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Quote */}
      <footer className="mt-40 mr-10 text-right text-white text-sm font-poppins italic self-end">
        <p>“Give me an idea optimal enough and a programming language on which to place it, and I shall move the world. ”</p>
      </footer>
    </div>
  );
}

export default Home;
