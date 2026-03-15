// app/instruction/page.tsx

export default function Instruction() {
  return (
    <div>
      <div className="page-header">
        <h1>Instruction</h1>
        <p>Demonstrating responsive, reflective, and feedback-driven teaching practice</p>
      </div>

      {/* ── WRITTEN FEEDBACK ON STUDENT WORK ── */}
      <div className="section ">
        <h2>Written Feedback on Student Work</h2>
        {/* Add photos or scans of marked student work here
            Consider showing before/after if you have it, or 
            a range across ability levels to show differentiated feedback */}
      </div>

      {/* ── PERSONAL REFLECTIONS ── */}
      <div className="section ">
        <h2>Personal Lesson Reflections</h2>

        <div className="section " style={{ marginBottom: '1rem' }}>
          <h3>Reflection</h3>
          {/* Your written reflections on specific lessons —
              what went well, what didn't, what you noticed */}
        </div>

        <div className="section " style={{ marginBottom: 0 }}>
          <h3>Adjustments Made</h3>
          {/* Concrete changes you made to subsequent lessons
              based on your own reflections */}
        </div>
      </div>

      {/* ── RESPONDING TO FEEDBACK RECEIVED ── */}
      <div className="section ">
        <h2>Responding to Feedback</h2>

        <div className="section " style={{ marginBottom: '1rem' }}>
          <h3>Feedback Received</h3>
          {/* Summarize feedback from your mentor teacher, 
              university supervisor, or formal observations */}
        </div>

        <div className="section " style={{ marginBottom: 0 }}>
          <h3>How I Responded & Adjusted</h3>
          {/* Specific changes you made in response to that feedback —
              this is one of the strongest things you can show an evaluator */}
        </div>
    </div>

    </div>
  )
}