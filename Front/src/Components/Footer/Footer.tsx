import React from "react";
import logo from "../../assets/logo2.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-bg2 text-white p-10 font-Lora">
      <div className="max-w-6xl mx-auto border-b border-gray-600 pb-5 mb-5">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Footer Logo */}
          <div className="flex items-center justify-center mb-6 md:mb-0 md:ml-16">
            <img src={logo} alt="logo" className="h-12 mr-3" />
            <span className="text-2xl font-bold">Annick</span>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-40">
            {/* Quick Links */}
            <ul className="text-center">
              <p className="font-bold">QUICK LINKS</p>
              <li><a href="#Home" className="text-gray-400 hover:text-teal-500">Home</a></li>
              <li><a href="#About" className="text-gray-400 hover:text-teal-500">About</a></li>
              <li><a href="#Skills" className="text-gray-400 hover:text-teal-500">Skills</a></li>
              <li><a href="#Education" className="text-gray-400 hover:text-teal-500">Education</a></li>
              <li><a href="#Projects" className="text-gray-400 hover:text-teal-500">Projects</a></li>
              <li><a href="#Testimonials" className="text-gray-400 hover:text-teal-500">Testimonials</a></li>
              <li><a href="#Contact" className="text-gray-400 hover:text-teal-500">Contact</a></li>
            </ul>

            {/* Services */}
            <ul className="text-center">
              <p className="font-bold">SERVICES</p>
              <li className="text-gray-400">Cybersecurity</li>
              <li className="text-gray-400">Backend Development</li>
              <li className="text-gray-400">Frontend Development</li>
            </ul>

            {/* Currently Working At */}
            <ul className="text-center">
              <p className="font-bold">CURRENTLY WORKING AT</p>
              <li>
                <a href="https://www.hepo.rw/" target="_blank" className="text-gray-400 hover:text-teal-500">HEPO</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-5 mb-5">
        <a href="mailto:niyubahwe.annick975@gmail.com" className="text-gray-400 hover:text-teal-500"><i className="fas fa-envelope"></i></a>
        <a href="https://www.facebook.com/" target="_blank" className="text-gray-400 hover:text-teal-500"><i className="fab fa-facebook"></i></a>
        <a href="https://www.linkedin.com/in/annick-niyubahwe-04898932a/" target="_blank" className="text-gray-400 hover:text-teal-500"><i className="fab fa-linkedin"></i></a>
        <a href="https://discord.gg/4RNQ8QtQ" target="_blank" className="text-gray-400 hover:text-teal-500"><i className="fab fa-discord"></i></a>
        <a href="https://wa.me/250788999619" target="_blank" className="text-gray-400 hover:text-teal-500"><i className="fab fa-whatsapp"></i></a>
        <a href="https://www.instagram.com/n_tannick975/" target="_blank" className="text-gray-400 hover:text-teal-500"><i className="fab fa-instagram"></i></a>
        <a href="https://www.tiktok.com/@_a.n.nick_975" target="_blank" className="text-gray-400 hover:text-teal-500"><i className="fab fa-tiktok"></i></a>
        <a href="https://x.com/" target="_blank" className="text-gray-400 hover:text-teal-500"><i className="fab fa-twitter"></i></a>
        <a href="https://github.com/annick975" target="_blank" className="text-gray-400 hover:text-teal-500"><i className="fab fa-github"></i></a>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 text-xs">
        <p>&copy;2024. All rights reserved.</p>
        <p>Made with 🩷 by Annick</p>
      </div>
    </footer>
  );
};

export default Footer;
