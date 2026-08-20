import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { to, subject, html } = req.body;

    if (!to || !subject || !html) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Since you don't have a custom domain yet, Resend lets you send 
    // test emails from this default onboarding address to yourself.
    // NOTE: In production without a custom domain, you can only email the address you signed up to Resend with!
    const data = await resend.emails.send({
      from: 'GhostWrite <onboarding@resend.dev>',
      to: [to],
      subject: subject,
      html: html,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}