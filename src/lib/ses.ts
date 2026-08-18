import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const region = process.env.AWS_REGION || "ca-central-1";
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

// Lazy initialization of SESClient to ensure environment variables are loaded
let sesClient: SESClient | null = null;

function getSESClient(): SESClient {
  if (!sesClient) {
    if (!accessKeyId || !secretAccessKey) {
      throw new Error("AWS credentials (AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY) are missing in environment configuration.");
    }
    sesClient = new SESClient({
      region,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
    });
  }
  return sesClient;
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
  const client = getSESClient();
  const senderEmail = process.env.SES_SENDER_EMAIL;
  const receiverEmail = process.env.SES_RECEIVER_EMAIL;

  if (!senderEmail || !receiverEmail) {
    throw new Error("SES sender or receiver email (SES_SENDER_EMAIL/SES_RECEIVER_EMAIL) is not configured.");
  }

  const command = new SendEmailCommand({
    Source: senderEmail,
    Destination: {
      ToAddresses: [receiverEmail],
    },
    Message: {
      Subject: {
        Data: subject,
        Charset: "UTF-8",
      },
      Body: {
        Html: {
          Data: htmlBody,
          Charset: "UTF-8",
        },
        Text: {
          Data: textBody,
          Charset: "UTF-8",
        },
      },
    },
  });

  await client.send(command);
}
