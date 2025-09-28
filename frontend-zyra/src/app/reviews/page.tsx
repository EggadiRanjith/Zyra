'use client';

import { useState } from 'react';
import { ArrowLeft, Search, Filter, Star, ThumbsUp, ThumbsDown, Flag, MoreVertical, Edit3, Trash2, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Sample reviews data
const reviewsData = [
  {
    id: '1',
    productId: '1',
    productName: 'Luxury Leather Handbag',
    productImage: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100&h=100&fit=crop&crop=center',
    customerName: 'Sarah Johnson',
    customerAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=faces',
    rating: 5,
    title: 'Absolutely stunning quality!',
    comment: 'This handbag exceeded all my expectations. The leather is incredibly soft and the craftsmanship is impeccable. Worth every penny!',
    date: '2024-01-15',
    status: 'Approved',
    verified: true,
    helpful: 12,
    notHelpful: 1,
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop&crop=center',
      'https://images.unsplash.com/photo-1594223274512-ad480373d1f5?w=200&h=200&fit=crop&crop=center'
    ],
    size: 'One Size',
    color: 'Black',
    purchaseDate: '2024-01-10'
  },
  {
    id: '2',
    productId: '2',
    productName: 'Diamond Stud Earrings',
    productImage: 'https://images.unsplash.com/photo-1612817166008-d1017779277c?w=100&h=100&fit=crop&crop=center',
    customerName: 'Michael Chen',
    customerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=faces',
    rating: 4,
    title: 'Beautiful but smaller than expected',
    comment: 'The earrings are gorgeous and the diamonds sparkle beautifully. However, they are a bit smaller than I anticipated from the photos.',
    date: '2024-01-12',
    status: 'Approved',
    verified: true,
    helpful: 8,
    notHelpful: 2,
    images: [],
    size: 'One Size',
    color: 'White Gold',
    purchaseDate: '2024-01-08'
  },
  {
    id: '3',
    productId: '3',
    productName: 'Swiss Chronograph Watch',
    productImage: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop&crop=center',
    customerName: 'Emily Rodriguez',
    customerAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=faces',
    rating: 5,
    title: 'Perfect timepiece!',
    comment: 'I\'ve been wearing this watch for a month now and it\'s been keeping perfect time. The build quality is outstanding and it looks great with both casual and formal attire.',
    date: '2024-01-10',
    status: 'Approved',
    verified: true,
    helpful: 15,
    notHelpful: 0,
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop&crop=center'
    ],
    size: 'One Size',
    color: 'Silver',
    purchaseDate: '2024-01-05'
  },
  {
    id: '4',
    productId: '4',
    productName: 'Cashmere Sweater',
    productImage: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=100&h=100&fit=crop&crop=center',
    customerName: 'David Kim',
    customerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=faces',
    rating: 3,
    title: 'Good quality but sizing issue',
    comment: 'The cashmere is very soft and comfortable, but the sizing runs small. I usually wear medium but had to exchange for large. Customer service was helpful with the exchange.',
    date: '2024-01-08',
    status: 'Pending',
    verified: true,
    helpful: 5,
    notHelpful: 3,
    images: [],
    size: 'L',
    color: 'Cream',
    purchaseDate: '2024-01-03'
  },
  {
    id: '5',
    productId: '5',
    productName: 'Designer Sunglasses',
    productImage: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=100&h=100&fit=crop&crop=center',
    customerName: 'Lisa Wang',
    customerAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop&crop=faces',
    rating: 4,
    title: 'Great style and comfort',
    comment: 'Love the design and they fit perfectly. The UV protection is excellent and they look very stylish. Would recommend!',
    date: '2024-01-05',
    status: 'Approved',
    verified: false,
    helpful: 7,
    notHelpful: 1,
    images: [],
    size: 'One Size',
    color: 'Black',
    purchaseDate: '2024-01-01'
  },
  {
    id: '6',
    productId: '1',
    productName: 'Luxury Leather Handbag',
    productImage: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100&h=100&fit=crop&crop=center',
    customerName: 'Anonymous',
    customerAvatar: null,
    rating: 1,
    title: 'Poor quality and overpriced',
    comment: 'The bag arrived with scratches and the leather feels cheap. For this price, I expected much better quality. Very disappointed.',
    date: '2024-01-03',
    status: 'Flagged',
    verified: false,
    helpful: 2,
    notHelpful: 8,
    images: [],
    size: 'One Size',
    color: 'Brown',
    purchaseDate: '2023-12-28'
  }
];

