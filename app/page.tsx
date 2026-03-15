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
            <span><a href="/* linkedin url */">LinkedIn</a></span>
          </div>
        </div>
      </div>

      {/* ── TEACHING PHILOSOPHY ── */}
      <div className="section ">
        <h2>Teaching Philosophy</h2>
        <p>
          {/* Paste your teaching philosophy statement here */}
        </p>
      </div>


      {/* ── RESUME ── */}
      <div className="section">
        <div className="resume-header-row">
          <h2>Resume</h2>
          <a href="/resume.pdf" download className="download-btn">
            Download PDF
          </a>
        </div>

        {/* PROFESSIONAL PROFILE */}
        <div className="resume-section">
          <h3>Professional Profile</h3>
          <div className="resume-item">
            <p>
              Passionate mathematics educator currently completing student teaching in 7th grade
              math and pre-algebra, committed to making mathematics accessible, engaging, and
              meaningful for all learners. Brings a strong foundation in working with diverse
              students through K-12 substitute teaching, high school tutoring, and a
              collegiate-level teacher assistant role, with a consistent focus on supporting
              struggling learners while maintaining high expectations. Skilled at breaking down
              complex concepts and fostering a classroom culture where students feel safe to take
              risks and grow. Eager to bring energy, organization, and a genuine passion for
              student success to a full-time mathematics teaching position.
            </p>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="resume-section">
          <h3>Education</h3>

          <div className="resume-item">
            <div className="resume-item-header">
              <strong>Master of Arts in Teaching — Mathematics Education (Secondary)</strong>
              <span className="resume-date">Anticipated May 2026</span>
            </div>
            <p className="resume-institution">Western Governors University · Kent, WA</p>
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
              <li>Mathematics Endorsement (NES 304 — Score: 286/300)</li>
              <li>Computer Science Endorsement (NES 315 — Score: 287/300)</li>
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
              <li>Deliver daily instruction in 7th grade math and pre-algebra across multiple sections, designing lessons aligned to Washington state standards</li>
              <li>Develop differentiated materials addressing content, process, and product to meet the needs of diverse learners including students with IEPs</li>
              <li>Design and administer formative and summative assessments, analyzing student data to adjust instruction and inform small group support</li>
              <li>Maintain a structured, high-expectation classroom environment through consistent routines, a weekly seating rotation, and a clear behavior escalation plan</li>
              <li>Collaborate with mentor teacher, PLC team, and math department to align instruction and support student growth</li>
              <li>Communicate regularly with families through ParentSquare unit updates and individual emails regarding student progress and behavior</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <strong>Emergency Substitute Teacher</strong>
              <span className="resume-date">March 2025 – Present</span>
            </div>
            <p className="resume-institution">Franklin Pierce School District · Tacoma, WA</p>
            <ul>
              <li>Foster a disciplined, safe, and positive learning atmosphere by managing student behavior and enforcing school policies</li>
              <li>Adapt teaching methods across various grade levels and subject areas to meet diverse learning styles and student needs</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <strong>Teaching Assistant — Data Science</strong>
              <span className="resume-date">February 2024 – December 2024</span>
            </div>
            <p className="resume-institution">InventXYZ · Seattle, WA</p>
            <ul>
              <li>Worked with over 200 high school students to build knowledge in data science through analyzing and creating data visualizations using Tableau</li>
              <li>Guided students from meeting less than 50% of assignment requirements to meeting 100% through targeted feedback and support</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <strong>Teaching Assistant — Introduction to Digital Design</strong>
              <span className="resume-date">March 2023 – March 2024</span>
            </div>
            <p className="resume-institution">UW Department of Computer Science · Seattle, WA</p>
            <ul>
              <li>Mentored over 120 students in Introduction to Digital Design, explaining challenging concepts and assisting with debugging SystemVerilog code and troubleshooting hardware and software problems</li>
              <li>Coordinated office hours with 4 teaching assistants to ensure widespread availability and timely return of assessments</li>
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
              <li>Coordinated large-scale events requiring extensive planning, communication, and organization, with attendance of up to 2,000 people</li>
              <li>Fostered collaboration between team and over 30 on-campus and off-campus entities</li>
            </ul>
          </div>

        </div>

      </div>
      {/* end resume */}

    </div>
  )
}