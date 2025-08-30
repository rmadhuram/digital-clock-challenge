import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Clock, Code, Palette, Globe, Github, ExternalLink, CheckCircle, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    githubRepo: "",
    level: "",
    description: ""
  });
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Submission received!",
      description: "Thank you for sharing your digital clock project. We'll review it soon!",
    });
    setFormData({ name: "", email: "", githubRepo: "", level: "", description: "" });
  };

  const levels = [
    {
      number: 1,
      title: "Text-Based Clock",
      description: "Create a large clock centered on the screen using text fonts only",
      icon: <Clock className="h-6 w-6" />,
      color: "text-digital-green",
      requirements: [
        "Display current time (hours, minutes, seconds)",
        "Center the clock on the screen",
        "Use large, readable fonts",
        "Update every second",
        "Show creativity in styling"
      ]
    },
    {
      number: 2,
      title: "Seven Segment DIV Clock",
      description: "Create a clock using seven segment digits made with HTML div tags",
      icon: <Code className="h-6 w-6" />,
      color: "text-digital-amber",
      requirements: [
        "Use only HTML div elements for segments",
        "Create a JavaScript class to represent a seven segment display",
        "Style segments to look like LED displays",
        "Add animations for digit transitions"
      ]
    },
    {
      number: 3,
      title: "SVG Digital Clock",
      description: "Replace div tags with SVG elements for cleaner graphics",
      icon: <Palette className="h-6 w-6" />,
      color: "text-digital-blue",
      requirements: [
        "Convert all segments to SVG paths",
        "Use scalable vector graphics",
        "Add glow effects and gradients",
        "Ensure responsive design",
        "Implement smooth animations"
      ]
    },
    {
      number: 4,
      title: "World Clock Dashboard",
      description: "Create multiple clocks showing different time zones",
      icon: <Globe className="h-6 w-6" />,
      color: "text-digital-red",
      requirements: [
        "Display 4-6 different time zones",
        "Label each clock with city name",
        "Use your preferred technique (text, div, or SVG)",
        "Responsive grid layout",
        "Add day/night indicators"
      ]
    }
  ];

  const studentProjects = [
    {
      name: "Sherlin Jennifer",
      level: "Level 2",
      title: "Neon Clock",
      description: "Beautiful neon-styled clock with a nice background",
      githubUrl: "https://github.com/SHERLIN2082/7-SEGMENT-CLOCK",
      liveUrl: "https://sherlin2082.github.io/7-SEGMENT-CLOCK/",
      image: "/images/sherlin.png",
      technologies: ["CSS Animations", "JavaScript ES6"]
    },
    {
      name: "Sivasankari",
      level: "Level 2",
      title: "Glowing Digital Display",
      description: "Retro-inspired digital clock with authentic CRT monitor effects",
      githubUrl: "https://github.com/Sivasankari0510/7_Segment_Clock",
      liveUrl: "https://sivasankari0510.github.io/7_Segment_Clock/clock.html",
      image: "/images/sivasankari.png",
      technologies: ["CSS Animations", "Retro Styling"]
    },
    {
      name: "Akalya",
      level: "Level 2",
      title: "LED Segment Clock",
      description: "Clean LED-style clock",
      githubUrl: "https://github.com/Akal28/7-segment-display",
      liveUrl: "https://akal28.github.io/7-segment-display/",
      image: "/images/akalya.png",
      technologies: ["HTML/CSS", "JavaScript Classes"]
    },
    {
      name: "Aleena Joseph",
      level: "Level 2",
      title: "LCD Clock",
      description: "A nicely constructed LCD clock",
      githubUrl: "https://github.com/aleena-joseph-86/DigitalClock/tree/main/version2",
      liveUrl: "",
      image: "/images/aleena.png",
      technologies: ["HTML/CSS", "JavaScript"]
    }
  ];

  return (
    <div className="min-h-screen gradient-bg">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 digital-font glow-effect text-digital-green">
            Raj's Digital Clock Challenge
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master HTML, CSS, and JavaScript by building progressively complex digital clocks. 
            From simple text displays to advanced SVG animations and world time zones.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Clock className="h-4 w-4 mr-2" />
              4 Levels
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Code className="h-4 w-4 mr-2" />
              HTML/CSS/JS
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Palette className="h-4 w-4 mr-2" />
              Creative Freedom
            </Badge>
          </div>
        </div>

        {/* Section 1: Instructions */}
        <section id="instructions" className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Challenge Instructions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {levels.map((level) => (
              <Card key={level.number} className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`${level.color}`}>
                      {level.icon}
                    </div>
                    <Badge variant="outline">Level {level.number}</Badge>
                  </div>
                  <CardTitle className="text-xl">{level.title}</CardTitle>
                  <CardDescription className="text-base">
                    {level.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {level.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-digital-green mt-1 flex-shrink-0" />
                        <span className="text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => navigate(`/level-${level.number}`)}
                      className="w-full"
                    >
                      <Info className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </CardContent>
                <div className={`absolute top-0 right-0 w-20 h-20 ${level.color} opacity-10`}>
                  {level.icon}
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-8 p-6 bg-muted rounded-lg">
            <h3 className="text-lg font-semibold mb-3">💡 Creativity Bonus</h3>
            <p className="text-muted-foreground">
              Show your unique style! Add custom colors, animations, sound effects, themes, or any other 
              creative touches that make your clock stand out. The most creative submissions will be featured 
              prominently in our showcase.
            </p>
          </div>
        </section>

        {/* Section 2: Student Showcase */}
        <section id="showcase" className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Student Showcase</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {studentProjects.map((project, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-3 right-3" variant="secondary">
                    {project.level}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <span className="text-sm text-muted-foreground">by {project.name}</span>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIdx) => (
                      <Badge key={techIdx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Section 3: Submission Form */}
        <section id="submit">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Submit Your Project</CardTitle>
              <CardDescription className="text-center">
                Ready to share your digital clock creation? Submit it here to be featured in our showcase!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="githubRepo">GitHub Repository URL</Label>
                  <Input
                    id="githubRepo"
                    value={formData.githubRepo}
                    onChange={(e) => setFormData({...formData, githubRepo: e.target.value})}
                    placeholder="https://github.com/yourusername/your-clock-project"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="level">Challenge Level Completed</Label>
                  <select
                    id="level"
                    value={formData.level}
                    onChange={(e) => setFormData({...formData, level: e.target.value})}
                    className="w-full px-3 py-2 border border-input bg-background rounded-md"
                    required
                  >
                    <option value="">Select a level</option>
                    <option value="Level 1">Level 1 - Text-Based Clock</option>
                    <option value="Level 2">Level 2 - Seven Segment DIV Clock</option>
                    <option value="Level 3">Level 3 - SVG Digital Clock</option>
                    <option value="Level 4">Level 4 - World Clock Dashboard</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="description">Project Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="Tell us about your project, the creative choices you made, and any special features..."
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Submit Project
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Index;
