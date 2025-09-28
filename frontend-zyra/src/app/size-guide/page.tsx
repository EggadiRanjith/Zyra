'use client';

import { ArrowLeft, Ruler, Download, HelpCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function SizeGuidePage() {
  const router = useRouter();

  const sizeGuides = [
    {
      category: 'Clothing',
      items: [
        {
          name: 'Dresses',
          sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
          measurements: {
            'XS': { bust: '32"', waist: '24"', hips: '34"', length: '36"' },
            'S': { bust: '34"', waist: '26"', hips: '36"', length: '37"' },
            'M': { bust: '36"', waist: '28"', hips: '38"', length: '38"' },
            'L': { bust: '38"', waist: '30"', hips: '40"', length: '39"' },
            'XL': { bust: '40"', waist: '32"', hips: '42"', length: '40"' },
            'XXL': { bust: '42"', waist: '34"', hips: '44"', length: '41"' }
          }
        },
        {
          name: 'Tops & Blouses',
          sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
          measurements: {
            'XS': { bust: '32"', waist: '24"', shoulders: '14"', length: '24"' },
            'S': { bust: '34"', waist: '26"', shoulders: '14.5"', length: '25"' },
            'M': { bust: '36"', waist: '28"', shoulders: '15"', length: '26"' },
            'L': { bust: '38"', waist: '30"', shoulders: '15.5"', length: '27"' },
            'XL': { bust: '40"', waist: '32"', shoulders: '16"', length: '28"' },
            'XXL': { bust: '42"', waist: '34"', shoulders: '16.5"', length: '29"' }
          }
        },
        {
          name: 'Pants & Trousers',
          sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
          measurements: {
            'XS': { waist: '24"', hips: '34"', inseam: '30"', length: '40"' },
            'S': { waist: '26"', hips: '36"', inseam: '30.5"', length: '41"' },
            'M': { waist: '28"', hips: '38"', inseam: '31"', length: '42"' },
            'L': { waist: '30"', hips: '40"', inseam: '31.5"', length: '43"' },
            'XL': { waist: '32"', hips: '42"', inseam: '32"', length: '44"' },
            'XXL': { waist: '34"', hips: '44"', inseam: '32.5"', length: '45"' }
          }
        }
      ]
    },
    {
      category: 'Shoes',
      items: [
        {
          name: 'Heels',
          sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11'],
          measurements: {
            '5': { length: '8.5"', width: '3.2"' },
            '5.5': { length: '8.7"', width: '3.3"' },
            '6': { length: '8.9"', width: '3.4"' },
            '6.5': { length: '9.1"', width: '3.5"' },
            '7': { length: '9.3"', width: '3.6"' },
            '7.5': { length: '9.5"', width: '3.7"' },
            '8': { length: '9.7"', width: '3.8"' },
            '8.5': { length: '9.9"', width: '3.9"' },
            '9': { length: '10.1"', width: '4.0"' },
            '9.5': { length: '10.3"', width: '4.1"' },
            '10': { length: '10.5"', width: '4.2"' },
            '10.5': { length: '10.7"', width: '4.3"' },
            '11': { length: '10.9"', width: '4.4"' }
          }
        },
        {
          name: 'Flats',
          sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11'],
          measurements: {
            '5': { length: '8.5"', width: '3.2"' },
            '5.5': { length: '8.7"', width: '3.3"' },
            '6': { length: '8.9"', width: '3.4"' },
            '6.5': { length: '9.1"', width: '3.5"' },
            '7': { length: '9.3"', width: '3.6"' },
            '7.5': { length: '9.5"', width: '3.7"' },
            '8': { length: '9.7"', width: '3.8"' },
            '8.5': { length: '9.9"', width: '3.9"' },
            '9': { length: '10.1"', width: '4.0"' },
            '9.5': { length: '10.3"', width: '4.1"' },
            '10': { length: '10.5"', width: '4.2"' },
            '10.5': { length: '10.7"', width: '4.3"' },
            '11': { length: '10.9"', width: '4.4"' }
          }
        }
      ]
    },
    {
      category: 'Accessories',
      items: [
        {
          name: 'Handbags',
          sizes: ['Small', 'Medium', 'Large'],
          measurements: {
            'Small': { length: '8"', height: '6"', width: '3"', strap: '24"' },
            'Medium': { length: '12"', height: '8"', width: '4"', strap: '26"' },
            'Large': { length: '16"', height: '10"', width: '5"', strap: '28"' }
          }
        },
        {
          name: 'Watches',
          sizes: ['Small', 'Medium', 'Large'],
          measurements: {
            'Small': { case: '32mm', band: '6.5"', thickness: '8mm' },
            'Medium': { case: '36mm', band: '7"', thickness: '9mm' },
            'Large': { case: '40mm', band: '7.5"', thickness: '10mm' }
          }
        }
      ]
    }
  ];

  const tips = [
    {
      icon: Ruler,
      title: 'How to Measure',
      description: 'Use a flexible measuring tape and measure over your undergarments. Keep the tape snug but not tight.'
    },
    {
      icon: HelpCircle,
      title: 'Size Conversion',
      description: 'Our sizes are based on US measurements. For international sizing, refer to our conversion chart.'
    },
    {
      icon: Download,
      title: 'Printable Guide',
      description: 'Download our printable size guide for easy reference when shopping offline.'
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
          <h1 className="text-lg font-semibold text-obsidian-black">Size Guide</h1>
          <div className="w-8"></div>
        </div>
      </div>

      {/* ===== HERO SECTION ===== */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-light text-obsidian-black mb-6">
            Size Guide
          </h2>
          <div className="w-24 h-px bg-royal-gold mx-auto mb-8"></div>
          <p className="text-xl text-graphite leading-relaxed max-w-2xl mx-auto">
            Find your perfect fit with our comprehensive size guide. 
            We've made it easy to choose the right size for every item.
          </p>
        </div>
      </div>

      {/* ===== TIPS SECTION ===== */}
      <div className="px-4 py-16 sm:px-6 lg:px-8 bg-champagne/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <div key={index} className="text-center p-6 bg-pearl-white rounded-2xl shadow-luxury-sm">
                  <div className="w-16 h-16 bg-royal-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon size={32} className="text-royal-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-obsidian-black mb-4">
                    {tip.title}
                  </h3>
                  <p className="text-graphite leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ===== SIZE GUIDES ===== */}
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {sizeGuides.map((guide, guideIndex) => (
            <div key={guideIndex} className="mb-16">
              <h3 className="text-3xl font-display font-light text-obsidian-black mb-8 text-center">
                {guide.category}
              </h3>
              
              <div className="space-y-12">
                {guide.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-pearl-white border border-champagne/30 rounded-2xl p-6 shadow-luxury-sm">
                    <h4 className="text-2xl font-semibold text-obsidian-black mb-6 text-center">
                      {item.name}
                    </h4>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-champagne/30">
                            <th className="text-left py-4 px-2 font-medium text-obsidian-black">Size</th>
                            {Object.keys(item.measurements[item.sizes[0]]).map(measurement => (
                              <th key={measurement} className="text-center py-4 px-2 font-medium text-obsidian-black capitalize">
                                {measurement}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {item.sizes.map((size, sizeIndex) => (
                            <tr key={sizeIndex} className="border-b border-champagne/20 hover:bg-champagne/5 transition-colors duration-200">
                              <td className="py-4 px-2 font-medium text-obsidian-black">{size}</td>
                              {Object.values(item.measurements[size]).map((value, valueIndex) => (
                                <td key={valueIndex} className="py-4 px-2 text-center text-graphite">
                                  {value}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== MEASUREMENT GUIDE ===== */}
      <div className="px-4 py-16 sm:px-6 lg:px-8 bg-champagne/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-light text-obsidian-black mb-6">
              How to Measure
            </h3>
            <p className="text-lg text-graphite">
              Follow these simple steps to get accurate measurements for the perfect fit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-pearl-white rounded-xl p-6 shadow-luxury-sm">
                <h4 className="text-xl font-semibold text-obsidian-black mb-4 flex items-center space-x-2">
                  <span className="w-8 h-8 bg-royal-gold text-obsidian-black rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <span>Bust Measurement</span>
                </h4>
                <p className="text-graphite leading-relaxed">
                  Measure around the fullest part of your bust, keeping the tape measure parallel to the ground.
                </p>
              </div>

              <div className="bg-pearl-white rounded-xl p-6 shadow-luxury-sm">
                <h4 className="text-xl font-semibold text-obsidian-black mb-4 flex items-center space-x-2">
                  <span className="w-8 h-8 bg-royal-gold text-obsidian-black rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <span>Waist Measurement</span>
                </h4>
                <p className="text-graphite leading-relaxed">
                  Measure around the narrowest part of your waist, usually about 1 inch above your belly button.
                </p>
              </div>

              <div className="bg-pearl-white rounded-xl p-6 shadow-luxury-sm">
                <h4 className="text-xl font-semibold text-obsidian-black mb-4 flex items-center space-x-2">
                  <span className="w-8 h-8 bg-royal-gold text-obsidian-black rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <span>Hip Measurement</span>
                </h4>
                <p className="text-graphite leading-relaxed">
                  Measure around the fullest part of your hips, keeping the tape measure parallel to the ground.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-pearl-white rounded-xl p-6 shadow-luxury-sm">
                <h4 className="text-xl font-semibold text-obsidian-black mb-4 flex items-center space-x-2">
                  <span className="w-8 h-8 bg-royal-gold text-obsidian-black rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  <span>Inseam Measurement</span>
                </h4>
                <p className="text-graphite leading-relaxed">
                  Measure from the crotch to the bottom of the ankle bone for the most accurate inseam length.
                </p>
              </div>

              <div className="bg-pearl-white rounded-xl p-6 shadow-luxury-sm">
                <h4 className="text-xl font-semibold text-obsidian-black mb-4 flex items-center space-x-2">
                  <span className="w-8 h-8 bg-royal-gold text-obsidian-black rounded-full flex items-center justify-center text-sm font-bold">5</span>
                  <span>Shoulder Width</span>
                </h4>
                <p className="text-graphite leading-relaxed">
                  Measure from the tip of one shoulder to the tip of the other shoulder across your back.
                </p>
              </div>

              <div className="bg-pearl-white rounded-xl p-6 shadow-luxury-sm">
                <h4 className="text-xl font-semibold text-obsidian-black mb-4 flex items-center space-x-2">
                  <span className="w-8 h-8 bg-royal-gold text-obsidian-black rounded-full flex items-center justify-center text-sm font-bold">6</span>
                  <span>Foot Length</span>
                </h4>
                <p className="text-graphite leading-relaxed">
                  Measure from the back of your heel to the tip of your longest toe while standing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CTA SECTION ===== */}
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-display font-light text-obsidian-black mb-6">
            Still Need Help?
          </h3>
          <p className="text-lg text-graphite mb-8 max-w-2xl mx-auto">
            Our personal styling team is here to help you find the perfect fit. 
            Book a complimentary consultation with our experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push('/contact')}
              className="px-8 py-4 bg-obsidian-black text-pearl-white rounded-xl font-medium hover:bg-royal-gold hover:text-obsidian-black transition-all duration-300"
            >
              Contact Our Stylists
            </button>
            <button
              onClick={() => router.push('/shop')}
              className="px-8 py-4 border border-obsidian-black text-obsidian-black rounded-xl font-medium hover:bg-obsidian-black hover:text-pearl-white transition-all duration-300"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
