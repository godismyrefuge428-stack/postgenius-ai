# PostGenius Zapier Automation Setup Guide

This guide will help you automate content distribution across social media platforms and email services using Zapier.

## Prerequisites

- Zapier account (free tier available)
- PostGenius account with generated content
- Social media accounts (Instagram, TikTok, Facebook, Twitter)
- Email service account (Mailchimp, Brevo, ConvertKit, etc.)

---

## Zapier Zap 1: Auto-Post to Instagram

### Setup Steps

1. **Create New Zap**
   - Go to zapier.com and click "Create Zap"
   - Choose a name: "PostGenius → Instagram"

2. **Set Trigger**
   - Trigger App: "Webhooks by Zapier"
   - Trigger Event: "Catch Raw Hook"
   - Copy the webhook URL provided

3. **Add Trigger Data**
   - In PostGenius dashboard, go to Settings → Integrations
   - Paste the webhook URL in "Instagram Webhook"
   - Test trigger by generating content

4. **Set Action**
   - Action App: "Instagram"
   - Action Event: "Create Media"
   - Connect your Instagram account
   - Map fields:
     - Caption: `{{Content}}`
     - Image: `{{Image URL}}`
   - Turn on Zap

### Result
Every time you generate social content in PostGenius, it automatically posts to Instagram!

---

## Zapier Zap 2: Auto-Post to TikTok

### Setup Steps

1. **Create New Zap**
   - Click "Create Zap"
   - Name: "PostGenius → TikTok"

2. **Set Trigger**
   - Trigger App: "Webhooks by Zapier"
   - Trigger Event: "Catch Raw Hook"

3. **Set Action**
   - Action App: "TikTok"
   - Action Event: "Create Video"
   - Connect TikTok account
   - Map fields:
     - Description: `{{Content}}`
     - Video: `{{Video URL}}`

4. **Turn on Zap**

---

## Zapier Zap 3: Auto-Post to Facebook

### Setup Steps

1. **Create New Zap**
   - Name: "PostGenius → Facebook"

2. **Set Trigger**
   - Trigger App: "Webhooks by Zapier"
   - Trigger Event: "Catch Raw Hook"

3. **Set Action**
   - Action App: "Facebook Pages"
   - Action Event: "Create Post"
   - Connect Facebook account
   - Choose Page
   - Map fields:
     - Message: `{{Content}}`
     - Image: `{{Image URL}}`

4. **Turn on Zap**

---

## Zapier Zap 4: Auto-Post to Twitter/X

### Setup Steps

1. **Create New Zap**
   - Name: "PostGenius → Twitter"

2. **Set Trigger**
   - Trigger App: "Webhooks by Zapier"
   - Trigger Event: "Catch Raw Hook"

3. **Set Action**
   - Action App: "Twitter"
   - Action Event: "Create Tweet"
   - Connect Twitter account
   - Map fields:
     - Tweet Text: `{{Content}}`

4. **Turn on Zap**

---

## Zapier Zap 5: Send Email Campaigns

### Setup Steps

1. **Create New Zap**
   - Name: "PostGenius → Email Campaign"

2. **Set Trigger**
   - Trigger App: "Webhooks by Zapier"
   - Trigger Event: "Catch Raw Hook"

3. **Set Action**
   - Action App: "Mailchimp" (or your email service)
   - Action Event: "Create Campaign"
   - Connect Mailchimp account
   - Map fields:
     - Subject: `{{Email Subject}}`
     - Body: `{{Email Body}}`
     - List: Select your audience list

4. **Turn on Zap**

---

## Zapier Zap 6: Multi-Platform Posting (Advanced)

### Setup Steps

1. **Create New Zap**
   - Name: "PostGenius → All Platforms"

2. **Set Trigger**
   - Trigger App: "Webhooks by Zapier"
   - Trigger Event: "Catch Raw Hook"

3. **Add Multiple Actions**
   - Action 1: Instagram (as above)
   - Action 2: TikTok (as above)
   - Action 3: Facebook (as above)
   - Action 4: Twitter (as above)

4. **Turn on Zap**

This single Zap will post to all platforms simultaneously!

---

## Zapier Zap 7: Scheduled Posts

