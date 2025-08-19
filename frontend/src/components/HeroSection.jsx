import React, { useState } from 'react';
import { Play, Search, Share2, Twitter, Facebook } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { featuredAnime, topSearches } from '../data/mock';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleWatchAnime = () => {
    // This would open the video player with YouTube integration
    const youtubeUrl = `https://www.youtube.com/watch?v=${featuredAnime.youtubeId || 'dQw4w9WgXcQ'}`;
    window.open(youtubeUrl, '_blank');
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Mock search functionality
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <section className="relative min-h-[70vh] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${featuredAnime.image})`
        }}
      />
      
      <div className="relative container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center min-h-[70vh]">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left lg:pr-8 z-10">
          {/* Logo */}
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8">
            h!<span className="text-pink-400">anime</span>
          </h1>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto lg:mx-0 mb-6">
            <Input
              type="text"
              placeholder="Search anime..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-gray-300 pr-12 h-12 text-lg"
            />
            <Button
              onClick={handleSearch}
              className="absolute right-2 top-2 h-8 w-8 bg-pink-500 hover:bg-pink-600 p-0"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>

          {/* Top Searches */}
          <div className="mb-8">
            <p className="text-gray-300 mb-3">Top search:</p>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {topSearches.slice(0, 6).map((search, index) => (
                <button
                  key={index}
                  className="text-sm text-gray-300 hover:text-pink-400 transition-colors duration-200"
                  onClick={() => setSearchQuery(search)}
                >
                  {search}{index < 5 ? ',' : ''}
                </button>
              ))}
            </div>
          </div>

          {/* Watch Button */}
          <Button
            onClick={handleWatchAnime}
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 mb-8"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch anime
          </Button>

          {/* Social Share */}
          <div className="flex items-center justify-center lg:justify-start space-x-4">
            <span className="text-gray-300 text-sm">Share HiAnime to your friends</span>
            <span className="text-gray-500 text-sm">661k</span>
            <div className="flex space-x-2">
              <Button size="sm" className="bg-blue-500 hover:bg-blue-600 p-2">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 p-2">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" className="bg-blue-800 hover:bg-blue-900 p-2">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" className="bg-orange-500 hover:bg-orange-600 p-2">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button size="sm" className="bg-green-500 hover:bg-green-600 p-2">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Right Content - Featured Anime Artwork */}
        <div className="flex-1 mt-8 lg:mt-0 max-w-lg mx-auto lg:max-w-none">
          <div className="relative">
            <img
              src={featuredAnime.image}
              alt={featuredAnime.title}
              className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold mb-2">{featuredAnime.title}</h3>
              <div className="flex items-center space-x-2 text-sm">
                <span className="bg-pink-500 px-2 py-1 rounded">★ {featuredAnime.rating}</span>
                <span>{featuredAnime.year}</span>
                <span>{featuredAnime.status}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;