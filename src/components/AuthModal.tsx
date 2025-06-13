
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserPlus, LogIn, Building2, Users, TrendingUp, Shield, Globe, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { OTPVerificationModal } from "./OTPVerificationModal";

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AuthModal = ({ open, onOpenChange }: AuthModalProps) => {
  const { toast } = useToast();
  const [mode, setMode] = useState<"signup" | "login">("signup");
  const [showOTP, setShowOTP] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const clientLogos = [
    { name: "Global Finance", icon: <TrendingUp className="h-6 w-6 text-amber-600" /> },
    { name: "Secure Holdings", icon: <Shield className="h-6 w-6 text-amber-600" /> },
    { name: "World Investments", icon: <Globe className="h-6 w-6 text-amber-600" /> },
    { name: "Rapid Growth", icon: <Zap className="h-6 w-6 text-amber-600" /> },
    { name: "Unity Partners", icon: <Users className="h-6 w-6 text-amber-600" /> },
    { name: "Prime Assets", icon: <Building2 className="h-6 w-6 text-amber-600" /> }
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (mode === "signup" && !formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (mode === "signup" && !formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (mode === "signup" && !/^\+?[\d\s\-\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (mode === "signup" && formData.password.length < 8) {
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
        title: mode === "signup" ? "Account Created Successfully!" : "Login Successful!",
        description: "Please check your email for verification.",
      });
      setShowOTP(true);
    }, 1500);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const resetForm = () => {
    setFormData({ fullName: "", email: "", phone: "", password: "" });
    setErrors({});
    setIsLoading(false);
  };

  const handleModeChange = (newMode: "signup" | "login") => {
    setMode(newMode);
    resetForm();
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      resetForm();
      setShowOTP(false);
    }
    onOpenChange(newOpen);
  };

  if (showOTP) {
    return (
      <OTPVerificationModal
        open={open}
        onOpenChange={handleOpenChange}
        email={formData.email}
        phone={formData.phone}
        isLogin={mode === "login"}
        onBack={() => setShowOTP(false)}
      />
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center text-foreground flex items-center justify-center gap-2">
            {mode === "signup" ? (
              <>
                <UserPlus className="h-6 w-6 text-amber-600" />
                Join Amara Client
              </>
            ) : (
              <>
                <LogIn className="h-6 w-6 text-amber-600" />
                Welcome Back
              </>
            )}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Client Logos */}
          <div>
            <p className="text-center text-xs text-muted-foreground mb-4">Trusted by leading organizations</p>
            <div className="grid grid-cols-6 gap-3">
              {clientLogos.map((client, index) => (
                <div key={index} className="flex flex-col items-center p-2 bg-card rounded border border-amber-200 dark:border-amber-800">
                  {client.icon}
                  <span className="text-xs text-muted-foreground mt-1 text-center">{client.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mode Toggle */}
          <div className="flex rounded-lg bg-muted p-1">
            <button
              onClick={() => handleModeChange("signup")}
              className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                mode === "signup"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Sign Up
            </button>
            <button
              onClick={() => handleModeChange("login")}
              className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                mode === "login"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Login
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "signup" && (
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-foreground">Full Name *</Label>
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className={`border-amber-200 focus:border-amber-600 focus:ring-amber-600 ${errors.fullName ? 'border-red-500' : ''}`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="text-sm text-red-600">{errors.fullName}</p>
                )}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`border-amber-200 focus:border-amber-600 focus:ring-amber-600 ${errors.email ? 'border-red-500' : ''}`}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {mode === "signup" && (
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className={`border-amber-200 focus:border-amber-600 focus:ring-amber-600 ${errors.phone ? 'border-red-500' : ''}`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="text-sm text-red-600">{errors.phone}</p>
                )}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">Password *</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className={`border-amber-200 focus:border-amber-600 focus:ring-amber-600 ${errors.password ? 'border-red-500' : ''}`}
                placeholder={mode === "signup" ? "Create a secure password" : "Enter your password"}
              />
              {errors.password && (
                <p className="text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            <Button 
              type="submit" 
              className="w-full bg-amber-600 hover:bg-amber-700 text-black font-semibold py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              disabled={isLoading}
            >
              {isLoading 
                ? (mode === "signup" ? "Creating Account..." : "Signing In...") 
                : (mode === "signup" ? "Create Account" : "Sign In")
              }
            </Button>
          </form>

          {/* Help Text */}
          <div className="p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
            <p className="text-xs text-muted-foreground text-center">
              🔒 Your data is protected with industry-standard encryption and security measures.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
