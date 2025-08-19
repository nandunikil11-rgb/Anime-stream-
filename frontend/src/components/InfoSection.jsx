import React from 'react';
import { Shield, Globe, Star } from 'lucide-react';

const InfoSection = () => {
  return (
    <section className="py-16 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8">
            HiAnime.to - The best site to watch anime online for Free
          </h2>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Do you know that according to Google, the monthly search volume for anime related topics is up to 
              over 1 Billion times? Anime is famous worldwide and it is no wonder we've seen a sharp rise in the 
              number of free anime streaming sites.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              Just like free online movie streaming sites, anime watching sites are not created equally, some are 
              better than the rest, so we've decided to build HiAnime.to to be one of the best free anime streaming 
              site for all anime fans on the world.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-pink-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-pink-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">1/ What is HiAnime.to?</h3>
                <p className="text-gray-400 text-sm">
                  HiAnime.to is a free site to watch anime and you can even download subbed or dubbed anime in ultra 
                  HD quality without any registration or payment.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-pink-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-pink-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">2/ Is HiAnime.to safe?</h3>
                <p className="text-gray-400 text-sm">
                  Yes we are, we do have only one Ads to cover the server cost and we keep scanning the ads 24/7 to 
                  make sure all are clean.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-pink-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Star className="h-8 w-8 text-pink-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">3/ So what make HiAnime.to the best?</h3>
                <p className="text-gray-400 text-sm">
                  Before building HiAnime.to, we've checked many other free anime sites, and learnt from them. We 
                  only keep the good things and remove all the bad things from all the competitors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;