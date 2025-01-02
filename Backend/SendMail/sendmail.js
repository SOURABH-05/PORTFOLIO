import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const sendMail = async (options) => {
  try {
    // Create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Corrected host for Gmail SMTP
      port: 465, // Secure port for sending emails
      service: "gmail", // Gmail service
      auth: {
        user: process.env.EMAIL, // Use environment variable for the sender's email
        pass: process.env.PASS, // Password for the sender email (use environment variable)
      },
      secure: true, // Ensures the connection is secure (recommended for Gmail)
    });

    const mailOptions = {
      from: process.env.EMAIL, // Sender address (from environment variable)
      to: options.email, // Dynamic receiver email
      subject: options.subject, // Email subject
      text: `${options.message}\n\nSent by: ${options.name} (${options.Usermail})`, // Email body
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error.message); // Provide more context
    throw new Error("Failed to send email.");
  }
};
