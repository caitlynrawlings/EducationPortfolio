// app/planning-and-preparation/page.tsx

export default function PlanningAndPreparation() {
  return (
    <div>
      <div className="page-header">
        <h1>Planning & Preparation</h1>
        <p>Demonstrating thoughtful planning, differentiation, and data-informed instruction</p>
      </div>

      {/* ── LESSON PLANS ── */}
      <div className="section ">
        <h2>Lesson Plans</h2>
        {/* Add your lesson plan content here */}
      </div>

      {/* ── DIFFERENTIATED MATERIALS ── */}
      <div className="section ">
        <h2>Differentiated Materials</h2>

        <div style={{ marginBottom: '2rem' }}>
          <h3>Content</h3>
          {/* How you differentiated WHAT students learned */}
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3>Process</h3>
          {/* How you differentiated HOW students learned */}
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3>Product</h3>
          {/* How you differentiated HOW students showed learning */}
        </div>
      </div>

      {/* ── ASSESSMENT TOOLS & DATA ANALYSIS ── */}
      <div className="section ">
        <h2>Assessment Tools & Data Analysis</h2>

        <div style={{ marginBottom: '2rem' }}>
          <h3>Assessment Tools</h3>
          {/* Describe the assessments you used */}
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3>Data Analysis</h3>
          {/* How you analyzed results and adjusted instruction */}
        </div>
      </div>

    </div>
  )
}