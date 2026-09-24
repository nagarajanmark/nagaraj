import nodemailer from "nodemailer";

export interface ContactMailData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

/**
 * Configure Nodemailer Transporter using environment variables.
 * Compatible with Gmail App Passwords, SendGrid, Mailgun, Brevo, AWS SES, or custom SMTP.
 */
function createTransporter() {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT) || 465;
  const secure = process.env.SMTP_SECURE === "true" || port === 465;
  const user = process.env.SMTP_USER || process.env.EMAIL_USER;
  const pass = process.env.SMTP_PASS || process.env.EMAIL_PASS || process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    console.warn(
      "SMTP credentials not found in environment variables (SMTP_USER/SMTP_PASS). Emails will log to console in development mode."
    );
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user: user || "",
      pass: pass || "",
    },
    tls: {
      rejectUnauthorized: process.env.NODE_ENV === "production",
    },
  });
}

/**
 * Send incoming project inquiry email to owner and automated confirmation to client
 */
export async function sendContactEmail(data: ContactMailData) {
  const { name, email, phone, message } = data;
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "nagarajanmark0@gmail.com";
  const senderEmail = process.env.SMTP_USER || process.env.EMAIL_USER || "nagarajanmark0@gmail.com";
  const senderName = process.env.SMTP_FROM_NAME || "Nagarajan Portfolio";

  const transporter = createTransporter();
  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "short",
  });

  const sanitizedMessage = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // Clean, compatible HTML Email template for Owner Notification (Table-based layout for perfect Gmail/Outlook alignment)
  const ownerHtml = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Project Inquiry</title>
      </head>
      <body style="margin: 0; padding: 24px; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #111827; -webkit-text-size-adjust: 100%;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #091E42 0%, #0C2A66 50%, #1D4ED8 100%); padding: 32px 28px; text-align: left;">
              <h1 style="margin: 0 0 6px 0; font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: -0.3px; line-height: 1.2;">
                New Project Inquiry Received
              </h1>
              <p style="margin: 0; font-size: 13px; color: rgba(255, 255, 255, 0.85); font-weight: 400;">
                Sent from portfolio contact form on ${timestamp}
              </p>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 28px;">
              
              <!-- Sender Details Table (Strict 2-Column Alignment) -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; margin-bottom: 24px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 18px; border-bottom: 1px solid #edf2f7; width: 38%; font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">
                    Client Name
                  </td>
                  <td style="padding: 12px 18px; border-bottom: 1px solid #edf2f7; width: 62%; font-size: 14px; font-weight: 700; color: #0f172a; text-align: left;">
                    ${name}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 18px; border-bottom: 1px solid #edf2f7; width: 38%; font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">
                    Email Address
                  </td>
                  <td style="padding: 12px 18px; border-bottom: 1px solid #edf2f7; width: 62%; font-size: 14px; font-weight: 700; color: #1D4ED8; text-align: left;">
                    <a href="mailto:${email}" style="color: #1D4ED8; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 18px; border-bottom: 1px solid #edf2f7; width: 38%; font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">
                    Mobile Number
                  </td>
                  <td style="padding: 12px 18px; border-bottom: 1px solid #edf2f7; width: 62%; font-size: 14px; font-weight: 700; color: #0f172a; text-align: left;">
                    ${phone ? `<a href="tel:${phone.replace(/\s+/g, "")}" style="color: #1D4ED8; text-decoration: none;">${phone}</a>` : "Not provided"}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 18px; width: 38%; font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px;">
                    Received At
                  </td>
                  <td style="padding: 12px 18px; width: 62%; font-size: 13px; font-weight: 600; color: #0f172a; text-align: left;">
                    ${timestamp} (IST)
                  </td>
                </tr>
              </table>

              <!-- Message Title -->
              <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #1D4ED8; margin-bottom: 10px;">
                Project Requirements &amp; Scope
              </div>

              <!-- Message Content Box -->
              <div style="background-color: #ffffff; border: 1px solid #cbd5e1; border-left: 4px solid #1D4ED8; border-radius: 8px; padding: 18px; font-size: 15px; line-height: 1.6; color: #1e293b; white-space: pre-wrap; word-break: break-word; margin-bottom: 24px;">
