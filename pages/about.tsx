import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>About - NelsonBot</title>
      </Head>
      <h1 className="text-2xl font-bold mb-4">About NelsonBot</h1>
      <p className="mb-4">
        NelsonBot is a mobile-first Progressive Web App (PWA) chatbot designed to provide information and answer questions related to pediatric health. It uses advanced AI technology to offer helpful and informative responses to your queries.
      </p>
      <p className="mb-4">
        Please note that while NelsonBot aims to provide accurate information, it should not be considered a substitute for professional medical advice. Always consult with a qualified healthcare provider for medical concerns.
      </p>
      <h2 className="text-xl font-semibold mb-2">Features:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Mobile-first design for easy access on smartphones and tablets</li>
        <li>Progressive Web App capabilities for offline access and easy installation</li>
        <li>Powered by advanced AI models for accurate and helpful responses</li>
        <li>Chat history for reviewing past conversations</li>
        <li>Customizable settings to tailor your experience</li>
      </ul>
      <Link href="/" className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Back to Chat
      </Link>
    </div>
  )
}

