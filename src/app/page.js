import Header from '@/components/home/Header';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Highlights from '@/components/home/Highlights';
import FeaturedGames from '@/components/home/FeaturedGames';
import Contact from '@/components/home/Contact';
import Footer from '@/components/home/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="games">
          <Highlights />
          <FeaturedGames />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
