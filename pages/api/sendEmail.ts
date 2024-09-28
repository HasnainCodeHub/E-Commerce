// Importing required packages
import express, { Request, Response } from 'express'; // Import express and types
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv'; // Use dotenv for loading environment variables

dotenv.config(); // Ensure you have dotenv to load environment variables

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies

// Define the interface for the request body
interface ContactForm {
    name: string;
    email: string;
    message: string;
}

// Contact Form Endpoint
app.post('/api/contact', async (req: Request<unknown, unknown, ContactForm>, res: Response) => {
    const { name, email, message } = req.body;

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.GMAIL_USER, // Your Gmail account
            pass: process.env.GMAIL_PASS, // Your Gmail app password
        },
    });

    // Mail options
    const mailOptions = {
        from: email,
        to: process.env.GMAIL_USER, // Your email
        subject: 'Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        // Send email
        const info = await transporter.sendMail(mailOptions);
        res.status(200).send('Message sent: ' + info.response);
    } catch (error: any) { // Use any to cover all possible error types
        console.error('Error sending email:', error);
        res.status(500).send('Error sending message: ' + error.toString());
    }
});

// Start your server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
