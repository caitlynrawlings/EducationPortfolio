'use client'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

const nav = [
  {
    label: 'Planning & Preparation',
    href: '/planning-and-preparation',
    sections: [
      { label: 'Lesson Plans', id: 'lesson-plans' },
      { label: 'Differentiated Materials', id: 'differentiated-materials' },
      { label: 'Assessment Tools & Data Analysis', id: 'assessment-tools' },
    ],
  },
  {
    label: 'The Classroom Environment',
    href: '/the-classroom-environment',
    sections: [
      { label: 'Room Layout', id: 'room-layout' },
      { label: 'Seating Chart', id: 'seating-chart' },
      { label: 'Classroom Management', id: 'classroom-management' },
    ],
  },
  {
    label: 'Instruction',
    href: '/instruction',
    sections: [
      { label: 'Written Feedback', id: 'written-feedback' },
      { label: 'Personal Reflections', id: 'personal-reflections' },
      { label: 'Responding to Feedback', id: 'responding-to-feedback' },
    ],
  },
  {
    label: 'Professional Responsibilities',
    href: '/professional-responsibilities',
    sections: [
      { label: 'General Parent Updates', id: 'parent-updates' },
      { label: 'Parent Communication', id: 'parent-behavior' },
      { label: 'Department & Staff Meetings', id: 'meetings' },
      { label: 'Professional Development', id: 'professional-development' },
      { label: 'IEP & Student Support', id: 'iep' },
    ],
  },
]

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null)
//   const navRef = useRef<HTMLDivElement>(null)

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     function handleClickOutside(e: MouseEvent) {
//       if (navRef.current && !navRef.current.contains(e.target as Node)) {
//         setActiveDropdown(null)
//       }
//     }
//     document.addEventListener('mousedown', handleClickOutside)
//     return () => document.removeEventListener('mousedown', handleClickOutside)
//   }, [])
    useEffect(() => {
    function handleResize() {
        if (window.innerWidth > 900) {
        setMenuOpen(false)
        setExpandedMobile(null)
        }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
    }, [])

  return (
    <header>
      <div className="header-inner">
        <Link href="/" className="portfolio-title">
            Caitlyn Rawlings
        </Link>

        {/* Desktop nav */}
        <nav className="nav-desktop" >
          {nav.map(({ label, href, sections }) => (
            <div key={href} className="nav-item" 
              onMouseEnter={() => sections.length > 0 && setActiveDropdown(href)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="nav-link-wrapper">
                <Link href={href} className="nav-link">
                  {label}
                </Link>
                {sections.length > 0 && (
                  <button
                    className="nav-chevron-btn"
                    onClick={() => setActiveDropdown(activeDropdown === href ? null : href)}
                    aria-label={`Toggle ${label} dropdown`}
                  >
                    <span className={`nav-chevron ${activeDropdown === href ? 'rotated' : ''}`}>▾</span>
                  </button>
                )}
              </div>

              {sections.length > 0 && (
                <div className={`nav-dropdown ${activeDropdown === href ? 'visible' : ''}`}>
                  <div className="nav-dropdown-inner">
                    {sections.map(({ label, id }) => (
                    <a
                        key={id}
                        href={`${href}#${id}`}
                        className="nav-dropdown-link"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`}>
            <span />
            <span />
            <span />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`nav-mobile-wrapper ${menuOpen ? 'open' : ''}`}>
        <nav className="nav-mobile">
          {nav.map(({ label, href, sections }) => (
            <div key={href} className="nav-mobile-group">
              <div className="nav-mobile-row">
                <Link
                  href={href}
                  className="nav-mobile-parent"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
                {sections.length > 0 && (
                  <button
                    className="nav-mobile-expand"
                    onClick={() => setExpandedMobile(expandedMobile === href ? null : href)}
                  >
                    <span className={`nav-chevron ${expandedMobile === href ? 'rotated' : ''}`}>▾</span>
                  </button>
                )}
              </div>

              {sections.length > 0 && (
                <div className={`nav-mobile-children ${expandedMobile === href ? 'open' : ''}`}>
                  {sections.map(({ label, id }) => (
                    <a
                      key={id}
                      href={`${href}#${id}`}
                      className="nav-mobile-child"
                      onClick={() => { setMenuOpen(false); setExpandedMobile(null) }}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  )
}