
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Set page title
  useEffect(() => {
    document.title = "Login - GiftBridge";
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you'd make an API call to authenticate
      if (email && password) {
        toast({
          title: "Login successful",
          description: "Welcome back to GiftBridge!",
        });
        navigate('/dashboard');
      } else {
        toast({
          title: "Login failed",
          description: "Please check your credentials and try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "An error occurred",
        description: "Unable to log in at this time. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 flex flex-col items-center justify-center">
        <div className="container mx-auto px-4 max-w-md">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-gray-600">
              Sign in to your GiftBridge account
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-primary hover:text-blue-700 transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="pr-10 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Signing in...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <LogIn className="mr-2" size={18} />
                    Sign in
                  </div>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-primary font-medium hover:text-blue-700 transition-colors"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>By signing in, you agree to our</p>
            <div className="flex justify-center space-x-2 mt-1">
              <Link to="/terms" className="text-primary hover:text-blue-700 transition-colors">
                Terms of Service
              </Link>
              <span>and</span>
              <Link to="/privacy" className="text-primary hover:text-blue-700 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;
