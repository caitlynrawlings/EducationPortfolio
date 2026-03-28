// app/components/CooldownRubric.tsx

export default function CooldownRubric() {
  return (
    <div className="rubric-wrapper">

      <div className="rubric-section">
        <p className="rubric-title">Question 1 — Converting from standard to scientific notation</p>
        <table className="rubric-table">
          <thead>
            <tr>
              <th>Score</th>
              <th>Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="rubric-score">0</td>
              <td>Did not attempt</td>
            </tr>
            <tr>
              <td className="rubric-score">1</td>
              <td>No evidence of understanding</td>
            </tr>
            <tr>
              <td className="rubric-score">2</td>
              <td>Not an equivalent expression but written in the form <em>a × 10<sup>y</sup></em></td>
            </tr>
            <tr>
              <td className="rubric-score">3</td>
              <td>Equivalent expression written in the form <em>a × 10<sup>y</sup></em>, but <em>a</em> is not between 1 and 10 — or correct form and correct <em>a</em> with an incorrect exponent</td>
            </tr>
            <tr>
              <td className="rubric-score rubric-score-correct">4</td>
              <td>Correct</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="rubric-section">
        <p className="rubric-title">Question 2 — Converting from scientific to standard notation</p>
        <table className="rubric-table">
          <thead>
            <tr>
              <th>Score</th>
              <th>Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="rubric-score">0</td>
              <td>Did not attempt</td>
            </tr>
            <tr>
              <td className="rubric-score">1</td>
              <td>No evidence of understanding</td>
            </tr>
            <tr>
              <td className="rubric-score">2</td>
              <td>A number in standard form</td>
            </tr>
            <tr>
              <td className="rubric-score">3</td>
              <td>Correct digits in the correct order — trailing zeros are acceptable (e.g. 21750 or 21.75)</td>
            </tr>
            <tr>
              <td className="rubric-score rubric-score-correct">4</td>
              <td>Correct</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}