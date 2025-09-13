import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, projectType, message, type } = body;

    // Create email content
    const emailSubject = `New ${type === 'contact' ? 'Contact Form' : 'Cost Estimate'} Submission - ${name}`;
    
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #8B0000; border-bottom: 2px solid #8B0000; padding-bottom: 10px;">
          New ${type === 'contact' ? 'Contact Form' : 'Cost Estimate'} Submission
        </h2>
        
        <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Customer Details</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          ${projectType ? `<p><strong>Project Type:</strong> ${projectType}</p>` : ''}
        </div>
        
        <div style="background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h3 style="color: #333; margin-top: 0;">Message</h3>
          <p style="line-height: 1.6;">${message}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background: #e8f4f8; border-radius: 8px;">
          <p style="margin: 0; font-size: 14px; color: #666;">
            <strong>Submitted:</strong> ${new Date().toLocaleString('en-NG', { 
              timeZone: 'Africa/Lagos',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })} (WAT)
          </p>
        </div>
        
        <div style="margin-top: 20px; text-align: center; font-size: 12px; color: #999;">
          <p>This email was sent from the Drenopav Luxury Floors website contact form.</p>
        </div>
      </div>
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Drenopav Contact Form <noreply@drenopavfloors.ng>',
      to: ['durucoenter12@gmail.com'],
      subject: emailSubject,
      html: emailHtml,
      replyTo: email, // Allow direct reply to the customer
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to send email notification' },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully',
        emailId: data?.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}
