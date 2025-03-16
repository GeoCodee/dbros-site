import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { type, ...formData } = req.body;

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    try {
      let emailContent;
      const baseSubject = "New Request - DBros Twins Cleaning";

      switch (type) {
        case "consultation":
          emailContent = {
            subject: `${baseSubject} (Consultation)`,
            text: `Consultation Request Details:
              First Name: ${formData.firstName}
              Last Name: ${formData.lastName}
              Email: ${formData.email}
              Phone: ${formData.phone}
            `,
          };
          break;

        case "package":
          emailContent = {
            subject: `${baseSubject} (${formData.package} Package)`,
            text: `Package Signup Details:
              Package: ${formData.package}
              First Name: ${formData.firstName}
              Last Name: ${formData.lastName}
              Email: ${formData.email}
              Phone: ${formData.phone}
            `,
          };
          break;

        default:
          return res.status(400).json({ message: "Invalid request type" });
      }

      await transporter.sendMail({
        from: process.env.SMTP_EMAIL,
        to: process.env.SMTP_EMAIL_RECEIVER,
        subject: emailContent.subject,
        text: emailContent.text,
      });

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error sending email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
