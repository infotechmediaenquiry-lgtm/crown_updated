"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProductQuoteForm({ 
  productName = "Medical Disposable", 
  title = "Request a Quote",
  selectOptions = null,
  selectPlaceholder = "Select Option"
}) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productType: '',
    requirements: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          productName: productName,
          productType: formData.productType,
          requirements: formData.requirements,
          message: formData.requirements || `Quote inquiry for ${productName}`
        })
      });

      const data = await response.json();

      if (response.ok) {
        router.push('/thank-you');
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to submit enquiry. Please try again.'
        });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="contact-card">
      <h3 className="contact-title">{title}</h3>

      {submitStatus && (
        <div 
          style={{
            padding: '0.75rem 1rem',
            marginBottom: '1rem',
            borderRadius: '8px',
            fontSize: '0.85rem',
            lineHeight: 1.4,
            backgroundColor: submitStatus.type === 'success' ? '#ECFDF5' : '#FEF2F2',
            color: submitStatus.type === 'success' ? '#065F46' : '#991B1B',
            border: `1px solid ${submitStatus.type === 'success' ? '#A7F3D0' : '#FECACA'}`
          }}
        >
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="form-fields">
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          required
          value={formData.name}
          onChange={handleChange}
          disabled={isSubmitting}
          className="form-input"
        />

        <input
          type="text"
          name="company"
          placeholder="Company / Organisation"
          value={formData.company}
          onChange={handleChange}
          disabled={isSubmitting}
          className="form-input"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          required
          value={formData.email}
          onChange={handleChange}
          disabled={isSubmitting}
          className="form-input"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          disabled={isSubmitting}
          className="form-input"
        />

        {selectOptions && selectOptions.length > 0 && (
          <select
            name="productType"
            value={formData.productType}
            onChange={handleChange}
            disabled={isSubmitting}
            className="form-select"
          >
            <option value="">{selectPlaceholder}</option>
            {selectOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        )}

        <textarea
          name="requirements"
          placeholder="Your Requirements"
          rows={3}
          value={formData.requirements}
          onChange={handleChange}
          disabled={isSubmitting}
          className="form-input"
          style={{ resize: 'none' }}
        />

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="form-btn"
          style={{
            opacity: isSubmitting ? 0.7 : 1,
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Enquiry →'}
        </button>
      </form>
    </div>
  );
}
