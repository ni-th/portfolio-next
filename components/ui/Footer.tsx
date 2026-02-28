import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="from-black to-purple-600 bg-linear-to-br text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Portfolio
          </h3>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {['Home', 'About', 'Skills', 'Projects'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Made with 
            <Heart className="w-4 h-4 text-red-500 fill-current" /> 
            by John Doe
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;