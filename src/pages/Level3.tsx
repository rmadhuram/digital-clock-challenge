import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, ArrowLeft, CheckCircle, Lightbulb, Target, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Level3 = () => {
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
              <Palette className="h-8 w-8 text-digital-blue" />
              <Badge variant="outline" className="text-lg px-4 py-2">Level 3</Badge>
            </div>
            <h1 className="text-4xl font-bold mb-4 digital-font glow-effect text-digital-blue">
              SVG Digital Clock
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Replace div tags with SVG elements for cleaner, scalable graphics
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Requirements Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-digital-blue" />
                Requirements
              </CardTitle>
              <CardDescription>
                Complete all these requirements to finish Level 3
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Convert all segments to SVG paths",
                  "Use scalable vector graphics",
                  "Add glow effects and gradients",
                  "Ensure responsive design",
                  "Implement smooth animations"
                ].map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-digital-blue mt-1 flex-shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* SVG Advantages */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-digital-green" />
                SVG Advantages
              </CardTitle>
              <CardDescription>
                Why SVG is perfect for digital displays
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-digital-green rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Scalable:</strong> Perfect quality at any size</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-digital-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Crisp:</strong> Vector-based, no pixelation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-digital-amber rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Effects:</strong> Built-in gradients and filters</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-digital-red rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Lightweight:</strong> Smaller file sizes</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* SVG Code Examples */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5 text-digital-blue" />
              SVG Code Examples
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Basic SVG Structure:</h4>
                <div className="bg-muted p-4 rounded-md text-sm font-mono overflow-x-auto">
                  &lt;svg viewBox="0 0 100 180"&gt;<br/>
                  &nbsp;&nbsp;&lt;path d="M10,10 L90,10 L85,15<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;L15,15 Z" class="segment-a"/&gt;<br/>
                  &nbsp;&nbsp;&lt;path d="..." class="segment-b"/&gt;<br/>
                  &nbsp;&nbsp;...<br/>
                  &lt;/svg&gt;
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">SVG Styling with Effects:</h4>
                <div className="bg-muted p-4 rounded-md text-sm font-mono overflow-x-auto">
                  .segment &#123;<br/>
                  &nbsp;&nbsp;fill: url(#gradient);<br/>
                  &nbsp;&nbsp;filter: drop-shadow(0 0 10px<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;currentColor);<br/>
                  &nbsp;&nbsp;transition: all 0.3s ease;<br/>
                  &#125;
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
              Advanced SVG Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Gradients:</h4>
                <div className="bg-muted p-3 rounded-md text-sm">
                  <div className="font-mono text-xs">
                    &lt;linearGradient id="glow"&gt;<br/>
                    &nbsp;&nbsp;&lt;stop stop-color="#ff0000"/&gt;<br/>
                    &nbsp;&nbsp;&lt;stop stop-color="#ff6666"/&gt;<br/>
                    &lt;/linearGradient&gt;
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Filters:</h4>
                <div className="bg-muted p-3 rounded-md text-sm">
                  <div className="font-mono text-xs">
                    &lt;filter id="glow"&gt;<br/>
                    &nbsp;&nbsp;&lt;feGaussianBlur/&gt;<br/>
                    &nbsp;&nbsp;&lt;feColorMatrix/&gt;<br/>
                    &lt;/filter&gt;
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Animations:</h4>
                <div className="bg-muted p-3 rounded-md text-sm">
                  <div className="font-mono text-xs">
                    &lt;animateTransform<br/>
                    &nbsp;&nbsp;attributeName="fill"<br/>
                    &nbsp;&nbsp;dur="0.3s"/&gt;
                  </div>
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
              Pro Tips & Creative Ideas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Technical Tips:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Use viewBox for responsive scaling</li>
                  <li>• Create reusable defs for gradients/filters</li>
                  <li>• Use CSS custom properties for theming</li>
                  <li>• Optimize paths for smoother animations</li>
                  <li>• Consider using SVG sprites for performance</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Visual Enhancements:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Add subtle reflections and highlights</li>
                  <li>• Create pulsing glow effects</li>
                  <li>• Implement color temperature changes</li>
                  <li>• Add perspective and 3D effects</li>
                  <li>• Include animated background patterns</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Card className="border-digital-amber">
            <CardHeader>
              <CardTitle className="text-digital-amber">Previous: Level 2</CardTitle>
              <CardDescription>Seven Segment DIV Clock</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline" 
                onClick={() => navigate("/level-2")}
                className="border-digital-amber text-digital-amber hover:bg-digital-amber hover:text-background"
              >
                View Level 2
              </Button>
            </CardContent>
          </Card>

          <Card className="border-digital-red">
            <CardHeader>
              <CardTitle className="text-digital-red">Next: Level 4</CardTitle>
              <CardDescription>World Clock Dashboard</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline" 
                onClick={() => navigate("/level-4")}
                className="border-digital-red text-digital-red hover:bg-digital-red hover:text-background"
              >
                Preview Level 4
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Level3;