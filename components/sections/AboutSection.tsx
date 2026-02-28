import { forwardRef } from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap, Heart, Code } from 'lucide-react';
import { Button } from '../ui/button';
import { Particles } from '../ui/particles';

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
      className="relative min-h-screen py-20 flex items-center"
    >
      <Particles className='absolute inset-0 -z-10' />
    </section>
  );
});

AboutSection.displayName = 'AboutSection';
export default AboutSection;