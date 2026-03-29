'use client'
import { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

const data = [
  [2,3,3,2],[2,0,0,0],[3,3,2,3],[3,4,4,4],[2,4,4,4],
  [4,4,4,4],[4,4,4,4],[1,4,2,1],[2,4,3,1],[4,4,3,4],
  [1,2,0,0],[2,2,1,3],[2,4,4,4],[1,3,3,2],[1,2,3,4],
  [4,4,4,4],[4,4,4,4],[1,2,3,2],[1,3,3,2],[4,3,2,2],
  [1,2,3,3],[2,3,4,4],[3,4,4,4],[4,4,4,4],[4,4,4,2],
  [2,4,4,2],[3,3,3,1],[4,4,4,2],
]

const questions = [
  'Q1: Equivalent Expressions',
  'Q2: Fill in the Exponent',
  'Q3: True or False',
  'Q4: Simplify Expressions',
]

const colors = ['#c17f3e', '#8a7060', '#a06830', '#6b5040']

export default function ExponentsChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const n = data.length

  const stats = questions.map((q, i) => {
    const scores = data.map(row => row[i])
    const avg = scores.reduce((a, b) => a + b, 0) / n
    const proficient = scores.filter(s => s >= 3).length
    return { q, avg, proficient, pct: Math.round(proficient / n * 100) }
  })

  useEffect(() => {
    if (!chartRef.current) return
    const existing = Chart.getChart(chartRef.current)
    if (existing) existing.destroy()

    // Score distribution per question
    const labels = ['Score 0', 'Score 1', 'Score 2', 'Score 3', 'Score 4']
    const datasets = questions.map((q, qi) => {
      const counts = [0, 0, 0, 0, 0]
      data.forEach(row => { counts[Math.round(row[qi])]++ })
      return {
        label: q,
        data: counts,
        backgroundColor: colors[qi],
        borderRadius: 4,
      }
    })

    const chart = new Chart(chartRef.current, {
      type: 'bar',
      data: { labels, datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { autoSkip: false }, grid: { display: false } },
          y: {
            beginAtZero: true,
            ticks: { stepSize: 1 },
            title: { display: true, text: 'Number of students' },
          },
        },
      },
    })

    return () => { chart.destroy() }
  }, [])

  return (
    <div>
      {/* Metric cards */}
      <div className="cooldown-metrics">
        {stats.map(({ q, avg, pct }, i) => (
          <div key={i} className="cooldown-metric">
            <span className="cooldown-metric-label">{q.split(':')[0]}</span>
            <span className="cooldown-metric-value">{pct}%</span>
            <span className="cooldown-metric-sub">proficient · avg {avg.toFixed(1)}</span>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="cooldown-legend">
        {questions.map((q, i) => (
          <span key={i}>
            <span className="cooldown-legend-dot" style={{ background: colors[i] }} />
            {q}
          </span>
        ))}
      </div>

      {/* Chart */}
      <div style={{ position: 'relative', width: '100%', height: '260px', marginBottom: '2rem' }}>
        <canvas ref={chartRef} />
      </div>

      {/* Table */}
      <p style={{ fontSize: '0.8rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>Raw data</p>
      <div style={{ overflowX: 'auto' }}>
        <table className="cooldown-table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Q1: Equiv. Expressions</th>
              <th>Q2: Fill in Exponent</th>
              <th>Q3: True or False</th>
              <th>Q4: Simplify</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                <td style={{ color: 'var(--muted)' }}>Student {i + 1}</td>
                {row.map((score, j) => (
                  <td key={j} style={{
                    color: score === 0 ? '#b91c1c' : score === 1 ? '#e67505' : score === 2 ? '#e6aa05' : score === 3 ? '#15803d' : '#1d4ed8',
                    fontWeight: 'bold'
                  }}>
                    {score}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}