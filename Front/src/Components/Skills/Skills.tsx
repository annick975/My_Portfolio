import React from "react";
import {
  SiLinux,
  SiGnubash,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiReact,
  SiExpress,
  SiMongodb,
  SiPhp,
  SiPython,
  SiMysql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { FaJava, FaKey, FaLock, FaNetworkWired, FaNode } from "react-icons/fa";

interface Skill {
  name: string;
  icon: JSX.Element;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Cybersecurity",
    skills: [
      { name: "Linux", icon: <SiLinux /> },
      { name: "Bash Scripting", icon: <SiGnubash /> },
      { name: "PKI", icon: <FaKey /> },
      { name: "Penetration Testing", icon: <FaLock /> },
      { name: "DNS Sec", icon: <FaNetworkWired /> },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <SiPython /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Node.js", icon: <FaNode /> },
      { name: "PHP", icon: <SiPhp /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Golang", icon: <TbBrandGolang /> },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <div id="Skills" className="py-12 bg-bg text-center font-Lora">
      <h2 className="text-3xl font-bold text-white mb-10">Skills</h2>
      <div className="flex flex-wrap justify-around">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-bg2 rounded-lg p-6 m-4 w-full sm:w-96 shadow-lg transform transition-transform hover:-translate-y-2"
          >
            <h3 className="text-lg font-semibold text-primary mb-4">
              {category.category}
            </h3>
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <span className="text-xl text-primary mr-3">
                    {skill.icon}
                  </span>
                  <span className="text-white">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
