'use client';

import { motion } from 'framer-motion';
import { Package, Eye, Download, RefreshCw, CheckCircle, Clock, XCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

// Sample orders data
const sampleOrders = [
  {
    id: 'ORD-001',
    date: '2024-01-15',
    status: 'delivered',
    total: 1200.00,
    items: [
      {
        id: '1',
        name: 'Luxury Leather Handbag',
        price: 1200.00,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop&crop=center',
        size: 'One Size',
        color: 'Black'
      }
    ],
    trackingNumber: 'TRK123456789',
    estimatedDelivery: '2024-01-20'
  },
  {
    id: 'ORD-002',
    date: '2024-01-10',
    status: 'shipped',
    total: 3200.00,
    items: [
      {
        id: '4',
        name: 'Men\'s Chronograph Watch',
        price: 3200.00,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop&crop=center',
        size: 'One Size',
        color: 'Silver'
      }
    ],
    trackingNumber: 'TRK987654321',
    estimatedDelivery: '2024-01-18'
  },
  {
    id: 'ORD-003',
    date: '2024-01-05',
    status: 'processing',
    total: 450.00,
    items: [
      {
        id: '5',
        name: 'Luxury Cashmere Sweater',
        price: 450.00,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=500&fit=crop&crop=center',
        size: 'M',
        color: 'Cream'
      }
    ],
    trackingNumber: null,
    estimatedDelivery: '2024-01-25'
  }
];

export default function OrdersPage() {
  const [orders, setOrders] = useState(sampleOrders);
  const [selectedOrders, setSelectedOrders] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSelectOrder = (orderId: string) => {
    setSelectedOrders(prev => 
      prev.includes(orderId) 
        ? prev.filter(id => id !== orderId)
        : [...prev, orderId]
    );
  };

  const selectAll = () => {
    setSelectedOrders(orders.map(order => order.id));
  };

  const deselectAll = () => {
    setSelectedOrders([]);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered':
        return <CheckCircle size={isMobile ? 14 : 16} className="text-green-600" />;
      case 'shipped':
        return <Package size={isMobile ? 14 : 16} className="text-blue-600" />;
      case 'processing':
        return <Clock size={isMobile ? 14 : 16} className="text-yellow-600" />;
      case 'cancelled':
        return <XCircle size={isMobile ? 14 : 16} className="text-red-600" />;
      default:
        return <Clock size={isMobile ? 14 : 16} className="text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'text-green-600 bg-green-50';
      case 'shipped':
        return 'text-blue-600 bg-blue-50';
      case 'processing':
        return 'text-yellow-600 bg-yellow-50';
      case 'cancelled':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-pearl-white">
      
      {/* ===== SIMPLE HEADER ===== */}
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-display font-light text-obsidian-black">
            My Orders
          </h1>
        </div>
      </div>

      {/* ===== ORDERS CONTENT ===== */}
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        {orders.length > 0 ? (
          <>
            {/* Selection Controls - Mobile Optimized */}
            <div className={`flex ${isMobile ? 'flex-col gap-3' : 'items-center justify-between'} mb-4 sm:mb-6`}>
              <div className={`flex items-center ${isMobile ? 'justify-between' : 'gap-4'}`}>
                <button
                  onClick={selectedOrders.length === orders.length ? deselectAll : selectAll}
                  className={`${isMobile ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'} bg-champagne/20 text-obsidian-black rounded-lg font-medium hover:bg-champagne/30 transition-colors duration-300`}
                >
                  {selectedOrders.length === orders.length ? 'Deselect All' : 'Select All'}
                </button>
                <span className={`${isMobile ? 'text-xs' : 'text-sm'} text-graphite`}>
                  {selectedOrders.length} of {orders.length} selected
                </span>
              </div>
              
              {selectedOrders.length > 0 && (
                <motion.button
                  className={`${isMobile ? 'w-full px-4 py-2 text-sm' : 'px-6 py-2 text-sm'} bg-obsidian-black text-pearl-white rounded-lg font-medium hover:bg-royal-gold hover:text-obsidian-black transition-colors duration-300 flex items-center justify-center gap-2`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={isMobile ? 14 : 16} />
                  Download Invoices ({selectedOrders.length})
                </motion.button>
              )}
            </div>

            {/* Orders List */}
            <div className="space-y-4">
              {orders.map((order, index) => (
                <motion.div
                  key={order.id}
                  className={`bg-pearl-white rounded-2xl p-4 sm:p-6 shadow-luxury-sm border border-champagne/20 ${isMobile ? 'space-y-3' : 'space-y-4'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Order Header */}
                  <div className={`flex ${isMobile ? 'flex-col gap-3' : 'items-center justify-between'}`}>
                    <div className={`flex ${isMobile ? 'flex-col gap-2' : 'items-center gap-4'}`}>
                      {/* Selection Checkbox */}
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={selectedOrders.includes(order.id)}
                          onChange={() => toggleSelectOrder(order.id)}
                          className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-royal-gold bg-pearl-white border-2 border-royal-gold rounded focus:ring-royal-gold focus:ring-1`}
                        />
                        <div>
                          <h3 className={`${isMobile ? 'text-sm' : 'text-base'} font-semibold text-obsidian-black`}>
                            Order #{order.id}
                          </h3>
                          <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-graphite`}>
                            Placed on {formatDate(order.date)}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className={`flex ${isMobile ? 'flex-col gap-2' : 'items-center gap-4'}`}>
                      {/* Status */}
                      <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${getStatusColor(order.status)}`}>
                        {getStatusIcon(order.status)}
                        <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium capitalize`}>
                          {order.status}
                        </span>
                      </div>

                      {/* Total */}
                      <div className="text-right">
                        <p className={`${isMobile ? 'text-sm' : 'text-base'} font-semibold text-obsidian-black`}>
                          {formatPrice(order.total)}
                        </p>
                        {order.trackingNumber && (
                          <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-graphite`}>
                            Track: {order.trackingNumber}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className={`${isMobile ? 'space-y-2' : 'space-y-3'}`}>
                    {order.items.map((item) => (
                      <div key={item.id} className={`flex ${isMobile ? 'gap-2' : 'gap-4'} items-center`}>
                        {/* Item Image */}
                        <div className={`${isMobile ? 'w-12 h-12' : 'w-16 h-16'} rounded-lg overflow-hidden flex-shrink-0`}>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Item Details */}
                        <div className="flex-1 min-w-0">
                          <h4 className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium text-obsidian-black truncate`}>
                            {item.name}
                          </h4>
                          <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-graphite`}>
                            {item.color} • {item.size} • Qty: {item.quantity}
                          </p>
                          <p className={`${isMobile ? 'text-xs' : 'text-sm'} font-semibold text-obsidian-black`}>
                            {formatPrice(item.price)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Actions */}
                  <div className={`flex ${isMobile ? 'flex-col gap-2' : 'items-center justify-between'} pt-4 border-t border-champagne/20`}>
                    <div className={`flex ${isMobile ? 'gap-2' : 'gap-4'}`}>
                      <motion.button
                        className={`${isMobile ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'} bg-royal-gold/10 text-royal-gold rounded-lg font-medium hover:bg-royal-gold hover:text-obsidian-black transition-colors duration-300 flex items-center gap-2`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Eye size={isMobile ? 12 : 14} />
                        View Details
                      </motion.button>

                      {order.trackingNumber && (
                        <motion.button
                          className={`${isMobile ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'} bg-obsidian-black/10 text-obsidian-black rounded-lg font-medium hover:bg-obsidian-black hover:text-pearl-white transition-colors duration-300 flex items-center gap-2`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Package size={isMobile ? 12 : 14} />
                          Track
                        </motion.button>
                      )}

                      {order.status === 'delivered' && (
                        <motion.button
                          className={`${isMobile ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'} bg-green-50 text-green-600 rounded-lg font-medium hover:bg-green-600 hover:text-white transition-colors duration-300 flex items-center gap-2`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <RefreshCw size={isMobile ? 12 : 14} />
                          Reorder
                        </motion.button>
                      )}
                    </div>

                    {order.estimatedDelivery && (
                      <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-graphite`}>
                        Est. delivery: {formatDate(order.estimatedDelivery)}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          /* Empty Orders */
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-24 h-24 bg-champagne/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package size={32} className="text-graphite" />
            </div>
            <h3 className="text-xl font-semibold text-obsidian-black mb-2">No orders yet</h3>
            <p className="text-graphite mb-6">Start shopping to see your orders here</p>
            <motion.button
              className="px-6 py-3 bg-obsidian-black text-pearl-white rounded-lg font-medium hover:bg-royal-gold hover:text-obsidian-black transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Shopping
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* ===== RESULTS COUNTER ===== */}
      {orders.length > 0 && (
        <div className="px-4 py-4 bg-champagne/10 sm:px-6 lg:px-8">
          <p className="text-sm text-graphite text-center">
            {orders.length} {orders.length === 1 ? 'order' : 'orders'} found
          </p>
        </div>
      )}

    </div>
  );
}