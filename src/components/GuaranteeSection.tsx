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
    title: "7-Day Delivery Guarantee",
    description: "We promise to deliver your complete package within 7 business days, or we'll give you a full refund plus $100 for the delay.",
    details: [
      "7-day delivery promise",
      "$100 bonus for late delivery",
      "Daily progress updates",
      "Priority support included"
    ]
  },
  {
    icon: RefreshCw,
    title: "Unlimited Revisions",
    description: "We'll work with you until you're 100% happy with your landing page and business plan. No limits on revisions for 30 days.",
    details: [
      "Unlimited revisions for 30 days",
      "Expert feedback and guidance",
      "Quick turnaround on changes",
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

        {/* Main Guarantee Card */}
        <div className="max-w-4xl mx-auto mb-16 fade-in">
          <Card className="glass border-2 border-green-success relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-success to-blue-electric" />
            
            <CardContent className="p-8 md:p-12 text-center">
              <div className="w-24 h-24 rounded-full bg-green-success/20 text-green-success flex items-center justify-center mx-auto mb-6">
                <Shield className="w-12 h-12" />
              </div>
              
              <h3 className="text-3xl font-bold mb-4">Our Iron-Clad Promise</h3>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                If your landing page doesn't generate at least one qualified lead within 30 days of launch, 
                we'll work with you for FREE until it does, or give you a full refund plus $200 for your time.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-success mb-2">30 Days</div>
                  <div className="text-sm text-muted-foreground">Full Refund Period</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-success mb-2">$200</div>
                  <div className="text-sm text-muted-foreground">Extra Compensation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-success mb-2">FREE</div>
                  <div className="text-sm text-muted-foreground">Additional Work</div>
                </div>
              </div>
              
              <Badge className="bg-green-success text-white px-6 py-2 text-lg">
                Zero Risk • Maximum Results
              </Badge>
            </CardContent>
          </Card>
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