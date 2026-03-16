// app/planning-and-preparation/page.tsx

import Gallery from '../components/Gallery'


export default function PlanningAndPreparation() {
  return (
    <div>
      <div className="page-header">
        <h1>Planning & Preparation</h1>
        <p>Demonstrating thoughtful planning, differentiation, and data-informed instruction</p>
      </div>

      {/* ── LESSON PLANS ── */}
      <div className="section " id="lesson-plans">
        <h2>Lesson Plans</h2>
        {/* Add your lesson plan content here */}
      </div>

      {/* ── DIFFERENTIATED MATERIALS ── */}
      <div className="section " id="differentiated-materials">
        <h2>Differentiated Materials</h2>
        <p style={{ marginBottom: '2rem' }}>
          Effective differentiation means meeting students where they are by adjusting 
          what they learn, how they learn it, and how they demonstrate their understanding. 
          The artifacts below represent my approach to differentiation across three dimensions: 
          <strong> content</strong>, which addresses the knowledge and skills students are 
          working toward based on their readiness; <strong> process</strong>, which varies 
          the ways students engage with and make sense of material, including opportunities 
          for student choice and self-directed practice; and <strong> product</strong>, which 
          offers students multiple ways to demonstrate their learning and show what they know.
        </p>

        <div style={{ marginBottom: '2rem' }}>
          <h3>Content</h3>
          <p className="blurb">
            One method I used to differentiate content was by providing leveled practice materials for students. 
            This activity has all students start at the same problem and then move on to problems of increasing 
            difficulty after they demonstrate mastery of the previous level. This allows students to build confidence and 
            fluency with foundational skills before moving on to more complex applications, while also providing a clear 
            pathway for students who are ready to be challenged. The structure of the activity also allows for immediate 
            feedback and self-assessment, as students get their work checked at each level before progressing, 
            which supports a growth mindset and encourages perseverance.
          </p>
          {/* Extenstions for early finishers (leveled practice) */}
          <div className="artifact-block">
              <div className="artifact-meta">Pythagrean Theorem · March 2026</div>
              <Gallery slides={[
                { images: ['/images/pythagreanTheoremLeveledPractive/77a171b7-1.png'], caption: 'Level 1: Identifying the sides of a right triangle' },
                { images: ['/images/pythagreanTheoremLeveledPractive/77a171b7-2.png'], caption: 'Level 2: Solving for the hypotenuse' },
                { images: ['/images/pythagreanTheoremLeveledPractive/77a171b7-3.png'], caption: 'Level 3: Solving for legs and the hypotenuse' },
                { images: ['/images/pythagreanTheoremLeveledPractive/77a171b7-4.png'], caption: 'Level 4: Solving without a diagram and proving right triangles' },
                { images: ['/images/pythagreanTheoremLeveledPractive/77a171b7-5.png'], caption: 'Level 5: Proving right triangles and real-world application' },
                { images: ['/images/pythagreanTheoremLeveledPractive/77a171b7-6.png'], caption: 'Level 6: Real-world applications' },
                { images: ['/images/pythagreanTheoremLeveledPractive/77a171b7-7.png'], caption: 'Level 7: Extended thinking and challenge problems' },
              ]} />
              <p>
              Student work samples from this activity, including written feedback, 
              can be found in the <a href="/instruction#written-feedback">Instruction</a> domain.
            </p>
          </div>
            
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3>Process</h3>
          <p className="blurb">
            Differentiating by process means varying the ways students engage with and 
            make sense of content based on their individual needs and readiness. The 
            following lesson was designed around a student self-assessment in which 
            students reflected on their own confidence and understanding across three 
            skills within our scientific notation unit: converting between standard and 
            scientific notation, adding and subtracting with the same power of ten, and 
            adding and subtracting with different powers of ten. Based on their 
            self-assessment, students selected the practice problems most relevant to 
            their own areas of difficulty, giving them agency over their learning and 
            encouraging the development of self-monitoring skills. Rather than assigning 
            the same set of problems to every student, this approach allowed each student 
            to spend their practice time where it would be most meaningful for their 
            individual growth.
          </p>
          <div className="artifact-block">
  <div className="artifact-meta">Scientific Notation · February 2026</div>

  <p><strong>Step 1 — Student Self-Assessment</strong></p>
    <p>
      Students completed the following self-assessment to identify which skills 
      they wanted to focus their practice time on.
    </p>
    <div className="slideshow-image-wrap" style={{ cursor: 'default', marginTop: '0.75rem' }}>
      <img src="/images/scientificNotation/9803696c-1.png" alt="Student self-assessment — Scientific Notation" />
    </div>

  <br />

  <p><strong>Step 2 — Choice Practice Sheets</strong></p>
  <p>
    Based on their self-assessment, students selected from the following 
    six practice sheets targeting their identified areas of difficulty.
  </p>
  <Gallery slides={[
    {
      caption: 'Practice 1: Converting notations',
      images: [
        '/images/scientificNotation/21859b95-3.png',
      ]
    },
    {
      caption: 'Practice 2: Adding and subtracting with the same power of ten',
      images: [
        '/images/scientificNotation/21859b95-2.png',
      ]
    },
    {
      caption: 'Practice 3: Adding and subtracting with different powers of ten',
      images: [
          '/images/scientificNotation/21859b95-1.png',
        ]
      },
      {
      caption: 'Practice 4: Adding and subtracting with converting to scientific notation',
      images: [
        '/images/scientificNotation/21859b95-7.png',
      ]
    },
    {
      caption: 'Practice 5: Word problems with scientific notation',
      images: [
        
        '/images/scientificNotation/21859b95-5.png',
        '/images/scientificNotation/21859b95-6.png',
      ]
    },
    {
      caption: 'Practice 6: Challenge problems across all skills',
      images: [
        '/images/scientificNotation/40af05c2-1.png',
        '/images/scientificNotation/40af05c2-2.png',
        '/images/scientificNotation/40af05c2-3.png',
        '/images/scientificNotation/40af05c2-4.png',
      ]
    },
  ]} />
<p >
  Designing materials that allow students to self-direct their practice reflects the 
  planning work that happens before instruction begins. By anticipating the range of 
  student needs and preparing targeted practice options in advance, this activity 
  demonstrates how thoughtful planning creates the conditions for process differentiation 
  to happen naturally in the classroom.
</p>

</div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3>Product</h3>
          <p>
            While the school context limited summative assessment formats to traditional tests, 
            I varied the ways students demonstrated their formative understanding throughout 
            each unit by intentionally selecting different assessment formats based on the 
            nature of the lesson and learning objective. These included exit tickets, digital 
            polls, and written responses. This variety ensured that no single format 
            consistently advantaged or disadvantaged particular learners, and gave me 
            multiple windows into student thinking across different types of tasks.
          </p>
        </div>
      </div>

      {/* ── ASSESSMENT TOOLS & DATA ANALYSIS ── */}
      <div className="section " id="assessment-tools-and-data-analysis">
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