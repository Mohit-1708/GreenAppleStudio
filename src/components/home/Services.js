'use client';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './Services.css';

const services = [
  {
    icon: '🎮',
    title: 'We Create Games',
    tagline: 'Original IP',
    description:
      'From concept to launch, we design and develop original games — imaginative worlds, tight mechanics, and stories players remember long after they put the controller down.',
    cta: 'See Our Games',
    href: '#games',
  },
  {
    icon: '🚀',
    title: 'We Publish Games',
    tagline: 'Get to Market',
    description:
      'Have a game ready to ship? We handle publishing, distribution, marketing, and platform relations so you can stay focused on building great experiences.',
    cta: 'Talk to Us',
    href: '#contact',
    featured: true,
  },
  {
    icon: '⚙️',
    title: 'We Build For You',
    tagline: 'Contract Development',
    description:
      'Got an idea but need a team? Bring us your vision and we\'ll turn it into a fully polished game — end to end, from design doc to gold master.',
    cta: 'Start a Project',
    href: '#contact',
  },
];

export default function Services() {
  const headerRef = useScrollReveal();
  const cardsRef = useScrollReveal(0.08);

  return (
    <section className="services">
      <div className="services-header reveal" ref={headerRef}>
        <p className="services-eyebrow">WHAT WE DO</p>
        <h2 className="services-title">
          One Studio.<br />Three Ways to Help.
        </h2>
        <p className="services-sub">
          Whether you want to play our games, publish your own, or have us build
          something for you — we're your partner.
        </p>
      </div>

      <div className="services-cards stagger reveal" ref={cardsRef}>
        {services.map((s) => (
          <div
            key={s.title}
            className={`service-card${s.featured ? ' service-card--featured' : ''}`}
          >
            <span className="service-icon">{s.icon}</span>
            <span className="service-tagline">{s.tagline}</span>
            <h3 className="service-name">{s.title}</h3>
            <p className="service-desc">{s.description}</p>
            <a href={s.href} className={`service-cta${s.featured ? ' service-cta--featured' : ''}`}>
              {s.cta} →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
