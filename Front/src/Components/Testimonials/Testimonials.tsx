import React from "react";
import Celestin from "../../assets/Celestin.jpeg";
import JD from "../../assets/JD.jpeg";
import Njeri from "../../assets/Kenyan.jpeg";

interface Testimonial {
  name: string;
  company: string;
  image: string;
  testimonial: string;
}

const testimonialsData: Testimonial[] = [
  {
    name: "Danielle Skies",
    company: "Cybersecurity Director at Internet Society",
    image: Celestin,
    testimonial:
      "Annick has shown a strong understanding of cybersecurity concepts and effectively applies them to real-world situations. She excels in problem-solving and teamwork, demonstrating professionalism that sets a positive example for her peers. I am confident she will continue to thrive in her cybersecurity career.",
  },
  {
    name: "Rogers BALINDA",
    company: "Backend Developer at KaCyber Technologies",
    image: JD,
    testimonial:
      "Working with Annick was a fantastic experience. She is an excellent collaborator who brings positive energy and innovative ideas. Her problem-solving skills were invaluable during challenges, and her clear communication kept our team on track. Annick's dedication and technical expertise significantly contributed to the project's success. I look forward to collaborating with her again.",
  },
  {
    name: "Mary NJERI ACHIENG",
    company: "Frontend developer at M-Kopa Ltd.",
    image: Njeri,
    testimonial:
      "I had the pleasure of working with Annick on a full-stack application, and the results were very impressive! She thoroughly understood our needs and delivered a high-quality product that exceeded our expectations. Annick communicated excellently, always responsive and clear about the project's progress. Her professionalism and ability to meet deadlines make her a highly recommended developer!",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div id="Testimonials" className="text-center py-20 bg-bg2 font-Lora ">
      <h2 className="text-white text-3xl mb-4">Testimonials</h2>
      <h3 className="text-primary text-2xl mb-10">
        Want to know how working with me feels?
      </h3>
      <div className="flex flex-wrap justify-around">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-bg p-5 rounded-lg w-full md:w-1/3 lg:w-1/4 text-center shadow-lg m-5 transition-transform transform hover:-translate-y-2"
          >
            <div className="mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
            </div>
            <h4 className="text-primary text-xl mb-2">
              {testimonial.name}
              <br />
              <span className="italic text-gray-400 text-sm">
                - "{testimonial.company}" -
              </span>
            </h4>
            <p className="text-gray-400 text-base leading-7">
              {testimonial.testimonial}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