### Setup Steps

1. **Create New Zap**
   - Name: "PostGenius → Scheduled Posts"

2. **Set Trigger**
   - Trigger App: "Schedule"
   - Trigger Event: "Every Day at [TIME]"

3. **Set Action**
   - Action App: "Webhooks by Zapier"
   - Action Event: "POST"
   - URL: `https://postgenius-ai.com/api/zapier/schedule-post`
   - Data:
     ```json
     {
       "contentId": "{{Content ID}}",
       "platforms": ["instagram", "tiktok", "facebook"],
       "scheduledTime": "{{Now}}"
     }
     ```

4. **Turn on Zap**

---

## Zapier Zap 8: Email List Sync

### Setup Steps

1. **Create New Zap**
   - Name: "PostGenius → Mailchimp Sync"

2. **Set Trigger**
   - Trigger App: "Webhooks by Zapier"
   - Trigger Event: "Catch Raw Hook"

3. **Set Action**
   - Action App: "Mailchimp"
   - Action Event: "Add/Update Subscriber"
   - Connect Mailchimp
   - Map fields:
     - Email: `{{Email}}`
     - First Name: `{{First Name}}`
     - Last Name: `{{Last Name}}`

4. **Turn on Zap**

---

## Zapier Zap 9: Analytics Tracking

### Setup Steps

1. **Create New Zap**
   - Name: "PostGenius → Google Sheets (Analytics)"

2. **Set Trigger**
   - Trigger App: "Webhooks by Zapier"
   - Trigger Event: "Catch Raw Hook"

3. **Set Action**
   - Action App: "Google Sheets"
   - Action Event: "Create Spreadsheet Row"
   - Connect Google account
   - Choose spreadsheet
   - Map fields:
     - Date: `{{Date}}`
     - Content: `{{Content}}`
     - Platform: `{{Platform}}`
     - Engagement: `{{Engagement}}`

4. **Turn on Zap**

---

## Zapier Zap 10: Slack Notifications

### Setup Steps

1. **Create New Zap**
   - Name: "PostGenius → Slack"

2. **Set Trigger**
   - Trigger App: "Webhooks by Zapier"
   - Trigger Event: "Catch Raw Hook"

3. **Set Action**
   - Action App: "Slack"
   - Action Event: "Send Channel Message"
   - Connect Slack workspace
   - Choose channel: #marketing
   - Message:
     ```
     🎉 New content posted!
     Platform: {{Platform}}
     Content: {{Content}}
     Time: {{Time}}
     ```

4. **Turn on Zap**

---

## Testing Your Zaps

1. **Generate Test Content**
   - Go to PostGenius Dashboard
   - Generate a social media post
   - Check if it appears on your social media

2. **Monitor Zap Activity**
   - Go to your Zap in Zapier
   - Click "Activity" to see execution history
   - Check for errors or failures

3. **Troubleshooting**
   - Verify API keys are correct
   - Check account permissions
   - Ensure content format matches platform requirements

---

## Best Practices

✅ **Do:**
- Test each Zap individually before combining
- Use descriptive names for easy management
- Monitor Zap activity regularly
- Update Zaps when platforms change their APIs
- Keep content formatting platform-specific

❌ **Don't:**
- Post identical content to all platforms
- Use Zaps without testing first
- Ignore error notifications
- Forget to renew API keys
- Post too frequently (risk of spam filters)

---

## Troubleshooting

### Zap Not Triggering
- Verify webhook URL is correct
- Check PostGenius integration settings
- Test webhook manually in Zapier

### Posts Not Appearing
- Verify account permissions
- Check content format (image size, text length)
- Review platform-specific requirements
- Check Zap activity log for errors

### Authentication Errors
- Reconnect social media accounts
- Refresh API keys
- Verify account credentials
- Check for account restrictions

---

## Support

- **Zapier Help:** https://zapier.com/help
- **PostGenius Support:** support@postgenius-ai.com
- **Documentation:** https://docs.postgenius-ai.com

---

## Next Steps

1. Set up at least 3-4 Zaps to start
2. Test each Zap thoroughly
3. Monitor performance for 1 week
4. Optimize based on results
5. Add more Zaps as needed

Happy automating! 🚀
