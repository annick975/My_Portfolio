import React from 'react';
import { FaPhone, FaLocationDot, FaBusinessTime } from "react-icons/fa6";

const Contact: React.FC = () => {
  return (
    <div id='Contact' className="flex flex-col lg:flex-row justify-between p-8 lg:p-24 bg-bg text-white font-Lora">
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <h2 className="text-primary text-3xl mb-4">Reach out!</h2>
        <p className="text-gray-400 mb-8">Feel free to send me a message</p>
        <form className="flex flex-col space-y-4">
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            <input type="text" placeholder="First Name" required className="w-full lg:w-1/2 p-4 bg-bg2 text-white rounded-lg" />
            <input type="text" placeholder="Last Name" required className="w-full lg:w-1/2 p-4 bg-bg2 text-white rounded-lg" />
          </div>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            <input type="email" placeholder="Mail" required className="w-full lg:w-1/2 p-4 bg-bg2 text-white rounded-lg" />
            <input type="tel" placeholder="Phone" required className="w-full lg:w-1/2 p-4 bg-bg2 text-white rounded-lg" />
          </div>
          <textarea placeholder="Message" rows={5} required className="w-full p-4 bg-bg2 text-white rounded-lg"></textarea>
          <button type="submit" className="w-full p-4 bg-primary hover:bg-secondary text-white rounded-lg">SUBMIT</button>
        </form>
      </div>

      <div className="w-full lg:w-1/3 bg-bg2 p-6 rounded-lg">
        <h3 className="text-primary text-2xl mb-6">Contact Information</h3>
        <p className="flex items-center text-gray-400 mb-4"><FaLocationDot className="text-primary mr-3" /> Kigali, Rwanda</p>
        <p className="flex items-center text-gray-400 mb-4"><FaPhone className="text-primary mr-3" /> +250 788 999 619</p>
        <p className="flex items-center text-gray-400"><FaBusinessTime className="text-primary mr-3" /> Available anytime</p>
      </div>
    </div>
  );
};

export default Contact;
