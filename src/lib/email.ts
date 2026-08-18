import nodemailer from "nodemailer";

const host = process.env.SMTP_HOST || "smtp.gmail.com";
const port = parseInt(process.env.SMTP_PORT || "465", 10);
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASSWORD;

let transporter: nodemailer.Transporter | null = null;

function getTransporter(): nodemailer.Transporter {
  if (!transporter) {
    if (!user || !pass) {
      throw new Error("SMTP credentials (SMTP_USER/SMTP_PASSWORD) are missing in environment configuration.");
    }
    transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // Use SSL/TLS for 465, STARTTLS for 587
      auth: {
        user,
        pass,
      },
    });
  }
  return transporter;
}

interface SendEmailParams {
  subject: string;
  htmlBody: string;
  textBody: string;
}

export async function sendNotificationEmail({
  subject,
  htmlBody,
  textBody,
}: SendEmailParams): Promise<void> {
  const activeTransporter = getTransporter();
  const senderEmail = process.env.SMTP_USER;
  const receiverEmail = process.env.EMAIL_RECEIVER;

  if (!senderEmail || !receiverEmail) {
    throw new Error("SMTP sender or receiver email (SMTP_USER/EMAIL_RECEIVER) is not configured.");
  }

  await activeTransporter.sendMail({
    from: `"Lingora Website" <${senderEmail}>`,
    to: receiverEmail,
    subject,
    text: textBody,
    html: htmlBody,
  });
}
