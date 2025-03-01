
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LogOut, Gift, CreditCard, Settings, Bell, Heart, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ParentDashboard = () => {
  const [userData, setUserData] = useState<{ name: string; email: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Parent Dashboard - GiftBridge";
    
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
      if (user.role !== 'parent') {
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
              <p className="text-gray-600">Parent Dashboard</p>
            </div>
            <Button onClick={handleLogout} variant="outline" className="flex items-center gap-2">
              <LogOut size={16} />
              Logout
            </Button>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid grid-cols-4 w-full max-w-2xl">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="gifts">Gift Opportunities</TabsTrigger>
              <TabsTrigger value="contributions">My Contributions</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Active Gift Lists</CardTitle>
                    <CardDescription>Available gift opportunities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">3</div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full flex items-center gap-2">
                      <Gift size={16} />
                      View Lists
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">My Contributions</CardTitle>
                    <CardDescription>Your gift history</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">7</div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full flex items-center gap-2">
                      <Heart size={16} />
                      View History
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Notifications</CardTitle>
                    <CardDescription>Recent updates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">2</div>
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
                  <CardTitle>Upcoming Gift Opportunities</CardTitle>
                  <CardDescription>Gift lists that will be available soon</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Calendar className="mt-1 text-primary" size={20} />
                      <div>
                        <h4 className="font-semibold">Ms. Johnson's Spring Gift List</h4>
                        <p className="text-sm text-gray-600">Opens April 15, 2024</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Calendar className="mt-1 text-primary" size={20} />
                      <div>
                        <h4 className="font-semibold">End of Year Teacher Appreciation</h4>
                        <p className="text-sm text-gray-600">Opens June 1, 2024</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="gifts" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Available Gift Opportunities</CardTitle>
                  <CardDescription>Contribute to these active gift lists</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg border">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">Ms. Johnson's Birthday</h3>
                          <p className="text-sm text-gray-600 mt-1">From: 2nd Grade Class</p>
                          <div className="mt-2 text-sm">
                            <span className="text-primary font-medium">Progress: 65% funded</span>
                            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                              <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
                            </div>
                          </div>
                        </div>
                        <Button size="sm">Contribute</Button>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg border">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">School Supplies Fund</h3>
                          <p className="text-sm text-gray-600 mt-1">From: Principal Williams</p>
                          <div className="mt-2 text-sm">
                            <span className="text-primary font-medium">Progress: 42% funded</span>
                            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                              <div className="bg-primary h-2 rounded-full" style={{ width: '42%' }}></div>
                            </div>
                          </div>
                        </div>
                        <Button size="sm">Contribute</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contributions" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>My Contribution History</CardTitle>
                  <CardDescription>Track your gift contributions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start justify-between border-b pb-4">
                      <div className="flex items-start gap-3">
                        <Gift className="mt-1 text-primary" size={18} />
                        <div>
                          <h4 className="font-medium">Teacher Appreciation Week</h4>
                          <p className="text-sm text-gray-600">March 15, 2024</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-medium">$25.00</span>
                        <p className="text-xs text-gray-500">Visa •••• 4242</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start justify-between border-b pb-4">
                      <div className="flex items-start gap-3">
                        <Gift className="mt-1 text-primary" size={18} />
                        <div>
                          <h4 className="font-medium">Holiday Gift Fund</h4>
                          <p className="text-sm text-gray-600">December 10, 2023</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-medium">$50.00</span>
                        <p className="text-xs text-gray-500">Visa •••• 4242</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <Gift className="mt-1 text-primary" size={18} />
                        <div>
                          <h4 className="font-medium">Back to School Gift</h4>
                          <p className="text-sm text-gray-600">September 5, 2023</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-medium">$30.00</span>
                        <p className="text-xs text-gray-500">Visa •••• 4242</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="justify-between">
                  <p className="text-sm font-medium">Total Contributions: $105.00</p>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <CreditCard size={14} />
                    Download Receipt
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

export default ParentDashboard;
