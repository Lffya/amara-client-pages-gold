
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Shield, Mail, Phone, RotateCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const OTPVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  const email = location.state?.email || "";
  const phone = location.state?.phone || "";
  const isLogin = location.state?.isLogin || false;
  
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [verificationMethod, setVerificationMethod] = useState<"email" | "phone">("email");

  useEffect(() => {
    if (!email) {
      navigate("/apply");
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [email, navigate]);

  const handleVerify = async () => {
    if (otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a 6-digit verification code.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (otp === "123456") {
        toast({
          title: "Verification Successful!",
          description: "Welcome to Amara Client.",
        });
        navigate("/");
      } else {
        toast({
          title: "Verification Failed",
          description: "Invalid verification code. Please try again.",
          variant: "destructive"
        });
        setOtp("");
      }
    }, 1500);
  };

  const handleResend = async () => {
    setResendLoading(true);
    setTimeLeft(30);
    setCanResend(false);
    
    // Simulate API call
    setTimeout(() => {
      setResendLoading(false);
      toast({
        title: "Code Resent",
        description: `A new verification code has been sent to your ${verificationMethod}.`,
      });
    }, 1000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-amber-100 dark:bg-amber-950/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-amber-600" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Verify Your Account
            </h1>
            <p className="text-muted-foreground">
              {isLogin ? "Complete your login" : "Complete your registration"} with 2-step verification
            </p>
          </div>

          {/* Verification Method Selection */}
          <div className="mb-6">
            <div className="flex rounded-lg bg-muted p-1">
              <button
                onClick={() => setVerificationMethod("email")}
                className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  verificationMethod === "email"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Mail className="h-4 w-4" />
                Email
              </button>
              {phone && (
                <button
                  onClick={() => setVerificationMethod("phone")}
                  className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    verificationMethod === "phone"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Phone className="h-4 w-4" />
                  SMS
                </button>
              )}
            </div>
          </div>

          {/* OTP Form */}
          <Card className="border-amber-200 dark:border-amber-800 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-center text-foreground">
                Enter Verification Code
              </CardTitle>
              <p className="text-sm text-muted-foreground text-center">
                We've sent a 6-digit code to{" "}
                <span className="font-medium">
                  {verificationMethod === "email" 
                    ? email 
                    : phone?.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")
                  }
                </span>
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <InputOTP
                  value={otp}
                  onChange={setOtp}
                  maxLength={6}
                  className="gap-2"
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} className="w-12 h-12 text-lg border-amber-200 focus:border-amber-600" />
                    <InputOTPSlot index={1} className="w-12 h-12 text-lg border-amber-200 focus:border-amber-600" />
                    <InputOTPSlot index={2} className="w-12 h-12 text-lg border-amber-200 focus:border-amber-600" />
                    <InputOTPSlot index={3} className="w-12 h-12 text-lg border-amber-200 focus:border-amber-600" />
                    <InputOTPSlot index={4} className="w-12 h-12 text-lg border-amber-200 focus:border-amber-600" />
                    <InputOTPSlot index={5} className="w-12 h-12 text-lg border-amber-200 focus:border-amber-600" />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <Button 
                onClick={handleVerify}
                className="w-full bg-amber-600 hover:bg-amber-700 text-black font-semibold py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                disabled={isLoading || otp.length !== 6}
              >
                {isLoading ? "Verifying..." : "Verify Account"}
              </Button>

              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">
                  Didn't receive the code?
                </p>
                <Button
                  variant="ghost"
                  onClick={handleResend}
                  disabled={!canResend || resendLoading}
                  className="text-amber-600 hover:text-amber-700 hover:bg-amber-600/10 p-0 h-auto font-medium"
                >
                  {resendLoading ? (
                    <>
                      <RotateCcw className="h-4 w-4 mr-1 animate-spin" />
                      Sending...
                    </>
                  ) : canResend ? (
                    "Resend Code"
                  ) : (
                    `Resend in ${formatTime(timeLeft)}`
                  )}
                </Button>
              </div>

              <div className="text-center">
                <button
                  onClick={() => navigate(isLogin ? "/login" : "/apply")}
                  className="text-sm text-muted-foreground hover:text-foreground hover:underline"
                >
                  ← Back to {isLogin ? "Login" : "Registration"}
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Help Text */}
          <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
            <p className="text-sm text-muted-foreground text-center">
              💡 <strong>Demo:</strong> Use code <code className="bg-background px-1 rounded">123456</code> to complete verification
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OTPVerification;
