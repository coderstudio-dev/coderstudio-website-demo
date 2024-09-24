import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  // Basic input validation
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  // Bot detection techniques
  const isBotDetected = await detectBot(req);

  if (isBotDetected) {
    return NextResponse.json(
      { error: "Bot activity detected" },
      { status: 403 }
    );
  }

  // Process the message (send email)
  try {
    await sendEmail(name, email, message);
    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}

async function detectBot(req: Request): Promise<boolean> {
  const userAgent = req.headers.get("user-agent");
  const ipAddress = req.headers.get("x-forwarded-for") || "unknown";

  // Implement your bot detection logic here
  // This is a simple example and should be expanded for production use
  if (!userAgent || userAgent.toLowerCase().includes("bot")) {
    return true;
  }

  // You can add more sophisticated checks here, such as:
  // - Rate limiting
  // - IP reputation check
  // - Behavioral analysis

  return false;
}

async function sendEmail(name: string, email: string, message: string) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: "info@coderstudio.co",
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
  });
}
