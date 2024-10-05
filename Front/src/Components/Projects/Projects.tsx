import React from "react";
import { FiExternalLink } from "react-icons/fi"; // Using React Icons for external link icon

interface ProjectCardProps {
  projectNames: string[];
}

const Projects: React.FC<ProjectCardProps> = ({ projectNames }) => {
  return (
    <div id="Projects" className="flex flex-col items-center bg-bg p-24 font-Lora">
      <h1 className="text-5xl text-primary mb-4">Projects</h1>
      <h2 className="text-2xl text-white pb-16">What I've been doing so far...</h2>
      <div className="flex flex-wrap justify-between gap-5 w-full max-w-screen-xl">
        {projectNames.map((name, index) => (
          <div key={index} className="bg-bg2 rounded-lg p-8 flex items-center justify-between w-70 h-48 shadow-lg transform transition-transform duration-200 hover:-translate-y-1">
            <span className="text-lg font-medium text-white">{name}</span>{" "}
            <FiExternalLink className="text-gray-400 text-xl transition-colors duration-200 hover:text-white" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
