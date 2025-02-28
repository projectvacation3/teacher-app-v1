
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Eye, EyeOff, UserPlus, ChevronRight, School, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// List of US states for the dropdown
const usStates = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

const Register = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const roleParam = queryParams.get('role');

  const [step, setStep] = useState(roleParam ? 1 : 0);
  const [role, setRole] = useState<'parent' | 'teacher'>(
    roleParam === 'teacher' ? 'teacher' : 'parent'
  );
  
  // Common fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  
  // Teacher specific fields
  const [school, setSchool] = useState('');
  const [grade, setGrade] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [favoriteGifts, setFavoriteGifts] = useState<string[]>([]);
  
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const standardGiftOptions = ['Starbucks', 'Walmart', 'Uber Eats'];
  const premiumGiftOptions = ['Dunkin Donuts', 'Target', 'Amazon', 'Sephora', 'Barnes and Noble', 'TJ Maxx', 'Etsy', 'Nordstrom', 'Grubhub', 'Door Dash'];
  const allGiftOptions = [...standardGiftOptions, ...premiumGiftOptions];

  // Set page title
  useEffect(() => {
    document.title = "Register - GiftBridge";
  }, []);

  const handleSelectRole = (selectedRole: 'parent' | 'teacher') => {
    setRole(selectedRole);
    setStep(1);
  };

  const handleToggleFavorite = (gift: string) => {
    if (favoriteGifts.includes(gift)) {
      setFavoriteGifts(favoriteGifts.filter(g => g !== gift));
    } else {
      // Limit to 5 selections
      if (favoriteGifts.length < 5) {
        setFavoriteGifts([...favoriteGifts, gift]);
      } else {
        toast({
          title: "Maximum Selections Reached",
          description: "You can select up to 5 favorite gift options.",
          variant: "destructive",
        });
      }
    }
  };

  const validatePassword = () => {
    // Check if passwords match
    if (password !== confirmPassword) {
      setPasswordError("Passwords don't match");
      return false;
    }
    
    // Check if password meets minimum requirements (8 chars with at least one number)
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return false;
    }
    
    if (!/\d/.test(password)) {
      setPasswordError("Password must contain at least one number");
      return false;
    }
    
    setPasswordError("");
    return true;
  };
  
  const validateTeacherSelections = () => {
    // Check if at least one standard gift option is selected
    const hasStandardOption = favoriteGifts.some(gift => standardGiftOptions.includes(gift));
    
    if (!hasStandardOption && favoriteGifts.length > 0) {
      toast({
        title: "Standard Option Required",
        description: "Please select at least one gift option from the Standard options (Starbucks, Walmart, or Uber Eats).",
        variant: "destructive",
      });
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validatePassword()) {
      toast({
        title: "Invalid Password",
        description: passwordError,
        variant: "destructive",
      });
      return;
    }
    
    // For teachers, validate gift selections
    if (role === 'teacher' && favoriteGifts.length > 0) {
      if (!validateTeacherSelections()) {
        return;
      }
    }
    
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo, create mock accounts
      if (email === 'teacher@example.com' && password === 'teacher123') {
        localStorage.setItem('teacherAccount', JSON.stringify({
          role: 'teacher',
          firstName,
          lastName,
          email,
          school,
          grade,
          birthMonth,
          birthDay,
          favoriteGifts
        }));
      } else if (email === 'parent@example.com' && password === 'parent123') {
        localStorage.setItem('parentAccount', JSON.stringify({
          role: 'parent',
          firstName,
          lastName,
          email,
          city,
          state
        }));
      }
      
      toast({
        title: "Registration successful!",
        description: "You will receive a confirmation email shortly.",
      });

      // In a real app, you would redirect to a confirmation page
      // For now, we'll redirect to login
      setTimeout(() => {
        navigate('/login');
      }, 2000);
      
    } catch (error) {
      toast({
        title: "Registration failed",
        description: "An error occurred. Please try again later.",
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
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold mb-2">Create Your Account</h1>
            <p className="text-gray-600">
              Join GiftBridge today and start building stronger connections
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 animate-scale-in">
            {step === 0 && (
              <div className="text-center">
                <h2 className="text-xl font-bold mb-6">I am a...</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <button
                    onClick={() => handleSelectRole('parent')}
                    className="flex flex-col items-center justify-center p-8 border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-primary/5 transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                      <Users size={32} />
                    </div>
                    <h3 className="text-lg font-bold">Parent</h3>
                    <p className="text-gray-600 mt-2">
                      I want to appreciate my child's teachers
                    </p>
                  </button>

                  <button
                    onClick={() => handleSelectRole('teacher')}
                    className="flex flex-col items-center justify-center p-8 border-2 border-gray-200 rounded-xl hover:border-primary hover:bg-primary/5 transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                      <School size={32} />
                    </div>
                    <h3 className="text-lg font-bold">Teacher</h3>
                    <p className="text-gray-600 mt-2">
                      I am an educator receiving gifts
                    </p>
                  </button>
                </div>
              </div>
            )}

            {step === 1 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center mb-6">
                  <div className={`px-4 py-2 rounded-full font-medium ${role === 'parent' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}>
                    Parent
                  </div>
                  <div className="mx-2 text-gray-400">/</div>
                  <div className={`px-4 py-2 rounded-full font-medium ${role === 'teacher' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}>
                    Teacher
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {role === 'teacher' && (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="birthMonth">Birth Month</Label>
                        <select
                          id="birthMonth"
                          value={birthMonth}
                          onChange={(e) => setBirthMonth(e.target.value)}
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="">Select Month</option>
                          {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month) => (
                            <option key={month} value={month}>
                              {month}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="birthDay">Birth Day</Label>
                        <select
                          id="birthDay"
                          value={birthDay}
                          onChange={(e) => setBirthDay(e.target.value)}
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="">Select Day</option>
                          {[...Array(31)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="school">School Name</Label>
                      <Input
                        id="school"
                        value={school}
                        onChange={(e) => setSchool(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="grade">Grade/Subject Taught</Label>
                      <Input
                        id="grade"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        required
                        placeholder="e.g., 3rd Grade or High School Math"
                      />
                    </div>
                  </>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <select
                      id="state"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select State</option>
                      {usStates.map((stateName) => (
                        <option key={stateName} value={stateName}>
                          {stateName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder={role === 'teacher' ? "Your school email" : "Your email"}
                  />
                  {role === 'teacher' && (
                    <p className="text-sm text-gray-500 mt-1">For demo, use: teacher@example.com</p>
                  )}
                  {role === 'parent' && (
                    <p className="text-sm text-gray-500 mt-1">For demo, use: parent@example.com</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="pr-10"
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
                    <p className="text-xs text-gray-500">
                      Password must be at least 8 characters with at least one number
                    </p>
                    {role === 'teacher' && (
                      <p className="text-xs text-gray-500">For demo, use: teacher123</p>
                    )}
                    {role === 'parent' && (
                      <p className="text-xs text-gray-500">For demo, use: parent123</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                {passwordError && (
                  <div className="text-destructive text-sm">{passwordError}</div>
                )}

                {role === 'teacher' && (
                  <div className="space-y-3">
                    <Label>Select Your Favorites (Up to 5)</Label>
                    <p className="text-sm text-gray-500">
                      Choose up to 5 gift card options you'd prefer to receive. <span className="font-medium">At least one must be from the Standard options.</span>
                    </p>
                    
                    <div className="mt-3">
                      <h4 className="font-medium mb-2">Standard Options (Select at least one):</h4>
                      <div className="flex flex-wrap gap-3">
                        {standardGiftOptions.map((gift) => (
                          <button
                            key={gift}
                            type="button"
                            onClick={() => handleToggleFavorite(gift)}
                            className={`px-4 py-2 rounded-full border transition-all ${
                              favoriteGifts.includes(gift)
                                ? 'bg-primary text-white border-primary'
                                : 'bg-white border-gray-300 hover:border-primary'
                            }`}
                          >
                            {gift}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-3">
                      <h4 className="font-medium mb-2">Premium Options:</h4>
                      <div className="flex flex-wrap gap-3">
                        {premiumGiftOptions.map((gift) => (
                          <button
                            key={gift}
                            type="button"
                            onClick={() => handleToggleFavorite(gift)}
                            className={`px-4 py-2 rounded-full border transition-all ${
                              favoriteGifts.includes(gift)
                                ? 'bg-primary text-white border-primary'
                                : 'bg-white border-gray-300 hover:border-primary'
                            }`}
                          >
                            {gift}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-2 text-sm text-gray-600">
                      Selected: {favoriteGifts.length}/5
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Processing...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <UserPlus className="mr-2" size={18} />
                      Create Account
                    </div>
                  )}
                </Button>
              </form>
            )}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-primary font-medium hover:text-blue-700 transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Register;
