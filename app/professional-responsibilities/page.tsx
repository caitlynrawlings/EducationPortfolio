// app/professional-responsibilities/page.tsx

export default function ProfessionalResponsibilities() {
  return (
    <div>
      <div className="page-header">
        <h1>Professional Responsibilities</h1>
        <p>Demonstrating professionalism, collaboration, and commitment to the broader school community</p>
      </div>

      {/* ── UNIT MESSAGES ── */}
      <div className="section ">
        <h2>General Parent Updates</h2>
        <p>
          The following unit messages were drafted by me and sent to families 
          by my mentor teacher through ParentSquare, our school's family 
          communication platform. These messages kept families informed of 
          upcoming units, learning objectives, and ways to support their student at home.
        </p>
        <div className="artifact-block">
          <div className="artifact-meta">Final ParentSquare Message Content · Sent March 2026</div>
          <p><strong>Upcoming Math Units: Scale Copies and Circle Measurements (7th Grade)</strong></p>
          <br />
          <p><strong>Unit: Scale Copies</strong></p>
          <p>
            In this one-week unit, students will explore how scaling shapes by different
            factors affects measurements like side length and area. This is a great opportunity
            to review proportionality, a concept we covered earlier in the school year.
          </p>
          <p><em>Note: There will be no unit test on scale copies.</em></p>
          <br />
          <p><strong>Unit: Circle Measurements</strong></p>
          <p>
            Following scale copies, we'll spend one week on circle measurements, including
            radius, diameter, circumference, and area. This unit includes a summative assessment.
          </p>
          <p><em>Testing Date: Week of March 23rd</em></p>
          <br />
          <p>
            Khan Academy offers excellent practice problems for both units. If your student
            would like additional opportunities to strengthen their skills, these free resources
            are a wonderful option.
          </p>
          <br />
          <p>
            If you have any questions about expectations or support at home, feel free to
            reach out. Thank you for your continued support!
          </p>
        </div>

        <div className="artifact-block">
          <div className="artifact-meta">Email to Mentor Teacher · Draft Submission</div>
          <img src="/images/communication1.png" alt="Draft of email sent to mentor teacher for review" />
        </div>

        {/* <div className="artifact-block">
          <div className="artifact-meta">ParentSquare Message · Sent to 8th Grade Families</div>
          <p><strong>Upcoming Math News: Pythagorean Theorem Assessment & New Volume Unit (8th Grade)</strong></p>
          <br />
          <p><strong>Upcoming Test: Current Pythagorean Theorem Unit</strong></p>
          <p>
            Your student has a test coming up this week on our unit. This is a great time to encourage them to review their notes and practice any concepts they found challenging. Khan Academy has excellent resources if your student would like additional practice before the assessment.
          </p><br />
          <br />
          <p><strong>Upcoming Unit: Volume - Cylinders, Cones, and Spheres</strong></p>
          <p>
            Following this week's test, we will begin a new unit on the volume of cylinders, cones, and spheres. Students will build on what they already know about volume and apply those skills to three-dimensional curved shapes. This unit will include a summative assessment.
          </p><br />
          <p><em>Testing Date: Week of March 23rd</em></p>
          
          <br />
          <p>
            If you have any questions about expectations or support at home, feel free to reach out. 
          </p>
        </div> */}
      </div>

      {/* ── PARENT COMMUNICATION ── */}
      <div className="section">
        <h2>Parent Communication About Student Behavior</h2>
        <p>
          The following emails were drafted by me and sent by my mentor teacher to families 
          of students in my classes. These communications reflect my commitment to maintaining 
          open, professional, and timely communication with families regarding student behavior. 
          This particular class had become increasingly challenging to manage, so I made the 
          decision to proactively reach out to families to address disruptive behaviors and 
          enlist their support. I also made a point to send positive emails home to students 
          in this class who were making good choices, reinforcing those behaviors and 
          expressing appreciation for students who were serving as positive role models for their peers.
        </p>
          <div className="artifact-block">
            <div className="artifact-meta">Body of Positive Behavior Email · Sent March 2026</div>
              I hope you are doing well. I wanted to reach out to let you know how much I have appreciated [Student's Name] in 6th period math class.
              <br /><br />
              Over the past few weeks, this class has become increasingly difficult to manage, with many students being disruptive and making 
              it hard to teach. [Student's Name], however, has been a student I can consistently count on to not contribute to the distracting environment. 
              That kind of behavior does not go unnoticed, and it makes a real positive difference in the class.
              <br /><br />
              I appreciate your support at home, as it clearly shows in the classroom.
              <br /><br />
              Please don't hesitate to reach out with any questions.
              <br /><br />
          </div>

          <div className="artifact-block">
            <div className="artifact-meta">Body of Behavior Concern Email · Sent March 2026</div>
              I hope you are doing well. I wanted to reach out regarding [Student's Name]'s behavior in 6th period math.
              <br /><br />
              Over the past few weeks, our class has become increasingly unruly, with many students talking or yelling over me and making it difficult to teach. Unfortunately, [Student's Name] has been contributing to this environment. Despite repeated reminders, the behavior has continued.
              <br /><br />
              I was hoping you could have a conversation with [Student's Name] about this. I appreciate your support in helping keep our classroom a positive and productive place.
              <br /><br />
              Please don't hesitate to reach out with any questions.
              <br /><br />
          </div>

      
        
      </div>

      {/* ── DEPARTMENT & TEAM MEETINGS ── */}
      <div className="section ">
        <h2>Department & Team Meetings</h2>

        <div className="section " style={{ marginBottom: '1rem' }}>
          <h3>Math Department Meeting Notes</h3>
          {/* Your notes from math department meetings */}
        </div>

        <div className="section " style={{ marginBottom: '1rem' }}>
          <h3>PLC Agendas</h3>
          {/* PLC agendas you participated in or contributed to */}
        </div>

        <div className="section " style={{ marginBottom: 0 }}>
          <h3>Staff Meeting Notes</h3>
          {/* Notes from whole-staff meetings */}
        </div>
      </div>

      {/* ── PROFESSIONAL DEVELOPMENT ── */}
      <div className="section ">
        <h2>Professional Development</h2>

        <div className="section " style={{ marginBottom: '1rem' }}>
          <h3>Professional Development Day Notes</h3>
          {/* Your notes and takeaways from the PD day you attended */}
        </div>

        <div className="section " style={{ marginBottom: 0 }}>
          <h3>Professional Development Certificates</h3>
          {/* Upload or display any certificates earned */}
        </div>
      </div>

      {/* ── IEP MEETINGS ── */}
      <div className="section ">
        <h2>IEP & Student Support Meetings</h2>
        {/* Notes or reflections from IEP meetings you attended —
            be mindful of student privacy, avoid including names
            or identifying details */}
      </div>

    </div>
  )
}