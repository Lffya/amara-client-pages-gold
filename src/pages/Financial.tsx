
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Calendar, TrendingUp, DollarSign, PieChart, BarChart3 } from "lucide-react";

const Financial = () => {
  const reports = [
    {
      title: "Q3 2024 Financial Results",
      type: "Quarterly Report",
      date: "October 2024",
      status: "Latest",
      description: "Comprehensive financial performance summary for the third quarter of 2024, including revenue growth, profit margins, and key metrics."
    },
    {
      title: "Annual Report 2023",
      type: "Annual Report",
      date: "March 2024",
      status: "Audited",
      description: "Complete annual financial statements with auditor's report, management discussion, and detailed analysis of business performance."
    },
    {
      title: "Investor Presentation Q2 2024",
      type: "Presentation",
      date: "July 2024",
      status: "Archived",
      description: "Strategic overview and financial highlights presented to institutional investors and analysts during the quarterly earnings call."
    }
  ];

  const metrics = [
    { label: "Revenue Growth", value: "+12.5%", icon: <TrendingUp className="h-5 w-5" /> },
    { label: "Net Profit Margin", value: "18.3%", icon: <DollarSign className="h-5 w-5" /> },
    { label: "ROE", value: "22.1%", icon: <PieChart className="h-5 w-5" /> },
    { label: "Debt-to-Equity", value: "0.45", icon: <BarChart3 className="h-5 w-5" /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Financial Reports
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Explore our quarterly and annual financial disclosures, performance summaries, investor presentations, and audited reports. 
            Transparency is at the core of our commitment to stakeholders and drives our continued success in the marketplace.
          </p>
        </div>

        {/* Key Metrics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {metrics.map((metric, index) => (
            <Card key={index} className="border-amber-200 dark:border-amber-800">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
                    <p className="text-2xl font-bold text-amber-600">{metric.value}</p>
                  </div>
                  <div className="text-amber-600">{metric.icon}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reports Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-foreground">Recent Reports</h2>
            <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600/10">
              <Calendar className="mr-2 h-4 w-4" />
              View All Reports
            </Button>
          </div>

          <div className="grid gap-6">
            {reports.map((report, index) => (
              <Card key={index} className="border-amber-200 dark:border-amber-800 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-foreground mb-2">{report.title}</CardTitle>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant={report.status === "Latest" ? "default" : "secondary"} 
                               className={report.status === "Latest" ? "bg-amber-600 text-black" : ""}>
                          {report.status}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{report.type}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{report.date}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">
                    {report.description}
                  </CardDescription>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-black">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                    <Button size="sm" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600/10">
                      View Online
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <Card className="mt-12 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Financial Transparency Commitment</h3>
            <p className="text-muted-foreground mb-4">
              We are committed to providing timely, accurate, and comprehensive financial information to all our stakeholders. 
              Our reports are prepared in accordance with international accounting standards and are subject to rigorous audit processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-amber-600 hover:bg-amber-700 text-black">
                Subscribe to Updates
              </Button>
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600/10">
                Contact Investor Relations
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Financial;
