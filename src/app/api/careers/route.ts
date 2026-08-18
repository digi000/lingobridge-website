import { NextResponse } from "next/server";
import { sendNotificationEmail } from "@/lib/email";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Simple phone verification (allowing spaces, hyphens, parentheses, and digits)
const PHONE_REGEX = /^[\d\s()+-]{7,25}$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, primaryLanguage, otherLanguages, experience, certifications, summary } = body;

    // 1. Input Validation
    if (!name || typeof name !== "string" || name.trim().length === 0 || name.length > 100) {
      return NextResponse.json({ error: "Invalid name (must be 1-100 characters)" }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email) || email.length > 150) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    if (!phone || typeof phone !== "string" || !PHONE_REGEX.test(phone)) {
      return NextResponse.json({ error: "Invalid phone number format" }, { status: 400 });
    }

    if (!primaryLanguage || typeof primaryLanguage !== "string" || primaryLanguage.trim().length === 0 || primaryLanguage.length > 100) {
      return NextResponse.json({ error: "Invalid primary working language" }, { status: 400 });
    }

    if (otherLanguages && (typeof otherLanguages !== "string" || otherLanguages.length > 200)) {
      return NextResponse.json({ error: "Invalid other working languages (max 200 characters)" }, { status: 400 });
    }

    if (!experience || typeof experience !== "string" || !["1", "2", "5", "10"].includes(experience)) {
      return NextResponse.json({ error: "Invalid years of experience selection" }, { status: 400 });
    }

    if (!Array.isArray(certifications) || !certifications.every((cert) => typeof cert === "string" && cert.length <= 100)) {
      return NextResponse.json({ error: "Invalid certifications selection" }, { status: 400 });
    }

    if (summary && (typeof summary !== "string" || summary.length > 2000)) {
      return NextResponse.json({ error: "Invalid professional summary (max 2000 characters)" }, { status: 400 });
    }

    // Map experience values to user-friendly labels
    const experienceLabels: Record<string, string> = {
      "1": "Less than 1 year",
      "2": "1 - 3 years",
      "5": "3 - 5 years",
      "10": "5+ years",
    };
    const experienceLabel = experienceLabels[experience] || experience;

    // 2. Email Formatting
    const subject = `[Lingora Careers] New Application from ${name.trim()}`;
    const textBody = `
New Interpreter Application:
----------------------------
Name: ${name.trim()}
Email: ${email.trim()}
Phone: ${phone.trim()}
Primary Working Language: ${primaryLanguage.trim()}
Other Working Languages: ${otherLanguages ? otherLanguages.trim() : "None"}
Years of Experience: ${experienceLabel}
Certifications: ${certifications.length > 0 ? certifications.join(", ") : "None declared"}
Summary:
${summary ? summary.trim() : "N/A"}
    `;

    const htmlBody = `
      <h3>New Interpreter Application</h3>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px; font-family: sans-serif;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; width: 40%;">Name</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${name.trim()}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td>
          <td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${email.trim()}">${email.trim()}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${phone.trim()}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Primary Language</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${primaryLanguage.trim()}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Other Languages</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${otherLanguages ? otherLanguages.trim() : "None"}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Experience</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${experienceLabel}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Certifications</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${certifications.length > 0 ? certifications.join(", ") : "None declared"}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; vertical-align: top;">Professional Summary</td>
          <td style="padding: 8px; border: 1px solid #ddd; white-space: pre-wrap;">${summary ? summary.trim() : "N/A"}</td>
        </tr>
      </table>
    `;

    // 3. Send Email
    // TODO(security): Implement IP-based rate limiting on this API route for production deployments.
    await sendNotificationEmail({ subject, htmlBody, textBody });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing careers form:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request. Please try again later." },
      { status: 500 }
    );
  }
}
