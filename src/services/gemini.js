/**
 * Generate 10 platform-optimized formats from one content
 * Uses serverless function (API key hidden on server)
 */
export const generateContent = async (
  userContent,
  brandVoice = "professional",
) => {
  if (!userContent || userContent.trim().length === 0) {
    throw new Error("Please provide some content to repurpose");
  }

  try {
    console.log("🚀 Calling secure API...");

    // In production: calls /api/generate (Vercel serverless)
    // In development: calls Groq directly (fallback)
    const isProduction = import.meta.env.PROD;

    if (isProduction) {
      // PRODUCTION: Use serverless function (secure!)
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: userContent,
          brandVoice: brandVoice,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to generate");
      }

      const result = await response.json();
      console.log("✅ Secure API Response received");
      return result;
    } else {
      // DEVELOPMENT: Use Groq directly (for local testing)
      const Groq = (await import("groq-sdk")).default;

      const groq = new Groq({
        apiKey: import.meta.env.VITE_GROQ_API_KEY,
        dangerouslyAllowBrowser: true,
      });

      const prompt = `You are an expert content creator. Convert this content into 10 platform-optimized formats.

ORIGINAL CONTENT:
${userContent}

BRAND VOICE: ${brandVoice}

Return ONLY valid JSON with these keys: twitter, linkedin, instagram, email, facebook, tiktok, youtube, pinterest, reddit, blog. Each with title, icon, and content.`;

      const response = await groq.chat.completions.create({
        messages: [
          { role: "system", content: "Return only valid JSON." },
          { role: "user", content: prompt },
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

      console.log("✅ Dev API Response received");
      return parsedResponse;
    }
  } catch (error) {
    console.error("API Error:", error);

    if (error.message.includes("API key") || error.message.includes("401")) {
      throw new Error("Invalid API key. Please check configuration.");
    }
    if (error.message.includes("rate limit") || error.message.includes("429")) {
      throw new Error("Rate limit exceeded. Please wait and try again.");
    }

    throw new Error(error.message || "Failed to generate content.");
  }
};

export default { generateContent };
