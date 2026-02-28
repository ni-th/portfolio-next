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
  value: string
}

const AboutSection = forwardRef<HTMLElement>((props, ref) => {
  const personalInfo: InfoItem[] = [
    { icon: Calendar, label: "Age", value: "28 years" },
    { icon: MapPin, label: "Location", value: "New York, USA" },
    { icon: Briefcase, label: "Experience", value: "6+ years" },
    { icon: GraduationCap, label: "Education", value: "M.S. Computer Science" },
  ]

  const interests: string[] = [
    "Open Source", "AI/ML", "Web3", "Cloud Computing",
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
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl border bg-background/50 backdrop-blur-sm"
                >
                  <Icon className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="font-semibold">
                      {item.value}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
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
                    <CardDescription>{item.value}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Card Content</p>
                  </CardContent>
                  <CardFooter>
                    <p>Card Footer</p>
                  </CardFooter>
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