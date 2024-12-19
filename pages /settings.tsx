import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Head from 'next/head'

export default function Settings() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    soundEffects: true,
    vibration: true,
    compactView: false
  })

  const toggleSetting = (setting: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Settings - NelsonBot</title>
      </Head>
      
      <header className="bg-[#8B5CF6] text-white p-4 flex items-center gap-4">
        <Link href="/" className="p-2 -ml-2 hover:bg-white/10 rounded-full">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-2xl font-semibold">Settings</h1>
      </header>

      <main className="p-4 space-y-4">
        <div className="bg-white rounded-2xl shadow-sm">
          <div className="p-4 flex items-center justify-between">
            <span className="text-lg">Notifications</span>
            <button
              onClick={() => toggleSetting('notifications')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.notifications ? 'bg-[#8B5CF6]' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                  settings.notifications ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm">
          <div className="p-4 flex items-center justify-between">
            <span className="text-lg">Dark Mode</span>
            <button
              onClick={() => toggleSetting('darkMode')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.darkMode ? 'bg-[#8B5CF6]' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                  settings.darkMode ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm">
          <div className="p-4 flex items-center justify-between">
            <span className="text-lg">Sound Effects</span>
            <button
              onClick={() => toggleSetting('soundEffects')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.soundEffects ? 'bg-[#8B5CF6]' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                  settings.soundEffects ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm">
          <div className="p-4 flex items-center justify-between">
            <span className="text-lg">Vibration</span>
            <button
              onClick={() => toggleSetting('vibration')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.vibration ? 'bg-[#8B5CF6]' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                  settings.vibration ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm">
          <div className="p-4 flex items-center justify-between">
            <span className="text-lg">Compact View</span>
            <button
              onClick={() => toggleSetting('compactView')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                settings.compactView ? 'bg-[#8B5CF6]' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                  settings.compactView ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

