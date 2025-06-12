
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, FileText, Calendar, Download, Search, Filter, Globe, Scale, Building } from "lucide-react";
import { Input } from "@/components/ui/input";

const Notices = () => {
  const urgentNotices = [
    {
      title: "SEBI Compliance Update - New Disclosure Requirements",
      date: "November 28, 2024",
      category: "SEBI",
      priority: "High",
      description: "Important updates regarding enhanced disclosure requirements for listed companies effective January 1, 2025. All stakeholders must review the new compliance framework."
    },
    {
      title: "Board Meeting Outcome - Dividend Declaration",
      date: "November 25, 2024",
      category: "Corporate",
      priority: "Medium",
      description: "Board of Directors has declared an interim dividend of ₹5 per equity share for the financial year 2024-25. Record date and payment details enclosed."
    }
  ];

  const recentNotices = [
    {
      title: "MCA Form Filing - Annual Return Submitted",
      date: "November 20, 2024",
      category: "MCA",
      priority: "Low",
      description: "Annual Return for FY 2023-24 has been successfully filed with the Ministry of Corporate Affairs within the statutory timeline.",
      regulatory: "Ministry of Corporate Affairs"
    },
    {
      title: "Related Party Transaction Disclosure",
      date: "November 15, 2024",
      category: "SEBI",
      priority: "Medium",
      description: "Quarterly disclosure of related party transactions as per SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015.",
      regulatory: "Securities and Exchange Board of India"
    },
    {
      title: "Environmental Compliance Certificate Renewal",
      date: "November 10, 2024",
      category: "Environmental",
      priority: "Low",
      description: "Pollution Control Board certificate for manufacturing operations has been renewed for the period 2024-2027.",
      regulatory: "State Pollution Control Board"
    },
    {
      title: "GST Registration Update - New State Operations",
      date: "November 5, 2024",
      category: "Tax",
      priority: "Medium",
      description: "New GST registration obtained for operations in Karnataka state. GSTIN: 29AAAAA0000A1Z5 effective from November 1, 2024.",
      regulatory: "Goods and Services Tax Network"
    },
    {
      title: "Insider Trading Policy - Annual Review Completed",
      date: "October 28, 2024",
      category: "SEBI",
      priority: "Low",
      description: "Annual review of the Insider Trading Policy completed and approved by the Board. Updated policy is effective immediately.",
      regulatory: "Securities and Exchange Board of India"
    }
  ];

  const categories = [
    { name: "SEBI", count: 12, icon: <Scale className="h-4 w-4" /> },
    { name: "MCA", count: 8, icon: <Building className="h-4 w-4" /> },
    { name: "Tax", count: 6, icon: <FileText className="h-4 w-4" /> },
    { name: "Environmental", count: 4, icon: <Globe className="h-4 w-4" /> },
    { name: "Corporate", count: 15, icon: <Building className="h-4 w-4" /> },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100";
      case "Medium": return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100";
      case "Low": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Regulatory Notices
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Access legal disclosures, regulatory announcements, and public notices as per SEBI, MCA, and other statutory requirements. 
            Stay updated with our compliance status and regulatory communications to ensure transparency and legal adherence.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search notices..." 
                className="pl-10 border-amber-200 focus:border-amber-600"
              />
            </div>
            <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600/10">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>

        {/* Categories Overview */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {categories.map((category, index) => (
            <Card key={index} className="border-amber-200 dark:border-amber-800 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center mb-2 text-amber-600">
                  {category.icon}
                </div>
                <h3 className="font-medium text-foreground">{category.name}</h3>
                <p className="text-2xl font-bold text-amber-600">{category.count}</p>
                <p className="text-xs text-muted-foreground">Active Notices</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Urgent Notices */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle className="h-6 w-6 text-red-500" />
            <h2 className="text-2xl font-semibold text-foreground">Urgent Notices</h2>
          </div>
          <div className="grid gap-6">
            {urgentNotices.map((notice, index) => (
              <Card key={index} className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-foreground mb-2">{notice.title}</CardTitle>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{notice.date}</span>
                        </div>
                        <Badge variant="secondary">{notice.category}</Badge>
                        <Badge className={getPriorityColor(notice.priority)}>
                          {notice.priority} Priority
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">
                    {notice.description}
                  </CardDescription>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-black">
                      <Download className="mr-2 h-4 w-4" />
                      Download Notice
                    </Button>
                    <Button size="sm" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600/10">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Notices */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-foreground">Recent Notices</h2>
            <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600/10">
              <FileText className="mr-2 h-4 w-4" />
              View All Notices
            </Button>
          </div>

          <div className="grid gap-6">
            {recentNotices.map((notice, index) => (
              <Card key={index} className="border-amber-200 dark:border-amber-800 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg text-foreground mb-2">{notice.title}</CardTitle>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-muted-foreground text-sm">
                          <Calendar className="h-3 w-3" />
                          <span>{notice.date}</span>
                        </div>
                        <Badge variant="secondary">{notice.category}</Badge>
                        <Badge className={getPriorityColor(notice.priority)}>
                          {notice.priority}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-3">
                    {notice.description}
                  </CardDescription>
                  {notice.regulatory && (
                    <p className="text-xs text-muted-foreground mb-4">
                      <strong>Regulatory Authority:</strong> {notice.regulatory}
                    </p>
                  )}
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600/10">
                      <Download className="mr-2 h-3 w-3" />
                      Download
                    </Button>
                    <Button size="sm" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600/10">
                      <FileText className="mr-2 h-3 w-3" />
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Compliance Status */}
        <Card className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Regulatory Compliance Status</h3>
            <p className="text-muted-foreground mb-6">
              We maintain the highest standards of regulatory compliance across all jurisdictions. Our dedicated compliance team 
              ensures timely filing of all required documents and maintains transparent communication with regulatory authorities.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">100%</p>
                <p className="text-sm text-muted-foreground">On-time Filings</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-amber-600">24hrs</p>
                <p className="text-sm text-muted-foreground">Average Response Time</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">5+</p>
                <p className="text-sm text-muted-foreground">Regulatory Bodies</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-amber-600 hover:bg-amber-700 text-black">
                Subscribe to Alerts
              </Button>
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600/10">
                Contact Compliance Team
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Notices;
