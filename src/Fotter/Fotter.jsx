import React, { useState } from 'react';
import "./Fotter.css";
function Fotter() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    feedbackType: 'general',
    feedback: '',
  });
  const [selectedCountry, setSelectedCountry] = useState('United States');
  const countryOptions = ['United States', 'Canada', 'United Kingdom', 'Australia', 'Other'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Form data submitted:', formData);
  };

  // contact sec
  const country = 'United States';
  const telephoneNumber = '+1 123-456-7890';
  const emailAddress = 'info@example.com';

  //subscribe content
  const [email, setEmail] = useState('');

  const subscribeHandler = () => {
 
    console.log(`Subscribed with email: ${email}`);
 
    setEmail('');
  };
  return (
    <div className='footer'>
    <div className='emailSubscriber'>
      <h2>Subscribe to Our Newsletter</h2>
      <div className='subscription-form'>
        <input
          type='email'
          placeholder='Your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={subscribeHandler}>Subscribe</button>
      </div>
    </div>
    <div className='footerbottomContent'>
      <div className='footerleftContent'>
        <div className='topContent'>
          <div className='selectCountry'>
            <label htmlFor="countrySelect">Select Country:</label>
            <select id="countrySelect" value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
              {countryOptions.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className='telephone'>
           
            <a href={`tel:${telephoneNumber}`}>{telephoneNumber}</a>
          </div>
          <div className='email'>
            <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
          </div>
          <div className='linksIcon'>
            <a href="https://www.facebook.com"><img src="icons8-facebook-30.png" alt="Facebook" /></a>
            <a href="https://www.twitter.com"><img src="icons8-twitter-circled-64.png" alt="Twitter" /></a>
            <a href="https://www.instagram.com"><img src="icons8-instagram-50.png" alt="Instagram" /></a>
            <a href="https://www.youtube.com"><img src="icons8-youtube-67.png" alt="YouTube" /></a>
            <a href="https://www.whatsapp.com"><img src="whatsapp-icon.png" alt="WhatsApp" /></a>
          </div>
        </div>
        <div className='bottomContent'>
          <div className='about'>
              <ul>
                <li><a href="#about-us">ABOUT US</a></li>
                <li><a href="#kalyan-news">KALYAN NEWS</a></li>
                <li><a href="#contact-us">CONTACT US</a></li>
                <li><a href="#store-locator">STORE LOCATOR</a></li>
                <li><a href="#media">MEDIA</a></li>
                <li><a href="#kalyan-promise">THE KALYAN PROMISE</a></li>
                <li><a href="#investors">INVESTORS</a></li>
              </ul>
          </div>
          <div className='faq'>
              <ul>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#careers">CAREERS</a></li>
                <li><a href="#be-informed">BE INFORMED</a></li>
                <li><a href="#installment-plan">EASY INSTALLMENT PLAN</a></li>
                <li><a href="#partnering">PARTNERING WITH TRUST</a></li>
                <li><a href="#gold-rate">GOLD RATE TODAY</a></li>
                <li><a href="#online-purchase">ONLINE PURCHASE</a></li>
              </ul>
          </div>
          <div className='blog'>
              <ul>
                <li><a href="#blog">BLOG</a></li>
                <li><a href="#buy-from-us">WHY BUY FROM US</a></li>
                <li><a href="#privacy-policy">PRIVACY POLICY</a></li>
                <li><a href="#terms-and-conditions">TERMS AND CONDITIONS</a></li>
                <li><a href="#sitemap">SITEMAP</a></li>
                <li><a href="#wikipedia">WIKIPEDIA</a></li>
              </ul>
          </div>
        </div>
      </div>
      <div className='footerFeedContent'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full Name:"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone"></label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Mobile No:"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email:"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="feedbackType"></label>
          <select
            id="feedbackType"
            name="feedbackType"
            placeholder="Feedback Type:"
            value={formData.feedbackType}
            onChange={handleChange}
            required
          >
            <option value="general">General Feedback</option>
            <option value="bug">Report a Bug</option>
            <option value="feature">Feature Request</option>
          </select>


          <button type="submit">Submit Feedback</button>
        </form>
      </div>
    </div>
      
    </div>
  );
}

export default Fotter;