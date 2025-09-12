import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Highlights from './Highlights';
import FeaturedGames from './FeaturedGames';
import Newsletter from './Newsletter';
import Testimonials from './Testimonials';
import Socials from './Socials';
import Footer from './Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <Highlights />
      <FeaturedGames />
      <Newsletter />
      <Testimonials />
      <Socials />
      <Footer />
    </div>
  );
};

export default Home;