${sanitizedMessage}
              </div>

              <!-- Reply Action Button -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" style="padding-top: 6px;">
                    <a href="mailto:${email}?subject=Re:%20Project%20Inquiry%20-%20Nagarajan" style="display: inline-block; background-color: #1D4ED8; color: #ffffff !important; padding: 13px 28px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px;">
                      Reply to ${name}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 16px 28px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #94a3b8;">
              Direct Portfolio Contact Notification • Nagarajan Full Stack Engineer
            </td>
          </tr>

        </table>
      </body>
    </html>
  `;

  // Main Notification to Portfolio Owner
  const ownerMailOptions = {
    from: `"${senderName}" <${senderEmail}>`,
    to: receiverEmail,
    replyTo: email,
    subject: `New Project Inquiry from ${name}`,
    text: `New project inquiry received from ${name} (${email}, Phone: ${phone || "N/A"}):\n\n${message}\n\nReceived: ${timestamp}`,
    html: ownerHtml,
  };

  // Client Auto-Acknowledgment Template
  const clientHtml = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Inquiry Confirmation</title>
      </head>
      <body style="margin: 0; padding: 24px; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0f172a; -webkit-text-size-adjust: 100%;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width: 100%; max-width: 580px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.04);">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #091E42 0%, #0C2A66 50%, #1D4ED8 100%); padding: 32px 28px; text-align: center;">
              <h1 style="margin: 0 0 6px 0; font-size: 22px; font-weight: 800; color: #ffffff;">
                Inquiry Received
              </h1>
              <p style="margin: 0; opacity: 0.9; font-size: 13px; color: #ffffff;">
                Thank you for reaching out
              </p>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 30px 28px; font-size: 15px; line-height: 1.65; color: #334155;">
              <p style="margin-top: 0;">Hi <strong>${name}</strong>,</p>
              <p>Thank you for getting in touch. I have received your project requirements and will review your scope, technical requirements, and timeline.</p>
              
              <div style="background-color: #f8fafc; border-left: 4px solid #1D4ED8; border-radius: 8px; padding: 16px; margin: 20px 0;">
                <strong style="color: #0f172a; display: block; margin-bottom: 6px; font-size: 13px;">Your submitted inquiry:</strong>
                <div style="font-style: italic; color: #475569; font-size: 14px;">"${sanitizedMessage.slice(0, 180)}${sanitizedMessage.length > 180 ? "..." : ""}"</div>
              </div>

              <p>You can expect a detailed response within <strong>24 hours</strong>. If you would prefer a live discovery call sooner, you can schedule a 30-minute video meet directly:</p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center" style="padding: 8px 0 16px 0;">
                    <a href="https://calendly.com/nagarajanmark0/30min" style="display: inline-block; background-color: #1D4ED8; color: #ffffff !important; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px;">
                      Schedule 30-Min Call
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin-top: 24px; font-size: 14px; color: #64748b; margin-bottom: 0;">
                Best regards,<br>
                <strong style="color: #0f172a;">Nagarajan</strong><br>
                Senior Full Stack Web Developer &amp; Software Engineer
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f1f5f9; padding: 16px 28px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;">
              Sent from Nagarajan's Engineering Portfolio • nagarajanmark0@gmail.com
            </td>
          </tr>

        </table>
      </body>
    </html>
  `;

  const clientMailOptions = {
    from: `"${senderName}" <${senderEmail}>`,
    to: email,
    subject: `Inquiry Confirmation — Nagarajan`,
    text: `Hi ${name},\n\nThank you for reaching out! I have received your message and will get back to you within 24 hours.\n\nYou can also schedule a direct 30-minute call: https://calendly.com/nagarajanmark0/30min\n\nBest regards,\nNagarajan`,
    html: clientHtml,
  };

  // If credentials are configured, send both emails
  if (process.env.SMTP_USER || process.env.EMAIL_USER) {
    const info = await transporter.sendMail(ownerMailOptions);
    try {
      await transporter.sendMail(clientMailOptions);
    } catch (clientErr) {
      console.warn("Could not send client auto-confirmation email:", clientErr);
    }
    return { success: true, messageId: info.messageId };
  } else {
    console.log("📨 [DEV MODE EMAIL TRANSMISSION]");
    console.log("To:", receiverEmail);
    console.log("From Client:", `${name} <${email}>`);
    console.log("Phone:", phone);
    console.log("Message:", message);
    return { success: true, simulated: true };
  }
}
