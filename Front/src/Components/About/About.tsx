import React from "react";
import My_image from "../../assets/My_image.png";

const About: React.FC = () => {
  return (
    <section
      id="About"
      className="flex flex-col items-center justify-center  bg-bg p-5 md:flex-row md:h-auto font-Lora"
    >
      <div className="bg-bg2 rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center max-w-full">
        <div className="rounded-lg w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={My_image}
            alt="Profile"
            className="rounded-xl w-full max-w-xs md:max-w-md object-cover"
          />
        </div>
        <div className="text-white max-w-full md:w-1/2 md:ml-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who I Am?</h2>
          <p className="text-base md:text-lg leading-7 mb-4">
            I have huge enthusiasm for converting complex challenges into
            innovative solutions in the cybersecurity and software development
            sectors. Equipped with vast experience and knowledge of AI
            technologies, I design intelligent applications that provide secure,
            relevant, and effective digital experiences.
          </p>
          <p className="text-base md:text-lg leading-7 mb-4">
            Continuous skill development is crucial in the ever-evolving field
            of technology. Let us together shape a more secure and efficient
            digital future.
          </p>
          <p className="text-base md:text-lg mb-4">Want to know more about me?</p>
          <a
            href="https://drive.google.com/uc?export=download&id=1NBPm6id5PddqDk_TQeoqbyZzGePLhBlo"
            download="CV"
          >
            <button className="bg-primary text-white py-3 px-5 rounded-lg hover:bg-secondary transition-colors">
              Download PDF
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
