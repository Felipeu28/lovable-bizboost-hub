import { Globe, FileText, Brain, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Globe,
    title: "Professional Landing Page That Converts",
    description: "Mobile-responsive design with SEO optimization and A/B tested layouts for maximum conversions",
    benefits: [
      "Mobile-responsive design",
      "SEO optimization included", 
      "A/B tested layout for maximum conversions",
      "Fast loading times"
    ],
    outcome: "Start capturing leads from day one",
    color: "blue"
  },
  {
    icon: FileText,
    title: "Data-Driven Business Plan",
    description: "Complete market research, competitor analysis, and financial projections ready for investors",
    benefits: [
      "Market research and competitor analysis",
      "Financial projections and funding roadmap",
      "Risk assessment and mitigation strategies",
      "Industry insights and trends"
    ],
    outcome: "Secure funding and make informed decisions",
    color: "green"
  },
  {
    icon: Brain,
    title: "AI-Powered Market Insights",
    description: "Advanced analytics to identify your target audience, optimize pricing, and discover growth opportunities",
    benefits: [
      "Target audience analysis",
      "Pricing optimization recommendations",
      "Growth opportunity identification",
      "Competitive positioning strategy"
    ],
    outcome: "Skip months of trial and error",
    color: "orange"
  }
];

const getColorClasses = (color: string) => {
  switch (color) {
    case 'blue':
      return {
        icon: 'text-blue-electric bg-blue-light/20',
        badge: 'bg-blue-light text-blue-electric'
      };
    case 'green':
      return {
        icon: 'text-green-success bg-green-light/20',
        badge: 'bg-green-light text-green-success'
      };
    case 'orange':
      return {
        icon: 'text-orange-cta bg-orange-light/20',
        badge: 'bg-orange-light text-orange-cta'
      };
    default:
      return {
        icon: 'text-accent bg-accent/20',
        badge: 'bg-accent/20 text-accent'
      };
  }
};

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to 
            <span className="gradient-text"> Launch Successfully</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Instead of spending months figuring it out, get everything built by experts in just 7 days
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            const Icon = feature.icon;
            
            return (
              <Card 
                key={index} 
                className="feature-card h-full fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className={`w-16 h-16 rounded-2xl ${colors.icon} flex items-center justify-center`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Benefits List */}
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Outcome Badge */}
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${colors.badge}`}>
                    <ArrowRight className="w-4 h-4" />
                    {feature.outcome}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center fade-in">
          <Button size="lg" className="btn-cta text-lg px-8 py-4">
            Get All Three for Just $300
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Usually $1,000+ when purchased separately
          </p>
        </div>
      </div>
    </section>
  );
}