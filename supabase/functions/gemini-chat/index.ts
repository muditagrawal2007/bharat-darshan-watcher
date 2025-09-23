import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();
    
    const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY');
    if (!GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY is not set');
    }

    console.log('Received message:', message);

    const culturalPrompt = `You are an expert guide on Indian culture, traditions, philosophy, and heritage. You ONLY provide information about:
- Indian festivals, rituals, and celebrations
- Indian philosophy, spirituality, and ancient wisdom
- Indian arts, crafts, dance, and music
- Indian history, monuments, and archaeology
- Indian cuisine, traditional practices, and customs
- Indian literature, languages, and scriptures
- Indian clothing, jewelry, and traditional attire
- Yoga, Ayurveda, and traditional Indian medicine
- Indian family traditions and social customs

If someone asks about anything outside these topics, politely redirect them to ask about Indian culture instead. Always respond in a respectful, informative manner that celebrates India's rich heritage.

User question: ${message}`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: culturalPrompt
          }]
        }]
      }),
    });

    const data = await response.json();
    console.log('Gemini API response:', data);

    if (!response.ok) {
      throw new Error(`Gemini API error: ${data.error?.message || 'Unknown error'}`);
    }

    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated';

    return new Response(JSON.stringify({ response: generatedText }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in gemini-chat function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});