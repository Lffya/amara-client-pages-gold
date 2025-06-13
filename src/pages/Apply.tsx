
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, TrendingUp, Shield, Globe, Zap, UserPlus, Check } from "lucide-react";
import { useState } from "react";
import { AuthModal } from "@/components/AuthModal";

const Apply = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  const clientLogos = [
    { name: "Global Finance", icon: <TrendingUp className="h-8 w-8 text-amber-600" /> },
    { name: "Secure Holdings", icon: <Shield className="h-8 w-8 text-amber-600" /> },
    { name: "World Investments", icon: <Globe className="h-8 w-8 text-amber-600" /> },
    { name: "Rapid Growth", icon: <Zap className="h-8 w-8 text-amber-600" /> },
    { name: "Unity Partners", icon: <Users className="h-8 w-8 text-amber-600" /> },
    { name: "Prime Assets", icon: <Building2 className="h-8 w-8 text-amber-600" /> }
  ];

  const benefits = [
    "Exclusive access to financial reports and market analysis",
    "Priority notifications for important updates and opportunities",
    "Personalized dashboard with tailored insights",
    "Direct access to our expert financial advisory team",
    "Early access to new investment opportunities",
    "Comprehensive portfolio tracking and analytics"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Join <span className="text-amber-600">Amara Client</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Unlock exclusive financial insights, priority notifications, and personalized investment guidance. 
            Join thousands of successful investors who trust Amara Client.
          </p>
          
          <Button 
            onClick={() => setShowAuthModal(true)}
            size="lg" 
            className="bg-amber-600 hover:bg-amber-700 text-black font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <UserPlus className="mr-2 h-6 w-6" />
            Get Started Now
          </Button>
        </div>

        {/* Client Logos */}
        <div className="mb-16">
          <p className="text-center text-sm text-muted-foreground mb-8">Trusted by leading organizations worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex flex-col items-center p-4 bg-card rounded-lg border border-amber-200 dark:border-amber-800 hover:shadow-md transition-shadow">
                {client.icon}
                <span className="text-xs text-muted-foreground mt-2 text-center">{client.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Why Choose Amara Client?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our exclusive community of investors and gain access to premium financial services, 
              expert insights, and personalized investment strategies.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <Card className="border-amber-200 dark:border-amber-800 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-foreground">
                Ready to Get Started?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-muted-foreground">
                Join thousands of investors who have already transformed their financial future with Amara Client.
              </p>
              
              <div className="space-y-4">
                <Button 
                  onClick={() => setShowAuthModal(true)}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-black font-semibold py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <UserPlus className="mr-2 h-5 w-5" />
                  Create Account
                </Button>
                
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <button 
                    onClick={() => setShowAuthModal(true)}
                    className="text-amber-600 hover:text-amber-700 font-medium hover:underline"
                  >
                    Sign In
                  </button>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold text-amber-600 mb-2">$2.5B+</div>
            <p className="text-muted-foreground">Assets Under Management</p>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-amber-600 mb-2">50,000+</div>
            <p className="text-muted-foreground">Active Investors</p>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-amber-600 mb-2">15+</div>
            <p className="text-muted-foreground">Years of Excellence</p>
          </div>
        </div>
      </main>

      <AuthModal open={showAuthModal} onOpenChange={setShowAuthModal} />
    </div>
  );
};

export default Apply;
