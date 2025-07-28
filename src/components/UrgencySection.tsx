import { useState, useEffect } from "react";
import { Clock, Users, ArrowRight, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function UrgencySection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45
  });

  const [spotsLeft, setSpotsLeft] = useState(7);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Simulate spots decreasing
  useEffect(() => {
    const spotTimer = setInterval(() => {
      setSpotsLeft(prev => prev > 3 ? prev - 1 : 3);
    }, 30000); // Decrease every 30 seconds

    return () => clearInterval(spotTimer);
  }, []);

  return (
    <section className="py-24 bg-navy-deep relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-primary to-navy-deep opacity-90" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-electric via-green-success to-orange-cta" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Alert Badge */}
          <Badge className="mb-6 px-4 py-2 bg-orange-cta text-white animate-pulse">
            <AlertCircle className="w-4 h-4 mr-2" />
            Limited Time Offer
          </Badge>

          {/* Main Headline */}
          <div className="space-y-6 mb-12 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Special Launch Pricing
              <span className="gradient-text block">Ends Soon</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We're only accepting 10 new clients this month to ensure quality delivery. 
              Once these spots are filled, the next batch starts at our regular $1,000 price.
            </p>
          </div>

          {/* Countdown Timer */}
          <Card className="glass mb-8 fade-in bg-white/10 backdrop-blur-md">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Clock className="w-6 h-6 text-orange-cta" />
                <span className="text-lg font-semibold text-white">Special Pricing Expires In:</span>
              </div>
              
              <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Minutes', value: timeLeft.minutes },
                  { label: 'Seconds', value: timeLeft.seconds }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-navy-deep/80 rounded-lg p-4 mb-2 border border-white/20">
                      <span className="text-3xl font-bold text-white tabular-nums">
                        {item.value.toString().padStart(2, '0')}
                      </span>
                    </div>
                    <span className="text-sm text-gray-300">{item.label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Spots Remaining */}
          <div className="mb-8 fade-in">
            <Card className="glass inline-block bg-white/10 backdrop-blur-md border border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Users className="w-6 h-6 text-green-success" />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">
                      Only <span className="text-orange-cta">{spotsLeft}</span> Spots Left
                    </div>
                    <div className="text-sm text-gray-300">This month at special pricing</div>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="mt-4 w-48">
                  <div className="flex justify-between text-xs text-gray-300 mb-1">
                    <span>Spots Taken</span>
                    <span>{10 - spotsLeft}/10</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-orange-cta to-green-success h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${((10 - spotsLeft) / 10) * 100}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pricing Comparison */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12 fade-in">
            {/* Current Offer */}
            <Card className="glass border-2 border-green-success relative bg-white/10 backdrop-blur-md">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-success text-white px-4 py-1">
                  This Month Only
                </Badge>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-2">Special Price</h3>
                <div className="text-4xl font-bold text-green-success mb-2">$300</div>
                <div className="text-gray-300">Complete Package</div>
              </CardContent>
            </Card>

            {/* Regular Price */}
            <Card className="glass opacity-60 bg-white/5 backdrop-blur-md">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-2">Regular Price</h3>
                <div className="text-4xl font-bold text-gray-400 mb-2">$1,000</div>
                <div className="text-gray-400">Starting Next Month</div>
              </CardContent>
            </Card>
          </div>

          {/* Final CTA */}
          <div className="fade-in">
            <Button size="lg" className="btn-cta text-xl px-12 py-6 font-bold mb-4">
              Secure Your Spot Now - $300
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <p className="text-gray-300">
              Next batch starts at $1,000 • 30-day money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}