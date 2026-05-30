'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import user1 from '../../assets/images/user1.png';
import user2 from '../../assets/images/user2.png';
import user3 from '../../assets/images/user3.png';
import './Testimonials.css';

const testimonials = [
  {
    stars: 5,
    text: "GreenApple Studio brought our game concept to life in a way we never imagined possible. Their team was creative, communicative, and delivered a polished product that our players absolutely love.",
    name: 'Sofi Michell',
    role: 'Indie Game Developer',
    avatar: user1,
  },
  {
    stars: 4,
    text: "We partnered with GreenApple to publish our first title and couldn't be happier. They handled everything from store listings to marketing, and the launch exceeded all our expectations.",
    name: 'Hesham Al-Rashid',
    role: 'Game Studio Founder',
    avatar: user2,
  },
  {
    stars: 5,
    text: "The contract development team at GreenApple Studio is top-tier. They understood our vision immediately and executed flawlessly. We'll definitely be working with them again on our next project.",
    name: 'Lena Khanoon',
    role: 'Product Manager',
    avatar: user3,
  },
];

export default function Testimonials() {
  const titleRef = useScrollReveal();
  const cardsRef = useScrollReveal(0.08);

  return (
    <section className="testimonials">
      <h2 className="testimonials-title reveal" ref={titleRef}>
        Loved By Game Developers
      </h2>

      <div className="testimonial-cards stagger reveal" ref={cardsRef}>
        {testimonials.map((t) => (
          <div className="testimonial-card" key={t.name}>
            <div className="stars">
              {'★'.repeat(t.stars)}{'☆'.repeat(5 - t.stars)}
            </div>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-footer">
              <img
                src={t.avatar.src || t.avatar}
                alt={t.name}
                className="avatar"
              />
              <div>
                <h4>{t.name}</h4>
                <span>{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
