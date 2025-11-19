import { useEffect, useState } from 'react'

const WORDS = [
  'instant',
  'trustless',
  'universal',
  'verifiable',
  'zero delay',
  'decentralized',
  'better',
]

export default function LandingHero() {
  const [index, setIndex] = useState(0)
  const word = WORDS[index]

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length)
    }, 2000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="hero" id="hero">
      <video
        className="video-bg"
        src="/media/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="hero-overlay">
        <p className="hero-title">The <span key={word} className="accent word-anim">{word}</span> x402<br></br>facilitator</p>
        <p className="hero-sub">Unlock AI agents transactions with <span className="fancy-underline">0 seconds</span> delay on Ethereum, Solana, XRP, TON and more</p>
      </div>
    </section>
  )
}

