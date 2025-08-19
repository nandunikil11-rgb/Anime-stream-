import React from 'react';
import { MessageCircle, Clock, Hash } from 'lucide-react';
import { Badge } from './ui/badge';
import { trendingPosts } from '../data/mock';

const TrendingPosts = () => {
  return (
    <div className="bg-gray-800/50 rounded-xl p-6">
      <h2 className="text-xl font-bold text-white mb-6 flex items-center">
        <Hash className="h-5 w-5 mr-2 text-pink-400" />
        Trending Posts
      </h2>
      
      <div className="space-y-4">
        {trendingPosts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-700/30 rounded-lg p-4 hover:bg-gray-700/50 transition-colors duration-200 cursor-pointer"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-2">
              <Badge variant="secondary" className="bg-gray-600 text-gray-300 text-xs">
                #{post.category}
              </Badge>
              <div className="flex items-center text-xs text-gray-400">
                <Clock className="h-3 w-3 mr-1" />
                {post.timeAgo}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-white font-medium mb-2 line-clamp-2 hover:text-pink-400 transition-colors duration-200">
              {post.title}
            </h3>

            {/* Content Preview */}
            <p className="text-gray-400 text-sm mb-3 line-clamp-2">
              {post.content}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>by {post.author}</span>
              <div className="flex items-center">
                <MessageCircle className="h-3 w-3 mr-1" />
                {post.replies}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingPosts;