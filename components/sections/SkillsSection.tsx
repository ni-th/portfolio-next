// components/sections/SkillsSection.tsx
import { forwardRef } from "react"
import { Code2, Database, Wrench, BarChart, Globe, Terminal, Palette, Shield, Cpu, Layers, GitBranch, LineChart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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
      skills: ["React.js", "Tailwind CSS", "Bootstrap", "JavaFX", "HTML/CSS"]
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
      title: "Other Technical Skills",
      icon: <Cpu className="w-5 h-5 text-primary" />,
      skills: ["Problem Solving", "Analytical Thinking", "Debugging", "Code Optimization", "Technical Documentation"]
    }
  ]

  const featuredSkills = [
    "React.js", "Spring Boot", "TypeScript", "Java", 
    "MySQL", "REST APIs", "Tailwind CSS", "Git", "RBAC"
  ]

  return (
    <section 
      ref={ref} 
      id="skills" 
      className="min-h-screen py-20 bg-gradient-to-b from-transparent to-gray-900/5"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Technical Skills</h2>
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

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          <Card className="border border-primary/10 bg-gradient-to-br from-blue-600/5 to-purple-600/5 hover:border-primary/30 transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Code2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">20+</p>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-primary/10 bg-gradient-to-br from-blue-600/5 to-purple-600/5 hover:border-primary/30 transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">5+</p>
                  <p className="text-sm text-muted-foreground">Database Designs</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-primary/10 bg-gradient-to-br from-blue-600/5 to-purple-600/5 hover:border-primary/30 transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">RBAC</p>
                  <p className="text-sm text-muted-foreground">Implemented in 3+ Projects</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-primary/10 bg-gradient-to-br from-blue-600/5 to-purple-600/5 hover:border-primary/30 transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Palette className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">5+</p>
                  <p className="text-sm text-muted-foreground">UI Frameworks</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
})

SkillsSection.displayName = "SkillsSection"
export default SkillsSection