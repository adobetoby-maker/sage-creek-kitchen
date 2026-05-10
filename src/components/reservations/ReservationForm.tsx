'use client';

import { useActionState } from 'react';
import { useState } from 'react';
import { submitReservation } from '@/app/reservations/actions';

const DINNER_TIMES = [
  '5:00 PM',
  '6:00 PM',
  '7:00 PM',
  '8:00 PM',
  '9:00 PM',
];

const BRUNCH_TIMES = [
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '1:00 PM',
];

const OCCASIONS = [
  'No Special Occasion',
  'Birthday',
  'Anniversary',
  'Date Night',
  'Business Dinner',
];

type ActionState = {
  error?: string;
  success?: boolean;
  data?: {
    guest_name: string;
    email: string;
    date: string;
    time: string;
    party_size: number;
  };
} | null;

function getTodayString() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function isWeekend(dateString: string): boolean {
  if (!dateString) return false;
  const d = new Date(dateString + 'T00:00:00');
  const day = d.getDay();
  return day === 0 || day === 6; // Sunday or Saturday
}

function formatDateDisplay(dateString: string): string {
  if (!dateString) return '';
  const d = new Date(dateString + 'T00:00:00');
  return d.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

const labelClass = 'block text-[11px] font-lato uppercase tracking-[0.15em] text-charcoal/60 mb-1.5';
const inputClass =
  'w-full border border-charcoal/20 bg-white px-4 py-3 text-charcoal text-sm font-lato font-light rounded-none focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage/30 transition-colors duration-200';

export default function ReservationForm() {
  const [state, formAction, isPending] = useActionState<ActionState, FormData>(
    submitReservation,
    null
  );
  const [selectedDate, setSelectedDate] = useState('');

  const weekend = isWeekend(selectedDate);

  if (state?.success && state.data) {
    return (
      <div className="bg-white p-10 border border-sage/20">
        <div className="text-center">
          <div className="w-14 h-14 rounded-full bg-sage/10 flex items-center justify-center mx-auto mb-6">
            <svg className="w-7 h-7 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <p className="font-cormorant text-2xl italic text-charcoal mb-3">
            We&apos;ll see you {formatDateDisplay(state.data.date)} at {state.data.time}!
          </p>
          <p className="font-lato text-sm text-charcoal/60 mb-1">
            A confirmation has been sent to{' '}
            <span className="text-charcoal font-normal">{state.data.email}</span>.
          </p>
          <p className="font-lato text-sm text-charcoal/60 mt-6">
            Questions? Call us at{' '}
            <a href="tel:+12085550319" className="text-sage hover:underline">
              (208) 555-0319
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="bg-white p-8 md:p-10 border border-charcoal/10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {/* Date */}
        <div>
          <label htmlFor="date" className={labelClass}>
            Date <span className="text-charcoal/40 normal-case tracking-normal">*</span>
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            min={getTodayString()}
            className={inputClass}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        {/* Party Size */}
        <div>
          <label htmlFor="party_size" className={labelClass}>
            Party Size <span className="text-charcoal/40 normal-case tracking-normal">*</span>
          </label>
          <select id="party_size" name="party_size" required className={inputClass}>
            <option value="">Select size</option>
            {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? 'guest' : 'guests'}
              </option>
            ))}
          </select>
        </div>

        {/* Time Slot */}
        <div className="sm:col-span-2">
          <label htmlFor="time" className={labelClass}>
            Time Slot <span className="text-charcoal/40 normal-case tracking-normal">*</span>
          </label>
          <select id="time" name="time" required className={inputClass}>
            <option value="">
              {selectedDate ? 'Select a time' : 'Select a date first'}
            </option>
            {selectedDate && (
              <>
                <optgroup label="Dinner">
                  {DINNER_TIMES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </optgroup>
                {weekend && (
                  <optgroup label="Brunch (Sat &amp; Sun only)">
                    {BRUNCH_TIMES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </optgroup>
                )}
              </>
            )}
          </select>
          {selectedDate && !weekend && (
            <p className="mt-1.5 text-[11px] text-charcoal/40 font-lato">
              Brunch available Saturdays &amp; Sundays only
            </p>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-charcoal/10 mb-6" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {/* Name */}
        <div>
          <label htmlFor="guest_name" className={labelClass}>
            Your Name <span className="text-charcoal/40 normal-case tracking-normal">*</span>
          </label>
          <input
            type="text"
            id="guest_name"
            name="guest_name"
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

        {/* Occasion */}
        <div>
          <label htmlFor="occasion" className={labelClass}>
            Occasion
          </label>
          <select id="occasion" name="occasion" className={inputClass}>
            {OCCASIONS.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Allergies / Special Requests */}
      <div className="mb-8">
        <label htmlFor="special_requests" className={labelClass}>
          Allergies / Special Requests{' '}
          <span className="text-charcoal/40 normal-case tracking-normal">(optional)</span>
        </label>
        <textarea
          id="special_requests"
          name="special_requests"
          rows={3}
          placeholder="Dietary restrictions, accessibility needs, special occasions…"
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Error message */}
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
        {isPending ? 'Reserving…' : 'Request Reservation'}
      </button>

      <p className="mt-4 text-center text-[11px] text-charcoal/40 font-lato">
        You will receive an email confirmation at the address provided.
      </p>
    </form>
  );
}
