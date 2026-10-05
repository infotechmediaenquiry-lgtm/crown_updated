import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { name, email, phone, subject, message, requirements, productName, company, productType } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    const emailUser = process.env.EMAIL_USER || "info@crownhealthcare.co.in";
    const emailPass = process.env.EMAIL_PASS || "InfoTTeam@2026";
    const bccEmail = process.env.BCC_EMAIL || "infotechmediaenquiry@gmail.com";

    const finalMessage = message || requirements || "Bulk quote / product inquiry request";

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.hostinger.com",
      port: Number(process.env.EMAIL_PORT) || 465,
      secure: process.env.EMAIL_SECURE !== 'false', // true for 465, false for 587
      auth: {
        user: emailUser,
        pass: emailPass,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });

    const mailOptions = {
      from: emailUser,
      to: process.env.EMAIL_TO || emailUser,
      bcc: process.env.BCC_EMAIL || 'infotechmediaenquiry@gmail.com',
      replyTo: email,
      subject: subject || (productName ? `New Inquiry: ${productName}` : `New Contact Form Submission from ${name}`),
      html: `
        <h2>New Contact Form / Quote Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "N/A"}</p>
        ${company ? `<p><b>Company / Organisation:</b> ${company}</p>` : ''}
        ${productName ? `<p><b>Product:</b> ${productName}</p>` : ''}
        ${productType ? `<p><b>Selected Option / Type:</b> ${productType}</p>` : ''}
        <p><b>Requirements / Message:</b><br/> ${String(finalMessage).replace(/\n/g, '<br/>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Contact Form Error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send email. Please check your SMTP settings." },
      { status: 500 }
    );
  }
}