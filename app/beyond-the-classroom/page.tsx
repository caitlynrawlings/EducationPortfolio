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
            <p></p>

        </div>

        {/* MATH CREATIVITY */}
        <div className="section gap-2" id="creativity-in-math">
            <h2>Creativity in Math</h2>
            <p>
            </p>


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