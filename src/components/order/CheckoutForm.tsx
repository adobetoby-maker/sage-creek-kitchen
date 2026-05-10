'use client';

import { useActionState } from 'react';
import { submitOrder } from '@/app/order/actions';

const PICKUP_TIMES = [
  '5:00 PM',
  '5:30 PM',
  '6:00 PM',
  '6:30 PM',
  '7:00 PM',
  '7:30 PM',
  '8:00 PM',
  '8:30 PM',
  '9:00 PM',
];

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CheckoutFormProps {
  cartItems: CartItem[];
  total: number;
  onBack: () => void;
  onSuccess: (name: string, pickupTime: string) => void;
}

type ActionState = {
  error?: string;
  success?: boolean;
  pickup_time?: string;
  customer_name?: string;
} | null;

const labelClass =
  'block text-[11px] font-lato uppercase tracking-[0.15em] text-charcoal/60 mb-1.5';
const inputClass =
  'w-full border border-charcoal/20 bg-white px-4 py-3 text-charcoal text-sm font-lato font-light rounded-none focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage/30 transition-colors duration-200';

export default function CheckoutForm({ cartItems, total, onBack, onSuccess }: CheckoutFormProps) {
  const [state, formAction, isPending] = useActionState<ActionState, FormData>(
    async (prevState: ActionState, formData: FormData) => {
      const result = await submitOrder(prevState, formData);
      if (result.success && result.customer_name && result.pickup_time) {
        onSuccess(result.customer_name, result.pickup_time);
      }
      return result;
    },
    null
  );

  return (
    <div className="bg-white border border-charcoal/10 p-6 md:p-8">
      {/* Header with back button */}
      <div className="flex items-center gap-3 mb-6">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-1.5 text-charcoal/50 hover:text-charcoal text-sm font-lato transition-colors duration-150"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Menu
        </button>
      </div>

      <h2 className="font-cormorant text-3xl italic font-semibold text-charcoal mb-1">
        Your Details
      </h2>
      <p className="font-lato font-light text-charcoal/50 text-sm mb-6">
        Takeout available Tue–Thu, 5–9PM · Pay on pickup
      </p>

      {/* Order summary */}
      <div className="bg-cream/50 border border-charcoal/8 p-4 mb-6">
        <p className="font-lato text-[11px] uppercase tracking-[0.15em] text-charcoal/50 mb-2">
          Order Summary
        </p>
        <ul className="space-y-1.5 mb-3">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between text-sm font-lato font-light text-charcoal/70">
              <span>
                {item.quantity}x {item.name}
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="border-t border-charcoal/10 pt-2 flex justify-between">
          <span className="font-lato text-sm font-normal text-charcoal">Total</span>
          <span className="font-cormorant text-lg font-semibold text-charcoal">
            ${total.toFixed(2)}
          </span>
        </div>
      </div>

      <form action={formAction} noValidate>
        {/* Hidden cart data */}
        <input type="hidden" name="items" value={JSON.stringify(cartItems)} />
        <input type="hidden" name="total" value={total.toFixed(2)} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          {/* Name */}
          <div>
            <label htmlFor="customer_name" className={labelClass}>
              Name <span className="text-charcoal/40 normal-case tracking-normal">*</span>
            </label>
            <input
              type="text"
              id="customer_name"
              name="customer_name"
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

          {/* Pickup time */}
          <div>
            <label htmlFor="pickup_time" className={labelClass}>
              Pickup Time <span className="text-charcoal/40 normal-case tracking-normal">*</span>
            </label>
            <select
              id="pickup_time"
              name="pickup_time"
              required
              className={inputClass}
            >
              <option value="">Select a time</option>
              {PICKUP_TIMES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Pay on pickup note */}
        <div className="flex items-start gap-3 px-4 py-3 bg-sage/8 border border-sage/20 mb-6">
          <svg
            className="w-4 h-4 text-sage flex-shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
            />
          </svg>
          <p className="font-lato font-light text-sm text-charcoal/70">
            <span className="font-normal text-charcoal">Pay on pickup</span> — no payment
            information required. We accept cash and cards at the door.
          </p>
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
          {isPending ? 'Placing Order…' : 'Place Order'}
        </button>

        <p className="mt-4 text-center text-[11px] text-charcoal/40 font-lato">
          You will receive an email confirmation at the address provided.
        </p>
      </form>
    </div>
  );
}
