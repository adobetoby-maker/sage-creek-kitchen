'use server';

import { Resend } from 'resend';

export type WineDinnerState = {
  success?: boolean;
  error?: string;
} | null;

export async function submitWineDinnerSignup(
  _prevState: WineDinnerState,
  formData: FormData
): Promise<WineDinnerState> {
  const name = (formData.get('name') as string)?.trim();
  const email = (formData.get('email') as string)?.trim();

  if (!name || !email) {
    return { error: 'Please provide your name and email.' };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'Sage Creek Kitchen <no-reply@sagecreekkitchen.worker-bee.app>',
      to: ['reservations@sagecreekkitchen.com'],
      subject: `Wine Dinner Signup: ${name}`,
      html: `<p>New wine dinner mailing list signup:<br/>Name: ${name}<br/>Email: ${email}</p>`,
    });
    await resend.emails.send({
      from: 'Sage Creek Kitchen <no-reply@sagecreekkitchen.worker-bee.app>',
      to: [email],
      subject: 'You\'re on the list — Sage Creek Kitchen Wine Dinners',
      html: `<p>Hi ${name},</p><p>Thanks for signing up! You'll be the first to hear about our monthly wine dinner series pairing Idaho wines with our seasonal menu.</p><p>— Sage Creek Kitchen<br/>(208) 555-0319</p>`,
    });
  } catch (err) {
    console.error('Resend error:', err);
    // Graceful failure — still confirm to user
  }

  return { success: true };
}
