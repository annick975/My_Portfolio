import React from 'react';
import logo from "../../assets/RCA_logo.svg";
import MGS_logo from "../../assets/MGS_logo.svg";

const Education: React.FC = () => {
  return (
    <div id='Education' className="flex flex-col items-center text-center py-12 bg-bg2 text-white ">
      <h1 className="text-4xl mb-5">My <span className="text-teal-500">Education</span></h1>
      <div className="flex flex-wrap justify-around w-full max-w-5xl gap-10 mt-12">
        <div className="bg-bg rounded-xl p-8 w-full sm:w-[45%] shadow-lg transition-transform duration-300 hover:translate-y-2">
          <div className="flex items-center justify-center w-24 h-24 bg-gray-400 rounded-full mx-auto mb-6">
            <img src={logo} alt="Rwanda Coding Academy" className="w-20 h-20 object-contain" />
          </div>
          <h2 className="text-xl mb-3">Rwanda Coding Academy</h2>
          <p className="text-gray-400 mb-2">2023-2026</p>
          <p className="text-gray-400">"Advanced Diploma in Software Programming"</p>
        </div>
        <div className="bg-bg rounded-xl p-8 w-full sm:w-[45%] shadow-lg transition-transform duration-300 hover:translate-y-2">
          <div className="flex items-center justify-center w-24 h-24 bg-gray-400 rounded-full mx-auto mb-6">
            <img src={MGS_logo} alt="Maranyundo Girls School" className="w-20 h-20 rounded-full object-contain" />
          </div>
          <h2 className="text-xl mb-3">Maranyundo Girls School</h2>
          <p className="text-gray-400 mb-2">2020-2023</p>
          <p className="text-gray-400">"Ordinary-level Certificate"</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
