import fs from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Prepare the data
    const data = { name, email, message, timestamp: new Date() };

    // Get the file path
    const filePath = path.resolve('data', 'submissions.json');

    // Read the existing data from the file
    const existingData = JSON.parse(fs.readFileSync(filePath, 'utf-8') || '[]');

    // Append the new submission to the existing data
    existingData.push(data);

    // Write the data back to the file
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

    return NextResponse.json({ message: 'Your message has been saved!' });
  } catch (error) {
    console.error('Error saving to file:', error);
    return NextResponse.json({ message: 'Something went wrong!' }, { status: 500 });
  }
}

// import nodemailer from 'nodemailer';
// import { NextResponse } from 'next/server';

// export async function POST(req: Request) {
//   try {
//     const { name, email, message } = await req.json();

//     // Setup Nodemailer transporter
//     const transporter = nodemailer.createTransport({
//       service: 'Gmail',
//       auth: {
//         user: 'your-email@gmail.com',  // Your email
//         pass: 'your-email-password',    // Your email password (or use an OAuth token)
//       },
//     });

//     // Compose email content
//     const mailOptions = {
//       from: 'your-email@gmail.com',
//       to: 'recipient-email@example.com',  // The recipient email address
//       subject: 'New Contact Form Submission',
//       text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//     };

//     // Send the email
//     await transporter.sendMail(mailOptions);

//     return NextResponse.json({ message: 'Your message has been sent successfully!' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return NextResponse.json({ message: 'Something went wrong!' }, { status: 500 });
//   }
// }
