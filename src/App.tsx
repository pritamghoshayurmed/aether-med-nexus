import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import PatientDashboard from "./pages/dashboard/PatientDashboard";
import DoctorDashboard from "./pages/dashboard/DoctorDashboard";
import HospitalDashboard from "./pages/dashboard/HospitalDashboard";
import SuperAdminDashboard from "./pages/dashboard/SuperAdminDashboard";
import PatientAppointments from "./pages/dashboard/patient/Appointments";
import PatientVitals from "./pages/dashboard/patient/Vitals";
import PatientAIChat from "./pages/dashboard/patient/AIChat";
import PatientSettings from "./pages/dashboard/patient/Settings";
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
          <Route path="/login" element={<Login />} />
            <Route path="/dashboard/patient" element={<PatientDashboard />} />
            <Route path="/dashboard/patient/appointments" element={<PatientAppointments />} />
            <Route path="/dashboard/patient/vitals" element={<PatientVitals />} />
            <Route path="/dashboard/patient/ai-chat" element={<PatientAIChat />} />
            <Route path="/dashboard/patient/settings" element={<PatientSettings />} />
            <Route path="/dashboard/doctor" element={<DoctorDashboard />} />
            <Route path="/dashboard/hospital" element={<HospitalDashboard />} />
            <Route path="/dashboard/admin" element={<SuperAdminDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
