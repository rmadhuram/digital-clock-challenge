import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, Code, Palette, Clock, ExternalLink, ArrowRight, Layers, FileText, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const learningTopics = [
    {
      title: "Learning DOM",
      description: "Understanding the Document Object Model - how to select, manipulate, and interact with HTML elements",
      icon: <FileText className="h-6 w-6" />,
      color: "text-blue-600",
      resources: [
        "MDN DOM Introduction",
        "DOM Manipulation Exercises",
        "Event Handling Basics"
      ]
    },
    {
      title: "JavaScript Language",
      description: "Core JavaScript concepts including variables, functions, objects, arrays, and modern ES6+ features",
      icon: <Code className="h-6 w-6" />,
      color: "text-yellow-600",
      resources: [
        "JavaScript Fundamentals",
        "Async/Await and Promises",
        "Modern JavaScript Features"
      ]
    },
    {
      title: "TypeScript Language",
      description: "Adding type safety to JavaScript for better development experience and fewer runtime errors",
      icon: <Zap className="h-6 w-6" />,
      color: "text-blue-500",
      resources: [
        "TypeScript Basics",
        "Type Definitions",
        "Advanced Types and Generics"
      ]
    },
    {
      title: "CSS and Sass",
      description: "Styling fundamentals, advanced CSS features, and the powerful Sass preprocessor",
      icon: <Palette className="h-6 w-6" />,
      color: "text-pink-600",
      resources: [
        "CSS Grid and Flexbox",
        "CSS Animations",
        "Sass/SCSS Preprocessing"
      ]
    },
    {
      title: "Frameworks",
      description: "Modern frontend frameworks like React, Vue, Angular, and their ecosystems",
      icon: <Layers className="h-6 w-6" />,
      color: "text-green-600",
      resources: [
        "React Fundamentals",
        "State Management",
        "Component Architecture"
      ]
    }
  ];

  const challenges = [
    {
      title: "Digital Clock Challenge",
      description: "Build progressively complex digital clocks using HTML, CSS, and JavaScript across 4 levels",
      icon: <Clock className="h-6 w-6" />,
      color: "text-digital-green",
      levels: 4,
      skills: ["HTML/CSS", "JavaScript", "SVG", "Animations"],
      link: "/digital-clock-challenge"
    }
  ];

  return (
    <div className="min-h-screen gradient-bg">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 digital-font glow-effect text-primary">
            Learn Frontend with Raj
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Many students have asked me how to learn frontend development for the web. 
            In this page I am posting the links and challenges I have provided for them for the benefit of everyone.
          </p>
          <div className="flex justify-center gap-4">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Book className="h-4 w-4 mr-2" />
              Comprehensive Guide
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Code className="h-4 w-4 mr-2" />
              Practical Challenges
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Palette className="h-4 w-4 mr-2" />
              Real Projects
            </Badge>
          </div>
        </div>

        {/* Section 1: How to Start */}
        <section id="how-to-start" className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">How to Start</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningTopics.map((topic, idx) => (
              <Card key={idx} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`${topic.color}`}>
                      {topic.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{topic.title}</CardTitle>
                  <CardDescription className="text-base">
                    {topic.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Key Topics:</h4>
                  <ul className="space-y-2">
                    {topic.resources.map((resource, resourceIdx) => (
                      <li key={resourceIdx} className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">{resource}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className={`absolute top-0 right-0 w-16 h-16 ${topic.color} opacity-10`}>
                  {topic.icon}
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-8 p-6 bg-muted rounded-lg">
            <h3 className="text-lg font-semibold mb-3">📚 Learning Path</h3>
            <p className="text-muted-foreground">
              Start with DOM manipulation to understand how to interact with web pages, then strengthen your JavaScript 
              foundation. Once comfortable, explore TypeScript for better code quality, master CSS for beautiful designs, 
              and finally dive into modern frameworks to build complex applications.
            </p>
          </div>
        </section>

        {/* Section 2: Challenges */}
        <section id="challenges" className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Challenges</h2>
          <div className="grid gap-8">
            {challenges.map((challenge, idx) => (
              <Card key={idx} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`${challenge.color}`}>
                      {challenge.icon}
                    </div>
                    <Badge variant="outline">{challenge.levels} Levels</Badge>
                  </div>
                  <CardTitle className="text-2xl">{challenge.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {challenge.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {challenge.skills.map((skill, skillIdx) => (
                      <Badge key={skillIdx} variant="outline" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Button 
                      onClick={() => navigate(challenge.link)}
                      className="w-full md:w-auto"
                      size="lg"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Start Challenge
                    </Button>
                  </div>
                </CardContent>
                <div className={`absolute top-0 right-0 w-20 h-20 ${challenge.color} opacity-10`}>
                  {challenge.icon}
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-8 p-6 bg-muted rounded-lg">
            <h3 className="text-lg font-semibold mb-3">🎯 Why Challenges Matter</h3>
            <p className="text-muted-foreground">
              Hands-on challenges are the best way to solidify your learning. Each challenge is designed to progressively 
              build your skills, starting from basics and advancing to complex implementations. Complete these projects 
              to build an impressive portfolio while mastering essential frontend concepts.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
