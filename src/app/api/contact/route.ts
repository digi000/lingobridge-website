import { NextResponse } from "next/server";
import { sendNotificationEmail } from "@/lib/ses";

// Simple validation regexes
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, organization, message } = body;

    // 1. Input Validation
    if (!name || typeof name !== "string" || name.trim().length === 0 || name.length > 100) {
      return NextResponse.json({ error: "Invalid name (must be 1-100 characters)" }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email) || email.length > 150) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    if (organization && (typeof organization !== "string" || organization.length > 100)) {
      return NextResponse.json({ error: "Invalid organization name (max 100 characters)" }, { status: 400 });
    }

    if (!message || typeof message !== "string" || message.trim().length === 0 || message.length > 2000) {
      return NextResponse.json({ error: "Invalid message (must be 1-2000 characters)" }, { status: 400 });
    }

    // 2. Email Formatting
    const subject = `[Lingora Contact Form] New Inquiry from ${name.trim()}`;
    const textBody = `
New Contact Form Submission:
----------------------------
Name: ${name.trim()}
Email: ${email.trim()}
Organization: ${organization ? organization.trim() : "N/A"}
Message:
${message.trim()}
    `;

    const htmlBody = `
      <h3>New Contact Form Submission</h3>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px; font-family: sans-serif;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Name</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${name.trim()}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
          <td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${email.trim()}">${email.trim()}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Organization</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${organization ? organization.trim() : "N/A"}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; vertical-align: top;">Message</td>
          <td style="padding: 8px; border: 1px solid #ddd; white-space: pre-wrap;">${message.trim()}</td>
        </tr>
      </table>
    `;

    // 3. Send Email
    // TODO(security): Implement IP-based rate limiting on this API route for production deployments.
    await sendNotificationEmail({ subject, htmlBody, textBody });

    return NextResponse.json({ success: true });
  } catch (error) {
    // Prevent internal AWS details from leaking to the client
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request. Please try again later." },
      { status: 500 }
    );
  }
}
