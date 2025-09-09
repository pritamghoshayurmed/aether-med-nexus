import { useState } from "react";
import { 
  Shield, 
  Activity, 
  Users, 
  Building2,
  TrendingUp,
  AlertTriangle,
  FileCheck,
  Truck,
  MessageSquare,
  Eye,
  Settings,
  BarChart3,
  Clock,
  CheckCircle,
  XCircle,
  Globe,
  Database
} from "lucide-react";
import { MedicalButton } from "@/components/ui/medical-button";
import { MedicalCard, MedicalCardContent, MedicalCardHeader, MedicalCardTitle } from "@/components/ui/medical-card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import BottomNavigation from "@/components/navigation/BottomNavigation";

const SuperAdminDashboard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("today");

  const systemMetrics = [
    { label: "Active Users", value: "15,847", change: "+12%", icon: Users, trend: "up" },
    { label: "Total Hospitals", value: "234", change: "+3%", icon: Building2, trend: "up" },
    { label: "Consultations", value: "8,923", change: "+18%", icon: Activity, trend: "up" },
    { label: "System Uptime", value: "99.9%", change: "0%", icon: Shield, trend: "stable" },
  ];

  const revenueData = [
    { period: "Today", amount: "₹12.4L", transactions: "2,847" },
    { period: "This Week", amount: "₹68.2L", transactions: "18,934" },
    { period: "This Month", amount: "₹2.8Cr", transactions: "89,462" },
  ];

  const complianceStatus = [
    { category: "HIPAA Compliance", status: "compliant", lastCheck: "2 days ago", score: 98 },
    { category: "Data Protection", status: "compliant", lastCheck: "1 day ago", score: 96 },
    { category: "Medical Licensing", status: "warning", lastCheck: "5 days ago", score: 87 },
    { category: "Audit Logs", status: "compliant", lastCheck: "Today", score: 99 },
  ];

  const supplyChainAlerts = [
    { hospital: "City General", item: "Ventilators", status: "critical", quantity: "2 units", urgency: "high" },
    { hospital: "Metro Hospital", item: "Blood Units (O+)", status: "low", quantity: "15 units", urgency: "medium" },
    { hospital: "Care Center", item: "ICU Beds", status: "full", quantity: "0 available", urgency: "high" },
  ];

  const complaints = [
    { id: "C001", user: "Patient John D.", type: "Technical Issue", status: "open", priority: "high", time: "2h ago" },
    { id: "C002", user: "Dr. Sarah M.", type: "Payment Dispute", status: "investigating", priority: "medium", time: "4h ago" },
    { id: "C003", user: "Metro Hospital", type: "System Downtime", status: "resolved", priority: "high", time: "1d ago" },
  ];

  const auditLogs = [
    { action: "User Login", user: "admin@hospital.com", timestamp: "10:30 AM", status: "success" },
    { action: "Data Export", user: "dr.smith@care.com", timestamp: "10:15 AM", status: "success" },
    { action: "Failed Login", user: "unknown@test.com", timestamp: "10:05 AM", status: "failed" },
    { action: "Policy Update", user: "admin@system.com", timestamp: "9:45 AM", status: "success" },
  ];

  return (
    <div className="min-h-screen bg-gradient-background p-4 pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              System <span className="gradient-text">Analytics</span>
            </h1>
            <p className="text-muted-foreground">SuperAdmin Dashboard • Platform Overview</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-sm">All Systems Operational</span>
            </div>
            <MedicalButton variant="medical">
              <Settings className="mr-2 h-4 w-4" />
              System Settings
            </MedicalButton>
          </div>
        </div>

        {/* System Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {systemMetrics.map((metric) => (
            <MedicalCard key={metric.label} variant="glass">
              <MedicalCardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <metric.icon className="h-8 w-8 text-primary" />
                  <Badge variant={metric.trend === "up" ? "default" : "secondary"} className="text-xs">
                    {metric.change}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
                <p className="text-2xl font-bold text-primary">{metric.value}</p>
              </MedicalCardContent>
            </MedicalCard>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Revenue Analytics */}
            <MedicalCard variant="glass">
              <MedicalCardHeader>
                <MedicalCardTitle className="flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                  Revenue Analytics
                </MedicalCardTitle>
              </MedicalCardHeader>
              <MedicalCardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {revenueData.map((data) => (
                    <div key={data.period} className="p-4 rounded-lg bg-muted/50">
                      <p className="text-sm text-muted-foreground">{data.period}</p>
                      <p className="text-2xl font-bold text-primary">{data.amount}</p>
                      <p className="text-xs text-muted-foreground mt-1">{data.transactions} transactions</p>
                    </div>
                  ))}
                </div>
              </MedicalCardContent>
            </MedicalCard>

            {/* Compliance Monitoring */}
            <MedicalCard variant="glass" className="medical-glow">
              <MedicalCardHeader>
                <MedicalCardTitle className="flex items-center">
                  <Shield className="mr-2 h-5 w-5 text-primary" />
                  Compliance Status
                </MedicalCardTitle>
              </MedicalCardHeader>
              <MedicalCardContent>
                <div className="space-y-4">
                  {complianceStatus.map((item) => (
                    <div key={item.category} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${
                          item.status === "compliant" ? "bg-green-500" : "bg-yellow-500"
                        }`} />
                        <div>
                          <h3 className="font-semibold">{item.category}</h3>
                          <p className="text-sm text-muted-foreground">Last checked: {item.lastCheck}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-primary">{item.score}%</p>
                        <Badge variant={item.status === "compliant" ? "default" : "secondary"}>
                          {item.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </MedicalCardContent>
            </MedicalCard>

            {/* Supply Chain Tracking */}
            <MedicalCard variant="glass">
              <MedicalCardHeader>
                <MedicalCardTitle className="flex items-center">
                  <Truck className="mr-2 h-5 w-5 text-primary" />
                  Critical Supply Chain Alerts
                </MedicalCardTitle>
              </MedicalCardHeader>
              <MedicalCardContent>
                <div className="space-y-4">
                  {supplyChainAlerts.map((alert, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                      <div className="flex items-center space-x-4">
                        <AlertTriangle className={`h-6 w-6 ${
                          alert.urgency === "high" ? "text-red-500" : "text-yellow-500"
                        }`} />
                        <div>
                          <h3 className="font-semibold">{alert.hospital}</h3>
                          <p className="text-sm text-muted-foreground">{alert.item}</p>
                          <p className="text-xs text-primary">{alert.quantity}</p>
                        </div>
                      </div>
                      <Badge variant={
                        alert.status === "critical" ? "destructive" :
                        alert.status === "low" ? "secondary" : "outline"
                      }>
                        {alert.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </MedicalCardContent>
            </MedicalCard>

            {/* Complaints & Feedback */}
            <MedicalCard variant="glass">
              <MedicalCardHeader>
                <MedicalCardTitle className="flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5 text-primary" />
                  Recent Complaints & Feedback
                </MedicalCardTitle>
              </MedicalCardHeader>
              <MedicalCardContent>
                <div className="space-y-4">
                  {complaints.map((complaint) => (
                    <div key={complaint.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                          <MessageSquare className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{complaint.user}</h3>
                          <p className="text-sm text-muted-foreground">{complaint.type}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Clock className="h-3 w-3 text-primary" />
                            <span className="text-xs text-primary">{complaint.time}</span>
                            <Badge variant={complaint.priority === "high" ? "destructive" : "secondary"} className="text-xs">
                              {complaint.priority}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <Badge variant={
                        complaint.status === "resolved" ? "default" :
                        complaint.status === "investigating" ? "secondary" : "outline"
                      }>
                        {complaint.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </MedicalCardContent>
            </MedicalCard>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* System Health */}
            <MedicalCard variant="glass">
              <MedicalCardHeader>
                <MedicalCardTitle className="flex items-center">
                  <Activity className="mr-2 h-5 w-5 text-primary" />
                  System Health
                </MedicalCardTitle>
              </MedicalCardHeader>
              <MedicalCardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Database className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Database</span>
                    </div>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4 text-green-500" />
                      <span className="text-sm">API Services</span>
                    </div>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Security</span>
                    </div>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Activity className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm">Performance</span>
                    </div>
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  </div>
                </div>
              </MedicalCardContent>
            </MedicalCard>

            {/* Quick Actions */}
            <MedicalCard variant="glass">
              <MedicalCardHeader>
                <MedicalCardTitle>Admin Actions</MedicalCardTitle>
              </MedicalCardHeader>
              <MedicalCardContent>
                <div className="space-y-3">
                  <MedicalButton variant="medical" className="w-full justify-start">
                    <Users className="mr-2 h-4 w-4" />
                    User Management
                  </MedicalButton>
                  <MedicalButton variant="outline" className="w-full justify-start">
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Generate Report
                  </MedicalButton>
                  <MedicalButton variant="outline" className="w-full justify-start">
                    <Shield className="mr-2 h-4 w-4" />
                    Security Audit
                  </MedicalButton>
                  <MedicalButton variant="outline" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    System Config
                  </MedicalButton>
                </div>
              </MedicalCardContent>
            </MedicalCard>

            {/* Recent Audit Logs */}
            <MedicalCard variant="glass">
              <MedicalCardHeader>
                <MedicalCardTitle className="flex items-center">
                  <FileCheck className="mr-2 h-5 w-5 text-primary" />
                  Audit Logs
                </MedicalCardTitle>
              </MedicalCardHeader>
              <MedicalCardContent>
                <div className="space-y-3">
                  {auditLogs.map((log, index) => (
                    <div key={index} className="p-3 rounded-lg bg-muted/50">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm font-medium">{log.action}</p>
                        {log.status === "success" ? 
                          <CheckCircle className="h-3 w-3 text-green-500" /> :
                          <XCircle className="h-3 w-3 text-red-500" />
                        }
                      </div>
                      <p className="text-xs text-muted-foreground">{log.user}</p>
                      <p className="text-xs text-primary">{log.timestamp}</p>
                    </div>
                  ))}
                </div>
                <MedicalButton variant="outline" className="w-full mt-4" size="sm">
                  View Full Logs
                </MedicalButton>
              </MedicalCardContent>
            </MedicalCard>
          </div>
        </div>
      </div>

      <BottomNavigation userRole="admin" />
    </div>
  );
};

export default SuperAdminDashboard;