'use client';

import { motion } from 'framer-motion';
import { CreditCard, MapPin, Truck, Shield, Lock, ArrowLeft, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

// Sample cart items for checkout
const checkoutItems = [
  {
    id: '1',
    name: 'Luxury Leather Handbag',
    price: 1200.00,
    originalPrice: 1500.00,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop&crop=center',
    quantity: 1,
    size: 'One Size',
    color: 'Black'
  },
  {
    id: '4',
    name: 'Men\'s Chronograph Watch',
    price: 3200.00,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop&crop=center',
    quantity: 1,
    size: 'One Size',
    color: 'Silver'
  }
];

export default function CheckoutPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    country: 'United States',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    shippingMethod: 'standard'
  });

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const subtotal = checkoutItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = checkoutItems.reduce((sum, item) => sum + ((item.originalPrice || 0) - item.price) * item.quantity, 0);
  const shipping = formData.shippingMethod === 'express' ? 25 : 0;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const steps = [
    { id: 1, title: 'Information', icon: MapPin },
    { id: 2, title: 'Payment', icon: CreditCard },
    { id: 3, title: 'Review', icon: CheckCircle }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle checkout submission
    console.log('Checkout submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-pearl-white">
      
      {/* ===== SIMPLE HEADER ===== */}
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-display font-light text-obsidian-black">
            Checkout
          </h1>
        </div>
      </div>

      {/* ===== CHECKOUT CONTENT ===== */}
      <div className="px-3 py-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Progress Steps - Mobile Optimized */}
          <div className={`mb-6 ${isMobile ? 'mb-4' : 'mb-8'}`}>
            <div className={`flex ${isMobile ? 'flex-col gap-3' : 'items-center justify-between'} ${isMobile ? 'mb-4' : 'mb-6'}`}>
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = currentStep >= step.id;
                const isCompleted = currentStep > step.id;
                
                return (
                  <div key={step.id} className={`flex ${isMobile ? 'items-center gap-2' : 'flex-col items-center gap-2'}`}>
                    <div className={`flex items-center ${isMobile ? 'gap-2' : 'gap-3'} ${isMobile ? 'w-full' : ''}`}>
                      <div className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                        isCompleted 
                          ? 'bg-royal-gold border-royal-gold text-obsidian-black' 
                          : isActive 
                            ? 'bg-royal-gold/20 border-royal-gold text-royal-gold' 
                            : 'bg-champagne/20 border-champagne/30 text-graphite'
                      }`}>
                        {isCompleted ? <CheckCircle size={isMobile ? 16 : 20} /> : <Icon size={isMobile ? 16 : 20} />}
                      </div>
                      <div className={isMobile ? 'flex-1' : ''}>
                        <h3 className={`${isMobile ? 'text-xs' : 'text-base'} font-medium ${
                          isActive ? 'text-obsidian-black' : 'text-graphite'
                        }`}>
                          {step.title}
                        </h3>
                        {isMobile && (
                          <p className="text-xs text-graphite">
                            Step {step.id} of 3
                          </p>
                        )}
                      </div>
                    </div>
                    {!isMobile && index < steps.length - 1 && (
                      <div className={`w-16 h-0.5 ${isCompleted ? 'bg-royal-gold' : 'bg-champagne/30'}`} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`grid grid-cols-1 ${isMobile ? 'gap-4' : 'lg:grid-cols-3 gap-8'}`}>
            
            {/* Checkout Form */}
            <div className={`${isMobile ? 'order-2' : 'lg:col-span-2'}`}>
              <form onSubmit={handleSubmit} className={`${isMobile ? 'space-y-4' : 'space-y-6'}`}>
                
                {/* Step 1: Information */}
                {currentStep === 1 && (
                  <motion.div
                    className={`bg-pearl-white rounded-2xl ${isMobile ? 'p-4' : 'p-6'} shadow-luxury-sm border border-champagne/20`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-obsidian-black ${isMobile ? 'mb-4' : 'mb-6'} flex items-center gap-2`}>
                      <MapPin size={isMobile ? 18 : 20} className="text-royal-gold" />
                      Contact & Shipping Information
                    </h2>
                    
                    <div className={`grid grid-cols-1 ${isMobile ? 'gap-3' : 'sm:grid-cols-2 gap-4'}`}>
                      <div>
                        <label className={`block ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-obsidian-black ${isMobile ? 'mb-1' : 'mb-2'}`}>Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className={`w-full ${isMobile ? 'px-3 py-2 text-sm' : 'px-4 py-3'} border border-champagne/30 rounded-lg focus:border-royal-gold focus:outline-none`}
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className={`block ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-obsidian-black ${isMobile ? 'mb-1' : 'mb-2'}`}>Phone *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className={`w-full ${isMobile ? 'px-3 py-2 text-sm' : 'px-4 py-3'} border border-champagne/30 rounded-lg focus:border-royal-gold focus:outline-none`}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className={`block ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-obsidian-black ${isMobile ? 'mb-1' : 'mb-2'}`}>First Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className={`w-full ${isMobile ? 'px-3 py-2 text-sm' : 'px-4 py-3'} border border-champagne/30 rounded-lg focus:border-royal-gold focus:outline-none`}
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className={`block ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-obsidian-black ${isMobile ? 'mb-1' : 'mb-2'}`}>Last Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className={`w-full ${isMobile ? 'px-3 py-2 text-sm' : 'px-4 py-3'} border border-champagne/30 rounded-lg focus:border-royal-gold focus:outline-none`}
                          placeholder="Doe"
                        />
                      </div>
                      <div className={`${isMobile ? 'col-span-1' : 'sm:col-span-2'}`}>
                        <label className={`block ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-obsidian-black ${isMobile ? 'mb-1' : 'mb-2'}`}>Address *</label>
                        <input
                          type="text"
                          required
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          className={`w-full ${isMobile ? 'px-3 py-2 text-sm' : 'px-4 py-3'} border border-champagne/30 rounded-lg focus:border-royal-gold focus:outline-none`}
                          placeholder="123 Main Street"
                        />
                      </div>
                      <div>
                        <label className={`block ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-obsidian-black ${isMobile ? 'mb-1' : 'mb-2'}`}>City *</label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          className={`w-full ${isMobile ? 'px-3 py-2 text-sm' : 'px-4 py-3'} border border-champagne/30 rounded-lg focus:border-royal-gold focus:outline-none`}
                          placeholder="New York"
                        />
                      </div>
                      <div>
                        <label className={`block ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-obsidian-black ${isMobile ? 'mb-1' : 'mb-2'}`}>ZIP Code *</label>
                        <input
                          type="text"
                          required
                          value={formData.zipCode}
                          onChange={(e) => handleInputChange('zipCode', e.target.value)}
                          className={`w-full ${isMobile ? 'px-3 py-2 text-sm' : 'px-4 py-3'} border border-champagne/30 rounded-lg focus:border-royal-gold focus:outline-none`}
                          placeholder="10001"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Payment */}
                {currentStep === 2 && (
                  <motion.div
                    className={`bg-pearl-white rounded-2xl ${isMobile ? 'p-4' : 'p-6'} shadow-luxury-sm border border-champagne/20`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-obsidian-black ${isMobile ? 'mb-4' : 'mb-6'} flex items-center gap-2`}>
                      <CreditCard size={isMobile ? 18 : 20} className="text-royal-gold" />
                      Payment Information
                    </h2>
                    
                    <div className={`${isMobile ? 'space-y-3' : 'space-y-4'}`}>
                      <div>
                        <label className={`block ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-obsidian-black ${isMobile ? 'mb-1' : 'mb-2'}`}>Card Number *</label>
                        <input
                          type="text"
                          required
                          value={formData.cardNumber}
                          onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                          className={`w-full ${isMobile ? 'px-3 py-2 text-sm' : 'px-4 py-3'} border border-champagne/30 rounded-lg focus:border-royal-gold focus:outline-none`}
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                      <div className={`grid ${isMobile ? 'grid-cols-1 gap-3' : 'grid-cols-2 gap-4'}`}>
                        <div>
                          <label className={`block ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-obsidian-black ${isMobile ? 'mb-1' : 'mb-2'}`}>Expiry Date *</label>
                          <input
                            type="text"
                            required
                            value={formData.expiryDate}
                            onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                            className={`w-full ${isMobile ? 'px-3 py-2 text-sm' : 'px-4 py-3'} border border-champagne/30 rounded-lg focus:border-royal-gold focus:outline-none`}
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <label className={`block ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-obsidian-black ${isMobile ? 'mb-1' : 'mb-2'}`}>CVV *</label>
                          <input
                            type="text"
                            required
                            value={formData.cvv}
                            onChange={(e) => handleInputChange('cvv', e.target.value)}
                            className={`w-full ${isMobile ? 'px-3 py-2 text-sm' : 'px-4 py-3'} border border-champagne/30 rounded-lg focus:border-royal-gold focus:outline-none`}
                            placeholder="123"
                          />
                        </div>
                      </div>
                      <div>
                        <label className={`block ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-obsidian-black ${isMobile ? 'mb-1' : 'mb-2'}`}>Cardholder Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.cardName}
                          onChange={(e) => handleInputChange('cardName', e.target.value)}
                          className={`w-full ${isMobile ? 'px-3 py-2 text-sm' : 'px-4 py-3'} border border-champagne/30 rounded-lg focus:border-royal-gold focus:outline-none`}
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Review */}
                {currentStep === 3 && (
                  <motion.div
                    className={`bg-pearl-white rounded-2xl ${isMobile ? 'p-4' : 'p-6'} shadow-luxury-sm border border-champagne/20`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-obsidian-black ${isMobile ? 'mb-4' : 'mb-6'} flex items-center gap-2`}>
                      <CheckCircle size={isMobile ? 18 : 20} className="text-royal-gold" />
                      Review Your Order
                    </h2>
                    
                    <div className={`${isMobile ? 'space-y-3' : 'space-y-4'}`}>
                      <div className={`${isMobile ? 'p-3' : 'p-4'} bg-champagne/10 rounded-lg`}>
                        <h3 className={`${isMobile ? 'text-sm' : 'font-medium'} text-obsidian-black ${isMobile ? 'mb-1' : 'mb-2'}`}>Shipping Address</h3>
                        <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-graphite`}>
                          {formData.firstName} {formData.lastName}<br />
                          {formData.address}<br />
                          {formData.city}, {formData.zipCode}<br />
                          {formData.country}
                        </p>
                      </div>
                      
                      <div className={`${isMobile ? 'p-3' : 'p-4'} bg-champagne/10 rounded-lg`}>
                        <h3 className={`${isMobile ? 'text-sm' : 'font-medium'} text-obsidian-black ${isMobile ? 'mb-1' : 'mb-2'}`}>Payment Method</h3>
                        <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-graphite`}>
                          **** **** **** {formData.cardNumber.slice(-4)}<br />
                          {formData.cardName}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Navigation Buttons - Mobile Optimized */}
                <div className={`flex ${isMobile ? 'flex-col gap-2' : 'items-center justify-between'} ${isMobile ? 'mt-4' : ''}`}>
                  {currentStep > 1 && (
                    <motion.button
                      type="button"
                      onClick={prevStep}
                      className={`${isMobile ? 'w-full py-2.5 text-sm' : 'px-6 py-3'} bg-champagne/20 text-obsidian-black rounded-lg font-medium hover:bg-champagne/30 transition-colors duration-300 flex items-center justify-center gap-2`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ArrowLeft size={isMobile ? 14 : 16} />
                      Previous
                    </motion.button>
                  )}
                  
                  <motion.button
                    type={currentStep === 3 ? 'submit' : 'button'}
                    onClick={currentStep < 3 ? nextStep : undefined}
                    className={`${isMobile ? 'w-full py-2.5 text-sm' : 'ml-auto px-8 py-3'} bg-obsidian-black text-pearl-white rounded-lg font-medium hover:bg-royal-gold hover:text-obsidian-black transition-colors duration-300 flex items-center justify-center gap-2`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {currentStep === 3 ? 'Complete Order' : 'Continue'}
                    {currentStep < 3 && <ArrowLeft size={isMobile ? 14 : 16} className="rotate-180" />}
                  </motion.button>
                </div>
              </form>
            </div>

            {/* Order Summary - Mobile Optimized */}
            <div className={`${isMobile ? 'order-1 mb-4' : 'lg:col-span-1'}`}>
              <motion.div 
                className={`bg-pearl-white rounded-2xl ${isMobile ? 'p-4' : 'p-6'} shadow-luxury-sm border border-champagne/20 ${isMobile ? '' : 'sticky top-24'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold text-obsidian-black ${isMobile ? 'mb-3' : 'mb-4'}`}>Order Summary</h3>
                
                {/* Items - Mobile Optimized */}
                <div className={`${isMobile ? 'space-y-2' : 'space-y-3'} ${isMobile ? 'mb-4' : 'mb-6'}`}>
                  {checkoutItems.map((item) => (
                    <div key={item.id} className={`flex ${isMobile ? 'gap-2' : 'gap-3'}`}>
                      <div className={`${isMobile ? 'w-10 h-10' : 'w-12 h-12'} rounded-lg overflow-hidden flex-shrink-0`}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium text-obsidian-black truncate`}>
                          {item.name}
                        </h4>
                        <p className={`${isMobile ? 'text-xs' : 'text-xs'} text-graphite`}>
                          {item.color} • {item.size} • Qty: {item.quantity}
                        </p>
                        <p className={`${isMobile ? 'text-xs' : 'text-sm'} font-semibold text-obsidian-black`}>
                          {formatPrice(item.price)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pricing - Mobile Optimized */}
                <div className={`${isMobile ? 'space-y-1.5' : 'space-y-2'} ${isMobile ? 'mb-4' : 'mb-6'}`}>
                  <div className={`flex justify-between ${isMobile ? 'text-xs' : 'text-sm'}`}>
                    <span className="text-graphite">Subtotal</span>
                    <span className="text-obsidian-black">{formatPrice(subtotal)}</span>
                  </div>
                  
                  {savings > 0 && (
                    <div className={`flex justify-between ${isMobile ? 'text-xs' : 'text-sm'}`}>
                      <span className="text-graphite">Savings</span>
                      <span className="text-royal-gold">-{formatPrice(savings)}</span>
                    </div>
                  )}
                  
                  <div className={`flex justify-between ${isMobile ? 'text-xs' : 'text-sm'}`}>
                    <span className="text-graphite">Shipping</span>
                    <span className="text-obsidian-black">{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
                  </div>
                  
                  <div className={`flex justify-between ${isMobile ? 'text-xs' : 'text-sm'}`}>
                    <span className="text-graphite">Tax</span>
                    <span className="text-obsidian-black">{formatPrice(tax)}</span>
                  </div>
                  
                  <div className={`border-t border-champagne/30 ${isMobile ? 'pt-1.5' : 'pt-2'}`}>
                    <div className={`flex justify-between ${isMobile ? 'text-sm' : 'text-base'} font-semibold`}>
                      <span className="text-obsidian-black">Total</span>
                      <span className="text-obsidian-black">{formatPrice(total)}</span>
                    </div>
                  </div>
                </div>

                {/* Security Badges - Mobile Optimized */}
                <div className={`flex items-center justify-center ${isMobile ? 'gap-3' : 'gap-4'} ${isMobile ? 'text-xs' : 'text-xs'} text-graphite`}>
                  <div className="flex items-center gap-1">
                    <Shield size={isMobile ? 10 : 12} />
                    <span>Secure</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Lock size={isMobile ? 10 : 12} />
                    <span>Encrypted</span>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}