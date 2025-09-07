import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, ArrowLeft, CheckCircle, Lightbulb, Target, MapPin, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Clock4 from "@/components/custom/clock-4";


const Level4 = () => {
  const navigate = useNavigate();

  const timezones = [
    { city: "New York", timezone: "America/New_York", flag: "🇺🇸" },
    { city: "London", timezone: "Europe/London", flag: "🇬🇧" },
    { city: "Tokyo", timezone: "Asia/Tokyo", flag: "🇯🇵" },
    { city: "Sydney", timezone: "Australia/Sydney", flag: "🇦🇺" },
    { city: "Paris", timezone: "Europe/Paris", flag: "🇫🇷" },
    { city: "Dubai", timezone: "Asia/Dubai", flag: "🇦🇪" }
  ];

  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Button 
            variant="outline" 
            onClick={() => navigate("/")}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Challenge
          </Button>
          
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Globe className="h-8 w-8 text-digital-red" />
              <Badge variant="outline" className="text-lg px-4 py-2">Level 4</Badge>
            </div>
            <h1 className="text-4xl font-bold mb-4 digital-font glow-effect text-digital-red">
              World Clock Dashboard
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Create multiple clocks showing different time zones around the world
            </p>
          </div>
        </div>

         <Card>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6 mt-8">
                <Clock4 />
              </div>
            </CardContent>
          </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Requirements Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-digital-red" />
                Requirements
              </CardTitle>
              <CardDescription>
                Complete all these requirements to finish Level 4
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Display 4-6 different time zones",
                  "Label each clock with city name",
                  "Use your preferred technique (text, div, or SVG)",
                  "Responsive grid layout",
                  "Add day/night indicators"
                ].map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-digital-red mt-1 flex-shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Suggested Time Zones */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-digital-blue" />
                Suggested Time Zones
              </CardTitle>
              <CardDescription>
                Popular cities for a world clock display
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {timezones.map((tz, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-muted rounded">
                    <span className="text-lg">{tz.flag}</span>
                    <div>
                      <div className="font-medium text-sm">{tz.city}</div>
                      <div className="text-xs text-muted-foreground font-mono">
                        {tz.timezone}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* JavaScript APIs */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-digital-green" />
              JavaScript Date APIs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Basic Time Zone Conversion:</h4>
                <div className="bg-muted p-4 rounded-md text-sm font-mono overflow-x-auto">
                  const now = new Date();<br/>
                  const nyTime = now.toLocaleString(<br/>
                  &nbsp;&nbsp;"en-US", &#123;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;timeZone: "America/New_York"<br/>
                  &nbsp;&nbsp;&#125;<br/>
                  );
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Advanced Formatting:</h4>
                <div className="bg-muted p-4 rounded-md text-sm font-mono overflow-x-auto">
                  const formatter = new Intl<br/>
                  &nbsp;&nbsp;.DateTimeFormat('en-US', &#123;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;timeZone: 'Europe/London',<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;hour12: false,<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;hour: '2-digit',<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;minute: '2-digit'<br/>
                  &nbsp;&nbsp;&#125;);
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Layout Examples */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-digital-blue" />
              Layout Ideas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Grid Layout:</h4>
                <div className="bg-muted p-4 rounded-md">
                  <div className="grid grid-cols-2 gap-2 text-center text-xs">
                    <div className="bg-digital-green/20 p-2 rounded">NYC</div>
                    <div className="bg-digital-blue/20 p-2 rounded">LON</div>
                    <div className="bg-digital-amber/20 p-2 rounded">TOK</div>
                    <div className="bg-digital-red/20 p-2 rounded">SYD</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Card Layout:</h4>
                <div className="bg-muted p-4 rounded-md">
                  <div className="space-y-2">
                    <div className="bg-primary/20 p-2 rounded text-xs text-center">City Card 1</div>
                    <div className="bg-primary/20 p-2 rounded text-xs text-center">City Card 2</div>
                    <div className="bg-primary/20 p-2 rounded text-xs text-center">City Card 3</div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Circular Layout:</h4>
                <div className="bg-muted p-4 rounded-md">
                  <div className="relative w-16 h-16 mx-auto">
                    <div className="absolute inset-0 border-2 border-primary/20 rounded-full"></div>
                    <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary/40 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-primary/40 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
                    <div className="absolute left-0 top-1/2 w-2 h-2 bg-primary/40 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute right-0 top-1/2 w-2 h-2 bg-primary/40 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Advanced Features */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-digital-amber" />
              Advanced Features & Enhancements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Day/Night Indicators:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Calculate sunrise/sunset times</li>
                  <li>• Change background colors based on time</li>
                  <li>• Add sun/moon icons</li>
                  <li>• Implement gradient transitions</li>
                  <li>• Show local weather conditions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Creative Enhancements:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Add country flags and city photos</li>
                  <li>• Include temperature displays</li>
                  <li>• Show relative time differences</li>
                  <li>• Add click-to-focus functionality</li>
                  <li>• Implement time zone search/filter</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Completion Section */}
        <Card className="mt-8 border-digital-green">
          <CardHeader>
            <CardTitle className="text-digital-green flex items-center gap-2">
              <CheckCircle className="h-6 w-6" />
              Challenge Complete!
            </CardTitle>
            <CardDescription>
              Congratulations! You've completed all four levels of the Digital Clock Challenge.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm">
                You've now mastered creating digital clocks using multiple techniques:
              </p>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-digital-green" />
                  Text-based displays
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 border border-digital-amber rounded-sm"></div>
                  Seven segment DIVs
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-digital-blue rounded-full"></div>
                  SVG graphics
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-digital-red" />
                  World time zones
                </li>
              </ul>
              <Button 
                onClick={() => navigate("/")}
                className="w-full bg-digital-green hover:bg-digital-green/90"
              >
                Share Your Project
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-start mt-8">
          <Card className="border-digital-blue">
            <CardHeader>
              <CardTitle className="text-digital-blue">Previous: Level 3</CardTitle>
              <CardDescription>SVG Digital Clock</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline" 
                onClick={() => navigate("/level-3")}
                className="border-digital-blue text-digital-blue hover:bg-digital-blue hover:text-background"
              >
                View Level 3
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Level4;