'use client';

import { Home, ShoppingBag, Film, Shirt, User, Heart, Package } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function MobileBottomNav() {
  const pathname = usePathname();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '/' },
    { id: 'shop', label: 'Shop', icon: ShoppingBag, href: '/shop' },
    { id: 'collections', label: 'Movies', icon: Film, href: '/collections' },
    { id: 'customized', label: 'Custom', icon: Shirt, href: '/customized' },
    { id: 'orders', label: 'Orders', icon: Package, href: '/orders' },
    { id: 'account', label: 'Account', icon: User, href: '/account' },
  ];

  // Function to determine if a nav item is active based on current path
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    if (href === '/shop') {
      return pathname === '/shop' || pathname.startsWith('/product/');
    }
    if (href === '/collections') {
      return pathname === '/collections';
    }
    if (href === '/customized') {
      return pathname === '/customized';
    }
    if (href === '/orders') {
      return pathname === '/orders';
    }
    if (href === '/account') {
      return pathname === '/account' || pathname === '/wishlist' || pathname === '/cart' || pathname === '/checkout' || pathname === '/orders';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ===== MOBILE BOTTOM NAVIGATION ===== */}
      <nav className="fixed bottom-3 left-3 right-3 z-50 bg-pearl-white/95 backdrop-blur-2xl border border-royal-gold/20 rounded-3xl shadow-luxury-xl lg:hidden">
        <div className="flex items-center justify-between h-14 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            
            return (
              <a
                key={item.id}
                href={item.href}
                className={`flex flex-col items-center justify-center p-2 rounded-2xl transition-all duration-300 group relative ${
                  active 
                    ? 'text-royal-gold bg-gradient-to-br from-royal-gold/15 to-royal-gold/5 scale-105 shadow-luxury-sm' 
                    : 'text-graphite hover:text-obsidian-black hover:bg-royal-gold/8 hover:scale-105'
                }`}
                aria-label={item.label}
              >
                <Icon 
                  size={18} 
                  className={`transition-all duration-300 ${
                    active 
                      ? 'scale-110 drop-shadow-sm' 
                      : 'group-hover:scale-110 group-hover:drop-shadow-sm'
                  }`}
                />
                <span className={`text-xs font-medium mt-0.5 transition-all duration-300 ${
                  active 
                    ? 'text-royal-gold font-semibold' 
                    : 'text-graphite group-hover:text-obsidian-black group-hover:font-medium'
                }`}>
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* ===== FLOATING WISHLIST & CART BUTTONS ===== */}
      <div className="fixed bottom-20 right-3 z-40 flex flex-col space-y-2 lg:hidden">
        
        {/* Wishlist Button */}
        <a href="/wishlist" className="p-3 bg-gradient-to-br from-royal-gold/95 to-royal-gold backdrop-blur-sm text-obsidian-black rounded-2xl shadow-luxury-lg hover:shadow-gold-glow transition-all duration-300 hover:scale-110 group relative">
          <Heart size={18} className="group-hover:scale-110 transition-transform duration-200" />
          <span className="absolute -top-1 -right-1 bg-obsidian-black text-pearl-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-semibold animate-pulse">
            0
          </span>
        </a>

        {/* Cart Button */}
        <a href="/cart" className="p-3 bg-gradient-to-br from-obsidian-black/95 to-obsidian-black backdrop-blur-sm text-pearl-white rounded-2xl shadow-luxury-lg hover:shadow-luxury transition-all duration-300 hover:scale-110 group relative">
          <ShoppingBag size={18} className="group-hover:scale-110 transition-transform duration-200" />
          <span className="absolute -top-1 -right-1 bg-royal-gold text-obsidian-black text-xs rounded-full h-4 w-4 flex items-center justify-center font-semibold animate-pulse">
            0
          </span>
        </a>
      </div>

      {/* ===== BOTTOM PADDING FOR MOBILE NAV ===== */}
      <div className="h-20 lg:hidden" />
    </>
  );
}
