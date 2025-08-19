import React from 'react';
import { Play, Star, Calendar, Tv } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const AnimeCard = ({ anime, onWatch }) => {
  const handleWatch = () => {
    if (onWatch) {
      onWatch(anime);
    } else {
      // Default behavior - open YouTube
      const youtubeUrl = `https://www.youtube.com/watch?v=${anime.youtubeId}`;
      window.open(youtubeUrl, '_blank');
    }
  };

  return (
    <div className="group relative bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={anime.image}
          alt={anime.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Play Button */}
        <Button
          onClick={handleWatch}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-500/90 hover:bg-pink-600 text-white rounded-full p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100"
        >
          <Play className="h-6 w-6" />
        </Button>

        {/* Rating Badge */}
        <div className="absolute top-3 right-3">
          <Badge className="bg-yellow-500/90 text-black font-semibold">
            <Star className="h-3 w-3 mr-1" />
            {anime.rating}
          </Badge>
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          <Badge 
            className={`${
              anime.status === 'Ongoing' 
                ? 'bg-green-500/90' 
                : anime.status === 'Movie' 
                ? 'bg-blue-500/90' 
                : 'bg-gray-500/90'
            } text-white`}
          >
            {anime.status}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2 group-hover:text-pink-400 transition-colors duration-200">
          {anime.title}
        </h3>
        
        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {anime.year}
          </div>
          <div className="flex items-center">
            <Tv className="h-4 w-4 mr-1" />
            {anime.episodes} ep
          </div>
        </div>

        {/* Genres */}
        <div className="flex flex-wrap gap-1 mb-3">
          {anime.genre?.slice(0, 2).map((genre, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs bg-gray-700 text-gray-300 hover:bg-gray-600"
            >
              {genre}
            </Badge>
          ))}
        </div>

        {/* Watch Button */}
        <Button
          onClick={handleWatch}
          className="w-full bg-pink-500/20 hover:bg-pink-500 text-pink-400 hover:text-white border border-pink-500 transition-all duration-300"
        >
          <Play className="h-4 w-4 mr-2" />
          Watch Now
        </Button>
      </div>
    </div>
  );
};

export default AnimeCard;