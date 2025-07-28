import { useState, useEffect } from "react";
import { ArrowRight, Shield, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-business.jpg";

export default function HeroSection() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(prev => (prev < 500 ? prev + 5 : 500));
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-electric/20 rounded-full blur-xl float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-success/20 rounded-full blur-xl float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-40 right-20 w-16 h-16 bg-orange-cta/20 rounded-full blur-xl float" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 fade-in">
            {/* Trust Badge */}
            <Badge className="glass px-4 py-2 text-sm font-medium">
              <Users className="w-4 h-4 mr-2" />
              Join <span className="counter font-bold mx-1">{counter}+</span> successful launches
            </Badge>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Launch Your Business 
                <span className="gradient-text block">Online in 7 Days</span>
                <span className="text-white">or Less</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Get a professional landing page, data-driven business plan, and AI-powered market insights - everything you need to start strong
              </p>
            </div>

            {/* Pricing Display */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-white">$300</span>
                <div className="space-y-1">
                  <span className="text-lg text-gray-400 line-through">$1,000</span>
                  <Badge className="bg-green-success text-white text-xs">70% OFF</Badge>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Shield className="w-4 h-4 text-green-success" />
                30-day money-back guarantee
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-cta text-lg px-8 py-4 font-semibold">
                Get Started Today - Only $300
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4"
              >
                See What's Included
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-6">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-success" />
                <span className="text-sm text-gray-300">7-day delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-success pulse-success" />
                <span className="text-sm text-gray-300">Money-back guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Professional business dashboard" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 glass rounded-xl p-4 float">
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 glass rounded-xl p-4 float" style={{ animationDelay: '1s' }}>
                <div className="text-2xl font-bold text-green-success">24h</div>
                <div className="text-sm text-gray-300">Avg. First Lead</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}