import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, discription } = body;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "antarabodh@gmail.com",
        pass: "ntkj cpry prql xspb", // App password
      },
    });

    // Compose professional inquiry email
    await transporter.sendMail({
      from: `"Antarabodh" <antarabodh@gmail.com>`,
      to: "antarabodh@gmail.com",
      subject: `New Website Enquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #0056b3;">New Enquiry Received</h2>
          <p>You have received a new enquiry through the website contact form. Here are the details:</p>
          
          <table style="margin-top: 16px;">
            <tr>
              <td style="padding: 4px 8px;"><strong>Name:</strong></td>
              <td style="padding: 4px 8px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 4px 8px;"><strong>Email:</strong></td>
              <td style="padding: 4px 8px;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 4px 8px;"><strong>Phone:</strong></td>
              <td style="padding: 4px 8px;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 4px 8px; vertical-align: top;"><strong>Message:</strong></td>
              <td style="padding: 4px 8px;">${discription}</td>
            </tr>
          </table>

          <p style="margin-top: 24px;">Please follow up with the individual at your earliest convenience.</p>

          <hr style="margin-top: 32px; border: none; border-top: 1px solid #ccc;" />
          <p style="font-size: 12px; color: #777;">This message was generated automatically by your website's enquiry form.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: 'Something went wrong: ' + err },
      { status: 500 }
    );
  }
}
