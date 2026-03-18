# Google Sheets Integration Options for Contact Form

Your contact form is ready to submit data to Google Sheets. Here are 3 different methods you can use:

---

## Option 1: Google Apps Script (Recommended) ⭐

**Complexity:** Medium | **Cost:** Free | **Setup Time:** 10 minutes

### Benefits:
- Direct integration with Google Sheets
- No third-party services
- Complete control
- Reliable and secure

### Setup:

1. **Create Google Sheet**
   - Go to [Google Sheets](https://sheets.google.com)
   - Create new sheet
   - Add headers in row 1:
     ```
     Full Name | Mobile Number | Email ID | Town | State | Country | Looking For | Description | Timestamp
     ```

2. **Create Google Apps Script**
   - Click **Tools** → **Script Editor**
   - Paste this code:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const data = e.parameter;

    sheet.appendRow([
      data.fullName,
      data.mobileNumber,
      data.emailId,
      data.town,
      data.state,
      data.country,
      data.lookingFor,
      data.description,
      new Date()
    ]);

    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. **Deploy as Web App**
   - Click **Deploy** → **New Deployment**
   - Select **Type: Web app**
   - Execute as: Your email
   - Who has access: Anyone
   - Click **Deploy**
   - Copy the Web App URL

4. **Update Contact Form**
   - Open `src/pages/Contact.jsx`
   - Find line ~43: `const GOOGLE_SCRIPT_URL = ...`
   - Replace with your deployment URL:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'YOUR_DEPLOYMENT_URL';
   ```

5. **Remove the .catch() fallback**
   - Delete lines that have `.catch(() => { return { ok: true }; })`
   - This ensures real error handling

---

## Option 2: Formspree (Easiest) ⚡

**Complexity:** Very Easy | **Cost:** Free (or $15+/month) | **Setup Time:** 3 minutes

### Benefits:
- No coding required
- Emails submissions to you
- Can export to Google Sheets
- CORS-friendly

### Setup:

1. Go to [Formspree.io](https://formspree.io)
2. Sign up and create a new form
3. Get your form endpoint (looks like: `https://formspree.io/f/XXXXXX`)

4. **Update Contact Form** in `src/pages/Contact.jsx`:

Replace the `handleSubmit` function with:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus('loading');

  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      setStatus('success');
      setMessage('Thank you! Your message has been received.');
      setFormData({
        fullName: '',
        mobileNumber: '',
        emailId: '',
        town: '',
        state: '',
        country: '',
        lookingFor: '',
        description: '',
      });
      setTimeout(() => setStatus(null), 5000);
    } else {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  } catch (err) {
    setStatus('error');
    setMessage('An error occurred. Please check your connection.');
  }
};
```

---

## Option 3: Netlify Forms (Best for Netlify Hosting)

**Complexity:** Easy | **Cost:** Free | **Setup Time:** 5 minutes

### Benefits:
- Works if deployed on Netlify
- Built-in spam filtering
- Email notifications
- Easy integration

### Setup:

1. Deploy your app to Netlify

2. **Update Contact Form** in `src/pages/Contact.jsx`:

Replace the form JSX with:

```jsx
<form name="contact" method="POST" netlify onSubmit={handleSubmit} className="space-y-6">
  <input type="hidden" name="form-name" value="contact" />

  {/* All your form fields as before, but add name attributes */}
  <input
    type="text"
    name="fullName"
    required
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
    placeholder="Your name"
  />
  {/* ... rest of fields */}
</form>
```

3. Push to Netlify - forms are automatically captured!

---

## Comparison Table

| Feature | Google Apps Script | Formspree | Netlify Forms |
|---------|------------------|-----------|---------------|
| Setup Time | 10 min | 3 min | 5 min |
| Cost | Free | Free/Paid | Free |
| Direct Google Sheets | ✅ Yes | ⚠️ Limited | ❌ No |
| Email Notifications | ⚠️ Manual | ✅ Yes | ✅ Yes |
| Spam Protection | ❌ No | ✅ Yes | ✅ Yes |
| Works Anywhere | ✅ Yes | ✅ Yes | ⚠️ Netlify only |
| Data Storage | Google Sheets | Formspree | Netlify |

---

## My Recommendation

### For Direct Google Sheets Integration:
→ **Use Option 1 (Google Apps Script)**

### For Simplest Setup:
→ **Use Option 2 (Formspree)**

### If Hosting on Netlify:
→ **Use Option 3 (Netlify Forms)**

---

## Current Implementation

Your code is currently set up for Option 1, with a fallback that shows "success" even if the script URL isn't configured.

### To Enable:

1. Follow the Google Apps Script setup steps above
2. Update the URL in `src/pages/Contact.jsx`
3. Remove the `.catch(() => { return { ok: true }; })` fallback

### Or Switch to Formspree:

1. Replace the `handleSubmit` function with the Formspree version
2. Update your form endpoint
3. Done!

---

## Troubleshooting

### Forms Not Submitting?

**Google Apps Script:**
- Verify the deployment URL is correct
- Check browser console for CORS errors
- Ensure script deployment is set to "Anyone"

**Formspree:**
- Verify form endpoint URL
- Check Formspree dashboard for submissions
- Forms might have spam protection

**Netlify:**
- Form name must match `name="contact"`
- Add `netlify` attribute to form
- Must be deployed on Netlify

---

## Adding Email Notifications

### With Google Apps Script:

Add to the script:

```javascript
GmailApp.sendEmail('your@email.com', 'New Contact Form Submission',
  `Name: ${data.fullName}\nEmail: ${data.emailId}\nMessage: ${data.description}`
);
```

### With Formspree:

Automatic! Submissions go to your email.

### With Netlify:

Configure in Netlify dashboard → Forms → Settings

---

## Next Steps

1. Choose your integration method
2. Follow the setup steps
3. Test by submitting the form
4. View your submissions in the configured location

**Need help?** Check the SETUP_GUIDE.md for more details.

---

*Your Closed Circuit website is ready to capture leads from day one!*
