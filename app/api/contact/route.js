import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { name, email, phone, subject, message, requirements, productName, company, productType } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    const finalMessage = message || requirements || "Bulk quote / product inquiry request";

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      bcc: process.env.BCC_EMAIL || 'infotechmediaenquiry@gmail.com',
      replyTo: email,
      subject: subject || (productName ? `New Inquiry: ${productName}` : "New Contact Form"),
      html: `
        <h2>New Contact Form / Quote Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "N/A"}</p>
        ${company ? `<p><b>Company / Organisation:</b> ${company}</p>` : ''}
        ${productName ? `<p><b>Product:</b> ${productName}</p>` : ''}
        ${productType ? `<p><b>Selected Option / Type:</b> ${productType}</p>` : ''}
        <p><b>Requirements / Message:</b><br/> ${finalMessage}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}