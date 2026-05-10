'use server';

import { Resend } from 'resend';

export async function submitEventInquiry(_prevState: unknown, formData: FormData) {
  const data = {
    event_type: formData.get('event_type') as string,
    event_date: formData.get('event_date') as string,
    guest_count: formData.get('guest_count') as string,
    budget_range: formData.get('budget_range') as string,
    name: formData.get('name') as string,
    phone: formData.get('phone') as string,
    email: formData.get('email') as string,
    description: formData.get('description') as string,
  };

  if (!data.event_type || !data.event_date || !data.guest_count || !data.name || !data.phone || !data.email) {
    return { error: 'Please fill in all required fields.' };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Sage Creek Kitchen <no-reply@sagecreekkitchen.worker-bee.app>',
      to: ['reservations@sagecreekkitchen.com'],
      subject: `Private Event Inquiry: ${data.event_type} — ${data.event_date}`,
      html: `
        <p><strong>New Private Event Inquiry</strong></p>
        <p>
          <strong>Event Type:</strong> ${data.event_type}<br/>
          <strong>Event Date:</strong> ${data.event_date}<br/>
          <strong>Guest Count:</strong> ${data.guest_count}<br/>
          <strong>Budget Range:</strong> ${data.budget_range || 'Not specified'}<br/>
        </p>
        <p>
          <strong>Contact Name:</strong> ${data.name}<br/>
          <strong>Phone:</strong> ${data.phone}<br/>
          <strong>Email:</strong> ${data.email}<br/>
        </p>
        <p><strong>Event Description:</strong><br/>${data.description || 'None provided'}</p>
      `,
    });
  } catch (err) {
    console.error('Resend private events email failed:', err);
    return { error: 'Unable to submit your inquiry. Please call us at (208) 555-0319.' };
  }

  return { success: true };
}
