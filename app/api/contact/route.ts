// app/api/contact/route.js

import sendgrid from '@sendgrid/mail';
import { NextRequest } from 'next/server';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    console.log(name);
    console.log(email);
    console.log(message);

    const msg = {
      to: 'sidkothari005@gmail.com',  // Replace with your email address
      from: 'hi@siddharthkothari.com',  // Replace with your SendGrid verified email address
      subject: 'New Contact Form Submission',
      text: `You have received a new message from ${name} (${email}):\n\n${message}`,
      html: `<strong>You have received a new message from ${name} (${email}):</strong><br><br>${message}`,
    };

    await sendgrid.send(msg);
    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Failed to send email.' }), { status: 500 });
  }
}
