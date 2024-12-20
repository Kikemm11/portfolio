import Navbar from '../components/Navbar';
import { FaEnvelope, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa'; // Icons from react-icons

function Contact() {
  return (
    <div className="max-w-10xl p-2 text-center">
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] ">
        {/* Contact Card */}
        <div className="bg-gray-200 p-8 rounded-xl shadow-lg flex flex-col items-left w-110">
          <h2 className="text-4xl font-poppins font-semibold text-gray-800 mb-6">
            Contact Me
          </h2>

          {/* Email */}
          <div className="flex items-center gap-4 mb-4">
            <FaEnvelope className="text-2xl text-gray-700" />
            <a
              href="mailto:Kikemaldonado11@gmail.com"
              className="text-lg text-gray-800 hover:text-gray-600 transition-colors"
            >
              Kikemaldonado11@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4 mb-4">
            <FaLinkedin className="text-2xl text-gray-700" />
            <a
              href="https://www.linkedin.com/in/iv%C3%A1n-maldonado-580146317/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-800 hover:text-gray-600 transition-colors"
            >
              linkedin.com/in/iván-maldonado-580146317
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-4 mb-4">
            <FaWhatsapp className="text-2xl text-gray-700" />
            <a
              href="https://wa.me/584140787806"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-800 hover:text-gray-600 transition-colors"
            >
              +58 4140787806
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-4">
            <FaGithub className="text-2xl text-gray-700" />
            <a
              href="https://github.com/Kikemm11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-800 hover:text-gray-600 transition-colors"
            >
              github.com/Kikemm11
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
