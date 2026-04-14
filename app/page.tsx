// app/page.tsx
import Link from 'next/link'

const domains = [
  {
    title: 'Planning & Preparation',
    href: '/planning-and-preparation',
    icon: '📋',
    description: 'Lesson plans, differentiated materials, and assessment tools',
  },
  {
    title: 'The Classroom Environment',
    href: '/the-classroom-environment',
    icon: '🏫',
    description: 'Room layout, seating, classroom management, and anchor charts',
  },
  {
    title: 'Instruction',
    href: '/instruction',
    icon: '📖',
    description: 'Student feedback, lesson reflections, and instructional adjustments',
  },
  {
    title: 'Professional Responsibilities',
    href: '/professional-responsibilities',
    icon: '🤝',
    description: 'Communication, collaboration, meetings, and professional development',
  },
]

export default function Home() {
  return (
    <div>

      {/* ── HERO ── */}
      <div className="hero-section">
        <img
          src="/images/profile.png"
          alt="Profile photo"
          className="profile-photo"
        />
        <div className="hero-text">
          <h1>Caitlyn Rawlings</h1>
          {/* <p className="hero-subtitle">Student Teacher · High School Mathematics</p> */}
          <p className="hero-bio">
            {/* 2-3 sentence bio: who you are, where you're student teaching,
                what draws you to teaching high school math */}
          </p>
          <div className="contact-row">
            <span>caitlyn.rawlings@gmail.com</span>
            {/* <span><a href="/* linkedin url ">LinkedIn</a></span> */}
          </div>
        </div>
      </div>

      {/* ── TEACHING PHILOSOPHY ──
      <div className="section ">
        <h2>Teaching Philosophy</h2>
        <p>
          {/* Paste your teaching philosophy statement here 
        </p>
      </div> */}


      {/* ── RESUME ── */}
      <div className="section">
        <div className="resume-header-row">
          <h2>Resume</h2>
          <a href="/RawlingsResumePDF.pdf" download className="download-btn">
            Download PDF
          </a>
        </div>

        {/* PROFESSIONAL PROFILE */}
        <div className="resume-section">
          <h3>Professional Profile</h3>
          <div className="resume-item">
            <p>
              Passionate mathematics educator currently completing student teaching in 7th 
              grade math and pre-algebra, committed to making mathematics accessible, 
              engaging, and meaningful for all learners. Brings a strong foundation in 
              working with diverse students through K-12 substitute teaching, high school 
              tutoring, and a collegiate-level teaching assistant, with a consistent focus 
              on supporting struggling learners while maintaining high expectations. Skilled 
              at breaking down complex concepts and fostering a classroom culture where 
              students feel safe to take risks and grow. Eager to bring energy, organization, 
              and a genuine passion for student success to a full-time mathematics teaching 
              position. 
            </p>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="resume-section">
          <h3>Education</h3>

          <div className="resume-item">
            <div className="resume-item-header">
              <strong>Master of Arts in Teaching Mathematics Education (Secondary)</strong>
              <span className="resume-date">Anticipated May 2026</span>
            </div>
            <p className="resume-institution">Western Governors University · Salt Lake City, UT</p>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted)', marginBottom: '0.4rem' }}>
              Relevant Coursework
            </p>
            <ul>
              <li>Practices for Inclusive Classrooms — designing equitable learning environments that support diverse learners</li>
              <li>Curriculum & Instructional Strategies for Meaningful Learning — developing standards-aligned lessons using research-based instructional strategies</li>
              <li>Monitoring Student Learning Through Assessment — integrating formative and summative assessments to drive reflection, goal setting, and instructional adjustment</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <strong>Bachelor of Science in Computer Science</strong>
              <span className="resume-date">September 2022 – December 2024</span>
            </div>
            <p className="resume-institution">University of Washington · Seattle, WA</p>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted)', marginBottom: '0.4rem' }}>
              Relevant Coursework
            </p>
            <ul>
              <li>Linear Algebra</li>
              <li>Foundations of Computing I (Discrete Mathematics)</li>
              <li>Foundations of Computing II (Probability & Statistics)</li>
            </ul>
          </div>

        </div>

        {/* CERTIFICATIONS */}
        <div className="resume-section">
          <h3>Certifications & Licenses</h3>

          <div className="resume-item">
            <div className="resume-item-header">
              <strong>Washington State Teaching Certificate</strong>
              <span className="resume-date">Anticipated May 2026</span>
            </div>
            <ul>
              <li>Mathematics Endorsement</li>
              <li>Computer Science Endorsement</li>
            </ul>
          </div>

        </div>

        {/* TEACHING EXPERIENCE */}
        <div className="resume-section">
          <h3>Teaching Experience</h3>

          <div className="resume-item">
            <div className="resume-item-header">
              <strong>Middle School Mathematics Student Teacher</strong>
              <span className="resume-date">January 2026 – Present</span>
            </div>
            <p className="resume-institution">Orting Middle School · Orting, WA</p>
            <ul>
              <li>Design and deliver daily math instruction across multiple 7th and 8th grade sections aligned to Washington state standards, incorporating formative assessment data to adjust pacing and content in real time </li>
              <li>Develop differentiated materials for a diverse learner population including students with IEPs, ensuring equitable access to grade-level curriculum </li>
              <li>Collaborated with mentor teacher and PLC team to align instructional strategies across sections, supporting consistent student growth schoolwide </li>
              <li>Partnered with mentor teacher to maintain ongoing family communication via ParentSquare and individual outreach, keeping families informed of student progress and behavioral concerns </li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <strong>Emergency Substitute Teacher</strong>
              <span className="resume-date">March 2025 – Present</span>
            </div>
            <p className="resume-institution">Franklin Pierce School District · Tacoma, WA</p>
            <ul>
              <li>Maintain productive, safe classroom environments across diverse grade levels and subject areas by applying consistent behavior management strategies and school policies </li>
              <li>Demonstrate the ability to step into various grade levels and subject areas, adapting teaching methods to meet diverse learning styles and student needs while fulfilling lesson plans </li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <strong>Teaching Assistant — Data Science</strong>
              <span className="resume-date">February 2024 – December 2024</span>
            </div>
            <p className="resume-institution">InventXYZ · Seattle, WA</p>
            <ul>
              <li>Supported 200+ high school students in building data science skills through hands-on Tableau projects, coaching a cohort from under 50% to 100% assignment completion through targeted feedback </li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <strong>Teaching Assistant — Introduction to Digital Design</strong>
              <span className="resume-date">March 2023 – March 2024</span>
            </div>
            <p className="resume-institution">UW Department of Computer Science · Seattle, WA</p>
            <ul>
              <li>Mentored 120+ students in Introduction to Digital Design, clarifying complex concepts and providing debugging support for SystemVerilog code and hardware/software issues </li>
              <li>Coordinated office hours across a 5-TA team to maximize student access to support and ensure timely grading turn around </li>
            </ul>
          </div>

        </div>

        {/* ADDITIONAL EXPERIENCE */}
        <div className="resume-section">
          <h3>Additional Experience</h3>

          <div className="resume-item">
            <div className="resume-item-header">
              <strong>Director of Collaboration — Residential Programming Board</strong>
              <span className="resume-date">September 2023 – June 2024</span>
            </div>
            <p className="resume-institution">University of Washington · Seattle, WA</p>
            <ul>
              <li>Planned and executed campus event with attendance up to 2000, managing logistics and communication from concept to completion </li>
              <li>Built and maintained partnerships with 30+ organizations to co-produce programming, strengthening community engagement across residential life </li>
            </ul>
          </div>

        </div>

      </div>
      {/* end resume */}

    </div>
  )
}