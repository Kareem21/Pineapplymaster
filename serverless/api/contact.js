// /api/contact.js
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { captchaToken, formData } = req.body;

        // Log the form data (optional)
        console.log('Form submission:', formData);

        // Simply return success
        return res.status(200).json({ message: 'Thank you for your message!!' });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'Something went wrong.' });
    }
}