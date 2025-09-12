import React from "react";
import "./Testimonials.css";
import user1 from "../assets/images/user1.png";
import user2 from "../assets/images/user2.png";
import user3 from "../assets/images/user3.png";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">Loved By Thousand Gamers</h2>

      <div className="testimonial-cards">
        {/* Card 1 */}
        <div className="testimonial-card">
          <div className="stars">★ ★ ★ ★ ★</div>
          <p className="testimonial-text">
            I Just Returned From The Most Amazing Trip To Europe, All Thanks To
            This Travel Agency! From The Moment I Contacted Them, They Were
            Incredibly Helpful And Made Sure To Create An Itinerary That Suited
            My Interests And Budget. I Can’t Wait To Book My Next Adventure With
            Them!
          </p>
          <div className="testimonial-footer">
            <img src={user1} alt="Sofi" className="avatar" />
            <div>
              <h4>Sofi Michell</h4>
              <span>Product Designer</span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="testimonial-card">
          <div className="stars">★ ★ ★ ★ ☆</div>
          <p className="testimonial-text">
            I Just Returned From The Most Amazing Trip To Europe, All Thanks To
            This Travel Agency! From The Moment I Contacted Them, They Were
            Incredibly Helpful And Made Sure To Create An Itinerary That Suited
            My Interests And Budget. I Can’t Wait To Book My Next Adventure With
            Them!
          </p>
          <div className="testimonial-footer">
            <img src={user2} alt="Hesham" className="avatar" />
            <div>
              <h4>Hesham</h4>
              <span>Product Designer</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="testimonial-card">
          <div className="stars">★ ★ ★ ☆ ☆</div>
          <p className="testimonial-text">
            I Just Returned From The Most Amazing Trip To Europe, All Thanks To
            This Travel Agency! From The Moment I Contacted Them, They Were
            Incredibly Helpful And Made Sure To Create An Itinerary That Suited
            My Interests And Budget. I Can’t Wait To Book My Next Adventure With
            Them!
          </p>
          <div className="testimonial-footer">
            <img src={user3} alt="Khanoon" className="avatar" />
            <div>
              <h4>Khanoon</h4>
              <span>Product Designer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
