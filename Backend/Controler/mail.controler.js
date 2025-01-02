import { sendMail } from "../SendMail/sendmail.js";

export const sendGmail = async (req, res) => {
  const { name, email, message } = req.body;

  // Validate request body
  if (!name || !email || !message) {
    return res.status(400).json({
      type: "error",
      message: "Missing required fields: name, email, and message are all required.",
    });
  }

  try {
    // Send email using the sendMail utility
    await sendMail({
      email: "s.dharra88@gmail.com", // Hardcoded recipient email
      subject: "THIS IS PORTFOLIO WEBSITE MAIL",
      message,
      Usermail: email,
      name,
    });

    // Respond with success
    return res.status(200).json({
      type: "success",
      message: "Message sent successfully!",
    });
  } catch (error) {

    // Respond with error
    return res.status(500).json({
      type: "error",
      message: "Message not sent. Please try again later.",
      error: error.message, // Include error details for debugging
    });
  }
};
