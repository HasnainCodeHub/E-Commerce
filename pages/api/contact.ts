// /pages/api/contact.ts
import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  // Check if the request method is POST
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Validate the input data
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Please fill out all fields' });
    }

    try {
      // Create transporter using Gmail service
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER, // Your Gmail email address
          pass: process.env.GMAIL_PASS, // Your Gmail password or app password if 2FA is enabled
        },
      });

      // Define the email options
      const mailOptions = {
        from: email, // The sender's email
        to: process.env.GMAIL_USER, // Your Gmail address
        subject: `New Contact Us Message from ${name}`,
        text: message,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully!');

      return res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending email', error });
    }
  } else {
    // Set the allowed methods for the API endpoint
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
