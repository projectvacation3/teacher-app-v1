
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LogOut, Gift, Calendar, Settings, Bell, PlusCircle, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TeacherDashboard = () => {
  const [userData, setUserData] = useState<{ name: string; email: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Teacher Dashboard - GiftBridge";
    
    // Check if user is logged in
    const storedUser = localStorage.getItem('currentUser');
    if (!storedUser) {
      toast({
        title: "Authentication required",
        description: "Please log in to access the dashboard",
        variant: "destructive",
      });
      navigate('/login');
      return;
    }

    try {
      const user = JSON.parse(storedUser);
      if (user.role !== 'teacher') {
        toast({
          title: "Access denied",
          description: "You don't have permission to access this page",
          variant: "destructive",
        });
        navigate('/login');
        return;
      }
      setUserData(user);
    } catch (error) {
      console.error("Error parsing user data:", error);
      localStorage.removeItem('currentUser');
      navigate('/login');
    } finally {
      setIsLoading(false);
    }
  }, [navigate, toast]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    navigate('/login');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Welcome, {userData?.name}</h1>
              <p className="text-gray-600">Teacher Dashboard</p>
            </div>
            <Button onClick={handleLogout} variant="outline" className="flex items-center gap-2">
              <LogOut size={16} />
              Logout
            </Button>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid grid-cols-4 w-full max-w-2xl">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="students">Students</TabsTrigger>
              <TabsTrigger value="gifts">Gift Lists</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Students</CardTitle>
                    <CardDescription>Manage your class roster</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">24</div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full flex items-center gap-2">
                      <Users size={16} />
                      View Students
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Active Gift Lists</CardTitle>
                    <CardDescription>Current gift opportunities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">3</div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full flex items-center gap-2">
                      <Gift size={16} />
                      Manage Lists
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Notifications</CardTitle>
                    <CardDescription>Recent updates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">7</div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full flex items-center gap-2">
                      <Bell size={16} />
                      View All
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>Scheduled gift list distribution dates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Calendar className="mt-1 text-primary" size={20} />
                      <div>
                        <h4 className="font-semibold">Spring Gift List</h4>
                        <p className="text-sm text-gray-600">April 15, 2024</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Calendar className="mt-1 text-primary" size={20} />
                      <div>
                        <h4 className="font-semibold">End of Year Appreciation</h4>
                        <p className="text-sm text-gray-600">June 1, 2024</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full flex items-center gap-2">
                    <PlusCircle size={16} />
                    Create New Gift List
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="students" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Student Roster</CardTitle>
                  <CardDescription>Manage your class list and student information</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center py-6 text-gray-500">This feature will allow you to manage students and their parent connections.</p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button className="flex items-center gap-2">
                    <PlusCircle size={16} />
                    Add Student
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="gifts" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Gift Lists</CardTitle>
                  <CardDescription>Create and manage gift lists for special occasions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center py-6 text-gray-500">This feature will allow you to create and manage gift lists for your students.</p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button className="flex items-center gap-2">
                    <PlusCircle size={16} />
                    Create New List
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your profile and preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center py-6 text-gray-500">This feature will allow you to update your profile information and notification preferences.</p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Settings size={16} />
                    Edit Settings
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TeacherDashboard;
