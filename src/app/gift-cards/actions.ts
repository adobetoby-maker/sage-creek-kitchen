'use server';

import { Resend } from 'resend';

export type GiftCardState = {
  success?: boolean;
  error?: string;
} | null;

export async function submitGiftCardRequest(
  _prevState: GiftCardState,
  formData: FormData
): Promise<GiftCardState> {
  const purchaserName = (formData.get('purchaser_name') as string)?.trim();
  const purchaserEmail = (formData.get('purchaser_email') as string)?.trim();
  const recipientName = (formData.get('recipient_name') as string)?.trim();
  const denomination = (formData.get('denomination') as string)?.trim();
  const message = (formData.get('message') as string)?.trim() || '';
  const sendBy = (formData.get('send_by') as string)?.trim();
  const address = (formData.get('address') as string)?.trim() || '';

  if (!purchaserName || !purchaserEmail || !recipientName || !denomination || !sendBy) {
    return { error: 'Please fill in all required fields.' };
  }

  const amount = parseFloat(denomination);
  if (isNaN(amount) || amount < 5) {
    return { error: 'Please enter a valid gift card amount (minimum $5).' };
  }

  if (sendBy === 'mail' && !address) {
    return { error: 'Please provide a mailing address for physical delivery.' };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'Sage Creek Kitchen <no-reply@sagecreekkitchen.worker-bee.app>',
      to: ['reservations@sagecreekkitchen.com'],
      subject: `Gift Card Request: $${amount} from ${purchaserName}`,
      html: `<p>New gift card request:</p><p>Purchaser: ${purchaserName} (${purchaserEmail})<br/>Recipient: ${recipientName}<br/>Amount: $${amount}<br/>Delivery: ${sendBy === 'mail' ? `Physical Mail — ${address}` : 'Email'}<br/>Message: ${message || 'None'}</p>`,
    });
    await resend.emails.send({
      from: 'Sage Creek Kitchen <no-reply@sagecreekkitchen.worker-bee.app>',
      to: [purchaserEmail],
      subject: `Gift Card Request Received — Sage Creek Kitchen`,
      html: `<p>Hi ${purchaserName},</p><p>We've received your gift card request of $${amount} for ${recipientName}. We'll process it within 1 business day and deliver it by ${sendBy === 'mail' ? 'physical mail' : 'email'}.</p><p>Questions? Call us at (208) 555-0319.<br/>— Sage Creek Kitchen</p>`,
    });
  } catch (err) {
    console.error('Resend error:', err);
  }

  return { success: true };
}
