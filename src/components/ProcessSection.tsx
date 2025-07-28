import { Calendar, Wrench, Rocket, ArrowRight, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    number: "01",
    icon: Calendar,
    title: "Create Your Business Plan",
    description: "Complete your business plan and insights at our dedicated portal",
    details: [
      "Visit www.business.moilapp.com/insight",
      "AI-powered business plan generation",
      "Market research and insights",
      "Complete at your own pace"
    ],
    duration: "Self-paced",
    highlight: "START HERE"
  },
  {
    number: "02", 
    icon: Wrench,
    title: "Landing Page Creation",
    description: "We create your first landing page and send it for review",
    details: [
      "Professional landing page design",
      "Based on your business plan",
      "Sent directly to your email",
      "Ready for your feedback"
    ],
    duration: "3-5 days",
    highlight: "DELIVERED"
  },
  {
    number: "03",
    icon: Calendar,
    title: "Review Call & Updates",
    description: "15-minute call to review your landing page and request changes",
    details: [
      "Schedule convenient 15-min call",
      "Review landing page together",
      "Request any updates needed",
      "Professional guidance included"
    ],
    duration: "15 min",
    highlight: "PERSONALIZED"
  },
  {
    number: "04",
    icon: Rocket,
    title: "Final Delivery",
    description: "Updates delivered within 24 hours of your review call",
    details: [
      "Fast 24-hour turnaround",
      "All requested changes included",
      "Final landing page delivered",
      "Ready to launch your business"
    ],
    duration: "24 hours",
    highlight: "GUARANTEED"
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
          
          <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div key={index} className="relative fade-in" style={{ animationDelay: `${index * 0.3}s` }}>
                  {/* Step Number Circle */}
                  <div className="relative mb-8">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-blue-light flex items-center justify-center mx-auto border-4 border-background shadow-lg relative z-20">
                      <span className="text-white font-bold text-xl">{step.number}</span>
                    </div>
                    
                    {/* Highlight Badge */}
                    <Badge className={`absolute -top-2 left-1/2 transform -translate-x-1/2 text-xs px-2 py-1 z-30 ${
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
            <div className="flex items-center justify-center gap-4 text-sm md:text-lg flex-wrap">
              <span className="text-muted-foreground">Today:</span>
              <span className="font-semibold">Create Plan</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">Day 5:</span>
              <span className="font-semibold">Review Call</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">Day 6:</span>
              <span className="font-semibold text-green-success">Launch Ready</span>
            </div>
            
            <div className="mt-6">
              <Button 
                size="lg" 
                className="btn-cta text-lg px-8 py-4"
                onClick={() => window.open('https://business.moilapp.com/register', '_blank')}
              >
                Start Your Business Plan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}