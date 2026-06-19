import Groq from 'groq-sdk'

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
})

/**
 * Generate 10 platform-optimized formats from one content
 * @param {string} userContent - The original content
 * @param {string} brandVoice - Brand voice description
 * @returns {Promise<Object>} - Object with 10 platform versions
 */
export const generateContent = async (userContent, brandVoice = 'professional') => {
  if (!userContent || userContent.trim().length === 0) {
    throw new Error('Please provide some content to repurpose')
  }

  if (!import.meta.env.VITE_GROQ_API_KEY) {
    throw new Error('Missing API key. Add VITE_GROQ_API_KEY to your .env file.')
  }

  const prompt = `You are an expert content creator who specializes in repurposing content for different social media platforms.

ORIGINAL CONTENT:
${userContent}

BRAND VOICE: ${brandVoice}

TASK: Convert this content into 10 different platform-optimized formats.

IMPORTANT: Return ONLY a valid JSON object. No markdown formatting, no extra text, no code blocks. Just pure JSON starting with { and ending with }.

Generate this exact JSON structure with REAL content (not placeholders):

{
  "twitter": {
    "title": "Twitter Thread",
    "icon": "🐦",
    "content": "Write actual 5-tweet thread here. Each tweet under 280 chars. Use hooks. Separate tweets with --- on new line. First tweet should have strong hook."
  },
  "linkedin": {
    "title": "LinkedIn Post",
    "icon": "💼",
    "content": "Write actual professional, story-driven post with insights. Use line breaks for readability. Include hook, 2-3 main points, and question at the end."
  },
  "instagram": {
    "title": "Instagram Caption",
    "icon": "📸",
    "content": "Write actual engaging caption with emojis and line breaks. Include hook, value, and call-to-action. End with 5-10 relevant hashtags."
  },
  "email": {
    "title": "Email Newsletter",
    "icon": "📧",
    "content": "Subject: [Write actual catchy subject line]\\n\\n[Write actual email body with greeting, value, and CTA]"
  },
  "facebook": {
    "title": "Facebook Post",
    "icon": "👥",
    "content": "Write actual conversational, engaging post. Longer than Twitter. Include questions to drive engagement."
  },
  "tiktok": {
    "title": "TikTok Script",
    "icon": "🎵",
    "content": "[HOOK - 3 seconds]: write actual hook\\n[MAIN CONTENT - 30 seconds]: write actual content\\n[CTA]: write actual call to action"
  },
  "youtube": {
    "title": "YouTube Description",
    "icon": "🎬",
    "content": "Write actual SEO-optimized description with keywords, chapters/timestamps, links, and hashtags at the bottom."
  },
  "pinterest": {
    "title": "Pinterest Pin",
    "icon": "📌",
    "content": "Write actual catchy title (max 100 chars)\\n\\nDescription: Write actual SEO-rich description with keywords"
  },
  "reddit": {
    "title": "Reddit Post",
    "icon": "🤖",
    "content": "Title: Write actual genuine, helpful title\\n\\nWrite actual authentic post content - no marketing speak. Be conversational and helpful."
  },
  "blog": {
    "title": "Blog Summary",
    "icon": "📝",
    "content": "TL;DR: Write actual one sentence summary\\n\\nKey Points:\\n• Write actual point 1\\n• Write actual point 2\\n• Write actual point 3\\n\\nConclusion: Write actual brief wrap-up"
  }
}

Generate creative, platform-specific content based on the original content. Make each version unique to the platform's audience and best practices. Use ACTUAL content, not placeholder text.

Return ONLY the JSON object with actual generated content. No explanations.`

  try {
    const response = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are a content creation expert. You MUST return only valid JSON without any markdown formatting or extra text. Generate real content, not placeholders.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.8,
      max_tokens: 4000,
      response_format: { type: 'json_object' },
    })

    const responseText = response.choices[0].message.content

    const cleanedResponse = responseText
      .replace(/```json/g, '')
      .replace(/```/g, '')
      .trim()

    return JSON.parse(cleanedResponse)
  } catch (error) {
    console.error('Groq API Error:', error)

    if (error.message?.includes('API key') || error.status === 401) {
      throw new Error('Invalid API key. Please check your .env file.')
    }

    if (error.message?.includes('rate limit') || error.status === 429) {
      throw new Error('Rate limit exceeded. Please wait a minute and try again.')
    }

    if (error instanceof SyntaxError) {
      throw new Error('AI response was invalid. Please try again with different content.')
    }

    throw new Error('Failed to generate content. Please try again.')
  }
}

export default { generateContent }
