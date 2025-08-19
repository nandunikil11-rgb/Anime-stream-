import React from 'react';
import AnimeCard from './AnimeCard';
import { trendingAnime } from '../data/mock';

const AnimeGrid = ({ title = "Trending Now", animes = trendingAnime }) => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {animes.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimeGrid;