import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

// Verify required environment variables
const verifyEnv = () => {
  const required = ["SMTP_EMAIL", "SMTP_PASSWORD", "SMTP_EMAIL_RECEIVER"];
  const missing = required.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(`Missing env vars: ${missing.join(", ")}`);
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    verifyEnv();

    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method not allowed" });
    }

    const { type, ...formData } = req.body;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Verify SMTP connection
    await transporter.verify();

    const baseSubject = "New Request - DBros Twins Cleaning";
    let emailContent;

    switch (type) {
      case "consultation":
        emailContent = {
          subject: `${baseSubject} (Consultation)`,
          text: `Consultation Details:\n${Object.entries(formData)
            .map(([key, val]) => `${key}: ${val}`)
            .join("\n")}`,
        };
        break;
      case "package":
        emailContent = {
          subject: `${baseSubject} (${formData.package} Package)`,
          text: `Package Details:\nPackage: ${
            formData.package
          }\n${Object.entries(formData)
            .filter(([key]) => key !== "package")
            .map(([key, val]) => `${key}: ${val}`)
            .join("\n")}`,
        };
        break;
      case "booking":
        emailContent = {
          subject: `${baseSubject} (Booking)`,
          text: `New Booking from ${formData.firstName} ${formData.lastName}`,
          html: `
              <h2>New Booking Request</h2>
              <table style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif;">
                <tr><td style="padding: 8px; font-weight: bold;">Date:</td><td style="padding: 8px;">${formData.date}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Time:</td><td style="padding: 8px;">${formData.time}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Name:</td><td style="padding: 8px;">${formData.firstName} ${formData.lastName}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${formData.email}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${formData.phone}</td></tr>
              </table>
              <p style="font-size: 0.9em; color: #666;">Sent automatically from the DBros Booking Form</p>
            `,
        };
        break;

      default:
        return res.status(400).json({ message: "Invalid request type" });
    }

    const info = await transporter.sendMail({
      from: `"DBros Contact Form" <${process.env.SMTP_EMAIL}>`,
      to: process.env.SMTP_EMAIL_RECEIVER,
      subject: emailContent.subject,
      text: emailContent.text,
      html: emailContent.html || emailContent.text.replace(/\n/g, "<br>"),
    });

    console.log("Email sent:", info.messageId);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Full error:", error);
    return res.status(500).json({
      message: "Error sending email",
      error: error instanceof Error ? error.message : "Unknown error occurred",
    });
  }
}
