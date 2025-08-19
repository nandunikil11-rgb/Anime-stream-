import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AnimeGrid from "./components/AnimeGrid";
import InfoSection from "./components/InfoSection";
import TrendingPosts from "./components/TrendingPosts";
import Footer from "./components/Footer";
import { trendingAnime } from "./data/mock";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <HeroSection />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <div className="flex-1">
            <AnimeGrid title="Trending Now" animes={trendingAnime} />
            <AnimeGrid 
              title="Recently Added" 
              animes={trendingAnime.slice().reverse()} 
            />
            <InfoSection />
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-80">
            <TrendingPosts />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

const Movies = () => {
  const movieAnimes = trendingAnime.filter(anime => anime.status === 'Movie');
  
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Anime Movies</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {movieAnimes.concat(trendingAnime.slice(0, 10)).map((anime, index) => (
            <div key={`${anime.id}-${index}`} className="bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300">
              <div className="aspect-[3/4]">
                <img
                  src={anime.image}
                  alt={anime.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="text-white font-medium text-sm mb-2 line-clamp-2">{anime.title}</h3>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{anime.year}</span>
                  <span>★ {anime.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const Series = () => {
  const seriesAnimes = trendingAnime.filter(anime => anime.status === 'Ongoing');
  
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">TV Series</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {seriesAnimes.concat(trendingAnime.slice(0, 8)).map((anime, index) => (
            <div key={`${anime.id}-${index}`} className="bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300">
              <div className="aspect-[3/4]">
                <img
                  src={anime.image}
                  alt={anime.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="text-white font-medium text-sm mb-2 line-clamp-2">{anime.title}</h3>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{anime.episodes} episodes</span>
                  <span>★ {anime.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/popular" element={<Home />} />
          <Route path="/airing" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;