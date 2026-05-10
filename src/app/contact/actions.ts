'use server';

import { Resend } from 'resend';

export type ContactState = {
  success?: boolean;
  error?: string;
} | null;

export async function submitContactForm(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = (formData.get('name') as string)?.trim();
  const email = (formData.get('email') as string)?.trim();
  const subject = (formData.get('subject') as string)?.trim();
  const message = (formData.get('message') as string)?.trim();

  if (!name || !email || !subject || !message) {
    return { error: 'Please fill in all required fields.' };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'Sage Creek Kitchen <no-reply@sagecreekkitchen.worker-bee.app>',
      to: ['hello@sagecreekkitchen.com'],
      subject: `Contact Form: ${subject}`,
      html: `<p>New inquiry from ${name} (${email}):</p><p><strong>Subject:</strong> ${subject}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
      replyTo: email,
    });
  } catch (err) {
    console.error('Resend error:', err);
  }

  return { success: true };
}
