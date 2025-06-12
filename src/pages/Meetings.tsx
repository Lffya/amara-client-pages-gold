
import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, FileText, Video, Download } from "lucide-react";

const Meetings = () => {
  const upcomingMeetings = [
    {
      title: "Annual General Meeting 2024",
      date: "December 15, 2024",
      time: "10:00 AM IST",
      location: "Amara Conference Center, Mumbai",
      type: "AGM",
      status: "Upcoming",
      agenda: "Election of directors, approval of financial statements, dividend declaration, and strategic updates for 2025."
    }
  ];

  const pastMeetings = [
    {
      title: "Extraordinary General Meeting",
      date: "September 20, 2024",
      time: "2:00 PM IST",
      location: "Virtual Meeting",
      type: "EGM",
      status: "Completed",
      agenda: "Approval of merger proposal with Synergy Corp and related regulatory compliance matters."
    },
    {
      title: "Annual General Meeting 2023",
      date: "December 18, 2023",
      time: "10:00 AM IST",
      location: "Amara Conference Center, Mumbai",
      type: "AGM",
      status: "Completed",
      agenda: "Annual report presentation, dividend approval, director appointments, and Q&A session with shareholders."
    },
    {
      title: "Quarterly Shareholders Update",
      date: "June 15, 2024",
      time: "11:00 AM IST",
      location: "Virtual Meeting",
      type: "Quarterly",
      status: "Completed",
      agenda: "Q1 2024 financial results, market outlook, and operational performance review."
    }
  ];

  const resolutions = [
    { title: "Dividend Declaration for FY 2023-24", status: "Approved", votes: "98.5%" },
    { title: "Re-appointment of Independent Directors", status: "Approved", votes: "95.2%" },
    { title: "Increase in Authorized Share Capital", status: "Approved", votes: "92.8%" },
    { title: "Approval of Related Party Transactions", status: "Approved", votes: "89.3%" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Shareholder Meetings
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Find notices, minutes, and resolutions from past and upcoming shareholder meetings. 
            Stay informed about the decisions shaping our company's future and participate in our democratic governance process.
          </p>
        </div>

        {/* Upcoming Meetings */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Upcoming Meetings</h2>
          <div className="grid gap-6">
            {upcomingMeetings.map((meeting, index) => (
              <Card key={index} className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-foreground mb-2">{meeting.title}</CardTitle>
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{meeting.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{meeting.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{meeting.location}</span>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-amber-600 text-black">{meeting.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">
                    <strong>Agenda:</strong> {meeting.agenda}
                  </CardDescription>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-amber-600 hover:bg-amber-700 text-black">
                      <Users className="mr-2 h-4 w-4" />
                      Register to Attend
                    </Button>
                    <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600/10">
                      <Video className="mr-2 h-4 w-4" />
                      Join Virtual Session
                    </Button>
                    <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600/10">
                      <Download className="mr-2 h-4 w-4" />
                      Download Notice
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Resolutions */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Recent Resolutions</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {resolutions.map((resolution, index) => (
              <Card key={index} className="border-amber-200 dark:border-amber-800">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium text-foreground">{resolution.title}</h3>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      {resolution.status}
                    </Badge>
                  </div>
                  <p className="text-2xl font-bold text-amber-600">{resolution.votes}</p>
                  <p className="text-sm text-muted-foreground">Shareholder Approval</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Meetings */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-foreground">Past Meetings</h2>
            <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600/10">
              <FileText className="mr-2 h-4 w-4" />
              View All Archives
            </Button>
          </div>

          <div className="grid gap-6">
            {pastMeetings.map((meeting, index) => (
              <Card key={index} className="border-amber-200 dark:border-amber-800 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg text-foreground mb-2">{meeting.title}</CardTitle>
                      <div className="flex items-center gap-4 text-muted-foreground text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{meeting.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{meeting.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{meeting.location}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary">{meeting.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">
                    <strong>Agenda:</strong> {meeting.agenda}
                  </CardDescription>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600/10">
                      <Download className="mr-2 h-3 w-3" />
                      Minutes
                    </Button>
                    <Button size="sm" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600/10">
                      <FileText className="mr-2 h-3 w-3" />
                      Resolutions
                    </Button>
                    <Button size="sm" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600/10">
                      <Video className="mr-2 h-3 w-3" />
                      Recording
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Information Card */}
        <Card className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Shareholder Participation</h3>
            <p className="text-muted-foreground mb-4">
              We encourage active participation from all shareholders in our governance process. Your voice matters in shaping 
              the future of our company. Join our meetings, ask questions, and exercise your voting rights to make your opinion count.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-amber-600 hover:bg-amber-700 text-black">
                Register for Updates
              </Button>
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600/10">
                Shareholder Services
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Meetings;
