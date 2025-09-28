'use client';

import { motion } from 'framer-motion';
import { CreditCard, Plus, Edit3, Trash2, ArrowLeft, Check, Shield } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PaymentPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: 'Visa',
      last4: '4242',
      expiryMonth: '12',
      expiryYear: '2025',
      holderName: 'John Doe',
      isDefault: true
    },
    {
      id: 2,
      type: 'Mastercard',
      last4: '5555',
      expiryMonth: '08',
      expiryYear: '2026',
      holderName: 'John Doe',
      isDefault: false
    }
  ]);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const setDefaultPayment = (id: number) => {
    setPaymentMethods(paymentMethods.map(payment => ({
      ...payment,
      isDefault: payment.id === id
    })));
  };

  const deletePayment = (id: number) => {
    setPaymentMethods(paymentMethods.filter(payment => payment.id !== id));
  };

  const getCardIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'visa':
        return '💳';
      case 'mastercard':
        return '💳';
      case 'amex':
        return '💳';
      default:
        return '💳';
    }
  };

  return (
    <div className="min-h-screen bg-pearl-white">
      
      {/* ===== HEADER ===== */}
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Link href="/account">
                <motion.button
                  className="p-2 text-graphite hover:text-royal-gold transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowLeft size={isMobile ? 20 : 24} />
                </motion.button>
              </Link>
              <div>
                <h1 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-display font-light text-obsidian-black`}>
                  Payment Methods
                </h1>
                <p className={`${isMobile ? 'text-sm' : 'text-base'} text-graphite`}>
                  Manage your payment options
                </p>
              </div>
            </div>
            <motion.button
              className={`${isMobile ? 'px-4 py-2 text-sm' : 'px-6 py-3'} bg-royal-gold text-obsidian-black rounded-lg font-medium hover:bg-royal-gold/90 transition-colors duration-300 flex items-center gap-2`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Plus size={isMobile ? 16 : 18} />
              Add Card
            </motion.button>
          </div>
        </div>
      </div>

      {/* ===== PAYMENT METHODS LIST ===== */}
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {paymentMethods.length > 0 ? (
            <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-1 md:grid-cols-2 gap-6'}`}>
              {paymentMethods.map((payment, index) => (
                <motion.div
                  key={payment.id}
                  className="bg-pearl-white rounded-2xl p-6 shadow-luxury-sm border border-champagne/20 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Default Badge */}
                  {payment.isDefault && (
                    <div className="absolute top-4 right-4 bg-royal-gold text-obsidian-black px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                      <Check size={12} />
                      Default
                    </div>
                  )}

                  {/* Card Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-8 bg-gradient-to-r from-royal-gold/20 to-royal-gold/10 rounded-lg flex items-center justify-center">
                      <span className="text-lg">{getCardIcon(payment.type)}</span>
                    </div>
                    <div>
                      <h3 className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold text-obsidian-black`}>
                        {payment.type} •••• {payment.last4}
                      </h3>
                      <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-graphite`}>
                        Expires {payment.expiryMonth}/{payment.expiryYear}
                      </p>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="space-y-2 mb-6">
                    <p className={`${isMobile ? 'text-sm' : 'text-base'} text-graphite`}>
                      {payment.holderName}
                    </p>
                    <div className="flex items-center gap-2">
                      <Shield size={isMobile ? 12 : 14} className="text-green-600" />
                      <span className={`${isMobile ? 'text-xs' : 'text-sm'} text-green-600 font-medium`}>
                        Secured by ZYRA
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className={`flex ${isMobile ? 'flex-col gap-2' : 'items-center justify-between'}`}>
                    <div className={`flex ${isMobile ? 'gap-2' : 'gap-3'}`}>
                      <motion.button
                        className={`${isMobile ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'} bg-royal-gold/10 text-royal-gold rounded-lg font-medium hover:bg-royal-gold hover:text-obsidian-black transition-colors duration-300 flex items-center gap-1`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Edit3 size={isMobile ? 12 : 14} />
                        Edit
                      </motion.button>
                      <motion.button
                        className={`${isMobile ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'} bg-red-50 text-red-600 rounded-lg font-medium hover:bg-red-600 hover:text-white transition-colors duration-300 flex items-center gap-1`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => deletePayment(payment.id)}
                      >
                        <Trash2 size={isMobile ? 12 : 14} />
                        Remove
                      </motion.button>
                    </div>
                    
                    {!payment.isDefault && (
                      <motion.button
                        className={`${isMobile ? 'w-full px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'} bg-obsidian-black text-pearl-white rounded-lg font-medium hover:bg-royal-gold hover:text-obsidian-black transition-colors duration-300`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setDefaultPayment(payment.id)}
                      >
                        Set as Default
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-24 h-24 bg-champagne/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard size={32} className="text-graphite" />
              </div>
              <h3 className="text-xl font-semibold text-obsidian-black mb-2">No payment methods</h3>
              <p className="text-graphite mb-6">Add a payment method to make purchases</p>
              <motion.button
                className="px-6 py-3 bg-obsidian-black text-pearl-white rounded-lg font-medium hover:bg-royal-gold hover:text-obsidian-black transition-colors duration-300 flex items-center gap-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Plus size={18} />
                Add Payment Method
              </motion.button>
            </motion.div>
          )}

          {/* Security Notice */}
          <motion.div
            className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-start gap-3">
              <Shield size={isMobile ? 20 : 24} className="text-green-600 mt-1" />
              <div>
                <h4 className={`${isMobile ? 'text-sm' : 'text-base'} font-semibold text-green-800 mb-2`}>
                  Your payment information is secure
                </h4>
                <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-green-700`}>
                  We use industry-standard encryption to protect your payment details. 
                  Your card information is never stored on our servers and is processed securely.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
}
