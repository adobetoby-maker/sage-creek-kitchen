'use client';

import { useActionState, useState } from 'react';
import { submitGiftCardRequest, type GiftCardState } from '@/app/gift-cards/actions';

const DENOMINATIONS = [25, 50, 75, 100, 200];

const labelClass =
  'block text-[11px] font-lato uppercase tracking-[0.15em] text-charcoal/60 mb-1.5';
const inputClass =
  'w-full border border-charcoal/20 bg-white px-4 py-3 text-charcoal text-sm font-lato font-light rounded-none focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage/30 transition-colors duration-200 placeholder:text-charcoal/30';

export default function GiftCardForm() {
  const [state, formAction, isPending] = useActionState<GiftCardState, FormData>(
    submitGiftCardRequest,
    null
  );
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom' | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [sendBy, setSendBy] = useState<'email' | 'mail'>('email');

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
        <p className="font-cormorant text-2xl italic text-charcoal mb-3">
          Gift card requested!
        </p>
        <p className="font-lato font-light text-charcoal/60 text-sm leading-relaxed">
          We&apos;ll process within 1 business day and send confirmation to your email.
        </p>
      </div>
    );
  }

  const denominationValue =
    selectedAmount === 'custom' ? customAmount : selectedAmount?.toString() ?? '';

  return (
    <div className="space-y-8">
      {/* Denomination Selector */}
      <div>
        <p className={labelClass}>Select Amount</p>
        <div className="flex flex-wrap gap-3 mb-4">
          {DENOMINATIONS.map((amt) => (
            <button
              key={amt}
              type="button"
              onClick={() => {
                setSelectedAmount(amt);
                setCustomAmount('');
              }}
              className={`px-6 py-3 text-sm font-lato uppercase tracking-widest border transition-colors duration-200 ${
                selectedAmount === amt
                  ? 'bg-sage text-cream border-sage'
                  : 'bg-white text-charcoal border-charcoal/20 hover:border-sage hover:text-sage'
              }`}
            >
              ${amt}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setSelectedAmount('custom')}
            className={`px-6 py-3 text-sm font-lato uppercase tracking-widest border transition-colors duration-200 ${
              selectedAmount === 'custom'
                ? 'bg-sage text-cream border-sage'
                : 'bg-white text-charcoal border-charcoal/20 hover:border-sage hover:text-sage'
            }`}
          >
            Custom
          </button>
        </div>
        {selectedAmount === 'custom' && (
          <div className="mt-3">
            <label htmlFor="custom-amount" className={labelClass}>
              Enter Amount ($)
            </label>
            <input
              type="number"
              id="custom-amount"
              min="5"
              step="1"
              placeholder="Enter amount"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className={inputClass}
            />
          </div>
        )}
      </div>

      {/* Form */}
      <form action={formAction} className="space-y-6">
        {/* Hidden denomination */}
        <input type="hidden" name="denomination" value={denominationValue} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="purchaser_name" className={labelClass}>
              Your Name <span className="text-charcoal/40 normal-case tracking-normal">*</span>
            </label>
            <input
              type="text"
              id="purchaser_name"
              name="purchaser_name"
              required
              placeholder="Full name"
              autoComplete="name"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="purchaser_email" className={labelClass}>
              Your Email <span className="text-charcoal/40 normal-case tracking-normal">*</span>
            </label>
            <input
              type="email"
              id="purchaser_email"
              name="purchaser_email"
              required
              placeholder="you@example.com"
              autoComplete="email"
              className={inputClass}
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="recipient_name" className={labelClass}>
              Recipient Name <span className="text-charcoal/40 normal-case tracking-normal">*</span>
            </label>
            <input
              type="text"
              id="recipient_name"
              name="recipient_name"
              required
              placeholder="Who is this gift for?"
              className={inputClass}
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className={labelClass}>
            Personal Message{' '}
            <span className="text-charcoal/40 normal-case tracking-normal">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="Add a personal note…"
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* Send By */}
        <div>
          <p className={labelClass}>
            Delivery Method <span className="text-charcoal/40 normal-case tracking-normal">*</span>
          </p>
          <div className="flex gap-6">
            {(['email', 'mail'] as const).map((method) => (
              <label key={method} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="send_by"
                  value={method}
                  checked={sendBy === method}
                  onChange={() => setSendBy(method)}
                  className="accent-sage"
                />
                <span className="font-lato text-sm text-charcoal capitalize">
                  {method === 'email' ? 'Email' : 'Physical Mail'}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Mailing address */}
        {sendBy === 'mail' && (
          <div>
            <label htmlFor="address" className={labelClass}>
              Mailing Address <span className="text-charcoal/40 normal-case tracking-normal">*</span>
            </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              placeholder="Street address, city, state, ZIP"
              className={inputClass}
            />
          </div>
        )}

        {/* Error */}
        {state?.error && (
          <div
            role="alert"
            className="px-4 py-3 border border-red-200 bg-red-50 text-red-700 text-sm font-lato"
          >
            {state.error}
          </div>
        )}

        {!selectedAmount && (
          <p className="text-[11px] font-lato text-charcoal/40 italic">
            Please select a denomination above before submitting.
          </p>
        )}

        <button
          type="submit"
          disabled={isPending || !selectedAmount || (selectedAmount === 'custom' && !customAmount)}
          className="w-full bg-sage text-cream px-8 py-4 text-sm uppercase tracking-widest hover:bg-sage-dark transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed font-lato"
        >
          {isPending ? 'Sending…' : 'Request Gift Card'}
        </button>
      </form>
    </div>
  );
}
