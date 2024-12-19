import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ChatHistory } from '../types'

export default function History() {
  const [chatHistory, setChatHistory] = useState<ChatHistory[]>([])

  useEffect(() => {
    // In a real app, you would fetch the chat history from an API or local storage
    const mockHistory: ChatHistory[] = [
      { id: '1', timestamp: '2023-05-01 10:30', preview: 'What are the symptoms of...' },
      { id: '2', timestamp: '2023-05-02 14:15', preview: 'How to treat a fever in...' },
      { id: '3', timestamp: '2023-05-03 09:45', preview: 'Is it normal for a baby to...' },
    ]
    setChatHistory(mockHistory)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Chat History - NelsonBot</title>
      </Head>
      
      <header className="bg-primary text-white p-4 flex items-center gap-4">
        <Link href="/" className="p-2 -ml-2 hover:bg-white/10 rounded-full">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-2xl font-semibold">Chat History</h1>
      </header>

      <main className="p-4 space-y-4">
        {chatHistory.map((chat) => (
          <div key={chat.id} className="bg-white rounded-2xl shadow-sm p-4">
            <Link href={`/chat/${chat.id}`} className="block hover:bg-gray-50">
              <div className="text-sm text-gray-500">{chat.timestamp}</div>
              <div className="mt-2 text-gray-900">{chat.preview}</div>
            </Link>
          </div>
        ))}
      </main>
    </div>
  )
}

