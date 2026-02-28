import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="from-background to-indigo-900 bg-linear-to-b text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Copyright */}
          <p className="text-gray-400 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Made with 
            <Heart className="w-4 h-4 text-red-500 fill-current" /> 
            by Nimantha Thennakoon
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;