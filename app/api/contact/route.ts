// app/api/contact/route.js

import { verifyCaptcha } from '@/lib/utils';
import sendgrid from '@sendgrid/mail';
import { NextRequest } from 'next/server';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, token } = await request.json();

    if(!token){
      return new Response(JSON.stringify({ message: 'Token not found!' }), { status: 400 });
    }

    const isTokenVerified = await verifyCaptcha(token);

    console.log("isTokenVerified", isTokenVerified)

    const msg = {
      to: 'sidkothari005@gmail.com',  // Replace with your email address
      from: 'hi@siddharthkothari.com',  // Replace with your SendGrid verified email address
      subject: 'New Contact Form Submission',
      text: `You have received a new message from ${name} (${email}):\n\n${message}`,
      html: `<strong>You have received a new message from ${name} (${email}):</strong><br><br>${message}`,
    };

    if(isTokenVerified) {
      await sendgrid.send(msg);
      return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ message: 'Token Verification Failed' }), { status: 400 });
    }
    
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Failed to send email.' }), { status: 500 });
  }
}
