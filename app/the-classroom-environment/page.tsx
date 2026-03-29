// app/the-classroom-environment/page.tsx
import Gallery from "../components/Gallery";
import basePath from "../utils/basePath";

export default function TheClassroomEnvironment() {
  return (
    <div>
      <div className="page-header">
        <h1>The Classroom Environment</h1>
        <p>Creating a safe, respectful, and well-organized learning environment</p>
      </div>

      {/* ── ROOM LAYOUT ── */}
      <div className="section" id="room-layout">
        <h2>Room Layout & Table Arrangements</h2>
        <p className="blurb">
          The physical arrangement of a classroom communicates expectations and shapes 
          how students interact with each other and with the teacher. The following 
          diagrams document two arrangements used during my student teaching placement 
          and the reasoning behind the transition between them.
        </p>

        <div className="artifact-block" style={{ marginBottom: '1.5rem' }}>
          <div className="artifact-meta">Original Arrangement · 10 Table Groups · January 2026</div>
          <p>
            When I entered my student teaching placement, the classroom was arranged in 
            ten table groups. This arrangement was designed to facilitate collaborative 
            work and peer discussion, with students seated in small groups facing each other.
          </p>
          <Gallery slides={[
            { images: [`${basePath}/images/floorPlan/10Tables.png`], caption: 'Blank room diagram' },
            { images: [`${basePath}/images/floorPlan/10TablesLabeled.jpg`], caption: 'Labeled room diagram' },
          ]} />
        </div>

        <div className="artifact-block">
          <div className="artifact-meta">Revised Arrangement · Horseshoe · February 2026</div>
          <p>
            After observing the class for several weeks, my mentor teacher and I made the 
            collaborative decision to transition to a horseshoe arrangement. This change 
            was driven by the behavioral dynamics of the class — the table group arrangement 
            made it difficult to maintain student focus and manage off-task conversations 
            between students. The horseshoe arrangement allowed every student to face the 
            board, reduced opportunities for disruptive side conversations, and gave me 
            easier access to all students during instruction and independent work.
          </p>
          <Gallery slides={[
            { images: [`${basePath}/images/floorPlan/horseShoeTables.png`], caption: 'Blank room diagram' },
            { images: [`${basePath}/images/floorPlan/horseShoeTablesLabeled.jpg`], caption: 'Labeled room diagram' },
          ]} />

          <div className="callout">
            <span className="label">Reflection</span>
            The decision to transition to the horseshoe arrangement was one of the most 
            meaningful classroom environment changes I experienced during my placement. 
            Working collaboratively with my mentor teacher to identify a need and agree 
            on a solution gave me valuable experience in the kind of reflective, shared 
            decision-making that effective teachers engage in regularly. The new arrangement 
            oriented all students toward the board and toward me during instruction, which 
            improved sight lines and made it easier to maintain whole-class engagement. 
            It also created natural walkways throughout the room, allowing me to move 
            freely between students during independent work and providing easier access 
            for proximity-based redirection. Importantly, the horseshoe still allowed 
            students at neighboring tables to collaborate, preserving the cooperative 
            dynamic of the original arrangement while better supporting instructional flow. 
            This experience reinforced for me that the physical environment is not a neutral 
            backdrop to learning — thoughtful arrangement can quietly support both instruction 
            and student interaction at the same time.
          </div>
        </div>

      </div>

      {/* ── SEATING CHART ── */}
      <div className="section " id="seating-chart">
        <h2>Seating Chart</h2>

        <div style={{ marginBottom: '2rem' }}>
          <p className="blurb">I used the seating chart system that my mentor teacher used. Her systems involved changing the seating 
            chart every week. The following images show how I displayed the seating chart for each week. 
          </p>

          <div className="artifact-block">
            <div className="artifact-meta">Seating Chart · Student Teaching Placement</div>

            <Gallery slides={[
              { images: [`${basePath}/images/seatingChart/10Tables.png`], caption: '10 Tables' },
              { images: [`${basePath}/images/seatingChart/horseShoe.png`], caption: 'Horse Shoe Tables' },
            ]} />
            <p>This is how I display the seating chart. It displays each "student" would have a student name. For the 10 tables seating arrangement,
            I this tells the students which table they are seated at, but not which seat at the table. This allows for come flexibility in 
            seating arrangements and encourages students to interact with different peers. The horseshoe seating specifies the exact seat that they should be seated in. </p>
          </div>
        </div>
      </div>



  {/* ── CLASSROOM MANAGEMENT ── */}
<div className="section" id="classroom-management">
  <h2>Classroom Management</h2>

  <div style={{ marginBottom: '2rem' }}>
    <p className="blurb">
      A consistent and fair approach to classroom management is essential to 
      maintaining a productive learning environment. The following outlines the 
      strategies and escalation steps I used during my student teaching placement, 
      prioritizing positive reinforcement and the least disruptive intervention 
      before escalating further. This plan reflects both my own approach and the 
      school's established protocols.
    </p>

    <div className="artifact-block">
      <div className="artifact-meta">Behavior Management Approach · Student Teaching Placement</div>

      <p><strong>Proactive Strategies</strong></p>
      <ul>
        <li>
          <strong>Positive praise</strong> — Actively and publicly recognize students 
          who are on task and making good choices to reinforce expected behaviors 
          and set a positive tone for the class.
        </li>
        <li>
          <strong>Proximity</strong> — Move near students who are becoming disruptive 
          to redirect behavior without interrupting instruction or drawing attention 
          to the student.
        </li>
      </ul>

      <br />

      <p><strong>Escalation Steps — Disruptive Behavior</strong></p>
      <ol style={{ paddingLeft: '1.25rem', margin: 0 }}>
        <li style={{ marginBottom: '0.75rem', lineHeight: '1.8' }}>
          <strong>Verbal warning</strong> — Issue one clear, private warning addressing 
          the behavior directly.
        </li>
        <li style={{ marginBottom: '0.75rem', lineHeight: '1.8' }}>
          <strong>Step outside — teacher check-in</strong> — Ask the student to step 
          outside the classroom for a brief break. Check in with them privately to 
          discuss the behavior and determine whether they are ready to return and 
          re-engage productively.
        </li>
        <li style={{ marginBottom: '0.75rem', lineHeight: '1.8' }}>
          <strong>R&R (Reset and Restore)</strong> — If the behavior continues, 
          utilize the school's R&R protocol in which another staff member comes to 
          speak with the student and support them in resetting before returning to class.
        </li>
        <li style={{ marginBottom: '0.75rem', lineHeight: '1.8' }}>
          <strong>Second R&R</strong> — A second R&R referral for continued or 
          repeated behavior within the same class period.
        </li>
        <li style={{ lineHeight: '1.8' }}>
          <strong>Write-up</strong> — Repeated or escalating behavior that cannot 
          be resolved through the above steps results in a formal write-up submitted 
          to administration.
        </li>
      </ol>

      <br />

      <p><strong>Additional Responses</strong></p>
      <ul>
        <li>
          <strong>Repeated disruptive behavior across multiple days</strong> — Contact 
          home to inform the family, enlist their support, and work collaboratively 
          toward a solution.
        </li>
        <li>
          <strong>Non-disruptive disengagement</strong> — For students who are not 
          causing disruption but are consistently not engaging with the work, reach 
          out to families via email to open a conversation about how to better support 
          the student.
        </li>
      </ul>

      <div className="callout">
        <span className="label">Reflection</span>
        Developing and applying this approach was one of the most challenging and 
        valuable aspects of my student teaching placement. My 6th period class in 
        particular presented consistent behavioral challenges, which pushed me to 
        be intentional and systematic about how I responded to disruptions. I found 
        that leading with positive praise and proximity resolved the majority of 
        issues without interrupting instruction, and that checking in privately with 
        students before sending them to R&R was often enough to de-escalate the 
        situation and keep them in class. Reaching out to families — both for behavioral 
        concerns and to recognize positive behavior — also deepened my understanding 
        of how family communication and classroom management work together to support 
        a productive learning environment.
      </div>
    </div>
  </div>
</div>

      {/* ── ANCHOR CHARTS ──
      <div className="section " id="anchor-charts">
        <h2>Anchor Charts</h2>
        {/* Add photos of your anchor charts here */}
        {/* Use a grid layout — example:
        <div className="photo-grid">
          <img src="/images/anchor-chart-1.jpg" alt="..." />
          <img src="/images/anchor-chart-2.jpg" alt="..." />
        </div> 
      </div> */}

    </div>
  )
}