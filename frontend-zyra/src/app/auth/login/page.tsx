'use client';

import { useState } from 'react';
import { ArrowLeft, Eye, EyeOff, Mail, Lock, User, Facebook, Apple } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Redirect to account dashboard
    router.push('/account');
    setIsLoading(false);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    // Handle social login
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
          <h1 className="text-lg font-semibold text-obsidian-black">Sign In</h1>
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
              Welcome back to luxury
            </p>
          </div>

          {/* ===== LOGIN FORM ===== */}
          <div className="bg-pearl-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-luxury-lg border border-champagne/20">
            
            {/* Social Login Buttons */}
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
                <span className="px-4 bg-pearl-white text-graphite font-medium">or sign in with email</span>
              </div>
            </div>

            {/* Email/Password Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
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
                    placeholder="Enter your password"
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
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={(e) => handleInputChange('rememberMe', e.target.checked)}
                    className="text-royal-gold focus:ring-royal-gold/20"
                  />
                  <span className="text-sm text-graphite">Remember me</span>
                </label>
                <a
                  href="/auth/forgot-password"
                  className="text-sm text-royal-gold hover:text-royal-gold/80 transition-colors duration-300"
                >
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-obsidian-black text-pearl-white rounded-xl font-medium hover:bg-royal-gold hover:text-obsidian-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-pearl-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Signing in...</span>
                  </>
                ) : (
                  <span>Sign In</span>
                )}
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-graphite">
                Don't have an account?{' '}
                <a
                  href="/auth/register"
                  className="text-royal-gold hover:text-royal-gold/80 font-medium transition-colors duration-300"
                >
                  Create one here
                </a>
              </p>
            </div>
          </div>

          {/* ===== TRUST SIGNALS ===== */}
          <div className="mt-8 text-center">
            <div className="flex items-center justify-center space-x-6 text-xs text-graphite">
              <div className="flex items-center space-x-1">
                <Lock size={14} />
                <span>Secure Login</span>
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

