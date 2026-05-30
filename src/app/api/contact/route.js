import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Basic validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return Response.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.GMAIL,
      },
    });

    await transporter.sendMail({
      from: `"GreenApple Studio Website" <${process.env.SENDER_EMAIL}>`,
      to: process.env.RECIEVER_MAIL,
      replyTo: email,
      subject: `New Contact: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0f0d;color:#fff;border-radius:12px;overflow:hidden;">
          <div style="background:#05e005;padding:24px 32px;">
            <h2 style="margin:0;color:#000;font-size:20px;">New Message — GreenApple Studio</h2>
          </div>
          <div style="padding:32px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;color:rgba(255,255,255,0.5);font-size:13px;width:100px;vertical-align:top;">NAME</td>
                <td style="padding:10px 0;color:#fff;font-size:15px;font-weight:600;">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:rgba(255,255,255,0.5);font-size:13px;vertical-align:top;">EMAIL</td>
                <td style="padding:10px 0;">
                  <a href="mailto:${email}" style="color:#05e005;font-size:15px;text-decoration:none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:rgba(255,255,255,0.5);font-size:13px;vertical-align:top;">MESSAGE</td>
                <td style="padding:10px 0;color:#fff;font-size:15px;line-height:1.7;">${message.replace(/\n/g, '<br/>')}</td>
              </tr>
            </table>
          </div>
          <div style="padding:16px 32px;border-top:1px solid rgba(255,255,255,0.1);font-size:12px;color:rgba(255,255,255,0.3);">
            Sent from greenapplestudio.in contact form
          </div>
        </div>
      `,
    });

    return Response.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('[contact/route] email error:', err);
    return Response.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
