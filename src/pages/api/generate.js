import Groq from "groq-sdk";

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { content, brandVoice } = req.body;

    if (!content || content.trim().length < 10) {
      return res.status(400).json({ error: "Content is too short" });
    }

    // API key is on SERVER - never exposed to browser!
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY, // No VITE_ prefix = server only
    });

    const prompt = `You are an expert content creator who specializes in repurposing content for different social media platforms.

ORIGINAL CONTENT:
${content}

BRAND VOICE: ${brandVoice || "professional"}

TASK: Convert this content into 10 different platform-optimized formats.

IMPORTANT: Return ONLY a valid JSON object. No markdown formatting, no extra text, no code blocks. Just pure JSON starting with { and ending with }.

Generate this exact JSON structure with REAL content:

{
  "twitter": {
    "title": "Twitter Thread",
    "icon": "🐦",
    "content": "Write actual 5-tweet thread here."
  },
  "linkedin": {
    "title": "LinkedIn Post",
    "icon": "💼",
    "content": "Write actual professional post."
  },
  "instagram": {
    "title": "Instagram Caption",
    "icon": "📸",
    "content": "Write actual engaging caption with emojis and hashtags."
  },
  "email": {
    "title": "Email Newsletter",
    "icon": "📧",
    "content": "Subject: [subject]\\n\\n[email body]"
  },
  "facebook": {
    "title": "Facebook Post",
    "icon": "👥",
    "content": "Write actual conversational post."
  },
  "tiktok": {
    "title": "TikTok Script",
    "icon": "🎵",
    "content": "[HOOK]: ...\\n[CONTENT]: ...\\n[CTA]: ..."
  },
  "youtube": {
    "title": "YouTube Description",
    "icon": "🎬",
    "content": "Write actual SEO description."
  },
  "pinterest": {
    "title": "Pinterest Pin",
    "icon": "📌",
    "content": "Write actual pin description."
  },
  "reddit": {
    "title": "Reddit Post",
    "icon": "🤖",
    "content": "Write actual helpful post."
  },
  "blog": {
    "title": "Blog Summary",
    "icon": "📝",
    "content": "TL;DR: [summary]\\n\\nKey Points:\\n• [point 1]\\n• [point 2]\\n• [point 3]"
  }
}

Return ONLY the JSON with actual generated content.`;

    const response = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a content creation expert. Return only valid JSON.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.8,
      max_tokens: 4000,
      response_format: { type: "json_object" },
    });

    const responseText = response.choices[0].message.content;
    const cleanedResponse = responseText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsedResponse = JSON.parse(cleanedResponse);

    return res.status(200).json(parsedResponse);
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({
      error: error.message || "Failed to generate content",
    });
  }
}
