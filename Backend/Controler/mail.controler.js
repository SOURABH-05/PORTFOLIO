import { sendMail } from "../SendMail/sendmail.js";

export const sendGmail = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log("--- New Mail Request ---");
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);

    // Validate request body
    if (!name || !email || !message) {
      console.warn("Validation failed: Missing fields", { name, email, message });
      return res.status(400).json({
        type: "error",
        message: `Missing fields. Received: name=${!!name}, email=${!!email}, message=${!!message}`,
      });
    }

    // Send email using the sendMail utility
    await sendMail({
      email: "s.dharra88@gmail.com", // Recipient
      subject: "PORTFOLIO CONTACT FORM",
      message,
      Usermail: email,
      name,
    });

    console.log("Mail sent successfully to owner.");
    return res.status(200).json({
      type: "success",
      message: "Message sent successfully!",
    });

  } catch (error) {
    console.error("CRITICAL ERROR in sendGmail:", error.message);

    return res.status(500).json({
      type: "error",
      message: error.message.includes("Failed to send email") 
        ? "SMTP Error. Check your App Password." 
        : "Internal Server Error.",
      error: error.message,
    });
  }
};
