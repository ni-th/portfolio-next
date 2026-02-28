// components/sections/SkillsSection.tsx
import { forwardRef } from "react"
import { Code2, Database, Wrench, BarChart, Globe, Terminal, Palette, Shield, Cpu, Layers, GitBranch, LineChart, Microscope } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import LogoLoop from "../ui/LogoLoop"
import { SiIntellijidea, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiPostman, SiReact, SiSpring, SiTailwindcss, SiTypescript } from "react-icons/si"
import { IoLogoJavascript } from "react-icons/io"
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJava, FaJs, FaPython } from "react-icons/fa"
import { VscVscode } from "react-icons/vsc"
import { TopographyBackground } from "../ui/topography"
import Shuffle from "../ui/shuffle"

const SkillsSection = forwardRef<HTMLElement>((props, ref) => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-5 h-5 text-primary" />,
      skills: ["Java", "JavaScript (ES6+)", "TypeScript", "PHP", "Python"]
    },
    {
      title: "Frontend Development",
      icon: <Globe className="w-5 h-5 text-primary" />,
      skills: ["React.js","Next.js", "Tailwind CSS", "Bootstrap", "JavaFX", "HTML/CSS"]
    },
    {
      title: "Backend Development",
      icon: <Terminal className="w-5 h-5 text-primary" />,
      skills: ["Spring Boot", "REST APIs", "WebSocket", "JDBC Template", "JPA Repository"]
    },
    {
      title: "Database",
      icon: <Database className="w-5 h-5 text-primary" />,
      skills: ["MySQL", "Database Design", "Hibernate", "Data Modeling"]
    },
    {
      title: "Architecture & Concepts",
      icon: <Layers className="w-5 h-5 text-primary" />,
      skills: [
        "Layered Architecture", 
        "MVC Pattern", 
        "Role-Based Access Control (RBAC)", 
        "DTO Pattern", 
        "Factory Pattern"
      ]
    },
    {
      title: "Tools & Version Control",
      icon: <GitBranch className="w-5 h-5 text-primary" />,
      skills: ["Git", "GitHub", "Postman", "Maven", "IntelliJ IDEA", "VS Code"]
    },
    {
      title: "Data & Analysis",
      icon: <LineChart className="w-5 h-5 text-primary" />,
      skills: ["Excel", "SPSS", "Minitab", "Data Analysis", "Statistical Analysis"]
    },
    {
      title: "Learning & Research",
      icon: <Microscope className="w-5 h-5 text-primary" />,
      skills: ["Next.js", "Nest.js", "PostgreSQL", "TypeOrm", "GSAP", "Three.js", "Motion Framer", "Docker", "CI/CD", "Cloud Platforms (AWS)", "Microservices Architecture", "Performance Optimization", "Security Best Practices","State Management (Redux, MobX)"]
    }
  ]

  const featuredSkills = [
    "React.js", "Spring Boot", "TypeScript", "Java", 
    "MySQL", "REST APIs", "Tailwind CSS", "Git", "RBAC"
  ]

  const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiJavascript   />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <FaJava />, title: "Java", href: "https://www.java.com" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiSpring />, title: "Spring Boot", href: "https://spring.io/projects/spring-boot" },
  { node: <FaPython />, title: "Python", href: "https://www.python.org" },
  { node: <FaGitAlt   />, title: "Git", href: "https://git-scm.com" },
  { node: <FaGithub   />, title: "Github", href: "https://github.com" },
  { node: <FaHtml5  />, title: "HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { node: <FaCss3Alt  />, title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <VscVscode  />, title: "VS Code", href: "https://code.visualstudio.com" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiPostman />, title: "Postman", href: "https://www.getpostman.com" },
  { node: <SiIntellijidea />, title: "IntelliJ IDEA", href: "https://www.jetbrains.com/idea" },

];

  return (
    <section 
      ref={ref} 
      id="skills" 
      className="relative min-h-screen py-20 bg-transparent overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full">
        <TopographyBackground 
          className="absolute inset-0 w-full h-full"
          backgroundColor="oklch(0.145 0 0)"
        />
      </div>
      <div className="relative container mx-auto px-6 flex flex-col items-center">
        <Shuffle
                text="Technical Skills"
                tag="h2"
                className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600"
            />
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise and competencies
        </p>

        {/* Featured Skills - Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {featuredSkills.map((skill, index) => (
            <Badge 
              key={index}
              variant="secondary"
              className="px-4 py-2 text-sm bg-primary/10 hover:bg-primary/20 transition-colors cursor-default border border-primary/20"
            >
              {skill}
            </Badge>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 bg-gray-900/50 backdrop-blur-sm"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <span className="p-2 rounded-lg bg-primary/10">
                    {category.icon}
                  </span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="px-3 py-1 text-sm border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        ariaLabel="Technology partners"
        className="mt-10"
      /> {/* Add a logo loop at the bottom for visual interest */}
      </div>
    </section>
  )
})

SkillsSection.displayName = "SkillsSection"
export default SkillsSection