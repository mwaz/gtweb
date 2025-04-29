import React from 'react';
import { useTranslation } from 'react-i18next';

function ContactForm({ formspreeEndpoint }) {
  const { t } = useTranslation();

  return (
    <form action={formspreeEndpoint} method="POST" className="contact-form">
      <div className="form-group">
        <label htmlFor="name">{t('name')}:</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">{t('email')}:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone / WhatsApp Mobile Number (Optional):</label>
        <input type="tel" id="phone" name="phone" />
      </div>
      <div className="form-group">
        <label htmlFor="inquiry_type">Inquiry Type:</label>
        <select id="inquiry_type" name="inquiry_type" required>
          <option value="" disabled selected>-- Select Inquiry Type --</option>
          <option value="General Quote">General Quote Request</option>
          <option value="Fresh Herbs">Fresh Herbs Inquiry</option>
          <option value="Dry Herbs">Dry Herbs Inquiry</option>
          <option value="Sustainability">Sustainability Question</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">{t('message')}:</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>
      <button type="submit" className="btn">
        {t('send')}
      </button>
    </form>
  );
}

export default ContactForm;
