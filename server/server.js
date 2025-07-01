const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create transporter for sending emails
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { from_name, from_email, subject, message } = req.body;

    // Validate required fields
    if (!from_name || !from_email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required fields.'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(from_email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    const transporter = createTransporter();

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to your own email
      subject: subject || `Portfolio Contact: Message from ${from_name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #333; text-align: center; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #007bff; margin-bottom: 5px;">Contact Details:</h3>
            <p style="margin: 5px 0;"><strong>Name:</strong> ${from_name}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${from_email}</p>
            <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject || 'No subject provided'}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #007bff; margin-bottom: 10px;">Message:</h3>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
              <p style="margin: 0; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666;">
            <p style="margin: 0; font-size: 14px;">
              This message was sent from your portfolio website contact form.
            </p>
            <p style="margin: 5px 0 0 0; font-size: 12px;">
              Sent on: ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
      replyTo: from_email
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: 'Message sent successfully! Thank you for contacting me.'
    });

  } catch (error) {
    console.error('Email sending error:', error);
    
    let errorMessage = 'Failed to send message. Please try again later.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check server configuration.';
    } else if (error.code === 'ENOTFOUND') {
      errorMessage = 'Network error. Please check your internet connection.';
    }

    res.status(500).json({
      success: false,
      message: errorMessage
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running successfully!',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});