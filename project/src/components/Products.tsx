import React, { useState, useEffect } from 'react';
import { X, Search, Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "3D Crystal Maze",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?auto=format&fit=crop&q=80",
    description: "Challenge your spatial awareness",
    longDescription: "The 3D Crystal Maze is an advanced puzzle that tests and enhances your spatial reasoning abilities. With multiple layers of transparent pieces, you'll need to navigate through this intricate maze while considering depth and perspective. Perfect for both beginners and experienced puzzle enthusiasts.",
    ageRange: "8-12"
  },
  {
    id: 2,
    name: "Quantum Puzzle Box",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&q=80",
    description: "Multi-dimensional problem solving",
    longDescription: "The Quantum Puzzle Box is a revolutionary concept in puzzle design. This mind-bending challenge features multiple interconnected mechanisms that must be solved in the correct sequence. Each solution reveals new aspects of the puzzle, creating a truly immersive problem-solving experience.",
    ageRange: "12-16"
  },
  {
    id: 3,
    name: "Rainbow Cube Master",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?auto=format&fit=crop&q=80",
    description: "Classic puzzle with a colorful twist",
    longDescription: "The Rainbow Cube Master takes the classic cube puzzle to new heights with vibrant colors and smooth mechanics. Perfect for beginners learning algorithms or speed-cubing enthusiasts looking to improve their times. Includes a companion app with tutorial videos.",
    ageRange: "6-10"
  },
  {
    id: 4,
    name: "Little Explorer's Puzzle Set",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80",
    description: "Educational puzzles for toddlers",
    longDescription: "Designed specifically for young minds, the Little Explorer's Puzzle Set includes 6 wooden puzzles with large, easy-to-grip pieces. Each puzzle features bright colors and familiar shapes to help develop fine motor skills and cognitive abilities in toddlers.",
    ageRange: "3-6"
  },
  
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [selectedAgeRange, setSelectedAgeRange] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<number[]>([]);

  const ageRanges = [
    { value: 'all', label: 'All Ages' },
    { value: '3-6', label: '3-6 years' },
    { value: '6-10', label: '6-10 years' },
    { value: '8-12', label: '8-12 years' },
    { value: '12-16', label: '12-16 years' },
    { value: '14+', label: '14+ years' }
  ];

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const filteredProducts = products.filter(product => {
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesAge = selectedAgeRange === 'all' || product.ageRange === selectedAgeRange;
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPrice && matchesAge && matchesSearch;
  });

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
      document.getElementById('main-content').classList.add('blur-sm', 'transition-all', 'duration-300');
    } else {
      document.body.style.overflow = 'unset';
      document.getElementById('main-content').classList.remove('blur-sm', 'transition-all', 'duration-300');
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.getElementById('main-content').classList.remove('blur-sm', 'transition-all', 'duration-300');
    };
  }, [selectedProduct]);

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Products</h2>
        
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>
        
        {/* Filters */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-sm">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price Range: ${priceRange[0]} - ${priceRange[1]}
            </label>
            <input
              type="range"
              min="0"
              max="50"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Age Range
            </label>
            <select
              value={selectedAgeRange}
              onChange={(e) => setSelectedAgeRange(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            >
              {ageRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                />
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      favorites.includes(product.id)
                        ? 'text-red-600 fill-current'
                        : 'text-gray-400'
                    }`}
                  />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-sm text-gray-500 mb-4">Age: {product.ageRange}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">${product.price}</span>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Popup */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedProduct(null);
            }
          }}
        >
          <div className="bg-white rounded-lg max-w-2xl w-full relative">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute right-4 top-4 p-1 hover:bg-gray-100 rounded-full transition"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="aspect-square relative">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                />
                <button
                  onClick={() => toggleFavorite(selectedProduct.id)}
                  className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      favorites.includes(selectedProduct.id)
                        ? 'text-red-600 fill-current'
                        : 'text-gray-400'
                    }`}
                  />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedProduct.name}</h3>
                <p className="text-gray-600 mb-4">{selectedProduct.longDescription}</p>
                <p className="text-sm text-gray-500 mb-4">Recommended Age: {selectedProduct.ageRange}</p>
                <div className="mt-auto">
                  <div className="text-3xl font-bold text-red-600 mb-4">
                    ${selectedProduct.price}
                  </div>
                  <button className="w-full bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition font-semibold">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;