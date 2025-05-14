// require("dotenv").config();
// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   host: "smtp.hostinger.com",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "no-reply@neshad.com",
//     pass: process.env.SMTP_PASS,
//   },
// });

// async function sendMail(name, email, message) {
//   const adminSubject = `✉️ New Contact Submission – ${name}`;
//   const adminHTML = `
//   <div style="font-family: 'Segoe UI', Roboto, sans-serif; color: #1f1f1f; line-height: 1.6;">
//     <h2 style="font-weight: 600; font-size: 20px; margin-bottom: 24px;">📬 New Message Received</h2>

//     <div style="background-color: #f4f4f4; padding: 20px; border-radius: 8px; border-left: 4px solid #18F197;">
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #236AD3;">${email}</a></p>
//       <p><strong>Message:</strong></p>
//       <p style="margin-top: 10px;">${message}</p>
//     </div>

//     <p style="font-size: 13px; color: #7a7a7a; margin-top: 30px;">
//       This message was sent through your personal contact form. You can reply directly to continue the conversation.
//     </p>
//   </div>
//   `;

//   const userSubject = `Thanks for your message, ${name}!`;
//   const userHTML = `
//   <div style="font-family: 'Segoe UI', Roboto, sans-serif; color: #1f1f1f; line-height: 1.6;">
//     <h2 style="font-weight: 600; font-size: 20px; margin-bottom: 24px;">👋 Hi ${name},</h2>

//     <p>Thanks a lot for reaching out — your message has been received!</p>

//     <p>I’ll get back to you within <strong>24 to 48 hours</strong>. If it’s urgent, feel free to email me directly at
//       <a href="mailto:neshadcodes@gmail.com" style="color: #236AD3;">neshadcodes@gmail.com</a>.
//     </p>

//     <p style="margin-top: 24px;">Until then, feel free to check out:</p>
//     <ul style="margin-top: 12px;">
//       <li><a href="https://linkedin.com/in/yourprofile" style="color: #18F197;">🔗 LinkedIn</a></li>
//       <li><a href="https://github.com/yourprofile" style="color: #18F197;">💻 GitHub</a></li>
//       <li><a href="https://yourdomain.com/resume.pdf" style="color: #18F197;">📄 View Resume</a></li>
//     </ul>

//     <p style="margin-top: 40px;">
//       Best regards,<br />
//       <strong style="font-size: 16px;">Neshad</strong><br />
//       Frontend Engineer & UI Enthusiast
//     </p>

//     <hr style="margin-top: 40px;" />

//     <p style="font-size: 12px; color: #999;">
//       This is an automated response confirming we received your message.
//     </p>
//   </div>
//   `;

//   try {
//     await transporter.sendMail({
//       from: '"Neshad" <no-reply@neshad.com>',
//       to: "neshadcodes@gmail.com",
//       subject: adminSubject,
//       html: adminHTML,
//     });

//     await transporter.sendMail({
//       from: '"Neshad" <no-reply@neshad.com>',
//       to: email,
//       subject: userSubject,
//       html: userHTML,
//     });

//     console.log("✅ Emails sent to admin & client.");
//   } catch (err) {
//     console.error("❌ Failed to send email:", err.message);
//   }
// }

// // 🔁 Use real values or hook this from your React or input system:
// sendMail("Alex", "alex@example.com", "Hey, just testing your final professional mail template.");












require('dotenv').config();
const nodemailer = require('nodemailer');

// Configure SMTP transporter
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: "no-reply@neshad.com",
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
});

async function sendMail(name, email, message) {
  // Email to admin (you)
  const adminMail = {
    from: '"Neshad" <no-reply@neshad.com>',
    to: "neshadcodes@gmail.com",
    subject: `New Contact Form Submission - ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #18F197;">New Message Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
    `
  };

  // Email to user (confirmation)
  const userMail = {
    from: '"Neshad" <no-reply@neshad.com>',
    to: email,
    subject: `Thanks for your message, ${name}!`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #18F197;">Thank You!</h2>
        <p>I've received your message and will get back to you soon.</p>
        <p><strong>Your Message:</strong></p>
        <p>${message}</p>
      </div>
    `
  };

  // Send both emails
  await transporter.sendMail(adminMail);
  await transporter.sendMail(userMail);
}

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false,
        message: 'All fields are required' 
      });
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ 
        success: false,
        message: 'Please enter a valid email address' 
      });
    }

    await sendMail(name, email, message);
    res.status(200).json({ success: true, message: "Emails sent successfully" });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      success: false,
      message: "Failed to send email",
      error: error.message 
    });
  }
};