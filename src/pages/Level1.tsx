import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowLeft, CheckCircle, Code, Lightbulb, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Level1 = () => {
  const navigate = useNavigate();

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
              <Clock className="h-8 w-8 text-digital-green" />
              <Badge variant="outline" className="text-lg px-4 py-2">Level 1</Badge>
            </div>
            <h1 className="text-4xl font-bold mb-4 digital-font glow-effect text-digital-green">
              Text-Based Clock
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Create a large digital clock centered on the screen using text fonts only
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Requirements Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-digital-green" />
                Requirements
              </CardTitle>
              <CardDescription>
                Complete all these requirements to finish Level 1
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Display current time (hours, minutes, seconds)",
                  "Center the clock on the screen",
                  "Use large, readable fonts",
                  "Update every second",
                  "Show creativity in styling"
                ].map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-digital-green mt-1 flex-shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Code Structure */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-digital-blue" />
                Suggested Structure
              </CardTitle>
              <CardDescription>
                Basic HTML/CSS/JavaScript structure to get started
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">HTML Structure:</h4>
                  <div className="bg-muted p-3 rounded-md text-sm font-mono">
                    &lt;div id="clock"&gt;&lt;/div&gt;
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">CSS Styling:</h4>
                  <div className="bg-muted p-3 rounded-md text-sm font-mono">
                    font-size: 4rem;<br/>
                    text-align: center;<br/>
                    margin-top: 50vh;
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">JavaScript Function:</h4>
                  <div className="bg-muted p-3 rounded-md text-sm font-mono">
                    setInterval(updateClock, 1000);
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tips Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-digital-amber" />
              Tips & Creative Ideas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Styling Tips:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Use monospace fonts for consistent character width</li>
                  <li>• Try Google Fonts like 'Orbitron' or 'Rajdhani'</li>
                  <li>• Add text shadows for a glowing effect</li>
                  <li>• Experiment with color gradients</li>
                  <li>• Make it responsive for mobile devices</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Creative Enhancements:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Add a background with CSS animations</li>
                  <li>• Include date display below the time</li>
                  <li>• Add different color themes</li>
                  <li>• Include AM/PM indicator</li>
                  <li>• Add smooth transitions between seconds</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Level Preview */}
        <Card className="mt-8 border-digital-amber">
          <CardHeader>
            <CardTitle className="text-digital-amber">Next: Level 2</CardTitle>
            <CardDescription>
              Once you complete this level, move on to creating seven segment displays with HTML div elements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              variant="outline" 
              onClick={() => navigate("/level-2")}
              className="border-digital-amber text-digital-amber hover:bg-digital-amber hover:text-background"
            >
              Preview Level 2
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Level1;