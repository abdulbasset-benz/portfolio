const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left side */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">Abdulbasset The Dev</h2>
          <p className="text-sm text-gray-400">
            Full-Stack Developer • Building digital experiences
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/abdulbasset-benz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/abdelbasset-benzekout"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="mailto:benz.abdelbasset@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} Abdulbasset The Dev. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
