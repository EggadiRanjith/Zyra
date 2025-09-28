'use client';

import { useState } from 'react';
import { ArrowLeft, Eye, EyeOff, Mail, Lock, User, Facebook, Apple, Check } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    newsletter: true,
    terms: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Calculate password strength
    if (field === 'password') {
      const password = value as string;
      let strength = 0;
      if (password.length >= 8) strength++;
      if (/[A-Z]/.test(password)) strength++;
      if (/[a-z]/.test(password)) strength++;
      if (/[0-9]/.test(password)) strength++;
      if (/[^A-Za-z0-9]/.test(password)) strength++;
      setPasswordStrength(strength);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    if (!formData.terms) {
      alert('Please accept the terms and conditions');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate registration process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Redirect to account dashboard
    router.push('/account');
    setIsLoading(false);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Register with ${provider}`);
    // Handle social registration
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength <= 2) return 'bg-red-500';
    if (passwordStrength <= 3) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength <= 2) return 'Weak';
    if (passwordStrength <= 3) return 'Medium';
    return 'Strong';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pearl-white via-warm-cream/30 to-pearl-white">
      
      {/* ===== HEADER ===== */}
      <div className="sticky top-16 z-40 bg-pearl-white/80 backdrop-blur-xl border-b border-champagne/30 lg:top-20">
        <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-champagne/20 rounded-lg transition-colors duration-300"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-lg font-semibold text-obsidian-black">Create Account</h1>
          <div className="w-8"></div>
        </div>
      </div>

      <div className="flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          
          {/* ===== LUXURY LOGO SECTION ===== */}
          <div className="text-center mb-8">
            <div className="inline-block mb-6">
              <h2 className="text-3xl lg:text-4xl font-display font-light text-obsidian-black tracking-wide">
                ZYRA
              </h2>
              <div className="w-16 h-px bg-royal-gold mx-auto mt-3"></div>
            </div>
            <p className="text-graphite font-light">
              Join our luxury community
            </p>
          </div>

          {/* ===== REGISTRATION FORM ===== */}
          <div className="bg-pearl-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-luxury-lg border border-champagne/20">
            
            {/* Social Registration Buttons */}
            <div className="space-y-3 mb-6">
              <button
                onClick={() => handleSocialLogin('google')}
                className="w-full flex items-center justify-center space-x-3 py-3 px-4 border border-champagne/30 rounded-xl text-obsidian-black hover:bg-champagne/10 transition-all duration-300 hover:scale-105"
              >
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">G</span>
                </div>
                <span className="font-medium">Continue with Google</span>
              </button>

              <button
                onClick={() => handleSocialLogin('apple')}
                className="w-full flex items-center justify-center space-x-3 py-3 px-4 border border-champagne/30 rounded-xl text-obsidian-black hover:bg-champagne/10 transition-all duration-300 hover:scale-105"
              >
                <Apple size={20} className="text-obsidian-black" />
                <span className="font-medium">Continue with Apple</span>
              </button>

              <button
                onClick={() => handleSocialLogin('facebook')}
                className="w-full flex items-center justify-center space-x-3 py-3 px-4 border border-champagne/30 rounded-xl text-obsidian-black hover:bg-champagne/10 transition-all duration-300 hover:scale-105"
              >
                <Facebook size={20} className="text-blue-600" />
                <span className="font-medium">Continue with Facebook</span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-champagne/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-pearl-white text-graphite font-medium">or create account with email</span>
              </div>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-obsidian-black mb-2">
                    First Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-graphite" size={20} />
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-champagne/30 rounded-xl text-obsidian-black placeholder-graphite focus:outline-none focus:ring-2 focus:ring-royal-gold/20 focus:border-royal-gold/50 transition-all duration-300"
                      placeholder="First name"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-obsidian-black mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full px-4 py-3 border border-champagne/30 rounded-xl text-obsidian-black placeholder-graphite focus:outline-none focus:ring-2 focus:ring-royal-gold/20 focus:border-royal-gold/50 transition-all duration-300"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-obsidian-black mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-graphite" size={20} />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-champagne/30 rounded-xl text-obsidian-black placeholder-graphite focus:outline-none focus:ring-2 focus:ring-royal-gold/20 focus:border-royal-gold/50 transition-all duration-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-obsidian-black mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-graphite" size={20} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="w-full pl-10 pr-10 py-3 border border-champagne/30 rounded-xl text-obsidian-black placeholder-graphite focus:outline-none focus:ring-2 focus:ring-royal-gold/20 focus:border-royal-gold/50 transition-all duration-300"
                    placeholder="Create a password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-graphite hover:text-obsidian-black transition-colors duration-300"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                
                {/* Password Strength Indicator */}
                {formData.password && (
                  <div className="mt-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-graphite">Password strength</span>
                      <span className={`text-xs font-medium ${
                        passwordStrength <= 2 ? 'text-red-500' : 
                        passwordStrength <= 3 ? 'text-yellow-500' : 'text-green-500'
                      }`}>
                        {getPasswordStrengthText()}
                      </span>
                    </div>
                    <div className="w-full bg-champagne/20 rounded-full h-1">
                      <div 
                        className={`h-1 rounded-full transition-all duration-300 ${getPasswordStrengthColor()}`}
                        style={{ width: `${(passwordStrength / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-obsidian-black mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-graphite" size={20} />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className="w-full pl-10 pr-10 py-3 border border-champagne/30 rounded-xl text-obsidian-black placeholder-graphite focus:outline-none focus:ring-2 focus:ring-royal-gold/20 focus:border-royal-gold/50 transition-all duration-300"
                    placeholder="Confirm your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-graphite hover:text-obsidian-black transition-colors duration-300"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                
                {/* Password Match Indicator */}
                {formData.confirmPassword && (
                  <div className="mt-2 flex items-center space-x-2">
                    {formData.password === formData.confirmPassword ? (
                      <>
                        <Check size={16} className="text-green-500" />
                        <span className="text-xs text-green-500">Passwords match</span>
                      </>
                    ) : (
                      <>
                        <div className="w-4 h-4 border-2 border-red-500 rounded-full"></div>
                        <span className="text-xs text-red-500">Passwords do not match</span>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Newsletter & Terms */}
              <div className="space-y-3">
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    checked={formData.newsletter}
                    onChange={(e) => handleInputChange('newsletter', e.target.checked)}
                    className="mt-1 text-royal-gold focus:ring-royal-gold/20"
                  />
                  <span className="text-sm text-graphite">
                    Subscribe to our newsletter for exclusive offers and luxury updates
                  </span>
                </label>
                
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    checked={formData.terms}
                    onChange={(e) => handleInputChange('terms', e.target.checked)}
                    className="mt-1 text-royal-gold focus:ring-royal-gold/20"
                    required
                  />
                  <span className="text-sm text-graphite">
                    I agree to the <a href="/terms" className="text-royal-gold hover:underline">Terms of Service</a> and <a href="/privacy" className="text-royal-gold hover:underline">Privacy Policy</a>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || !formData.terms}
                className="w-full py-3 bg-obsidian-black text-pearl-white rounded-xl font-medium hover:bg-royal-gold hover:text-obsidian-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-pearl-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Creating account...</span>
                  </>
                ) : (
                  <span>Create Account</span>
                )}
              </button>
            </form>

            {/* Sign In Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-graphite">
                Already have an account?{' '}
                <a
                  href="/auth/login"
                  className="text-royal-gold hover:text-royal-gold/80 font-medium transition-colors duration-300"
                >
                  Sign in here
                </a>
              </p>
            </div>
          </div>

          {/* ===== TRUST SIGNALS ===== */}
          <div className="mt-8 text-center">
            <div className="flex items-center justify-center space-x-6 text-xs text-graphite">
              <div className="flex items-center space-x-1">
                <Lock size={14} />
                <span>Secure Registration</span>
              </div>
              <div className="w-px h-4 bg-champagne/30"></div>
              <div className="flex items-center space-x-1">
                <User size={14} />
                <span>Privacy Protected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

