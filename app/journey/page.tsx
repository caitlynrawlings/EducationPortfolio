'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

type Zone = {
  id: string
  x: number
  title: string
  content: string
  icon: string
}

export default function Journey() {
  const [position, setPosition] = useState(0)
  const [activeZone, setActiveZone] = useState<Zone | null>(null)

  const zones: Zone[] = [
    {
      id: 'reading',
      x: 100,
      icon: '📖',
      title: 'Early Experiences in Education',
      content:
        'I began working with students in an after-school reading program, helping younger learners build confidence in their reading skills.',
    },
    {
      id: 'tutor',
      x: 300,
      icon: '📐',
      title: 'Precalculus Tutor',
      content:
        'As a precalculus tutor, I helped peers break down complex concepts and develop problem-solving strategies.',
    },
    {
      id: 'baking',
      x: 500,
      icon: '🧁',
      title: 'Learning Through Creativity',
      content:
        'At a daycare, I led baking activities that showed how hands-on learning builds engagement and confidence.',
    },
    {
      id: 'cse',
      x: 700,
      icon: '💻',
      title: 'CSE 369 Teaching Assistant',
      content:
        'Supported students in understanding complex computer systems and strengthened my ability to guide analytical thinking.',
    },
    {
      id: 'data',
      x: 900,
      icon: '📊',
      title: 'Data Science + History',
      content:
        'Worked with high school students integrating data science into history, connecting math to real-world contexts.',
    },
    {
      id: 'sub',
      x: 1100,
      icon: '🏫',
      title: 'Substitute Teaching',
      content:
        'Adapted to many classrooms, strengthening classroom management and flexibility.',
    },
    {
      id: 'student',
      x: 1300,
      icon: '🍎',
      title: 'Student Teaching',
      content:
        'Designed and led lessons, built relationships, and refined my teaching approach.',
    },
    {
      id: 'future',
      x: 1500,
      icon: '🌱',
      title: 'Looking Forward',
      content:
        'Excited to continue growing as an educator and helping students build confidence in mathematics.',
    },
  ]

  // Movement
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setPosition((p) => Math.min(p + 40, 1500))
      if (e.key === 'ArrowLeft') setPosition((p) => Math.max(p - 40, 0))
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Detect active zone
  useEffect(() => {
    const found = zones.find((z) => Math.abs(z.x - position) < 60)
    setActiveZone(found || null)
  }, [position])

  return (
    <div className="min-h-screen bg-white p-8">
      {/* HEADER */}
      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl font-bold mb-2">My Journey to Teaching</h1>
        <p className="text-gray-600">
          Use the arrow keys to move through the experiences that shaped my path
          as an educator.
        </p>
      </div>

      {/* GAME AREA */}
      <div className="relative overflow-x-hidden border rounded-xl h-75 bg-gray-50">
        {/* Timeline line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300" />

        {/* World */}
        <div
          className="absolute top-0 left-0 h-full"
          style={{
            width: '1600px',
            transform: `translateX(${-position + 200}px)`,
            transition: 'transform 0.2s ease-out',
          }}
        >
          {/* Zones */}
          {zones.map((zone) => {
            const isActive = activeZone?.id === zone.id

            return (
              <div
                key={zone.id}
                className="absolute flex flex-col items-center"
                style={{ left: zone.x, top: '40%' }}
              >
                <div
                  className={`text-3xl transition-all ${
                    isActive ? 'scale-125' : 'opacity-70'
                  }`}
                >
                  {zone.icon}
                </div>
                <div className="text-xs mt-2 text-center w-24">
                  {zone.title}
                </div>
              </div>
            )
          })}

          {/* Player */}
          <div
            className="absolute top-[55%] text-2xl transition-all"
            style={{ left: position }}
          >
            🚶‍♀️
          </div>
        </div>
      </div>

      {/* POPUP */}
      {activeZone && (
        <div className="max-w-2xl mx-auto mt-8 p-6 bg-white border rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">
            {activeZone.icon} {activeZone.title}
          </h2>
          <p className="text-gray-700">{activeZone.content}</p>
        </div>
      )}

      {/* BACK LINK */}
      <div className="text-center mt-10">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}