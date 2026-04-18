// app/the-classroom-environment/page.tsx
import Gallery from "../components/Gallery";

export default function BeyondTheClassroom() {
  return (
    <div >
      <div className="page-header">
        <h1>Beyond the Classroom</h1>
        <p>Blurb</p>
      </div>

        {/* The Intersection of Computer Science and Mathematics */}
        <div className="section " id="math">
            <h2>Computer Science and Mathematics</h2>
            <p>
            I use my background in computer science to design interactive ways for students to explore mathematical ideas. Rather than only working through static problems, students engage with concepts through dynamic models and simulations that make abstract ideas more tangible.
            </p>

            <p>
            Below are examples of tools and visualizations I’ve created, including interactive models that help students experiment, make predictions, and see how changing variables affects outcomes. These tools support a more exploratory approach to learning, where students can test ideas and build understanding through experience.
            </p>
            
            {/* <img src="/images/interactive-tools.png" alt="Screenshot of interactive tools" className="full-width-image" /> */}

        </div>

        {/* MATH CREATIVITY */}
        <div className="section gap-2" id="creativity-in-math">
            <h2>Creativity in Math</h2>
            <p>
            One way I explore this is through writing mathematical limericks—short, playful poems that capture concepts in a memorable way. These help show students that math isn’t just about correctness, but also about creativity, language, and making ideas your own.
            </p>

            <p>
            I was inspired to create these limericks through reading <em>Math Through the Ages</em>, which describes how Indian mathematicians in the 12th century often wrote mathematical problems in verse. This practice highlights a view of mathematics that extends beyond the purely practical into something expressive and artistic. Famous examples include writing by Bhaskara II, such as "The eighth part of a troop of monkeys, squared was skipping in a grove and delighted with their sport. Twelve remaining monkeys wer seen on the hill, amused with chattering to each other. How many were there in all?"
            </p>

            <p>
            While mathematics was developed as a tool, it has also become a medium for creative expression. I want students to experience that side of math—to see it not only as something to solve, but as something they can create with.
            </p>

            <img src="/images/limericks/functions.png" alt="Examples of math limericks" className="full-width-image" />
            <img src="/images/limericks/pythag.png" alt="Examples of math limericks" className="full-width-image" />
            <img src="/images/limericks/scale.png" alt="Examples of math limericks" className="full-width-image" />


        </div>

        {/* MUST READS */}
        <div className="section gap-2" id="must-reads">
            <h2>Must Reads</h2>
            <p>
            </p>
        


        </div>

    </div>
  )
}