// app/beyond-the-classroom/page.tsx
import Gallery from "../components/Gallery"

export default function BeyondTheClassroom() {
  return (
    <div >
       <div className="page-header">
        <h1>Beyond the Classroom</h1>
        <p>
          A look at the interests, projects, and ideas that shape how I think 
          about mathematics and teaching.
        </p>
      </div>

        {/* ── COMPUTER SCIENCE AND MATHEMATICS ── */}
      <div className="section" id="cs-and-math">
        <h2>Computer Science and Mathematics</h2>
        <p className="blurb">
          I use my background in computer science to design interactive ways for 
          students to explore mathematical ideas. Rather than only working through 
          static problems, students engage with concepts through dynamic models and 
          simulations that make abstract ideas more tangible. Below are examples of 
          tools and visualizations I have created interactive models that help 
          students experiment, make predictions, and engage with math in a more hands-on way. 
        </p>

            <div style={{ marginBottom: '2rem' }}>
          <h3>Simulations</h3>
          <div className="artifact-block">
            <div className="artifact-meta">Interactive Simulation · Volume of 3D Shapes</div>
            <p>
              I created an <a href="https://caitlynrawlings.github.io/SandCastle/" target="_blank" rel="noopener noreferrer">interactive sand castle builder</a> for 
              students learning to calculate the volume of cylinders, cones, and spheres. 
              Students must calculate the volume of each shape before placing it, giving them immediate feedback on their calculations as they see the shape take up space in the "sandbox". 
              This calculation is further grounded in the idea that they are tracking the amount of sand they are using because  
              they are given a real-world constraint of the total amount of "sand" available. This turns 
              volume calculation from a drill exercise into a design challenge with a 
              meaningful purpose.
            </p>
            <div
  style={{
  marginTop: '1.25rem',
  marginBottom: '1.25rem',
  padding: '1rem 0',
  borderTop: '1px solid var(--border)',
  borderBottom: '1px solid var(--border)',
}}
>
  <p style={{ fontWeight: '600', marginBottom: '0.75rem' }}>
    Try it out — add a cylinder with radius 3 and height 5 (volume = 141.37), or build your own!
  </p>

  <div
    style={{
      overflow: 'hidden',
      border: '1px solid var(--border)',
    }}
  >
    <iframe
      src="https://caitlynrawlings.github.io/SandCastle/"
      width="100%"
      height="500px"
      title="Interactive Sand Castle Simulation"
      style={{ display: 'block', border: 'none' }}
    />
  </div>
</div>
<p>Below are some examples of what the completed sand castles can look like.</p>
            <Gallery slides={[
              { images: [`/images/projects/sandcastle.png`], caption: 'Example 1' },
              { images: [`/images/projects/sandcastle2.png`], caption: 'Example 2' },
            ]} />
          </div>
        </div>

            <div style={{ marginBottom: '2rem' }}>
                <h3>GeoGebra Activities</h3>
                <p className="blurb">
                    I designed the following GeoGebra activities to give students a more 
                    exploratory introduction to geometric theorems. Rather than presenting 
                    a rule to memorize, each activity invites students to manipulate 
                    mathematical objects, notice patterns, and develop the theorem themselves 
                    through observation and reasoning. Building these tools required 
                    programming, instructional design, and a clear understanding of how to 
                    make abstract concepts accessible and engaging.
                </p>
                <div className="artifact-block" style={{ marginBottom: '1.5rem' }}>
                    <div className="artifact-meta">Vertical Angles</div>
                    <p>
                    Students explore the Vertical Angle Theorem by manipulating intersecting 
                    lines and observing how angle measures change in real time. As they adjust 
                    the lines, they notice that vertical angles remain equal regardless of how 
                    the lines move, developing the theorem through pattern recognition before 
                    moving into formal proof. This was designed for high school geometry students. 
                    </p>
                    <Gallery slides={[
                    { images: [`/images/geogebra/vert1.png`], caption: 'Exploring the Relationship of Vertical Angles' },
                    { images: [`/images/geogebra/vert2.png`], caption: 'Examining the Measure of Vertical Angles' },
                    { images: [`/images/geogebra/vert3.png`], caption: 'Proof Construction for Vertical Angle Theorem' },
                    ]} />
                    <a href="https://www.geogebra.org/m/ncghucqv" target="_blank" rel="noopener noreferrer" className="simple-link" style={{ display: 'inline-block', marginTop: '0.75rem' }}>
                    Open activity in GeoGebra →
                    </a>
                </div>

                <div className="artifact-block">
                    <div className="artifact-meta">Pythagorean Theorem</div>
                    <p>
                    Students build and compare squares on each side of a right triangle, 
                    using sliders to explore how the areas change. They notice a consistent relationship: the combined area of the squares on the legs always matches the area of the square on the hypotenuse, before expressing this relationship algebraically and using it to solve for unknown side lengths.
                    </p>

                    <Gallery 
                        slides={[
                            { images: [`/images/geogebra/pythag1.png`], caption: 'Exploring Square Sides' },
                            { images: [`/images/geogebra/pythag2.png`], caption: 'Examining the Relationship' },
                            { images: [`/images/geogebra/pythag3.png`], caption: 'Starting to Generalize the Pythagorean Theorem' },
                    ]} />

                    <a href="https://www.geogebra.org/m/vcms4kpn" target="_blank" className="simple-link">Open activity in GeoGebra →</a>

                    <div className="callout">
                        <span className="label">My Reflection</span>
                        I used this activity in a lesson introducing the Pythagorean theorem to 8th grade students. 
                        I was surprised by how quickly they noticed the relationship between the areas, and how engaged 
                        they were in testing different triangles and seeing the pattern hold. This reinforced for me the 
                        value of giving students opportunities to explore and discover mathematical relationships on their 
                        own, rather than only presenting rules for them to memorize.
                    </div>
                </div>

                <div className="artifact-block">
                    <div className="artifact-meta">Triangle Inequality Theorem</div>
                   <p>
                    Students investigate when three side lengths can form a triangle by testing 
                    different combinations and observing the results. By comparing valid and 
                    invalid cases, they discover that a triangle can only be formed when the 
                    sum of any two side lengths is greater than the third. This is supposed to help them develop an intuition for the  
                    Triangle Inequality Theorem through reasoning and counterexamples rather 
                    than memorization.
                    </p>


                    <Gallery 
                        slides={[
                            { images: [`/images/geogebra/tri1.png`], caption: 'Testing Triangle Side Lengths - Valid Case' },
                            { images: [`/images/geogebra/tri2.png`], caption: 'Testing Triangle Side Lengths - Invalid Case' },
                            { images: [`/images/geogebra/tri3.png`], caption: 'Exploring the Relationship of Triangle Side Lengths' },
                    ]} />

                    <a href="https://www.geogebra.org/m/cr3tgnw8" target="_blank" className="simple-link">Open activity in GeoGebra →</a>

                    <div className="callout">
                        <span className="label">My Reflection</span>
                        I used this activity in a lesson introducing the triangle inequality theorem to 7th grade students. 
                        I enjoyed the conversations that came up as students tested different combinations of side lengths and 
                        started to realize that with some side lengths they could not form a triangle. They tried to explain 
                        why some worked and others didn’t. It was rewarding to see them develop an intuitive understanding of 
                        the theorem through exploration and reasoning, rather than just memorizing a rule.
                    </div>
                </div>
                
            </div>

        <div style={{ marginBottom: '2rem' }}>
                <h3>Pixel Art Activity Creator</h3>
                <p className="blurb">
                    My mentor teacher assigned pixel arts to students occasionally as a fun way to practice material and get immediate feedback on whether their answers were correct. I created a tool that allows teachers to easily generate pixel art templates from any image, making it easy to create custom pixel art activities for students. Teachers can upload an image, adjust the pixelation level, and download a grid template that students can fill in based on their answers to questions. This tool streamlines the process of creating engaging pixel art activities and allows for more creativity in the types of images used.
                </p>
                <div className="artifact-block" style={{ marginBottom: '1.5rem' }}>
                    <div className="artifact-meta">Create Pixel Art Tool</div>
                    <a href="https://caitlynrawlings.github.io/pixel-art-creator/" target="_blank" rel="noopener noreferrer" className="simple-link" >
                    Open the tool →
                    </a>
                    <p style={{marginTop: '1rem'}}>
                    This shows an example of the use of the pixel art activity. When the student answers the question incorrectly, the answer will turn red, but if they answer correctly, the answer will turn green and the corresponding square in the grid will be filled in, allowing them to see their progress as they work through the problems. This provides immediate feedback and a visual representation of their learning, making it a fun and effective way to practice material.
                    </p>
                    <Gallery slides={[
                    { images: [`/images/pixelArt/wrong.png`], caption: 'Incorrect Answer' },
                    { images: [`/images/pixelArt/right.png`], caption: 'Correct Answer' },
                    ]} />

                    <p>This shows the steps of interacting with the website to create a pixel art template.</p>
                    <Gallery slides={[
                    { images: [`/images/pixelArt/1.png`], caption: 'Step 1: Navigate to the Tool' },
                    { images: [`/images/pixelArt/2.png`], caption: 'Step 2: Upload Image' },
                    { images: [`/images/pixelArt/3.png`], caption: 'Step 3: Adjust Pixelation and Number of Colors' },
                    { images: [`/images/pixelArt/5.png`], caption: 'Step 4: Fill Out Questions and Answers' },
                    { images: [`/images/pixelArt/6.png`], caption: 'Step 5: Download Template' },
                    { images: [`/images/pixelArt/7.png`], caption: 'Step 6: Open Template in Excel' },
                    { images: [`/images/pixelArt/8.png`], caption: 'Step 7: Share Template with Students' },
                    ]} />

                    <p>This shows a completed pixel art.</p>
                    <Gallery slides={[
                    { images: [`/images/pixelArt/complete.png`], caption: 'Completed Pixel Art Activity' },
                    ]} />
                    
                </div>
            </div>


            

        </div>

        {/* ── CREATIVITY IN MATH ── */}
      <div className="section" id="creativity-in-math">
        <h2>Creativity in Math</h2>
        <p className="blurb">
          One way I explore the creative side of mathematics is through writing 
          mathematical limericks. The goal is to create short, playful poems that capture concepts in a 
          memorable way. I was inspired by reading{' '}
          <a href="https://www.amazon.com/Math-Through-Ages-Teachers-Mathematics/dp/0486832848" target="_blank" rel="noopener noreferrer">
            <em>Math Through the Ages</em>
          </a>
          , which describes how Indian mathematicians in the 12th century often wrote 
          mathematical problems in verse. Famous examples include writing by Bhaskara II, 
          who posed problems like: <em>"The eighth part of a troop of monkeys, squared, 
          was skipping in a grove... how many were there in all?"</em> This practice 
          highlights a view of mathematics that extends beyond the purely practical into 
          something expressive and artistic. I want students to experience that side of 
          math and see it not only as something to solve, but as something they can 
          create with.
        </p>

        <div className="artifact-block">
          <div className="artifact-meta">Math Limericks · Written and Illustrated by Caitlyn Rawlings</div>

          <img
            src={`/images/limericks/functions.png`}
            alt="Math limerick about functions and the vertical line test"
            style={{ maxWidth: '100%', borderRadius: '4px', marginBottom: '0.5rem', border: '1px solid var(--border)' }}
          />
          <p style={{ fontSize: '0.85rem', color: 'var(--muted)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
            Highlights the vertical line test for functions, with illustrations showing 
            multiple representations beyond only graphs.
          </p>

          <img
            src={`/images/limericks/pythag.png`}
            alt="Math limerick about the Pythagorean theorem"
            style={{ maxWidth: '100%', borderRadius: '4px', marginBottom: '0.5rem', border: '1px solid var(--border)' }}
          />
          <p style={{ fontSize: '0.85rem', color: 'var(--muted)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
            Covers properties of right triangles, including the Pythagorean theorem and 
            the hypotenuse as the longest side. Illustrations include a visual proof 
            and playful drawings of the squares and sides as characters.
          </p>

          <img
            src={`/images/limericks/scale.png`}
            alt="Math limerick about scale factors and area"
            style={{ maxWidth: '100%', borderRadius: '4px', marginBottom: '0.5rem', border: '1px solid var(--border)' }}
          />
          <p style={{ fontSize: '0.85rem', color: 'var(--muted)', fontStyle: 'italic' }}>
            Explores scale factors in geometry and addresses the common misconception 
            that scaling side lengths always results in a proportional change in area, 
            using the practical context of painting a wall.
          </p>
        </div>
      </div>

        
        {/* ── MUST READS ── */}
      <div className="section" id="must-reads">
        <h2>Must Reads</h2>
        <p className="blurb">
          My teaching is continually shaped by educators and researchers who emphasize 
          student thinking, exploration, and meaningful engagement with mathematics. 
          The following texts have had a significant influence on how I design lessons 
          and structure classroom experiences.
        </p>

        <div className="artifact-block">
          <div className="artifact-meta">Reading Shelf</div>

          <div style={{ marginBottom: '1.25rem' }}>
  <p style={{ fontWeight: 'bold', marginBottom: '0.35rem' }}>
    A Mathematician's Lament — Paul Lockhart
  </p>
  <p>
    This essay challenged my perspective on how mathematics is often taught, 
    arguing that traditional instruction can strip the subject of its creativity 
    and meaning. It reinforced my belief that math should be experienced as an 
    exploratory and artistic discipline, where students are encouraged to play, 
    conjecture, and discover ideas rather than follow rigid procedures.
  </p>
</div>

<div style={{ marginBottom: '1.25rem' }}>
  <p style={{ fontWeight: 'bold', marginBottom: '0.35rem' }}>
    The First Days of School — Harry Wong
  </p>
  <p>
    This book shaped my understanding of classroom management and the importance 
    of establishing clear expectations and routines from the very beginning. It 
    emphasized that a well-structured environment allows students to focus on 
    learning, and that consistency and clarity are key to building a positive 
    and productive classroom culture.
  </p>
</div>

          <div style={{ marginBottom: '1.25rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.35rem' }}>
              Building Thinking Classrooms in Mathematics — Peter Liljedahl
            </p>
            <p>
              This book has influenced how I structure collaborative work and design 
              tasks that promote deep thinking. It emphasizes creating environments 
              where students engage in genuine problem-solving and learn from one 
              another, rather than relying on direct instruction alone.
            </p>
          </div>

          <div>
            <p style={{ fontWeight: 'bold', marginBottom: '0.35rem' }}>
              Math Through the Ages — William P. Berlinghoff & Fernando Q. Gouvêa
            </p>
            <p>
              This book deepened my appreciation for the historical and creative dimensions 
              of mathematics, highlighting how mathematical ideas have been expressed across 
              cultures and time. It reinforced my goal of helping students see math as both 
              a human and creative endeavor.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}