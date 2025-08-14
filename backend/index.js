/**
 * sendEmail.js
 * Single-file example: Express server with a POST /send-email endpoint
 * Uses nodemailer to send emails. Beginner-friendly comments (Hindi + English).
 */

/* ====== Imports ====== */
const express = require('express');         // Express: lightweight web server
const nodemailer = require('nodemailer');   // Nodemailer: send emails from Node.js
const cors = require('cors');               // CORS: allow requests from frontend
require('dotenv').config();                 // dotenv: load environment variables from .env

/* ====== Basic setup ====== */
const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors());                // Allow cross-origin requests (frontend se call karne ke liye)
app.use(express.json());        // JSON body parser: req.body me JSON milega

/* ====== Transporter setup (Nodemailer) ======
   Security: credentials should be in .env, never commit them to repo.
   Supported providers: Gmail (with app password), SMTP relay, SendGrid SMTP, Mailgun SMTP, etc.
*/
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,           // example: "smtp.gmail.com" or your provider
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER,         // SMTP username (from .env)
    pass: process.env.SMTP_PASS,         // SMTP password (from .env)
  },
});

/* Optional: verify transporter on server start (helps debug credentials) */
transporter.verify()
  .then(() => console.log('✅ Mail transporter is ready'))
  .catch(err => console.warn('⚠️ Mail transporter verify failed:', err.message));

/* ====== POST /send-email endpoint ======
   Expecting JSON body:
   {
     "name": "Sender Name",
     "email": "sender@example.com",
     "subject": "Hello",
     "message": "This is the message body"
   }
*/
app.get('/',(req,res)=>{
    res.send("KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK")
})
app.post('/send-mail', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body || {};

    // Basic validation - beginner-friendly
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required. (Name, email aur message required hain.)'
      });
    }

    // Compose mail options
    const mailOptions = {
      from: `"${name}" <${process.env.FROM_EMAIL || process.env.SMTP_USER}>`, // sender shown in mail
      to: process.env.TO_EMAIL || process.env.SMTP_USER, // where portfolio owner wants to receive emails
      replyTo: email, // reply-to set to the visitor's email
      subject: subject || `New message from portfolio - ${name}`,
      // Simple HTML body (you can make it more fancy)
      html: `
        <h3>New message from portfolio contact form</h3>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject || '(no subject)')}</p>
        <hr/>
        <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
      `
    };

    // Send mail using transporter
    const info = await transporter.sendMail(mailOptions);

    // Success response
    return res.json({
      success: true,
      message: 'Email sent successfully. (Email bhej diya gaya)',
      info: {
        messageId: info.messageId,
      },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send email. (Email bhejne me error)',
      error: error.message,
    });
  }
});

/* ====== Helper: simple HTML escape to avoid injection in HTML email ====== */
function escapeHtml(str = '') {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

/* ====== Start server ====== */
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
