import { Shield, CheckCircle, RefreshCw, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const guarantees = [
  {
    icon: Shield,
    title: "30-Day Money-Back Guarantee",
    description: "If you're not completely satisfied with your landing page, business plan, and market insights, we'll refund every penny.",
    details: [
      "No questions asked refund policy",
      "Full refund within 30 days",
      "Keep all delivered materials",
      "Instant refund processing"
    ]
  },
  {
    icon: CheckCircle,
    title: "Quality Guarantee",
    description: "Your landing page will be professionally designed, mobile-optimized, and ready to convert visitors into customers.",
    details: [
      "Professional design standards",
      "Mobile-responsive guarantee",
      "SEO optimization included",
      "Conversion-optimized copy"
    ]
  },
  {
    icon: Clock,
    title: "7-Day Guarantee",
    description: "Delivery in 3-5 days after business plan completion, with our 7-day guarantee for peace of mind.",
    details: [
      "3-5 day delivery promise",
      "7-day quality guarantee",
      "Progress updates included",
      "Priority support included"
    ]
  },
  {
    icon: RefreshCw,
    title: "One Revision Round",
    description: "After your review call, we provide one comprehensive revision to perfect your landing page.",
    details: [
      "One revision round included",
      "Expert feedback and guidance", 
      "24-hour turnaround on changes",
      "Direct designer communication"
    ]
  }
];

export default function GuaranteeSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <Badge className="mb-6 px-4 py-2 bg-green-light/30 text-green-success">
            <Shield className="w-4 h-4 mr-2" />
            Risk-Free Guarantee
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Success is
            <span className="gradient-text"> 100% Guaranteed</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We're so confident in our service that we guarantee your satisfaction with multiple promises
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon;
            
            return (
              <Card 
                key={index} 
                className="feature-card fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-green-light/20 text-green-success flex items-center justify-center">
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <CardTitle className="text-xl">{guarantee.title}</CardTitle>
                  
                  <p className="text-muted-foreground">{guarantee.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {guarantee.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>


        {/* Bottom CTA */}
        <div className="text-center fade-in">
          <h3 className="text-2xl font-bold mb-4">
            What Do You Have to Lose?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            With our comprehensive guarantees, you're completely protected. 
            The only risk is missing out on this limited-time $300 pricing.
          </p>
          
          <Button size="lg" className="btn-cta text-lg px-8 py-4">
            Start Risk-Free Today - $300
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            Backed by our 30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
}