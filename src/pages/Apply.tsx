
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Building2, Users, TrendingUp, Shield, Globe, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Apply = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const clientLogos = [
    { name: "Global Finance", icon: <TrendingUp className="h-8 w-8 text-amber-600" /> },
    { name: "Secure Holdings", icon: <Shield className="h-8 w-8 text-amber-600" /> },
    { name: "World Investments", icon: <Globe className="h-8 w-8 text-amber-600" /> },
    { name: "Rapid Growth", icon: <Zap className="h-8 w-8 text-amber-600" /> },
    { name: "Unity Partners", icon: <Users className="h-8 w-8 text-amber-600" /> },
    { name: "Prime Assets", icon: <Building2 className="h-8 w-8 text-amber-600" /> }
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account Created Successfully!",
        description: "Please check your email for verification.",
      });
      navigate("/otp-verification", { state: { email: formData.email, phone: formData.phone } });
    }, 1500);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Join <span className="text-amber-600">Amara Client</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Create your account to access exclusive financial insights and services
            </p>
          </div>

          {/* Client Logos */}
          <div className="mb-12">
            <p className="text-center text-sm text-muted-foreground mb-6">Trusted by leading organizations</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {clientLogos.map((client, index) => (
                <div key={index} className="flex flex-col items-center p-4 bg-card rounded-lg border border-amber-200 dark:border-amber-800 hover:shadow-md transition-shadow">
                  {client.icon}
                  <span className="text-xs text-muted-foreground mt-2 text-center">{client.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Benefits Section */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Why Join Amara Client?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-medium text-foreground">Exclusive Financial Reports</h3>
                    <p className="text-sm text-muted-foreground">Get early access to quarterly reports and market analysis</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-medium text-foreground">Priority Notifications</h3>
                    <p className="text-sm text-muted-foreground">Be the first to know about important updates and opportunities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-medium text-foreground">Personalized Dashboard</h3>
                    <p className="text-sm text-muted-foreground">Track your investments and get tailored insights</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-medium text-foreground">Expert Support</h3>
                    <p className="text-sm text-muted-foreground">Direct access to our financial advisory team</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <Card className="border-amber-200 dark:border-amber-800 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-foreground">Create Your Account</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-foreground">Full Name *</Label>
                    <Input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange("fullName", e.target.value)}
                      className={`border-amber-200 focus:border-amber-600 focus:ring-amber-600 ${errors.fullName ? 'border-red-500' : ''}`}
                      placeholder="Enter your full name"
                      aria-describedby={errors.fullName ? "fullName-error" : undefined}
                    />
                    {errors.fullName && (
                      <p id="fullName-error" className="text-sm text-red-600" role="alert">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`border-amber-200 focus:border-amber-600 focus:ring-amber-600 ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="Enter your email address"
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-sm text-red-600" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className={`border-amber-200 focus:border-amber-600 focus:ring-amber-600 ${errors.phone ? 'border-red-500' : ''}`}
                      placeholder="Enter your phone number"
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="text-sm text-red-600" role="alert">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-foreground">Password *</Label>
                    <Input
                      id="password"
                      type="password"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      className={`border-amber-200 focus:border-amber-600 focus:ring-amber-600 ${errors.password ? 'border-red-500' : ''}`}
                      placeholder="Create a secure password"
                      aria-describedby={errors.password ? "password-error" : undefined}
                    />
                    {errors.password && (
                      <p id="password-error" className="text-sm text-red-600" role="alert">
                        {errors.password}
                      </p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-amber-600 hover:bg-amber-700 text-black font-semibold py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>

                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      Already have an account?{" "}
                      <Link 
                        to="/login" 
                        className="text-amber-600 hover:text-amber-700 font-medium hover:underline"
                      >
                        Login
                      </Link>
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Apply;
