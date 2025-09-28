'use client';

import { ArrowLeft, Truck, Clock, Shield, Globe, Package, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ShippingPage() {
  const router = useRouter();

  const shippingOptions = [
    {
      name: 'Standard Shipping',
      price: 'Free',
      minOrder: '$500',
      deliveryTime: '5-7 business days',
      description: 'Complimentary shipping on all orders over $500',
      icon: Truck
    },
    {
      name: 'Express Shipping',
      price: '$25',
      minOrder: 'Any amount',
      deliveryTime: '2-3 business days',
      description: 'Priority handling and faster delivery',
      icon: Clock
    },
    {
      name: 'Overnight Shipping',
      price: '$50',
      minOrder: 'Any amount',
      deliveryTime: 'Next business day',
      description: 'Guaranteed next-day delivery',
      icon: Package
    }
  ];

  const regions = [
    {
      name: 'United States',
      icon: Globe,
      options: [
        { method: 'Standard', time: '5-7 business days', cost: 'Free over $500' },
        { method: 'Express', time: '2-3 business days', cost: '$25' },
        { method: 'Overnight', time: 'Next business day', cost: '$50' }
      ]
    },
    {
      name: 'Canada',
      icon: Globe,
      options: [
        { method: 'Standard', time: '7-10 business days', cost: '$35' },
        { method: 'Express', time: '3-5 business days', cost: '$55' }
      ]
    },
    {
      name: 'Europe',
      icon: Globe,
      options: [
        { method: 'Standard', time: '10-14 business days', cost: '$45' },
        { method: 'Express', time: '5-7 business days', cost: '$75' }
      ]
    }
  ];

  const trackingSteps = [
    {
      step: 1,
      title: 'Order Confirmation',
      description: 'You\'ll receive an email confirmation with your order details and tracking information.',
      icon: CheckCircle
    },
    {
      step: 2,
      title: 'Processing',
      description: 'We carefully prepare your order for shipment within 1-2 business days.',
      icon: Package
    },
    {
      step: 3,
      title: 'Shipped',
      description: 'Your order is dispatched and you\'ll receive tracking updates via email.',
      icon: Truck
    },
    {
      step: 4,
      title: 'Delivered',
      description: 'Your package arrives safely at your specified address.',
      icon: Shield
    }
  ];

  const faqs = [
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 5-7 business days for orders over $500. Express shipping takes 2-3 business days, and overnight shipping delivers the next business day.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to over 50 countries worldwide. International shipping times and costs vary by destination.'
    },
    {
      question: 'Can I track my order?',
      answer: 'Yes, you\'ll receive a tracking number via email once your order ships. You can track your package on our website or the carrier\'s website.'
    },
    {
      question: 'What if my package is damaged?',
      answer: 'We insure all packages and will replace any damaged items at no cost to you. Please contact us immediately if you receive a damaged package.'
    },
    {
      question: 'Can I change my shipping address?',
      answer: 'You can change your shipping address before your order ships by contacting our customer service team.'
    },
    {
      question: 'Do you offer same-day delivery?',
      answer: 'Same-day delivery is available in select metropolitan areas. Please contact us to check availability in your area.'
    }
  ];

  return (
    <div className="min-h-screen bg-pearl-white">
      
      {/* ===== HEADER ===== */}
      <div className="sticky top-16 z-40 bg-pearl-white border-b border-champagne/30 lg:top-20">
        <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-champagne/20 rounded-lg transition-colors duration-300"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-lg font-semibold text-obsidian-black">Shipping Information</h1>
          <div className="w-8"></div>
        </div>
      </div>

      {/* ===== HERO SECTION ===== */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-royal-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Truck size={32} className="text-royal-gold" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-light text-obsidian-black mb-6">
            Shipping & Delivery
          </h2>
          <div className="w-24 h-px bg-royal-gold mx-auto mb-8"></div>
          <p className="text-xl text-graphite leading-relaxed max-w-2xl mx-auto">
            We offer fast, secure, and reliable shipping worldwide. 
            Your luxury items are carefully packaged and insured for safe delivery.
          </p>
        </div>
      </div>

      {/* ===== SHIPPING OPTIONS ===== */}
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-light text-obsidian-black mb-6">
              Shipping Options
            </h3>
            <p className="text-lg text-graphite">
              Choose the shipping method that best fits your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shippingOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <div key={index} className="bg-pearl-white border border-champagne/30 rounded-2xl p-8 shadow-luxury-sm hover:shadow-luxury transition-all duration-300">
                  <div className="w-16 h-16 bg-royal-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon size={32} className="text-royal-gold" />
                  </div>
                  <h4 className="text-2xl font-semibold text-obsidian-black mb-4 text-center">
                    {option.name}
                  </h4>
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-royal-gold mb-2">
                      {option.price}
                    </div>
                    <div className="text-sm text-graphite">
                      {option.minOrder === 'Any amount' ? 'No minimum order' : `Min. order: ${option.minOrder}`}
                    </div>
                  </div>
                  <div className="text-center mb-6">
                    <div className="text-lg font-medium text-obsidian-black mb-2">
                      {option.deliveryTime}
                    </div>
                    <div className="text-sm text-graphite">
                      Delivery time
                    </div>
                  </div>
                  <p className="text-graphite text-center leading-relaxed">
                    {option.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ===== INTERNATIONAL SHIPPING ===== */}
      <div className="px-4 py-16 sm:px-6 lg:px-8 bg-champagne/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-light text-obsidian-black mb-6">
              International Shipping
            </h3>
            <p className="text-lg text-graphite">
              We ship to over 50 countries worldwide with reliable delivery partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regions.map((region, index) => {
              const Icon = region.icon;
              return (
                <div key={index} className="bg-pearl-white border border-champagne/30 rounded-2xl p-6 shadow-luxury-sm">
                  <div className="flex items-center space-x-3 mb-6">
                    <Icon size={24} className="text-royal-gold" />
                    <h4 className="text-xl font-semibold text-obsidian-black">
                      {region.name}
                    </h4>
                  </div>
                  <div className="space-y-3">
                    {region.options.map((option, optionIndex) => (
                      <div key={optionIndex} className="flex justify-between items-center py-2 border-b border-champagne/20 last:border-b-0">
                        <div>
                          <div className="font-medium text-obsidian-black">{option.method}</div>
                          <div className="text-sm text-graphite">{option.time}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-royal-gold">{option.cost}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ===== TRACKING PROCESS ===== */}
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-light text-obsidian-black mb-6">
              Order Tracking Process
            </h3>
            <p className="text-lg text-graphite">
              Follow your order from placement to delivery with our comprehensive tracking system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trackingSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-royal-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon size={32} className="text-royal-gold" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-royal-gold text-obsidian-black rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-obsidian-black mb-3">
                    {step.title}
                  </h4>
                  <p className="text-graphite leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ===== FAQ SECTION ===== */}
      <div className="px-4 py-16 sm:px-6 lg:px-8 bg-champagne/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-light text-obsidian-black mb-6">
              Frequently Asked Questions
            </h3>
            <p className="text-lg text-graphite">
              Find answers to common shipping questions.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-pearl-white border border-champagne/30 rounded-xl p-6 shadow-luxury-sm">
                <h4 className="text-lg font-semibold text-obsidian-black mb-3">
                  {faq.question}
                </h4>
                <p className="text-graphite leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== CTA SECTION ===== */}
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-display font-light text-obsidian-black mb-6">
            Ready to Shop?
          </h3>
          <p className="text-lg text-graphite mb-8 max-w-2xl mx-auto">
            Enjoy free shipping on orders over $500 and experience our luxury service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push('/shop')}
              className="px-8 py-4 bg-obsidian-black text-pearl-white rounded-xl font-medium hover:bg-royal-gold hover:text-obsidian-black transition-all duration-300"
            >
              Start Shopping
            </button>
            <button
              onClick={() => router.push('/contact')}
              className="px-8 py-4 border border-obsidian-black text-obsidian-black rounded-xl font-medium hover:bg-obsidian-black hover:text-pearl-white transition-all duration-300"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
