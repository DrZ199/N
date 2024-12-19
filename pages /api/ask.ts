import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { question } = req.body

  if (!question) {
    return res.status(400).json({ error: 'Question cannot be empty' })
  }

  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_URL!,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.HF_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputs: question }),
      }
    )

    if (!response) {
      throw new Error('No response from API')
    }

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Hugging Face API error:', errorData)
      return res.status(response.status).json({ error: 'Error from Hugging Face API', details: errorData })
    }

    const data = await response.json()
    res.status(200).json({ response: data[0]?.generated_text || 'No response' })
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ error: 'Internal server error', message: error instanceof Error ? error.message : 'Unknown error' })
  }
}