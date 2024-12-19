import { NextApiRequest, NextApiResponse } from 'next'
import { generateText } from 'ai'
import { HfInference } from '@huggingface/inference'

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { messages } = req.body

    const { text } = await generateText({
      model: ({ input }) => hf.textGeneration({
        model: 'gpt2',
        inputs: input,
        parameters: {
          max_new_tokens: 50,
          temperature: 0.7,
          top_p: 0.95,
          repetition_penalty: 1.2,
        },
      }),
      messages,
    })

    res.status(200).json({ text })
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ message: 'An error occurred while processing your request' })
  }
}

