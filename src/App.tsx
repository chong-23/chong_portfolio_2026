import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AllowanceAwareness from "./pages/AllowanceAwareness";
import CorporateAdminRevamp from "./pages/CorporateAdminRevamp";
import EarlyWorks from "./pages/EarlyWorks";
import HundredDayProject from "./pages/HundredDayProject";
import RocketSandbox from "./pages/RocketSandbox";
import Powerfall from "./pages/Powerfall";
import AboutMe from "./pages/AboutMe";
import NotFound from "./pages/NotFound";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/allowance-awareness" element={<AllowanceAwareness />} />
          <Route path="/corporate-admin-revamp" element={<CorporateAdminRevamp />} />
          <Route path="/early-works" element={<EarlyWorks />} />
          <Route path="/100day-project" element={<HundredDayProject />} />
          <Route path="/rocket-sandbox" element={<RocketSandbox />} />
          <Route path="/powerfall" element={<Powerfall />} />
          <Route path="/about-me" element={<AboutMe />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
