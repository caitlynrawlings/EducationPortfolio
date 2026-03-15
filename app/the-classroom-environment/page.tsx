// app/the-classroom-environment/page.tsx

export default function TheClassroomEnvironment() {
  return (
    <div>
      <div className="page-header">
        <h1>The Classroom Environment</h1>
        <p>Creating a safe, respectful, and well-organized learning environment</p>
      </div>

      {/* ── ROOM LAYOUT ── */}
      <div className="section ">
        <h2>Room Layout & Table Arrangements</h2>
        {/* Add your blueprint/diagram image here */}
        {/* <img src="/images/room-layout.png" alt="Room layout blueprint" /> */}
      </div>

      {/* ── SEATING CHART ── */}
      <div className="section ">
        <h2>Seating Chart</h2>

        <div className="section " style={{ marginBottom: '1rem' }}>
          <h3>Current Seating Chart</h3>
          {/* Add your seating chart image or visual here */}
        </div>

        <div className="section " style={{ marginBottom: 0 }}>
          <h3>Weekly Seating Rotation</h3>
          {/* Explain your rationale for changing seats weekly — 
              relationship building, behavior, grouping strategy, etc. */}
        </div>
      </div>

      {/* ── CLASSROOM MANAGEMENT ── */}
      <div className="section ">
        <h2>Classroom Management</h2>

        <div className="section " style={{ marginBottom: 0 }}>
          <h3>Behavior Escalation Plan</h3>
          {/* Outline your step-by-step escalation:
              e.g. nonverbal cue → proximity → private redirect → 
              cool down → parent contact → office referral */}
        </div>
      </div>

      {/* ── ANCHOR CHARTS ── */}
      <div className="section ">
        <h2>Anchor Charts</h2>
        {/* Add photos of your anchor charts here */}
        {/* Use a grid layout — example:
        <div className="photo-grid">
          <img src="/images/anchor-chart-1.jpg" alt="..." />
          <img src="/images/anchor-chart-2.jpg" alt="..." />
        </div> */}
      </div>

    </div>
  )
}