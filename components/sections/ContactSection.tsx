// components/sections/ContactSection.tsx
import { forwardRef, useState, useEffect } from "react";
import { Mail, MapPin, Github, Linkedin, Send} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import HeadingGSAP from "../ui/HeadingGSAP";

const ContactSection = forwardRef<HTMLElement>((props, ref) => {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // Prevent hydration mismatch by only rendering form after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:nimantha.bt@gmail.com?subject=${encodeURIComponent(formData.subject || "Contact from Portfolio")}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "nimantha.bt@gmail.com",
      href: "mailto:nimantha.bt@gmail.com",
      description: "I'll respond within 24 hours"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Kurunegala, Sri Lanka",
      href: "https://maps.google.com/?q=Kurunegala,Sri+Lanka",
      description: "Open to remote work worldwide"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/ni-th",
      username: "@ni-th"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/nimantha-thennakoon",
      username: "nimantha-thennakoon"
    }
  ];

  return (
    <section 
      ref={ref} 
      id="contact" 
      className="relative min-h-screen py-20 overflow-hidden"
    >
      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
            <HeadingGSAP text="Contact Me" animationType="fade" className="text-3xl text-center md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block"
              >
                <Card className="border border-primary/10 hover:border-primary/30 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        <p className="text-primary text-sm mb-1">{info.value}</p>
                        <p className="text-xs text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}

            {/* Social Links */}
            <Card className="border border-primary/10 bg-gray-900/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Connect with me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg border border-primary/10 hover:border-primary/30 transition-all"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {social.icon}
                      </div>
                      <div>
                        <p className="font-medium">{social.label}</p>
                        <p className="text-xs text-muted-foreground">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form - Only render on client */}
          <div className="lg:col-span-2">
            <Card className="border border-primary/10 bg-gray-900/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Send me a message</CardTitle>
                <CardDescription>
                  Fill out the form and I'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {mounted ? (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">
                          Your Name <span className="text-primary">*</span>
                        </label>
                        <input
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full h-10 px-3 rounded-md bg-gray-800/50 border border-primary/10 text-foreground focus:outline-none focus:border-primary/30"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-muted-foreground">
                          Email <span className="text-primary">*</span>
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full h-10 px-3 rounded-md bg-gray-800/50 border border-primary/10 text-foreground focus:outline-none focus:border-primary/30"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">
                        Subject <span className="text-primary">*</span>
                      </label>
                      <input
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full h-10 px-3 rounded-md bg-gray-800/50 border border-primary/10 text-foreground focus:outline-none focus:border-primary/30"
                        placeholder="What would you like to discuss?"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">
                        Message <span className="text-primary">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 rounded-md bg-gray-800/50 border border-primary/10 text-foreground focus:outline-none focus:border-primary/30 resize-none"
                        placeholder="Your message here..."
                      />
                    </div>

                    <div className="flex justify-end">
                      <Button 
                        type="submit"
                        className="bg-linear-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 hover:cursor-pointer"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </div>
                  </form>
                ) : (
                  // Simple placeholder while loading
                  <div className="space-y-6">
                    <div className="h-64 rounded-lg bg-gray-800/30 animate-pulse" />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Location Badge */}
        <div className="mt-12 text-center">
          <Badge variant="outline" className="px-4 py-2 border-primary/20 bg-primary/5">
            <MapPin className="w-4 h-4 mr-2 text-primary" />
            Based in Kurunegala, Sri Lanka · Open to remote work
          </Badge>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";
export default ContactSection;