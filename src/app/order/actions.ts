'use server';

import { createAdminClient } from '@/lib/supabase/admin';
import { Resend } from 'resend';

export async function submitOrder(_prevState: unknown, formData: FormData) {
  const itemsJson = formData.get('items') as string;
  const total = parseFloat(formData.get('total') as string);

  const data = {
    customer_name: formData.get('customer_name') as string,
    phone: formData.get('phone') as string,
    email: formData.get('email') as string,
    pickup_time: formData.get('pickup_time') as string,
    items: JSON.parse(itemsJson),
    total,
  };

  if (!data.customer_name || !data.phone || !data.email || !data.pickup_time) {
    return { error: 'Please fill in all required fields.' };
  }

  const supabase = createAdminClient();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { error: dbError } = await (supabase.from('orders') as any).insert(data);
  if (dbError) return { error: 'Unable to place order. Please call us at (208) 555-0319.' };

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const itemsList = data.items
      .map(
        (i: { name: string; quantity: number; price: number }) =>
          `${i.quantity}x ${i.name} — $${(i.price * i.quantity).toFixed(2)}`
      )
      .join('<br/>');

    await resend.emails.send({
      from: 'Sage Creek Kitchen <no-reply@sagecreekkitchen.worker-bee.app>',
      to: [data.email],
      subject: `Order Confirmed — Pickup at ${data.pickup_time}`,
      html: `<p>Hi ${data.customer_name},</p><p>Your order is confirmed for pickup at ${data.pickup_time}.</p><p>${itemsList}</p><p>Total: $${total.toFixed(2)}</p><p>Pay on pickup. See you soon!<br/>— Sage Creek Kitchen</p>`,
    });
    await resend.emails.send({
      from: 'Orders <no-reply@sagecreekkitchen.worker-bee.app>',
      to: ['reservations@sagecreekkitchen.com'],
      subject: `New Order: ${data.customer_name} — Pickup ${data.pickup_time}`,
      html: `<p>New takeout order:<br/>Name: ${data.customer_name}<br/>Phone: ${data.phone}<br/>Pickup: ${data.pickup_time}<br/>Total: $${total.toFixed(2)}<br/><br/>${itemsList}</p>`,
    });
  } catch (err) {
    console.error('Resend order email failed:', err);
  }

  return { success: true, pickup_time: data.pickup_time, customer_name: data.customer_name };
}
