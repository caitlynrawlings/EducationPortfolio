'use client'
import { useState } from 'react'

interface GallerySlide {
  images: string[]
  caption: string
}

export default function Gallery({ slides }: { slides: GallerySlide[] }) {
  const [slideIndex, setSlideIndex] = useState(0)

  const prev = () => setSlideIndex(i => (i > 0 ? i - 1 : slides.length - 1))
  const next = () => setSlideIndex(i => (i < slides.length - 1 ? i + 1 : 0))

  const currentSlide = slides[slideIndex]

  return (
    <div className="slideshow">
      <div className="slideshow-inner">
        <button className="slideshow-btn" onClick={prev}>‹</button>

        <div className="slideshow-image-wrap">
            {currentSlide.images.length > 1 ? (
                <div className="slideshow-scroll">
                {currentSlide.images.map((src, i) => (
                    <img key={i} src={src} alt={`${currentSlide.caption} — page ${i + 1}`} />
                ))}
                </div>
            ) : (
                <img src={currentSlide.images[0]} alt={currentSlide.caption} />
            )}
        </div>

        <button className="slideshow-btn" onClick={next}>›</button>
      </div>
      <p className="slideshow-caption">{currentSlide.caption}</p>
      <span className="slideshow-counter">{slideIndex + 1} / {slides.length}</span>
    </div>
  )
}