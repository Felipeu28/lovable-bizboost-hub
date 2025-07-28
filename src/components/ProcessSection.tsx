import { Calendar, Wrench, Rocket, ArrowRight, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    number: "01",
    icon: Calendar,
    title: "Book Your Strategy Call",
    description: "15-minute consultation to understand your business goals and target market",
    details: [
      "Free 15-minute consultation",
      "Business goals assessment",
      "Target market identification",
      "Custom strategy development"
    ],
    duration: "15 min",
    highlight: "FREE"
  },
  {
    number: "02", 
    icon: Wrench,
    title: "We Build Your Package",
    description: "Our expert team creates your landing page, business plan, and market insights",
    details: [
      "Professional landing page design",
      "Comprehensive business plan",
      "AI-powered market research",
      "Conversion optimization"
    ],
    duration: "7 days",
    highlight: "GUARANTEED"
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Grow Your Business", 
    description: "Go live with confidence and start capturing leads immediately",
    details: [
      "Website launch and setup",
      "Lead capture system activation",
      "30-day support included",
      "Growth strategy guidance"
    ],
    duration: "Day 8+",
    highlight: "RESULTS"
  }
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <Badge className="mb-6 px-4 py-2 bg-orange-light/30 text-orange-cta">
            Simple 3-Step Process
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It Works:
            <span className="gradient-text"> From Idea to Launch</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We've streamlined everything so you can focus on what matters - growing your business
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-electric via-green-success to-orange-cta" />
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div key={index} className="relative fade-in" style={{ animationDelay: `${index * 0.3}s` }}>
                  {/* Step Number Circle */}
                  <div className="relative mb-8">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-blue-light flex items-center justify-center mx-auto border-4 border-white shadow-lg relative z-10">
                      <span className="text-white font-bold text-xl">{step.number}</span>
                    </div>
                    
                    {/* Highlight Badge */}
                    <Badge className={`absolute -top-2 left-1/2 transform -translate-x-1/2 text-xs px-2 py-1 ${
                      index === 0 ? 'bg-green-success text-white' :
                      index === 1 ? 'bg-blue-electric text-white' :
                      'bg-orange-cta text-white'
                    }`}>
                      {step.highlight}
                    </Badge>
                  </div>

                  {/* Step Card */}
                  <Card className="feature-card text-center h-full">
                    <CardContent className="p-6 space-y-6">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mx-auto">
                        <Icon className="w-6 h-6" />
                      </div>

                      {/* Title & Duration */}
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">{step.title}</h3>
                        <div className="flex items-center justify-center gap-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{step.duration}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>

                      {/* Details List */}
                      <ul className="space-y-2 text-left">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Summary */}
        <div className="mt-16 max-w-2xl mx-auto fade-in">
          <Card className="glass p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Complete Timeline</h3>
            <div className="flex items-center justify-center gap-4 text-lg">
              <span className="text-muted-foreground">Today:</span>
              <span className="font-semibold">Book Call</span>
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground">Day 7:</span>
              <span className="font-semibold">Ready to Launch</span>
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground">Day 8:</span>
              <span className="font-semibold text-green-success">Start Making Money</span>
            </div>
            
            <div className="mt-6">
              <Button size="lg" className="btn-cta text-lg px-8 py-4">
                Book Your Free Strategy Call
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}