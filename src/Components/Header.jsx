import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-2xl font-bold">
            <span className="text-primary">AI</span>
            <span className="text-secondary">Innovate</span>
          </a>
          <nav className="hidden md:flex space-x-8">
            <a href="#hero" className="text-gray-600 hover:text-primary">Home</a>
            <a href="#about" className="text-gray-600 hover:text-primary">About</a>
            <a href="#features" className="text-gray-600 hover:text-primary">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-primary">Pricing</a>
            <a href="#contact" className="text-gray-600 hover:text-primary">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a
              href="#contact"
              className="hidden md:block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
            >
              Get Started
            </a>
            <button className="md:hidden text-gray-600 hover:text-primary">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 