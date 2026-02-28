import { forwardRef } from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap, Heart, Code } from 'lucide-react';
import { Button } from '../ui/button';

interface InfoItem {
  icon: React.ElementType;
  label: string;
  value: string;
}

const AboutSection = forwardRef<HTMLElement>((props, ref) => {
  const personalInfo: InfoItem[] = [
    { icon: Calendar, label: 'Age', value: '28 years' },
    { icon: MapPin, label: 'Location', value: 'New York, USA' },
    { icon: Briefcase, label: 'Experience', value: '6+ years' },
    { icon: GraduationCap, label: 'Education', value: 'M.S. Computer Science' },
  ];

  const interests: string[] = [
    'Open Source', 'AI/ML', 'Web3', 'Cloud Computing',
    'UI/UX Design', 'Mobile Development', 'DevOps', 'Tech Writing'
  ];

  return (
    <section 
      ref={ref} 
      id="about"
      className="min-h-screen py-20 flex items-center bg-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Info */}
          <div className="space-y-8">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/api/placeholder/600/600" 
                  alt="Working on laptop" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-100 rounded-full -z-10" />
            </div>

            {/* Personal Info Grid */}
            <div className="grid grid-cols-2 gap-4">
              {personalInfo.map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-600">{item.label}</span>
                  </div>
                  <p className="font-semibold text-gray-800">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Bio and Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Passionate Developer Creating Digital Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                I'm a full-stack developer with over 6 years of experience building web applications 
                that solve real-world problems. My journey in tech started during my computer science 
                degree, and I've been hooked ever since.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I believe in writing clean, maintainable code and creating intuitive user experiences. 
                When I'm not coding, you'll find me contributing to open-source projects, writing tech 
                blogs, or exploring new technologies.
              </p>
            </div>

            {/* What I Do */}
            <div className="pt-4">
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-600" />
                What I Do
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="font-medium">Frontend Dev</p>
                  <p className="text-sm text-gray-600">React, Next.js, Vue</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="font-medium">Backend Dev</p>
                  <p className="text-sm text-gray-600">Node.js, Python, Go</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="font-medium">Mobile Dev</p>
                  <p className="text-sm text-gray-600">React Native, Flutter</p>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="font-medium">Cloud</p>
                  <p className="text-sm text-gray-600">AWS, GCP, Azure</p>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div>
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-blue-600" />
                Interests & Hobbies
              </h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              color="primary"
              size="lg"
              className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600"
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';
export default AboutSection;