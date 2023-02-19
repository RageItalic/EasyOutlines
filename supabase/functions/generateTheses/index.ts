// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

export const enum ThesisTypes {
  BOOK_THESIS = "BOOK_THESIS",
  ABSTRACT_THESIS = "ABSTRACT_THESIS"
}

export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', {headers: corsHeaders})
  }

  try {
    const {thesisType, workTitle = null, authorName = null, abstractTopic = null} = await req.json()
    const API_URL = "https://api.openai.com/v1/engines/text-davinci-003/completions";
    let prompt = ""
    const maxTokens = 720;
    const temperature = 0.5;

    if (thesisType === ThesisTypes.BOOK_THESIS && workTitle !== null && authorName !== null) {
      prompt = `I need to write an essay on ${workTitle} by author ${authorName}. Can you help and give me 4 complete thesis statements with 3 sources for each thesis?`;
    } else if (thesisType === ThesisTypes.ABSTRACT_THESIS && abstractTopic !== null) {
      prompt = `I need to write an essay on ${abstractTopic}. Can you help and give me 4 complete thesis statements with 3 sources for each thesis?`
    } else {
      throw new Error("Something went wrong. Check the data being sent to the backend!");
    }

    const requestBody = {
      prompt,
      max_tokens: maxTokens,
      temperature,
    };

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${Deno.env.get("OPENAI_API_KEY")}`,
      },
      body: JSON.stringify(requestBody),
    })
    const data = await response.json()

    console.log("LOOK AT ALL THIS DATA", data)

    return new Response(
      JSON.stringify(data),
      { 
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json" 
        } 
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({error: error.message}),
      { 
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json'
      },
      status: 400
    })
  }

  
})

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'