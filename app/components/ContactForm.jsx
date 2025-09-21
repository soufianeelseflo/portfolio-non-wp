'use client';
import { useState } from 'react';

const initialStatus = { state: 'idle', message: '' };

export default function ContactForm() {
  const [status, setStatus] = useState(initialStatus);
  const [count, setCount] = useState(0);

  async function onSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get('name')?.toString().trim() ?? '',
      email: formData.get('email')?.toString().trim() ?? '',
      message: formData.get('message')?.toString().trim() ?? ''
    };

    setStatus({ state: 'loading', message: 'Sending your message…' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result?.error || 'Something went wrong. Please try again.');
      }
      setStatus({ state: 'success', message: 'Thanks — I’ll reply within one working day.' });
      form.reset();
      setCount(0);
    } catch (error) {
      setStatus({ state: 'error', message: error.message });
    }
  }

  const isLoading = status.state === 'loading';

  return (
    <form onSubmit={onSubmit} className="card p-6 space-y-4" noValidate>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Name
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={120}
            aria-required="true"
            aria-invalid={status.state === 'error'}
            className="mt-1 w-full rounded-xl border border-gray-300/70 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:border-gray-700/70 dark:bg-gray-900"
          />
        </label>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            maxLength={160}
            aria-required="true"
            className="mt-1 w-full rounded-xl border border-gray-300/70 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:border-gray-700/70 dark:bg-gray-900"
          />
        </label>
      </div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Message
        <textarea
          name="message"
          rows={6}
          minLength={12}
          maxLength={1200}
          required
          aria-required="true"
          aria-describedby="contact-message-count"
          onChange={(event) => setCount(event.target.value.length)}
          className="mt-1 w-full rounded-xl border border-gray-300/70 bg-white px-3 py-2 text-sm shadow-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:border-gray-700/70 dark:bg-gray-900"
        />
        <span id="contact-message-count" className="text-xs text-gray-500">
          {count} / 1200 characters
        </span>
      </label>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
        <button className="btn" type="submit" disabled={isLoading}>
          {isLoading ? 'Sending…' : 'Send message'}
        </button>
        {status.state !== 'idle' && (
          <span
            role="status"
            aria-live="polite"
            className={`text-sm ${status.state === 'success' ? 'text-green-600' : status.state === 'error' ? 'text-red-600' : 'text-gray-500'}`}
          >
            {status.message}
          </span>
        )}
      </div>
    </form>
  );
}
