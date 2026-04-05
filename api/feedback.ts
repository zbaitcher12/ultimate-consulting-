import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { businessName, requestType, priority, pageSection, description } = req.body ?? {};

  if (!businessName || !requestType || !description) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const apiKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!apiKey || !databaseId) {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const response = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        parent: { database_id: databaseId },
        properties: {
          'Business Name': {
            title: [{ text: { content: String(businessName) } }],
          },
          'Request Type': {
            select: { name: String(requestType) },
          },
          'Priority': {
            select: { name: String(priority || 'Medium') },
          },
          'Page/Section': {
            rich_text: [{ text: { content: String(pageSection || '') } }],
          },
          'Description': {
            rich_text: [{ text: { content: String(description) } }],
          },
          'Status': {
            status: { name: 'New' },
          },
          'Dated Submitted': {
            date: { start: new Date().toISOString().split('T')[0] },
          },
        },
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Notion API error:', error);
      throw new Error('Notion API error');
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Feedback submission error:', err);
    return res.status(500).json({ error: 'Failed to submit request' });
  }
}
