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



// Fast template design
// require("dotenv").config();
// const nodemailer = require("nodemailer");

// module.exports = async (req, res) => {
//   // Add CORS headers to match your frontend
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

//   // Handle preflight requests
//   if (req.method === 'OPTIONS') {
//     return res.status(200).end();
//   }

//   if (req.method !== "POST") {
//     return res.status(405).json({ success: false, message: "Method Not Allowed" });
//   }

//   const { name, email, message } = req.body;

//   // Add basic validation (keeps your original flow but prevents empty submissions)
//   if (!name || !email || !message) {
//     return res.status(400).json({ success: false, message: "All fields are required" });
//   }

//   // Keep your original email transporter config
//   const transporter = nodemailer.createTransport({
//     host: "smtp.hostinger.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: "no-reply@neshad.com",
//       pass: process.env.SMTP_PASS,
//     },
//     tls: {
//       rejectUnauthorized: false // Helps with some SSL issues
//     }
//   });

//   // Your exact original email templates - not changed!
//   const adminSubject = `✉️ New Contact Submission – ${name}`;
//   const adminHTML = `
//     <div style="font-family: 'Segoe UI', Roboto, sans-serif; color: #1f1f1f; line-height: 1.6;">
//       <h2 style="font-weight: 600; font-size: 20px; margin-bottom: 24px;">📬 New Message Received</h2>
//       <div style="background-color: #f4f4f4; padding: 20px; border-radius: 8px; border-left: 4px solid #18F197;">
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #236AD3;">${email}</a></p>
//         <p><strong>Message:</strong></p>
//         <p style="margin-top: 10px;">${message}</p>
//       </div>
//       <p style="font-size: 13px; color: #7a7a7a; margin-top: 30px;">
//         This message was sent through your personal contact form. You can reply directly to continue the conversation.
//       </p>
//     </div>
//   `;

//   const userSubject = `Thanks for your message, ${name}!`;
//   const userHTML = `
//     <div style="font-family: 'Segoe UI', Roboto, sans-serif; color: #1f1f1f; line-height: 1.6;">
//       <h2 style="font-weight: 600; font-size: 20px; margin-bottom: 24px;">Hello ${name},</h2>
//       <p>Thanks a lot for reaching out — your message has been received!</p>
//       <p>I'll get back to you within <strong>24 to 48 hours</strong>. If it's urgent, feel free to email me directly at
//         <a href="mailto:neshadcodes@gmail.com" style="color: #236AD3;">neshadcodes@gmail.com</a>.
//       </p>
//       <p style="margin-top: 24px;">Until then, feel free to check out:</p>
//       <ul style="margin-top: 12px;">
//         <li><a href="https://linkedin.com/in/yourprofile" style="color: #18F197;">🔗 LinkedIn</a></li>
//         <li><a href="https://github.com/yourprofile" style="color: #18F197;">💻 GitHub</a></li>
//         <li><a href="https://yourdomain.com/resume.pdf" style="color: #18F197;">📄 View Resume</a></li>
//       </ul>
//       <p style="margin-top: 40px;">
//         Best regards,<br />
//         <strong style="font-size: 16px;">Neshad</strong><br />
//         Frontend Engineer & UI Enthusiast
//       </p>
//       <hr style="margin-top: 40px;" />
//       <p style="font-size: 12px; color: #999;">
//         This is an automated response confirming we received your message.
//       </p>
//           <!-- Footer -->
//       <div style="background-color: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #666;">
//         <p style="margin: 0;">This is an automated message. Please do not reply directly to this email.</p>
//         <p style="margin: 5px 0 0;">© ${new Date().getFullYear()} Neshad. All rights reserved.</p>
//       </div>
//     </div>
//   `;

//   try {
//     // Your original email sending logic
//     await transporter.sendMail({
//       from: '"${name} via Neshad" <no-reply@neshad.com>',
//       to: "neshadcodes@gmail.com",
//       subject: adminSubject,
//       html: adminHTML,
//       replyTo: email,
//     });

//     await transporter.sendMail({
//       from: '"Neshad" <no-reply@neshad.com>',
//       to: email,
//       subject: userSubject,
//       html: userHTML,
//     });

//     res.status(200).json({ success: true, message: "Emails sent" });
//   } catch (err) {
//     console.error("Email sending error:", err); // Added logging
//     res.status(500).json({ 
//       success: false, 
//       message: "Failed to send email", 
//       error: err.message 
//     });
//   }
// };



// Second template
require("dotenv").config();
const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: "no-reply@neshad.com",
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const adminSubject = `\u2709\ufe0f New Contact Submission – ${name}`;
  const adminHTML = `
    <div style="font-family: 'Segoe UI', Roboto, sans-serif; color: #1f1f1f; line-height: 1.6;">
      <h2 style="font-weight: 600; font-size: 20px; margin-bottom: 24px;">\ud83d\udcec New Message Received</h2>
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
      <h2 style="font-weight: 600; font-size: 20px; margin-bottom: 24px;">Hello ${name},</h2>
      <p>Thanks a lot for reaching out — your message has been received!</p>
      <p>I’ll get back to you within <strong>24 to 48 hours</strong>. If it’s urgent, feel free to email me directly at
        <a href="mailto:neshadcodes@gmail.com" style="color: #236AD3;">neshadcodes@gmail.com</a>.
      </p>
      <p style="margin-top: 24px;">Until then, feel free to check out:</p>
      <ul style="margin-top: 12px;">
        <li><a href="https://linkedin.com/in/yourprofile" style="color: #18F197;">\ud83d\udd17 LinkedIn</a></li>
        <li><a href="https://github.com/yourprofile" style="color: #18F197;">\ud83d\udcbb GitHub</a></li>
        <li><a href="https://yourdomain.com/resume.pdf" style="color: #18F197;">\ud83d\udcc4 View Resume</a></li>
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
      <div style="background-color: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #666;">
        <p style="margin: 0;">This is an automated message. Please do not reply directly to this email.</p>
        <p style="margin: 5px 0 0;">© ${new Date().getFullYear()} Neshad. All rights reserved.</p>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"${name} via Neshad" <no-reply@neshad.com>`,
      to: "neshadcodes@gmail.com",
      subject: adminSubject,
      html: adminHTML,
      replyTo: email,
    });

    await transporter.sendMail({
      from: '"Neshad" <no-reply@neshad.com>',
      to: email,
      subject: userSubject,
      html: userHTML,
      headers: {
        "Auto-Submitted": "auto-replied",
        "X-Auto-Response-Suppress": "All",
        "Precedence": "bulk",
      },
    });

    res.status(200).json({ success: true, message: "Emails sent successfully" });
  } catch (err) {
    console.error("\u274c Email sending error:", err.message);
    res.status(500).json({ success: false, message: "Failed to send email", error: err.message });
  }
};
