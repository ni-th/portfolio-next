import { forwardRef } from 'react';
import { Code2, Palette, Server, Globe, Cpu, Zap } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: Skill[];
}

interface Skill {
  name: string;
  level: number; // 0-100
  color: string;
}

const SkillsSection = forwardRef<HTMLElement>((props, ref) => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      icon: Code2,
      skills: [
        { name: 'React/Next.js', level: 95, color: 'blue' },
        { name: 'TypeScript', level: 90, color: 'blue' },
        { name: 'HTML/CSS', level: 95, color: 'blue' },
        { name: 'Tailwind CSS', level: 90, color: 'blue' },
        { name: 'Vue.js', level: 80, color: 'blue' },
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 90, color: 'green' },
        { name: 'Python', level: 85, color: 'green' },
        { name: 'Java', level: 75, color: 'green' },
        { name: 'GraphQL', level: 85, color: 'green' },
        { name: 'REST APIs', level: 95, color: 'green' },
      ]
    },
    {
      title: 'Database & Cloud',
      icon: Globe,
      skills: [
        { name: 'PostgreSQL', level: 85, color: 'purple' },
        { name: 'MongoDB', level: 80, color: 'purple' },
        { name: 'AWS', level: 75, color: 'purple' },
        { name: 'Firebase', level: 85, color: 'purple' },
        { name: 'Docker', level: 70, color: 'purple' },
      ]
    },
    {
      title: 'Tools & Others',
      icon: Cpu,
      skills: [
        { name: 'Git/GitHub', level: 95, color: 'orange' },
        { name: 'Figma', level: 80, color: 'orange' },
        { name: 'Jest', level: 75, color: 'orange' },
        { name: 'Webpack', level: 70, color: 'orange' },
        { name: 'CI/CD', level: 75, color: 'orange' },
      ]
    }
  ];

  const getColorClasses = (color: string, level: number) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section 
      ref={ref} 
      id="skills"
      className="min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-lg">My Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I've worked with a variety of technologies and tools. Here's an overview of my technical stack.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${getColorClasses(skill.color, skill.level)}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills - Tech Stack Icons */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'GraphQL', 
              'AWS', 'Docker', 'MongoDB', 'PostgreSQL', 'Tailwind', 'Figma'].map((tech) => (
              <div 
                key={tech}
                className="px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow cursor-default"
              >
                <span className="text-gray-700 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

SkillsSection.displayName = 'SkillsSection';
export default SkillsSection;