const statusOptions = ['All', 'Approved', 'Pending', 'Flagged', 'Rejected'];
const ratingOptions = ['All', '5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Star'];
const sortOptions = [
  { value: 'newest', label: 'Newest First' },
  { value: 'oldest', label: 'Oldest First' },
  { value: 'rating-high', label: 'Highest Rated' },
  { value: 'rating-low', label: 'Lowest Rated' },
  { value: 'helpful', label: 'Most Helpful' },
  { value: 'verified', label: 'Verified Only' }
];

export default function ReviewsPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedRating, setSelectedRating] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedReviews, setSelectedReviews] = useState<string[]>([]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'Pending':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'Flagged':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'Rejected':
        return 'text-gray-600 bg-gray-50 border-gray-200';
      default:
        return 'text-graphite bg-champagne/20 border-champagne/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Approved':
        return <CheckCircle size={16} className="text-green-500" />;
      case 'Pending':
        return <Clock size={16} className="text-yellow-500" />;
      case 'Flagged':
        return <Flag size={16} className="text-red-500" />;
      case 'Rejected':
        return <AlertCircle size={16} className="text-gray-500" />;
      default:
        return <AlertCircle size={16} className="text-graphite" />;
    }
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={`${
          i < rating ? 'text-royal-gold fill-current' : 'text-champagne'
        }`}
      />
    ));
  };

  const filteredReviews = reviewsData.filter(review => {
    const matchesSearch = searchQuery === '' || 
      review.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.comment.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = selectedStatus === 'All' || review.status === selectedStatus;
    const matchesRating = selectedRating === 'All' || 
      (selectedRating === '5 Stars' && review.rating === 5) ||
      (selectedRating === '4 Stars' && review.rating === 4) ||
      (selectedRating === '3 Stars' && review.rating === 3) ||
      (selectedRating === '2 Stars' && review.rating === 2) ||
      (selectedRating === '1 Star' && review.rating === 1);
    
    return matchesSearch && matchesStatus && matchesRating;
  });

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'oldest':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'rating-high':
        return b.rating - a.rating;
      case 'rating-low':
        return a.rating - b.rating;
      case 'helpful':
        return b.helpful - a.helpful;
      case 'verified':
        return (b.verified ? 1 : 0) - (a.verified ? 1 : 0);
      default:
        return 0;
    }
  });

  const toggleReviewSelection = (reviewId: string) => {
    setSelectedReviews(prev => 
      prev.includes(reviewId) 
        ? prev.filter(id => id !== reviewId)
        : [...prev, reviewId]
    );
  };

  const selectAllReviews = () => {
    setSelectedReviews(sortedReviews.map(review => review.id));
  };

  const clearSelection = () => {
    setSelectedReviews([]);
  };

  const totalReviews = reviewsData.length;
  const approvedReviews = reviewsData.filter(r => r.status === 'Approved').length;
  const pendingReviews = reviewsData.filter(r => r.status === 'Pending').length;
  const flaggedReviews = reviewsData.filter(r => r.status === 'Flagged').length;
  const averageRating = reviewsData.reduce((sum, r) => sum + r.rating, 0) / totalReviews;

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
          <h1 className="text-lg font-semibold text-obsidian-black">Reviews & Ratings</h1>
          <div className="w-8"></div>
        </div>
      </div>

      {/* ===== STATS CARDS ===== */}
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-pearl-white border border-champagne/30 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-graphite">Total Reviews</p>
                <p className="text-2xl font-semibold text-obsidian-black">{totalReviews}</p>
              </div>
              <Star className="text-royal-gold" size={24} />
            </div>
          </div>
          <div className="bg-pearl-white border border-champagne/30 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-graphite">Average Rating</p>
                <p className="text-2xl font-semibold text-obsidian-black">{averageRating.toFixed(1)}</p>
              </div>
              <div className="flex">
                {renderStars(Math.round(averageRating))}
              </div>
            </div>
          </div>
          <div className="bg-pearl-white border border-champagne/30 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-graphite">Pending</p>
                <p className="text-2xl font-semibold text-obsidian-black">{pendingReviews}</p>
              </div>
              <Clock className="text-yellow-500" size={24} />
            </div>
          </div>
          <div className="bg-pearl-white border border-champagne/30 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-graphite">Flagged</p>
                <p className="text-2xl font-semibold text-obsidian-black">{flaggedReviews}</p>
              </div>
              <Flag className="text-red-500" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* ===== SEARCH & FILTERS ===== */}
      <div className="sticky top-32 z-30 bg-pearl-white border-b border-champagne/30 lg:top-36">
        <div className="px-4 py-4 sm:px-6 lg:px-8">
          
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-graphite" size={20} />
            <input
              type="text"
              placeholder="Search reviews by customer, product, or content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-pearl-white border border-champagne/30 rounded-xl text-obsidian-black placeholder-graphite focus:outline-none focus:ring-2 focus:ring-royal-gold/20 focus:border-royal-gold/50 transition-all duration-300"
            />
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center justify-between mb-4 lg:hidden">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 bg-obsidian-black text-pearl-white rounded-lg hover:bg-royal-gold hover:text-obsidian-black transition-all duration-300"
            >
              <Filter size={16} />
              <span className="text-sm font-medium">Filters</span>
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 bg-pearl-white border border-champagne/30 rounded-lg text-obsidian-black focus:outline-none focus:ring-2 focus:ring-royal-gold/20 text-sm"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Desktop Controls */}
          <div className="hidden lg:flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-2 bg-pearl-white border border-champagne/30 rounded-lg text-obsidian-black focus:outline-none focus:ring-2 focus:ring-royal-gold/20 focus:border-royal-gold/50 transition-all duration-300"
              >
                {statusOptions.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                value={selectedRating}
                onChange={(e) => setSelectedRating(e.target.value)}
                className="px-4 py-2 bg-pearl-white border border-champagne/30 rounded-lg text-obsidian-black focus:outline-none focus:ring-2 focus:ring-royal-gold/20 focus:border-royal-gold/50 transition-all duration-300"
              >
                {ratingOptions.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-pearl-white border border-champagne/30 rounded-lg text-obsidian-black focus:outline-none focus:ring-2 focus:ring-royal-gold/20 focus:border-royal-gold/50 transition-all duration-300"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Bulk Actions */}
          {selectedReviews.length > 0 && (
            <div className="flex items-center justify-between p-4 bg-royal-gold/10 rounded-xl mb-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-obsidian-black">
                  {selectedReviews.length} review{selectedReviews.length > 1 ? 's' : ''} selected
                </span>
                <button
                  onClick={clearSelection}
                  className="text-sm text-royal-gold hover:text-royal-gold/80 transition-colors duration-300"
                >
                  Clear Selection
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 bg-green-500 text-pearl-white rounded-lg hover:bg-green-600 transition-colors duration-300 text-sm font-medium">
                  Approve
                </button>
                <button className="px-3 py-1 bg-yellow-500 text-pearl-white rounded-lg hover:bg-yellow-600 transition-colors duration-300 text-sm font-medium">
                  Flag
                </button>
                <button className="px-3 py-1 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-pearl-white transition-all duration-300 text-sm font-medium">
                  Reject
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ===== MOBILE FILTERS OVERLAY ===== */}
      {showFilters && (
        <div className="fixed inset-0 z-50 bg-obsidian-black/50 backdrop-blur-sm lg:hidden">
          <div className="absolute right-0 top-0 h-full w-80 bg-pearl-white shadow-luxury-lg">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-obsidian-black">Filters</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 hover:bg-champagne/20 rounded-lg transition-colors duration-300"
                >
                  <Filter size={20} />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-obsidian-black mb-3">Status</h4>
                  <div className="space-y-2">
                    {statusOptions.map(status => (
                      <button
                        key={status}
                        onClick={() => setSelectedStatus(status)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                          selectedStatus === status
                            ? 'bg-royal-gold text-obsidian-black'
                            : 'text-graphite hover:bg-champagne/20'
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-obsidian-black mb-3">Rating</h4>
                  <div className="space-y-2">
                    {ratingOptions.map(rating => (
                      <button
                        key={rating}
                        onClick={() => setSelectedRating(rating)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                          selectedRating === rating
                            ? 'bg-royal-gold text-obsidian-black'
                            : 'text-graphite hover:bg-champagne/20'
                        }`}
                      >
                        {rating}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-obsidian-black mb-3">Sort By</h4>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 bg-pearl-white border border-champagne/30 rounded-lg text-obsidian-black focus:outline-none focus:ring-2 focus:ring-royal-gold/20"
                  >
                    {sortOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-champagne/30">
                <button
                  onClick={() => setShowFilters(false)}
                  className="w-full py-3 bg-obsidian-black text-pearl-white rounded-lg hover:bg-royal-gold hover:text-obsidian-black transition-all duration-300 font-medium"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== REVIEWS LIST ===== */}
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {sortedReviews.map((review) => (
            <div key={review.id} className="bg-pearl-white border border-champagne/30 rounded-xl p-4 sm:p-6 hover:shadow-luxury-sm transition-all duration-300">
              
              {/* Review Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  {/* Selection Checkbox */}
                  <input
                    type="checkbox"
                    checked={selectedReviews.includes(review.id)}
                    onChange={() => toggleReviewSelection(review.id)}
                    className="w-4 h-4 text-royal-gold focus:ring-royal-gold/20 rounded mt-1"
                  />
                  
                  {/* Customer Avatar */}
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-champagne/20">
                    {review.customerAvatar ? (
                      <img
                        src={review.customerAvatar}
                        alt={review.customerName}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-graphite font-medium">
                        {review.customerName.charAt(0)}
                      </div>
                    )}
                  </div>
                  
                  {/* Customer Info */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-medium text-obsidian-black">{review.customerName}</h3>
                      {review.verified && (
                        <span className="px-2 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-sm text-graphite">{formatDate(review.date)}</span>
                    </div>
                    <h4 className="font-medium text-obsidian-black mb-2">{review.title}</h4>
                  </div>
                </div>

                {/* Status & Actions */}
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(review.status)}`}>
                    {review.status}
                  </span>
                  <button className="p-2 hover:bg-champagne/20 rounded-lg transition-colors duration-300">
                    <MoreVertical size={16} />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex items-center space-x-3 mb-4 p-3 bg-champagne/10 rounded-lg">
                <img
                  src={review.productImage}
                  alt={review.productName}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h5 className="font-medium text-obsidian-black">{review.productName}</h5>
                  <p className="text-sm text-graphite">{review.color} • {review.size}</p>
                  <p className="text-xs text-graphite">Purchased: {formatDate(review.purchaseDate)}</p>
                </div>
              </div>

              {/* Review Content */}
              <div className="mb-4">
                <p className="text-graphite leading-relaxed">{review.comment}</p>
                
                {/* Review Images */}
                {review.images.length > 0 && (
                  <div className="flex space-x-2 mt-3">
                    {review.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Review image ${index + 1}`}
                        className="w-20 h-20 rounded-lg object-cover cursor-pointer hover:opacity-80 transition-opacity duration-300"
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Review Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 text-sm text-graphite hover:text-obsidian-black transition-colors duration-300">
                    <ThumbsUp size={16} />
                    <span>Helpful ({review.helpful})</span>
                  </button>
                  <button className="flex items-center space-x-1 text-sm text-graphite hover:text-obsidian-black transition-colors duration-300">
                    <ThumbsDown size={16} />
                    <span>Not Helpful ({review.notHelpful})</span>
                  </button>
                  <button className="flex items-center space-x-1 text-sm text-graphite hover:text-red-500 transition-colors duration-300">
                    <Flag size={16} />
                    <span>Flag</span>
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-champagne/20 rounded-lg transition-colors duration-300">
                    <Edit3 size={16} />
                  </button>
                  <button className="p-2 hover:bg-red-500/10 text-red-500 rounded-lg transition-colors duration-300">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {sortedReviews.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-champagne/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="text-graphite" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-obsidian-black mb-2">No reviews found</h3>
            <p className="text-graphite mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedStatus('All');
                setSelectedRating('All');
              }}
              className="px-6 py-3 bg-royal-gold text-obsidian-black rounded-lg hover:bg-royal-gold/90 transition-colors duration-300 font-medium"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* ===== RESULTS COUNT ===== */}
      <div className="px-4 py-4 bg-champagne/10 sm:px-6 lg:px-8">
        <p className="text-sm text-graphite text-center">
          Showing {sortedReviews.length} of {totalReviews} reviews
        </p>
      </div>
    </div>
  );
}
