'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { starters, mains, type MenuItem } from '@/lib/menu';
import MenuItemCard from '@/components/order/MenuItem';
import CartSidebar from '@/components/order/CartSidebar';
import CheckoutForm from '@/components/order/CheckoutForm';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

type CheckoutStep = 'menu' | 'checkout' | 'success';

export default function OrderPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [checkoutStep, setCheckoutStep] = useState<CheckoutStep>('menu');
  const [successInfo, setSuccessInfo] = useState<{ name: string; pickupTime: string } | null>(null);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  function addToCart(item: MenuItem) {
    setCartItems((prev) => {
      const existing = prev.find((c) => c.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { id: item.id, name: item.name, price: item.price, quantity: 1 }];
    });
  }

  function removeFromCart(id: string) {
    setCartItems((prev) => {
      const existing = prev.find((c) => c.id === id);
      if (!existing) return prev;
      if (existing.quantity <= 1) return prev.filter((c) => c.id !== id);
      return prev.map((c) => (c.id === id ? { ...c, quantity: c.quantity - 1 } : c));
    });
  }

  function updateQuantity(id: string, qty: number) {
    if (qty <= 0) {
      setCartItems((prev) => prev.filter((c) => c.id !== id));
    } else {
      setCartItems((prev) =>
        prev.map((c) => (c.id === id ? { ...c, quantity: qty } : c))
      );
    }
  }

  function getCartQty(id: string) {
    return cartItems.find((c) => c.id === id)?.quantity ?? 0;
  }

  function handleSuccess(name: string, pickupTime: string) {
    setSuccessInfo({ name, pickupTime });
    setCheckoutStep('success');
  }

  // Success state
  if (checkoutStep === 'success' && successInfo) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full text-center bg-white border border-charcoal/10 p-10"
        >
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
          <h2 className="font-cormorant text-3xl italic font-semibold text-charcoal mb-3">
            Order Confirmed
          </h2>
          <p className="font-lato font-light text-charcoal/70 text-sm leading-relaxed mb-4">
            Your order is confirmed for pickup at{' '}
            <span className="font-normal text-charcoal">{successInfo.pickupTime}</span>. See you
            soon, {successInfo.name}!
          </p>
          <p className="font-lato font-light text-charcoal/60 text-sm">
            Need to make changes? Call us at{' '}
            <a href="tel:+12085550319" className="text-sage hover:underline">
              (208) 555-0319
            </a>
          </p>
        </motion.div>
      </div>
    );
  }

  // Checkout form step
  if (checkoutStep === 'checkout') {
    return (
      <section className="py-12 bg-cream">
        <div className="max-w-2xl mx-auto px-6">
          <CheckoutForm
            cartItems={cartItems}
            total={total}
            onBack={() => setCheckoutStep('menu')}
            onSuccess={handleSuccess}
          />
        </div>
      </section>
    );
  }

  // Menu step (default)
  return (
    <section className="py-12 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left — menu */}
          <div className="w-full lg:w-[60%]">
            {/* Starters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <h2 className="font-cormorant text-3xl italic font-semibold text-charcoal mb-1">
                Starters
              </h2>
              <div className="w-12 h-px bg-gold/50 mb-4" />
              {starters.map((item) => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  cartQuantity={getCartQty(item.id)}
                  onAdd={() => addToCart(item)}
                  onRemove={() => removeFromCart(item.id)}
                />
              ))}
            </motion.div>

            {/* Mains */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="font-cormorant text-3xl italic font-semibold text-charcoal mb-1">
                Mains
              </h2>
              <div className="w-12 h-px bg-gold/50 mb-4" />
              {mains.map((item) => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  cartQuantity={getCartQty(item.id)}
                  onAdd={() => addToCart(item)}
                  onRemove={() => removeFromCart(item.id)}
                />
              ))}
            </motion.div>
          </div>

          {/* Right — cart (sticky) */}
          <div className="w-full lg:w-[40%] lg:sticky lg:top-24">
            <CartSidebar
              cartItems={cartItems}
              total={total}
              onUpdateQuantity={updateQuantity}
              onProceedToCheckout={() => setCheckoutStep('checkout')}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
