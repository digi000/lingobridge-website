import { NextResponse } from "next/server";
import { sendNotificationEmail } from "@/lib/ses";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\d\s()+-]{7,25}$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      organization,
      contactPerson,
      email,
      phone,
      languageRequired,
      deliveryType,
      date,
      duration,
      location,
      industry,
      notes,
    } = body;

    // 1. Input Validation
    if (!organization || typeof organization !== "string" || organization.trim().length === 0 || organization.length > 100) {
      return NextResponse.json({ error: "Invalid organization name (must be 1-100 characters)" }, { status: 400 });
    }

    if (!contactPerson || typeof contactPerson !== "string" || contactPerson.trim().length === 0 || contactPerson.length > 100) {
      return NextResponse.json({ error: "Invalid contact person (must be 1-100 characters)" }, { status: 400 });
    }

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email) || email.length > 150) {
      return NextResponse.json({ error: "Invalid contact email address" }, { status: 400 });
    }

    if (!phone || typeof phone !== "string" || !PHONE_REGEX.test(phone)) {
      return NextResponse.json({ error: "Invalid contact phone number format" }, { status: 400 });
    }

    if (!languageRequired || typeof languageRequired !== "string" || languageRequired.trim().length === 0 || languageRequired.length > 100) {
      return NextResponse.json({ error: "Invalid language required" }, { status: 400 });
    }

    if (!deliveryType || typeof deliveryType !== "string" || !["in-person", "telephone", "video"].includes(deliveryType)) {
      return NextResponse.json({ error: "Invalid interpretation delivery type selection" }, { status: 400 });
    }

    if (!date || typeof date !== "string" || date.trim().length === 0 || date.length > 50) {
      return NextResponse.json({ error: "Invalid appointment date" }, { status: 400 });
    }

    if (!duration || typeof duration !== "string" || duration.trim().length === 0 || duration.length > 100) {
      return NextResponse.json({ error: "Invalid appointment duration" }, { status: 400 });
    }

    if (!location || typeof location !== "string" || location.trim().length === 0 || location.length > 200) {
      return NextResponse.json({ error: "Invalid location / video link details" }, { status: 400 });
    }

    if (!industry || typeof industry !== "string" || industry.trim().length === 0 || industry.length > 100) {
      return NextResponse.json({ error: "Invalid industry / domain specifications" }, { status: 400 });
    }

    if (notes && (typeof notes !== "string" || notes.length > 2000)) {
      return NextResponse.json({ error: "Invalid additional notes (max 2000 characters)" }, { status: 400 });
    }

    // Map delivery values to user-friendly labels
    const deliveryLabels: Record<string, string> = {
      "in-person": "In-person (On-site)",
      "telephone": "Telephone (Audio)",
      "video": "Video Remote (VRI)",
    };
    const deliveryLabel = deliveryLabels[deliveryType] || deliveryType;

    // 2. Email Formatting
    const subject = `[Lingora Requests] New Interpreter Request from ${organization.trim()}`;
    const textBody = `
New Interpreter Request:
------------------------
Organization/Client Name: ${organization.trim()}
Contact Person: ${contactPerson.trim()}
Email: ${email.trim()}
Phone: ${phone.trim()}
Language Required: ${languageRequired.trim()}
Delivery Type: ${deliveryLabel}
Appointment Date: ${date.trim()}
Time & Duration: ${duration.trim()}
Location / Video Link: ${location.trim()}
Industry / Domain: ${industry.trim()}
Notes:
${notes ? notes.trim() : "None"}
    `;

    const htmlBody = `
      <h3>New Interpreter Request</h3>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px; font-family: sans-serif;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; width: 40%;">Organization / Client</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${organization.trim()}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Contact Person</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${contactPerson.trim()}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Contact Email</td>
          <td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${email.trim()}">${email.trim()}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Contact Phone</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${phone.trim()}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Language Required</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${languageRequired.trim()}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Delivery Type</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${deliveryLabel}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Appointment Date</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${date.trim()}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Time & Duration</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${duration.trim()}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Location / Link</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${location.trim()}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Industry / Domain</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${industry.trim()}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; vertical-align: top;">Additional Notes</td>
          <td style="padding: 8px; border: 1px solid #ddd; white-space: pre-wrap;">${notes ? notes.trim() : "None"}</td>
        </tr>
      </table>
    `;

    // 3. Send Email
    // TODO(security): Implement IP-based rate limiting on this API route for production deployments.
    await sendNotificationEmail({ subject, htmlBody, textBody });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing interpreter request:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request. Please try again later." },
      { status: 500 }
    );
  }
}
