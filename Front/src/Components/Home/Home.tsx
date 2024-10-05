import React, { useState, useEffect } from "react";
import { SiPython, SiReact } from "react-icons/si";
import { FaJava } from "react-icons/fa";

const phrases = [
  "Cybersecurity specialist.",
  "Frontend Developer.",
  "Backend Developer.",
];

const Home: React.FC = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [letterIndex, setLetterIndex] = useState(0);
  const typingSpeed = 120;
  const deletingSpeed = 100;
  const pauseDuration = 70;

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    if (deleting) {
      if (letterIndex > 0) {
        setTimeout(
          () => setDisplayedText(currentPhrase.slice(0, letterIndex - 1)),
          deletingSpeed
        );
        setTimeout(() => setLetterIndex(letterIndex - 1), deletingSpeed);
      } else {
        setDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    } else {
      if (letterIndex < currentPhrase.length) {
        setTimeout(
          () => setDisplayedText(currentPhrase.slice(0, letterIndex + 1)),
          typingSpeed
        );
        setTimeout(() => setLetterIndex(letterIndex + 1), typingSpeed);
      } else {
        setTimeout(() => setDeleting(true), pauseDuration);
      }
    }
  }, [letterIndex, deleting, currentPhraseIndex]);

  return (
    <section id="Home" className="flex flex-wrap justify-between items-center bg-bg p-12 h-[850px] font-Lora">
      <div className="text-container w-full md:w-1/2 mb-10 md:mb-0">
        <p className="text-sm text-gray-400 mb-3">WELCOME TO MY WORLD</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-snug">
          Meet <span className="text-primary">Annick NIYUBAHWE</span> <br /> a{" "}
          {displayedText}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-5 mb-10 max-w-xl">
          I am dedicated to turning complex challenges into innovative solutions
          in cybersecurity and software development.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-5">
          <a href="#Contact">
            <button className="bg-primary text-white py-2 px-6 rounded-md hover:scale-95 transition-transform">
              Hire Me
            </button>
          </a>
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-3 text-[15px]">BEST SKILL ON</p>
            <ul className="flex gap-4 justify-center list-none">
              <li>
                <SiReact className="text-primary w-10 h-10 hover:scale-110 transition-transform duration-300 ml-auto" />
              </li>
              <li>
                <FaJava className="text-primary w-10 h-10 hover:scale-110 transition-transform duration-300  ml-auto" />
              </li>
              <li>
                <SiPython className="text-primary w-10 h-10 hover:scale-110 transition-transform duration-300  ml-auto" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
