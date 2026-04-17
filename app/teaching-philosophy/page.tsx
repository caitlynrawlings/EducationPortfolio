// app/the-classroom-environment/page.tsx
import Gallery from "../components/Gallery";

export default function TeachingPhilosophy() {
  return (
    <div >
      <div className="page-header">
        <h1>Teaching Philosophy</h1>
        <p>My teaching philosophy is built on five pillars that reflect what I believe are my core responsibilities as an educator: Content Knowledge, Instructional Practice, Building Community, Developing Lifelong Skills, and Professional Growth. These pillars do not represent skills I have perfected, but rather ideals I continually strive toward in my teaching.</p>
      </div>

        {/* CONTENT KNOWLEDGE */}
        <div className="section gap-2" id="content-knowledge">
            <h2>Content Knowledge</h2>
            <p>
                Content knowledge is my understanding of the mathematics I teach and how concepts connect across topics. Strong content knowledge allows me to present material accurately, anticipate student misconceptions, and build meaningful connections between ideas.
            </p>
            <p>
                In practice, this includes understanding prerequisite skills, recognizing where concepts lead next, and incorporating both the historical context and real-world applications of mathematics.

            </p>
            <p>
                To implement this, I continuously deepen my own understanding by studying multiple solution strategies, reflecting on student thinking, and seeking out new ways to explain concepts. This allows me to meet students where they are, extend their thinking, and support a deeper, more connected understanding of mathematics.
            </p>

        </div>

        {/* INSTRUCTIONAL PRACTICE */}
        <div className="section gap-2" id="instructional-practice">
            <h2>Instructional Practice</h2>
            <p>
                Instructional practice refers to the methods and strategies I use to support student learning. Effective instruction is intentional, responsive, and grounded in research-based practices.
            </p>

            <p>
                In practice, this includes scaffolding complex ideas, differentiating instruction to meet diverse needs, designing meaningful tasks, and providing timely, actionable feedback. It also involves encouraging productive struggle and maintaining high expectations for all students.
            </p>

            <p>
                To implement this, I design lessons that balance support with challenge, use formative assessment to guide instruction, and adjust my teaching based on student understanding. I also incorporate real-world contexts and multiple representations to make learning more accessible and engaging.
            </p>

        </div>

        {/* BUILDING COMMUNITY */}
        <div className="section gap-2" id="building-community">
            <h2>Building Community</h2>
            <p>
                Building community involves creating a classroom environment where students feel safe, respected, and willing to take academic risks. A strong classroom community supports both learning and student well-being.
            </p>
            <p>
                In practice, this includes establishing clear expectations, building consistent routines, reinforcing positive behavior, and fostering respectful communication. It also extends beyond the classroom through communication with families and collaboration with colleagues.
            </p>
            <p>
                To implement this, I prioritize relationship-building, maintain consistent expectations, and create opportunities for all students to participate. I also communicate regularly with families and work to ensure every student feels valued and supported in the classroom.
            </p>


        </div>

        {/* DEVELOPING LIFELONG SKILLS */}
        <div className="section gap-2" id="developing-lifelong-skills">
            <h2>Developing Lifelong Skills</h2>
            <p>
                Developing lifelong skills means helping students build abilities that extend beyond content knowledge, such as critical thinking, problem-solving, collaboration, and self-reflection.
            </p>
            <p>
                In practice, this includes engaging students in tasks that require reasoning, encouraging multiple approaches to problem-solving, and providing opportunities for collaboration and reflection.
            </p>
            <p>
                To implement this, I design activities that promote deep thinking and discussion, explicitly teach problem-solving strategies, and encourage students to reflect on their learning process. My goal is to help students become independent, confident learners who can apply their skills beyond the classroom.
            </p>

        </div>

        {/* PROFESSIONAL GROWTH */}
        <div className="section gap-2" id="professional-growth">
            <h2>Professional Growth</h2>
            <p>
                
Professional growth is my commitment to continuously improving as an educator. Teaching is an evolving practice that requires reflection, learning, and adaptation.
            </p>
            <p>
                In practice, this includes reflecting on lessons, seeking feedback, collaborating with colleagues, and staying informed about effective teaching strategies.
            </p>
            <p>
                To implement this, I regularly reflect on my teaching, actively seek input from mentors and peers, and engage in professional learning opportunities. By modeling a growth mindset, I aim to improve my practice and better support my students.
            </p>

        </div>

    </div>
  )
}