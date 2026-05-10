'use client';

import { useActionState } from 'react';
import { submitEventInquiry } from '@/app/private-events/actions';

type ActionState = {
  error?: string;
  success?: boolean;
} | null;

const labelClass =
  'block text-[11px] font-lato uppercase tracking-[0.15em] text-charcoal/60 mb-1.5';
const inputClass =
  'w-full border border-charcoal/20 bg-white px-4 py-3 text-charcoal text-sm font-lato font-light rounded-none focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage/30 transition-colors duration-200';

export default function EventsInquiryForm() {
  const [state, formAction, isPending] = useActionState<ActionState, FormData>(
    submitEventInquiry,
    null
  );

  if (state?.success) {
    return (
      <div className="bg-white border border-sage/20 p-10">
        <div className="text-center">
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
          <h3 className="font-cormorant text-2xl italic font-semibold text-charcoal mb-3">
            Thank You!
          </h3>
          <p className="font-lato font-light text-charcoal/70 text-sm leading-relaxed">
            {"We'll be in touch within 1 business day."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="bg-white border border-charcoal/10 p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        {/* Event Type */}
        <div className="sm:col-span-2">
          <label htmlFor="event_type" className={labelClass}>
            Event Type <span className="text-charcoal/40 normal-case tracking-normal">*</span>
          </label>
          <select id="event_type" name="event_type" required className={inputClass}>
            <option value="">Select event type</option>
            <option value="Corporate Dinner">Corporate Dinner</option>
            <option value="Wedding Rehearsal">Wedding Rehearsal</option>
            <option value="Birthday Celebration">Birthday Celebration</option>
            <option value="Wine Dinner">Wine Dinner</option>
            <option value="Full Buyout">Full Buyout</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Event Date */}
        <div>
          <label htmlFor="event_date" className={labelClass}>
            Event Date <span className="text-charcoal/40 normal-case tracking-normal">*</span>
          </label>
          <input
            type="date"
            id="event_date"
            name="event_date"
            required
            className={inputClass}
          />
        </div>

        {/* Guest Count */}
        <div>
          <label htmlFor="guest_count" className={labelClass}>
            Guest Count <span className="text-charcoal/40 normal-case tracking-normal">*</span>
          </label>
          <input
            type="number"
            id="guest_count"
            name="guest_count"
            required
            min={1}
            max={120}
            placeholder="e.g. 25"
            className={inputClass}
          />
        </div>

        {/* Budget Range */}
        <div className="sm:col-span-2">
          <label htmlFor="budget_range" className={labelClass}>
            Budget Range
          </label>
          <select id="budget_range" name="budget_range" className={inputClass}>
            <option value="">Select a range (optional)</option>
            <option value="Under $1,000">Under $1,000</option>
            <option value="$1,000–$2,500">$1,000–$2,500</option>
            <option value="$2,500–$5,000">$2,500–$5,000</option>
            <option value="$5,000–$10,000">$5,000–$10,000</option>
            <option value="$10,000+">$10,000+</option>
          </select>
        </div>

        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClass}>
            Your Name <span className="text-charcoal/40 normal-case tracking-normal">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Full name"
            autoComplete="name"
            className={inputClass}
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-charcoal/40 normal-case tracking-normal">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="(208) 555-0100"
            autoComplete="tel"
            className={inputClass}
          />
        </div>

        {/* Email */}
        <div className="sm:col-span-2">
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

      {/* Description */}
      <div className="mb-6">
        <label htmlFor="description" className={labelClass}>
          Event Description{' '}
          <span className="text-charcoal/40 normal-case tracking-normal">(optional)</span>
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          placeholder="Tell us about your event — any special requests, dietary needs, themes, or questions…"
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Error */}
      {state?.error && (
        <div
          role="alert"
          className="mb-5 px-4 py-3 border border-red-200 bg-red-50 text-red-700 text-sm font-lato"
        >
          {state.error}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-sage text-cream px-8 py-4 text-sm uppercase tracking-widest hover:bg-sage-dark transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed font-lato"
      >
        {isPending ? 'Submitting…' : 'Submit Inquiry'}
      </button>

      <p className="mt-4 text-center text-[11px] text-charcoal/40 font-lato">
        {"We'll respond within 1 business day. For urgent matters, call (208) 555-0319."}
      </p>
    </form>
  );
}
