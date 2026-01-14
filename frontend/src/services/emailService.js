/**
 * Email Service for form submissions
 *
 * This uses the Web3Forms API (free, no backend required)
 * Sign up at: https://web3forms.com/
 *
 * To set up:
 * 1. Go to https://web3forms.com/
 * 2. Enter your email (info@nursetechmedical.com)
 * 3. Get your Access Key
 * 4. Add to .env file: REACT_APP_WEB3FORMS_KEY=your_key_here
 */

const WEB3FORMS_KEY = process.env.REACT_APP_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE';

export const emailService = {
  /**
   * Send newsletter subscription
   */
  async subscribeNewsletter(email) {
    const formData = {
      access_key: WEB3FORMS_KEY,
      subject: 'New Newsletter Subscription',
      from_name: 'Cordflex Website',
      to_email: 'info@nursetechmedical.com',
      email: email,
      message: `New newsletter subscription from: ${email}`
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        return { success: true, message: 'Successfully subscribed to newsletter!' };
      } else {
        throw new Error(result.message || 'Subscription failed');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      throw new Error('Failed to subscribe. Please try again later.');
    }
  },

  /**
   * Send trial request
   */
  async sendTrialRequest(formData) {
    const emailData = {
      access_key: WEB3FORMS_KEY,
      subject: 'New Trial Request',
      from_name: formData.name,
      to_email: 'info@nursetechmedical.com',
      email: formData.email,
      message: `
Trial Request Details:

Name: ${formData.name}
Title: ${formData.title || 'N/A'}
Email: ${formData.email}
Phone: ${formData.phone || 'N/A'}
Hospital: ${formData.hospital}
Department: ${formData.department}
Number of Beds: ${formData.beds || 'N/A'}
Current Solution: ${formData.current_solution || 'N/A'}
Challenges: ${Array.isArray(formData.challenges) ? formData.challenges.join(', ') : formData.challenges || 'N/A'}
Preferred Start Date: ${formData.start_date || 'N/A'}
Timeline: ${formData.timeline || 'N/A'}
Stakeholders: ${formData.stakeholders || 'N/A'}
Additional Comments: ${formData.comments || 'N/A'}
      `.trim()
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(emailData)
      });

      const result = await response.json();

      if (result.success) {
        return { success: true, message: 'Trial request submitted successfully! We will contact you soon.' };
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Trial request error:', error);
      throw new Error('Failed to submit trial request. Please try again later.');
    }
  },

  /**
   * Send sample request
   */
  async sendSampleRequest(formData) {
    const emailData = {
      access_key: WEB3FORMS_KEY,
      subject: 'New Sample Request',
      from_name: formData.name,
      to_email: 'info@nursetechmedical.com',
      email: formData.email,
      message: `
Sample Request Details:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'N/A'}
Hospital: ${formData.hospital}
Department: ${formData.department}
Number of Beds: ${formData.beds || 'N/A'}
Shipping Address: ${formData.shipping_address || 'N/A'}
Source: ${formData.source || 'Website'}
Additional Comments: ${formData.comments || 'N/A'}
      `.trim()
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(emailData)
      });

      const result = await response.json();

      if (result.success) {
        return { success: true, message: 'Sample request submitted successfully! We will ship your samples soon.' };
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Sample request error:', error);
      throw new Error('Failed to submit sample request. Please try again later.');
    }
  },

  /**
   * Send general contact form
   */
  async sendContactForm(formData) {
    const emailData = {
      access_key: WEB3FORMS_KEY,
      subject: `Contact Form: ${formData.subject || 'General Inquiry'}`,
      from_name: formData.name,
      to_email: 'info@nursetechmedical.com',
      email: formData.email,
      message: `
Contact Form Submission:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'N/A'}
Company: ${formData.company || 'N/A'}
Subject: ${formData.subject || 'General Inquiry'}

Message:
${formData.message}
      `.trim()
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(emailData)
      });

      const result = await response.json();

      if (result.success) {
        return { success: true, message: 'Message sent successfully! We will get back to you soon.' };
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      throw new Error('Failed to send message. Please try again later.');
    }
  }
};

export default emailService;
