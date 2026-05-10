import type { Metadata } from 'next';
import OrderPage from '@/components/order/OrderPage';

export const metadata: Metadata = {
  title: 'Order Takeout',
  description:
    'Order takeout from Sage Creek Kitchen. Available Tuesday through Thursday, 5PM–9PM. Pickup at 845 Shoshone St N, Twin Falls, Idaho.',
};

export default function OrderRoute() {
  return (
    <>
      {/* Page header */}
      <div className="pt-36 pb-8 bg-cream text-center">
        <p className="font-lato text-[11px] uppercase tracking-[0.2em] text-gold mb-3">
          Takeout — Tue through Thu, 5PM–9PM
        </p>
        <h1 className="font-cormorant text-4xl italic font-semibold text-charcoal">
          Order for Pickup
        </h1>
      </div>

      {/* Availability banner */}
      <div className="bg-charcoal text-cream py-3 text-center">
        <p className="font-lato text-[13px] font-light tracking-wide">
          Takeout available Tuesday–Thursday, 5–9PM&nbsp;&nbsp;·&nbsp;&nbsp;Ready in 30–45
          minutes&nbsp;&nbsp;·&nbsp;&nbsp;Pay on pickup
        </p>
      </div>

      {/* Interactive order UI */}
      <OrderPage />
    </>
  );
}
