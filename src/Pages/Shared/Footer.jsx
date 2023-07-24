const Footer = () => {
  return (
    <footer className="bg-gray-800 mt-20 text-white py-4 px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <p className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-300">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
