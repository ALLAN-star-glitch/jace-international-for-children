'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Connect to your external backend API
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-rich-green/10 border border-rich-green/30 rounded-lg p-8 text-center">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="font-serif text-2xl text-deep-blue mb-3">Message Sent!</h3>
        <p className="text-charcoal/80 mb-6 leading-relaxed">
          Thank you for reaching out. Our team will get back to you within 2-3 business days.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-vibrant-pink text-vibrant-pink hover:bg-vibrant-pink hover:bg-opacity-10 focus:ring-vibrant-pink px-6 py-3 text-base"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div>
      <p className="small-caps text-rich-green mb-4">
        SEND A MESSAGE
      </p>
      <h2 className="font-serif text-4xl md:text-5xl text-deep-blue font-light mb-4 leading-tight">
        We&apos;ll Respond Promptly
      </h2>
      <p className="text-charcoal text-lg leading-relaxed mb-8">
        Fill out the form below and our team will get back to you within 2-3 business days.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block small-caps text-soft-gray mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-soft-gray/30 py-3 text-charcoal focus:outline-none focus:border-vibrant-pink transition-colors"
            placeholder="Your name"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block small-caps text-soft-gray mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-soft-gray/30 py-3 text-charcoal focus:outline-none focus:border-vibrant-pink transition-colors"
            placeholder="your@email.com"
            required
          />
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block small-caps text-soft-gray mb-2">
            Subject
          </label>
          <select
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-soft-gray/30 py-3 text-charcoal focus:outline-none focus:border-vibrant-pink transition-colors cursor-pointer"
            required
          >
            <option value="">Select a subject</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Partnership">Partnership Opportunity</option>
            <option value="Donation">Donation Question</option>
            <option value="Volunteering">Volunteering Interest</option>
            <option value="Media">Media Inquiry</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block small-caps text-soft-gray mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-soft-gray/30 py-3 text-charcoal focus:outline-none focus:border-vibrant-pink transition-colors resize-none"
            placeholder="How can we help you?"
            required
          />
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-vibrant-pink text-sm bg-vibrant-pink/10 p-3 rounded">
            {error}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-vibrant-pink text-white hover:bg-opacity-90 focus:ring-vibrant-pink disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 text-base w-full"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>

        {/* Optional Newsletter Checkbox */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="newsletter"
            className="w-4 h-4 accent-rich-green"
          />
          <label htmlFor="newsletter" className="text-charcoal/70 text-sm">
            Sign me up for updates and news from JACE
          </label>
        </div>
      </form>
    </div>
  );
}