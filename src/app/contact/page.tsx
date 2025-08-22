'use client';

import { useState } from 'react';

const ContactPage = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    const formData = new FormData(e.currentTarget);
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      setStatus('Message sent successfully!');
      (e.target as HTMLFormElement).reset();
    } else {
      const data = await response.json();
      setStatus(data.error || 'Failed to send message.');
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-primary mb-12 text-center">Get In Touch</h1>
      <div className="max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-foreground">Name</label>
            <input type="text" id="name" name="name" required className="mt-1 block w-full bg-background/50 border border-white/20 rounded-md p-3 focus:ring-primary focus:border-primary" />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-foreground">Email</label>
            <input type="email" id="email" name="email" required className="mt-1 block w-full bg-background/50 border border-white/20 rounded-md p-3 focus:ring-primary focus:border-primary" />
          </div>
          <div>
            <label htmlFor="subject" className="block text-lg font-medium text-foreground">Subject</label>
            <input type="text" id="subject" name="subject" required className="mt-1 block w-full bg-background/50 border border-white/20 rounded-md p-3 focus:ring-primary focus:border-primary" />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-foreground">Message</label>
            <textarea id="message" name="message" rows={5} required className="mt-1 block w-full bg-background/50 border border-white/20 rounded-md p-3 focus:ring-primary focus:border-primary"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-primary text-background font-bold py-3 px-8 rounded-full hover:bg-primary-hover transition-colors text-lg">
              Send Message
            </button>
          </div>
        </form>
        {status && <p className="text-center mt-6">{status}</p>}
      </div>
    </div>
  );
};

export default ContactPage;
