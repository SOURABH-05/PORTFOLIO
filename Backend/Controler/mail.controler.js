import { sendMail } from "../SendMail/sendmail.js";

export const sendGmail = async (req, res) => {
  const { name, email, message } = req.body;
  console.log("Incoming mail request:", { name, email, message });

  // Validate request body
  if (!name || !email || !message) {
    console.warn("Validation failed: Missing fields");
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
    console.error("Critical error in sendGmail controller:", error.message);

    // Respond with error
    return res.status(500).json({
      type: "error",
      message: error.message.includes("Failed to send email") 
        ? "Email service error. Check your Gmail App Password." 
        : "Internal server error. Please try again later.",
      error: error.message,
    });
  }
};
