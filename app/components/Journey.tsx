'use client'

import { style } from 'framer-motion/client'
import { useEffect, useRef, useState } from 'react'

const zones = [
  {
    icon: '📖',
    title: 'Early experiences in education',
    content:
      'In high school, I worked with elementary students at an after-school reading program. I loved seeing their excitement when they made progress and wanted to create that experience for more students.'
  },
  {
    icon: '📐',
    title: 'Precalculus tutor',
    content:
      'I was a precalculus tutor at the community college where I did Running Start. I helped peers break down complex concepts and develop confidence in their math skills.'
  },
  {
    icon: '🧁',
    title: 'Daycare volunteer',
    content:
      'The summer before college, I volunteered at a daycare center where I led weekly baking activities with elementary-aged students. I saw how hands-on, creative activities can make learning fun and memorable.'
  },
  {
    icon: '💻',
    title: 'CSE 369 teaching assistant',
    content:
      'In university, I served as a teaching assistant for CSE 369, where I helped students understand complex programming concepts. This experience showed me difficult material, while allowing me the experience of helping students learn through project-based assignments. I enjoyed supporting students in debugging code and seeing their progress over the quarter.'
  },
  {
    icon: '📊',
    title: 'Data science teaching assistant',
    content:
      'In university, I also worked as a teaching assistant for a high school data science program. I coached students through hands-on Tableau projects, helping them build data literacy skills and see the real-world applications of data science.'
  },
  {
    icon: '🏫',
    title: 'Substitute teaching',
    content:
      'After graduating, I worked as an emergency substitute teacher in a local school district. This experience gave me the opportunity to step into various classrooms across grade levels and subjects, applying consistent behavior management strategies and adapting to different teaching styles. I enjoyed maintaining productive learning environments and supporting students in their learning across diverse settings.'
  },
  {
    icon: '🍎',
    title: 'Student teaching',
    content:
      'Currently, I am a student teacher at a local middle school, where I design and deliver daily math instruction across multiple sections. I collaborate with my mentor teacher and PLC team to align instructional strategies and maintain ongoing family communication. This experience has solidified my passion for teaching and my commitment to supporting student growth.'
  },
  {
    icon: '🌱',
    title: 'Looking forward',
    content:
      'I am excited to continue growing as an educator and making a positive impact on students’ lives. I look forward to creating engaging, meaningful learning experiences that help students see the beauty and creativity in math, while supporting their growth as learners and individuals.'
  }
]
const SVG_W = 1400;
const SVG_H = 220;

const PATH_D =
  "M0,140 C120,100 200,170 350,130 S550,90 700,120 S900,155 1050,115 S1250,85 1400,125";

export default function Journey() {
  const [current, setCurrent] = useState(0);

  const stageRef = useRef<HTMLDivElement | null>(null);
  const worldRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  const [pts, setPts] = useState<{ x: number; y: number }[]>([]);

  const N = zones.length;

  // compute points along path
  useEffect(() => {
    if (!pathRef.current) return;

    const path = pathRef.current;
    const totalLen = path.getTotalLength();

    const getPtAtX = (targetX: number) => {
      let lo = 0,
        hi = totalLen;

      for (let i = 0; i < 60; i++) {
        const mid = (lo + hi) / 2;
        const pt = path.getPointAtLength(mid);
        if (pt.x < targetX) lo = mid;
        else hi = mid;
      }

      return path.getPointAtLength((lo + hi) / 2);
    };

    const xs = zones.map((_, i) => SVG_W * (0.05 + (i * 0.9) / (N - 1)));
    const computed = xs.map((x) => getPtAtX(x));

    setPts(computed);
  }, []);

  const stageW = () => stageRef.current?.getBoundingClientRect().width || 680;

  const worldOff = (idx: number) => {
    if (!pts[idx]) return 0;
    const px = pts[idx].x;
    const sw = stageW();
    return Math.min(0, Math.max(sw - SVG_W, sw / 2 - px));
  };

  const goTo = (idx: number, animate = true) => {
    const i = Math.max(0, Math.min(N - 1, idx));
    setCurrent(i);

    const wo = worldOff(i);
    const pt = pts[i];

    if (!worldRef.current || !pt) return;

    worldRef.current.style.transition = animate
      ? "transform 0.45s cubic-bezier(0.4,0,0.2,1)"
      : "none";

    worldRef.current.style.transform = `translateX(${wo}px)`;

    const walker = document.getElementById("walker");
    if (walker) {
      walker.style.left = `${pt.x}px`;
      walker.style.top = `${pt.y}px`;
    }
  };

  // keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goTo(current + 1);
      if (e.key === "ArrowLeft") goTo(current - 1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [current, pts]);

  // initial positioning
  useEffect(() => {
    if (pts.length) goTo(0, false);
  }, [pts]);

  return (
    <section id="journey">
      <div className="hero">
        <h1 className="hero-title">My Journey to Teaching</h1>
        <p className="hero-sub">
          The experiences that shaped who I am in the classroom.
        </p>
      </div>

      <div className="stage-wrap" ref={stageRef}>
        <div
          className="world"
          ref={worldRef}
          style={{ width: SVG_W, height: SVG_H }}
        >
          <svg
            width={SVG_W}
            height={SVG_H}
            viewBox={`0 0 ${SVG_W} ${SVG_H}`}
            style={{ position: "absolute", top: 0, left: 0 }}
          >
            <path
              ref={pathRef}
              d={PATH_D}
              fill="none"
              stroke="#C4603A"
              strokeWidth="1.5"
              strokeDasharray="5,7"
              opacity="0.4"
            />
          </svg>

          {pts.map((pt, i) => (
            <div
              key={i}
              className={`stop-node ${i === current ? "active" : ""}`}
              style={{ left: pt.x, top: pt.y }}
              onClick={() => goTo(i)}
            >
              <div className="stop-icon">{zones[i].icon}</div>
              <div
                className="stop-stem"
                style={{ height: 40 + (i % 3) * 10 }}
              />
              <div className="stop-dot" />
              <div className="stop-label">{zones[i].title}</div>
            </div>
          ))}

          <div id="walker" className="walker">
            <div className="walker-body">🚶‍♀️</div>
            <div className="walker-stem" />
            <div className="walker-dot" />
            <div className="walker-shadow" />
          </div>
        </div>
      </div>

      <div className="controls">
        <button onClick={() => goTo(current - 1)} disabled={current === 0} style={{ cursor: "pointer" }}>
          ←
        </button>

        <div className="dots-row">
          {zones.map((z, i) => (
            <button
              key={i}
              className={`nav-dot ${i === current ? "active" : ""}`}
              onClick={() => goTo(i)}
              
            />
          ))}
        </div>

        <button
          onClick={() => goTo(current + 1)}
          disabled={current === zones.length - 1}
          style={{ cursor: "pointer" }}
        >
          →
        </button>
      </div>

      <div className="card-area">
        {zones.map((z, i) => (
          <div
            key={i}
            className={`exp-card ${i === current ? "visible" : ""}`}
          >
            <div className="card-top">
              <div className="card-icon-wrap">{z.icon}</div>
              <div>
                <p className="card-num">
                  {String(i + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
                </p>
                <p className="card-title">{z.title}</p>
              </div>
            </div>

            <div className="card-line" />
            <p className="card-body">{z.content}</p>
          </div>
        ))}
      </div>

      <p className="hint-row">
        Tap any stop · or use ← →
      </p>
    </section>
  );
}