<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Inquiry</title>
    <style>
        body { font-family: 'Inter', 'Segoe UI', Roboto, sans-serif; background-color: #f0f4ff; margin: 0; padding: 0; }
        .wrapper { width: 100%; table-layout: fixed; background-color: #f0f4ff; padding-bottom: 40px; }
        .main-content { max-width: 600px; background-color: #ffffff; margin: 30px auto; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(29, 78, 216, 0.1); border: 1px solid #e2e8f0; }
        
        /* Header with Gradient like your site */
        .header { background: linear-gradient(135deg, #1d4ed8 0%, #a855f7 100%); padding: 40px 20px; text-align: center; color: #ffffff; }
        .header h1 { margin: 0; font-size: 26px; font-weight: 700; letter-spacing: -0.5px; }
        .header p { margin-top: 10px; opacity: 0.9; font-size: 14px; }

        .body-section { padding: 40px 30px; }
        .status-badge { display: inline-block; padding: 6px 12px; background: #eef2ff; color: #1d4ed8; border-radius: 20px; font-size: 12px; font-weight: 700; text-transform: uppercase; margin-bottom: 20px; }
        
        .data-table { width: 100%; border-collapse: collapse; }
        .data-row td { padding: 12px 0; border-bottom: 1px solid #f1f5f9; }
        .label { color: #64748b; font-size: 13px; font-weight: 600; width: 100px; text-transform: uppercase; }
        .value { color: #1e293b; font-size: 15px; font-weight: 500; }

        /* Subject Box */
        .subject-highlight { background: #f8fafc; border-radius: 12px; padding: 20px; margin: 25px 0; border: 1px dashed #cbd5e1; }
        .subject-text { font-size: 18px; color: #1d4ed8; font-weight: 700; margin: 0; }

        /* Message Styling */
        .message-title { font-size: 14px; font-weight: 600; color: #475569; margin-bottom: 10px; display: block; }
        .message-content { background: #ffffff; border: 1px solid #f1f5f9; padding: 20px; border-radius: 12px; line-height: 1.6; color: #334155; font-style: italic; box-shadow: inset 0 2px 4px rgba(0,0,0,0.02); }

        .footer { text-align: center; padding: 25px; background: #f8fafc; border-top: 1px solid #f1f5f9; }
        .footer p { margin: 0; font-size: 12px; color: #94a3b8; line-height: 1.5; }
        
        .btn { display: inline-block; padding: 14px 30px; background: #1d4ed8; color: #ffffff !important; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; margin-top: 25px; transition: 0.3s; }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="main-content">
            <div class="header">
                <h1>WordWise Dictionary</h1>
                <p>New Message From Contact Form</p>
            </div>

            <div class="body-section">
                <span class="status-badge">New Inquiry</span>
                
                <table class="data-table">
                    <tr class="data-row">
                        <td class="label">Sender</td>
                        <td class="value"><strong>{{ $data['name'] }}</strong></td>
                    </tr>
                    <tr class="data-row">
                        <td class="label">Email</td>
                        <td class="value">{{ $data['email'] }}</td>
                    </tr>
                </table>

                <div class="subject-highlight">
                    <span class="label" style="margin-bottom: 5px; display: block;">Subject:</span>
                    <p class="subject-text">{{ $data['subject'] }}</p>
                </div>

                <span class="message-title">Message Content:</span>
                <div class="message-content">
                    {{ $data['message'] }}
                </div>

                <div style="text-align: center;">
                    <a href="mailto:{{ $data['email'] }}?subject=Re: {{ $data['subject'] }}" class="btn">Quick Reply</a>
                </div>
            </div>

            <div class="footer">
                <p>© 2026 WordWise, LLC. All rights reserved.</p>
                <p>This email was sent from the official contact form on your dictionary website.</p>
            </div>
        </div>
    </div>
</body>
</html>