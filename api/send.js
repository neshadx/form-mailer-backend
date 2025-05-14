require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: "no-reply@neshad.com",
    pass: process.env.SMTP_PASS,
  },
});

async function sendMail(name, email, message) {
  const adminSubject = `✉️ New Contact Submission – ${name}`;
  const adminHTML = `
  <div style="font-family: 'Segoe UI', Roboto, sans-serif; color: #1f1f1f; line-height: 1.6;">
    <h2 style="font-weight: 600; font-size: 20px; margin-bottom: 24px;">📬 New Message Received</h2>

    <div style="background-color: #f4f4f4; padding: 20px; border-radius: 8px; border-left: 4px solid #18F197;">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #236AD3;">${email}</a></p>
      <p><strong>Message:</strong></p>
      <p style="margin-top: 10px;">${message}</p>
    </div>

    <p style="font-size: 13px; color: #7a7a7a; margin-top: 30px;">
      This message was sent through your personal contact form. You can reply directly to continue the conversation.
    </p>
  </div>
  `;

  const userSubject = `Thanks for your message, ${name}!`;
  const userHTML = `
  <div style="font-family: 'Segoe UI', Roboto, sans-serif; color: #1f1f1f; line-height: 1.6;">
    <h2 style="font-weight: 600; font-size: 20px; margin-bottom: 24px;">👋 Hi ${name},</h2>

    <p>Thanks a lot for reaching out — your message has been received!</p>

    <p>I’ll get back to you within <strong>24 to 48 hours</strong>. If it’s urgent, feel free to email me directly at
      <a href="mailto:neshadcodes@gmail.com" style="color: #236AD3;">neshadcodes@gmail.com</a>.
    </p>

    <p style="margin-top: 24px;">Until then, feel free to check out:</p>
    <ul style="margin-top: 12px;">
      <li><a href="https://linkedin.com/in/yourprofile" style="color: #18F197;">🔗 LinkedIn</a></li>
      <li><a href="https://github.com/yourprofile" style="color: #18F197;">💻 GitHub</a></li>
      <li><a href="https://yourdomain.com/resume.pdf" style="color: #18F197;">📄 View Resume</a></li>
    </ul>

    <p style="margin-top: 40px;">
      Best regards,<br />
      <strong style="font-size: 16px;">Neshad</strong><br />
      Frontend Engineer & UI Enthusiast
    </p>

    <hr style="margin-top: 40px;" />

    <p style="font-size: 12px; color: #999;">
      This is an automated response confirming we received your message.
    </p>
  </div>
  `;

  try {
    await transporter.sendMail({
      from: '"Neshad" <no-reply@neshad.com>',
      to: "neshadcodes@gmail.com",
      subject: adminSubject,
      html: adminHTML,
    });

    await transporter.sendMail({
      from: '"Neshad" <no-reply@neshad.com>',
      to: email,
      subject: userSubject,
      html: userHTML,
    });

    console.log("✅ Emails sent to admin & client.");
  } catch (err) {
    console.error("❌ Failed to send email:", err.message);
  }
}

// 🔁 Use real values or hook this from your React or input system:
sendMail("Alex", "alex@example.com", "Hey, just testing your final professional mail template.");
