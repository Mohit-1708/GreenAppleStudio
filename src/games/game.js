import React from 'react';
import Header from '../home/Header';   
import Footer from '../home/Footer';  
import Newsletter from '../home/Newsletter';
import Socials from '../home/Socials';
import NewGames from './FeaturedGames';
import Card from './FeaturedCard';


const Games = () => {
  return (
    <div className="home">
      <Header />
      <Card/>
      <NewGames/>
      <Newsletter/>
      <Socials/>
      <Footer />
    </div>
  );
};

export default Games;
