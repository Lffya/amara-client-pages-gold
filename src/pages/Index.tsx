
import { Navigation } from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Bell, TrendingUp, UserPlus } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <FileText className="h-8 w-8 text-amber-600" />,
      title: "Financial Reports",
      description: "Access quarterly and annual financial disclosures, performance summaries, and investor presentations.",
      link: "/financial"
    },
    {
      icon: <Users className="h-8 w-8 text-amber-600" />,
      title: "Shareholder Meetings",
      description: "Find notices, minutes, and resolutions from past and upcoming shareholder meetings.",
      link: "/meetings"
    },
    {
      icon: <Bell className="h-8 w-8 text-amber-600" />,
      title: "Regulatory Notices",
      description: "Access legal disclosures, regulatory announcements, and public notices as per statutory requirements.",
      link: "/notices"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Welcome to <span className="text-amber-600">Amara Client</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Your comprehensive platform for financial transparency, stakeholder communications, and regulatory compliance. 
            Stay informed with our latest reports, meeting updates, and official notices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-black">
              <Link to="/financial">
                <TrendingUp className="mr-2 h-5 w-5" />
                View Financial Reports
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-amber-600 text-amber-600 hover:bg-amber-600/10">
              <Link to="/meetings">
                <Users className="mr-2 h-5 w-5" />
                Shareholder Meetings
              </Link>
            </Button>
          </div>
          
          {/* Apply Now CTA Section */}
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-950/20 dark:to-amber-900/20 rounded-2xl p-8 mb-12 border border-amber-200 dark:border-amber-800">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get exclusive access to investor updates, priority notifications, and personalized financial insights.
            </p>
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-black font-semibold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Link to="/apply">
                <UserPlus className="mr-2 h-6 w-6" />
                Apply Now
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-amber-200 dark:border-amber-800 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  {feature.description}
                </CardDescription>
                <Button asChild variant="ghost" className="text-amber-600 hover:text-amber-700 hover:bg-amber-600/10 p-0">
                  <Link to={feature.link}>
                    Learn more →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
