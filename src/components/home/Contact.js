'use client';
import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { FaEnvelope, FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState('');

  const headerRef = useScrollReveal();
  const formRef   = useScrollReveal(0.08);

  const handleChange = (e) => {
    if (status === 'error') setStatus('idle');
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      } else {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  };

  return (
    <section className="contact">
      <div className="contact-inner">
        <div className="contact-cols">

          {/* ── LEFT: content ── */}
          <div className="contact-left reveal" ref={headerRef}>
            <p className="contact-eyebrow">GET IN TOUCH</p>
            <h2 className="contact-title">
              Let's Build<br />Something Together
            </h2>
            <p className="contact-sub">
              Whether you want to publish your game, collaborate on a
              project, or have us build one for you — we'd love to hear
              from you.
            </p>

            <a href="mailto:info@greenapplestudio.in" className="contact-email">
              <FaEnvelope className="contact-email-icon" />
              info@greenapplestudio.in
            </a>

            <div className="contact-meta">
              <div className="info-block">
                <span className="info-label">Services</span>
                <p className="info-value">Game Development · Publishing · Contract Build</p>
              </div>
              <div className="info-block">
                <span className="info-label">Response Time</span>
                <p className="info-value">Within 24 hours</p>
              </div>
            </div>

            <div className="info-socials">
              <a href="#" aria-label="Twitter" className="info-social-link"><FaXTwitter /></a>
              <a href="#" aria-label="Instagram" className="info-social-link"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn" className="info-social-link"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* ── RIGHT: form ── */}
          <form
            className="contact-form reveal"
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="c-name">Your Name</label>
                <input
                  id="c-name"
                  name="name"
                  type="text"
                  placeholder="Alex Johnson"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="c-email">Email Address</label>
                <input
                  id="c-email"
                  name="email"
                  type="email"
                  placeholder="alex@studio.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="c-message">Tell Us About Your Project</label>
              <textarea
                id="c-message"
                name="message"
                placeholder="I have a game concept that needs a development team..."
                rows={6}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className={`btn btn-primary contact-submit${status === 'sending' ? ' contact-submit--loading' : ''}`}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message Sent ✓' : 'Send Message'}
            </button>

            {status === 'sent' && (
              <p className="form-success">Thanks! We'll get back to you within 24 hours.</p>
            )}
            {status === 'error' && (
              <p className="form-error">{errorMsg}</p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}
