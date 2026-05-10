'use client';

import { useActionState } from 'react';
import { submitContactForm, type ContactState } from '@/app/contact/actions';

const labelClass =
  'block text-[11px] font-lato uppercase tracking-[0.15em] text-charcoal/60 mb-1.5';
const inputClass =
  'w-full border border-charcoal/20 bg-white px-4 py-3 text-charcoal text-sm font-lato font-light rounded-none focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage/30 transition-colors duration-200 placeholder:text-charcoal/30';

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState<ContactState, FormData>(
    submitContactForm,
    null
  );

  if (state?.success) {
    return (
      <div className="bg-white border border-sage/20 p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-7 h-7 text-sage"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <p className="font-cormorant text-2xl italic text-charcoal mb-3">Thank you!</p>
        <p className="font-lato font-light text-charcoal/60 text-sm">
          We&apos;ll reply within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="bg-white border border-charcoal/10 p-8 md:p-10 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-charcoal/40 normal-case tracking-normal">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your name"
            autoComplete="name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-charcoal/40 normal-case tracking-normal">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@example.com"
            autoComplete="email"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={labelClass}>
          Subject <span className="text-charcoal/40 normal-case tracking-normal">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          placeholder="How can we help?"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-charcoal/40 normal-case tracking-normal">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Your message…"
          className={`${inputClass} resize-none`}
        />
      </div>

      {state?.error && (
        <div
          role="alert"
          className="px-4 py-3 border border-red-200 bg-red-50 text-red-700 text-sm font-lato"
        >
          {state.error}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-sage text-cream px-8 py-4 text-sm uppercase tracking-widest hover:bg-sage-dark transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed font-lato"
      >
        {isPending ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
