import { forwardRef } from "react"
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react"
import { Button } from "../ui/button"
import { Particles } from "../ui/particles"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface InfoItem {
  icon: React.ElementType
  label: string
  description: string | string[],
  content: string | string[]
}

const AboutSection = forwardRef<HTMLElement>((props, ref) => {
  const personalInfo: InfoItem[] = [
    { icon: MapPin, label: "Location", description: "Kurunegala, Sri Lanka" , content: "Based in Kurunegala, Sri Lanka" },
    { icon: Briefcase, label: "Experience", description: "1+ years" , content: "1+ years of professional experience in software development" },
    { icon: GraduationCap, label: "Education", description: ["BSc in Physical Science", "Dipoloma in Software Engineering"] , content: ["BSc in Physical Science at University of Colombo", "Dipoloma in Software Engineering at iCET"] },
  ]

  const interests: string[] = [
    "Open Source", "AI/ML", "Animated Web Apps", "Cloud Computing",
    "UI/UX Design", "Mobile Development", "DevOps", "Tech Writing",
  ]

  return (
    <section
      ref={ref}
      id="about"
      className="relative min-h-screen py-20 flex items-center justify-center overflow-hidden"
    >
      <Particles className="absolute inset-0 -z-10" />

      <div className="container mx-auto px-6 z-10">
        
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          About Me
        </h2>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Description */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I am a full stack developer focused on building scalable
              web/ standalone applications and modern digital experiences. I enjoy solving
              complex problems and continuously learning new technologies.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My goal is to create clean, efficient, and impactful solutions
              that improve user experiences and drive innovation.
            </p>

            <Button size="lg">
              Download CV
            </Button>
          </div>

          {/* Right Side - Personal Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {personalInfo.map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-primary" />
                      {item.label}
                    </CardTitle>
                    <CardDescription>
                      {Array.isArray(item.description) ? item.description.join(", ") : item.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    {Array.isArray(item.content) ? (
                      <ul className="list-disc pl-5 space-y-1">
                        {item.content.map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{item.content}</p>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Interests Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6">
            Interests
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {interests.map((interest, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm rounded-full border bg-background/60 backdrop-blur-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
})

AboutSection.displayName = "AboutSection"
export default AboutSection