'use client'
import { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

const data = [
  [4,3,1],[4,3,4],[4,4,2],[1,4,1],[1,3,3],
  [4,4,4],[4,4,4],[4,4,1],[4,4,2],[4,4,3],
  [1,3,4],[0,0,2],[4,3,4],[1,4,3],[1,3,4],
  [4,4,3],[4,4,4],[2,4,3],[4,2,4],[4,4,4]
]

export default function CooldownChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!chartRef.current) return

    const existing = Chart.getChart(chartRef.current)
    if (existing) existing.destroy()

    const q1Counts = [0,0,0,0,0]
    const q2Counts = [0,0,0,0,0]
    data.forEach(row => { q1Counts[row[0]]++; q2Counts[row[1]]++ })

    const chart = new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels: ['Score 0', 'Score 1', 'Score 2', 'Score 3', 'Score 4'],
        datasets: [
          { label: 'Q1: Standard → Scientific', data: q1Counts, backgroundColor: '#c17f3e', borderRadius: 4 },
          { label: 'Q2: Scientific → Standard', data: q2Counts, backgroundColor: '#8a7060', borderRadius: 4 }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { ticks: { autoSkip: false }, grid: { display: false } },
          y: { beginAtZero: true, ticks: { stepSize: 1 }, title: { display: true, text: 'Number of students' } }
        }
      }
    })

    return () => { chart.destroy() }
  }, [])

  const q1Avg = (data.reduce((s, r) => s + r[0], 0) / data.length).toFixed(1)
  const q2Avg = (data.reduce((s, r) => s + r[1], 0) / data.length).toFixed(1)

  return (
    <div>
      <div className="cooldown-metrics">
        <div className="cooldown-metric">
          <span className="cooldown-metric-label">Q1 avg score</span>
          <span className="cooldown-metric-value">{q1Avg}</span>
          <span className="cooldown-metric-sub">Standard → Scientific</span>
        </div>
        <div className="cooldown-metric">
          <span className="cooldown-metric-label">Q2 avg score</span>
          <span className="cooldown-metric-value">{q2Avg}</span>
          <span className="cooldown-metric-sub">Scientific → Standard</span>
        </div>
        <div className="cooldown-metric">
          <span className="cooldown-metric-label">Students assessed</span>
          <span className="cooldown-metric-value">20</span>
          <span className="cooldown-metric-sub">Total responses</span>
        </div>
      </div>

      <div className="cooldown-legend">
        <span><span className="cooldown-legend-dot" style={{ background: '#c17f3e' }} />Q1: Standard → Scientific</span>
        <span><span className="cooldown-legend-dot" style={{ background: '#8a7060' }} />Q2: Scientific → Standard</span>
      </div>

      <div style={{ position: 'relative', width: '100%', height: '260px', marginBottom: '2rem' }}>
        <canvas ref={chartRef} />
      </div>

      <p style={{ fontSize: '0.8rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>Raw data</p>
      <div style={{ overflowX: 'auto' }}>
        <table className="cooldown-table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Q1: Standard → Scientific</th>
              <th>Q2: Scientific → Standard</th>
              <th>Self-rating</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                <td style={{ color: 'var(--muted)' }}>Student {i + 1}</td>
                <td style={{ color: row[0] === 0 ? '#b91c1c' : row[0] === 1 ? '#e67505' : row[0] === 2 ? '#e6aa05' : row[0] === 3 ? '#15803d' : '#1d4ed8', fontWeight: 'bold' }}>{row[0]}</td>
                <td style={{ color: row[1] === 0 ? '#b91c1c' : row[1] === 1 ? '#e67505' : row[1] === 2 ? '#e6aa05' : row[1] === 3 ? '#15803d' : '#1d4ed8', fontWeight: 'bold' }}>{row[1]}</td>
                <td style={{ color: 'var(--muted)' }}>{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}