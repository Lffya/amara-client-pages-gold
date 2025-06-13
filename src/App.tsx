
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import Financial from "./pages/Financial";
import Meetings from "./pages/Meetings";
import Notices from "./pages/Notices";
import Apply from "./pages/Apply";
import Login from "./pages/Login";
import OTPVerification from "./pages/OTPVerification";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/financial" element={<Financial />} />
            <Route path="/meetings" element={<Meetings />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/login" element={<Login />} />
            <Route path="/otp-verification" element={<OTPVerification />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
