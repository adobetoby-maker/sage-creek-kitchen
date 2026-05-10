'use server';

import { createAdminClient } from '@/lib/supabase/admin';
import { Resend } from 'resend';

export async function submitReservation(_prevState: unknown, formData: FormData) {
  const data = {
    guest_name: formData.get('guest_name') as string,
    phone: formData.get('phone') as string,
    email: formData.get('email') as string,
    date: formData.get('date') as string,
    time: formData.get('time') as string,
    party_size: parseInt(formData.get('party_size') as string),
    occasion: formData.get('occasion') as string || null,
    special_requests: formData.get('special_requests') as string || null,
  };

  // Validate required fields
  if (!data.guest_name || !data.phone || !data.email || !data.date || !data.time || !data.party_size) {
    return { error: 'Please fill in all required fields.' };
  }

  // Validate date is not in the past (string comparison avoids timezone issues)
  const todayStr = new Date().toISOString().slice(0, 10);
  if (data.date < todayStr) {
    return { error: 'Please select a date today or in the future.' };
  }

  const supabase = createAdminClient();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { error: dbError } = await (supabase.from('reservations') as any).insert(data);
  if (dbError) return { error: 'Unable to save reservation. Please call us at (208) 555-0319.' };

  // Send emails (gracefully fail — don't block confirmation)
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'Sage Creek Kitchen <no-reply@sagecreekkitchen.worker-bee.app>',
      to: [data.email],
      subject: `Reservation Confirmed — ${data.date} at ${data.time}`,
      html: `<p>Hi ${data.guest_name},</p><p>Your table for ${data.party_size} is confirmed for ${data.date} at ${data.time}.</p><p>We look forward to seeing you.<br/>— Sage Creek Kitchen<br/>(208) 555-0319</p>`,
    });
    await resend.emails.send({
      from: 'Reservations <no-reply@sagecreekkitchen.worker-bee.app>',
      to: ['reservations@sagecreekkitchen.com'],
      subject: `New Reservation: ${data.guest_name} — ${data.date} at ${data.time}`,
      html: `<p>New reservation:<br/>Name: ${data.guest_name}<br/>Party: ${data.party_size}<br/>Date: ${data.date}<br/>Time: ${data.time}<br/>Phone: ${data.phone}<br/>Email: ${data.email}<br/>Occasion: ${data.occasion || 'None'}<br/>Requests: ${data.special_requests || 'None'}</p>`,
    });
  } catch (err) {
    console.error('Resend email failed:', err);
  }

  return { success: true, data };
}
