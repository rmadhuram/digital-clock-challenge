import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, ArrowLeft, CheckCircle, Lightbulb, Target, Grid3X3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Clock2 from "@/components/custom/clock2";
const Level2 = () => {
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
              <Code className="h-8 w-8 text-digital-amber" />
              <Badge variant="outline" className="text-lg px-4 py-2">Level 2</Badge>
            </div>
            <h1 className="text-4xl font-bold mb-4 digital-font glow-effect text-digital-amber">
              Seven Segment DIV Clock
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Create a clock using seven segment digits made with HTML div tags
            </p>
          </div>
        </div>

        <Card>
          <CardContent>
            <div className="grid md:grid-cols-1 gap-6 mt-8">
              <Clock2 />
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          {/* Requirements Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-digital-amber" />
                Requirements
              </CardTitle>
              <CardDescription>
                Complete all these requirements to finish Level 2
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Use only HTML div elements for segments",
                  "Create JavaScript classes for each segment",
                  "Implement all digits (0-9)",
                  "Style segments to look like LED displays",
                  "Add animations for digit transitions"
                ].map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-digital-amber mt-1 flex-shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Seven Segment Diagram */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Grid3X3 className="h-5 w-5 text-digital-blue" />
                Seven Segment Layout
              </CardTitle>
              <CardDescription>
                Understanding the seven segment display structure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-muted p-6 rounded-md">
                  <div className="text-center font-mono text-sm">
                    <div className="mb-2">┌─ A ─┐</div>
                    <div className="mb-2">F&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B</div>
                    <div className="mb-2">├─ G ─┤</div>
                    <div className="mb-2">E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C</div>
                    <div>└─ D ─┘</div>
                  </div>
                </div>
                <div className="text-sm space-y-2">
                  <p><strong>Segments:</strong> A, B, C, D, E, F, G</p>
                  <p><strong>Example - Digit "8":</strong> All segments active</p>
                  <p><strong>Example - Digit "1":</strong> Only B and C active</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Code Examples */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-digital-blue" />
              Code Structure Examples
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">CSS for Segments:</h4>
                <div className="bg-muted p-4 rounded-md text-sm font-mono">
                  .segment &#123;<br/>
                  &nbsp;&nbsp;background: #ff0000;<br/>
                  &nbsp;&nbsp;position: absolute;<br/>
                  &nbsp;&nbsp;transition: 0.3s;<br/>
                  &#125;<br/><br/>
                  .segment.off &#123;<br/>
                  &nbsp;&nbsp;background: #330000;<br/>
                  &#125;
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">JavaScript Class:</h4>
                <div className="bg-muted p-4 rounded-md text-sm font-mono">
                  class Digit &#123;<br/>
                  &nbsp;&nbsp;constructor(element) &#123;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;this.segments = &#123;&#125;;<br/>
                  &nbsp;&nbsp;&#125;<br/><br/>
                  &nbsp;&nbsp;display(number) &#123;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;// Set segments<br/>
                  &nbsp;&nbsp;&#125;<br/>
                  &#125;
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tips Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-digital-amber" />
              Tips & Advanced Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Implementation Tips:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Use CSS Grid or absolute positioning</li>
                  <li>• Create a mapping array for each digit</li>
                  <li>• Use CSS transforms for angled segments</li>
                  <li>• Add box-shadow for LED glow effect</li>
                  <li>• Use CSS variables for easy color changes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Creative Enhancements:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Add different color themes (red, green, blue)</li>
                  <li>• Implement fade-in/fade-out transitions</li>
                  <li>• Add a realistic LCD background</li>
                  <li>• Include colon separators that blink</li>
                  <li>• Add sound effects for digit changes</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Card className="border-digital-green">
            <CardHeader>
              <CardTitle className="text-digital-green">Previous: Level 1</CardTitle>
              <CardDescription>Text-Based Clock</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline" 
                onClick={() => navigate("/level-1")}
                className="border-digital-green text-digital-green hover:bg-digital-green hover:text-background"
              >
                View Level 1
              </Button>
            </CardContent>
          </Card>

          <Card className="border-digital-blue">
            <CardHeader>
              <CardTitle className="text-digital-blue">Next: Level 3</CardTitle>
              <CardDescription>SVG Digital Clock</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline" 
                onClick={() => navigate("/level-3")}
                className="border-digital-blue text-digital-blue hover:bg-digital-blue hover:text-background"
              >
                Preview Level 3
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Level2;