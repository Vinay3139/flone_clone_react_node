import React from "react";
import { ChevronDown, Search, User, Heart, ShoppingBag, Repeat } from "lucide-react";

const Navbar = () => {
  return (
    <header className="border-b shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          Flone<span className="text-black">.</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-8">
          <div className="group relative">
            <a href="#" className="flex items-center gap-1 hover:text-gray-600">
              Home <ChevronDown size={16} />
            </a>
          </div>

          <div className="group relative">
            <a href="#" className="flex items-center gap-1 hover:text-gray-600">
              Shop <ChevronDown size={16} />
            </a>
          </div>

          <a href="#" className="hover:text-gray-600">
            Collection
          </a>

          <div className="group relative">
            <a href="#" className="flex items-center gap-1 hover:text-gray-600">
              Pages <ChevronDown size={16} />
            </a>
          </div>

          <a href="#" className="hover:text-gray-600">
            Blog
          </a>

          <a href="#" className="hover:text-gray-600">
            Contact Us
          </a>
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <Search className="hover:text-gray-600 cursor-pointer" />
          <User className="hover:text-gray-600 cursor-pointer" />
          <Repeat className="hover:text-gray-600 cursor-pointer" />
          <div className="relative">
            <Heart className="hover:text-gray-600 cursor-pointer" />
            <span className="absolute top-0 right-0 bg-black text-white text-xs rounded-full px-1">0</span>
          </div>
          <div className="relative">
            <ShoppingBag className="hover:text-gray-600 cursor-pointer" />
            <span className="absolute top-0 right-0 bg-black text-white text-xs rounded-full px-1">1</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;