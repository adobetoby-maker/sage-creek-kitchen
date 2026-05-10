'use client';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartSidebarProps {
  cartItems: CartItem[];
  total: number;
  onUpdateQuantity: (id: string, qty: number) => void;
  onProceedToCheckout: () => void;
}

export default function CartSidebar({
  cartItems,
  total,
  onUpdateQuantity,
  onProceedToCheckout,
}: CartSidebarProps) {
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-white border border-charcoal/10 p-6">
      <h2 className="font-cormorant text-2xl font-semibold text-charcoal mb-5">
        Your Order
        {itemCount > 0 && (
          <span className="ml-2 font-lato text-sm font-normal text-charcoal/40">
            ({itemCount} {itemCount === 1 ? 'item' : 'items'})
          </span>
        )}
      </h2>

      {cartItems.length === 0 ? (
        <p className="font-lato font-light text-charcoal/50 text-sm leading-relaxed py-4">
          Your order is empty. Add items from the menu.
        </p>
      ) : (
        <>
          {/* Item list */}
          <ul className="space-y-3 mb-5">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center gap-3">
                {/* Qty controls */}
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    aria-label={`Remove one ${item.name}`}
                    className="w-6 h-6 border border-charcoal/20 text-charcoal/50 text-sm flex items-center justify-center hover:border-sage hover:text-sage transition-colors duration-150"
                  >
                    −
                  </button>
                  <span className="font-lato text-sm text-charcoal w-4 text-center">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    aria-label={`Add one more ${item.name}`}
                    className="w-6 h-6 border border-charcoal/20 text-charcoal/50 text-sm flex items-center justify-center hover:border-sage hover:text-sage transition-colors duration-150"
                  >
                    +
                  </button>
                </div>

                {/* Name */}
                <span className="font-lato font-light text-sm text-charcoal flex-1 min-w-0 truncate">
                  {item.name}
                </span>

                {/* Subtotal */}
                <span className="font-lato text-sm text-charcoal/70 flex-shrink-0">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>

          {/* Divider + total */}
          <div className="border-t border-charcoal/10 pt-4 mb-5">
            <div className="flex justify-between items-baseline">
              <span className="font-lato text-[11px] uppercase tracking-[0.15em] text-charcoal/50">
                Subtotal
              </span>
              <span className="font-cormorant text-xl font-semibold text-charcoal">
                ${total.toFixed(2)}
              </span>
            </div>
            <p className="mt-1.5 font-lato text-[11px] text-charcoal/40">
              Tax included · Pay on pickup
            </p>
          </div>

          {/* CTA */}
          <button
            type="button"
            onClick={onProceedToCheckout}
            className="w-full bg-sage text-cream px-6 py-3.5 text-sm uppercase tracking-widest hover:bg-sage-dark transition-colors duration-200 font-lato"
          >
            Proceed to Checkout
          </button>
        </>
      )}

      {/* Pickup info note */}
      <div className="mt-5 pt-5 border-t border-charcoal/8">
        <p className="font-lato text-[11px] text-charcoal/40 leading-relaxed">
          Pickup at{' '}
          <span className="text-charcoal/60">845 Shoshone St N, Twin Falls, ID</span>
          <br />
          Ready in 30–45 minutes after order placement
        </p>
      </div>
    </div>
  );
}
