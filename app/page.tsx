// app/page.tsx
import Link from 'next/link'


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
          <p className="hero-subtitle">Math and Computer Science Educator</p>
          {/* <p className="hero-bio">
            Connecting math, computer science, and creativity.
          </p> */}
          {/* QUICK LINKS */}
          <div className="contact-row">
            <span>caitlyn.rawlings@gmail.com</span>
            {/* <span><a href="/* linkedin url ">LinkedIn</a></span> */}
            <a href="/RawlingsResumePDF.pdf" download className="simple-link">
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* ── INTRODUCTION ── */}
      <div className=" section ">
        {/* <h2>Introduction</h2> */}
         <p className="mb-4">
          Welcome to my teaching portfolio! I am a math educator with a background in computer science, passionate about helping students see math as a creative and meaningful subject. I design lessons that emphasize patterns, problem-solving, and real-world connections. I use my background in computer science to integrate interactive tools into my teaching and connect content to real-world applications. I aim to create a classroom environment where all students feel confident exploring ideas, making mistakes, and thinking deeply.
        </p>
        <p>
          In this portfolio, you can learn about my <a href="/teaching-philosophy" className="simple-link">teaching philosophy</a>, explore my <a href="/teaching-practice" className="simple-link">teaching practice</a> through the lens of the Danielson Framework for Teaching, and see examples of my work <a href="/beyond-the-classroom" className="simple-link">beyond the classroom</a>. You can also view my <a href="/resume" className="simple-link">resume</a> for a summary of my experience and qualifications. 
          Each section highlights different aspects of my approach to education, with examples and reflections that illustrate my commitment to supporting student learning and growing as an educator.
        </p>
      </div>


      {/* ── QUICK LINKS ──
      <div className="section">
        <div className="resume-header-row">
          <h2>Resume</h2>
          <a href="/RawlingsResumePDF.pdf" download className="download-btn">
            Download PDF
          </a>
        </div> */}

        

      
      {/* end resume */}

    </div>
  )
}