
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { LogIn } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
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
        title: "Login Successful!",
        description: "Redirecting to verification...",
      });
      navigate("/otp-verification", { state: { email: formData.email, isLogin: true } });
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
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Welcome Back
            </h1>
            <p className="text-lg text-muted-foreground">
              Sign in to your <span className="text-amber-600">Amara Client</span> account
            </p>
          </div>

          {/* Login Form */}
          <Card className="border-amber-200 dark:border-amber-800 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-foreground flex items-center justify-center gap-2">
                <LogIn className="h-6 w-6 text-amber-600" />
                Login
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email Address</Label>
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
                  <Label htmlFor="password" className="text-foreground">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className={`border-amber-200 focus:border-amber-600 focus:ring-amber-600 ${errors.password ? 'border-red-500' : ''}`}
                    placeholder="Enter your password"
                    aria-describedby={errors.password ? "password-error" : undefined}
                  />
                  {errors.password && (
                    <p id="password-error" className="text-sm text-red-600" role="alert">
                      {errors.password}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <Link 
                    to="/forgot-password" 
                    className="text-sm text-amber-600 hover:text-amber-700 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-amber-600 hover:bg-amber-700 text-black font-semibold py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing In..." : "Sign In"}
                </Button>

                <div className="text-center space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <Link 
                      to="/apply" 
                      className="text-amber-600 hover:text-amber-700 font-medium hover:underline"
                    >
                      Apply Now
                    </Link>
                  </p>
                  <Link 
                    to="/" 
                    className="text-sm text-muted-foreground hover:text-foreground hover:underline block"
                  >
                    ← Back to Home
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Security Notice */}
          <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
            <p className="text-sm text-muted-foreground text-center">
              🔒 Your data is protected with industry-standard encryption and security measures.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
