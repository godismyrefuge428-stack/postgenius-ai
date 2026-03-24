const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { topic, contentType, tone } = JSON.parse(event.body);

    if (!topic || !contentType) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing topic or contentType' }),
      };
    }

    const prompt = buildPrompt(topic, contentType, tone);

    const response = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are a professional content writer. Generate high-quality, engaging content.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 2000,
    });

    const content = response.data.choices[0].message.content;

    return {
      statusCode: 200,
      body: JSON.stringify({ content }),
    };
  } catch (error) {
    console.error('OpenAI error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

function buildPrompt(topic, contentType, tone = 'professional') {
  const toneGuide = {
    professional: 'Use a professional and formal tone.',
    casual: 'Use a casual and friendly tone.',
    creative: 'Use a creative and engaging tone.',
    technical: 'Use a technical and detailed tone.',
  };

  const contentGuides = {
    blog: 'Write a blog post (500-800 words) with a catchy title, introduction, main sections, and conclusion.',
    email: 'Write a professional email (150-250 words) with a subject line, greeting, body, and closing.',
    social: 'Write 5 engaging social media posts (Twitter, LinkedIn, Instagram) about this topic.',
    ad: 'Write a compelling ad copy (50-100 words) with a headline, body, and call-to-action.',
    description: 'Write a product description (100-200 words) highlighting key features and benefits.',
  };

  return `Topic: ${topic}\n\nContent Type: ${contentType}\n${contentGuides[contentType] || ''}\n\n${toneGuide[tone] || toneGuide.professional}`;
}
