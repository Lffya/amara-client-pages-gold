
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Shield, Mail, Phone, RotateCcw, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface OTPVerificationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  email: string;
  phone?: string;
  isLogin: boolean;
  onBack: () => void;
}

export const OTPVerificationModal = ({ 
  open, 
  onOpenChange, 
  email, 
  phone, 
  isLogin, 
  onBack 
}: OTPVerificationModalProps) => {
  const { toast } = useToast();
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [verificationMethod, setVerificationMethod] = useState<"email" | "phone">("email");

  useEffect(() => {
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
  }, []);

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
        onOpenChange(false);
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onBack}
              className="h-8 w-8"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-950/20 rounded-full flex items-center justify-center">
              <Shield className="h-6 w-6 text-amber-600" />
            </div>
          </div>
          <DialogTitle className="text-2xl text-center text-foreground">
            Verify Your Account
          </DialogTitle>
          <p className="text-sm text-muted-foreground text-center">
            {isLogin ? "Complete your login" : "Complete your registration"} with 2-step verification
          </p>
        </DialogHeader>

        <div className="space-y-6">
          {/* Verification Method Selection */}
          {phone && (
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
            </div>
          )}

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              We've sent a 6-digit code to{" "}
              <span className="font-medium">
                {verificationMethod === "email" 
                  ? email 
                  : phone?.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")
                }
              </span>
            </p>

            <div className="flex justify-center mb-6">
              <InputOTP
                value={otp}
                onChange={setOtp}
                maxLength={6}
                className="gap-2"
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} className="w-10 h-10 text-lg border-amber-200 focus:border-amber-600" />
                  <InputOTPSlot index={1} className="w-10 h-10 text-lg border-amber-200 focus:border-amber-600" />
                  <InputOTPSlot index={2} className="w-10 h-10 text-lg border-amber-200 focus:border-amber-600" />
                  <InputOTPSlot index={3} className="w-10 h-10 text-lg border-amber-200 focus:border-amber-600" />
                  <InputOTPSlot index={4} className="w-10 h-10 text-lg border-amber-200 focus:border-amber-600" />
                  <InputOTPSlot index={5} className="w-10 h-10 text-lg border-amber-200 focus:border-amber-600" />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <Button 
              onClick={handleVerify}
              className="w-full bg-amber-600 hover:bg-amber-700 text-black font-semibold py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-4"
              disabled={isLoading || otp.length !== 6}
            >
              {isLoading ? "Verifying..." : "Verify Account"}
            </Button>

            <div className="space-y-2">
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
          </div>

          {/* Help Text */}
          <div className="p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
            <p className="text-xs text-muted-foreground text-center">
              💡 <strong>Demo:</strong> Use code <code className="bg-background px-1 rounded">123456</code> to complete verification
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
