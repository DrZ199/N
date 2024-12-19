import Head from 'next/head'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>About - NelsonBot</title>
      </Head>
      
      <header className="bg-primary text-white p-4 flex items-center gap-4">
        <Link href="/" className="p-2 -ml-2 hover:bg-white/10 rounded-full">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-2xl font-semibold">About NelsonBot</h1>
      </header>

      <main className="p-4 space-y-4">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">What is NelsonBot?</h2>
          <p className="mb-4">
            NelsonBot is an AI-powered chatbot designed to provide information and answer questions related to pediatric health. It uses advanced language models to offer helpful and informative responses to your queries.
          </p>
          <p className="mb-4">
            Please note that while NelsonBot aims to provide accurate information, it should not be considered a substitute for professional medical advice. Always consult with a qualified healthcare provider for medical concerns.
          </p>
          <h3 className="text-lg font-semibold mb-2">Features:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Mobile-first design for easy access on smartphones and tablets</li>
            <li>Progressive Web App capabilities for offline access and easy installation</li>
            <li>Powered by advanced AI models for accurate and helpful responses</li>
            <li>Chat history for reviewing past conversations</li>
            <li>Customizable settings to tailor your experience</li>
          </ul>
          <p>
            Version: 1.0.0
          </p>
        </div>
      </main>
    </div>
  )
}

