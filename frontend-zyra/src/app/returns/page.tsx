'use client';

import { ArrowLeft, RefreshCw, Clock, CheckCircle, AlertTriangle, Package, Truck } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ReturnsPage() {
  const router = useRouter();

  const returnSteps = [
    {
      step: 1,
      title: 'Initiate Return',
      description: 'Log into your account and select the items you want to return, or contact our customer service team.',
      icon: RefreshCw
    },
    {
      step: 2,
      title: 'Package Items',
      description: 'Carefully package your items in the original packaging with all tags and accessories included.',
      icon: Package
    },
    {
      step: 3,
      title: 'Ship Return',
      description: 'Use the prepaid return label we provide, or ship to our return center using your preferred carrier.',
      icon: Truck
    },
    {
      step: 4,
      title: 'Receive Refund',
      description: 'Once we receive and inspect your return, we\'ll process your refund within 3-5 business days.',
      icon: CheckCircle
    }
  ];

  const returnPolicies = [
    {
      title: '30-Day Return Window',
      description: 'You have 30 days from the delivery date to initiate a return for most items.',
      icon: Clock
    },
    {
      title: 'Original Condition Required',
      description: 'Items must be in original condition with all tags, packaging, and accessories included.',
      icon: CheckCircle
    },
    {
      title: 'Free Return Shipping',
      description: 'We provide prepaid return labels for all returns within the United States.',
      icon: Truck
    },
    {
      title: 'Full Refund Guarantee',
      description: 'Receive a full refund to your original payment method within 3-5 business days.',
      icon: RefreshCw
    }
  ];

  const nonReturnableItems = [
    'Custom or personalized items',
    'Items worn or used beyond normal wear',
    'Items without original tags or packaging',
    'Items damaged by customer',
    'Items returned after 30 days',
    'Items purchased from third-party sellers'
  ];

  const faqs = [
    {
      question: 'How long do I have to return an item?',
      answer: 'You have 30 days from the delivery date to initiate a return. The return must be received by us within 35 days of the original delivery date.'
    },
    {
      question: 'Do I have to pay for return shipping?',
      answer: 'No, we provide free return shipping for all returns within the United States. We\'ll email you a prepaid return label.'
    },
    {
      question: 'What if my item is damaged or defective?',
      answer: 'If you receive a damaged or defective item, please contact us immediately. We\'ll arrange for a free return and replacement or full refund.'
    },
    {
      question: 'Can I exchange an item instead of returning it?',
      answer: 'Yes, you can exchange an item for a different size or color. The exchange process follows the same steps as a return.'
    },
    {
      question: 'How long does it take to process my refund?',
      answer: 'Once we receive your return, we\'ll inspect it and process your refund within 3-5 business days. You\'ll receive an email confirmation when the refund is processed.'
    },
    {
      question: 'What if I lost the original packaging?',
      answer: 'While we prefer original packaging, you can return items in suitable packaging that protects the item during shipping. Please include all original tags and accessories.'
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
          <h1 className="text-lg font-semibold text-obsidian-black">Returns & Exchanges</h1>
          <div className="w-8"></div>
        </div>
      </div>

      {/* ===== HERO SECTION ===== */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-16 h-16 bg-royal-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <RefreshCw size={32} className="text-royal-gold" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-light text-obsidian-black mb-6">
            Returns & Exchanges
          </h2>
          <div className="w-24 h-px bg-royal-gold mx-auto mb-8"></div>
          <p className="text-xl text-graphite leading-relaxed max-w-2xl mx-auto">
            We want you to love your purchase. If you're not completely satisfied, 
            we offer easy returns and exchanges within 30 days.
          </p>
        </div>
      </div>

      {/* ===== RETURN POLICIES ===== */}
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-light text-obsidian-black mb-6">
              Our Return Policy
            </h3>
            <p className="text-lg text-graphite">
              Simple, fair, and customer-friendly return policies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {returnPolicies.map((policy, index) => {
              const Icon = policy.icon;
              return (
                <div key={index} className="bg-pearl-white border border-champagne/30 rounded-2xl p-6 shadow-luxury-sm text-center">
                  <div className="w-16 h-16 bg-royal-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon size={32} className="text-royal-gold" />
                  </div>
                  <h4 className="text-xl font-semibold text-obsidian-black mb-4">
                    {policy.title}
                  </h4>
                  <p className="text-graphite leading-relaxed">
                    {policy.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ===== RETURN PROCESS ===== */}
      <div className="px-4 py-16 sm:px-6 lg:px-8 bg-champagne/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-light text-obsidian-black mb-6">
              How to Return an Item
            </h3>
            <p className="text-lg text-graphite">
              Follow these simple steps to return your purchase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {returnSteps.map((step, index) => {
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

      {/* ===== NON-RETURNABLE ITEMS ===== */}
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
            <div className="flex items-start space-x-4 mb-6">
              <AlertTriangle size={24} className="text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-yellow-800 mb-4">
                  Non-Returnable Items
                </h3>
                <p className="text-yellow-700 mb-6">
                  Please note that the following items cannot be returned or exchanged:
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {nonReturnableItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full flex-shrink-0"></div>
                  <span className="text-yellow-800">{item}</span>
                </div>
              ))}
            </div>
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
              Find answers to common return and exchange questions.
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
            Need Help with Your Return?
          </h3>
          <p className="text-lg text-graphite mb-8 max-w-2xl mx-auto">
            Our customer service team is here to help with any questions about returns or exchanges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push('/contact')}
              className="px-8 py-4 bg-obsidian-black text-pearl-white rounded-xl font-medium hover:bg-royal-gold hover:text-obsidian-black transition-all duration-300"
            >
              Contact Support
            </button>
            <button
              onClick={() => router.push('/account')}
              className="px-8 py-4 border border-obsidian-black text-obsidian-black rounded-xl font-medium hover:bg-obsidian-black hover:text-pearl-white transition-all duration-300"
            >
              View My Orders
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
