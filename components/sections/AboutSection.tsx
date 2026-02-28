import { forwardRef } from "react"
import { User, GraduationCap, Briefcase, Award, Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "../ui/badge"

const AboutSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="about" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
          </TabsList>

          {/* About Tab */}
          <TabsContent value="about" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Bio Section */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Bio
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Bachelor of Science graduate with a Diploma in Software Engineering, 
                  passionate about building innovative software solutions...
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Kurunegala, Sri Lanka</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>Open to work</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Experience</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">6+ months</p>
                    <p className="text-xs text-muted-foreground">Internship at NEXOVA</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Projects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">5+</p>
                    <p className="text-xs text-muted-foreground">Personal & Academic</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education" className="space-y-6">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Education
              </h3>
              
              <div className="space-y-6">
                {/* University of Colombo */}
                <div className="relative pl-8 border-l-2 border-primary">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                  <div className="mb-2">
                    <span className="text-sm text-primary font-semibold">2022 - 2025</span>
                  </div>
                  <h4 className="text-xl font-bold">University of Colombo</h4>
                  <p className="text-lg text-muted-foreground">BSc in Physical Science (Computer Science)</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Studied Pure Mathematics, Applied Mathematics, Computer Science, and Statistics
                  </p>
                </div>

                {/* iCET */}
                <div className="relative pl-8 border-l-2 border-primary">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                  <div className="mb-2">
                    <span className="text-sm text-primary font-semibold">2024 - 2025</span>
                  </div>
                  <h4 className="text-xl font-bold">iCET - Institute of Computer Engineering Technology</h4>
                  <p className="text-lg text-muted-foreground">Diploma in Software Engineering</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    1-year program with 6-month real-world project component
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Experience Tab */}
          <TabsContent value="experience" className="space-y-6">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Internship Experience
              </h3>

              {/* NEXOVA Experience */}
              <Card className="mb-6">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">NEXOVA (PRIVATE) LIMITED</CardTitle>
                      <CardDescription>Trainee Software Developer</CardDescription>
                    </div>
                    <Badge>Sep 2025 - Mar 2026</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Developed full-stack Restaurant Management System using React, Spring Boot, and MySQL</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Implemented WebSocket-based real-time order tracking between cashier, kitchen, and tables</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Designed Role-Based Access Control (RBAC) for different user roles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Conducted company-wide Tech Talk on Cyber Security</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
})

AboutSection.displayName = "AboutSection"
export default AboutSection